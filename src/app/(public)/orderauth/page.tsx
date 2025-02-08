"use client";

import { and, eq } from "drizzle-orm";
import { TruckTable } from "../../../drizzle/schema";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../../drizzle/db"; // Directly importing DB connection

const TruckAuth: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Query the database directly
      const driver = await db
        .select()
        .from(TruckTable)
        .where(and(eq(TruckTable.name, name), eq(TruckTable.email, email)))
        .limit(1); // Ensure we only get one result

      if (driver.length > 0) {
        router.push("/truckjour"); // Redirect to truck journey page
      } else {
        setError("Invalid credentials. Please try again.");
        router.push("/landing"); // Redirect back to landing page
      }
    } catch (error) {
      console.error("Database error:", error);
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Truck Driver Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded mb-4"
            required
          />
          <label className="mb-2 font-medium">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TruckAuth;
