import Image from "next/image";
import "../../styles/auth.css";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <Image src="/Login.jpg" alt="Login" width={200} height={200} />
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Log In</button>
        </form>
        <p className="auth-footer">
          Dont have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
