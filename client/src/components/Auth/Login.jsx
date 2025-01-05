import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
    .then((result) => {
      console.log("result",result);
      if (loginUser.fulfilled.match(result)) {
        navigate("/todos"); 
        console.log("Login successful:", result.payload);
      } else {
        console.error("Login failed:", result.payload);
      }
  
    })
  };

  return (
    <div className="min-h-screen bg-purple-200 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-purple-500"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="mt-1 p-2 pr-8 block w-full rounded-md border border-gray-300 focus:outline-purple-500"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading} className=" mt-4 w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <div className={`text-center ${!error ? "mt-4" : ""}`}>
          Have not created an account?{" "}
          <a href="/signup" className="text-purple-500 ">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
