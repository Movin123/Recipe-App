// import React, { Component } from 'react';
// import Text1 from './Component/Text1';
// import './App.css';

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Text1/>
//       </div>
//     )
//   }
// }
// export default App;
import React, { useEffect, useState } from 'react'
import Recipes from './Recipes'

const App =()=>{
    const App_ID = "e5bf5f77";
    const App_KEY = "d45f3500c098359fbbf38307ddcec4b6";

     const[recipes, setRecipes]=useState([]);
    const[search, setSearch]=useState("");
    const[query, setQuery]=useState('');

    useEffect(()=>{
        getRecipes();
    },[query]);

    const getRecipes=async()=>{
    const responce =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`);
    const data =await responce.json();
    setRecipes(data.hits);
    };
    const updateSearch= e=>{
        setSearch(e.target.value);
    }
    const getSearch=e=>{
        e.preventDefault();
        setQuery(search);
    }
        
    return(
        <div className="App">
            <div  className="head">
                <h1>FOODIE ADDA</h1>
            </div>
            <form onSubmit={getSearch} className="search_form">
                <input className="search_bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button"type="submit">Search</button>
            </form>
            
            <div className="recipes">
            {recipes.map(recipe=>(
                <Recipes key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
                image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
        </div>
    )
}
export default App;
