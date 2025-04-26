import { useState, useEffect } from 'react'
import WeatherCard from './WeatherCard.jsx'

function Home() {
  const [city, setCity] = useState('')
  const [cityData, setCityData] = useState('Lucknow')
  const [data, setData] = useState('Lucknow')
  const [error, setError] = useState('')
  
  
  const apikey = import.meta.env.VITE_API_KEY;
  
  useEffect(() => {
    const fetchApi = async () => {
        let url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityData}`
      let rawData = await fetch(url)
      let data = await rawData.json()
      setError('')
      if(data?.error?.message){
         setError(data?.error?.message)
      }
      setData(data)
    }
    fetchApi()
  }, [cityData])
  
  const handleSearch = (e) => {
    e.preventDefault()
    setCityData(city)
  }
  
  const getbackground = (con) => {
    switch (con) {
      case "Clear":
        return "/videos/Clear.mp4"
      case "Rain":
        return "/videos/Rainy.mp4"
      case "Snow":
        return "/videos/Snowfall.mp4"
      case "Thunderstrom":
        return "/videos/Thunderstrom.mp4"
      case "Mist":
        return "/videos/Mist.mp4"
      case "Partly cloudy" && "Partly Cloudy":
        return "/videos/partyCloud.mp4"
      case "Sunny":
        return "/videos/Sunny.mp4"
      case "Patchy rain nearby":
        return "/videos/Patch.mp4"
      case "Light rain":
        return "/videos/Rainy.mp4"
      case "Fog":
        return "/videos/Mist.mp4"
      case "Cloudy":
        return "/videos/Cloudy.mp4"
      default:
        return "/videos/Clear.mp4"
    }
  }
  const videosrc = getbackground(data?.current?.condition?.text || "Clear")
  
  return (
    <>
    <video
    src={videosrc}
    muted
    autoPlay
    loop
    playsInline
    className="absolute top-0 w-full h-screen left-0 object-cover z-[-1]"
    >
    </video>
      <div className="container flex justify-center  h-screen content-center px-4">
        <div className="w-full max-w-md mt-[220px] mx-auto">
          <form onSubmit={handleSearch} className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 h-[50px]"
            />
            <p className="absolute px-2 text-red-600 mt-20 font-bold">{error}</p>
            <button
              type="submit"
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </button>
          </form>
          <WeatherCard data={data} />
        </div>
      </div>
    </>
  )
}

// Export should be at the bottom
export default Home