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
      <Card
        naslovBloga={"Bosch GSBV 1"}
        vrstaBloga={"Masine"}
        tekstBloga={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cum libero repudiandae, explicabo labore minima aut nesciunt mollitia ipsam, soluta esse recusandae magnam dolorum totam beatae ullam quod architecto delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cum libero repudiandae, explicabo labore minima aut nesciunt mollitia "
        }
        datumBloga={"April 4 2023"}
      />
    </div>
  );
};

export default index;
