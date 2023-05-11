const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    password: String!
    recipes: [Recipe!]!
  }

  type Recipe {
    id: ID!
    title: String!
    image: String!
    servings: Int!
    sourceUrl: String!
    ingredients: [String!]!
    createdAt: String!
    updatedAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input RecipeInput {
    title: String!
    image: String!
    servings: Int!
    sourceUrl: String!
    ingredients: [String!]!
  }

  type Query {
    me: User
    recipe(id: ID!): Recipe
    recipes: [Recipe!]!
    user(id: ID!): User
    users: [User!]!
  }

  type Mutation {
    addRecipe(input: RecipeInput!): Recipe!
    updateRecipe(id: ID!, input: RecipeInput!): Recipe!
    deleteRecipe(id: ID!): Recipe!
    addUser(email: String!, username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
// const typeDefs = gql`

// input RecipeInput {
//   title: String!
//   description: String!
//   instructions: String!
//   ingredients: [String!]!
//   imageUrl: String
// }


// type User {
//   id: ID!
//   name: String!
//   email: String!
//   password: String!
//   recipes: [Recipe!]!
//   createdAt: String!
//   updatedAt: String!
// }

// type Query {
//   recipes: [Recipe!]!
//   recipe(id: ID!): Recipe
//   user(id: ID!): User
// }

// type Mutation {
//   createRecipe(input: RecipeInput!): Recipe!
//   updateRecipe(id: ID!, input: RecipeInput): Recipe!
//   deleteRecipe(id: ID!): ID
//   signup(name: String!, email: String!, password: String!): String!
//   login(email: String!, password: String!): String!
// }

// type Subscription {
//   recipeCreated: Recipe!
//   recipeUpdated: Recipe!
//   recipeDeleted: ID!
// }

// `;

// module.exports = typeDefs;
