import './App.css';
import Collaborate from './Components/Colloborate';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import StartIntro from './Components/Startintro';
import Techstack from './Components/Techstack';
import Experience from './Components/Experience';
import Plex from './Components/Plex';

function App() {
  return(
    <>
    <Intro />
    <StartIntro/>
    <Techstack/>
    <Plex/>
    <Experience/>
    <Projects/>
    <Collaborate/>
    <Footer/>
    </>
  )

}

export default App;
