import React, { useState } from "react";
import { CREATE_AUTH_MUTATION } from "../../Graphql/Mutation";
import { useMutation } from "@apollo/client";

import "./Login.css";

interface AuthResult {
    
        
          login: {
            token: string,
            userId: string
          }
        
      
  }

interface FormData {
  email: string;
  password: string;
 Auth?:AuthResult

}


const Login: React.FC = () => {
  const [input, setInput] = useState<FormData>({
    email: "karl.kroeber@thekey.technology",
    password: "testtest",
  });


  const [createAuth, { error }] = useMutation<FormData>(CREATE_AUTH_MUTATION);

  const handleCLick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      alert("Enter email and password!");
    } else {
      
      createAuth({
        variables:{ 
          email: input.email,
          password: input.password,
        },
      })
        .then(({ data}) => {
          if (data?.Auth?.login !== undefined && data.Auth.login !== null) {
            localStorage.setItem('token', data?.Auth?.login.token  );
            localStorage.setItem('userId', data?.Auth?.login.userId );
          } 
     
        
        })
        .catch((error) => {
          console.log(error);
        });
      if (error) {
        console.log(error);
      } else {
        console.log("user logged in");
      }
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {error && <p>Submission error! ${error.message}</p>}
      </div>
      <div>
        <form className="formContainer" onSubmit={handleCLick}>
          <div className="inputField">
            <label className="labelStyle" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              defaultValue={"karl.kroeber@thekey.technology"}
            />
          </div>
          <div className="inputField">
            <label className="labelStyle" htmlFor="passwort">
              Passwort
            </label>
            <input type="text" defaultValue={"testtest"} />
          </div>
          <div className="buttonCont">
            <button className="submitButton" type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
