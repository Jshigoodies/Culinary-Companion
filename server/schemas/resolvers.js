// const { Thought } = require('../models');

// const resolvers = {
//   Query: {

//   },

//   Mutation: {
    
//   },
// };


const createRecipe = async (parent, args, context) => {
  const { title, description, instructions, ingredients, imageUrl } = args.input;
  const { userId } = context;

  // Create a new Recipe document in the database
  const recipe = await Recipe.create({
    title,
    description,
    instructions,
    ingredients,
    imageUrl,
    author: userId,
  });

  // Add the new recipe to the User's recipes array
  const user = await User.findByIdAndUpdate(
    userId,
    { $push: { recipes: recipe._id } },
    { new: true },
  );

  // Publish the recipeCreated subscription event to any subscribed clients
  pubsub.publish('RECIPE_CREATED', { recipeCreated: recipe });

  // Return the new Recipe document to the client
  return recipe;
};

module.exports = resolvers;
