"use client";

import { useEffect, useState } from "react";
import { db } from "../../../drizzle/db"; 
import { OrdersTable } from "../../../drizzle/schema";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";

const TruckJour: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await db.select().from(OrdersTable).orderBy(OrdersTable.dateOfArrival);
        setOrders(fetchedOrders);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading orders...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
     <div className=" flex flex-col  items-center justify-center min-h-screen bg-[url('/bggray.png')] bg-cover bg-center">
      <h1 className="text-3xl font-medium text-center mb-6">All Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orders.map((order) => (
            <Card key={order.id} className="shadow-lg border border-gray-200">
              <CardHeader>
                <CardTitle>{order.companyName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Company ID:</strong> {order.companyId}</p>
                <p><strong>Description:</strong> {order.description}</p>
                <p><strong>Arrival Date:</strong> {new Date(order.dateOfArrival).toLocaleString()}</p>
                <p><strong>Location:</strong> {order.location}</p>
                <p className="text-gray-500 text-sm">Created: {new Date(order.createdAt).toLocaleString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
    </div>
    
    
  );
};

export default TruckJour;
