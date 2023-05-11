const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }); //.populate later for recipies
    },
    recipe: async (parent, { id }) => {
      try {
        const recipe = await Recipe.findById(id);
        return recipe;
      } catch (error) {
        throw new Error('Failed to fetch recipe');
      }
    },
    recipes: async () => {
      try {
        const recipes = await Recipe.find();
        return recipes;
      } catch (error) {
        throw new Error('Failed to fetch recipes');
      }
    },
    me: async (parent, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('recipies');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addRecipe: async (parent, { title, image, servings, sourceUrl, ingredients }) => {
      try {
        const recipe = await Recipe.create({ title, image, servings, sourceUrl, ingredients });
        return recipe;
      } catch (error) {
        throw new Error('Failed to create recipe');
      }
    },

    updateRecipe: async (parent, { id, title, image, servings, sourceUrl, ingredients }) => {
      try {
        const recipe = await Recipe.findByIdAndUpdate(
          id,
          { title, image, servings, sourceUrl, ingredients },
          { new: true }
        );
        return recipe;
      } catch (error) {
        throw new Error('Failed to update recipe');
      }
    },

    deleteRecipe: async (parent, { id }) => {
      try {
        const recipe = await Recipe.findByIdAndDelete(id);
        return recipe;
      } catch (error) {
        throw new Error('Failed to delete recipe');
      }
    },


  }
};

module.exports = resolvers;