import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import senco from "../../../public/senco-logo.svg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";

const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>{translate('SENCOMetaTitle')}</title>
        <meta name="description" content={translate('SENCOMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"Senco"}
        opisNaHomePage={translate("Senco alati - Uvoznik za Srbiju")}
        translate={translate}
      />
      <TextoviISlike
       title={"Senco Logo"}
       naslovPasusa1={translate("naslov pasusa 1 senco")}
       naslovPasusa2={translate("naslov pasusa 2 senco")}
       naslovPasusa3={translate("naslov pasusa 3 senco")}
       textPasusa1={translate("text pasusa 1 senco")}
       textPasusa2={translate("text pasusa 2 senco")}
       textPasusa3={translate("text pasusa 3 senco")}
       slika1={senco}
       textDoKraja={translate("text do kraja senco")}
       linkDoProizvodjacaText={translate("link do proizvodjaca text senco")}
       linkDoProizvodjacaUrl="https://www.prodavnicaalata.rs/proizvodjaci/senco/"
      />
    </div>
  );
};

export default index;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "NavBar", "Footer"])),
    },
  };
}