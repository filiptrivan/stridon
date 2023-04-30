import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-red-500">
      <Link
        href={"https://www.facebook.com/prodavnicaalataa"}
        target={"_blank"}
      >
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-800 mx-1.5 text-xl hover:text-gray-100 hover:bg-red-500
        duration-300 "
        >
          <FaFacebook />
        </span>
      </Link>
      <Link
        href={"https://www.instagram.com/prodavnicaalata/"}
        target={"_blank"}
      >
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-800 mx-1.5 text-xl hover:text-gray-100 hover:bg-red-500 duration-300 "
        >
          <FaInstagram />
        </span>
      </Link>
      <Link
        href={"https://www.youtube.com/@prodavnicaalata5203"}
        target={"_blank"}
      >
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-800 mx-1.5 text-xl hover:text-gray-100 hover:bg-red-500 duration-300 "
        >
          <FaYoutube />
        </span>
      </Link>
    </div>
  );
};

export default SocialIcons;
