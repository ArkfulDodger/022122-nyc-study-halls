import React, { useState } from 'react'
import { SWEARWORDS } from '../data'


// STATIC VARIABLES
const defaultForm = {
  'income': "50000",
  'taxBracket': "middle",
  'comments': "a comment"
}


function TaxForm(props) {
  // STATE and DERIVED VARIABLES
  const [formData, setFormData] = useState(defaultForm);
  const { income, taxBracket, comments } = formData;

  const getSuggestedBracket = () => {
    switch (true) {
      case income <= 30000: return "Service Drone";
      case income > 30000 && income < 100000: return "Middle Class American";
      case income >= 100000: return "Been to Space";
      default:
        alert('failed to suggest tax bracket');
        return "[bracket not found]";
    }
  }


  // FORM SUBMISSION
  const getOwedTaxes = () => {
    switch (taxBracket) {
      case 'low': return 0.5 * income;
      case 'middle': return 0.2 * income;
      case 'high': return 0.01 * income;
      default:
        alert('tax bracket not found');
        return 0;
    }
  }

  const resetForm = () => setFormData(defaultForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You owe $${getOwedTaxes()} this year! Thank you for paying your taxes!`);
    resetForm();
  }


  // FORM CHANGE
  const validateTaxBracket = (formObj) => {
    if (formObj.taxBracket === "high" && formObj.income < 100000) {
      formObj.taxBracket = "middle";
    }
    if (formObj.taxBracket === "middle" && formObj.income < 30000) {
      formObj.taxBracket = "low";
    }
    return formObj.taxBracket;
  }

  const censorComments = (comments) => {
    const commentWords = comments.split(" ");
    const censoredWords = commentWords.map( word => {
      return SWEARWORDS.includes(word.toLowerCase()) ? word.replace(/./g, "*") : word;
    })
    const censoredComments = censoredWords.join(" ");
    return censoredComments
  }

  const validateFormData = (formObj) => {
    formObj.taxBracket = validateTaxBracket(formObj);
    formObj.comments = censorComments(formObj.comments);
    return formObj;
  }
  
  const onFormChange = ({ target: { name, value } }) => {
    const updatedFormData = { ...formData, [name]: value };
    const validatedFormData = validateFormData(updatedFormData);
    setFormData(validatedFormData);
  }


  // COMPONENT RETURN
  return (

    <>

    <form onSubmit={handleSubmit}>

      <label name="income">How much did you make last year?</label>
      <input type="number" name="income" value={income} onChange={onFormChange} />

      <p>Based on your income, we'd suggest a tax bracket of <span>{getSuggestedBracket()}</span></p>

      <label htmlFor="taxBracket">What is your tax bracket?</label>

      <select name="taxBracket" value={taxBracket} onChange={onFormChange}>
        <option value="low">Service Drone</option>
        <option value="middle">Middle Class American</option>
        <option value="high">Been to Space</option>
      </select>

      <label htmlFor="comments">We value your feedback! Write a comment: </label>
      <textarea name="comments" value={comments} onChange={onFormChange} />

      <input type="submit" value="Submit Taxes" />

    </form>

    <button type="button" onClick={resetForm}>Reset Form</button>

    </>

  )

}

export default TaxForm
