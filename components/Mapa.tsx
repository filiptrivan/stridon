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
  title: string;
  translate: any;
  isTransparentBackground?: boolean;
}

const Mapa: React.FC<MapaProps> = ({ email, kontakt, adresa, map_src, title, translate, isTransparentBackground = true }) => {
  return (
    <div className={`${isTransparentBackground ? '' : 'bg-stone-50'}`}>
      <div className="max-w-[1140px] mx-auto py-20 px-4 text-center flex flex-col-reverse md:flex-row">
        <div className="max-w-full lg:max-w-[570px] md:text-left md:mr-10 md:mt-1 mt-8 flex-none">
          <div className="mb-6">
            <p className="font-medium text-lg ">
              <FaEnvelope className="inline-block mr-2 text-[28px] text-darkerRed" />
              Email
            </p>
            <a
              href="mailto:office@stridon.rs"
              className="mb-4 hover:text-stone-700 duration-200"
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
                className="mb-4 hover:text-stone-700 duration-200"
              >
                {kontakt}
              </a>
            </p>
          </div>
          <div>
            <p className="font-medium text-lg">
              <FaMapMarkerAlt className="inline-block mr-2 text-[28px] text-darkerRed" />
              {translate("Adresa")}
            </p>
            <p>{adresa}</p>
          </div>
        </div>
        <div className="w-full rounded-md overflow-hidden">
          <iframe
            src={map_src}
            title={title}
            loading="lazy"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
