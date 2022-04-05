import React, { useState, useEffect } from "react";

function TestComponent (props) {
    const [chickens, setChickens] = useState([]);

    // state:		chickens
    // setState:	setChickens
    // state items:	chicken
    // fetch url:	http://localhost:3001/chickens
    
    useEffect(() => {
        fetch(`http://localhost:3001/chickens`)
            .then( res => res.json())
            .then( data => setChickens(data))
            .catch( error => alert(error.message));
    }, [])
    
    const addChicken = (newChickenData) => {
        fetch(`http://localhost:3001/chickens`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newChickenData)
        })
            .then( res => res.json())
            .then( newChicken => setChickens([...chickens, newChicken]))
            .catch( error => alert(error.message));
    }
    
    const updateChicken = (updatedChickenData) => {
        fetch(`http://localhost:3001/chickens/${updatedChickenData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(updatedChickenData)
        })
            .then( res => res.json())
            .then( updatedChicken => {
                const updatedChickens = chickens.map( chicken => {
                    chicken.id === updatedChicken.id ? updatedChicken : chicken;
                })
                setChickens(updatedChickens);
            })
            .catch( error => alert(error.message));
    }
    
    const removeChicken = (chickenToRemove) => {
        fetch(`http://localhost:3001/chickens/${chickenToRemove.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then( res => {
                if (res.ok) {
                    const updatedChickens = chickens.filter( chicken => chicken.id !== chickenToRemove.id);
                    setChickens(updatedChickens);
                } else {
                    alert('something went wrong');
                }
            })
            .catch( error => alert(error.message))
    }


    return (
        <div>
            something
        </div>
    );
}

export default TestComponent;