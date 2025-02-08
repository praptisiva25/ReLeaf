import React from "react";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - Smart Waste Management</title>
        <meta
          name="description"
          content="Learn more about our mission to revolutionize waste management through technology and innovation."
        />
      </Head>
      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 bg-opacity-90">
          <h1 className="text-4xl font-bold mb-6 text-center text-green-700">About Us</h1>
          <p className="mb-6 text-gray-700 leading-relaxed text-center">
            We are committed to creating smarter, cleaner cities through efficient waste management solutions.
          </p>
          <h2 className="text-2xl font-semibold mt-8 text-green-600">Our Mission</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Our mission is to leverage technology and data-driven insights to optimize waste collection, reduce environmental impact, and improve urban living conditions.
          </p>
          <h2 className="text-2xl font-semibold mt-8 text-green-600">What We Do</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 leading-relaxed">
            <li>Develop intelligent waste collection solutions</li>
            <li>Optimize garbage truck routes for efficiency</li>
            <li>Implement IoT-based waste monitoring</li>
            <li>Provide real-time dashboards for municipalities</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 text-green-600">Why Choose Us?</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Our platform is designed specifically for government use, ensuring seamless integration with municipal operations, cost-effective implementation, and measurable improvements in urban cleanliness.
          </p>
          <h2 className="text-2xl font-semibold mt-8 text-green-600">Join Us in Building a Sustainable Future</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            We believe in a future where technology transforms waste management into an efficient, eco-friendly process. Let’s work together to make our cities cleaner and more sustainable!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
