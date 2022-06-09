import {  gql } from "@apollo/client";
const GET_LIST = gql`
  query Learn {
    Learn {
      LearnOpportunities(first: 20) {
        edges {
          node {
            icon {
              url
            }
            title
          }
        }
      }
    }
  }
`;