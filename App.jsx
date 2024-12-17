import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ZodiacList from './components/ZodiacList';
import ZodiacDetail from './components/ZodiacDetail';
import DailyZodiacResult from './components/DailyZodiacResult';
import WeeklyZodiacResult from './components/WeeklyZodiacResult';
import MonthlyZodiacResult from './components/MonthlyZodiacResult';
import Horoscope from './pages/Horoscope';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/zodiac" element={<Horoscope />} />
        <Route path="/" element={<ZodiacList />} />
        <Route path="/horoscope/:name" element={<ZodiacDetail />} />
        {/* Additional routes for daily, weekly, and monthly */}
        <Route path="/zodiac-daily/:name" element={<DailyZodiacResult />} />
        <Route path="/zodiac-weekly/:name" element={<WeeklyZodiacResult />} />
        <Route path="/zodiac-monthly/:name" element={<MonthlyZodiacResult />} />
      </Routes>
    </Router>
  );
}

export default App;
