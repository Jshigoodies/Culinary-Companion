const axios = require('axios');

const getRecipes = async () => {
  const response = await axios.get('https://api.spoonacular.com/recipes/random', {
    params: {
      apiKey: 'YOUR_API_KEY',
      number: 10, // Replace with the number of recipes you want to fetch
    },
  });

  return response.data.recipes;
};

module.exports = { getRecipes };