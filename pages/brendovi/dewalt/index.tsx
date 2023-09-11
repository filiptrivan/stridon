import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import dewalt from "../../../public/dewaltlogo.png";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const dewaltKatalogVrednosti = [
  {
    imeKataloga: `Dewalt najprodavanije 2023`,
    rutaKataloga: "/Cenovnik Bosch DIY mernih alata - JUN 2023 SRB.pdf",
  },
  {
    imeKataloga: "Dewalt ograničeno izdanje",
    rutaKataloga: "/Cenovnik Bosch pribora za mesec jul 2023 - SRB.pdf",
  },
];

const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>DeWalt alati - Stridon Group DOO 2023</title>
        <meta
          name="description"
          content="DeWalt mašine i alati, pogledajte naše mašine, alate i još mnogo toga. Pronađite informacije o proizvodima koji Vas zanimaju.✅"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        translate={translate}
        title="DeWalt"
        opis={translate("DEWALT alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        catalogueValues={dewaltKatalogVrednosti}
      />
      <TextoviISlike
        title={translate("Dewalt")}
        naslovPasusa1={translate("naslov pasusa 1 dewalt")}
        textPasusa1={translate("text pasusa 1 dewalt")}
        slika1={dewalt}
        naslovPasusa2={translate("naslov pasusa 2 dewalt")}
        textPasusa2={translate("text pasusa 2 dewalt")}
        naslovPasusa3={translate("naslov pasusa 3 dewalt")}
        textPasusa3={translate("text pasusa 3 dewalt")}
        textDoKraja={translate("text do kraja dewalt")}
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
