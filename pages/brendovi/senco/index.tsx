import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import senco from "../../../public/senco-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>Stridon | Senco </title>
        <meta name="description" content="Senco mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Senco"}
        opis={"Senco alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
        naslovPasusa1={"Standard na tržištu"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "SENCO, sinonim za snagu i pouzdanost, nudi vam izuzetnu kolekciju zakivača eksera koja zadovoljava visoke standarde u građevinskoj industriji. Sa više od 75 godina iskustva u proizvodnji alata za građevinare i stolare, SENCO je postao renomirani brend među profesionalcima širom sveta."
        }
        textPasusa2={
          "Naša široka paleta SENCO zakivača eksera obuhvata različite modele i veličine - od pneumatskih zakivača za brze i precizne aplikacije, do baterijskih zakivača koji vam pružaju mobilnost na gradilištu. Svaki SENCO zakivač je pažljivo osmišljen kako bi vam omogućio visok nivo produktivnosti i trajnosti, olakšavajući vaše građevinske i stolarske projekte."
        }
        textPasusa3={
          "SENCO inženjeri su posvećeni inovacijama kako bi vam omogućili alate sa najnaprednijom tehnologijom na tržištu. Naši zakivači se ističu po svojoj snazi i brzini, čime vam omogućavaju brzo i efikasno zakivanje eksera u različite materijale."
        }
        slika1={senco}
        
        textDoKraja="Kvalitet materijala kojima se koristimo je od suštinskog značaja. Naši zakivači su izrađeni od izdržljivih materijala kako bi izdržali zahtevne radne uslove i pružili vam dugotrajnost i pouzdanost u svakom zakivanju.

        SENCO zakivači eksera se odlikuju ergonomskim dizajnom i jednostavnom upotrebom. Naši alati pružaju vam udobnost tokom rada i omogućavaju vam precizno pozicioniranje eksera, čime postižete savršene rezultate.
        
        Sigurnost i performanse su naš prioritet. Naši proizvodi prolaze rigorozne bezbednosne testove kako bismo vam pružili bezbrižno korišćenje i zaštitili vas tokom upotrebe naših zakivača eksera.
        
        Bilo da se bavite građevinskim radovima ili stolarskim projektima, SENCO zakivači eksera su pravi izbor za sve vaše potrebe. Pridružite se profesionalcima širom sveta koji veruju u kvalitet i pouzdanost SENCO brenda. Sa SENCO zakivačima eksera, vaši projekti će biti obavljeni brže i sa izvanrednim rezultatima, omogućavajući vam da postignete vrhunske rezultate u svakom građevinskom i stolarskom poduhvatu.
        
        "
      />
    </div>
  );
};

export default index;
