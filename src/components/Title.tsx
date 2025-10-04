import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Typewriter from "typewriter-effect";

const Title: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full bg-gray-900 text-white p-4">
      
      <div className="w-48 h-48 mb-6">
        <DotLottieReact
          src="https://lottie.host/de121427-197e-47e7-9e03-162d26f586a5/LS3DmuecGQ.lottie"
          loop
          autoplay
        />
      </div>

     
      <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 text-center drop-shadow-lg">
        Prodify
      </h1>

    
      <div className="text-xl md:text-2xl text-gray-400 text-center">
        <Typewriter
          options={{
            strings: ["An E-Commerce Platform"],
            autoStart: true,
            loop: true,
            delay: 30,
          }}
        />
      </div>
    </div>
  );
};

export default Title;
