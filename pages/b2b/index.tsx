import FormaZaPopunjavanje from "@/components/b2b/FormaZaPopunjavanje";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Hero from "@/components/Hero";

const index = () => {
  const { t: translate } = useTranslation("b2b");
  const { t: translateForm } = useTranslation("FormaZaPopunjavanje");

  return (
    <div>
      <Head>
        <title>Postanite naš B2B partner | Saradnja | Stridon Group</title>
        <meta
          name="description"
          content="Pružamo vam mogućnost za rast uz vrhunsku podršku, širok asortiman proizvoda i stručnost našeg tima. Pridružite nam se i ostvarite poslovna dostignuća."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        titleNaHomePage="B2B"
        opisNaHomePage={translate("Imate B2B nalog sa nama? Idite na portal.")}
        naslovButtona={translate("Link ka portalu")}
        externalUrl="https://b2b.wings.rs/stridon"
        translate={translate}
      />
      <FormaZaPopunjavanje translate={translateForm} />
    </div>
  );
};

export default index;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["b2b", "FormaZaPopunjavanje", "NavBar", "Footer"])),
    },
  };
}
