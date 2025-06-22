import Image from "next/image";
import React from "react";
import bank from "../public/bank-check (1).png";
import clock from "../public/clock (4).png";
import free from "../public/free-delivery (4).png";
import padlock from "../public/security (1).png";

const SnageStridona = ({ translate }: any) => {
  return (
    <div className="w-full bg-stone-50">
      <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 m-auto justify-center max-w-[1140px] p-3 text-center py-20 px-4">
        <div>
          <div>
            <Image
              src={free}
              alt={translate("Besplatna dostava")}
              width={48}
              height={48}
              className="m-auto  mb-2"
            />
          </div>
          <h2 className="text-xl font-medium mb-3">
            {" "}
            {translate("Besplatna dostava")}
          </h2>
          <div>{translate("Za kupovinu preko 15.000 RSD")}</div>
        </div>
        <div>
          <div>
            <Image
              src={clock}
              alt={translate("Brza isporuka")}
              width={48}
              height={48}
              className="m-auto  mb-2"
            />
          </div>
          <h2 className="text-xl font-medium mb-3"> {translate("Brza isporuka")}</h2>
          <div>{translate("Isporuka 1-5 radnih dana")}</div>
        </div>
        <div>
          <div>
            <Image
              src={padlock}
              alt={translate("Garancija na kupljene mašine")}
              width={48}
              height={48}
              className="m-auto  mb-2"
            />
          </div>
          <h2 className="text-xl font-medium mb-3"> {translate("Sigurna kupovina")}</h2>
          <div>{translate("Garancija na kupljene mašine")}</div>
        </div>
        <div>
          <div>
            <Image
              src={bank}
              alt={translate("Čekovima građana")}
              width={48}
              height={48}
              className="m-auto  mb-2"
            />
          </div>
          <h2 className="text-xl font-medium mb-3"> {translate("Čekovima građana")}</h2>
          <div>{translate("Na 4 rate bez kamate")}</div>
        </div>
      </div>
    </div>
  );
};

export default SnageStridona;

// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4
