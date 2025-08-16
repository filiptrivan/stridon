import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import max from "../../../public/max-logo.svg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";

const maxKatalogVrednosti = [
  {
    imeKataloga: "MAX katalog",
    rutaKataloga: "https://drive.google.com/file/d/1k3AzwfcE_RlB8xJiO1Tp1nZQwrnEyZje/view?usp=drive_link",
  },
];

const index = () => {
    const { t: translate } = useTranslation("max");
  return (
    <div>
      <Head>
        <title>{translate('MAXMetaTitle')}</title>
        <meta name="description" content={translate('MAXMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"MAX"}
        opisNaHomePage={translate("MAX vezivači armature i žica - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        translate={translate}
        catalogueValues={maxKatalogVrednosti}
      />
      <TextoviISlike
      title={"MAX Logo"}
      naslovPasusa1={translate("naslov pasusa 1 max")}
      naslovPasusa2={translate("naslov pasusa 2 max")}
      naslovPasusa3={translate("naslov pasusa 3 max")}
      textPasusa1={translate("text pasusa 1 max")}
      textPasusa2={translate("text pasusa 2 max")}
      textPasusa3={translate("text pasusa 3 max")}
      slika1={max}
      textDoKraja={translate("text do kraja max")}
      linkDoProizvodjacaText={translate("link do proizvodjaca text max")}
      linkDoProizvodjacaUrl="https://www.prodavnicaalata.rs/proizvodjaci/max/"
      />
    </div>
  );
};

export default index;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["max", "NavBar", "Footer"])),
    },
  };
}