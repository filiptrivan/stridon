import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Mapa from "@/components/Mapa";

const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>O nama - Stridon Group DOO</title>
        <meta
          name="description"
          content="Saznajte više o našoj kompaniji, posvećenosti vrhunskom kvalitetu i širokom asortimanu mašina i alata. Jedan od vodećih uvoznika svetskih brendova.✅"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl sm:text-5xl font-medium text-center pb-12 pt-12">
        {translate("O nama")}
      </h1>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-10 sm:mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:mb-0">
          <Image
            priority
            src="/3333.png"
            alt="Stridon vojislava ilica maloprodaja"
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="max-w-full lg:max-w-[570px] lg:pl-10 mb-4">
          <h2 className="sm:text-3xl text-2xl font-medium">
            {translate("Osnivanje")}
          </h2>
          <span className="separator"></span>
          <p>
            {" "}
            {translate("tekst 1 o nama")}
            {/* {" "} */}
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto p-3 flex flex-col lg:flex-row mb-10 sm:mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:pr-10 mb-4">
          <h2 className="sm:text-3xl text-2xl font-medium">
            {translate("Veleprodaja i maloprodaja")}
          </h2>
          <span className="separator"></span>
          <p>
            {" "}
            {translate("tekst 2 o nama")}
            {/* {" "} */}
          </p>
        </div>
        <div className="max-w-full lg:max-w-[570px]">
          <Image
            src="/altina1.png"
            alt="Stridon altina maloprodaja"
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-10">
        <div className="max-w-full lg:max-w-[570px] lg:mb-0">
          <Image
            priority
            src="/internetprodajastridon.png"
            alt="Prodavnica alata logo"
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="max-w-full lg:max-w-[570px] lg:pl-10 mb-4">
          <h2 className="sm:text-3xl text-2xl font-medium">
            {translate("Internet prodavnica")}
          </h2>
          <span className="separator"></span>
          <p>
            {" "}
            {translate("tekst 3 o nama")}
            {/* {" "} */}
          </p>
        </div>
      </div>
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
