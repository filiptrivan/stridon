import React from "react";
import galens from "../../public/galens.png";
import enterijer from "../../public/enterijerjankovic.png";
import coligoars from "../../public/coligoars2.png";
import hidroina from "../../public/hidroina2.png";
import ingradnja from "../../public/ingradnjaa.png";
import lokring from "../../public/lokring.png";
import kokreator from "../../public/kokreator.png";
import mbmrad from "../../public/mbmrad2.png";
import termotim from "../../public/termotim.png";
import nobili from "../../public/nobili.png";
import vitorog from "../../public/vitorog.png";
import mimiz from "../../public/mimiz.png";

import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div id="work" className="max-w-[1140px] mx-auto text-center p-1">
      <h2 className="text-2xl sm:text-3xl  font-medium text-center pb-2 pt-16">
        Ko su naši klijenti?
      </h2>
      <h3 className="text-base sm:text-xl">
        Poznate renomirane domaće firme iz oblasti građevine, stolarstva,
        keramike i drugih. Mala i srednja preduzeća kao i individualci koji
        imaju potrebu za kvalitetnim alatom i brzom uslugom!
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-3 mt-4 pb-24">
      <InstagramImg socialImg={galens} />
        <InstagramImg socialImg={enterijer} />
        <InstagramImg socialImg={coligoars} />
        <InstagramImg socialImg={hidroina} />
        <InstagramImg socialImg={ingradnja} />
        <InstagramImg socialImg={lokring} />
        <InstagramImg socialImg={kokreator} />
        <InstagramImg socialImg={mbmrad} />
        <InstagramImg socialImg={termotim} />
        <InstagramImg socialImg={nobili} />
        <InstagramImg socialImg={vitorog} />
        <InstagramImg socialImg={mimiz} />
      </div>
    </div>
  );
};

export default Instagram;
