import { Link } from 'react-router-dom'
import Padre from './components/Padre.jsx'
import './ejercicio3.css'

function Ejercicio3() {
  return (
    <div className="ej3">
      <Link to="/" className="ej3-volver">← Volver al inicio</Link>
      <Padre />
    </div>
  )
}

export default Ejercicio3