import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import Banner from './components/Banner';
import { About } from './components/About';
import Projects from './components/Projects'; 
import Experience from './components/Experience';
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="">
        <Banner />
      </section>
      <section id="About">
        <About />
      </section>
      {/* <section id="education-section">
        <Education />
      </section>
      */}
      <section id="Projects">
        <Projects />
      </section> 
        <section id="Experience">
        <Experience />
      </section> 
      <section id="Contact">
        <Contact />
      </section> 
    
    </div>
  );
}

export default App;
