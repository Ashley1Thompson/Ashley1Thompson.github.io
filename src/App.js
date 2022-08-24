// import necessary components
import React, {useState} from 'react';
import './App.css';
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Nav from "./components/homepage/nav";
import Header from "./components/homepage/header";
import Footer from "./components/homepage/footer";

//
function App() {
  const [currentPage, setCurrentPage,] = useState('aboutMe')

  const renderPage = () => {
    switch(currentPage) {
    case 'aboutMe':
      return <AboutMe />    
    case 'projects':
      debugger   
      return <Projects /> 
    case 'resume':
      return <Resume />    
    case 'contact':
      return <Contact /> 
    default: 
      return <AboutMe />    
    }
  }; 
  
  // const changePage = (page) => currentPage(page);
  return (
    <div>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
