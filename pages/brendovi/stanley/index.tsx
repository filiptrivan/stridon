import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import stanley from "../../../public/stanley-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const stanleyKatalogVrednosti = [
  {
    imeKataloga: "Stanley katalog",
    rutaKataloga: "https://drive.google.com/file/d/1B7teaotZAfVehBOZt-ENZvG3kRFScO9i/view?usp=drive_link",
  },
];
const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Stanley - Stridon Group DOO </title>
        <meta name="description" content="Stanley mašine i alati, pogledajte naše mašine, alate i još mnogo toga. Pronađite informacije o proizvodima koji Vas zanimaju.✅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Stanley"}
        opis={translate("Stanley alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        translate={translate} 
        catalogueValues={stanleyKatalogVrednosti}
      />
      <TextoviISlike
      title={"Stanley"}
      naslovPasusa1={translate("naslov pasusa 1 stanley")}
      naslovPasusa2={translate("naslov pasusa 2 stanley")}
      naslovPasusa3={translate("naslov pasusa 3 stanley")}
      textPasusa1={translate("text pasusa 1 stanley")}
      textPasusa2={translate("text pasusa 2 stanley")}
      textPasusa3={translate("text pasusa 3 stanley")}
      slika1={stanley}
      textDoKraja={translate("text do kraja stanley")}
      linkDoProizvodjaca={translate("link do proizvodjaca stanley")}
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