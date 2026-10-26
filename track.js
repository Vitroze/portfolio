/* =========================================================
   Mesure d'audience — envoie une visite au Worker de l'éditeur.
   Sans cookie, sans stockage local, sans identifiant : le serveur déduit le reste.
   Respecte « Do Not Track ».
   ========================================================= */
(function () {
  "use strict";

  var ENDPOINT = "https://editor.vitroze-dev.fr/api/collect";

  if (ENDPOINT.indexOf("REMPLACER") !== -1) return;

  var host = location.hostname;
  if (location.protocol === "file:" || host === "localhost" || host === "127.0.0.1" || host === "") return;
  if (navigator.doNotTrack === "1" || window.doNotTrack === "1") return;
  if (document.visibilityState === "prerender") return;

  var query = new URLSearchParams(location.search);
  var payload = {
    path: location.pathname,
    ref: document.referrer || "",
    lang: navigator.language || "",
    utm_source: query.get("utm_source") || query.get("ref") || "",
    utm_campaign: query.get("utm_campaign") || ""
  };

  try {
    // Corps en text/plain : requête CORS « simple », donc sans preflight.
    fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify(payload),
      keepalive: true,
      mode: "cors",
      credentials: "omit"
    }).catch(function () {});
  } catch (e) {}
})();