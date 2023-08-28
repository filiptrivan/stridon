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
      <div className="max-w-[1140px] mx-auto p-3 flex flex-col lg:flex-row mb-16">
        <div className="max-w-full lg:max-w-[570px] lg:pr-8 mb-4">
          <div className="mb-6 pr-16">
            <p className="font-semibold text-lg ">
              <FaEnvelope className="inline-block mr-2" />
              Email
            </p>
            <a
              href="mailto:info@stridon.rs"
              className="mb-4 hover:text-slate-700 duration-200"
            >
              {email}
            </a>
          </div>
          <div className="mb-6">
            <p className="font-semibold text-lg inline-block">
              <FaPhone className="inline-block mr-2" />
              {translate("Kontakt Telefon")}
            </p>
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
            <p className="font-semibold text-lg">
              <FaMapMarkerAlt className="inline-block mr-2" />
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
