const { User, Recipe } = require('../models');

const resolvers = {
  Query: {
    recipe: async (parent, { id }) => {
      try {
        const recipe = await Recipe.findById(id).populate('author');
        return recipe;
      } catch (err) {
        throw new Error(err);
      }
    },
    recipes: async () => {
      try {
        const recipes = await Recipe.find().populate('author');
        return recipes;
      } catch (err) {
        throw new Error(err);
      }
    },
    user: async (parent, { id }) => {
      try {
        const user = await User.findById(id).populate('recipes');
        return user;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    addRecipe: async (parent, { input }, { userId }) => {
      try {
        const recipe = await Recipe.create({
          ...input,
          author: userId,
        });

        const user = await User.findByIdAndUpdate(
          userId,
          { $push: { recipes: recipe._id } },
          { new: true },
        );

        recipe.author = user;

        return recipe;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Recipe: {
    author: async (parent) => {
      try {
        const user = await User.findById(parent.author);
        return user;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  User: {
    recipes: async (parent) => {
      try {
        const recipes = await Recipe.find({ author: parent.id });
        return recipes;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

module.exports = resolvers;
// const { User, Recipe } = require('../models');

// const createRecipe = async (parent, args, context) => {
//   const { title, description, instructions, ingredients, imageUrl } = args.input;
//   const { userId } = context;

//   // Create a new Recipe document in the database
//   const recipe = await Recipe.create({
//     title,
//     description,
//     instructions,
//     ingredients,
//     imageUrl,
//     author: userId,
//   });

//   // Add the new recipe to the User's recipes array
//   const user = await User.findByIdAndUpdate(
//     userId,
//     { $push: { recipes: recipe._id } },
//     { new: true },
//   );

//   // Publish the recipeCreated subscription event to any subscribed clients
//   // pubsub.publish('RECIPE_CREATED', { recipeCreated: recipe });

//   // Return the new Recipe document to the client
//   return { recipe, user };
// };
// const resolvers = {
//   Mutation: {
//     createRecipe,
//   },
// };

// module.exports = resolvers;


// const { AuthenticationError } = require('apollo-server-express');
// const { User, Thought } = require('../models');
// const { signToken } = require('../utils/auth');

// const resolvers = {
//   Query: {
//     users: async () => {
//       return User.find().populate('thoughts');
//     },
//     user: async (parent, { username }) => {
//       return User.findOne({ username }).populate('thoughts');
//     },
//     thoughts: async (parent, { username }) => {
//       const params = username ? { username } : {};
//       return Thought.find(params).sort({ createdAt: -1 });
//     },
//     thought: async (parent, { thoughtId }) => {
//       return Thought.findOne({ _id: thoughtId });
//     },
//     me: async (parent, args, context) => {
//       if (context.user) {
//         return User.findOne({ _id: context.user._id }).populate('thoughts');
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
//   },

//   Mutation: {
//     addUser: async (parent, { username, email, password }) => {
//       const user = await User.create({ username, email, password });
//       const token = signToken(user);
//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('No user found with this email address');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(user);

//       return { token, user };
//     },
//     addThought: async (parent, { thoughtText }, context) => {
//       if (context.user) {
//         const thought = await Thought.create({
//           thoughtText,
//           thoughtAuthor: context.user.username,
//         });

//         await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $addToSet: { thoughts: thought._id } }
//         );

//         return thought;
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
//     addComment: async (parent, { thoughtId, commentText }, context) => {
//       if (context.user) {
//         return Thought.findOneAndUpdate(
//           { _id: thoughtId },
//           {
//             $addToSet: {
//               comments: { commentText, commentAuthor: context.user.username },
//             },
//           },
//           {
//             new: true,
//             runValidators: true,
//           }
//         );
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
//     removeThought: async (parent, { thoughtId }, context) => {
//       if (context.user) {
//         const thought = await Thought.findOneAndDelete({
//           _id: thoughtId,
//           thoughtAuthor: context.user.username,
//         });

//         await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $pull: { thoughts: thought._id } }
//         );

//         return thought;
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
//     removeComment: async (parent, { thoughtId, commentId }, context) => {
//       if (context.user) {
//         return Thought.findOneAndUpdate(
//           { _id: thoughtId },
//           {
//             $pull: {
//               comments: {
//                 _id: commentId,
//                 commentAuthor: context.user.username,
//               },
//             },
//           },
//           { new: true }
//         );
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
//   },
// };

// module.exports = resolvers;
