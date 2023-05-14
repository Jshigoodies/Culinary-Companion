import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($username: String!) {
    user(username: $username) {
      username
      recipes {
        // Specify the recipe fields you want to retrieve
        id
        title
        image
        servings
        sourceUrl
        ingredients
      }
    }
  }
`;

export const GET_RECIPE = gql`
  query GetRecipe($id: ID!) {
    recipe(id: $id) {
      // Specify the recipe fields you want to retrieve
      id
      title
      image
      servings
      sourceUrl
      ingredients
    }
  }
`;