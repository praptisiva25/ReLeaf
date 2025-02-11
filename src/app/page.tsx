"use client";
import { auth } from "@clerk/nextjs/server";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";
import Footer from "../components/Footer";





const LandingPage: React.FC = () => {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (isLoaded && userId) {
      router.push("/landing");
    }
  }, [isLoaded, userId, router]);

  return (
    <div>
       <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">Releaf</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-green-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-green-600">About</a>
          <a href="#" className="text-gray-600 hover:text-green-600">Contact</a>
        </div>
        <div>
          <SignInButton>
            <Button className="mr-2 bg-gray-400 hover:bg-gray-500">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button className="bg-gray-400 text-white hover:bg-gray-500">Sign Up</Button>
          </SignUpButton>
          
        </div>
      </nav>
      <div className="relative">
  <div  
    className="bg-cover bg-center w-full h-[857px] relative "
    style={{ backgroundImage: "url('mo.png')" }}
  >
  <div className="absolute left-[15px] top-[166px] w-full text-white font-['Perpetua_Titling_MT'] text-[128px] font-light leading-none">
    <h1>RELEAF</h1>
    <h1>OUR INDIA</h1>
  </div>
  <div className="text-white font-['Perpetua'] absolute top-[450px] text-[50px] font-light leading-normal p-[20px]">

    <p>Smarter Recycling, Faster & Greener—Optimizing Collection,</p>
    <p>Streamlining, and Transport for a Sustainable Future!</p>
  </div>
  </div>
  </div>

  <div className="h-10"></div>

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
