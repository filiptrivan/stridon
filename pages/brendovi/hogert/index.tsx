import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import hogert from "../../../public/hogert-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>Hogert - Stridon Group DOO 2023</title>
        <meta name="Hogert" content="Hogert mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Hogert"}
        opis={"Hogert alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
      title={"Hogert"}
        naslovPasusa1={"Standard na tržištu"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "Hogert, sinonim za kvalitet i pristupačnost, pruža vam izvanrednu kolekciju alata koji zadovoljavaju širok spektar potreba korisnika. Sa dugogodišnjim iskustvom u industriji, Hogert je postao prepoznatljiv brend među profesionalcima i entuzijastima širom sveta."
        }
        textPasusa2={
          "Naša široka paleta Hogert alata obuhvata različite proizvode - od ručnih alata, električnih alata, setova alata, do pribora i dodataka. Svaki Hogert alat je pažljivo osmišljen kako bi vam pružio pouzdanost i izdržljivost u raznim radnim situacijama, čineći vaše projekte uspešnim i efikasnim."
        }
        textPasusa3={
          "Hogert inženjeri su posvećeni razvoju alata koji odgovaraju potrebama korisnika. Naša želja za inovacijama rezultira proizvodima koji su u korak sa tehnološkim napretkom, omogućavajući vam da postignete najbolje rezultate u svakom radnom zadatku."
        }
        slika1={hogert}
        
        textDoKraja="Kvalitet materijala koji koristimo je od suštinske važnosti. Hogert alati su izrađeni od čvrstih i izdržljivih materijala kako bi izdržali svakodnevnu upotrebu i pružili vam dugotrajnost tokom godina.

        Hogert alati se odlikuju praktičnim dizajnom i jednostavnom upotrebom. Naši proizvodi pružaju vam udobnost tokom rada i omogućavaju vam preciznost u svakom koraku vašeg projekta.
        
        Sigurnost i performanse su naš prioritet. Naši proizvodi prolaze kroz stroge bezbednosne testove kako bismo vam pružili bezbrižno radno iskustvo i zaštitili vas tokom upotrebe naših alata.
        
        Bilo da se bavite profesionalnim radom ili hobi projektima, Hogert alati su pravi izbor za sve vaše potrebe. Pridružite se hiljadama korisnika širom sveta koji veruju u kvalitet i pristupačnost Hogert brenda. Sa Hogert alatima, vaši projekti će biti obavljeni sa lakoćom i pouzdanošću, omogućavajući vam da ostvarite izvanredne rezultate u svakoj situaciji.
        
        "
      />
    </div>
  );
};

export default index;
