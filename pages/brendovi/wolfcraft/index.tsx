import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import wolfcraft from "../../../public/wolfcraft-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>Wolfcraft - Stridon Group DOO 2023</title>
        <meta name="description" content="Wolfcraft mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Wolfcraft"}
        opis={"Wolfcraft alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
        title={"Wolfcraft"}
        naslovPasusa1={"Standard na tržištu"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "Wolfcraft, sinonim za kvalitet i inovaciju, pruža vam izuzetnu kolekciju alata koja zadovoljava širok spektar potreba kako profesionalnih majstora, tako i entuzijasta hobista širom sveta. Sa više od sedam decenija iskustva u industriji, Wolfcraft je postao prepoznatljiv i cenjen brend među korisnicima."
        }
        textPasusa2={
          "Naša široka paleta Wolfcraft alata obuhvata sve što vam je potrebno - od ručnih alata, električnih alata, do pribora i dodataka. Svaki Wolfcraft alat je pažljivo osmišljen kako bi vam pružio vrhunski kvalitet, pouzdanost i inovaciju, bilo da se bavite profesionalnim radom ili uživate u hobijima."
        }
        textPasusa3={
          "Wolfcraft inženjeri su posvećeni razvoju alata koji odgovaraju potrebama korisnika. Naša stalna težnja za inovacijama rezultira proizvodima koji su u korak sa tehnološkim napretkom, omogućavajući vam da obavljate poslove sa visokom preciznošću i efikasnošću."
        }
        slika1={wolfcraft}
        textDoKraja="Kvalitet materijala kojima se koristimo je od suštinske važnosti. Wolfcraft alati su izrađeni od visokokvalitetnih materijala kako bi izdržali najzahtevnije radne uslove i pružili vam dugotrajnost tokom dugog veka trajanja.

        Wolfcraft alati se odlikuju ergonomskim dizajnom i praktičnom upotrebom. Naši proizvodi pružaju vam udobnost tokom rada, omogućavajući vam da postignete vrhunske rezultate sa manje napora.
        
        Sigurnost je naš prioritet. Svi Wolfcraft alati prolaze kroz rigorozne bezbednosne testove kako bismo vam pružili bezbrižno radno iskustvo i zaštitili vas tokom upotrebe naših alata.
        
        Bilo da ste profesionalac u potrazi za najboljim alatima za vaše projekte ili entuzijasta koji voli da se posveti hobijima, Wolfcraft alati su pravi izbor za sve vaše potrebe. Pridružite se hiljadama korisnika širom sveta koji veruju u kvalitet i inovaciju Wolfcraft brenda. Sa Wolfcraft alatima, vaši projekti će biti obavljeni sa vrhunskom preciznošću i efikasnošću, omogućavajući vam da postignete izvanredne rezultate u svakom poduhvatu.
        
        "
      />
    </div>
  );
};

export default index;
