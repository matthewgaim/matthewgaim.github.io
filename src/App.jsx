import './App.css';
import Top from './components/Top/Top';
import Experiences from './components/Experiences/Experiences';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Top />
      <Experiences />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
