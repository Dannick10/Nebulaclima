"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Weather } from "@/types/Weather";

export default function useGetLocaleAPI() {

  const [data, setData] = useState(null);
  const [city, SetCity] = useState<string>("aracaju");
  const [loading, SetLoading] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const api_key = process.env.NEXT_PUBLIC_KEY;

  useEffect(() => {
    if(typeof window !== 'undefined') {
       const storedCity = localStorage.getItem('cityWeather')
       if(storedCity) {
        SetCity(storedCity)
       }
    }
  },[])


  const fetchData = async () => {
    const countryCode = "BR";
    const language = "pt";
    const limit = 1;
    const link = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=${limit}&appid=9583730b2062b79690e88912c5724e10&lang=${language}`;
    SetLoading(true)
    try { 
      const response = await axios.get(link);
      const locationData = response.data[0];
      setData(locationData);
      
      fetchDataWeather(locationData.lat, locationData.lon);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const fetchDataWeather = async (lat: string, lon: string) => {
    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9583730b2062b79690e88912c5724e10&lang=pt&units=metric`;

    try {
      const response = await axios.get(link);
      setWeather(response.data);
      localStorage.setItem('cityWeather', response.data.name)
    } catch (error: any) {
      setError(error);
    }
    SetLoading(false)
  };

  return {
    data,
    error,
    fetchData,
    weather,
    city,
    SetCity,
    loading
  };
}
