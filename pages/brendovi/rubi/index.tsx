import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import rubi from "../../../public/rubi-logo2.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const rubiKatalogVrednosti = [
  {
    imeKataloga: "Rubi akcija 2023",
    rutaKataloga: "https://drive.google.com/file/d/1Pu0Sd3ZYpC0pF6NHKWoyE0qMG8Upuxv7/view?usp=drive_link",
  },
];
const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>{translate('RUBIMetaTitle')}</title>
        <meta name="description" content={translate('RUBIMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Rubi"}
        opis={translate("Rubi alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
translate={translate}
        catalogueValues={rubiKatalogVrednosti}
      />
      <TextoviISlike
      title={"Rubi"}
      naslovPasusa1={translate("naslov pasusa 1 rubi")}
      naslovPasusa2={translate("naslov pasusa 2 rubi")}
      naslovPasusa3={translate("naslov pasusa 3 rubi")}
      textPasusa1={translate("text pasusa 1 rubi")}
      textPasusa2={translate("text pasusa 2 rubi")}
      textPasusa3={translate("text pasusa 3 rubi")}
      slika1={rubi}
      textDoKraja={translate("text do kraja rubi")}
      linkDoProizvodjacaText={translate("link do proizvodjaca text rubi")}
      linkDoProizvodjacaUrl={translate("link do proizvodjaca url rubi")}
      />
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