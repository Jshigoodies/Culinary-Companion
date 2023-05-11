const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .populate('recipes');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    recipes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Recipe.find(params).sort({ createdAt: -1 });
    },

    recipe: async (parent, { id }) => {
      return Recipe.findOne({ _id: id });
    },

    users: async () => {
      return User.find().populate('recipes');
    },

    user: async (parent, { id }) => {
      return User.findOne({ _id: id }).populate('recipes');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    addRecipe: async (parent, args, context) => {
      if (context.user) {
        const recipe = await Recipe.create({ ...args, username: context.user.username });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { recipes: recipe._id } },
          { new: true }
        );
        return recipe;
      }
      throw new AuthenticationError('You need to be logged in to create a recipe!');
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
