import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import blackdeckerLogo from "../../../public/black-and-decker-logo.svg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";

const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>{translate('BlackDeckerMetaTitle')}</title>
        <meta name="description" content={translate('BlackDeckerMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"Black+Decker"}
        opisNaHomePage={translate("Black+Decker alati - Uvoznik za Srbiju")}
        translate={translate}
      />
      <TextoviISlike
        title={"Black+Decker"}
        naslovPasusa1={translate("naslov pasusa 1 black+decker")}
        naslovPasusa2={translate("naslov pasusa 2 black+decker")}
        naslovPasusa3={translate("naslov pasusa 3 black+decker")}
        textPasusa1={translate("text pasusa 1 black+decker")}
        textPasusa2={translate("text pasusa 2 black+decker")}
        textPasusa3={translate("text pasusa 3 black+decker")}
        slika1={blackdeckerLogo}
        textDoKraja={translate("text do kraja black+decker")}
        linkDoProizvodjacaText={translate("link do proizvodjaca text black+decker")}
        linkDoProizvodjacaUrl="https://www.prodavnicaalata.rs/proizvodjaci/black-decker/"
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
