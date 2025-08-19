import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-20T00:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-xl">
      <div className="text-center text-white">
        <div className="text-sm font-medium mb-4 opacity-90">Event Starts In</div>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold">{timeLeft.days}</span>
            <span className="text-xs opacity-75">days</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</span>
            <span className="text-xs opacity-75">hours</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</span>
            <span className="text-xs opacity-75">minutes</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</span>
            <span className="text-xs opacity-75">seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;