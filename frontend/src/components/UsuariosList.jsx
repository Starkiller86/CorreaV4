export default function UsuarioList({ usuarios, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="5" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Rol</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.nombre}</td>
            <td>{u.apellido}</td>
            <td>{u.email}</td>
            <td>{u.telefono}</td>
            <td>{u.rol}</td>
            <td>
              <button onClick={() => onEdit(u)}>Editar</button>
              <button onClick={() => onDelete(u.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
