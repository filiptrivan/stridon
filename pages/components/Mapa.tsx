import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Mapa = () => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col lg:flex-row mb-20">
        <div className="max-w-full lg:max-w-[570px] lg:pr-10 mb-4">
          <div className="mb-6">
            <p className="font-semibold text-lg ">
              <FaEnvelope className="inline-block mr-2" />
              Email
            </p>
            <a href="mailto:stridongroup@gmail.rs" className="mb-4">
              stridongroup@gmail.rs
            </a>
          </div>
          <div className="mb-6">
            <p className="font-semibold text-lg">
              <FaPhone className="inline-block mr-2" />
              Kontakt Telefon
            </p>
            <a href="tel:0646165003" className="mb-4">
              064/616-5003 / 060/737-88-05
            </a>
          </div>
          <div className="mb-6">
            <p className="font-semibold text-lg">
              <FaMapMarkerAlt className="inline-block mr-2" />
              Adresa
            </p>
            <p className="mb-4">Vojislava Ilića 141 g</p>
          </div>
          <div className="">
            <p className="font-semibold text-lg">Zaprati nas!</p>
            <div className="flex text-3xl">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3"
              >
                <FaInstagram className="inline-block" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3"
              >
                <FaFacebook className="inline-block" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="inline-block" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90567.5103257972!2d20.365943012636272!3d44.81678309583739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7163a682044d%3A0x2a07a073e49f36ae!2sStridon%20group!5e0!3m2!1sen!2snl!4v1682522248790!5m2!1sen!2snl"
            loading="lazy"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Mapa;
