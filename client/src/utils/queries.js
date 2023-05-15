import { gql } from '@apollo/client';

export const GET_USER = gql`
    query User($username: String!) {
        user(username: $username) {
        username
        email
        password
        recipes {
            id
            image
            ingredients
            title
            sourceUrl
        }
        }
    }
`;

export const GET_RECIPE = gql`
  query recipe($id: ID!) {
    recipe(id: $id) {
      _id
      title
      image
      servings
      sourceUrl
      ingredients
    }
  }
`;