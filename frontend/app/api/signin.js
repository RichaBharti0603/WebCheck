import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { email, password } = req.body;

  try {
    const connection = await connectDB();

    // Find user in the webcheck_users table
    const [users] = await connection.execute("SELECT * FROM webcheck_users WHERE email = ?", [email]);
    if (users.length === 0) return res.status(401).json({ message: "Invalid credentials" });

    const user = users[0];

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error("Signin Error:", error); // ✅ Logs error in the server console
    res.status(500).json({ message: "Internal Server Error", error: error.message }); // ✅ Sends error response
  }
}
