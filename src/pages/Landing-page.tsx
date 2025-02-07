import React from 'react';
import Navbar from '@/components/Navbar';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: "url('page1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "857px",
          flexShrink: 0,
        }}
      >
        
        <h1 style={{
    color: "#FFF",
    fontFamily: "Perpetua Titling MT",
    fontSize: "128px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal" ,
    marginTop:'166'
  }}>RELEAF</h1>
        <h1     style={{
    color: "#FFF",
    fontFamily: "Perpetua Titling MT",
    fontSize: "128px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
    marginTop:'166'
  }}>OUR INDIA</h1>
      </div>
    </div>
  );
};

export default LandingPage;
