import React from "react";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import CoursesList from "./components/CoursesList/CoursesList";
import VariableProvider from './context/VariableContext'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom"
import "./App.css";

function App() {
  return (
    <div className="App">
    <Router>
    <VariableProvider>

      <Header />
      <Routes>
      <Route path= "/" element ={<Login />} />
      <Route path= "/Courses" element ={<CoursesList />} />
      
      </Routes>
    </VariableProvider>
    </Router>
    </div>
  );
}

export default App;
