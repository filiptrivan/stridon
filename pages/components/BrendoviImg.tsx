import Image from 'next/image';
import React from 'react';

const BrendoviImg = ({ brendoviImg }) => {
  return (
    <div className='relative card'>
      <Image
        src={brendoviImg}
        alt='/'
        className='w-full h-full cursor-pointer'
        layout='responsive'
      />
    </div>
  );
};

export default BrendoviImg;

// .product--image {
//     width: 100%;
//     height: 16em;
//     object-fit: cover;
//   }