import { useState } from 'react'

function Hermano1({ enviarAlPadre }) {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  const enviar = () => {
    if (nombre.trim() === '' || apellido.trim() === '') return
    enviarAlPadre({ nombre, apellido })
    setNombre('')
    setApellido('')
  }

  return (
    <div className="ej4-h1">
      <p className="ej4-titulo">Hermano 1</p>

      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />

      <input
        type="text"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        placeholder="Apellido"
      />

      <button onClick={enviar}>Enviar al hermano 2</button>
    </div>
  )
}

export default Hermano1