import React from "react";

interface Link {
  name: string;
  link: string;
}

interface Props {
  Links: Link[];
  title: string;
}

const FooterItem: React.FC<Props> = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className={
              link.name != "Ponedeljak - Petak: 8:00 - 18:00h" &&
              link.name != "Subota: 9:00 - 15:00h" &&
              link.name != "Nedelja: Neradan dan"
                ? "text-gray-400 hover:text-red-500 duration-300 text-sm cursor-pointer leading-6"
                : "text-gray-400 text-sm leading-6 pointer-events-none"
            }
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterItem;
