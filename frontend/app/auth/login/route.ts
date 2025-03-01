import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "@/lib/db"; // ✅ Ensure correct import

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        // Check if user exists
        const user = await db.user.findUnique({ where: { email } });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Compare password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, "your_secret_key", { expiresIn: "1h" });

        return NextResponse.json({ message: "Login successful", token }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
