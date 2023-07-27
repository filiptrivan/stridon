import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import rubi from "../../../public/rubi-logo2.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>Rubi - Stridon Group DOO 2023</title>
        <meta name="description" content="Rubi mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Rubi"}
        opis={"Rubi alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
      title={"Rubi"}
        naslovPasusa1={"Standard na tržištu"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "Rubi, sinonim za profesionalnost i preciznost, nudi vam vrhunsku kolekciju mašina i alata za keramiku koja zadovoljava visoke standarde u industriji. Sa više od 70 godina iskustva u proizvodnji alata za keramičare, Rubi je postao priznat brend među profesionalcima širom sveta."
        }
        textPasusa2={
          "Naša široka paleta Rubi mašina i alata obuhvata različite proizvode - od keramičarskih sekača, brusilica i bušilica, pa do mašina za sečenje pločica i alata za nivelisanje. Svaki Rubi proizvod je pažljivo osmišljen kako bi vam pružio vrhunsku funkcionalnost i pouzdanost, olakšavajući svaki korak u vašem keramičarskom radu."
        }
        textPasusa3={
          "Rubi inženjeri su stručnjaci u stvaranju alata koji zadovoljavaju zahteve keramičara. Naša stalna želja za inovacijama rezultirala je alatima koji se ističu po svojoj naprednoj tehnologiji i preciznosti, čime vam omogućavamo najbolje rezultate."
        }
        slika1={rubi}
        
        textDoKraja="Kvalitet materijala kojima se koristimo je od suštinskog značaja. Naši alati su izrađeni od visokokvalitetnih materijala kako bi izdržali zahtevne radne uslove i pružili vam dugotrajnost i pouzdanost u svakoj keramičarskoj primeni.

        Rubi alati za keramiku se odlikuju ergonomskim dizajnom i jednostavnom upotrebom. Naši proizvodi pružaju vam udobnost tokom rada i omogućavaju vam da postignete preciznost i estetiku u svakom sečenju, brušenju ili bušenju keramičkih materijala.
        
        Sigurnost i performanse su naš prioritet. Naši proizvodi prolaze rigorozne bezbednosne testove kako bismo vam pružili bezbrižno korišćenje i zaštitili vas tokom upotrebe naših alata za keramiku.
        
        Bilo da ste profesionalni keramičar ili amaterski entuzijasta, Rubi mašine i alati za keramiku su pravi izbor za sve vaše potrebe. Pridružite se profesionalcima širom sveta koji veruju u kvalitet i pouzdanost Rubi brenda. Sa Rubi mašinama i alatima za keramiku, vaši projekti će dobiti novu dimenziju preciznosti i estetike, omogućavajući vam da ostvarite izvanredne rezultate u svakom keramičarskom poduhvatu.
        
        "
      />
    </div>
  );
};

export default index;
