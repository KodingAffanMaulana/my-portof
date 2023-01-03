import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Experience from './Routes/Experience';
import Project from './Routes/Project';
import About from './Routes/About';
import Education from './Routes/Education';
import NotFound from './Routes/NotFound';
import Home from './Routes/Home';

function App() {
  return (
    <>
      {/* <div className="navbar">
      <div className='navbar1'>
        Affan Maulana
      </div>
      <div className='navbar2'>
      <Link to='/'>Home</Link>
      <Link to='/photos'>My Photos</Link>
      <Link to='/add'>Add Photo</Link>
      </div> */}
      <div>
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/project" element={<Project />} />
        <Route path="/education" element={<Education />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
    )
}

export default App;
