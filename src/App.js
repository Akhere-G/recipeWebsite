import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import RecipeList from './RecipeList.js'

const App = () => {

  let [loading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const APP_ID = '17fb4aa4'
  const APP_KEY = '4b2b90b9ea37e0ead53f902e402ddc47'
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  
  useEffect(() => {
   getRecipes()

  }, [query])

  const getRecipes = async () => {
    setLoading(true) 
    const response = await fetch(exampleReq)
    const data = await response.json()
    setRecipes(data.hits)
    setLoading(false) 
  }

  const updateSearch = event => {
    setSearch(event.target.value)
  }

  const getSearch = event =>{
    event.preventDefault();
    setQuery(search);
    setSearch('')
  }


  let recipeTag

  if (loading){
    recipeTag = <div>Loading...</div>   
  } else {
    recipeTag = <RecipeList recipes={recipes}/>
  }
  return (
    
  <>
    <div className='container'>
      <div className='h2 pretty-title'>Recipes for You</div>
      <form id='search-form' onSubmit={getSearch}>
      <input placeholder='search for an ingredient' id='search-bar' type='text' value={search}  onChange={updateSearch}></input>
        <button id='search-button' type='submit'>Search</button>
      </form>
      {recipeTag}
      
    </div>
    <footer className="footer bg-dark">
      <div className="container">
          <div className="row text-center">
              <div className="col text-white">Copyright &copy; Your Website 2019</div>
          </div>
      </div>
    </footer>
  </>
  );
}

export default App;
