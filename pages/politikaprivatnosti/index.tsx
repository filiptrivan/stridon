import dynamic from "next/dynamic";
import { BeatLoader } from "react-spinners";
// import Text from "@/components/politika-privatnosti/text";
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
  return (
    <div>
      <Text/>
    </div>
  );
};

export default index;
