import express from "express";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", usuariosRoutes);

app.listen(3001, () => {
  console.log("🚀 Servidor backend en http://localhost:3001");
});
