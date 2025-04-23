import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
//import blackdecker from "../../../public/black-and-decker-logo.png";
import blackdecker from "../../../public/black-and-decker-logo.svg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
        title={"Black+Decker"}
        opis={translate("Black+Decker alati - Uvoznik za Srbiju")}
        naslovButtona={""}
        translate={translate}
        catalogueValues={""}
      />
      <TextoviISlike
        title={"Black+Decker"}
        naslovPasusa1={translate("naslov pasusa 1 black+decker")}
        naslovPasusa2={translate("naslov pasusa 2 black+decker")}
        naslovPasusa3={translate("naslov pasusa 3 black+decker")}
        naslovPasusa4={translate("naslov pasusa 4 black+decker")}
        textPasusa1={translate("text pasusa 1 black+decker")}
        textPasusa2={translate("text pasusa 2 black+decker")}
        textPasusa3={translate("text pasusa 3 black+decker")}
        textPasusa4={translate("text pasusa 4 black+decker")}
        slika1={blackdecker}
        textDoKraja={translate("text do kraja black+decker")}
        linkDoProizvodjacaText={translate("link do proizvodjaca text black+decker")}
        linkDoProizvodjacaUrl={translate("link do proizvodjaca url black+decker")}
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
