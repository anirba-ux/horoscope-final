import React from 'react';
import DailyZodiacResult from '../components/DailyZodiacResult';
import WeeklyZodiacResult from '../components/WeeklyZodiacResult';
import MonthlyZodiacResult from '../components/MonthlyZodiacResult';
import ZodiacDetail from '../components/ZodiacDetail';
import ZodiacList from '../components/ZodiacList';

const Horoscope = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Horoscope</h1>

      {/* List of zodiac signs */}
      <ZodiacList />

      {/* Details of selected zodiac sign */}
      <ZodiacDetail />

      {/* Display results for daily, weekly, and monthly */}
      <DailyZodiacResult />
      <WeeklyZodiacResult />
      <MonthlyZodiacResult />
    </div>
  );
};

export default Horoscope;
