import './App.css';
import Collaborate from './Components/Colloborate';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import StartIntro from './Components/Startintro';
import Techstack from './Components/Techstack';
import Experience from './Components/Experience';

function App() {
  return(
    <>
    <Intro />
    <StartIntro/>
    <Techstack/>
    <Experience/>
    <Projects/>
    <Collaborate/>
    
    <Footer/>
    </>
  )

}

export default App;
