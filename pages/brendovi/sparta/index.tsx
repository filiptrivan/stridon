import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import sparta from "../../../public/sparta-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";

const spartaKatalogVrednosti = [
  {
    imeKataloga: "Sparta, MTX katalog",
    rutaKataloga: "https://drive.google.com/file/d/1wASvbffFJGKsAIN9fb1R48XCrtJmYXkM/view?usp=drive_link",
  },
];

const index = () => {
    const { t: translate } = useTranslation("sparta");
  return (
    <div>
      <Head>
        <title>{translate('SpartaMetaTitle')}</title>
        <meta name="description" content={translate('SpartaMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"Sparta Logo"}
        opisNaHomePage={translate("Sparta alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        translate={translate}
        catalogueValues={spartaKatalogVrednosti}
      />
      <TextoviISlike
      title={"Sparta"}
      naslovPasusa1={translate("naslov pasusa 1 sparta")}
      naslovPasusa2={translate("naslov pasusa 2 sparta")}
      naslovPasusa3={translate("naslov pasusa 3 sparta")}
      textPasusa1={translate("text pasusa 1 sparta")}
      textPasusa2={translate("text pasusa 2 sparta")}
      textPasusa3={translate("text pasusa 3 sparta")}
      slika1={sparta}
      textDoKraja={translate("text do kraja sparta")}
      linkDoProizvodjacaText={translate("link do proizvodjaca text sparta")}
      linkDoProizvodjacaUrl="https://www.prodavnicaalata.rs/proizvodjaci/sparta/"
      />
    </div>
  );
};

export default index;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["sparta", "NavBar", "Footer"])),
    },
  };
}