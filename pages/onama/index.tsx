import Image from "next/image";
import { useTranslation } from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

const index = () => {
const {t:translate} = useTranslation('home')
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-medium text-center pb-12 pt-12">
        {translate("O nama")}
      </h1>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-10 sm:mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:mb-0">
          <Image
            priority
            src="/altina1.png"
            alt="stridon vojislava ilica maloprodaja"
            className="rounded-md w-full"
            width={1920}
            height={1080}
          />
        </div>
        <div className="max-w-full lg:max-w-[570px] lg:pl-10 mb-4">
          <h2 className="text-4xl font-semibold mb-3">{translate("Osnivanje")}</h2>
          <p>
            {" "}
            {translate("tekst 1 o nama")}
            {/* {" "} */}
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto p-3 flex flex-col lg:flex-row mb-10 sm:mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:pr-10 mb-4">
          <h2 className="text-4xl font-semibold mb-3">{translate("Veleprodaja i maloprodaja")}</h2>
          <p>
            {" "}
            {translate("tekst 2 o nama")}
            {/* {" "} */}
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
          <h2 className="text-4xl font-semibold mb-3">{translate("Internet prodavnica")}</h2>
          <p>
            {" "}
            {translate("tekst 3 o nama")}
            {/* {" "} */}
          </p>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse lg:flex-row mb-20 text-center">
        <div className="m-auto">
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-semibold">
              {translate("Adrese maloprodaja:")}
            </h2>
            {translate("Adresa maloprodaje 1: Ugrinovačka 212")} <br />
            {translate("Adresa maloprodaje 2: Vojislava Ilića 141g")} <br />
          </div>
          <div className="mb-5">
            <h2 className="text-xl sm:text-2xl font-semibold">
              {translate("Kontakt telefoni:")}
            </h2>
            {translate("Fiksni telefon internet prodaja: 011/4520-171,")} <br />
            {translate("Maloprodaja Ugrinovačka: 011/210-0230,")} <br />
            {translate("Maloprodaja Vojislava Ilića: 011/2886-509 (samo profesionalni alati)")}{" "}
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

export async function getStaticProps({locale}:any) {
  return{
    props:{
      ...(await serverSideTranslations(locale,['home']))
    }
  }
}