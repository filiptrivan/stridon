import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import bosch from "../../../public/boschlogo2.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const boschKatalogVrednosti = [
  {
    imeKataloga: `Bosch DIY merni alati`,
    rutaKataloga: "https://drive.google.com/file/d/1BK8KkkGrq2n9J9x3M0ZysdQ24MdhjAqe/view?usp=share",
  },
  {
    imeKataloga: "Bosch pribor",
    rutaKataloga: "https://drive.google.com/file/d/1oVevfXbBrPfboKAJIQA62reSEowTyio7/view?usp=share",
  },
  {
    imeKataloga: "Bosch DREMEL",
    rutaKataloga: "https://drive.google.com/file/d/1xdVeZDXHNFhN3AwYE6XSW5dzVtcB_hSG/view?usp=share",
  },
  {
    imeKataloga: "Bosch EXPERT",
    rutaKataloga: "https://drive.google.com/file/d/1rpkCB0d9SXnuQ3Pg1WXzV3yUKCLhICSz/view?usp=share",
  },
  {
    imeKataloga: "Bosch Plavi",
    rutaKataloga:
      "https://drive.google.com/file/d/1lEwdsuzYNCMiq997mi2cS2jvPXfc6p88/view?usp=share",
  },
  {
    imeKataloga: "Bosch VP cenovnik",
    rutaKataloga:
      "https://drive.google.com/file/d/1966qI7dLpBlcsJkuEoaoxc9XzvShqH-H/view?usp=share",
  },
];
const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>{translate('BoschMetaTitle')}</title>
        <meta name="description" content={translate('BoschMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Bosch"}
        opis={translate("BOSCH alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        translate={translate}
        catalogueValues={boschKatalogVrednosti}
      />
      <TextoviISlike
        title={"Bosch"}
        naslovPasusa1={translate("naslov pasusa 1 bosch")}
        naslovPasusa2={translate("naslov pasusa 2 bosch")}
        naslovPasusa3={translate("naslov pasusa 3 bosch")}
        naslovPasusa4={translate("naslov pasusa 4 bosch")}
        textPasusa1={translate("text pasusa 1 bosch")}
        textPasusa2={translate("text pasusa 2 bosch")}
        textPasusa3={translate("text pasusa 3 bosch")}
        textPasusa4={translate("text pasusa 4 bosch")}
        slika1={bosch}
        textDoKraja={translate("text do kraja bosch")}
        linkDoProizvodjacaText={translate("link do proizvodjaca text bosch")}
        linkDoProizvodjacaUrl={translate("link do proizvodjaca url bosch")}
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
