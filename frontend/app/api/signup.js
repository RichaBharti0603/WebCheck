import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, password } = req.body;

  try {
    const connection = await connectDB();

    // Check if email already exists
    const [existingUser] = await connection.execute("SELECT * FROM webcheck_users WHERE email = ?", [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into MySQL database
    await connection.execute("INSERT INTO webcheck_users (name, email, password) VALUES (?, ?, ?)", [
      name,
      email,
      hashedPassword,
    ]);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup Error:", error); // ✅ Logs error in the server console
    res.status(500).json({ message: "Internal Server Error", error: error.message }); // ✅ Sends error response
  }
}
