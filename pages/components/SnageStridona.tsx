import React from "react";

const SnageStridona = () => {
  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-4 m-auto justify-center max-w-[1140px] p-3 text-center  mb-16 ">
        <div className="">
            <div><img src="/boschlogo.png" alt="" width={100} height={100} className="m-auto"/></div>
            <div className="text-xl font-medium mb-3"> Čekovima građana</div>
            <div>Na 4 rate bez kamate</div>
        </div>
        <div className="">
            <div><img src="/boschlogo.png" alt="" width={100} height={100} className="m-auto"/></div>
            <div className="text-xl font-medium mb-3"> Besplatna dostava</div>
            <div>Za kupovinu preko 15.000 RSD</div>
        </div>
        <div className="">
            <div><img src="/boschlogo.png" alt="" width={100} height={100} className="m-auto"/></div>
            <div className="text-xl font-medium mb-3"> Sigurna kupovina</div>
            <div>Garancija na kupljene mašine</div>
        </div>
        <div className="">
            <div><img src="/boschlogo.png" alt="" width={100} height={100} className="m-auto"/></div>
            <div className="text-xl font-medium mb-3"> Brza isporuka</div>
            <div>Isporuka 1-5 radnih dana</div>
        </div>
        
        
      </div>
    </div>
  );
};

export default SnageStridona;

// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4