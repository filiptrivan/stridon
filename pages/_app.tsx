import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";
const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
// import { Analytics } from "@vercel/analytics/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
function App({ Component, pageProps }: AppProps) {
  const { t: translate } = useTranslation("home");
  const { t: translateNavBar } = useTranslation("NavBar");
  const { t: translateFooter } = useTranslation("Footer");
  const { locale } = useRouter();
  const { statusCode } = pageProps;
  return (
    <main>
      {statusCode != 404 && <Navbar locale={locale} translate={translateNavBar} />}
      <Component {...pageProps} />
      {/* <Analytics/> */}
      {statusCode != 404 && <Footer translate={translateFooter} />}
    </main>
  );
}

export default appWithTranslation(App);
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "NavBar", "Footer"])),
    },
  };
}
