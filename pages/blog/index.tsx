import React from "react";
import Card from "./components/Card";
import Hero from "../components/Hero";

const index = () => {
  return (
    <div>
      <Hero
        titleNaHomePage={"Stridon Group Blog"}
        opisNaHomePage={
          "Najbolja prodavnica alata u gradu, raspolazemo sa najvecim asortimanom alata i masina u Srbiji."
        }
      />
      <Card/>
    </div>
  );
};

export default index;
