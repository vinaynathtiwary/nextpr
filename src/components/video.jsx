import React, { useRef, useEffect } from 'react';

const Home = () => {
  const carouselFrameRef = useRef(null);
  const rotateIntRef = useRef(0);
  const sizeRef = useRef(0);
  const translateZRef = useRef(0);

  const nextHandler = () => {
    rotateIntRef.current += 1;
    if (rotateIntRef.current >= sizeRef.current) {
      rotateIntRef.current = 0;
    }
    animateSlider();
  };

  const prevHandler = () => {
    rotateIntRef.current -= 1;
    if (rotateIntRef.current < 0) {
      rotateIntRef.current = sizeRef.current - 1;
    }
    animateSlider();
  };

  const clickHandler = (index) => {
    let newInt = -1 * index;
    if (newInt < rotateIntRef.current + (-1 * (sizeRef.current / 2))) {
      rotateIntRef.current = sizeRef.current + newInt;
    } else {
      rotateIntRef.current = newInt;
    }

    animateSlider();
  };

  useEffect(() => {
    const el = carouselFrameRef.current;

    const size = el.children.length;
    sizeRef.current = size;
    const panelSize = el.offsetWidth;
    const translateZ = Math.round((panelSize / 2) / Math.tan(Math.PI / size));
    translateZRef.current = translateZ;

    el.style.transform = `rotateY(0deg) translateZ(-${translateZ}px)`;

    animateSlider();

    const handleResize = () => {
      // Handle resize if necessary
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const animateSlider = () => {
    const el = carouselFrameRef.current;
    const size = sizeRef.current;
    const ry = 360 / size;
    const translateZ = translateZRef.current;

    for (let i = 0; i < size; i++) {
      const z = (rotateIntRef.current * ry) + (i * ry);
      el.children[i].style.transform = `rotateY(${z}deg) translateZ(${translateZ}px)`;
    }
  };

  return (
    <div className='carouselMain'>
      <div>
        <h1 style={{color: 'black'}}>OUR WORKS</h1>
      </div>
      <section id="about">
      <div className="containerStyle">
        <div className="imageParaStyle">
          <p className="paragraphStyle">
            At Next Concept in Noida, we discover captivating stories and bring them to life on screen. With our world-class talent and dedicated team, we turn visions into unforgettable cinematic experiences, making dreams a reality
          </p>
        </div>
      </div>
    </section>
      <div id="perspective">
        <div id="carousel" ref={carouselFrameRef}>
          <figure onClick={() => clickHandler(6)}><iframe width="100%" height="100%" src="https://www.youtube.com/embed/idPevp7GUsE" allowfullscreen></iframe>1</figure>
          <figure onClick={() => clickHandler(1)}>2</figure>
          <figure onClick={() => clickHandler(2)}><iframe width="100%" height="100%" src="https://www.youtube.com/embed/idPevp7GUsE" allowfullscreen></iframe>3</figure>
          <figure onClick={() => clickHandler(3)}>4</figure>
          <figure onClick={() => clickHandler(4)}><iframe width="100%" height="100%" src="https://www.youtube.com/embed/idPevp7GUsE" allowfullscreen></iframe>5</figure>
          <figure onClick={() => clickHandler(5)}>6</figure>
          
          {/* Add other figures with click handlers */}
        </div>
      </div>
    </div>
  );
}

export default Home;
