import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../styles/FloatingCall.css";

const FloatingCall = () => {

  const handleCall = () => {

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "floating_call_click",
      source: "floating_call_button",
    });

    if (window.gtag) {
      window.gtag("event", "floating_call_click");
    }

    if (window.fbq) {
      window.fbq("track", "Contact");
    }

    window.location.href = "tel:9010001847";
  };

  return (
    <a
      href="tel:9010001847"
      className="floating-call"
      onClick={handleCall}
      aria-label="Call VPro Skills"
    >
      <FaPhoneAlt />
    </a>
  );
};

export default FloatingCall;