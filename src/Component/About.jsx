import React from "react";
import Navbar from './Navbar.jsx'

const About = () => {
  return (
    <>
    <div className="bg-blue-50 flex flex-col items-center min-h-screen p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">About Weather App</h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Welcome to our Weather App! Stay updated with real-time weather information, forecasts, and more.
          Our goal is to make checking the weather simple, accurate, and beautiful for everyone.
        </p>
        <p>-Abhiuday Maurya</p>
        <div className="mt-6">
          <img
            src="https://i.gifer.com/7VE.gif"
            alt="Clear Weather"
            className="w-full max-w-sm mx-auto rounded-xl"
          />
        </div>
        
              <button 
        onClick={() => window.location.href = '/'} 
        className="px-6 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all text-lg mt-10"
      >
        Go Home
      </button>
      
      </div>
    </div>
    </>
  );
};

export default About;