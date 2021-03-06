import React, { useState } from "react";
import { CREATE_AUTH_MUTATION } from "../../Graphql/Mutation";
import { useMutation } from "@apollo/client";

import {useGlobalContext} from "../../context/VariableContext"
import {
  useNavigate
} from "react-router-dom";

import "./Login.css";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [input, setInput] = useState<FormData>({
    email: "karl.kroeber@thekey.technology",
    password: "testtest",
  });
 
  const {isLoggedIn, login } = useGlobalContext()
  const [loginUser, { error }] = useMutation(CREATE_AUTH_MUTATION);
const navigate = useNavigate()
  const handleCLick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      alert("Enter email and password!");
    } else {
      loginUser({
        variables: {
          email: input.email,
          password: input.password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("token", data.Auth.login.token);
          localStorage.setItem("userId", data.Auth.login.accounts[0].id);

          login()
          navigate("/Courses")
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
        {!isLoggedIn &&
        <form className="formContainer" onSubmit={handleCLick}>
        <h2 className="formTitle">Login</h2>
          <div className="inputField">
            <label className="labelStyle" htmlFor="username">
              Username
            </label>
            <input type="text" placeholder="xxxxxx"/>
          </div>
          <div className="inputField">
            <label className="labelStyle" htmlFor="passwort">
              Passwort
            </label>
            <input type="text"placeholder="xxxxxx" />
          </div>
          <div className="buttonCont">
            <button className="submitButton" type="submit">
              Login
            </button>
          </div>
        </form>
}
      </div>
    </div>
  );
};
export default Login;
