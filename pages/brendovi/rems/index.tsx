import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import rems from "../../../public/remslogo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const remsKatalogVrednosti = [
  {
    imeKataloga: "Rems akcija 2023",
    rutaKataloga: "https://drive.google.com/file/d/1S_H99PFic4pdtzFZOw2lSC0URAo6YFcV/view?usp=drive_link",
  },
];
const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>REMS alati - Stridon Group DOO 2023</title>
        <meta name="description" content="Rems mašine i alati, pogledajte naše mašine, alate i još mnogo toga. Pronađite informacije o proizvodima koji Vas zanimaju.✅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Rems"}
        opis={translate("REMS alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
translate={translate}
        catalogueValues={remsKatalogVrednosti}
      />
      <TextoviISlike
      title={"REMS"}
      naslovPasusa1={translate("naslov pasusa 1 rems")}
      naslovPasusa2={translate("naslov pasusa 2 rems")}
      naslovPasusa3={translate("naslov pasusa 3 rems")}
      textPasusa1={translate("text pasusa 1 rems")}
      textPasusa2={translate("text pasusa 2 rems")}
      textPasusa3={translate("text pasusa 3 rems")}
      slika1={rems}
      textDoKraja={translate("text do kraja rems")}
      linkDoProizvodjaca={translate("link do proizvodjaca rems")}
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