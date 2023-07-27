import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import knipex from "../../../public/knipex-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>Knipex - Stridon Group DOO 2023</title>
        <meta name="Knipex" content="Knipex mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Knipex"}
        opis={"Knipex alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
      title={"Knipex"}
        naslovPasusa1={"Tržište i kvalitet"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "Knipex, sinonim za profesionalnost i preciznost, nudi vam vrhunsku kolekciju ručnih alata koja je prilagođena potrebama zahtevnih korisnika širom sveta. Sa preko 135 godina iskustva u proizvodnji alata, Knipex je postao pouzdan partner za profesionalce koji zahtevaju najviše standarde kvaliteta."
        }
        textPasusa2={
          "Naša široka paleta Knipex alata obuhvata različite proizvode - od klešta, sečica, makaza, pa do grickalica i noževa. Svaki Knipex alat je pažljivo izrađen kako bi vam pružio izuzetnu funkcionalnost i trajnost, čime se olakšava svaki posao."
        }
        textPasusa3={
          "Knipex inženjeri posvećuju pažnju detaljima kako bi stvorili inovativne alate koji će vam omogućiti preciznost i efikasnost. Napredne tehnologije koje primenjujemo čine naše proizvode nezaobilaznim za profesionalce širom sveta."
        }
        slika1={knipex}
        
        textDoKraja="Kvalitet materijala koji koristimo je od ključnog značaja. Naši alati su napravljeni od najotpornijih materijala, osiguravajući dugotrajnost i pouzdanost u najzahtevnijim radnim uslovima.

        Knipex alati se odlikuju ergonomskim dizajnom i jednostavnom upotrebom. Naši alati pružaju vam udobnost tokom rada i omogućavaju vam preciznost čak i u najdelikatnijim zadacima.
        
        Sigurnost je naš prioritet. Naši proizvodi prolaze rigorozne bezbednosne testove kako bismo vam pružili bezbrižno radno iskustvo i zaštitili vas tokom upotrebe naših alata.
        
        Bilo da se bavite profesionalnim zanatom ili ste ozbiljan entuzijasta, Knipex alati su pravi izbor za sve vaše potrebe. Pridružite se milionima korisnika širom sveta koji veruju u kvalitet i pouzdanost Knipex brenda. Sa Knipex alatima, vaš rad će postati efikasniji i precizniji, što će vam omogućiti da postignete izvanredne rezultate u svakom projektu.
        
        "
      />
    </div>
  );
};

export default index;
