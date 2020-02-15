import React from 'react'

const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className="recip">
            <h1>{title}</h1>
            <ul type="none">
                {ingredients.map(ingredients=>(
                <li>{ingredients.text}</li>))}
            </ul>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );
}
export default Recipe;