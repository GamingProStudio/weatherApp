import React,{useState} from "react";

function WeatherCard({data}) {
  return (
<div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-xl shadow-md mt-9 text-center">
      <h2 className="text-2xl font-bold">{data?.location?.region ? data?.location?.region:data?.location?.country}</h2>
      <p className="text-gray-600">Weather: {data?.current?.condition?.text}</p>
      <p className="text-3xl font-semibold">{data?.current?.temp_c}°C</p>
      <div className="text-sm text-gray-500">
        <p>Humidity: {data?.current?.humidity}%</p>
        <p>Wind: {data?.current?.wind_kph} km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;