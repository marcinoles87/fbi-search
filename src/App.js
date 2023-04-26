import React,{useEffect, useState} from 'react'
import RecipeCard from './components/RecipeCard';


import './App.css';


const App = () => {

  const [recipe,setRecipe] = useState([])


  useEffect( () => {
    fetch('https://world.openfoodfacts.org/api/v0/product/737628064502')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setRecipe(data.product)
    })

    
  } , [] )

  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-input' type='text'></input>
        <button className='search-button' type='submit'> Search</button>

       {recipe.image_url} <br></br>
       {recipe.brand_owner}

        {/* {recipe.map( (people , index) => {
          return(
            <RecipeCard 
              key={index}
              name={people.name}
              height={people.height}
             
            />
          )
        })} */}
      </form>
      
  
   
      
    </div>
  )
}

export default App;
