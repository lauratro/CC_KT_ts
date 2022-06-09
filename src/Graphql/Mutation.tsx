import { gql } from '@apollo/client';

export const CREATE_AUTH_MUTATION= gql`
mutation Auth($email:String!,$password:String!){
  Auth {
    login(input: { email:$email, password:$password}) {
      token
      userId
     
    }
 
  }
}
`