import React from 'react'
import { CREATE_AUTH_MUTATION } from '../../Graphql/Mutation';
import { useMutation } from '@apollo/client';

const Login:React.FC =()=> {
 
    
      return (
        <div>
      
        <div>
            <form  className='formContainer' >
    <div className='inputField'>
      <label className='labelStyle' htmlFor='username'>Username</label>
      <input   type="text" defaultValue={"xxxxxxxx"}  />
    </div>
    <div className='inputField'>
      <label className='labelStyle' htmlFor='passwort'>Passwort</label>
      <input type="text" defaultValue={"xxxxxx"}  />
    </div>
    <div className='buttonCont'>
    <button className='submitButton' type="submit">Log in</button>
    </div>
            </form>
       
        </div>
        </div>
      )}
export default Login;
