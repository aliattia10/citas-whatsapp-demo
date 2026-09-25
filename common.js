(function () {
  const N = window.NEGOCIO;
  document.documentElement.style.setProperty("--c", N.colorPrincipal);
  const DIAS = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
  const MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  function fechaLarga(d) { return `${DIAS[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]}`; }
  function iso(d) { return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
  function desdeIso(s) { const [y,m,dd] = s.split("-").map(Number); return new Date(y, m-1, dd); }
  function plantilla(t, v) { return t.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? ""); }
  // En modo demo nunca se abre un chat con un número concreto: WhatsApp pide elegir contacto.
  function waLink(numero, texto, forzarNumero) {
    const t = encodeURIComponent(texto);
    if (N.demo && !forzarNumero) return "https://wa.me/?text=" + t;
    const n = String(numero || "").replace(/\D/g, "");
    return n ? `https://wa.me/${n}?text=${t}` : "https://wa.me/?text=" + t;
  }
  function banner() {
    if (!N.demo) return;
    const b = document.createElement("div");
    b.className = "demo-banner";
    b.innerHTML = "DEMO · negocio y datos ficticios · los mensajes no se envían a nadie automáticamente";
    document.body.prepend(b);
  }
  window.U = { N, DIAS, MESES, fechaLarga, iso, desdeIso, plantilla, waLink, banner };
  document.addEventListener("DOMContentLoaded", banner);
})();
