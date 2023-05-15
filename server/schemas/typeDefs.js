const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    email: String
    password: String
    username: String
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

  type Query {
    users: [User]
    user(username: String!): User
    recipes: [Recipe]
    recipe(id: ID!): Recipe
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    
    login(email: String!, password: String!): Auth
    
    addRecipe(
      title: String!
      image: String!
      servings: Int!
      sourceUrl: String!
      ingredients: [String!]!
      email: String!
    ): Recipe!

    updateRecipe(
      id: ID!
      title: String!
      image: String!
      servings: Int!
      sourceUrl: String!
      ingredients: [String!]!
    ): Recipe!
    
    deleteRecipe(id: ID!, email: String!): Recipe!

  }
`;

module.exports = typeDefs;