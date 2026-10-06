import { Link } from 'react-router-dom';
import ListaEstudiantes from './components/ListaEstudiantes.jsx';
import './ejercicio5.css';

function Ejercicio5() {
  return (
    <div className="ej5">
      <Link to="/" className="ej5-volver">
        Regresar al Menú
      </Link>
      <ListaEstudiantes />
    </div>
  );
}

export default Ejercicio5;
