import React from "react";
import Head from "next/head";

const OurServices = () => {
  return (
    <>
      <Head>
        <title>Our Services - Smart Waste Management</title>
        <meta
          name="description"
          content="Discover our range of waste management services designed for efficiency and sustainability."
        />
      </Head>
      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 bg-opacity-90">
          <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Our Services</h1>
          <p className="mb-6 text-gray-700 leading-relaxed text-center">
            We offer a range of smart waste management solutions tailored for government and municipal use.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Smart Waste Collection</h2>
              <p className="text-gray-700 leading-relaxed">
                Our AI-driven system optimizes garbage collection routes, reducing fuel consumption and ensuring timely waste pickup.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Real-Time Monitoring</h2>
              <p className="text-gray-700 leading-relaxed">
                With IoT-enabled sensors, we provide real-time waste bin status updates to help municipalities make informed decisions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Data-Driven Insights</h2>
              <p className="text-gray-700 leading-relaxed">
                Our analytics platform gathers and processes waste management data to identify trends and improve efficiency.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Sustainability Initiatives</h2>
              <p className="text-gray-700 leading-relaxed">
                We support recycling programs and waste reduction strategies to create a cleaner and greener environment.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Automated Scheduling</h2>
              <p className="text-gray-700 leading-relaxed">
                Our system automates waste collection schedules based on real-time data, ensuring optimized efficiency and reduced costs.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Community Awareness Programs</h2>
              <p className="text-gray-700 leading-relaxed">
                We engage with local communities to promote waste segregation, recycling, and responsible waste disposal practices.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Integration with Government Policies</h2>
              <p className="text-gray-700 leading-relaxed">
                Our solutions align with municipal regulations and policies to streamline waste management and compliance reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
