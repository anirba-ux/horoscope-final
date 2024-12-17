import React from 'react';
import { useNavigate } from 'react-router-dom';
import ZodiacData from './ZodiacData';

const ZodiacList = () => {
  const zodiacSigns = ZodiacData; // Ensure ZodiacData is an array
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">HOROSCOPE</h1>
      <p className="text-center mb-8">Select One</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {zodiacSigns.map((sign, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:bg-gray-200"
            onClick={() => navigate(`/horoscope/${sign.name.toLowerCase()}`)}
          >
            <img src={sign.img} alt={sign.name} className="w-20 h-20 mb-2" />
            <h2 className="font-bold text-lg">{sign.name || 'Unknown'}</h2>
            <p className="text-sm text-center text-gray-600 mt-2">
              {sign.description ? sign.description.slice(0, 100) : 'Description not available'}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZodiacList;
