import React from 'react'

import './recipecard.css'

const RecipeCard = (props) => {

    const {name , img , text , description , weight} = props

    const data =new Date().getFullYear()
    const data2 =new Date().getDate()
    const data3 =new Date().getDay()
    // const nowDate = data.getFullYear()
    
    return(
        <div className='card'>
            <h1>Wanted</h1>
            <img src={img} alt='img'></img>
            <ul>
                <li><span>Name :</span> {name}</li>
                <li>Weight: {weight}</li>
                <li>Info :{text}</li>
                <li>Description: {description}</li>
                <li>Actual info date : {data}-{data2}-{data3}</li>
            </ul>
        </div>
    )
}

export default RecipeCard