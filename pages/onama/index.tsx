import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-medium text-center pb-12 pt-12">
        O nama
      </h1>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-10 sm:mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:mb-0">
          <Image
            priority
            src="/3333.png"
            alt="stridon vojislava ilica maloprodaja"
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="max-w-full lg:max-w-[570px] lg:pl-10 mb-4">
          <h2 className="text-4xl font-semibold mb-3">Osnivanje</h2>
          <p>
            {" "}
            Naša firma Stridon Group doo - Prodavnica alata je osnovana 2009.
            godine u Beogradu sa sedištem u ulici Borivoja Stevanovića, a
            maloprodajnim objektom na adresi Vojislava Ilića 141g. Nakon par
            godina uspeli smo da otvorimo još jedan prodajni objekat na drugoj
            strani Beograda - Ugrinovačka 212 (Altina), kako bismo omogućili
            kupcima u svim delovima Beograda stabilno i povoljno snabdevanje
            alatom.{" "}
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto p-3 flex flex-col lg:flex-row mb-10 sm:mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:pr-10 mb-4">
          <h2 className="text-4xl font-semibold mb-3">Veleprodaja i maloprodaja</h2>
          <p>
            {" "}
            Mi smo firma koja se bavi trgovinom na veliko i malo, kao i internet
            prodajom što nas čini jedinstvenim u svetu alata u Srbiji. Prodajemo
            brendove ručnog i električnog alata, pribora, zaštitne opreme,
            baštenskog alata, usisivača i još toliko toga! Ovlašćeni smo
            uvoznici i distributeri ogromnog broj svetskih i domaćih brendova
            kao što su: DeWalt, Bosch, Stanley, REMS, Wiha, Knipex, GTV, MAX,
            Hogert, Wera, Rubi, Senco, Black+Decker, MTX, Sparta,SG Tools,
            Karcher, Wolfcraft.{" "}
          </p>
        </div>
        <div className="max-w-full lg:max-w-[570px]">
          <Image
            src="/altina1.png"
            alt="stridon altina maloprodaja"
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-10">
        <div className="max-w-full lg:max-w-[570px] lg:mb-0">
          <Image
            priority
            src="/internetprodajastridon.png"
            alt=""
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="max-w-full lg:max-w-[570px] lg:pl-10 mb-4">
          <h2 className="text-4xl font-semibold mb-3">Internet prodavnica</h2>
          <p>
            {" "}
            Na našoj internet prodavnici možete pronaći preko 60.000 artikala i
            najveća smo online prodavnica alata u Srbiji. Bilo da imate
            građevinsku firmu, ili da ste trgovac alatima, ili samo DIY
            entizujasta mi smo pravi dobavljač alata za Vas! Naša firma je
            najbolji distributer Bosch alata 9 godina u nizu, a od ove godine
            smo i najbolji distributer DeWalt, Stanley i Black+Decker alata u
            Srbiji!{" "}
          </p>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-10">
        <p>
          {" "}
          Na našoj internet prodavnici možete pronaći preko 60.000 artikala i
          najveća smo online prodavnica alata u Srbiji. Bilo da imate
          građevinsku firmu, ili da ste trgovac alatima, ili samo DIY
          entizujasta mi smo pravi dobavljač alata za Vas! Naša firma je
          najbolji distributer Bosch alata 9 godina u nizu, a od ove godine smo
          i najbolji distributer DeWalt, Stanley i Black+Decker alata u Srbiji!{" "}
        </p>
      </div>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-20 text-center">
        <div className="m-auto">
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Adrese maloprodaja:
            </h2>
            Adresa maloprodaje 1: Ugrinovačka 212 <br />
            Adresa maloprodaje 2: Vojislava Ilića 141g <br />
          </div>
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Kontakt telefoni:
            </h2>
            Fiksni telefon internet prodaja: 011/4520-171, <br />
            Maloprodaja Ugrinovačka: 011/210-0230, <br />
            Maloprodaja Vojislava Ilića: 011/2886-509 (samo profesionalni alati){" "}
            <br />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold">E-mail:</h2>
            office@stridon.rs
        </div>
      </div>
    </div>
  );
};

export default index;
