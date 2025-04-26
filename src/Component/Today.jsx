import React from "react";
import { FixedSizeList as List } from "react-window";
import Navbar from './Navbar.jsx'

const WeatherTypes = () => {
  const weatherList = [
    { title: "Sunny", desc: "Clear skies with lots of sunshine." },
    { title: "Partly Cloudy", desc: "Some clouds but plenty of sunshine." },
    { title: "Cloudy", desc: "Sky fully covered with clouds." },
    { title: "Overcast", desc: "Thick gray cloud cover." },
    { title: "Rainy", desc: "Light or heavy water droplets falling." },
    { title: "Drizzle", desc: "Very light rain with tiny droplets." },
    { title: "Thunderstorm", desc: "Heavy rain with lightning and thunder." },
    { title: "Snowy", desc: "Ice crystals falling as snow." },
    { title: "Hail", desc: "Hard ice balls falling during storms." },
    { title: "Foggy", desc: "Low clouds near the ground, poor visibility." },
    { title: "Windy", desc: "Strong winds blowing through." },
    { title: "Misty", desc: "Light fog with water droplets." },
    { title: "Sleet", desc: "Frozen rain pellets hitting the ground." },
    { title: "Blizzard", desc: "Strong snowstorm with winds." },
    { title: "Hot", desc: "Very high temperature weather." },
    { title: "Cold", desc: "Very low temperature, icy feel." },
    { title: "Humid", desc: "Sticky wet air with high moisture." },
    { title: "Tornado", desc: "Spinning column of air touching the ground." },
  ];

  return (
    <>
    <Navbar />
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">

      {/* Background Video */}
      <video
        src="/videos/Cloudy.mp4"
        muted
        autoPlay
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      {/* Foreground Content */}
      <div className="relative w-full max-w-4xl h-[600px] mt-20">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Weather Types</h1>

        <List
          height={600}
          itemCount={weatherList.length}
          itemSize={160}
          width={"100%"}
        >
          {({ index, style }) => (
            <div style={style} className="p-4">
              <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300">
                <h2 className="text-xl font-semibold mb-2 text-blue-600">
                  {weatherList[index].title}
                </h2>
                <p className="text-black">{weatherList[index].desc}</p>
              </div>
            </div>
          )}
        </List>
      </div>

    </div>
    </>
  );
};

export default WeatherTypes;