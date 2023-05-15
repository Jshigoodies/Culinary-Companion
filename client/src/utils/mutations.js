import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }

`;

export const CREATE_RECIPE = gql`
mutation Mutation($title: String!, $image: String!, $servings: Int!, $sourceUrl: String!, $ingredients: [String!]!, $email: String!) {
  addRecipe(title: $title, image: $image, servings: $servings, sourceUrl: $sourceUrl, ingredients: $ingredients, email: $email) {
    image
    ingredients
    servings
    sourceUrl
    title
  }
}
`;

export const DELETE_RECIPE = gql`
mutation Mutation($deleteRecipeId: ID!, $email: String!) {
  deleteRecipe(id: $deleteRecipeId, email: $email) {
    id
    ingredients
    image
    servings
    sourceUrl
    title
  }
}
`;