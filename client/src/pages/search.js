import React, { useState, useEffect} from 'react';
import '../search.css';
import { useLocation, Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';


function Search() {

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


    const [query, setQuery] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        // Submit the search query
        console.log(`Query is ${query}`);


        //victor taught us this so many times
        async function fetchData() {
            try {
                const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=4d89654f5ccf42d29ebec31b5712545b&query="+query);
                const jsonData = await response.json();

                setTimeout(() => {
                    console.log("Api call search results");
                    console.log(jsonData);
                    setSearchResults(jsonData.results);
                }, 1000) 
            }
            catch {
                console.log("ERROR WITH SEARCHING FOR THE API");
            }

        }

        fetchData();

    }

    return (
        <div className='containerDiv'>
            <div className='box'>
                <input className='search-txt' type='text' placeholder='Start Searching for Recipies!' value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button className='search-btn' onClick={handleSearch}>Let's GO!</button>
            </div>
            {searchResults.length > 0 && (
                <div className='search-results'>
                {searchResults.map(({ title, id, image }) => (
                    <div key={id}>
                    <Link to={`/recipe/${id}`}>
                        <img src={image} alt={title} />
                        <h4>{title}</h4>
                    </Link>
                    <div className="buttons">
                            <button className="view-more-button">View Recipe</button>
                            <button className="favorite-button">Add to Favorites</button>
                         </div>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}


export default Search;