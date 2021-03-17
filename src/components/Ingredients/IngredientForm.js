import React, { memo, useState } from 'react'

import Card from '../UI/Card'
import './IngredientForm.css'

const IngredientForm = (props) => {

  // const inputState = useState({title: 'Milk', amount: ''})
  // const [inputState, setInputState] = useState({title: '', amount: ''})

  const [enterTitle, setenterdTitle] = useState('')
  const [enterAmount, setEnteredAmount] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    props.onAddIngredient({title: enterTitle, amount:enterAmount})
  }

  return (
    <section className='ingredient-form'>
      <Card>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='title'>Name</label>
            <input 
            type='text' 
            id='title' 
            value={enterTitle} 
            onChange={ (event) => setenterdTitle(event.target.value)} />
          </div>
          <div className='form-control'>
            <label htmlFor='amount'>Amount</label>
            <input type='number' id='amount' value={enterAmount} onChange={(event) => setEnteredAmount(event.target.value)} />
          </div>
          <div className='ingredient-form__actions'>
            <button type='submit'>Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  )
}

export default memo(IngredientForm)
