
import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaRocket
} from "react-icons/fa";

import "../styles/StickyFooter.css";

const StickyFooter = () => {

  const trackEvent = (eventName, source) => {

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: eventName,
      source,
    });

    if (window.gtag) {
      window.gtag("event", eventName, {
        source,
      });
    }

    if (window.fbq) {
      window.fbq("track", "Lead");
    }
  };

  return (
    <div className="sticky-footer">

      {/* CALL */}

      <a
        href="tel:9010001847"
        className="footer-item"
        onClick={() =>
          trackEvent(
            "sticky_call_click",
            "mobile_footer"
          )
        }
      >
        <FaPhoneAlt />
        <span>Call</span>
      </a>

      {/* WHATSAPP */}

      <a
        href="https://wa.me/919010001847?text=Hi%20VPro%20Skills,%20I%20am%20interested%20in%20the%20AI%20Course."
        target="_blank"
        rel="noopener noreferrer"
        className="footer-item whatsapp"
        onClick={() =>
          trackEvent(
            "sticky_whatsapp_click",
            "mobile_footer"
          )
        }
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

      {/* REGISTER */}

      <a
        href="https://wa.me/919010001847?text=Hi%20VPro%20Skills,%20I%20want%20to%20register%20for%20the%20FREE%20AI%20Demo."
        target="_blank"
        rel="noopener noreferrer"
        className="footer-item register"
        onClick={() =>
          trackEvent(
            "sticky_register_click",
            "mobile_footer"
          )
        }
      >
        <FaRocket />
        <span>Register</span>
      </a>

    </div>
  );
};

export default StickyFooter;