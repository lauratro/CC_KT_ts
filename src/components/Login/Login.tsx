import React from 'react'
import { CREATE_AUTH_MUTATION } from '../../Graphql/Mutation';
import { useMutation } from '@apollo/client';

const Login:React.FC =()=> {
    const getData=(data)=>{
        localStorage.setItem('token', data.Auth.login.token );
        localStorage.setItem('userId',data.Auth.login.userId);
      
      }
      const [createAuth, { data, loading, error }] = useMutation(CREATE_AUTH_MUTATION,{variables:{
    email:"karl.kroeber@thekey.technology",password:"testtest"
      }})
    
      
    
      if(data)getData(data)
    
      return (
        <div>
          <div style={{textAlign:"center"}}>
          {loading && <p>Submitting....</p>}
          {error && <p>Submission error! ${error.message}</p> }
          </div>
        <div>
            <form  className='formContainer'  onSubmit={(e) => {
            e.preventDefault();
            createAuth();
         
          }} >
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
