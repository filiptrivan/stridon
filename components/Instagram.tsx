import React from "react";
import galens from "../public/galens.png";
import enterijer from "../public/enterijerjankovic.png";
import coligoars from "../public/coligoars2.png";
import hidroina from "../public/hidroina2.png";
import ingradnja from "../public/ingradnjaa.png";
import lokring from "../public/lokring.png";
import kokreator from "../public/kokreator.png";
import mbmrad from "../public/mbmrad2.png";
import termotim from "../public/termotim.png";
import nobili from "../public/nobili.png";
import vitorog from "../public/vitorog.png";
import mimiz from "../public/mimiz.png";

import InstagramImg from "./InstagramImg";

const Instagram = ({ translate }: any) => {
  return (
    <div id="work" className="max-w-[1140px] mx-auto text-center p-1">
      <h2 className="text-2xl sm:text-3xl  font-medium text-center pb-2 pt-16">
        {translate("Ko su naši klijenti?")}
      </h2>
      <h3 className="text-base sm:text-xl">{translate("klijenti")}</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-3 mt-4 pb-24">
        <InstagramImg socialImg={galens} title="Galens logo" />
        <InstagramImg socialImg={enterijer} title="Enterijer logo" />
        <InstagramImg socialImg={coligoars} title="Coligoars logo" />
        <InstagramImg socialImg={hidroina} title="Hidroina logo" />
        <InstagramImg socialImg={ingradnja} title="Ingradnja logo" />
        <InstagramImg socialImg={lokring} title="Lokring logo" />
        <InstagramImg socialImg={kokreator} title="Kokreator logo" />
        <InstagramImg socialImg={mbmrad} title="MBM Rad logo" />
        <InstagramImg socialImg={termotim} title="Termotim logo" />
        <InstagramImg socialImg={nobili} title="Nobili logo" />
        <InstagramImg socialImg={vitorog} title="Vitorog logo" />
        <InstagramImg socialImg={mimiz} title="Mimiz logo" />
      </div>
    </div>
  );
};

export default Instagram;
