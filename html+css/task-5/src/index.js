import "./js/index";
import "./styles/scss/main.scss";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then(registration => console.log("SW registered: ", registration))
      .catch(registrationError =>
        console.log("SW registration failed: ", registrationError)
      );
  });
}
