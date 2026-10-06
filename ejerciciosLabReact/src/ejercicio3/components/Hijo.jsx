import { useState } from 'react'

function Hijo({ enviarAlPadre }) {
  const [texto, setTexto] = useState('')

  const enviar = () => {
    if (texto.trim() === '') return
    enviarAlPadre(texto)
    setTexto('')
  }

  return (
    <div className="ej3-hijo">
      <p className="ej3-titulo">Componente Hijo</p>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe un mensaje"
      />

      <button onClick={enviar}>Enviar al padre</button>
    </div>
  )
}

export default Hijo