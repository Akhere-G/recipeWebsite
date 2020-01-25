import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from './RecipeList.js'

const App = () => {

  const APP_ID = '17fb4aa4'
  const APP_KEY = '4b2b90b9ea37e0ead53f902e402ddc47'
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  let [loading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
   getRecipes()

  }, [])

  const getRecipes = async () => {
    setLoading(true) 
    const response = await fetch(exampleReq)
    const data = await response.json()
    setRecipes(data.hits)
    setLoading(false) 
  }

  if (loading){
   return <div>Loading...</div>   
  }
  return (
    
    <>
    <div className='container'>
      <h1>Hello React</h1>
      <form className='search-form'>
        <input className='search-bar' type='text'></input>
        <button className='search-button' type='submit'>Search</button>
      </form>
      <RecipeList recipes={recipes}/>
      
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
