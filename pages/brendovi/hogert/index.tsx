import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import hogert from "../../../public/hogert-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const hogertKatalogVrednosti = [
  {
    imeKataloga: "Hogert električarski alati",
    rutaKataloga: "https://drive.google.com/file/d/1hIUpfarX9a1t8VKnGRGQabIm0u2eNwdh/view?usp=drive_link",
  },
  {
    imeKataloga: "Hogert HTZ",
    rutaKataloga: "https://drive.google.com/file/d/16VbxheVuQsX2_aXxc61DBd4Gn0NqcgKZ/view?usp=drive_link",
  },
  {
    imeKataloga: "Hogert odeća katalog",
    rutaKataloga: "https://drive.google.com/file/d/1CX8oW1BicRW6SdUNhOAxamVy_Y1dnUCw/view?usp=drive_link",
  },
  {
    imeKataloga: "Hogert ručni alati",
    rutaKataloga: "https://drive.google.com/file/d/1hFN3PuIF2n-LS86D3cGeI0sIlmXoMUTe/view?usp=drive_link",
  },
];
const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Hogert alati - Stridon Group DOO 2023</title>
        <meta name="description" content="Hogert mašine i alati, pogledajte naše mašine, alate i još mnogo toga. Pronađite informacije o proizvodima koji Vas zanimaju.✅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
      translate={translate}
        title={"Hogert"}
        opis={translate("Hogert alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        catalogueValues={hogertKatalogVrednosti}
      />
      <TextoviISlike
      title={"Hogert"}
      naslovPasusa1={translate("naslov pasusa 1 hogert")}
      naslovPasusa2={translate("naslov pasusa 2 hogert")}
      naslovPasusa3={translate("naslov pasusa 3 hogert")}
      textPasusa1={translate("text pasusa 1 hogert")}
      textPasusa2={translate("text pasusa 2 hogert")}
      textPasusa3={translate("text pasusa 3 hogert")}
      slika1={hogert}
      textDoKraja={translate("text do kraja hogert")}
      linkDoProizvodjaca={translate("link do proizvodjaca hogert")}
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