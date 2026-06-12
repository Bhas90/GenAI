export const trackWhatsApp = (source) => {

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "whatsapp_click",
    source,
  });

  if (window.gtag) {
    window.gtag("event", "whatsapp_click", {
      source,
    });
  }

  if (window.fbq) {
    window.fbq("track", "Contact");
  }

  window.open(
    "https://wa.me/919010001847?text=Hi%20VPro%20Skills,%20I%20am%20interested%20in%20the%20Generative%20AI%20Course.",
    "_blank"
  );
};