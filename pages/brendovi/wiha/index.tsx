import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import wiha from "../../../public/wiha-logo.svg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";

const wihaKatalogVrednosti = [
  {
    imeKataloga: "Wiha katalog",
    rutaKataloga: "https://drive.google.com/file/d/1s2s4TmSn_7inwljmfF0mznbdVXWMGEDJ/view?usp=drive_link",
  },
  {
    imeKataloga: "Wiha merni alati",
    rutaKataloga: "https://drive.google.com/file/d/196RbKP5DyiWkJnqvOx1ML10Gby4M2CiG/view?usp=drive_link",
  },
  {
    imeKataloga: "Wiha XXL III kofer",
    rutaKataloga: "https://drive.google.com/file/d/1gfqq3qQRqocaSAXVwRm-3s9lGDpyDNbn/view?usp=drive_link",
  },
];

const index = () => {
    const { t: translate } = useTranslation("wiha");
  return (
    <div>
      <Head>
        <title>{translate('WihaMetaTitle')}</title>
        <meta name="description" content={translate('WihaMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"Wiha"}
        opisNaHomePage={translate("Wiha alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        translate={translate}
        catalogueValues={wihaKatalogVrednosti}
      />
      <TextoviISlike
      title={"Wiha Logo"}
      naslovPasusa1={translate("naslov pasusa 1 wiha")}
      naslovPasusa2={translate("naslov pasusa 2 wiha")}
      naslovPasusa3={translate("naslov pasusa 3 wiha")}
      naslovPasusa4={translate("naslov pasusa 4 wiha")}
      textPasusa1={translate("text pasusa 1 wiha")}
      textPasusa2={translate("text pasusa 2 wiha")}
      textPasusa3={translate("text pasusa 3 wiha")}
      textPasusa4={translate("text pasusa 4 wiha")}
      slika1={wiha}
      textDoKraja={translate("text do kraja wiha")}
      linkDoProizvodjacaText={translate("link do proizvodjaca text wiha")}
      linkDoProizvodjacaUrl="https://www.prodavnicaalata.rs/proizvodjaci/wiha/"
      />
    </div>
  );
};

export default index;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["wiha", "NavBar", "Footer"])),
    },
  };
}