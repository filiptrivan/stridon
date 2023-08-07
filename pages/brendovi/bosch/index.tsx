import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import bosch from "../../../public/boschlogo2.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const boschKatalogVrednosti = [
  {
    imeKataloga: `Bosch DIY merni alati`,
    rutaKataloga: "/Cenovnik Bosch DIY mernih alata - JUN 2023 SRB.pdf",
  },
  {
    imeKataloga: "Bosch pribor",
    rutaKataloga: "/Cenovnik Bosch pribora za mesec jul 2023 - SRB.pdf",
  },
  {
    imeKataloga: "Bosch DREMEL",
    rutaKataloga: "/Cenovnik Dremel alata i pribora - JUN 2023 SRB.pdf",
  },
  {
    imeKataloga: "Bosch EXPERT",
    rutaKataloga: "/EXPERT mini katalog pribora.pdf",
  },
  {
    imeKataloga: "Bosch Plavi",
    rutaKataloga:
      "/Neobavezno preporučeni cenovnik Plavih alata JUL 2023 SRB.pdf",
  },
  {
    imeKataloga: "Bosch VP cenovnik",
    rutaKataloga:
      "/Neobavezno preporučeni VP cenovnik PRO Mernih alata  JUN 2023 SRB.pdf",
  },
];
const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Bosch alati - Stridon Group DOO 2023</title>
        <meta name="description" content="Bosch mašine i alati, pogledajte naše mašine, alate i još mnogo toga. Pronađite informacije o proizvodima koji Vas zanimaju.✅" />
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
        textPasusa1={translate("text pasusa 1 bosch")}
        textPasusa2={translate("text pasusa 2 bosch")}
        textPasusa3={translate("text pasusa 3 bosch")}
        slika1={bosch}
        textDoKraja={translate("text do kraja bosch")}
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
