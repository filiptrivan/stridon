import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import kwb from "../../../public/kwb-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const kwbKatalogVrednosti = [
  {
    imeKataloga: "KWB AKKU TOP pribor za aku alate",
    rutaKataloga: "https://drive.google.com/file/d/14yFw6dV6jnzqwOksY9_AECaI6wX3K8te/view?usp=drive_link",
  },
  {
    imeKataloga: "KWB dodaci za mašine katalog",
    rutaKataloga: "https://drive.google.com/file/d/1CpjLO7fBAU_twmPZy5KfHNJk27BG0MhV/view?usp=drive_link",
  },
  {
    imeKataloga: "KWB pribor",
    rutaKataloga: "https://drive.google.com/file/d/1E06fPvQOqKfLGxCzWH-nh_GQYfK2XtOz/view?usp=drive_link",
  },
];
const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>KWB alati - Stridon Group DOO 2023</title>
        <meta name="description" content="KWB mašine i alati, pogledajte naše mašine, alate i još mnogo toga. Pronađite informacije o proizvodima koji Vas zanimaju.✅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"KWB"}
        opis={translate("KWB alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
translate={translate}
        catalogueValues={kwbKatalogVrednosti}
      />
      <TextoviISlike
      title={"KWB"}
      naslovPasusa1={translate("naslov pasusa 1 kwb")}
      naslovPasusa2={translate("naslov pasusa 2 kwb")}
      naslovPasusa3={translate("naslov pasusa 3 kwb")}
      textPasusa1={translate("text pasusa 1 kwb")}
      textPasusa2={translate("text pasusa 2 kwb")}
      textPasusa3={translate("text pasusa 3 kwb")}
      slika1={kwb}
      textDoKraja={translate("text do kraja kwb")}
      linkDoProizvodjaca={translate("link do proizvodjaca kwb")}
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