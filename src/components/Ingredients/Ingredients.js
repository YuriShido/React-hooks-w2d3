import React, {useState, useEffect} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList'

import { unmountComponentAtNode } from 'react-dom';

function Ingredients() {

  const [userIngredients, setUserIngredients] = useState([])

  useEffect(() => {
    fetch('https://react-fook-update-default-rtdb.firebaseio.com/ingredients.json')
    .then(response => response.json())
    .then(responseData => {
      const loadedIngredients = []
      for(const key in responseData) {
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,
          amount:responseData[key].amount
        
        })
      }
      setUserIngredients(loadedIngredients)
    })
   
  }, [])

  useEffect(() => {
    console.log('Rendering Ingredients...', userIngredients)

    return () => {
      console.log('This compornent will be unmountComponentAtNode...')
    }
  }, [userIngredients])

  const addIngredientHandler = (ingredients) => {
    fetch('https://react-fook-update-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredients),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData)
     
      setUserIngredients((prevState) => [
        ...prevState,
        { id:Math.random().toString(),...ingredients}
      ])
    })
  }

  // const removeIngredienthandler = ingredientId => {
  //   setUserIngredients(prevState => {
  //     prevState.filter(ingredient => ingredient.id !== ingredientId)
  //   })
  // }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
