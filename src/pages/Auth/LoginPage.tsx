import { useState } from "react";
import { Link } from "react-router";
import { authService } from "../../services/AuthService";
import axios from "axios";
import { setAuthToken } from "../../config/axios";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await authService.login(name, password);
      console.log("Login response:", response.token);

      //redirect to home page
      window.location.href = "/about";
      const token = response?.token;
      localStorage.setItem("token", token);
      setAuthToken(token);
    } catch (error: any) {
      console.log("Login error:", error);
    }
  };
  const handlTest = async (e: any) => {
    e.preventDefault();
    console.log("test");
  };
  return (
    <div className="p-4 space-y-4">
      <h3 className="text-3xl font-bold text-center ">Login</h3>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        <input
          value={name}
          className="border border-gray-200 p-2"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Username"
        />

        <input
          value={password}
          className="border border-gray-200 p-2"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button
          className="bg-blue-500 hover:bg-blue-400 cursor-pointer text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
          type="submit"
        >
          Login
        </button>
        <p className="text-center text-sm">
          Forgot your password?{" "}
          <Link to="/identify" className="text-blue-500">
            Reset Password
          </Link>
        </p>
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
