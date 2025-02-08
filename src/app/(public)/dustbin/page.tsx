import Image from "next/image";

const SmartBin = () => {
  return (
    <section className="bg-white">
      {/* Top Tagline */}
      <div className="w-full text-center px-8 py-4 bg-white">
        <h2 className="text-2xl font-bold text-gray-900">
          <span className="text-black">SmartBin</span> : The AI-Powered Smart Dustbin that Sorts Your Waste for a Cleaner Tomorrow!
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-left">
          <p className="text-3xl font-medium text-gray-800">
            Throw. Detect. Segregate.
          </p>
          <p className="mt-2 text-3xl text-gray-700 leading-relaxed">
            Our AI-powered smart dustbin automatically sorts biodegradable and non-biodegradable waste for a greener planet.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-10 translate-x-24 translate-y-10">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg w-60 hover:bg-green-700 shadow-md">
              Learn More
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg w-60 hover:bg-green-700 shadow-md">
              Buy Now
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image 
            src="/dustbin.png" // Update with correct path
            alt="SmartBin"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default SmartBin;
