// import necessary elements
// import React, {useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Blog from './components/blog';
import Navigation from "./components/homepage/nav";
import Header from "./components/homepage/header";
import Footer from "./components/homepage/footer";

//
function App() {
    return (
      <div className="App">
        <Header />
        <Navigation/>
        <Routes>
            <Route path ='/projects' element={<Projects />}/>
            <Route path ='/blog' element={<Blog />}/>
            <Route path ='/resume' element={<Resume />}/>
            <Route path ='/contact' element={<Contact />}/>
            <Route path ='/aboutMe' element={<AboutMe />}/>
        </Routes>
        <Footer />
      </div>

    );
  }; 
  

export default App;
