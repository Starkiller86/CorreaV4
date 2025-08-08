import db from "../db.js";

export const obtenerUsuarios = (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

export const crearUsuario = (req, res) => {
  const { nombre, apellido, email, telefono, rol } = req.body;
  db.query(
    "INSERT INTO usuarios (nombre, apellido, email, telefono, rol) VALUES (?, ?, ?, ?, ?)",
    [nombre, apellido, email, telefono, rol],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Usuario creado", id: result.insertId });
    }
  );
};

export const actualizarUsuario = (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, email, telefono, rol } = req.body;
  db.query(
    "UPDATE usuarios SET nombre=?, apellido=?, email=?, telefono=?, rol=? WHERE id=?",
    [nombre, apellido, email, telefono, rol, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Usuario actualizado" });
    }
  );
};

export const eliminarUsuario = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM usuarios WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Usuario eliminado" });
  });
};
