import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import senco from "../../../public/senco-logo.png";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const index = () => {
    const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Senco alati - Stridon Group DOO 2023</title>
        <meta name="description" content="Senco mašine i alati, pogledajte naše mašine, alate i još mnogo toga. Pronađite informacije o proizvodima koji Vas zanimaju.✅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Senco"}
        opis={translate("Senco alati - Uvoznik za Srbiju")}
        naslovButtona={""}
translate={translate}
        catalogueValues={""}
      />
      <TextoviISlike
       title={"Senco"}
       naslovPasusa1={translate("naslov pasusa 1 senco")}
       naslovPasusa2={translate("naslov pasusa 2 senco")}
       naslovPasusa3={translate("naslov pasusa 3 senco")}
       textPasusa1={translate("text pasusa 1 senco")}
       textPasusa2={translate("text pasusa 2 senco")}
       textPasusa3={translate("text pasusa 3 senco")}
       slika1={senco}
       textDoKraja={translate("text do kraja senco")}
       linkDoProizvodjaca={translate("link do proizvodjaca senco")}
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