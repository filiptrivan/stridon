import React from "react";

const DynamicCounter = ({ translate }: any) => {
  return (
    <div className="w-full bg-stone-50 text-center py-20 px-4">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14 text-primaryRed">
        {translate("Brojevi govore umesto nas")}
      </h2>
      <div
        className="grid gap-10 lg:grid-cols-4 m-auto justify-center max-w-[1140px] text-center"
      >
        <h3>
          <div className="text-5xl font-medium mb-3 num">10,630+</div>
          <div className="text-xl mb-3">
            {translate("Veleprodajnih kupaca")}
          </div>
        </h3>
        <h3>
          <div className="text-5xl font-medium mb-3 num">120+</div>
          <div className="text-xl mb-3">{translate("Dilera širom Srbije")}</div>
        </h3>
        <h3>
          <div className="text-5xl font-medium mb-3 num" data-val="100">
            100%
          </div>
          <div className="text-xl mb-3">
            {translate("Zadovoljstvo uslugom")}
          </div>
        </h3>
        <h3>
          <div className="text-5xl font-medium mb-3 num" data-val="30">
            30+
          </div>
          <div className="text-xl mb-3">
            {translate("Brendova koje zastupamo")}
          </div>
        </h3>
      </div>
    </div>
  );
};

export default DynamicCounter;
