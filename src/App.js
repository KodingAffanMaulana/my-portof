import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Experience from './Routes/Experience';
import Project from './Routes/Project';
import About from './Routes/About';
import Education from './Routes/Education';
import NotFound from './Routes/NotFound';
import Home from './Routes/Home';
import Certificate from './Routes/Certificate';

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
