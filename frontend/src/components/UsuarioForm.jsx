import { useState, useEffect } from "react";

export default function UsuarioForm({ onSave, usuarioEdit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    rol: "mesero"
  });

  useEffect(() => {
    if (usuarioEdit) {
      setFormData(usuarioEdit);
    }
  }, [usuarioEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ nombre: "", apellido: "", email: "", telefono: "", rol: "mesero" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        name="apellido"
        placeholder="Apellido"
        value={formData.apellido}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Correo"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleChange}
      />
      <select name="rol" value={formData.rol} onChange={handleChange}>
        <option value="mesero">Mesero</option>
        <option value="host">Host</option>
      </select>
      <button type="submit">Guardar</button>
    </form>
  );
}
