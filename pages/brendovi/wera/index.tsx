import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import wera from "../../../public/wera-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>Stridon | Wera </title>
        <meta name="description" content="Wera mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Wera"}
        opis={"Wera alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
        naslovPasusa1={"Standard na tržištu"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "Wera, sinonim za profesionalnost i inovaciju, pruža vam vrhunsku kolekciju ručnih alata koji su omiljeni među profesionalcima i entuzijastima širom sveta. Sa više od 80 godina iskustva u proizvodnji alata, Wera je postala simbol kvaliteta i pouzdanosti među korisnicima."
        }
        textPasusa2={
          "Naša široka paleta Wera ručnih alata obuhvata širok spektar proizvoda - od odvijača, nasadnih ključeva, klešta, do setova sa specijalnim alatima. Svaki Wera alat je pažljivo osmišljen kako bi pružio izuzetne performanse i trajnost, čineći vaše radne zadatke lakšim i efikasnijim."
        }
        textPasusa3={
          "Wera inženjeri su posvećeni inovacijama kako bi vam omogućili alate sa najnaprednijim tehnologijama na tržištu. Naša stalna želja za poboljšanjem rezultirala je alatima koji se ističu po svojoj preciznosti i praktičnosti."
        }
        slika1={wera}
        
        textDoKraja="Kvalitet materijala kojima se koristimo je ključan za naš uspeh. Naši alati su izrađeni od najkvalitetnijih materijala kako bi izdržali najteže radne uslove i pružili vam dugotrajnost i pouzdanost u svakom trenutku.

        Wera alati se ističu ergonomskim dizajnom i intuitivnom upotrebom. Naši alati pružaju vam udobnost tokom radnog procesa i omogućavaju vam precizno rukovanje, čime postižete najbolje rezultate.
        
        Sigurnost je naša briga. Naši proizvodi prolaze rigorozne bezbednosne testove kako bismo vam pružili bezbrižno radno iskustvo i zaštitili vas tokom upotrebe naših alata.
        
        Bilo da ste profesionalac koji traži vrhunske alate za svoje svakodnevne zadatke ili entuzijasta koji želi da ostvari svoje projekte, Wera ručni alati su pravi izbor za sve vaše potrebe. Pridružite se milionima korisnika širom sveta koji veruju u kvalitet i inovaciju Wera brenda. Sa Wera ručnim alatima, vaš rad postaje efikasniji i precizniji, omogućavajući vam da ostvarite izvanredne rezultate u svakom poduhvatu.
        
        "
      />
    </div>
  );
};

export default index;
