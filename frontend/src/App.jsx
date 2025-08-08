import { useState, useEffect } from "react";
import UsuarioForm from "./components/UsuarioForm";
import UsuarioList from "./components/UsuariosList";
import { getUsuarios, createUsuario, updateUsuario, deleteUsuario } from "./services/usuariosService";

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEdit, setUsuarioEdit] = useState(null);

  const cargarUsuarios = async () => {
    const res = await getUsuarios();
    setUsuarios(res.data);
  };

  const guardarUsuario = async (usuario) => {
    if (usuarioEdit) {
      await updateUsuario(usuarioEdit.id, usuario);
      setUsuarioEdit(null);
    } else {
      await createUsuario(usuario);
    }
    cargarUsuarios();
  };

  const eliminarUsuario = async (id) => {
    await deleteUsuario(id);
    cargarUsuarios();
  };

  const editarUsuario = (usuario) => {
    setUsuarioEdit(usuario);
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD Usuarios - Los Correa</h1>
      <UsuarioForm onSave={guardarUsuario} usuarioEdit={usuarioEdit} />
      <UsuarioList usuarios={usuarios} onEdit={editarUsuario} onDelete={eliminarUsuario} />
    </div>
  );
}
