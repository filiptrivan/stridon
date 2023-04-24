import React from "react";
import bos from "../../public/bos.webp";
import devalt from "../../public/devalt.webp";
import makita from "../../public/makita.webp";
import milvoki from "../../public/milvoki.webp";
import vera from "../../public/vera.webp";

import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div id="work" className="max-w-[1140px] mx-auto text-center pb-24">
      <p className="text-2xl font-bold pb-4">Katalozi</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4">
        <InstagramImg socialImg={bos} />
        <InstagramImg socialImg={devalt} />
        <InstagramImg socialImg={makita} />
        <InstagramImg socialImg={milvoki} />
        <InstagramImg socialImg={vera} />
        <InstagramImg socialImg={bos} />
      </div>
    </div>
  );
};

export default Instagram;
