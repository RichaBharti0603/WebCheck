import mysql from "mysql2/promise";

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root", // Change to your MySQL username
    password: "HeyGuru123", // Change to your MySQL password
    database: "webcheck_db",
  });
  return connection;
}
