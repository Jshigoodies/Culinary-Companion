import React, {useEffect} from 'react';
import '../favorites.css';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';
import { useLocation } from 'react-router-dom';

function Favorites() {

    const location = useLocation();

    useEffect(() => {
        // Get the current URL path
        const path = location.pathname;

        // Select the HTML element that you want to modify
        const container = document.querySelector('body');

        // Set the overflow property based on the current path
        if (path === '/favorites') {
            container.style.overflow = 'auto';
        } else if (path === '/login' || path === '/signup') {
            container.style.overflow = 'hidden';
        }
    }, [location]);

    const username = localStorage.getItem('email'); // Get the username from localStorage

  // Use the useQuery hook to fetch the user data
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { username },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { user } = data;

  return (
    <div className='fav-div'>
      <h1>Favorites</h1>
      <h2>Username: {user.username}</h2>
      <h3>Recipes:</h3>
      <ul>
        {user.recipes.map((recipe) => (
          <li key={recipe.id}>
            <h4>{recipe.title}</h4>
            <img src={recipe.image} alt={recipe.title} />
            <p>Source URL: <a href={recipe.sourceUrl}>{recipe.sourceUrl}</a></p>
            <h5>Ingredients:</h5>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;