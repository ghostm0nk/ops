import React from 'react';
import { Link } from 'react-router-dom';

const Calendar = () => {
  return (
    <div className="p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <Link to="/birdhuts" className="text-blue-600 hover:text-blue-700">
        View Bird Huts
      </Link>
      {/* Implement calendar functionality here */}
    </div>
  );
};

export default Calendar;