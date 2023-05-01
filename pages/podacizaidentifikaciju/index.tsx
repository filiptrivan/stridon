import React from "react";

const index = () => {
  return (
    <div>
      <div className="max-w-[1140px] m-auto py-10 my-10 border-2 p-16">
        {/* naslov */}
        <div className="text-5xl font-medium py-10">Podaci za identifikaciju</div>
        {/* podnaslov */}
        <div className="font-medium text-lg pb-4">Podaci firme</div>
        <div className="">
          Pun naziv pravnog subjekta: STRIDON GROUP DOO <br />
          Poštanska adresa: Borivoja Stevanovića 9 <br />
          Delatnost i šifra delatnosti: 4615 – Posredovanje u prodaji nameštaja,
          predmeta za domaćinstvo i metalne robe <br />
          Matični broj: 20588012 <br />
          Poreski broj (PIB): 106376570 <br />
          Web adresa: https://www.stridon.rs/ <br />
          Kontakt telefon: +381-69-8058-374 <br />
          Kontakt E-mail: office@prodavnicaalata.rs
        </div>
      </div>
    </div>
  );
};

export default index;
