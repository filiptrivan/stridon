import React from "react";
import ErrorPage from "../_error";
import Link from "next/link";

interface Link {
  name: string;
  link: string;
}

interface Props {
  Links: Link[];
  title: string;
  translate:any;
}

const FooterItem: React.FC<Props> = ({ Links, title, translate }) => {
  if(!Links){
    return <ErrorPage/>
  }
  if(!title){
    return <ErrorPage/>
  }
  return (
    <ul>
      <div className="mb-1 font-semibold">{title}</div>
      {Links.map((link) => (
        <li key={link.name}>
          <Link
            className={
              link.name != "Ponedeljak - Petak: 8:00 - 18:00h" &&
              link.name != "Subota: 9:00 - 15:00h" &&
              link.name != "Altina - Ugrinovačka 212" &&
              link.name != "Vojislava Ilića 141g" &&
              link.name != "Nedelja: Neradan dan"
                ? "text-gray-400 hover:text-red-500 duration-300 text-sm cursor-pointer leading-6"
                : "text-gray-400 text-sm leading-6 pointer-events-none"
            }
            href={link.link}
          >
            {translate(`${link.name}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterItem;
