const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
    required: true,
  },
  sourceUrl: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

recipeSchema.methods.toJSON = function () {
  const recipeObject = this.toObject();
  recipeObject.id = recipeObject._id;
  delete recipeObject._id;
  delete recipeObject.__v;
  return recipeObject;
};

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;