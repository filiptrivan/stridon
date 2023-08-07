import React from "react";
import Card from "../../components/katalozi/Card";
import HeroWithoutButton from "../../components/HeroWithoutButton";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Pregledajte naše kataloge - Stridon Group DOO</title>
        <meta
          name="description"
          content="Otkrijte širok izbor proizvoda i najbolje ponude u našim katalozima. Pronađite proizvode najboljih svetskih brendova koji odgovaraju vašim potrebama.✅"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroWithoutButton
        titleNaHomePage={translate("KataloziHeader")}
        opisNaHomePage={translate("opisNaKatalozima")}
      />
      <Card translate={translate} />
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
