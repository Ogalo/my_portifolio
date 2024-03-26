import './App.css';
import { Box } from '@mui/material';
import { Home } from './pages';
import { About, Contact, NavBar, Services } from '../src/components';
import { BrowserRouter,
  Route, Routes
} from "react-router-dom";
import { Projects } from '../src/pages';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element = {<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route  path="/contact" element={<Contact />} />
    <Route  path="/projects" element={<Projects />} />
    </Routes>

    </>
  );
}

export default App;
