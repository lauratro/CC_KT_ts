import React from "react";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import CoursesList from "./components/CoursesList/CoursesList";
import VariableProvider from './context/VariableContext'

import "./App.css";

function App() {
  return (
    <VariableProvider>
    <div className="App">
      <Header />
      <Login />
      <CoursesList />
    </div>
    </VariableProvider>
  );
}

export default App;
