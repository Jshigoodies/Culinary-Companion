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
mutation addRecipe($title: String!, $image: String!, $servings: Int!, $sourceUrl: String!, $ingredients: [String!]!) {
  addRecipe(title: $title, image: $image, servings: $servings, sourceUrl: $sourceUrl, ingredients: $ingredients) {
    id
    title
    image
    servings
    sourceUrl
    ingredients
  }
}
`;
