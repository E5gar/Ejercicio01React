function Hermano2({ persona }) {
  return (
    <div className="ej4-h2">
      <p className="ej4-titulo">Hermano 2</p>

      <div className="ej4-card">
        {persona ? (
          <>
            <h3>{persona.nombre} {persona.apellido}</h3>
            <p><strong>Nombre:</strong> {persona.nombre}</p>
            <p><strong>Apellido:</strong> {persona.apellido}</p>
          </>
        ) : (
          <p>Aún no se ha recibido ningún dato</p>
        )}
      </div>
    </div>
  )
}

export default Hermano2