export default function UsuarioList({ usuarios, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
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
            <td>{u.nombre}</td>
            <td>{u.apellido}</td>
            <td>{u.email}</td>
            <td>{u.telefono}</td>
            <td>{u.rol}</td>
            <td>
              <button className="edit-btn" onClick={() => onEdit(u)}>Editar</button>
              <button
                className="delete-btn"
                onClick={() => {
                  const confirmar = window.confirm(
                    `¿Está seguro que desea eliminar a este usuario: ${u.nombre} (${u.rol})?`
                  );
                  if (confirmar) {
                    onDelete(u.id);
                  }
                }}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
