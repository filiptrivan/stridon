import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import kwb from "../../../public/kwb-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>KWB - Stridon Group DOO 2023</title>
        <meta name="description" content="KWB mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"KWB"}
        opis={"KWB alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
      title={"KWB"}
        naslovPasusa1={"Standard na tržištu"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "KWB, sinonim za tradiciju i kvalitet, pruža vam izuzetnu kolekciju ručnih alata koja zadovoljava različite potrebe kako profesionalnih majstora, tako i entuzijasta hobista širom sveta. Sa više od 80 godina iskustva u proizvodnji alata, KWB je postao cenjeni brend među korisnicima."
        }
        textPasusa2={
          "Naša široka paleta KWB ručnih alata obuhvata sve što vam je potrebno - od šrafcigera, ključeva, klešta, do čekića, odvijača i mnogih drugih alata. Svaki KWB alat je pažljivo osmišljen kako bi vam pružio pouzdanost i izdržljivost, omogućavajući vam da obavljate poslove sa preciznošću i pouzdanošću."
        }
        textPasusa3={
          "KWB inženjeri su posvećeni pružanju alata koji odgovaraju potrebama korisnika. Naša pažnja prema detaljima i konstantna težnja za unapređenjem rezultira proizvodima koji zadovoljavaju najviše standarde kvaliteta i performansi, bilo da se radi o profesionalnim radovima ili hobističkim projektima."
        }
        slika1={kwb}
        
        textDoKraja="Kvalitet materijala kojima se koristimo je od suštinske važnosti. KWB alati su izrađeni od izdržljivih materijala kako bi izdržali zahtevne radne uslove i pružili vam dugotrajnost tokom dugog veka trajanja.

        KWB ručni alati se odlikuju ergonomskim dizajnom i praktičnom upotrebom. Naši proizvodi pružaju vam udobnost tokom rada, omogućavajući vam da obavite poslove sa manje napora i postignete vrhunske rezultate.
        
        Sigurnost je naš prioritet. Svi KWB alati prolaze kroz stroge bezbednosne testove kako bismo vam pružili bezbrižno radno iskustvo i zaštitili vas tokom upotrebe naših alata.
        
        Bilo da ste profesionalac u potrazi za pouzdanim alatima za vaše radne zadatke ili entuzijasta koji voli da se posveti hobijima, KWB ručni alati su pravi izbor za sve vaše potrebe. Pridružite se hiljadama korisnika širom sveta koji veruju u kvalitet i tradiciju KWB brenda. Sa KWB alatima, vaši projekti će biti obavljeni sa lakoćom i preciznošću, omogućavajući vam da postignete izvanredne rezultate u svakom poduhvatu.
        
        "
      />
    </div>
  );
};

export default index;
