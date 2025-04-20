import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import mtx from "../../../public/mtx-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const mtxKatalogVrednosti = [
  {
    imeKataloga: "MTX, Sparta katalog",
    rutaKataloga: "https://drive.google.com/file/d/1wASvbffFJGKsAIN9fb1R48XCrtJmYXkM/view?usp=drive_link",
  },
];
const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>MTX alati – akcija, ponuda i cene | Stridon Group DOO</title>
        <meta name="description" content="MTX mašine i alati, pogledajte našu ponudu profesionalnih mašina, alata i dodatne opreme. Pronađite prave informacije o proizvodima koji Vas zanimaju.✅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"MTX"}
        opis={translate("MTX alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
translate={translate}
        catalogueValues={mtxKatalogVrednosti}
      />
      <TextoviISlike
      title={"MTX"}
      naslovPasusa1={translate("naslov pasusa 1 mtx")}
      naslovPasusa2={translate("naslov pasusa 2 mtx")}
      naslovPasusa3={translate("naslov pasusa 3 mtx")}
      textPasusa1={translate("text pasusa 1 mtx")}
      textPasusa2={translate("text pasusa 2 mtx")}
      textPasusa3={translate("text pasusa 3 mtx")}
      slika1={mtx}
      textDoKraja={translate("text do kraja mtx")}
      linkDoProizvodjaca={translate("link do proizvodjaca mtx")}
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