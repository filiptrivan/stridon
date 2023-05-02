
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';
import ErrorPage from '../_error';

interface SliderProps{
slides: {image: string}[];
} 

const Slider  =  ({ slides }: SliderProps) => {
  if(!slides){
    return <ErrorPage/>
  }
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[1140px] mx-auto pb-16 pt-16 '>
      <h1 className='text-2xl sm:text-3xl font-medium text-center mb-1'>Galerija</h1>
      <div className='relative flex justify-center p-3'>

      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-1000'
                : 'opacity-0'
            }
          >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-white/80 hover:text-black/80 duration-200 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt='/'
                  width={1440}
                  height={600}
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-white/80 hover:text-black/80 duration-200 cursor-pointer select-none z-[2]'
                size={50}
              />
            </div>
        );
    })}
    </div>
    </div>
  );
};

export default Slider;