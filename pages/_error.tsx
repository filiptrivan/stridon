import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ErrorPage() {
  const { t: translate } = useTranslation("home");

  return (
    <div>
      <div className="max-w-[1140px] m-auto py-24 my-10 border-2 p-16 text-center">
        {/* naslov */}
        <div className="text-3xl font-medium py-24">
          {translate("Došlo je do greške, molimo Vas kontaktirajte podršku")}
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
export async function getStaticProps({locale}:any) {
  return{
    props:{
      ...(await serverSideTranslations(locale,["home"]))
    }
  }
}
