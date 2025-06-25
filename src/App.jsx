import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar"
import {Home} from "./pages/Home"
import { ServicePg } from './pages/ServicePg';
import { AboutPg } from './pages/AboutPg';
import { CasesPg } from './pages/CasesPg';
import { ContactPg } from './pages/ContactPg';

function App() {
  return (
    <>
      <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<CasesPg/>} />
        <Route path="/services" element={<ServicePg />} />
        <Route path="/about" element={<AboutPg />} />
        <Route path="/contact" element={<ContactPg />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
