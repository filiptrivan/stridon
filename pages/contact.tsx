import React from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

const contact = () => {
  return (
    <div>
    <div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90567.5103257972!2d20.365943012636272!3d44.81678309583739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7163a682044d%3A0x2a07a073e49f36ae!2sStridon%20group!5e0!3m2!1sen!2snl!4v1682522248790!5m2!1sen!2snl"
        loading="lazy"
        height={360}
        width={2000}
      ></iframe>
      </div>
      <div>
      <Contact />
    </div>
    </div>
  );
};

export default contact;
