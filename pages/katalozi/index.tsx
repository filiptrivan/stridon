import React from "react";
import Card from "./components/Card";
import HeroWithoutButton from "../components/HeroWithoutButton";

const index = () => {
  return (
    <div>
      <HeroWithoutButton
        titleNaHomePage={"Katalozi"}
        opisNaHomePage={
          "Izbor izvrsnih alata na jednom mestu - Pregledajte naše kataloge!"
        }
      />
      <Card />
    </div>
  );
};

export default index;
