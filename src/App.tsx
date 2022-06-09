import React from "react";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import CoursesList from "./components/CoursesList/CoursesList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <CoursesList />
    </div>
  );
}

export default App;
