const pages = [
  ["inicio", "/", "Inicio"],
  ["clinica", "/presentacion/", "La clínica"],
  ["tratamientos", "/indicaciones/", "Tratamientos"],
  ["tecnologia", "/centro-indiba-r/", "Tecnología"],
  ["equipo", "/conocenos/", "Equipo"],
  ["metodo", "/como-trabajamos/", "Cómo trabajamos"],
  ["visita", "/visita-virtual/", "Visita virtual"],
  ["contacto", "/contacto/", "Contacto"],
];

const phoneHref = "tel:+34917353303";
const whatsappHref = "https://wa.me/34630187446";

const brand = (light = false) => `
  <span class="brand">
    <span class="brand-emblem${light ? " brand-emblem--light" : ""}" aria-hidden="true"></span>
    <span class="brand-name">3 Olivos<small>Fisioterapia</small></span>
  </span>`;

const icon = (name) => {
  const icons = {
    phone: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z"/></svg>',
    message: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-1-2.65V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4z"/></svg>',
  };
  return icons[name];
};

const navLinks = (current) => pages.map(([key, href, label]) =>
  `<a href="${href}"${current === key ? ' aria-current="page"' : ""}>${label}</a>`
).join("");

const headerTarget = document.querySelector("[data-site-header]");
const currentPage = document.body.dataset.page;

if (headerTarget) {
  headerTarget.innerHTML = `
    <header class="site-header">
      <div class="wrap header-inner">
        <a href="/" aria-label="Fisioterapia 3 Olivos, inicio">${brand()}</a>
        <nav class="desktop-nav" aria-label="Navegación principal">
          ${navLinks(currentPage)}
          <button class="btn btn-primary" type="button" data-appointment-open>Pedir cita</button>
        </nav>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-navigation" aria-label="Abrir menú">
          <span class="nav-toggle-lines"></span>
        </button>
      </div>
    </header>
    <nav class="mobile-nav" id="mobile-navigation" aria-label="Navegación móvil">
      ${navLinks(currentPage)}
      <button class="btn btn-primary" type="button" data-appointment-open>Pedir cita</button>
    </nav>
    <div class="appointment-backdrop" data-appointment-dialog>
      <section class="appointment-dialog" role="dialog" aria-modal="true" aria-labelledby="appointment-title">
        <button class="dialog-close" type="button" aria-label="Cerrar opciones de cita" data-appointment-close>×</button>
        <h2 id="appointment-title">Pide tu cita</h2>
        <p>Elige cómo prefieres contactar. Te orientaremos antes de concertar la cita.</p>
        <div class="button-row">
          <a class="btn btn-coral" href="${phoneHref}">${icon("phone")} Llamar al 91 735 33 03</a>
          <a class="btn btn-primary" href="${whatsappHref}">${icon("message")} Escribir por WhatsApp</a>
        </div>
      </section>
    </div>`;
}

const ctaTarget = document.querySelector("[data-site-cta]");
if (ctaTarget) {
  ctaTarget.innerHTML = `
    <section class="commercial-close">
      <div class="wrap">
        <div class="cta-card">
          <h2>¿No sabes qué tratamiento necesitas?</h2>
          <p>Cuéntanos qué te ocurre. Te orientaremos antes de pedir cita.</p>
          <div class="button-row">
            <a class="btn btn-light" href="${phoneHref}">${icon("phone")} Llamar al 91 735 33 03</a>
            <a class="btn btn-dark" href="${whatsappHref}">${icon("message")} Escribir por WhatsApp</a>
          </div>
        </div>
      </div>
    </section>`;
}

const footerTarget = document.querySelector("[data-site-footer]");
if (footerTarget) {
  footerTarget.innerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" aria-label="Fisioterapia 3 Olivos, inicio">${brand(true)}</a>
            <p>Fisioterapia cercana, personal y efectiva en Tres Olivos desde 1999.</p>
          </div>
          <div>
            <h2 class="footer-heading">Explora</h2>
            <ul class="footer-list">
              ${pages.slice(0, 4).map(([, href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}
            </ul>
          </div>
          <div>
            <h2 class="footer-heading">Conócenos</h2>
            <ul class="footer-list">
              ${pages.slice(4).map(([, href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}
              <li><span>Instagram · enlace pendiente</span></li>
            </ul>
          </div>
          <div>
            <h2 class="footer-heading">Contacto</h2>
            <ul class="footer-list">
              <li><a href="${phoneHref}">91 735 33 03</a></li>
              <li><a href="${whatsappHref}">WhatsApp · 630 18 74 46</a></li>
              <li>Plaza de los Tres Olivos, local · PENDIENTE_NUMERO_EXACTO · 28034 Madrid · ES</li>
              <li>Lunes a viernes · 9:00 a 22:00</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Fisioterapia 3 Olivos</span>
          <span><a href="/aviso-legal/">Aviso legal</a> · <a href="/privacidad/">Privacidad</a> · <a href="/cookies/">Cookies</a></span>
        </div>
      </div>
    </footer>`;
}

const mobileActionsTarget = document.querySelector("[data-mobile-actions]");
if (mobileActionsTarget) {
  mobileActionsTarget.innerHTML = `
    <aside class="mobile-actions" aria-label="Contacto rápido">
      <a class="btn btn-coral" href="${phoneHref}">${icon("phone")} Llamar</a>
      <a class="btn btn-primary" href="${whatsappHref}">${icon("message")} WhatsApp</a>
    </aside>`;
}

const navToggle = document.querySelector(".nav-toggle");
navToggle?.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

document.querySelectorAll("[data-appointment-open]").forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.add("appointment-open");
    document.querySelector("[data-appointment-close]")?.focus();
  });
});

const closeAppointment = () => document.body.classList.remove("appointment-open");
document.querySelector("[data-appointment-close]")?.addEventListener("click", closeAppointment);
document.querySelector("[data-appointment-dialog]")?.addEventListener("click", (event) => {
  if (event.target.matches("[data-appointment-dialog]")) closeAppointment();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    closeAppointment();
  }

  if (event.target.matches(".faq-list summary") && ["Enter", " "].includes(event.key)) {
    event.preventDefault();
    event.target.parentElement.open = !event.target.parentElement.open;
  }
});
