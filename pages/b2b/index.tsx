import React, { useState } from "react";
import Hero from "../components/Hero";
import dynamic from "next/dynamic";
const FormaZaPopunjavanje = dynamic(() => import("@/components/b2b/FormaZaPopunjavanje"), {
  ssr: false,
});
// import FormaZaPopunjavanje from "@/components/b2b/FormaZaPopunjavanje";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const index = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Hero
        titleNaHomePage="B2B"
        naslovButtona="Link ka portalu"
        opisNaHomePage="Imate B2B nalog sa nama? Idite na portal."
        slug="https://b2b.wings.rs/stridon#"
      />
      <div onClick={()=>{setVisible(!visible)}} className="text-center text-xl max-w-[1140px] m-auto py-4 border rounded-md hover:bg-slate-200 cursor-pointer shadow-lg">Popuni B2B formu<KeyboardArrowDownIcon/></div>
      {visible && <FormaZaPopunjavanje />}
    </div>
  );
};

export default index;
