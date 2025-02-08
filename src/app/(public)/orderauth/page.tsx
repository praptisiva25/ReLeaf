"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { db } from "../../../drizzle/db";
import { CompanyTable } from "../../../drizzle/schema";

const OrderAuth: React.FC = () => {
  const router = useRouter();
  const [companyId, setCompanyId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false); // Fix hydration issue

  useEffect(() => {
    setIsClient(true);
  }, []);




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Query the database directly inside the same file
      const company = await db
        .select()
        .from(CompanyTable)
        .where(and(eq(CompanyTable.id, companyId), eq(CompanyTable.companyName, companyName)))
        .limit(1);

      if (company.length > 0) {
        localStorage.setItem("companyId", companyId);
        localStorage.setItem("companyName", companyName);
        router.push("/ordergive");
      } else {
        setError("Invalid credentials. Please try again.");
        router.push("/landing");
      }
    } catch (error) {
      console.error("Database error:", error);
      setError("Something went wrong. Try again later.");
    }
  };

  if (!isClient) return null; // Fix hydration issue

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Company Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 font-medium">Company ID:</label>
          <input
            type="text"
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
            className="p-2 border rounded mb-4"
            required
          />
          <label className="mb-2 font-medium">Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="p-2 border rounded mb-4"
            required
          />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderAuth;
