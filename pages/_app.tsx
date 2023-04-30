import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const roboto = Roboto ({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: [ '100','300','400','500','700','900'],
});



export default function App({ Component, pageProps }: AppProps) {
  const {statusCode} = pageProps;
  return (
    <main className={`${roboto.variable} font-sans`}>
      {statusCode != 404 && <Navbar/>}
      <Component {...pageProps} />
      {statusCode != 404 && <Footer /> }
    </main>
  )
}
