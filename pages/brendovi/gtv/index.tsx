import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import gtv from "../../../public/gtv-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>GTV - Stridon Group DOO 2023</title>
        <meta name="GTV" content="GTV mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"GTV"}
        opis={"GTV alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
      title={"GTV"}
        naslovPasusa1={"Renomirani brend"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "GTV, sinonim za inovaciju i kvalitet, donosi vam izuzetnu kolekciju okova i dodataka za nameštaj koji zadovoljavaju najviše standarde funkcionalnosti i estetike. Sa strašću za inovacijama i iskustvom u industriji, GTV je postao renomirani brend među dizajnerima nameštaja i stolarima širom sveta."
        }
        textPasusa2={
          "Naša široka paleta GTV okova i dodataka obuhvata različite proizvode - od šarki, klizača i bravica, pa do točkića, ručki i dodatnih elemenata. Svaki GTV proizvod je pažljivo dizajniran kako bi vam pružio funkcionalnost i pouzdanost, istovremeno oplemenjujući izgled vašeg nameštaja."
        }
        textPasusa3={
          "GTV inženjeri su posvećeni stvaranju inovativnih rešenja koja će unaprediti vaše projekte. Sa vrhunskim tehnologijama i materijalima, naši proizvodi su nezaobilazni za stvaranje savremenih i funkcionalnih komada nameštaja."
        }
        slika1={gtv}
        
        textDoKraja="Kvalitet naših proizvoda je od suštinske važnosti. Svaki GTV okov i dodatak je napravljen od visokokvalitetnih materijala kako bi osigurao dugotrajnost i pouzdanost vašeg nameštaja tokom godina.

        GTV proizvodi se odlikuju jednostavnom montažom i intuitivnom upotrebom. Naši alati pružaju vam praktičnost i olakšavaju proces izrade i postavljanja nameštaja.
        
        Sigurnost i funkcionalnost su naš prioritet. Naši proizvodi prolaze rigorozne testove kako bismo vam pružili bezbrižno korišćenje i zaštitili vaše kreacije od habanja i oštećenja.
        
        Bilo da se bavite dizajniranjem nameštaja ili ste stolar koji traži vrhunske dodatke, GTV okov i dodaci za nameštaj su pravi izbor za svaku priliku. Pridružite se milionima dizajnera i stolara koji veruju u kvalitet i inovaciju GTV brenda. Sa GTV okovom i dodacima za nameštaj, vaši projekti će dobiti novu dimenziju funkcionalnosti i estetike, omogućavajući vam da kreirate izvanredne komade nameštaja koji će zadovoljiti i najviše zahtevne ukuse.
        
        "
      />
    </div>
  );
};

export default index;
