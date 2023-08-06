import dynamic from "next/dynamic";
import { BeatLoader } from "react-spinners";
// import Text from "@/components/politika-privatnosti/text";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Text = dynamic(() => import("@/components/politika-privatnosti/text"), {
  loading: () => (
    <div className="text-center mt-12">
      <BeatLoader
        color="#111b2c"
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ),
  ssr: false,
});

const index = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <Text translate={translate} />
    </div>
  );
};
export default index;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
