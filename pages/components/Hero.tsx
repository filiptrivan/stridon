import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="flex absolute top-0 left-0 right-0 bg-black/60 custom-img-bg" />
      <div className='left-0 w-full z-[2]'>
        <div className=" max-w-[1140px] p-3 pt-12 text-white mx-auto">
          <h1 className="text-6xl mb-2 font-semibold">Stridon Group</h1>
          <p className="text-xl">
            Najbolja prodavnica alata u gradu, raspolazemo sa najvecim
            asortimanom alata i masina u Srbiji.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
