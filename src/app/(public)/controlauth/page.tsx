"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import credentials from "../../../../credentials.json"; // Importing credentials
import Footer from "../../../components/Footer";

interface Credentials {
  [key: string]: string;
}

const typedCredentials: Credentials = credentials;

const ControlAuth: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (typedCredentials[name] && typedCredentials[name] === password) {
      router.push("/controldo"); // Redirect to control actions page
    } else {
      setError("Invalid credentials. Please try again.");
      router.push("/landing"); // Redirect back to landing page
    }
  };

  return (
    <><div className="h-screen  flex items-center justify-center bg-[url('/bggray.png')] bg-cover bg-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 bg-opacity-80 backdrop-blur-md  transform -translate-y-16">
        <h2 className="text-2xl font-medium mb-6 text-center">Control Panel Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded mb-4"
            required />
          <label className="mb-2 font-medium">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded mb-4"
            required />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>

      </div>

    </div><Footer /></>


  
  );
};

export default ControlAuth;
