'use client'
import React, { useEffect, useState } from 'react';

const ClientsSection = () => {
  const clientImages = [
    '/assets/1brand.png',
    '/assets/2brand.png',
    '/assets/3brand.png',
    '/assets/4brand.png',
    '/assets/maxima.webp',
    '/assets/rajdhani.webp',
    '/assets/hari-darshan.webp',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // '/assets/logoimg.jpg',
    // ... Add more client image paths as needed
  ];

  const [moveLeft, setMoveLeft] = useState(false);

  useEffect(() => {
    // Add keyframes to document head
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes moveLeft {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      
      @keyframes moveRight {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `;
    document.head.appendChild(style);

    // Toggle the direction of movement every 5 seconds
    const interval = setInterval(() => {
      setMoveLeft(prevMoveLeft => !prevMoveLeft);
    }, 5000);

    return () => {
      clearInterval(interval);
      // Remove keyframes from document head when component unmounts
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="section" id="client">
      <h2 className="heading">Our Clients</h2>
      <div className="client-container">
        {clientImages.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`Client ${index + 1}`}
            className={moveLeft ? "animated-image-left" : "animated-image-right"}
          />
        ))}
      </div>
    </section>

  );
};

export default ClientsSection;
