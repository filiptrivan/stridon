import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import mtx from "../../../public/mtx-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>MTX - Stridon Group DOO 2023</title>
        <meta name="description" content="MTX mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"MTX"}
        opis={"MTX alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
      title={"MTX"}
        naslovPasusa1={"Standard na tržištu"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "MTX - pruža vam izvanrednu kolekciju ručnih alata koja je posebno osmišljena za hobiste i ljubitelje ručnih radova. Sa fokusom na jednostavnost i funkcionalnost, MTX alati su idealan izbor za sve vaše hobističke projekte i kreativne poduhvate."
        }
        textPasusa2={
          "Naša široka paleta MTX ručnih alata obuhvata sve što je potrebno za vaše hobije - od raznih šrafcigera, ključeva i klešta, do odvijača, čekića i mnogih drugih alata. Svaki MTX alat je pažljivo dizajniran kako bi vam pružio pouzdanost i jednostavnost upotrebe, olakšavajući vam svaki korak u vašim ručnim radovima."
        }
        textPasusa3={
          "MTX inženjeri su posvećeni pružanju alata koji su prilagođeni potrebama hobista. Naša pažnja prema detaljima i jednostavan dizajn rezultira proizvodima koji su laki za korišćenje, bez obzira na vaše iskustvo u hobijima."
        }
        slika1={mtx}
        
        textDoKraja="Kvalitet materijala kojima se koristimo je od suštinske važnosti. MTX alati su izrađeni od izdržljivih materijala koji će vam omogućiti dugotrajnost i pouzdanost u vašim kreativnim projektima.

        MTX ručni alati su intuitivni za korišćenje. Naši proizvodi pružaju vam udobnost tokom rada, omogućavajući vam da se prepustite svojoj kreativnosti i ostvarite sjajne rezultate.
        
        Sigurnost i jednostavnost su naš prioritet. Svi MTX alati su pažljivo testirani kako bismo vam pružili bezbrižno iskustvo i zaštitili vas tokom korišćenja naših alata za hobiste.
        
        Bilo da ste početnik u svetu hobija ili iskusni ljubitelj ručnih radova, MTX ručni alati su pravi izbor za sve vaše potrebe. Pridružite se zajednici hobista širom sveta koji veruju u kvalitet i pouzdanost MTX brenda. Sa MTX alatima, vaši hobistički projekti će postati još zabavniji i zadovoljavajući, omogućavajući vam da ostvarite svoje kreativne ideje sa lakoćom i sigurnošću.
        
        "
      />
    </div>
  );
};

export default index;
