import { useState } from 'react'
import Hermano1 from './Hermano1.jsx'
import Hermano2 from './Hermano2.jsx'

function Padre() {
  const [persona, setPersona] = useState(null)

  const recibirPersona = (datos) => {
    setPersona(datos)
  }

  return (
    <div className="ej4-padre">
      <p className="ej4-titulo">Componente Padre</p>

      <div className="ej4-hermanos">
        <Hermano1 enviarAlPadre={recibirPersona} />
        <Hermano2 persona={persona} />
      </div>
    </div>
  )
}

export default Padre