import React from "react";
import Mapa from "./components/Mapa";
import HeroWithoutButton from "./components/HeroWithoutButton";

const kontakt = () => {
  return (
    <div>
      <HeroWithoutButton titleNaHomePage={"Kontaktirajte nas!"} opisNaHomePage={""}/>
      <Mapa email={"stridongroup@gmail.rs"} kontakt={"064/616-5003"} kontakt2={"060/737-88-05"} adresa={"Vojislava Ilića 141 g"}/>
    </div>
  );
};

export default kontakt;


