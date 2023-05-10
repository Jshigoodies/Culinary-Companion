import React, { useState} from 'react';
import '../create.css';

function CreateRecipe() {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [sourceUrl, setSourceUrl] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the submitted recipeData
        console.log("title: " + title);
        console.log("image: " + image);
        console.log("sourceUrl: " + sourceUrl);
        console.log("ingredients: " + ingredients);
    };





    return (
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

                <button type="submit">Submit a Recipe!</button>
            </form>
            
        </div>
    );
}

export default CreateRecipe;