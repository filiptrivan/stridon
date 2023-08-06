import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import max from "../../../public/max-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const maxKatalogVrednosti = [
  {
    imeKataloga: "MAX katalog",
    rutaKataloga: "https://drive.google.com/file/d/1k3AzwfcE_RlB8xJiO1Tp1nZQwrnEyZje/view?usp=drive_link",
  },
];
const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>MAX - Stridon Group DOO 2023</title>
        <meta name="MAX" content="MAX mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"MAX"}
        opis={translate("MAX vezivači armature i žica - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
translate={translate}
        catalogueValues={maxKatalogVrednosti}
      />
      <TextoviISlike
      title={"MAX"}
      naslovPasusa1={translate("naslov pasusa 1 max")}
      naslovPasusa2={translate("naslov pasusa 2 max")}
      naslovPasusa3={translate("naslov pasusa 3 max")}
      textPasusa1={translate("text pasusa 1 max")}
      textPasusa2={translate("text pasusa 2 max")}
      textPasusa3={translate("text pasusa 3 max")}
      slika1={max}
      textDoKraja={translate("text do kraja max")}
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