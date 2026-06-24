import React from "react";
import { Link } from "react-router-dom";
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
    <>
     


  {/* Sticky Footer */}

  <div className="sticky-footer">

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

    <a
      href="https://wa.me/919010001847?text=Hi%20VPro%20Skills,%20I%20want%20to%20register%20for%20the%20FREE%20Generative%20AI%20Demo%20Session."
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

  {/* Footer Bottom */}

  <div className="footer-bottom">

    <div className="footer-left">
      © 2026 VProSkills.com. All Rights Reserved. |
      <a
        href="https://wa.me/918309436998"
        target="_blank"
        rel="noopener noreferrer"
      >
        ❤️ Developed & Marketed by VR2Tech
      </a>
    </div>
        <div className="footer-right">

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms-and-conditions">
            Terms & Conditions
          </Link>

          <Link to="/data-deletion">
            Data Deletion
          </Link>

        </div>

  </div>
</>
  
  );
};

export default StickyFooter;