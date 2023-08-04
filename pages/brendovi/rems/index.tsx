import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import rems from "../../../public/remslogo.png";
const remsKatalogVrednosti = [
  {
    imeKataloga: "Rems akcija 2023",
    rutaKataloga: "https://drive.google.com/file/d/1S_H99PFic4pdtzFZOw2lSC0URAo6YFcV/view?usp=drive_link",
  },
];
const index = () => {
  return (
    <div>
      <Head>
        <title>REMS - Stridon Group DOO 2023</title>
        <meta name="description" content="Rems mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Rems"}
        opis={"Rems alati - Uvoznik za Srbiju"}
        naslovButtona={"Pogledaj PDF kataloge"}
        catalogueValues={remsKatalogVrednosti}
      />
      <TextoviISlike
      title={"REMS"}
        naslovPasusa1={"Tržište"}
        naslovPasusa2={"Cevi i instalacije"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "REMS, simbol kvaliteta i efikasnosti, donose vam vrhunski asortiman alata koji zadovoljavaju potrebe profesionalaca i majstora širom sveta. Sa više od 100 godina iskustva u industriji, REMS je postao sinonim za pouzdanost i vrhunske performanse."
        }
        textPasusa2={
          "Naša kolekcija alata obuhvata sve što vam je potrebno za rad sa cevima i instalacijama - od presa za cevi, prese za fitinge, do sečica i mašina za čišćenje cevi. Svaki REMS alat je pažljivo dizajniran kako bi vam omogućio preciznost i brzinu, čineći vaše radne zadatke jednostavnim i efikasnim."
        }
        textPasusa3={
          "REMS inženjeri su stručnjaci u razvoju inovativnih rešenja koja odgovaraju potrebama savremenih majstora. Napredne tehnologije koje koristimo u proizvodnji naših alata obezbeđuju vam pouzdanost i dugotrajnost tokom upotrebe."
        }
        slika1={rems}
        
        textDoKraja="Kvalitet materijala koji koristimo je od suštinske važnosti, pa se trudimo da naši alati budu izrađeni od najkvalitetnijih materijala kako bismo osigurali njihovu izdržljivost i pouzdanost u teškim radnim uslovima.

        REMS alati su dizajnirani sa fokusom na jednostavnu upotrebu i ergonomiju, čime vam omogućavamo da obavite vaš rad sa lakoćom i bez napora.
        
        Sigurnost je naš prioritet, zbog čega se naši proizvodi podvrgavaju rigoroznim bezbednosnim testovima kako bismo vam obezbedili bezbrižno radno iskustvo.
        
        Uverite se zašto profesionalci širom sveta poveravaju svoje projekte REMS alatima. Naša posvećenost kvalitetu, efikasnosti i inovaciji čini nas prvim izborom za sve vaše potrebe u radu sa cevima i instalacijama. Sa REMS alatima, svaki zadatak postaje lakši i produktivniji.
        
        "
      />
    </div>
  );
};

export default index;
