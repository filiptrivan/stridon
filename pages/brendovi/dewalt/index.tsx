import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import dewalt from "../../../public/devalt.webp";
const dewaltKatalogVrednosti = [
  {
    imeKataloga: "1.Dewalt katalog",
    rutaKataloga: "/katalog.pdf"
  },
  {
    imeKataloga: "2.Dewalt katalog",
    rutaKataloga: "/katalog.pdf"
  },
  {
    imeKataloga: "3.Dewalt katalog",
    rutaKataloga: "/katalog.pdf"
  }
];
const index = () => {
  return (
    <div>
      <Head>
        <title>DeWalt - Stridon Group DOO</title>
        <meta name="description" content="DeWalt mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"DeWalt"}
        opis={"DeWalt - povest i inovacija u svetu električnih alata"}
        naslovButtona={"Preuzmi PDF katalog"}
        catalogueValues={dewaltKatalogVrednosti}
      />
      <TextoviISlike
        naslovPasusa1={"Vrhunski kvalitet"}
        textPasusa1={
          "DeWalt je ime koje svi majstori i profesionalci povezuju sa vrhunskim kvalitetom, pouzdanošću i inovacijama u svetu električnih alata. Kompanija DeWalt, koja je danas deo Stanley Black & Decker grupacije, osnovana je još 1924. godine od strane izumitelja i tvorca prvog radijskog akumulatorskog alata, Raymonda E. DeWalta. Od tada, kompanija neprestano oblikuje industriju alata i pruža korisnicima izuzetne proizvode i tehnologije."
        }
        slika1={dewalt}
        naslovPasusa2={"Izdržljivost"}
        textPasusa2={
          "DeWalt je u početku postao poznat po svojim visokokvalitetnim i robusnim električnim alatima koji zadovoljavaju potrebe profesionalnih građevinara, stolara i majstora. Njihovi ručni alati, električne bušilice, testere, brusilice i drugi proizvodi brzo su osvojili poverenje korisnika zahvaljujući svojoj izdržljivosti."
        }
        slika2={dewalt}
        naslovPasusa3={"Izdvajanje od konkurencije"}
        textPasusa3={
          "Međutim, ono što je DeWalt istinski izdvojilo od konkurencije bila je njihova posvećenost inovacijama. Kompanija je uvek bila u koraku s najnovijim tehnološkim trendovima i potrebama korisnika. Kroz godine, DeWalt je predstavio niz revolucionarnih tehnoloških rešenja koja su rad korisnika učinila jednostavnijim, bržim i efikasnijim."
        }
        slika3={dewalt}
        textDoKraja={
          'Jedan od najznačajnijih napredaka bio je razvoj XR tehnologije (Extended Runtime) koja je poboljšala trajnost baterija i osigurala duže vreme rada alata. Osim toga, DeWalt je pionirski predstavio brusilice s poboljšanom prašinskom kontrolom, akumulatorske alate s visokim naponom i izuzetno otporne alate za rad u zahtevnim uslovima. DeWalt je takođe poznat po svom sistemu "FlexVolt", koji omogućava da se akumulatorski alati koriste s različitim naponima, u zavisnosti od potreba posla. Ova inovacija omogućava korisnicima da imaju snažne alate za najzahtevnije zadatke, ali i lakše i kompaktnije alate za manje poslove, sve uz isti akumulator. Njihova linija alata nije ograničena samo na profesionalce; DeWalt se takođe fokusira na potrebe kućnih majstora i entuzijasta. Njihov širok asortiman alata, od jednostavnih bušilica i ubodnih testera do sofisticiranih višenamenskih alata, omogućava svima, bez obzira na nivo iskustva, da obavljaju poslove sa lakoćom i efikasnošću. DeWalt je ne samo sinonim za izvrsne proizvode, već i za izvanrednu podršku korisnicima. Njihova usluga i jamstvena podrška osiguravaju da kupci imaju poverenje u svoje alate, znajući da je kompanija tu da im pomogne u slučaju bilo kakvih problema. Danas, DeWalt je globalno prepoznata marka koja je postala nezamenljiv partner brojnim profesionalcima i entuzijastima širom sveta. Njihova predanost kvalitetu, inovacijama i korisničkom iskustvu osigurava da će DeWalt i dalje ostati vodeća snaga u svetu električnih alata i da će nastaviti transformisati način na koji se poslovi obavljaju u različitim industrijskim granama.'
        }
      />
    </div>
  );
};

export default index;
