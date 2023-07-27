import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import blackdecker from "../../../public/black-and-decker-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>Stridon | Black+Decker </title>
        <meta name="description" content="Black+Decker mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Black+Decker"}
        opis={"Black+Decker alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
        naslovPasusa1={"Standard na tržištu"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "Black+Decker pruža vam izvanrednu kolekciju alata koja zadovoljava širok spektar potreba kako profesionalaca, tako i entuzijasta širom sveta. Sa više od sto godina iskustva u proizvodnji alata, Black+Decker je postao poznat i cenjen brend među korisnicima."
        }
        textPasusa2={
          "Naša široka paleta Black+Decker alata obuhvata sve što vam je potrebno - od električnih alata kao što su bušilice, brusilice, testere, do ručnih alata kao što su šrafcigeri, ključevi i klešta. Svaki Black+Decker alat je pažljivo osmišljen kako bi vam pružio snagu i izdržljivost za svaku vrstu posla, od sitnih kućnih popravki do zahtevnih građevinskih projekata."
        }
        textPasusa3={
          "Black+Decker inženjeri su posvećeni inovacijama kako bi vam omogućili alate sa najnaprednijim tehnologijama na tržištu. Naša stalna težnja za unapređenjem rezultirala je alatima koji su jednostavni za korišćenje, a istovremeno pružaju visok nivo performansi i efikasnosti."
        }
        slika1={blackdecker}
        
        textDoKraja="Kvalitet materijala kojima se koristimo je od suštinskog značaja. Black+Decker alati su izrađeni od visokokvalitetnih materijala kako bi izdržali najzahtevnije radne uslove i pružili vam dugotrajnost i pouzdanost tokom dugog veka trajanja.

        Black+Decker alati se odlikuju ergonomskim dizajnom i jednostavnom upotrebom. Naši proizvodi pružaju vam udobnost tokom rada, smanjujući zamor i omogućavajući vam da obavljate poslove sa preciznošću i lakoćom.
        
        Sigurnost je naš prioritet. Svi Black+Decker alati prolaze kroz rigorozne bezbednosne testove kako bismo vam pružili bezbrižno radno iskustvo i zaštitili vas tokom upotrebe naših alata.
        
        Bilo da se bavite profesionalnim zanatom, popravkama u kući ili jednostavno uživate u hobijima, Black+Decker alati su pravi izbor za sve vaše potrebe. Pridružite se milionima korisnika širom sveta koji veruju u kvalitet i inovaciju Black+Decker brenda. Sa Black+Decker alatima, vaši projekti će biti obavljeni sa snagom i preciznošću, omogućavajući vam da postignete izvanredne rezultate u svakom poduhvatu.
        
        "
      />
    </div>
  );
};

export default index;
