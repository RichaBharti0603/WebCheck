"use client"; // Ensures client-side rendering

import { useState } from "react";
import Link from "next/link";
import styles from "./signup.module.css"; // Make sure you have this CSS file

export default function Signup() {
  // State to store user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Currently just logs the data)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    alert("Signup successful! (Backend Integration Pending)");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Your Account</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
      <p className={styles.redirectText}>
        Already have an account?{" "}
        <Link href="/signin" className={styles.link}>
          Sign in
        </Link>
      </p>
    </div>
  );
}
