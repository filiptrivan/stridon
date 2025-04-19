import React from "react";
import Mapa from "../../components/Mapa";
import HeroServis from "@/components/servis/HeroServis";
import Text from "@/components/servis/Text";
import Brendovi from "@/components/servis/Brendovi";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Servis mašina i alata - SG Servis, Stridon Group</title>
        <meta
          name="description"
          content="Servis mašina i alata van garantnog roka za DeWalt, Bosch, Makita, Metabo, Festool, Rubi i Senco. Usluge popravke za najpoznatije svetske brendove.✅"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroServis
        titleNaHomePage={translate("SG Servis")}
        opisNaHomePage={translate("opisNaServisu")}
      />
      <Brendovi title={translate("Brendovi koje servisiramo")} />
      <Mapa
      translate={translate}
        email={"sgservis22@gmail.com"}
        kontakt={"+381653378812"}
        adresa={"Vojislava Ilića 141b"}
        map_src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90567.5103257972!2d20.365943012636272!3d44.81678309583739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7163a682044d%3A0x2a07a073e49f36ae!2sStridon%20group!5e0!3m2!1sen!2snl!4v1682522248790!5m2!1sen!2snl"
      />
      <Text translate={translate}/>
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
