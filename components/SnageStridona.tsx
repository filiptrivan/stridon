import Image from "next/image";
import React from "react";
import bank from "../public/bank-check (1).png";
import clock from "../public/clock (4).png";
import free from "../public/free-delivery (4).png";
import padlock from "../public/security (1).png";

const SnageStridona = ({ translate }: any) => {
  return (
    <div className="w-full bg-slate-100">
      <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 m-auto justify-center max-w-[1140px] p-3 text-center pb-14 pt-10 ">
        <div className="">
          <div>
            <Image
              src={free}
              alt={translate("Besplatna dostava")}
              width={48}
              height={48}
              className="m-auto  mb-2"
            />
          </div>
          <div className="text-xl font-medium mb-3">
            {" "}
            {translate("Besplatna dostava")}
          </div>
          <div>{translate("Za kupovinu preko 15.000 RSD")}</div>
        </div>
        <div className="">
          <div>
            <Image
              src={clock}
              alt={translate("Brza isporuka")}
              width={48}
              height={48}
              className="m-auto  mb-2"
            />
          </div>
          <div className="text-xl font-medium mb-3"> {translate("Brza isporuka")}</div>
          <div>{translate("Isporuka 1-5 radnih dana")}</div>
        </div>
        <div className="">
          <div>
            <Image
              src={padlock}
              alt={translate("Garancija na kupljene mašine")}
              width={48}
              height={48}
              className="m-auto  mb-2"
            />
          </div>
          <div className="text-xl font-medium mb-3"> {translate("Sigurna kupovina")}</div>
          <div>{translate("Garancija na kupljene mašine")}</div>
        </div>
        <div className="">
          <div>
            <Image
              src={bank}
              alt={translate("Čekovima građana")}
              width={48}
              height={48}
              className="m-auto  mb-2"
            />
          </div>
          <div className="text-xl font-medium mb-3"> {translate("Čekovima građana")}</div>
          <div>{translate("Na 4 rate bez kamate")}</div>
        </div>
      </div>
    </div>
  );
};

export default SnageStridona;

// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4
