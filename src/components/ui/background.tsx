import Navbar from "../Navbar";
import { ReactNode } from "react";

interface BackgroundProps {
    children?: ReactNode;
}  


export default function Background({children} : BackgroundProps) {
    return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background Layer */}
      <svg 
        className="absolute top-0 left-0"
        width="300"
        height="1080"
        viewBox="0 0 300 1080"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
      >
        <ellipse
            cx="50.5018" 
            cy="500.201" 
            rx="616.055" 
            ry="203" 
            transform="rotate(90.326 58.5018 540.201)" 
            fill="#508D4E"
        />
      </svg>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
    );
}