import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function injectAnalytics() {
  const plausibleDomain = import.meta.env?.VITE_PLAUSIBLE_DOMAIN;
  const gaId = import.meta.env?.VITE_GA4_ID;

  if (plausibleDomain) {
    const s = document.createElement('script');
    s.defer = true;
    s.setAttribute('data-domain', plausibleDomain);
    s.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(s);
  }

  if (gaId) {
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(s1);
    const s2 = document.createElement('script');
    s2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${gaId}');`;
    document.head.appendChild(s2);
  }
}

injectAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
