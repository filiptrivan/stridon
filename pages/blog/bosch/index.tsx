import Hero from "@/pages/components/Hero";
import React from "react";
import Card from "../components/Card";


const index = () => {
  return (
    <div>
      <Hero
        titleNaHomePage={"Blog Bosch"}
        opisNaHomePage={
          "Najbolja prodavnica alata u gradu, raspolazemo sa najvecim asortimanom alata i masina u Srbiji."
        }
      />
      <Card />
    </div>
  );
};

export default index;