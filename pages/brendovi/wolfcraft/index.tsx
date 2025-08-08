import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import wolfcraft from "../../../public/wolfcraft-logo.svg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";

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
        <title>{translate('WolfcraftMetaTitle')}</title>
        <meta name="description" content={translate('WolfcraftMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"Wolfcraft"}
        opisNaHomePage={translate("Wolfcraft alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        translate={translate}
        catalogueValues={wolfcraftKatalogVrednosti}
      />
      <TextoviISlike
        title={"Wolfcraft Logo"}
        naslovPasusa1={translate("naslov pasusa 1 wolfcraft")}
        naslovPasusa2={translate("naslov pasusa 2 wolfcraft")}
        naslovPasusa3={translate("naslov pasusa 3 wolfcraft")}
        textPasusa1={translate("text pasusa 1 wolfcraft")}
        textPasusa2={translate("text pasusa 2 wolfcraft")}
        textPasusa3={translate("text pasusa 3 wolfcraft")}
        slika1={wolfcraft}
        textDoKraja={translate("text do kraja wolfcraft")}
        linkDoProizvodjacaText={translate("link do proizvodjaca text wolfcraft")}
        linkDoProizvodjacaUrl="https://www.prodavnicaalata.rs/proizvodjaci/wolfcraft/"
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