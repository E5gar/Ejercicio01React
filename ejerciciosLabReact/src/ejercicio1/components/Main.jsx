import Article1 from './Article1.jsx'
import Article2 from './Article2.jsx'
import Aside from './Aside.jsx'

function Main() {
  return (
    <main className="ej1-main">
      <section className="ej1-contenido">
        <p className="ej1-etiqueta">&lt;section&gt;</p>
        <div className="ej1-articulos">
          <Article1 />
          <Article2 />
        </div>
        <p className="ej1-etiqueta">&lt;/section&gt;</p>
      </section>
      <Aside />
    </main>
  )
}

export default Main