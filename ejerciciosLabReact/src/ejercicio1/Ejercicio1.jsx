import { Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import './ejercicio1.css';

function Ejercicio1() {
  return (
    <div className="ej1">
      <Link to="/" className="ej1-volver">
        Regresar al Menú
      </Link>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default Ejercicio1;
