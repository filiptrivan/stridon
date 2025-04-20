import React from "react";
import SocialIcons from "./FooterSocialIcons";
import FooterIconsContainer from "./FooterIconsContainer";
import Link from "next/link";

const Footer = ({translate}:any) => {
  return (
    <div className="w-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 mt-12">
      <footer className="text-white max-w-[1140px] m-auto text-center lg:text-left p-2">
        <FooterIconsContainer translate={translate} />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
        >
          <span>
            {translate("© 2025 Sva prava zaštićena. Stridon Group d.o.o.")}
          </span>
          <span>
            <Link
              className=" hover:text-red-500 duration-200"
              href={"/podacizaidentifikaciju"}
            >
              {" "}
              {translate("Podaci za Identifikaciju · ")}
            </Link>{" "}
            <Link
              className=" hover:text-red-500 duration-200"
              href={"/politikaprivatnosti"}
            >
              {" "}
              {translate("Politika Privatnosti")}{" "}
            </Link>{" "}
          </span>
          <SocialIcons />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
