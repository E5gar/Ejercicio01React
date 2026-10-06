import React from 'react';
import { Link } from 'react-router-dom';

export default function Ejercicio1() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Ejercicio 1</h2>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}