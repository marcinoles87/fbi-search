import React from 'react'

const RecipeCard = (props) => {

    const {name , img} = props
    return(
        <div>
            <h1>Future Info </h1>
            <img src={img} alt='wanted'></img>
            <ul>
                <li>{name}</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default RecipeCard