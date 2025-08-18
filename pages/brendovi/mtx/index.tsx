import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import mtx from "../../../public/mtx-logo.svg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";

const mtxKatalogVrednosti = [
  {
    imeKataloga: "MTX, Sparta katalog",
    rutaKataloga: "https://drive.google.com/file/d/1wASvbffFJGKsAIN9fb1R48XCrtJmYXkM/view?usp=drive_link",
  },
];

const index = () => {
    const { t: translate } = useTranslation("mtx");
  return (
    <div>
      <Head>
        <title>{translate('MTXMetaTitle')}</title>
        <meta name="description" content={translate('MTXMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"MTX"}
        opisNaHomePage={translate("MTX alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        translate={translate}
        catalogueValues={mtxKatalogVrednosti}
      />
      <TextoviISlike
      title={"MTX Logo"}
      naslovPasusa1={translate("naslov pasusa 1 mtx")}
      naslovPasusa2={translate("naslov pasusa 2 mtx")}
      naslovPasusa3={translate("naslov pasusa 3 mtx")}
      textPasusa1={translate("text pasusa 1 mtx")}
      textPasusa2={translate("text pasusa 2 mtx")}
      textPasusa3={translate("text pasusa 3 mtx")}
      slika1={mtx}
      textDoKraja={translate("text do kraja mtx")}
      linkDoProizvodjacaText={translate("link do proizvodjaca text mtx")}
      linkDoProizvodjacaUrl="https://www.prodavnicaalata.rs/proizvodjaci/mtx/"
      />
    </div>
  );
};

export default index;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["mtx", "NavBar", "Footer"])),
    },
  };
}