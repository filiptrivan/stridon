const Text = ({ translate }: any) => {
  return (
    <div className="max-w-[1140px] m-auto py-10 my-10 border-2 p-16">
      {/* naslov */}
      <div className="text-5xl font-medium py-10">{translate("Politika Privatnosti")}</div>
      {/* podnaslov */}
      <div className="font-medium text-lg pb-4">{translate("Podaci firme")}</div>
      <div>
        {translate("Pun naziv pravnog subjekta: STRIDON GROUP DOO")} <br />
        {translate("Poštanska adresa: Vojislava Ilića 141g")} <br />
        {translate(
          "Delatnost i šifra delatnosti: 4615 – Posredovanje u prodaji nameštaja, "
        )}
        {translate("predmeta za domaćinstvo i metalne robe")} <br />
        {translate("Matični broj: 20588012")} <br />
        {translate("Poreski broj (PIB): 106376570")} <br />
        {translate("Web adresa: https://www.stridon.rs/")} <br />
        {translate("Kontakt telefon: +381-69-8058-374")} <br />
        {translate("Kontakt E-mail: office@stridon.rs")}
      </div>
      <div className="text-5xl font-medium pt-10 pb-5">{translate("pp1")}</div>
      <div className="py-2">{translate("pp2")}</div>
      <div className="py-2">{translate("pp3")}</div>
      <div className="py-2">{translate("pp4")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp5")}</div>
      <div>{translate("pp6")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp7")}</div>
      <div>{translate("pp8")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp9")}</div>
      <div>{translate("pp10")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp11")}</div>
      <div>{translate("pp12")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp13")}</div>
      <div>{translate("pp14")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp15")}</div>
      <div>{translate("pp16")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp17")}</div>
      <div>{translate("pp18")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp19")}</div>
      <div>{translate("pp20")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp21")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp22")}</div>
      <div>{translate("pp23")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp24")}</div>
      <div>{translate("pp25")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp26")}</div>
      <div>{translate("pp27")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp28")}</div>
      <div>{translate("pp29")}</div>
      <div className="font-medium text-lg pt-4 pb-2">{translate("pp30")}</div>
      <div>
        {translate(
          "pp31"
        )}
      </div>
    </div>
  );
};

export default Text;
