import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import {appWithTranslation} from 'next-i18next'
// import { Analytics } from "@vercel/analytics/react";
import { useTranslation } from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
function App({ Component, pageProps }: AppProps) {
    const {t:translate} = useTranslation('home')
  const {locale, locales, push} = useRouter();
  const { statusCode } = pageProps;
  return (
    <main>
      {statusCode != 404 && <Navbar locales={locales} translate={translate}/>}
      <Component {...pageProps} />
      {/* <Analytics/> */}
      {statusCode != 404 && <Footer translate={translate}/>}
    </main>
  );
}

export default appWithTranslation(App);
export async function getStaticProps({locale}:any) {
  return{
    props:{
      ...(await serverSideTranslations(locale,['home']))
    }
  }
}