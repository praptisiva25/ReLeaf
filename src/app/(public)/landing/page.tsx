"use client"; 
import React from 'react';
import { useRouter } from "next/navigation";
import Footer from "../../../components/Footer";

const LandingPage: React.FC = () => {
  const router = useRouter(); // Use client-side routing

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div  
          className="bg-cover bg-center w-screen h-[857px] relative"
          style={{ backgroundImage: "url('mo.png')" }}
        >
          <div className="absolute left-[15px] top-[166px] w-full text-white font-['Perpetua_Titling_MT'] text-[128px] font-light leading-none">
            <h1>RELEAF</h1>
            <h1>OUR INDIA</h1>
          </div>
          <div className="text-white font-['Perpetua'] absolute top-[450px] text-[50px] font-light leading-normal p-[20px]">
            <p>Smarter Recycling, Faster & Greener—Optimizing Collection,</p>
            <p>Streamlining and Transport for a Sustainable Future!</p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl text-[#508D4E] dark:text-white text-center my-6 font-bold" >
        Join ReLeaf as
      </h1>

      {/* Role Selection Section */}
      <div className="h-[350px] bg-white flex items-center justify-center shadow-md rounded-lg">
        <div className="flex space-x-40">
          {[
            { img: "/mdi_truck.png", label: "Truck Driver", link: "/truckauth" },
            { img: "/ic_baseline-factory.png", label: "Apply Order", link: "/orderauth" },
            { img: "/ri_government-fill.png", label: "Controller", link: "/controlauth" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.img} alt={item.label} className="w-24 h-24 mb-4" />
              <button 
                onClick={() => router.push(item.link)}
                className="bg-[#508D4E] text-white px-6 py-2 rounded-full hover:bg-[#3f7a3d] transition-colors"
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#508D4E] p-8 rounded-lg max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-4">What we do?</h1>
            <p className="text-gray-100">
              At Releaf, we are dedicated to streamlining waste management processes for government agencies.
              As a comprehensive, user-friendly platform, Releaf serves as a centralized solution for coordinating
              the efficient transport of waste from various locations to designated collection centers. Our mission
              is to support government initiatives in maintaining cleaner, healthier environments by simplifying 
              the logistics of waste collection and ensuring timely, organized, and eco-friendly waste transportation.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="../stockGraphic.svg" alt="Analytics illustration" className="w-full max-w-md" />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: "Centralized Platform", desc: "One-stop solution for managing all government waste transport needs from various locations" },
            { title: "Efficient Order Management", desc: "Your investments and personal data are protected with state-of-the-art security measures" },
            { title: "Real-Time Monitoring", desc: "Provides real-time updates with helpful info ensuring transparency and accountability" },
            { title: "Optimized Logistics", desc: "Navigate our intuitive platform with ease, whether you're new to investing or a seasoned pro" },
            { title: "Support for Sustainable Practices", desc: "Our AI-driven insights help you manage your investments" },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-green-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='h-[30px]'></div>

      {/* Footer Section */}
      <Footer />
    </div>
    
  );
};

export default LandingPage;
