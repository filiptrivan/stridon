import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import wolfcraft from "../../../public/wolfcraft-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const wolfcraftKatalogVrednosti = [
  {
    imeKataloga: "Wolfcraft katalog",
    rutaKataloga: "https://drive.google.com/file/d/1SU0y0Lr9TvJqvX0t20R44H6HxHLiWaZJ/view?usp=drive_link",
  },
];
const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Wolfcraft alati – akcija, ponuda i cene | Stridon Group DOO</title>
        <meta name="description" content="Wolfcraft mašine i alati, pogledajte našu ponudu profesionalnih mašina, alata i dodatne opreme. Pronađite prave informacije o proizvodima koji Vas zanimaju.✅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Wolfcraft"}
        opis={translate("Wolfcraft alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
translate={translate}
        catalogueValues={wolfcraftKatalogVrednosti}
      />
      <TextoviISlike
        title={"Wolfcraft"}
        naslovPasusa1={translate("naslov pasusa 1 wolfcraft")}
        naslovPasusa2={translate("naslov pasusa 2 wolfcraft")}
        naslovPasusa3={translate("naslov pasusa 3 wolfcraft")}
        textPasusa1={translate("text pasusa 1 wolfcraft")}
        textPasusa2={translate("text pasusa 2 wolfcraft")}
        textPasusa3={translate("text pasusa 3 wolfcraft")}
        slika1={wolfcraft}
        textDoKraja={translate("text do kraja wolfcraft")}
        linkDoProizvodjaca={translate("link do proizvodjaca wolfcraft")}
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