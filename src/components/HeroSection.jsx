import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import Hero1 from '../assets/img/hero1.jpg'
import Hero2 from '../assets/img/hero2.png';
import Hero3 from '../assets/img/hero3.png';

const images = [Hero1, Hero2, Hero3];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="hero">
      <img src={images[currentIndex]} alt="Hero" className="hero-image" />

      <button className="nav-button prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="nav-button next" onClick={handleNext}>
        &#10095;
      </button>
    </section>
  );
}

export default HeroSection;
