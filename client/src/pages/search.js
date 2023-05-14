import React, { useState, useEffect } from 'react';
import '../recipe.css';
import { useLocation } from 'react-router-dom';
import '../search.css';


function Recipe() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState(null);

  const API_KEY = '4a61076911b94711a2a8d40b91cb7bb4';
  const API_BASE_URL = 'https://api.spoonacular.com/recipes';


  const location = useLocation();

  useEffect(() => {
      // Get the current URL path
      const path = location.pathname;

      // Select the HTML element that you want to modify
      const container = document.querySelector('body');

      // Set the overflow property based on the current path
      if (path === '/search') {
          container.style.overflow = 'auto';
      } else if (path === '/login' || path === '/signup') {
          container.style.overflow = 'hidden';
      }
  }, [location]);

  useEffect(() => {
    // Fetch recipes based on search term
    if (searchTerm) {
      fetch(`${API_BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setRecipes(data.results))
        .catch((error) => console.log(error));
    }
  }, [searchTerm]);

      // Fetch details for a single recipe
  function handleRecipeClick(id) {
    fetch(`${API_BASE_URL}/${id}/information?apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.log(error));
  }

  function removeHtmlTags(string) {
    // Remove any HTML tags from a string
    return string.replace(/(<([^>]+)>)/gi, '');
  }

  async function handleAddToFavorites() {
    //i will add this stuff too
  }

  return (
    <div className="Recipe">
      <h1>Search for Recipes</h1>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <button onClick={() => handleRecipeClick(recipe.id)}>{recipe.title}</button>
          </li>
        ))}
      </ul>
      {recipe && (
        <div>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <p>{removeHtmlTags(recipe.summary)}</p>
          <h3>Ingredients</h3>
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <div dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
          <button onClick={handleAddToFavorites}> Add to Favorites! </button>
        </div>
      )}
    </div>
  );
}

export default Recipe;