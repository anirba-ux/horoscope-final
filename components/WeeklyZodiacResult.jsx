import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ZodiacData from './ZodiacData'; 
import { bgImg2 } from '../assets';
import axios from 'axios';

const ZodiacDaily = () => {
  const { name } = useParams();
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Find the zodiac sign based on the 'name' parameter
  const sign = ZodiacData.find((z) => z.name.toLowerCase() === name.toLowerCase());

  useEffect(() => {
    const fetchHoroscope = async () => {
      setLoading(true);
      setError('');
      setHoroscope(null);

      try {
        const response = await axios.post(`http://localhost:5000/horoscope/${type}/${sign.name.toLowerCase()}`);

        setHoroscope(response.data.description);
      } catch (err) {
        setError('Failed to fetch horoscope. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (sign) {
      fetchHoroscope();
    }
  }, [sign]);

  if (!sign) {
    return <div className="text-center text-red-500 mt-10">Zodiac sign not found!</div>;
  }

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg2})` }}
    >
      <div className="flex flex-col items-center justify-center h-full p-6">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400 drop-shadow-[0_0_2px_black]">
          Daily Horoscope for {sign.name}
        </h1>

        <div className="bg-gray-300/50 p-6 rounded-lg shadow-lg max-w-3xl w-full mt-6">
          <div className="text-left w-full">
            <h2 className="text-2xl font-bold mb-4 text-purple-500 drop-shadow-[0_0_1px_blue]">
              Horoscope:
            </h2>
            {loading ? (
              <div className="text-center text-blue-500">Loading...</div>
            ) : error ? (
              <div className="text-center text-red-500">{error}</div>
            ) : (
              <p className="text-red-600 drop-shadow-[0_0_1px_black] font-bold mb-4 leading-relaxed">
                {horoscope}
              </p>
            )}
          </div>
        </div>

        {/* Go Back Button */}
        <div className="flex flex-col items-center mt-6">
          <button 
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Go Back to Zodiac List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZodiacDaily;
