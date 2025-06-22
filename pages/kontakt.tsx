import React from "react";
import Mapa from "../components/Mapa";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero";

const kontakt = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>Kontakt | Sve potrebne informacije | Stridon Group DOO</title>

        <meta
          name="description"
          content="Kontaktirajte Stridon tim za pitanja, podršku ili saradnju. Naša stručna ekipa je tu da vam pomogne i pruži informacije o našim proizvodima i uslugama."
        />
        <meta
          name="keywords"
          content="kontakt, Stridon, podrška, saradnja, pitanja, informacije, proizvodi, usluge, probleme, povratne informacije, upiti, pomoć, rešenja, konsultacije, savetovanje, klijenti"
        />
        <link rel="canonical" href={`/kontakt/`} key="canonical" />
      </Head>

      <Hero
        titleNaHomePage={translate("Kontaktirajte nas!")}
        opisNaHomePage={translate("ContactTextBelowTitle")}
        translate={translate}
      />
      <Mapa
        translate={translate}
        email={"office@stridon.rs"}
        kontakt={"011/2886-509"}
        adresa={"Vojislava Ilića 141g"}
        map_src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90567.5103257972!2d20.365943012636272!3d44.81678309583739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7163a682044d%3A0x2a07a073e49f36ae!2sStridon%20group!5e0!3m2!1sen!2snl!4v1682522248790!5m2!1sen!2snl"
      />
      <Mapa
        translate={translate}
        email={"office@stridon.rs"}
        kontakt={"011/210-0230"}
        adresa={"Altina - Ugrinovačka 212"}
        map_src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.7173437038164!2d20.369132715536885!3d44.847689379098426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65d974f60c15%3A0xf5fe55315fa62f57!2sprodavnicaalata.rs!5e0!3m2!1sen!2srs!4v1690217663792!5m2!1sen!2srs"
        isTransparentBackground={false}
      />
    </div>
  );
};

export default kontakt;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
