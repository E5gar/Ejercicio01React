import { useState } from 'react'
import Hijo from './Hijo.jsx'

function Padre() {
  const [mensaje, setMensaje] = useState('')

  const recibirDato = (dato) => {
    setMensaje(dato)
  }

  return (
    <div className="ej3-padre">
      <p className="ej3-titulo">Componente Padre</p>

      <div className="ej3-resultado">
        <p>Dato recibido del hijo:</p>
        <h3>{mensaje || 'Aún no se ha recibido ningún dato'}</h3>
      </div>

      <Hijo enviarAlPadre={recibirDato} />
    </div>
  )
}

export default Padre