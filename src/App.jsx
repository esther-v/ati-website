import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Home, Contact, Prestations, Realisations } from './pages';

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
