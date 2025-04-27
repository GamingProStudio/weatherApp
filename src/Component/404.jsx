import React from 'react';
// If you're using a custom Button component, import it properly
// Or use simple <button> instead if Button is not available

export default function Custom404() { // Capital L
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-4">
      <img 
        src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif" 
        alt="Cute 404" 
        className="w-64 h-64 object-contain mb-8"
      />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        It seems you're lost. Let's get you back home!
      </p>

      <button 
        onClick={() => window.location.href = '/'} 
        className="px-6 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all text-lg"
      >
        Go Home
      </button>
    </div>
  );
}