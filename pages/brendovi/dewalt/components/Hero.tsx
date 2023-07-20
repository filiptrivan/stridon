import MyModal from "@/pages/components/MyModal";
import React, { useState } from "react";

interface HeroProps {
  title: string;
  opis: string;
  naslovButtona: string;
}

const Hero: React.FC<HeroProps> = ({ title, opis, naslovButtona }) => {
  const [visible, setVisible] = useState(false);

  const handleOnClose = () => {
    setVisible(false);
  };
  return (
    <div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img custom-img-bosch text-center">
      {/* Overlay */}
      <div className="flex absolute top-0 left-0 right-0 bg-black/60 custom-img-bg " />
      <div className="left-0 w-full z-[2]">
        <div className=" max-w-[1140px] p-3 text-white mx-auto">
          <h1 className="text-6xl mb-2 font-medium">{title}</h1>
          <h2 className="text-xl mb-4">{opis}</h2>

          <button
            className="flex px-8 py-2 border rounded-md hover:bg-slate-600 duration-200 m-auto"
            onClick={() => setVisible(true)}
          >
            {naslovButtona}
          </button>
        </div>
      </div>
      <MyModal
        imeKataloga1={"Katalog1Dewalt"}
        imeKataloga2={" "}
        imeKataloga3={" "}
        imeKataloga4={" "}
        imeKataloga5={" "}
        rutaKataloga1={"/katalog.pdf"}
        rutaKataloga2={" "}
        rutaKataloga3={" "}
        rutaKataloga4={" "}
        rutaKataloga5={" "}
        onClose={handleOnClose}
        visible={visible}
      />
    </div>
  );
};

export default Hero;