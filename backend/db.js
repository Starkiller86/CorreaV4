import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "020614",
  database: process.env.DB_NAME || "los_correa",
});

connection.connect(err => {
  if (err) throw err;
  console.log("✅ Conectado a MySQL");
});

export default connection;
