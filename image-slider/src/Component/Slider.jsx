import React, { useEffect, useRef, useState } from 'react'
import data from "./data.json"

const Slider = () => {
  const [next, setNext] = useState(0);
  const ref = useRef(null);

  const handleNext = () => {
    setNext(prev => prev === data.length - 1 ? 0 : prev + 1);
  };

  const handlePrev = () => {
    setNext(prev => prev === 0 ? data.length - 1 : prev - 1);
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 1500); // 1.5 sec auto-slide
    return () => clearInterval(ref.current);
  }, []);

  return (
    <div 
      className='container' 
      onMouseEnter={() => clearInterval(ref.current)} 
      onMouseLeave={() => ref.current = setInterval(handleNext, 1500)}
    >
      <div className='left-btn'>
        <button onClick={handlePrev} className='button'>{"<"}</button>
      </div>

      <img src={data[next].download_url} alt='flower' />

      <div className='right-btn'>
        <button onClick={handleNext} className='button'>{">"}</button>
      </div>
    </div>
  )
}

export default Slider
