import { Link } from 'react-router-dom'
import Componente1 from './components/Componente1.jsx'
import './ejercicio2.css'

function Ejercicio2() {
  return (
    <div className="ej2">
      <Link to="/" className="ej2-volver">Regresar al Menú</Link>
      <Componente1 />
    </div>
  )
}

export default Ejercicio2