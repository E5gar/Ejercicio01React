function FilaEstudiante({ estudiante, onVer }) {
  return (
    <tr>
      <td>{estudiante.id}</td>
      <td>{estudiante.name}</td>
      <td>{estudiante.city}</td>
      <td>
        <button onClick={() => onVer(estudiante)}>Ver</button>
      </td>
    </tr>
  )
}

export default FilaEstudiante