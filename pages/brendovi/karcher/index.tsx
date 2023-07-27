import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import karcher from "../../../public/karcher-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>Karcher - Stridon Group DOO 2023</title>
        <meta name="description" content="Karcher mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Karcher"}
        opis={"Karcher alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
      title={"Karcher"}
        naslovPasusa1={"Standard na tržištu"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "Karcher, sinonim za snagu i efikasnost, nudi vam izvanrednu kolekciju alata za čišćenje koja zadovoljava širok spektar potreba kako u domaćinstvima, tako i u industriji širom sveta. Sa više od 80 godina iskustva u oblasti čišćenja, Karcher je postao lider u industriji i prepoznatljiv brend među korisnicima."
        }
        textPasusa2={
          "Naša široka paleta Karcher alata za čišćenje obuhvata sve što vam je potrebno - od visokopritisnih perača, parnih čistača, usisivača, do čistača podova i mnogih drugih alata. Svaki Karcher proizvod je pažljivo osmišljen kako bi vam pružio izuzetnu snagu čišćenja i brzinu, čineći svaki zadatak čišćenja jednostavnim i efikasnim."
        }
        textPasusa3={
          "Karcher inženjeri su posvećeni inovacijama kako bi vam omogućili alate sa najnaprednijim tehnologijama na tržištu. Naša konstantna težnja za unapređenjem rezultira proizvodima koji postavljaju standarde u čišćenju, omogućavajući vam da ostvarite savršenu čistoću sa minimalnim naporom."
        }
        slika1={karcher}
        
        textDoKraja="Kvalitet materijala kojima se koristimo je od suštinske važnosti. Karcher alati su izrađeni od izdržljivih materijala kako bi izdržali zahtevne radne uslove i pružili vam dugotrajnost tokom dugog veka trajanja.

        Karcher alati se odlikuju praktičnim dizajnom i jednostavnom upotrebom. Naši proizvodi pružaju vam udobnost tokom rada i omogućavaju vam da obavite čišćenje sa preciznošću i brzinom, bez muke.
        
        Sigurnost je naš prioritet. Svi Karcher alati prolaze kroz rigorozne bezbednosne testove kako bismo vam pružili bezbrižno iskustvo i zaštitili vas tokom upotrebe naših alata za čišćenje.
        
        Bilo da želite očistiti vaše domaćinstvo, dvorište ili industrijski prostor, Karcher alati su pravi izbor za sve vaše potrebe. Pridružite se milionima korisnika širom sveta koji veruju u kvalitet i efikasnost Karcher brenda. Sa Karcher alatima za čišćenje, vaše zadatke čišćenja ćete obavljati sa lakoćom i dobiti besprekorno čiste površine, omogućavajući vam da uživate u čistom i blistavom okruženju.
        
        "
      />
    </div>
  );
};

export default index;
