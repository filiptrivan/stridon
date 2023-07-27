import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import sgtools from "../../../public/sg-tools-logo.png";
const index = () => {
  return ( 
    <div>
      <Head>
        <title>SG Tools - Stridon Group DOO 2023</title>
        <meta name="description" content="SG Tools mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"SG Tools"}
        opis={"SG Tools alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
       title={"SG Tools"}
        naslovPasusa1={"Renomirani brend"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Cena i kvalitet"}
        textPasusa1={
          "SG Tools je istaknuti profesionalni brend dijamantskog pribora koji je poznat po svom vrhunskom kvalitetu i izuzetnoj dugotrajnosti. Njihovi proizvodi postavljaju standarde u industriji i predstavljaju pouzdan izbor za širok spektar korisnika."
        }
        textPasusa2={
          "SG Tools je profesionalni brend dijamantskog pribora. SG Tools proizvodi se ističu svojim kvalitetom i dugotrajnošću. Deo ponuda SG Tools proizvoda obuhvata: dijamantske bušače keramike, dijamantske diskove za sečenje betona i dijamantske diskove za sečenje keramike. Odličan odnos cene i kvaliteta doprinosi sve većoj prisutnosti brenda u Srbiji."
        }
        textPasusa3={
          "Ono što SG Tools čini posebnim je njihov odličan odnos cene i kvaliteta. Ovi proizvodi su pristupačni, što omogućava širem krugu korisnika da uživa u profesionalnom alatu bez kompromisa na kvalitetu. Zbog toga SG Tools brend sve više dobija na prisutnosti na tržištu Srbije i postaje prvi izbor mnogih stručnjaka i entuzijasta."
        }
        slika1={sgtools}
        textDoKraja="Brend SG Tools se ističe i po posvećenosti kvalitetu svojih proizvoda, pažljivo biranim materijalima i visokim standardima proizvodnje. Kroz konstantno istraživanje i razvoj, SG Tools teži da unapredi svoje proizvode i isprati potrebe savremenih korisnika, nudeći im alate koji će im olakšati svakodnevne zadatke i omogućiti postizanje vrhunskih rezultata.

        Ukoliko tražite dijamantski pribor koji će vas oduševiti svojom pouzdanošću i performansama, SG Tools je brend na koji možete računati. Njihova strast prema inovacijama i neprekidno teženje ka unapređenju čine ih pouzdanim partnerom kako za profesionalce, tako i za sve one koji žele vrhunski alat za svoje projekte.
        "
      />
    </div>
  );
};

export default index;
