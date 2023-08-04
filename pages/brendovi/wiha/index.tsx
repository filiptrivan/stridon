import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import wiha from "../../../public/wiha-logo.png";
const wihaKatalogVrednosti = [
  {
    imeKataloga: "Wiha katalog",
    rutaKataloga: "https://drive.google.com/file/d/1s2s4TmSn_7inwljmfF0mznbdVXWMGEDJ/view?usp=drive_link",
  },
  {
    imeKataloga: "Wiha merni alati",
    rutaKataloga: "https://drive.google.com/file/d/196RbKP5DyiWkJnqvOx1ML10Gby4M2CiG/view?usp=drive_link",
  },
  {
    imeKataloga: "Wiha XXL III kofer",
    rutaKataloga: "https://drive.google.com/file/d/1gfqq3qQRqocaSAXVwRm-3s9lGDpyDNbn/view?usp=drive_link",
  },
];
const index = () => {
  return (
    <div>
      <Head>
        <title>Wiha - Stridon Group DOO 2023</title>
        <meta name="description" content="Wiha mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Wiha"}
        opis={"Wiha alati - Uvoznik za Srbiju"}
        naslovButtona={"Pogledaj PDF kataloge"}
        catalogueValues={wihaKatalogVrednosti}
      />
      <TextoviISlike
      title={"Wiha"}
        naslovPasusa1={"Kvalitet i standard"}
        naslovPasusa2={"Širok asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "Wiha, sinonim za izvrsnost i prilagodljivost, donose vam širok spektar ručnih alata koji zadovoljavaju najviše standarde kvaliteta i performansi. Sa preko 80 godina iskustva u proizvodnji alata, Wiha je postala jedan od najpouzdanijih brendova među profesionalcima i majstorima širom sveta."
        }
        textPasusa2={
          "Naša kolekcija Wiha alata obuhvata širok asortiman proizvoda - od šrafcigera, odvijača i ključeva, do klešta, čekića i mnogih drugih alata. Svaki Wiha alat je pažljivo osmišljen kako bi pružio vrhunsku funkcionalnost i pouzdanost tokom svake upotrebe."
        }
        textPasusa3={
          "Wiha inženjeri su posvećeni inovacijama i neprestano rade na razvoju novih tehnologija kako bi vam pružili najbolje alate na tržištu. Naše napredne tehnologije čine vaš rad efikasnim i preciznim, omogućavajući vam da se nosite sa raznovrsnim izazovima vaših projekata."
        }
        slika1={wiha}
        
        textDoKraja="Kvalitet materijala kojima se koristimo je od suštinskog značaja. Naši alati su izrađeni od najfinijih materijala, pružajući vam izdržljivost i pouzdanost koja će vam služiti dugi niz godina.

        Wiha alati su dizajnirani kako bi vam omogućili udobnost i preciznost tokom rada. Ergonomski dizajn i intuitivna upotreba čine vaš rad prijatnim i bez napora, čak i tokom dugih radnih sati.
        
        Sigurnost je naš prioritet. Naši proizvodi prolaze stroge bezbednosne testove kako bismo vam pružili bezbrižno radno iskustvo i zaštitili vas tokom upotrebe naših alata.
        
        Bilo da ste profesionalac ili entuzijasta, Wiha alati su pravi izbor za sve vaše potrebe. Pridružite se milionima korisnika širom sveta koji veruju u kvalitet i pouzdanost Wiha brenda. Sa Wiha alatima, možete se osloniti na vrhunske performanse i postići izvanredne rezultate u svakom projektu.
        
        "
      />
    </div>
  );
};

export default index;
