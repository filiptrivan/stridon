import Hero from "../../../components/brendovi/Hero";
import TextoviISlike from "../../../components/brendovi/TextoviISlike";
import Head from "next/head";
import stanley from "../../../public/stanley-logo.png";
const index = () => {
  return (
    <div>
      <Head>
        <title>Stridon | Stanley </title>
        <meta name="description" content="Stanley mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={"Stanley"}
        opis={"Stanley alati - Uvoznik za Srbiju"}
        naslovButtona={""}
        catalogueValues={""}
      />
      <TextoviISlike
        naslovPasusa1={"Tržište"}
        naslovPasusa2={"Ručni alati"}
        naslovPasusa3={"Tehnologija i napredak"}
        textPasusa1={
          "Stanley, sinonim za kvalitet i pouzdanost, pruža vam širok asortiman ručnih i električnih alata koji će vas impresionirati snagom i preciznošću. Sa bogatom istorijom koja traje više od 175 godina, Stanley je postao poznat po svojoj posvećenosti inovacijama i dizajnu alata koji zadovoljavaju potrebe svakog korisnika."
        }
        textPasusa2={
          "Naša kolekcija ručnih alata obuhvata sve što vam je potrebno za svaki posao - od čekića, odvijača i ključeva, pa do libela, testera i noževa. Izgrađeni sa pažnjom prema detaljima, naši ručni alati vam pružaju izdržljivost i pouzdanost koja će vas podržati tokom godina."
        }
        textPasusa3={
          "Stanley električni alati predstavljaju spoj naprednih tehnologija i snage, obezbeđujući vam vrhunsku efikasnost i produktivnost. Bušilice, brusilice, ubodne testere i drugi električni alati predstavljaju srce naše ponude, prilagođeni kako profesionalcima, tako i kućnim majstorima koji traže vrhunske performanse."
        }
        slika1={stanley}
        
        textDoKraja="Uz svoju svestranost i pouzdanost, Stanley alati donose vam i jednostavnost upotrebe. Intuitivan dizajn i ergonomska konstrukcija omogućavaju vam komforno rukovanje alatima, što vam omogućava duže radne sate bez umora.

        Kada je u pitanju izdržljivost, Stanley postavlja standarde. Naši alati su izrađeni od najkvalitetnijih materijala kako bi izdržali najteže uslove i pružili vam dugotrajnu pouzdanost u svakom trenutku.
        
        Sigurnost je naša glavna briga, zbog čega svi Stanley alati prolaze kroz rigorozne bezbednosne testove kako bi vam pružili bezbrižno radno iskustvo. Možete se osloniti na našu posvećenost vašoj sigurnosti dok koristite naše proizvode.
        
        Stanley takođe ceni održivost i ekološki odgovoran pristup. Trudimo se da smanjimo naš uticaj na životnu sredinu, obezbeđujući ekološki prihvatljive proizvode koji će vam pomoći da obavite svoj rad sa poštovanjem prema prirodi.
        
        Uverite se zašto milioni korisnika širom sveta poveravaju svoje projekte Stanley alatima. Naša posvećenost kvalitetu, pouzdanosti i performansama čini nas pouzdanim partnerom za sve vaše potrebe. Sa Stanley alatima u vašim rukama, svaki posao postaje lakši i efikasniji.
        "
      />
    </div>
  );
};

export default index;
