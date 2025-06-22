import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import kwb from "../../../public/kwb-logo.svg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";

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
        <title>{translate('KWBMetaTitle')}</title>
        <meta name="description" content={translate('KWBMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"KWB"}
        opisNaHomePage={translate("KWB alati - Uvoznik za Srbiju")}
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
      linkDoProizvodjacaText={translate("link do proizvodjaca text kwb")}
      linkDoProizvodjacaUrl={"https://www.prodavnicaalata.rs/proizvodjaci/kwb-germany/"}
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