"use client";

import React, { useState } from "react";
import { db } from "../../../drizzle/db";
import { TruckTable, CompanyTable } from "../../../drizzle/schema";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { and, eq } from "drizzle-orm";
import Footer from "../../../components/Footer";

const ControlDo: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<"truck" | "company" | null>(null);
  const [formData, setFormData] = useState({ id: "", companyName: "", name: "", email: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (selectedTable === "company") {
        await db.insert(CompanyTable).values({
          id: formData.id,
          companyName: formData.companyName,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      } else if (selectedTable === "truck") {
        await db.insert(TruckTable).values({
          name: formData.name,
          email: formData.email,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
      alert("Data inserted successfully!");
      router.push("/landing"); // Redirect after successful insertion
    } catch (err) {
      console.error("Database error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="h-screen  flex items-center justify-center bg-[url('/bggray.png')] bg-cover bg-center">
    <div className="bg-white p-20 rounded-lg shadow-lg w-[500px] bg-opacity-90 backdrop-blur-md -translate-y-20">
      <h2 className="text-3xl font-medium mb-20 text-center">Admin Panel</h2>
      
      {/* Table Selection */}
      <div className="flex justify-between mb-6">
        <Button onClick={() => setSelectedTable("truck")}>Truck Table</Button>
        <Button onClick={() => setSelectedTable("company")}>Company Table</Button>
      </div>
  
      {/* Form Display */}
      {selectedTable && (
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col">
              {selectedTable === "company" ? (
                <>
                  <Label className="mb-2">Company ID:</Label>
                  <Input type="text" name="id" value={formData.id} onChange={handleChange} required />
                  
                  <Label className="mt-4 mb-2">Company Name:</Label>
                  <Input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
                </>
              ) : (
                <>
                  <Label className="mb-2">Truck Driver Name:</Label>
                  <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
                  
                  <Label className="mt-4 mb-2">Email:</Label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </>
              )}
  
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <Button type="submit" className="mt-4 w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
    </div>
    <Footer />
      </>
  

  

  );
};

export default ControlDo;
