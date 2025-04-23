import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import knipex from "../../../public/knipex-logo.svg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const knipexKatalogVrednosti = [
  {
    imeKataloga: "Knipex katalog",
    rutaKataloga: "https://drive.google.com/file/d/1YgRP6jOCM6D4apCU-mRM_3mNn2yWiTpN/view?usp=drive_link",
  },
];
const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>{translate('KnipexMetaTitle')}</title>
        <meta name="description" content={translate('KnipexMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Knipex"}
        opis={translate("Knipex alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
translate={translate}
        catalogueValues={knipexKatalogVrednosti}
      />
      <TextoviISlike
      title={"Knipex"}
      naslovPasusa1={translate("naslov pasusa 1 knipex")}
      naslovPasusa2={translate("naslov pasusa 2 knipex")}
      naslovPasusa3={translate("naslov pasusa 3 knipex")}
      naslovPasusa4={translate("naslov pasusa 4 knipex")}
      textPasusa1={translate("text pasusa 1 knipex")}
      textPasusa2={translate("text pasusa 2 knipex")}
      textPasusa3={translate("text pasusa 3 knipex")}
      textPasusa4={translate("text pasusa 4 knipex")}
      slika1={knipex}
      textDoKraja={translate("text do kraja knipex")}
      linkDoProizvodjacaText={translate("link do proizvodjaca text knipex")}
      linkDoProizvodjacaUrl={translate("link do proizvodjaca url knipex")}
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