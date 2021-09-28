import React, { useState } from 'react';
import LeftArrow from './LeftArrow/LeftArrow';
import RightArrow from './RightArrow/RightArrow';

import './index.scss';

const Carousal = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  // next slide
  const goToNextSlide = () => {
    // if currentIndex and (slides.length - 1) equals then set currentIndex = 0
    // which makes currentIndex starts from 0 again
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  // previous slider
  const goToPreviousSlide = () => {
    // if currentIndex = 0 then set currentIndex = (slides.length - 1)
    // which makes currentIndex starts from the last
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  return (
    <div className='carousal'>
      <LeftArrow onClick={goToPreviousSlide} />
      <div className='slider'>
        {slides.map((slide, index) => (
          <main
            key={index}
            className={`${
              currentIndex === index ? 'slider__slide active' : 'slider__slide'
            }`}
          >
            <h1 className='slider__slide-title'>{slide.title}</h1>

            {/* lazy loading images if index and currentIndex matched only fetches images */}
            {index === currentIndex && (
              <img className='slider__slide-img' src={slide.image} />
            )}
          </main>
        ))}
      </div>
      <RightArrow onClick={goToNextSlide} />
    </div>
  );
};

export default Carousal;
