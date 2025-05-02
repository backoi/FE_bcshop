import { useState } from "react";
import { authService } from "../../services/AuthService";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await authService.signup(username, email, password);
      console.log(response);
      alert("Register successful");
      // props.history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-4 space-y-4">
      <h3 className="text-3xl font-bold text-center ">Register</h3>
      <form className="flex flex-col space-y-4">
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          className="border border-gray-200 p-2"
          type="text"
          placeholder="Your Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border border-gray-200 p-2"
          type="text"
          placeholder="Email Address"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="border border-gray-200 p-2"
          type="password"
          placeholder="Password"
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          className="border border-gray-200 p-2"
          type="password"
          placeholder="Confirm Password"
        />
        <button
          onClick={handleRegister}
          className="bg-blue-500 text-white p-2 cursor-pointer font-bold py-2 px-4 rounded hover:bg-blue-400"
          type="submit"
        >
          Register
        </button>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
