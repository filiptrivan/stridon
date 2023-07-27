import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import dewalt from "../../../public/dewaltlogo.png";
// const dewaltKatalogVrednosti = [
//   {
//     imeKataloga: "1.Dewalt katalog",
//     rutaKataloga: "/katalog.pdf",
//   },
//   {
//     imeKataloga: "2.Dewalt katalog",
//     rutaKataloga: "/katalog.pdf",
//   },
//   {
//     imeKataloga: "3.Dewalt katalog",
//     rutaKataloga: "/katalog.pdf",
//   },
// ];
const index = () => {
  return (
    <div>
      <Head>
        <title>DeWalt - Stridon Group DOO 2023</title>
        <meta name="description" content="DeWalt mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"DeWalt"}
        opis={"DEWALT alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
      title={"Dewalt"}
        naslovPasusa1={"Vodeći brend"}
        textPasusa1={
          "DEWALT alati, kao vodeći svetski brend u industriji električnih alata, predstavljeni su vam sa ponosom od strane našeg tima kao ekskluzivni uvoznik za Srbiju. Sa više od jednog veka iskustva i inovacija, DEWALT je sinonim za vrhunsku kvalitetu, pouzdanost i performanse koje prevazilaze očekivanja."
        }
        slika1={dewalt}
        naslovPasusa2={"Rast i razvoj"}
        textPasusa2={
          "DEWALT inženjeri neprestano rade na razvoju napredne tehnologije kako bi našim korisnicima omogućili alate koji su bez premca u svojoj klasi. Ova posvećenost inovacijama rezultirala je impresivnim asortimanom alata koji zadovoljavaju potrebe kako profesionalaca, tako i entuzijasta sa visokim zahtevima."
        }
        naslovPasusa3={"Izdvajanje od konkurencije"}
        textPasusa3={
          "Naša kolekcija DEWALT alata obuhvata širok spektar proizvoda, uključujući bušilice, brusilice, testere, odvijače, ubodne testere, sekače i mnoge druge. Bez obzira na vrstu posla ili zahteva projekta, DEWALT alati pružaju izuzetne performanse i pouzdanost u svakoj situaciji."
        }
        textDoKraja={
          "Kada se radi o izdržljivosti, DEWALT alati postavljaju standarde u industriji. Napravljeni od visokokvalitetnih materijala, naši alati su dizajnirani da izdrže teške radne uslove, garantujući dugotrajnost i pouzdanost u svakom trenutku.\n\nBaterijska tehnologija je srce mnogih DEWALT alata, pružajući neograničenu mobilnost i fleksibilnost bez potrebe za stalnom blizinom električne utičnice. Naše baterije su brzo punjive i imaju dug vek trajanja, pružajući vam više vremena za obavljanje posla i manje vremena za čekanje.\n\nDEWALT alati su izrađeni uz pažnju prema bezbednosti korisnika. Svaki proizvod prolazi kroz rigorozne bezbednosne testove kako bi se osiguralo da zadovoljava najviše standarde zaštite i sigurnosti. Bez obzira na vaše iskustvo u radu sa alatima, DEWALT će vas podržati sa bezbednošću i pouzdanošću koju zaslužujete.\n\nPostanite deo globalne zajednice korisnika DEWALT alata i iskusite inovaciju i snagu koju donose naši proizvodi. Kao uvoznik i distributer za Srbiju, ponosimo se što vam pružamo pristup širokom asortimanu alata koji će vam pomoći da ostvarite izuzetne rezultate u svakom projektu.\n\nUverite se zašto DEWALT alati predstavljaju pravi izbor za sve vaše potrebe. Neka vaš rad bude bezgraničan sa DEWALT inovacijama - uz nas, vaš uspeh je zagarantovan."
        }
      />
    </div>
  );
};

export default index;
