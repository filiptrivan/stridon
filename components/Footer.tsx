import React from "react";
import SocialIcons from "./FooterSocialIcons";
import FooterIconsContainer from "./FooterIconsContainer";
import Link from "next/link";

const Footer = ({translate}:any) => {
  return (
    <div className="w-full bg-gradient-to-r border-t">
      <footer className="max-w-[1140px] m-auto text-center lg:text-left px-4 py-14">
        <FooterIconsContainer translate={translate} />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center text-sm"
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
