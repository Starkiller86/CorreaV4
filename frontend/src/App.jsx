import { useState, useEffect } from "react";
import UsuarioForm from "./components/UsuarioForm";
import UsuarioList from "./components/UsuariosList";
import { getUsuarios, createUsuario, updateUsuario, deleteUsuario } from "./services/usuariosService";
import logo from "./assets/Frame1.png";

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
    <div className="container">
      <img src={logo} alt="Logo Los Correa" style={{ height: '100px' }} />
      <h1>Usuarios</h1>
      <UsuarioForm onSave={guardarUsuario} usuarioEdit={usuarioEdit} />
      <UsuarioList usuarios={usuarios} onEdit={editarUsuario} onDelete={eliminarUsuario} />
    </div>
  );
}
