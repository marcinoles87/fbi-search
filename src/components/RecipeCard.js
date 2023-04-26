import React from 'react'

const RecipeCard = (props) => {

    const {name , img , text} = props

    console.log(img)
    return(
        <div>
            <h1>Future Info </h1>
            <img src={img} url={img} alt='wanted'></img>
            <ul>
                <li>{name}</li>
                <li>{text}</li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default RecipeCard