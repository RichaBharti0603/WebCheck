import mysql from "mysql2/promise";
import { PrismaClient } from "@prisma/client";
import { db } from "@/lib/db"; // ✅ Absolute import using `@/lib/db`


const db = new PrismaClient();
export { db };


// Create database connection pool
export const db = await mysql.createPool({
  host: "localhost",   
  user: "root",       
  password: "HeyGuru123", 
  database: "webcheck", 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
