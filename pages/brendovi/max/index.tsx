import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import max from "../../../public/max-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>Stridon | MAX </title>
        <meta name="MAX" content="MAX mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"MAX"}
        opis={"MAX vezivači armature i žica - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
        naslovPasusa1={"Standard na tržištu"}
        naslovPasusa2={"Asortiman"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "MAX, sinonim za snagu i efikasnost, pruža vam vrhunsku kolekciju vezivača za armaturu i žicu koja zadovoljava visoke standarde u građevinskoj industriji. Sa više od 75 godina iskustva u proizvodnji alata, MAX je postao renomirani brend među profesionalcima širom sveta."
        }
        textPasusa2={
          "Naša široka paleta MAX vezivača obuhvata različite proizvode - od ručnih i pneumatskih vezivača za armaturu, do specijalizovanih alata za vezivanje žice. Svaki MAX alat je pažljivo osmišljen kako bi vam omogućio brzinu i preciznost, čime olakšavamo vaše građevinske projekte."
        }
        textPasusa3={
          "MAX inženjeri su posvećeni inovacijama kako bi vam pružili vezivače sa najnaprednijom tehnologijom na tržištu. Naši proizvodi se ističu po pouzdanosti i jednostavnoj upotrebi, čime vam omogućavaju visok nivo produktivnosti na gradilištu."
        }
        slika1={max}
        
        textDoKraja="Kvalitet materijala kojima se koristimo je od suštinskog značaja. Naši vezivači su izrađeni od izdržljivih materijala kako bi izdržali zahtevne radne uslove i osigurali dugotrajnost i pouzdanost u svakom trenutku.

        MAX vezivači armature i žica se odlikuju praktičnim dizajnom i mogućnošću prilagodbe različitim potrebama na gradilištu. Naši alati pružaju vam brze i precizne rezultate, što čini vaš rad efikasnim i produktivnim.
        
        Sigurnost i performanse su naš prioritet. Naši proizvodi prolaze stroge bezbednosne testove kako bismo vam pružili bezbrižno korišćenje i zaštitili vas tokom upotrebe naših vezivača.
        
        Bilo da se bavite građevinom i armaturom ili radite sa žicom, MAX vezivači armature i žica su pravi izbor za sve vaše potrebe. Pridružite se građevinskim profesionalcima širom sveta koji veruju u kvalitet i pouzdanost MAX brenda. Sa MAX vezivačima armature i žica, vaši projekti će biti obavljeni brže i sa izuzetnim rezultatima, omogućavajući vam da postignete visok nivo uspeha u svakom građevinskom poduhvatu.
        
        "
      />
    </div>
  );
};

export default index;
