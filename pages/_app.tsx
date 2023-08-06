import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { useRouter } from "next/router";
import {appWithTranslation} from 'next-i18next'
// import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }: AppProps) {
  const {locale, locales, push} = useRouter();
  const { statusCode } = pageProps;
  return (
    <main>
      {statusCode != 404 && <Navbar locales={locales} />}
      <Component {...pageProps} />
      {/* <Analytics/> */}
      {statusCode != 404 && <Footer />}
    </main>
  );
}

export default appWithTranslation(App);
