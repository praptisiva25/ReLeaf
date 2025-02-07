import React from 'react';
import Navbar from '@/components/Navbar';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
  <div  
    className="bg-cover bg-center w-full h-[857px] relative"
    style={{ backgroundImage: "url('page1.png')" }}
  >
  <div className="absolute left-[15px] top-[166px] w-full text-white font-['Perpetua_Titling_MT'] text-[128px] font-light leading-none">
    <h1>RELEAF</h1>
    <h1>OUR INDIA</h1>
  </div>
  <div className="text-white font-['Perpetua'] absolute top-[450px] text-[50px] font-normal leading-normal p-[20px]">

    <p>Smarter Recycling, Faster & Greener—Optimizing Collection,</p>
    <p>Streamlining, and Transport for a Sustainable Future!</p>
  </div>
  </div>
  </div>


<div className="h-[350px] bg-white flex flex-row space-x-300 items-center justify-center shadow-md rounded-lg">
  <div className=' flex space-x-5'>
  <div >
    <img
      src="mdi_truck.png"
      alt="Truck Driver"
      className="h-[200px] w-auto object-contain "
    />
    </div>
    


  <div >
    <img
      src="mdi_truck.png"
      alt="Truck Driver"
      className="h-[200px] w-auto object-contain "
    />
  </div>
  <div >
    <img
      src="mdi_truck.png"
      alt="Truck Driver"
      className="h-[200px] w-auto object-contain"
    />
  </div>    
</div> 
 
</div>
<div className="bg-green-600 p-8 rounded-lg max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-4">What we do?</h1>
        <p className="text-gray-100">
          At Releaf, we are dedicated to streamlining waste management processes for government agencies. As a comprehensive, user-friendly platform, Releaf serves as a centralized solution for coordinating the efficient transport of waste from various locations to designated collection centers. Our mission is to support government initiatives in maintaining cleaner, healthier environments by simplifying the logistics of waste collection and ensuring timely, organized, and eco-friendly waste transportation.
        </p>
      </div>
      <div className="flex justify-center">
        <img src="/api/placeholder/400/300" alt="Analytics illustration" className="w-full max-w-md"/>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-green-600 mb-4">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg>
        </div>
        <h3 className="font-bold mb-2">Centralized Platform</h3>
        <p className="text-sm text-gray-600">One-stop solution for managing all government waste transport needs from various locations</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-green-600 mb-4">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h3 className="font-bold mb-2">Efficient Order Management</h3>
        <p className="text-sm text-gray-600">Your investments and personal data are protected with state-of-the-art security measures</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-green-600 mb-4">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h3 className="font-bold mb-2">Real-Time Monitoring</h3>
        <p className="text-sm text-gray-600">Provides real-time updates with helpful info ensuring transparency and accountability</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-green-600 mb-4">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h3 className="font-bold mb-2">Optimized Logistics</h3>
        <p className="text-sm text-gray-600">Navigate our intuitive platform with ease, whether you're new to investing or a seasoned pro</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-green-600 mb-4">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h3 className="font-bold mb-2">Support for Sustainable Practices</h3>
        <p className="text-sm text-gray-600">Our AI-driven insights help you manage your investments</p>
      </div>
    </div>
  </div>



</div>



 );
};

export default LandingPage;

