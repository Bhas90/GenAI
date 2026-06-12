import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/FloatingWhatsapp.css";

const FloatingWhatsapp = () => {

  const handleWhatsApp = () => {

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "floating_whatsapp_click",
      source: "floating_button",
    });

    if (window.gtag) {
      window.gtag("event", "floating_whatsapp_click");
    }

    if (window.fbq) {
      window.fbq("track", "Contact");
    }

    window.open(
      "https://wa.me/919010001847?text=Hi%20VPro%20Skills,%20I%20am%20interested%20in%20the%20Generative%20AI%20Course.",
      "_blank"
    );
  };

  return (
    <a
      href="#"
      className="floating-whatsapp"
      onClick={(e) => {
        e.preventDefault();
        handleWhatsApp();
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsapp;