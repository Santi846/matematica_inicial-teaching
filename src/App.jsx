import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MatematicaInicial from './pages/materias/matematica_inicial/MatematicaInicial';
import Home from './pages/Home';
import Materias from './pages/materias/Materias.jsx';

function App() {

  return (
    <>
      {/*  */}

    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materias/matematica_inicial/" element={<MatematicaInicial />} />
        <Route path="/materias/" element={<Materias />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
