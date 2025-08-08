import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import karcher from "../../../public/karcher-logo.svg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";

const karcherKatalogVrednosti = [
  {
    imeKataloga: "Karcher profesionalni program katalog",
    rutaKataloga:
      "https://drive.google.com/file/d/1rCZ63RGygIn4IeTTar4sLetDzc7UUoaJ/view?usp=drive_link",
  },
  {
    imeKataloga: "Karcher žuti program katalog",
    rutaKataloga:
      "https://drive.google.com/file/d/14ERZxuCZexyQZ0rNtbBUXGXKjzZm_x5Q/view?usp=drive_link",
  },
];

const index = () => {
  const { t: translate } = useTranslation("home");  

  return (
    <div>
      <Head>
        <title>{translate('KarcherMetaTitle')}</title>
        <meta name="description" content={translate('KarcherMetaDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage={"Karcher"}
        opisNaHomePage={translate("Karcher alati - Uvoznik za Srbiju")}
        naslovButtona={translate("Pogledaj PDF kataloge")}
        translate={translate}
        catalogueValues={karcherKatalogVrednosti}
      />
      <TextoviISlike
        title={"Karcher Logo"}
        naslovPasusa1={translate("naslov pasusa 1 karcher")}
        naslovPasusa2={translate("naslov pasusa 2 karcher")}
        naslovPasusa3={translate("naslov pasusa 3 karcher")}
        textPasusa1={translate("text pasusa 1 karcher")}
        textPasusa2={translate("text pasusa 2 karcher")}
        textPasusa3={translate("text pasusa 3 karcher")}
        slika1={karcher}
        textDoKraja={translate("text do kraja karcher")}
        linkDoProizvodjacaText={translate("link do proizvodjaca text karcher")}
        linkDoProizvodjacaUrl="https://www.prodavnicaalata.rs/proizvodjaci/karcher/"
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
