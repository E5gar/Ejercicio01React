import Componente2 from './Componente2.jsx'

function Componente1() {
  const persona = {
    nombre: 'Jaime',
    direccion: 'Jr. Junin 450',
    ciudad: 'Huancayo',
  }

  return (
    <div className="ej2-c1">
      <p className="ej2-titulo">Componente1</p>
      <Componente2 persona={persona} />
    </div>
  )
}

export default Componente1