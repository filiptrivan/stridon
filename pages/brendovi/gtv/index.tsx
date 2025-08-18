import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import gtv from "../../../public/gtv-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";

const gtvKatalogVrednosti = [
  {
    imeKataloga: "GTV katalog",
    rutaKataloga:
      "https://drive.google.com/file/d/1O7cEdZPw2CyvNTsxmfR7ZpL9GAXlpJ5k/view?usp=drive_link",
  },
];

const index = () => {
  const { t: translate } = useTranslation("gtv");
  return (
    <div>
      <Head>
        <title>{translate('GTVMetaTitle')}</title>
        <meta name="description" content={translate('GTVMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"GTV"}
        opisNaHomePage={translate("GTV alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        translate={translate}
        catalogueValues={gtvKatalogVrednosti}
      />
      <TextoviISlike
        title={"GTV Logo"}
        naslovPasusa1={translate("naslov pasusa 1 gtv")}
        naslovPasusa2={translate("naslov pasusa 2 gtv")}
        naslovPasusa3={translate("naslov pasusa 3 gtv")}
        naslovPasusa4={translate("naslov pasusa 4 gtv")}
        textPasusa1={translate("text pasusa 1 gtv")}
        textPasusa2={translate("text pasusa 2 gtv")}
        textPasusa3={translate("text pasusa 3 gtv")}
        textPasusa4={translate("text pasusa 4 gtv")}
        slika1={gtv}
        textDoKraja={translate("text do kraja gtv")}
        linkDoProizvodjacaText={translate("link do proizvodjaca text gtv")}
        linkDoProizvodjacaUrl="https://www.prodavnicaalata.rs/proizvodjaci/gtv/"
      />
    </div>
  );
};

export default index;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["gtv", "NavBar", "Footer"])),
    },
  };
}
