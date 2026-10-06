function Componente4({ persona }) {
  return (
    <div className="ej2-c4">
      <p className="ej2-titulo">Componente4</p>
      <div className="ej2-card">
        <h3>{persona.nombre}</h3>
        <p><strong>Dirección:</strong> {persona.direccion}</p>
        <p><strong>Ciudad:</strong> {persona.ciudad}</p>
      </div>
    </div>
  )
}

export default Componente4