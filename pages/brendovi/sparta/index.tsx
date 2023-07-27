import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import sparta from "../../../public/sparta-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>Sparta - Stridon Group DOO 2023</title>
        <meta name="description" content="Sparta mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Sparta"}
        opis={"Sparta alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
      title={"Sparta"}
        naslovPasusa1={"Standard na tržištu"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "Sparta, vaš pouzdan izbor za hobističke projekte, pruža vam izvanrednu kolekciju ručnih alata koja je posebno namenjena hobistima i ljubiteljima ručnih radova. Sa fokusom na jednostavnost i praktičnost, Sparta alati su idealan izbor za sve vaše hobističke aktivnosti i kreativne poduhvate."
        }
        textPasusa2={
          "Naša široka paleta Sparta ručnih alata obuhvata sve što je potrebno za vaše hobije - od šrafcigera, klešta, ključeva, do odvijača, čekića i mnogih drugih alata. Svaki Sparta alat je pažljivo dizajniran kako bi vam pružio pouzdanost i jednostavnost upotrebe, čineći vaše hobističke projekte lakšim i zabavnijim."
        }
        textPasusa3={
          "Sparta alati su posebno prilagođeni potrebama hobista. Naša pažnja prema detaljima i jednostavan dizajn rezultira proizvodima koji su laki za korišćenje, čak i za one sa manje iskustva u ručnim radovima."
        }
        slika1={sparta}
        
        textDoKraja="Kvalitet materijala kojima se koristimo je od suštinske važnosti. Sparta alati su izrađeni od izdržljivih materijala koji će vam omogućiti dugotrajnost i pouzdanost tokom vaših hobističkih aktivnosti.

        Sparta ručni alati su intuitivni za korišćenje. Naši proizvodi pružaju vam udobnost tokom rada, omogućavajući vam da se prepustite svojoj kreativnosti i ostvarite sjajne rezultate u vašim projektima.
        
        Sigurnost i jednostavnost su naš prioritet. Svi Sparta alati prolaze kroz stroge bezbednosne testove kako bismo vam pružili bezbrižno iskustvo i zaštitili vas tokom korišćenja naših alata za hobiste.
        
        Bilo da ste početnik u svetu hobija ili iskusni ljubitelj ručnih radova, Sparta ručni alati su pravi izbor za sve vaše potrebe. Pridružite se zajednici hobista širom sveta koji veruju u kvalitet i praktičnost Sparta brenda. Sa Sparta alatima, vaši hobistički projekti će postati još zabavniji i uspešniji, omogućavajući vam da ostvarite svoje kreativne ideje sa lakoćom i pouzdanošću.
        
        "
      />
    </div>
  );
};

export default index;
