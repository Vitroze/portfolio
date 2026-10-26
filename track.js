(function () {
  "use strict";

  var ENDPOINT = "https://editor.vitroze-dev.fr/api/collect";
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
    fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify(payload),
      keepalive: true,
      mode: "cors",
      credentials: "omit"
    }).catch(function () {});
  } catch (e) {}
})();