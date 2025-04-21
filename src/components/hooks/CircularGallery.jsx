import React, { useState, useRef } from 'react';

const slideData = [
  {
    index: 0,
    headline: 'S. K. Kadva Patidar',
    button: 'Visit',
    src: '/home/SKKP.webp',
    link: 'https://skkp.technest.tech',
  },
  {
    index: 1,
    headline: 'Chat Room',
    button: 'Visit',
    src: '/home/Chat.webp',
    link: 'https://chat.technest.tech',
  },
  {
    index: 2,
    headline: 'Trend Shift',
    button: 'Visit',
    src: '/home/TrendShift.webp',
    link: 'https://trendshift.technest.tech',
  },
  {
    index: 3,
    headline: 'Portfolio Website',
    button: 'Visit',
    src: '/home/Portfollio.webp',
    link: 'https://portfolio.technest.tech',
  },
  {
    index: 4,
    headline: 'CA Firm',
    button: 'Visit',
    src: '/home/CAFirm.webp',
    link: 'https://cafirm.technest.tech',
  },
  {
    index: 5,
    headline: 'Automation',
    button: 'Visit',
    src: '/home/GExtenstion.webp',
    link: 'https://automation.technest.tech',
  },
];

const Slide = ({ slide, current, handleSlideClick }) => {
  const slideRef = useRef();

  const handleMouseMove = (e) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty('--x', e.clientX - (r.left + r.width / 2));
    el.style.setProperty('--y', e.clientY - (r.top + r.height / 2));
  };

  const handleMouseLeave = () => {
    const el = slideRef.current;
    el.style.setProperty('--x', 0);
    el.style.setProperty('--y', 0);
  };

  let classNames = 'slide';
  if (current === slide.index) classNames += ' slide--current';
  else if (current - 1 === slide.index) classNames += ' slide--previous';
  else if (current + 1 === slide.index) classNames += ' slide--next';

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={() => handleSlideClick(slide.index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img className="slide__image" alt={slide.headline} src={slide.src} />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{slide.headline}</h2>
        {/* <button
          className="slide__action btn"
          onClick={(e) => {
            e.stopPropagation(); // Prevent slide change
            window.open(slide.link, '_blank');
          }}
        >
          {slide.button}
        </button> */}
      </article>
    </li>
  );
};

const SliderControl = ({ type, title, handleClick }) => (
  <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
    <svg className="Cardicon" viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </button>
);

const Slider = ({ slides, heading }) => {
  const [current, setCurrent] = useState(0);
  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index) => {
    if (current !== index) setCurrent(index);
  };

  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  return (
    <div className="slider" aria-labelledby={headingId}>
      <h3 id={headingId} className="visuallyhidden">
        {heading}
      </h3>

      <ul className="slider__wrapper" style={wrapperTransform}>
        {slides.map((slide) => (
          <Slide
            key={slide.index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="slider__controls">
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default function App() {
  return <Slider heading="" slides={slideData} />;
}
