import Image from "next/image";
import "../../styles/auth.css";

export default function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <Image src="/SignUp.jpg" alt="Signup" width={100} height={100} />
        <form>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Create a password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}
