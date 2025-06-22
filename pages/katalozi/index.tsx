import React from "react";
import Card from "../../components/katalozi/Card";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Hero from "@/components/Hero";

const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Pregledajte naše akcijske kataloge | Stridon Group</title>
        <meta
          name="description"
          content="Pregledajte širok izbor proizvoda i najbolje ponude mašina, električnog i ručnog alata za profesionalnu i kućnu upotrebu u našim akcijskim katalozima."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
      translate={translate}
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
