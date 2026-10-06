import { Link } from 'react-router-dom'
import Padre from './components/Padre.jsx'
import './ejercicio4.css'

function Ejercicio4() {
  return (
    <div className="ej4">
      <Link to="/" className="ej4-volver">Regresar al Menú</Link>
      <Padre />
    </div>
  )
}

export default Ejercicio4