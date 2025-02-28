import mysql from "mysql2/promise";

// Create database connection pool
export const db = await mysql.createPool({
  host: "localhost",   // Replace with your DB host
  user: "root",        // Replace with your DB username
  password: "HeyGuru123", // Replace with your DB password
  database: "webcheck", // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
