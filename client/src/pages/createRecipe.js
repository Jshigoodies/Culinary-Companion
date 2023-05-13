import React, { useState} from 'react';
import '../create.css';
import { CREATE_RECIPE } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
function CreateRecipe() {

    const isLoggedIn = Auth.loggedIn();

    const [createRecipe, {error, data}] = useMutation(CREATE_RECIPE);

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [sourceUrl, setSourceUrl] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const handleSubmit =  (e) => {
        e.preventDefault();
        setTitle('');
        setImage('');
        setSourceUrl('');
        setIngredients([]);

        // Do something with the submitted recipeData
        console.log("title: " + title);
        console.log("image: " + image);
        console.log("sourceUrl: " + sourceUrl);
        console.log("ingredients: " + ingredients);

        try {
            const {data} =  createRecipe({
                variables: {
                    title,
                    image,
                    servings: 0,
                    sourceUrl,
                    ingredients
                },
            })
            console.log(data);
                }
        catch (e)
        {
            console.log(e);
        }
    };

            

    





    return (
        <div>
            {isLoggedIn ? (
                <div className='createDiv'>
                    <h1>Create Recipe</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Title:
                            <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>
                        <label>
                            Image URL:
                            <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            />
                        </label>
                        <label>
                            Source URL:
                            <input
                            type="text"
                            value={sourceUrl}
                            onChange={(e) => setSourceUrl(e.target.value)}
                            />
                        </label>
                        <label>
                            Ingredients (comma-separated):
                            <input
                            type="text"
                            value={ingredients.join(',')}
                            onChange={(e) => setIngredients(e.target.value.split(','))}
                            />
                        </label>
        
                        <button type="submit" >Submit a Recipe!</button>
                    </form>
                </div>
            ) : (
                <div className='createDiv'>
                    <h1>You are not allowed to view this. Please Log in First!</h1>
                </div>
            )}
            
                    
        </div>
            
    );
}

export default CreateRecipe;