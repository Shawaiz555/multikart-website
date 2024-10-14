import React, { useState, useEffect } from 'react';

const ProductTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(); // Current date
    targetDate.setDate(targetDate.getDate() + 30); // Adding 30 days

    const interval = setInterval(() => {
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });

      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="flex flex-col justify-center items-center space-x-1 p-2 mb-5 bg-white rounded-xl shadow-md">
      <h1 className='text-center font-bold ml-1 text-orange-400'>Timer</h1>
      <div className="text-center mt-2">
        <p className="text-sm text-black">Days</p>
        <p className="text-3xl font-semibold text-orange-400">{timeLeft.days}</p>
      </div>
      <div className="text-center mt-2">
        <p className="text-sm text-black">Hours</p>
        <p className="text-3xl font-semibold text-orange-400">{timeLeft.hours}</p>
      </div>
      <div className="text-center mt-2">
        <p className="text-sm text-black">Minutes</p>
        <p className="text-3xl font-semibold text-orange-400">{timeLeft.minutes}</p>
      </div>
      <div className="text-center mt-2">
        <p className="text-sm text-black">Seconds</p>
        <p className="text-3xl font-semibold text-orange-400">{timeLeft.seconds}</p>
      </div>
    </div>
  );
};

export default ProductTimer;
