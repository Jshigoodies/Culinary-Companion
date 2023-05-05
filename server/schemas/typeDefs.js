const { gql } = require('apollo-server-express');

const typeDefs = gql`

input RecipeInput {
  title: String!
  description: String!
  instructions: String!
  ingredients: [String!]!
  imageUrl: String
}


type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  recipes: [Recipe!]!
  createdAt: String!
  updatedAt: String!
}

type Query {
  recipes: [Recipe!]!
  recipe(id: ID!): Recipe
  user(id: ID!): User
}

type Mutation {
  createRecipe(input: RecipeInput!): Recipe!
  updateRecipe(id: ID!, input: RecipeInput): Recipe!
  deleteRecipe(id: ID!): ID
  signup(name: String!, email: String!, password: String!): String!
  login(email: String!, password: String!): String!
}

type Subscription {
  recipeCreated: Recipe!
  recipeUpdated: Recipe!
  recipeDeleted: ID!
}

`;

module.exports = typeDefs;
