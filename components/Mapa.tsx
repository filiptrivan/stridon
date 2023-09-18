import React from "react";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface MapaProps {
  email: string;
  kontakt: string;
  adresa: string;
  map_src: string;
  translate:any;
}

const Mapa: React.FC<MapaProps> = ({ email, kontakt, adresa, map_src, translate }) => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col-reverse md:flex-row md:mb-16 border md:border-0">
        <div className="max-w-full lg:max-w-[570px] text-center md:text-left md:mr-10 mt-6 flex-none">
          <div className="mb-6">
            <p className="font-medium text-lg ">
              <FaEnvelope className="inline-block mr-2 text-[28px] text-darkerRed" />
              Email
            </p>
            <a
              href="mailto:office@stridon.rs"
              className="mb-4 hover:text-slate-700 duration-200"
            >
              {email}
            </a>
          </div>
          <div className="mb-6">
            <div className="font-medium text-lg">
              <FaPhone className="inline-block mr-2 text-[28px] text-darkerRed" />
              {translate("Kontakt Telefon")}
            </div>
            <p>
              <a
                href={`tel:${kontakt}`}
                className="mb-4 hover:text-slate-700 duration-200"
              >
                {kontakt}
              </a>
            </p>
          </div>
          <div className="mb-6">
            <p className="font-medium text-lg">
              <FaMapMarkerAlt className="inline-block mr-2 text-[28px] text-darkerRed" />
              {translate("Adresa")}
            </p>
            <p className="mb-4">{adresa}</p>
          </div>
        </div>
        <div className="w-full rounded-md overflow-hidden">
          <iframe
            src={map_src}
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
