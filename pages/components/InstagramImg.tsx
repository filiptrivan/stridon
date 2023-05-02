import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface InstagramImgProps{
  socialImg: StaticImageData;
}

const InstagramImg: React.FC<InstagramImgProps> = ({ socialImg }) => {
  return (
    <div className='relative'>
      <Image
        src={socialImg}
        alt='/'
        className='w-full h-full'
        layout='responsive'
      />
      {/* Overlay */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 group'>
      </div>
    </div>
  );
};

export default InstagramImg;