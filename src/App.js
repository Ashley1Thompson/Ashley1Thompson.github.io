import logo from './logo.svg';
import './App.scss';
import aboutMe from "./components/aboutMe";
import nav from "./components/nav";
import projects from "./components/projects";
import header from "./components/header";
import footer from "./components/footer";
import contact from "./components/contact";
import resume from "./components/resume";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
