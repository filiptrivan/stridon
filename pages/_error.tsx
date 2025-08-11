import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ErrorPage() {
  const { t: translate } = useTranslation("error");

  return (
    <div>
      <div className="max-w-[1140px] m-auto py-24 my-10 p-16 text-center">
        <div className="text-3xl font-medium py-24">
          {translate("NotFoundErrorMessage")}
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
export async function getStaticProps({locale}:any) {
  return{
    props:{
      ...(await serverSideTranslations(locale,["error", "NavBar", "Footer"]))
    }
  }
}
