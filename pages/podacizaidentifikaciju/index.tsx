import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Podaci za identifikaciju - Stridon Group DOO</title>
        <meta
          name="description"
          content="Otkrijte podatke za identifikaciju kompanije Stridon Group DOO. Saznajte više o našem poslovanju, kontakt informacijama i pravnom statusu.✅"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[1140px] m-auto py-10 my-10 border-2 p-16">
        {/* naslov */}
        <div className="text-5xl font-medium py-10">
          {translate("Podaci za identifikaciju")}
        </div>
        {/* podnaslov */}
        <div className="font-medium text-lg pb-4">
          {translate("Podaci firme")}
        </div>
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
      </div>
    </div>
  );
};

export default index;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
