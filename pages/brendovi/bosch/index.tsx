import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import bosch from "../../../public/boschlogo.png";
const boschKatalogVrednosti = [
  {
    imeKataloga: "1.bosch katalog",
    rutaKataloga: "/katalog.pdf",
  },
  {
    imeKataloga: "2.bosch katalog",
    rutaKataloga: "/katalog.pdf",
  },
  {
    imeKataloga: "3.bosch katalog",
    rutaKataloga: "/katalog.pdf",
  },
  {
    imeKataloga: "4.bosch katalog",
    rutaKataloga: "/katalog.pdf",
  },
];
const index = () => {
  return (
    <div>
      <Head>
        <title>Stridon | Bosch </title>
        <meta name="Bosch" content="Bosch mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Bosch"}
        opis={"BOSCH alati - Uvoznik za Srbiju"}
        naslovButtona={"Preuzmi PDF katalog"}
        catalogueValues={boschKatalogVrednosti}
      />
      <TextoviISlike
        naslovPasusa1={"Tržište"}
        naslovPasusa2={"Vrste alata"}
        naslovPasusa3={"Istorija Bosch-a u Srbiji"}
        textPasusa1={
          "Bosch Power Tools je jedna od najvećih svetskih firmi koja se bavi proizvodnjom električnih i ručnih alata. Bosch Professional predstavlja sinonim za kvalitet i trajnost. Bosch električni i akumulatorski alati su jedni od najkorišćenijih i najprodavanijih alata na tržišu."
        }
        textPasusa2={
          "Sem Bosch plavih profesionalnih alata, postoje i Bosch HG alati - to su Bosch Hobby zeleni alati i Bosch baštenski alati. Kao i Bosch plavi alat i ovi alati su izuzetno kvalitetni, a o tome nam govori i garancija koja iznosi 3 godine na obe serije alata."
        }
        textPasusa3={
          "Bosch Srbija je ogranak kompanije koji na našem tržištu posluje od 2006. godine i kontinuirano je najzastupljenija marka u Srbiji. Kompanija Bosch sa brendovima kao što su Bosch i Dremel, baca fokus na kupce i veliki inženjerski napredak. Osnovni faktori uspeha su inovativna snaga i tempo inovacija."
        }
        slika1={bosch}
        
        textDoKraja=" U 2019. godini Bosch električni alati su lansirali više od 100 novih proizvoda na nemačko tržište u svoja četiri poslovna segmenta električni alati, dodaci, merni alati i baštenski alati. Kontinuiran razvojem i inovacijama Bosch ostaje lider na tržištu alata u celom svetu. Uz Bosch Biturbo alate za profesionalce i IouSeries za hobi korisnike sa najvišim potrebama, Bosch lansira potpuno nove bežične električne alate. Bosch električni alati predstavljaju inovaciju, rekao je Henk Becker, predsednik Robert Bosch Power Tools GmbH. Oblikujemo tehnički razvoj industrije. Naša je tvrdnja da imamo najmanje i najsnažnije baterije na tržištu, da zamenjujemo kablovske alate bežičnim alatima na duži rok. Novi Bosch električni alati za profesionalce optimizovani su ProCore18V baterijama za maksimalne performanse. To ih čini moćnijim od svih prethodnih Bosch bežičnih alata. Ovo se zasniva na optimalnoj koordinaciji njihovog motora bez četkica sa elektronikom i baterijom, tako da se baterije visokih performansi mogu iskoristiti u punom potencijalu. Pored toga, Bosch Biturbo alati se mogu pohvaliti dodatnim prednostima kao što su mala težina i interaktivni ekran: Profesionalci stoga mogu prilagoditi alate prema svojim potrebama. Bosch alati neprestano proširuju svoj bežični segment i za kućne entuzijaste i za profesionalce. Fokus je i ostaće na sistemima baterija od 18 volti. Bosch garantuje kompatibilnost sa svim postojećim i budućim električnim alatima iste klase napona - kako u sistemima za profesionalce, tako i u sistemima za diy entuzijaste. Ovo omogućava korisnicima da rade bez baterija i punjača koji im nisu potrebni - istovremeno štedeći novac. Ako želite kvalitetne alate, sa 3 godine garancije birajte Bosch alat!"
      />
    </div>
  );
};

export default index;
