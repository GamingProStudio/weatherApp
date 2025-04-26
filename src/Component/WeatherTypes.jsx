// WeatherTypes.jsx

export default function WeatherTypes() {
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
    <div className="mt-2 text-center w-full ">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Weather Types</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {weatherList.map((weather, index) => (
  <div
  key={index}
  className="bg-white bg-opacity-20 p-6 rounded-xl shadow-md hover:scale-105 transform transition duration-500 delay-75"
>
            <h2 className="text-xl font-semibold mb-2 text-blue-600">{weather.title}</h2>
            <p className="text-gray-700">{weather.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}