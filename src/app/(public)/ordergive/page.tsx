"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../../drizzle/db";
import { OrdersTable } from "../../../drizzle/schema";

const OrderGive: React.FC = () => {
  const router = useRouter();

  // Use useState for company details
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [dateOfArrival, setDateOfArrival] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Retrieve company details from sessionStorage
    const storedCompanyId = localStorage.getItem("companyId");
    const storedCompanyName = localStorage.getItem("companyName");

    console.log("Retrieved from sessionStorage:", storedCompanyId, storedCompanyName);

    if (!storedCompanyId || !storedCompanyName) {
      router.push("/orderauth"); // Redirect if no data is found
    } else {
      setCompanyId(storedCompanyId);
      setCompanyName(storedCompanyName);
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!companyId || !companyName) {
        setError("Company details are missing. Please log in again.");
        return;
      }

      // Insert order into the database
      await db.insert(OrdersTable).values({
        id: crypto.randomUUID(),
        companyId,
        companyName,
        description,
        dateOfArrival: new Date(dateOfArrival),
        location,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      
      alert("Order placed successfully!");
      router.push("/landing"); // Redirect after success
    } catch (error) {
      console.error("Database error:", error);
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-[url('/bggray.png')] bg-cover bg-center">
  <div className="bg-white p-8 rounded-lg shadow-md w-96 bg-opacity-80 backdrop-blur-md transform -translate-y-5">
        <h2 className="text-2xl font-bold mb-6 text-center">Place an Order</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 font-medium">Company ID:</label>
          <input
            type="text"
            value={companyId || ""}
            disabled
            className="p-2 border rounded mb-4 bg-gray-200 cursor-not-allowed"
          />
          <label className="mb-2 font-medium">Company Name:</label>
          <input
            type="text"
            value={companyName || ""}
            disabled
            className="p-2 border rounded mb-4 bg-gray-200 cursor-not-allowed"
          />
          <label className="mb-2 font-medium">Order Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded mb-4"
            required
          />
          <label className="mb-2 font-medium">Date of Arrival:</label>
          <input
            type="date"
            value={dateOfArrival}
            onChange={(e) => setDateOfArrival(e.target.value)}
            className="p-2 border rounded mb-4"
            required
          />
          <label className="mb-2 font-medium">Delivery Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderGive;
