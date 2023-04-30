import React from "react";
import SocialIcons from "./FooterSocialIcons";
import FooterIconsContainer from "./FooterIconsContainer";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full border-t-2 bg-zinc-950">
    <footer className="text-white max-w-[1140px] m-auto text-center lg:text-left p-2">

      <FooterIconsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Sva prava zaštićena. Stridon Group d.o.o.</span>
        <span><Link className=" hover:text-red-500 duration-200" href={"/podacizaidentifikaciju"}> Podaci za Identifikaciju · </Link> <Link className=" hover:text-red-500 duration-200" href={"/politikaprivatnosti"}> Politika Privatnosti </Link> </span>
        <SocialIcons />
      </div>
    </footer>
    </div>
  );
};

export default Footer;


