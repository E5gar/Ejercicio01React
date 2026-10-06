import { useState } from 'react';
import FilaEstudiante from './FilaEstudiante.jsx';

const estudiantes = [
  { id: 1, name: 'Jose Lazo', city: 'Huancayo' },
  { id: 2, name: 'Ana Trelles', city: 'Lima' },
  { id: 3, name: 'Pedro Gonzales', city: 'Arequipa' },
  { id: 4, name: 'Rosa Soto', city: 'Trujillo' },
];

function ListaEstudiantes() {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <div className="ej5-contenedor">
      <h2>Lista de estudiantes</h2>

      <div className="ej5-tabla-scroll">
        <table className="ej5-tabla">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante) => (
              <FilaEstudiante key={estudiante.id} estudiante={estudiante} onVer={setSeleccionado} />
            ))}
          </tbody>
        </table>
      </div>

      {seleccionado && (
        <div className="ej5-detalle">
          <h3>{seleccionado.name}</h3>
          <p>
            <strong>Id:</strong> {seleccionado.id}
          </p>
          <p>
            <strong>City:</strong> {seleccionado.city}
          </p>
        </div>
      )}
    </div>
  );
}

export default ListaEstudiantes;
