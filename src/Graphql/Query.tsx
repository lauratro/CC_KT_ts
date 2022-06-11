import { gql } from "@apollo/client";
export const GET_LIST = gql`
  query Learn ($first: Int, $query:String) {
    Learn {
      LearnOpportunities(first: $first, query:$query) {
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
