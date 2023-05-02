import React from "react";
import bos from "../../public/boschlogo.png";
import devalt from "../../public/dewaltlogo.png";

import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div id="work" className="max-w-[1140px] mx-auto text-center">
      <p className="text-2xl sm:text-3xl  font-medium text-center pb-2 pt-16">Partneri</p>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-4 mt-4 pb-24">
        <InstagramImg socialImg={bos}/>
        <InstagramImg socialImg={devalt} />
        <InstagramImg socialImg={bos} />
        <InstagramImg socialImg={devalt} />
        <InstagramImg socialImg={bos} />
        <InstagramImg socialImg={devalt} />
        <InstagramImg socialImg={bos} />
        <InstagramImg socialImg={devalt} />
        <InstagramImg socialImg={devalt} />
        <InstagramImg socialImg={bos} />
        <InstagramImg socialImg={devalt} />
        <InstagramImg socialImg={devalt} />
      </div>
    </div>
  );
};

export default Instagram;
