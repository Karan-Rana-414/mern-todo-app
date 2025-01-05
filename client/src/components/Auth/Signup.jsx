import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser({ name, email, password })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/");
      }
    });
  };

  return (
    <div className="min-h-screen bg-purple-200 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-purple-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-purple-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 pr-8 block w-full rounded-md border border-gray-300 focus:outline-purple-500"
          required
        />
        <button type="submit" disabled={loading} className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 mt-4"
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
      <div className={`text-center ${!error ? "mt-4" : ""}`}>
          Already have an account?{" "}
          <a href="/login" className="text-purple-500">
            Login
          </a>
        </div>
      </div>
    </div>  );
};

export default Signup;
