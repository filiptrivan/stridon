import React from "react";
import Card from "./components/Card";
import HeroWithoutButton from "../components/HeroWithoutButton";

const index = () => {
  return (
    <div>
      <HeroWithoutButton
        titleNaHomePage={"Katalozi"}
        opisNaHomePage={
          "lorem ipsum, lorem adenom venum, raqulen esta min oparal.lorem ipsum, lorem adenom venum."
        }
      />
      <Card />
    </div>
  );
};

export default index;
