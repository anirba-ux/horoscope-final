import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Import useNavigate
import ZodiacData from './ZodiacData';
import { bgImg1, daily_horo, weekly_horo, monthly_horo } from '../assets';
import axios from 'axios';

const ZodiacDetail = () => {
  const { name } = useParams();
  const sign = ZodiacData.find((z) => z.name.toUpperCase() === name.toUpperCase());
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  // Function to fetch horoscope based on type
  const fetchHoroscope = async (type) => {
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

    // After fetching the horoscope, navigate to the respective page
    if (type === 'today') {
      navigate(`/zodiac-daily/${sign.name.toLowerCase()}`);
    } else if (type === 'week') {
      navigate(`/zodiac-weekly/${sign.name.toLowerCase()}`);
    } else if (type === 'month') {
      navigate(`/zodiac-monthly/${sign.name.toLowerCase()}`);
    }
  };

  if (!sign) {
    return <div className="text-center text-red-500 mt-10">Horoscope not found!</div>;
  }

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg1})` }}
    >
      <div className="flex flex-col items-center justify-center h-full p-6">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400 drop-shadow-[0_0_2px_black]">
          {sign.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={sign.img}
            alt={sign.name}
            className="w-80 h-80 rounded-full border-4 border-blue-900 mx-auto mt-24"
          />
          <div className="bg-gray-300/50 p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <div className="text-left w-full">
              <h2 className="text-2xl font-bold mb-4 text-purple-500 drop-shadow-[0_0_1px_blue]">
                Description/Features:
              </h2>
              <p className="text-red-600 drop-shadow-[0_0_1px_black] font-bold mb-4 leading-relaxed">
                {sign.description}
              </p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex space-x-4 mt-10">
          <button onClick={() => fetchHoroscope('today')}>
            <img src={daily_horo} alt="Daily" className="w-36 h-36 hover:scale-110 transition-all duration-300" />
          </button>

          <button onClick={() => fetchHoroscope('week')}>
            <img src={weekly_horo} alt="Weekly" className="w-40 h-40 hover:scale-110 transition-all duration-300" />
          </button>

          <button onClick={() => fetchHoroscope('month')}>
            <img src={monthly_horo} alt="Monthly" className="w-40 h-40 hover:scale-110 transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZodiacDetail;
