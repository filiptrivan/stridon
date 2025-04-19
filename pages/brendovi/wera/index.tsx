import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import wera from "../../../public/wera-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const weraKatalogVrednosti = [
  {
    imeKataloga: "Wera katalog",
    rutaKataloga: "https://drive.google.com/file/d/140HnM3JRm2k_F4iF_j46tbchAST-S45O/view?usp=drive_link",
  },
];
const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Wera alati - Stridon Group DOO 2023</title>
        <meta name="description" content="Wera mašine i alati, pogledajte naše mašine, alate i još mnogo toga. Pronađite informacije o proizvodima koji Vas zanimaju.✅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Wera"}
        opis={translate("Wera alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
translate={translate}
        catalogueValues={weraKatalogVrednosti}
      />
      <TextoviISlike
      title={"Wera"}
      naslovPasusa1={translate("naslov pasusa 1 wera")}
      naslovPasusa2={translate("naslov pasusa 2 wera")}
      naslovPasusa3={translate("naslov pasusa 3 wera")}
      textPasusa1={translate("text pasusa 1 wera")}
      textPasusa2={translate("text pasusa 2 wera")}
      textPasusa3={translate("text pasusa 3 wera")}
      slika1={wera}
      textDoKraja={translate("text do kraja wera")}
      linkDoProizvodjaca={translate("link do proizvodjaca wera")}
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