import React, { useState } from "react";
import Hero from "../../components/Hero";
import dynamic from "next/dynamic";
const FormaZaPopunjavanje = dynamic(
  () => import("@/components/b2b/FormaZaPopunjavanje"),
  {
    ssr: false,
  }
);
// import FormaZaPopunjavanje from "@/components/b2b/FormaZaPopunjavanje";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const index = () => {
  const { t: translate } = useTranslation("home");
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Hero
        titleNaHomePage="B2B"
        naslovButtona={translate("Link ka portalu")}
        opisNaHomePage={translate("Imate B2B nalog sa nama? Idite na portal.")}
        slug="https://b2b.wings.rs/stridon#"
      />
      <div
        onClick={() => {
          setVisible(!visible);
        }}
        className="text-center text-xl max-w-[1140px] m-auto py-4 border rounded-md hover:bg-slate-200 cursor-pointer shadow-lg"
      >
        {translate("Zatražite pristup B2B platformi")}
        <KeyboardArrowDownIcon />
      </div>
      {visible && <FormaZaPopunjavanje translate={translate} />}
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
