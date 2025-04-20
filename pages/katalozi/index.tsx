import React from "react";
import Card from "../../components/katalozi/Card";
import HeroWithoutButton from "../../components/HeroWithoutButton";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import HeroKatalozi from "@/components/katalozi/HeroKatalozi";
const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Otkrijte naše kataloge | Alati i mašine | Stridon Group DOO</title>
        <meta
          name="description"
          content="Pregledajte širok izbor proizvoda i najbolje ponude u našim katalozima. Pronađite proizvode najboljih svetskih brendova koji odgovaraju vašim potrebama.✅"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroKatalozi
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
