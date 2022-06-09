import React, {useState} from 'react'
import { CREATE_AUTH_MUTATION } from '../../Graphql/Mutation';
import { useMutation } from '@apollo/client';

import "./Login.css"


interface FormData {
    email: string;
    password: string;
    
  }
const Login:React.FC =()=> {
    const[input,setInput]=useState<FormData>({
        email:"karl.kroeber@thekey.technology",
        password:"testtest",
    })
/*     const getData=(data:any)=>{
        localStorage.setItem('token', data.Auth.login.token );
        localStorage.setItem('userId',data.Auth.login.userId);
      
      } */
     

      const [createAuth, { data, loading, error }] = useMutation<FormData>(CREATE_AUTH_MUTATION)
    
      const handleCLick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.email || !input.password) {
          alert('Enter email and password!');
        } else {
          console.log(input.email);
          createAuth({
            variables: {
              email: input.email,
              password: input.password,
            },
          })
            .then(({ data }) => {
             
              console.log(data);
        
            })
            .catch((error) => {
              console.log(error);
            });
          if (error) {
            console.log(error);
          } else {
            console.log('user logged in');
          }
        }
      };    
    
/*       if(data)getData(data)
    console.log(typeof data) */
      return (
        <div>
          <div style={{textAlign:"center"}}>
          {loading && <p>Submitting....</p>}
          {error && <p>Submission error! ${error.message}</p> }
          </div>
        <div>
            <form  className='formContainer'  >
    <div className='inputField'>
      <label className='labelStyle' htmlFor='username'>Username</label>
      <input   type="text" defaultValue={"karl.kroeber@thekey.technology"}   />
    </div>
    <div className='inputField'>
      <label className='labelStyle' htmlFor='passwort'>Passwort</label>
      <input type="text" defaultValue={"testtest"}  />
    </div>
    <div className='buttonCont'>
    <button className='submitButton' type="submit">Log in</button>
    </div>
            </form>
       
        </div>
        </div>
      )}
export default Login;
