import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;
