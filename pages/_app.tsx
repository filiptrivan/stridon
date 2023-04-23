import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Raleway } from 'next/font/google'
import Navbar from './components/NavBar';

const raleway = Raleway ({
  subsets: ['latin'],
  variable: '--font-raleway',
  // weight: ['400', '100','200','300','500','600','700','800','900'],
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${raleway.variable} font-sans`}>
      <Navbar/>
      <Component {...pageProps} />
    </main>
  )
}
