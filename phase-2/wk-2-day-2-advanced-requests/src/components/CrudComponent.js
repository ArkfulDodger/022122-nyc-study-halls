import React, { useState, useEffect } from "react";

function CrudComponent (props) {
    const [state, setState] = useState([]);

    // state:       state
    // setState:    setState
    // state items: item
    // fetch url:   url

    useEffect(() => {
        fetch(`url`)
            .then( res => res.json())
            .then( data => setState(data))
            .catch( error => alert(error.message));
    }, [])

    const addItem = (newItemData) => {
        fetch(`url`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newItemData)
        })
            .then( res => res.json())
            .then( newItem => setState([...state, newItem]))
            .catch( error => alert(error.message));
    }

    const updateItem = (updatedItemData) => {
        fetch(`url/${updatedItemData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(updatedItemData)
        })
            .then( res => res.json())
            .then( updatedItem => {
                const updatedState = state.map( item => {
                    item.id === updatedItem.id ? updatedItem : item;
                })
                setState(updatedState);
            })
            .catch( error => alert(error.message));
    }

    const removeItem = (itemToRemove) => {
        fetch(`url/${itemToRemove.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then( res => {
                if (res.ok) {
                    const updatedState = state.filter( item => item.id !== itemToRemove.id)
                    setState(updatedState);
                } else {
                    alert('something went wrong');
                }
            })
            .catch( error => alert(error.message))
    }

    return (
        <div>
            <p>I exist!</p>
        </div>
    );
}

export default CrudComponent;