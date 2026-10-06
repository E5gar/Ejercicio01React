import Componente4 from './Componente4.jsx'

function Componente3({ persona }) {
  return (
    <div className="ej2-c3">
      <p className="ej2-titulo">Componente3</p>
      <Componente4 persona={persona} />
    </div>
  )
}

export default Componente3