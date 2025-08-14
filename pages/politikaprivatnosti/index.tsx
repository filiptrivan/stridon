import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Text from '../../components/politika-privatnosti/text'

const index = () => {
  const { t: translate } = useTranslation("politikaprivatnosti");
  return (
    <div className="px-2">
      <Head>
        <title>Politika privatnosti korisnika | Stridon Group DOO</title>
        <meta
          name="description"
          content="Vaša privatnost je naš prioritet. Upoznajte se s našom detaljnom politikom privatnosti kako biste bili sigurni u zaštitu vaših podataka na našem sajtu.✅"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text translate={translate} />
    </div>
  );
};
export default index;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["politikaprivatnosti", "NavBar", "Footer"])),
    },
  };
}
