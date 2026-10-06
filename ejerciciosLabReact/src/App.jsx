import { Routes, Route, Link } from 'react-router-dom';
import Ejercicio1 from './ejercicio1/Ejercicio1.jsx';
import Ejercicio2 from './ejercicio2/Ejercicio2.jsx';
import './App.css';

function Inicio() {
  return (
    <div className="inicio">
      <h1>Ejercicios de Laboratorio con React</h1>
      <p>Desarrollo de Aplicaciones Web</p>

      <div className="inicio-botones">
        <Link to="/ejercicio1" className="boton boton-1">
          Ejercicio 1<span>Aplicación Web con Diseño Responsive</span>
        </Link>

        <Link to="/ejercicio2" className="boton boton-2">
          Ejercicio 2<span>Aplicación Web con Componentes Anidados</span>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/ejercicio1" element={<Ejercicio1 />} />
      <Route path="/ejercicio2" element={<Ejercicio2 />} />
    </Routes>
  );
}

export default App;
