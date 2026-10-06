import Componente3 from './Componente3.jsx'

function Componente2({ persona }) {
  return (
    <div className="ej2-c2">
      <p className="ej2-titulo">Componente2</p>
      <Componente3 persona={persona} />
    </div>
  )
}

export default Componente2