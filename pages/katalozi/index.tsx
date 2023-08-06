import React from "react";
import Card from "./components/Card";
import HeroWithoutButton from "../components/HeroWithoutButton";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
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
