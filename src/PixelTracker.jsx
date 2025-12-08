import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Injeta o Pixel UTMify no <head> (se ainda não estiver lá)
    if (!document.querySelector("#utmify-pixel")) {
      window.pixelId = "69362c6c1811d4119ec2dfae";
      const pixelScript = document.createElement("script");
      pixelScript.id = "utmify-pixel";
      pixelScript.setAttribute("async", "");
      pixelScript.setAttribute("defer", "");
      pixelScript.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
      document.head.appendChild(pixelScript);
    }

    // Injeta o script de UTMs no <head>
    if (!document.querySelector("#utmify-utms")) {
      const utmScript = document.createElement("script");
      utmScript.id = "utmify-utms";
      utmScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
      utmScript.setAttribute("data-utmify-prevent-xcod-sck", "");
      utmScript.setAttribute("data-utmify-prevent-subids", "");
      utmScript.setAttribute("async", "");
      utmScript.setAttribute("defer", "");
      document.head.appendChild(utmScript);
    }

    // Dispara PageView em cada troca de rota
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);

  return null;
};

export default PixelTracker;
