import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import gtv from "../../../public/gtv-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const gtvKatalogVrednosti = [
  {
    imeKataloga: "GTV katalog",
    rutaKataloga:
      "https://drive.google.com/file/d/1O7cEdZPw2CyvNTsxmfR7ZpL9GAXlpJ5k/view?usp=drive_link",
  },
];
const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>GTV alati - Stridon Group DOO 2023</title>
        <meta name="description" content="GTV mašine i alati, pogledajte naše mašine, alate i još mnogo toga. Pronađite informacije o proizvodima koji Vas zanimaju.✅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"GTV"}
        opis={translate("GTV alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        translate={translate}
        catalogueValues={gtvKatalogVrednosti}
      />
      <TextoviISlike
        title={"GTV"}
        naslovPasusa1={translate("naslov pasusa 1 gtv")}
        naslovPasusa2={translate("naslov pasusa 2 gtv")}
        naslovPasusa3={translate("naslov pasusa 3 gtv")}
        textPasusa1={translate("text pasusa 1 gtv")}
        textPasusa2={translate("text pasusa 2 gtv")}
        textPasusa3={translate("text pasusa 3 gtv")}
        slika1={gtv}
        textDoKraja={translate("text do kraja gtv")}
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
