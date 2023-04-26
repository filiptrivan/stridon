import React from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Mapa from "./components/Mapa";

const contact = () => {
  return (
    <div>
      <Hero titleNaHomePage={"Kontaktirajte nas!"} opisNaHomePage={""}/>
      <Mapa/>
    </div>
  );
};

export default contact;
