import React from "react";
import Head from "next/head";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Optimizing Waste Collection</title>
        <meta
          name="description"
          content="A smarter approach for cleaner cities using an intelligent waste collection system for government use."
        />
      </Head>
      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 bg-opacity-90">
          <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Optimizing Waste Collection: A Smarter Approach for Cleaner Cities</h1>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Efficient waste collection is a critical component of urban management, ensuring that cities remain clean and sustainable...
          </p>
          <h2 className="text-2xl font-semibold mt-8 text-green-600">Why Efficient Waste Collection Matters</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            An inefficient waste collection system can lead to overflowing dumpsters, delayed pickups, and increased pollution...
          </p>
          <h2 className="text-2xl font-semibold mt-8 text-green-600">How Our Platform Works</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mt-4 text-green-500">1. Route Optimization</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Our system uses advanced algorithms and real-time data to determine the most efficient routes for garbage truck drivers...
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mt-4 text-green-500">2. Smart Bin Monitoring</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Through IoT-enabled sensors, the platform can monitor the fill levels of waste bins across the city...
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mt-4 text-green-500">3. Government-Focused Dashboard</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                A centralized dashboard allows municipal authorities to oversee waste collection in real-time...
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mt-4 text-green-500">4. Data Analytics for Continuous Improvement</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                The platform collects and analyzes historical data on waste generation patterns...
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mt-8 text-green-600">Key Benefits of Our Platform</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 leading-relaxed">
            <li>Cost Savings</li>
            <li>Environmental Impact Reduction</li>
            <li>Improved Public Hygiene</li>
            <li>Increased Efficiency for Municipalities</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 text-green-600">Building a Smarter, Cleaner Future</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Our garbage collection and organization platform is more than just a scheduling tool—it’s a step toward a smarter, cleaner, and more sustainable urban environment...
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
