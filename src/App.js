// import necessary components
import React, {useState} from 'react';
import './App.scss';
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
    if (currentPage === 'aboutMe') {
      return <AboutMe />;
    } else if (currentPage === 'projects') {
      return <Projects />;
    } else if (currentPage === 'contact') {
      return <Contact />;
    }  else if (currentPage === 'resume') {
      return <Resume />;
    }
  }; 
  
  const changePage = (page) => currentPage(page);
  return (
    <div>
      <Nav currentPage={currentPage} changePage={changePage} />
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
