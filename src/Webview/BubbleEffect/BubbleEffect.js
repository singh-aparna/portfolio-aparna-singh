import React from 'react';


const BubbleEffect = () => {
  const bubbles = Array.from({ length: 20 });

  return (
    <div className="h-screen bg-black relative overflow-hidden ">
      {bubbles.map((_, index) => (
        <div
          key={index}
          className="absolute bottom-0 bg-blue-500 rounded-full opacity-75"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
            animation: `bubble ${Math.random() * 5 + 5}s infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleEffect;
