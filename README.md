# Los Correa - Sistema CRUD de Usuarios (Meseros y Host)

## Descripción
Este proyecto es un sistema web para administrar usuarios de un restaurante llamado **Los Correa**. Permite hacer un CRUD (Crear, Leer, Actualizar, Eliminar) de usuarios con roles específicos: meseros y host (quienes organizan las mesas). El frontend está hecho con React y se conecta a un backend Node.js con Express que interactúa con una base de datos MySQL.

---

## Estructura del Proyecto

los-correa/
├── backend/
│ ├── db.js # Configuración y conexión a MySQL
│ ├── server.js # Servidor Express con endpoints CRUD
│ ├── controllers/ # Lógica para manejar usuarios
│ ├── models/ # Modelo y queries MySQL para usuarios
│ ├── routes/ # Rutas API REST
│ └── .env # Variables de entorno (DB credentials)
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/ # Componentes React (ListaUsuarios, FormUsuario, etc)
│ │ ├── pages/ # Páginas (UsuariosPage)
│ │ ├── App.jsx # Rutas y configuración React Router
│ │ ├── main.jsx # Punto de entrada
│ │ └── styles/ # Estilos Tailwind CSS o personalizados
│ ├── package.json
│ └── vite.config.js
│
├── README.md
└── package.json (para scripts raíz si es necesario)

yaml
Copiar
Editar

---

## Estructura de la Base de Datos MySQL

Base de datos: `los_correa`

Tabla: `usuarios`

| Campo          | Tipo                           | Atributos                                       | Descripción                        |
| -------------- | ------------------------------| -----------------------------------------------| --------------------------------- |
| id             | INT                           | PRIMARY KEY, AUTO_INCREMENT                    | Identificador único               |
| nombre         | VARCHAR(50)                   | NOT NULL                                      | Nombre del usuario                |
| apellido       | VARCHAR(50)                   | NOT NULL                                      | Apellido del usuario              |
| email          | VARCHAR(100)                  | UNIQUE, NOT NULL                              | Correo electrónico                |
| telefono       | VARCHAR(15)                   |                                               | Número de teléfono                |
| rol            | ENUM('mesero', 'host')        | NOT NULL                                     | Rol del usuario                  |
| creado_en      | TIMESTAMP                    | DEFAULT CURRENT_TIMESTAMP                      | Fecha de creación                |

---

## Dependencias y Herramientas

### Frontend (React + Vite + TailwindCSS)
- `react`
- `react-dom`
- `react-router-dom`
- `axios`
- `vite`
- `eslint`

### Backend (Node.js + Express + MySQL)
- `express`
- `mysql2`
- `cors`
- `dotenv`
- `nodemon` (dev)

---

## Configuración Básica

### Backend

1. Crear archivo `.env` con datos de conexión MySQL:
    ```
    DB_HOST=localhost
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=los_correa
    PORT=4000
    ```

2. Ejecutar servidor:
    ```bash
    cd backend
    npm install
    npm start
    ```

### Frontend

1. Instalar dependencias:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

2. Abrir navegador en `http://localhost:5173` (o puerto que indique Vite).

---

## Archivos Clave

### Backend

- **db.js**
  ```js
  import mysql from 'mysql2/promise';
  import dotenv from 'dotenv';

  dotenv.config();

  export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
server.js

js
Copiar
Editar
import express from 'express';
import cors from 'cors';
import usuariosRoutes from './routes/usuarios.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
Próximos pasos
Crear la base de datos y tabla en MySQL con el esquema proporcionado.

Implementar rutas CRUD en backend.

Construir componentes React que consuman la API.

Probar integración frontend-backend.