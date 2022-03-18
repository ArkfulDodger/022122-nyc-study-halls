import React, { useState } from 'react'

function TaxForm(props) {

  const defaultForm = {
    'income': "50000",
    'tax-bracket': "middle",
    'comments': "a comment"
  }

  const [formData, setFormData] = useState(defaultForm);

  const resetForm = () => setFormData(defaultForm);

  function onFormChange({ target: { name, value } }) {
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert(`You owe $${getOwedTaxes()} this year! Thank you for paying your taxes!`);
    console.log('Form is being submitted!')
    resetForm();
  }

  function getOwedTaxes() {
    switch (formData['tax-bracket']) {
      case 'low':
        return 0.5 * formData.income;
      case 'middle':
        return 0.2 * formData.income;
      case 'high':
        return 0.01 * formData.income;
      default:
        console.error('tax bracket not found');
        return 0;
    }
  }


  return (

    <>

    <form onSubmit={handleSubmit}>

      <label name="income">How much did you make last year?</label>
      <input type="number" name="income" value={formData.income} onChange={onFormChange} />

      <p>Based on your income, we'd suggest a tax bracket of <span>Service Drone</span></p>

      <label htmlFor="tax-bracket">What is your tax bracket?</label>

      <select name="tax-bracket" value={formData['tax-bracket']} onChange={onFormChange}>
        <option value="low">Service Drone</option>
        <option value="middle">Middle Class American</option>
        <option value="high">Been to Space</option>
      </select>

      <label htmlFor="comments">We value your feedback! Write a comment: </label>
      <textarea name="comments" value={formData.comments} onChange={onFormChange} />

      <input type="submit" value="Submit Taxes" />

    </form>

    <button type="button" onClick={resetForm}>Reset Form</button>

    </>

  )

}

export default TaxForm
