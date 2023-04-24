import React,{useEffect, useState} from 'react'
import './App.css';

const App = () => {

  let [recipe,setRecipe] = useState()


  useEffect( () => {
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/?results=1')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
    })
  })

  return(
    <div>
      <h1>Recipe Mrc </h1>
    </div>
  )
}

export default App;
