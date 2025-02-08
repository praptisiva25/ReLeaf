import React from "react";
import Head from "next/head";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Smart Waste Management</title>
        <meta
          name="description"
          content="Get in touch with us for any inquiries about our waste management solutions."
        />
      </Head>
      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 bg-opacity-90">
          <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Contact Us</h1>
          <p className="mb-6 text-gray-700 leading-relaxed text-center">
            Have questions? Reach out to us and we’ll be happy to assist you!
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
                placeholder="Enter your message"
                rows={7}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
