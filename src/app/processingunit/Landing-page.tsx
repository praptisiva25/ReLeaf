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



</div>



 );
};

export default LandingPage;

