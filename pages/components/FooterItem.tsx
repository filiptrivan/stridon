import React from "react";

const FooterItem = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className={
              link.name != "Ponedeljak - Petak: 8:00 - 18:00h" && link.name != "Subota: 9:00 - 15:00h" && link.name != "Nedelja: Neradan dan"
               ? "text-gray-400 hover:text-red-500 duration-300 text-sm cursor-pointer leading-6"
               : "text-gray-400 text-sm leading-6"
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

// className={
//   nav
//     ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
//     : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
// }
