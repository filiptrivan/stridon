import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import sgtools from "../../../public/sg-tools-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const index = () => {
    const { t: translate } = useTranslation("home");
  return ( 
    <div>
      <Head>
        <title>{translate('SGToolsMetaTitle')}</title>
        <meta name="description" content={translate('SGToolsMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"SG Tools"}
        opis={translate("SG Tools alati - Uvoznik za Srbiju")}
        naslovButtona={""}
translate={translate}
        catalogueValues={""}
      />
      <TextoviISlike
       title={"SG Tools"}
       naslovPasusa1={translate("naslov pasusa 1 sg tools")}
       naslovPasusa2={translate("naslov pasusa 2 sg tools")}
       naslovPasusa3={translate("naslov pasusa 3 sg tools")}
       textPasusa1={translate("text pasusa 1 sg tools")}
       textPasusa2={translate("text pasusa 2 sg tools")}
       textPasusa3={translate("text pasusa 3 sg tools")}
       slika1={sgtools}
       textDoKraja={translate("text do kraja sg tools")}
       linkDoProizvodjacaText={translate("link do proizvodjaca text sg tools")}
       linkDoProizvodjacaUrl={translate("link do proizvodjaca url sg tools")}
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