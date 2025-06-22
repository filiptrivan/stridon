const Text = ({ translate }: any) => {
  return (
    <div className="max-w-[1140px] m-auto py-8 px-8 sm:py-10 sm:px-10 my-10 border-2">
      <h1 className="text-5xl font-medium mb-10">{translate("Politika Privatnosti")}</h1>
      <h2 className="font-medium text-lg pb-4">{translate("Podaci firme")}</h2>
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
      <h2 className="text-5xl font-medium pt-10 pb-5">{translate("pp1")}</h2>
      <div className="py-2">{translate("pp2")}</div>
      <div className="py-2">{translate("pp3")}</div>
      <div className="py-2">{translate("pp4")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp5")}</h3>
      <div>{translate("pp6")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp7")}</h3>
      <div>{translate("pp8")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp9")}</h3>
      <div>{translate("pp10")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp11")}</h3>
      <div>{translate("pp12")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp13")}</h3>
      <div>{translate("pp14")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp15")}</h3>
      <div>{translate("pp16")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp17")}</h3>
      <div>{translate("pp18")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp19")}</h3>
      <div>{translate("pp20")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp21")}</h3>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp22")}</h3>
      <div>{translate("pp23")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp24")}</h3>
      <div>{translate("pp25")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp26")}</h3>
      <div>{translate("pp27")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp28")}</h3>
      <div>{translate("pp29")}</div>
      <h3 className="font-medium text-lg pt-4 pb-2">{translate("pp30")}</h3>
      <div>
        {translate(
          "pp31"
        )}
      </div>
    </div>
  );
};

export default Text;
