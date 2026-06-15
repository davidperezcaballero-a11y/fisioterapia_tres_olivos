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
    pin: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    movement: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 17c4-8 8-8 16-10"/><path d="m14 4 6 3-3 6"/><circle cx="6" cy="18" r="2"/></svg>',
    pelvic: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 4c-2 4-2 9 1 13l4 3 4-3c3-4 3-9 1-13"/><path d="M8 10c2 2 6 2 8 0"/><path d="M12 12v8"/></svg>',
    tissue: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 7c4-4 6 4 10 0s6 0 6 0"/><path d="M4 12c4-4 6 4 10 0s6 0 6 0"/><path d="M4 17c4-4 6 4 10 0s6 0 6 0"/></svg>',
    strength: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 10v4m3-7v10m12-10v10m3-7v4M6 12h12"/></svg>',
    technology: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 3h8l2 5v8l-2 5H8l-2-5V8Z"/><path d="M9 12h6M12 9v6"/></svg>',
    ultrasound: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 4v16M9 7c4 1 4 9 0 10M13 5c7 3 7 11 0 14M19 4v16"/></svg>',
    listen: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 11a6 6 0 0 1 12 0c0 5-4 4-4 8"/><path d="M10 19c1 2 4 2 5 0"/><path d="M9 11a3 3 0 0 1 6 0c0 2-2 2-2 4"/></svg>',
    plan: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3h10v4H7zM5 5H3v16h18V5h-2"/><path d="m8 13 2 2 5-5"/></svg>',
    hands: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m4 13 5 5c2 2 4 2 6 0l5-5"/><path d="m4 13 3-3 4 4m9-1-3-3-4 4"/><path d="M9 6c1-3 5-3 6 0"/></svg>',
    followup: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 3-6"/><path d="M4 4v5h5"/><path d="m9 12 2 2 4-5"/></svg>',
    clock: '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>',
    star: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z"/></svg>',
  };
  return icons[name];
};

const decorateCards = (selector, names) => {
  document.querySelectorAll(selector).forEach((card, index) => {
    const name = names[index % names.length];
    if (!name || card.querySelector(".card-icon")) return;
    card.insertAdjacentHTML("afterbegin", `<span class="card-icon" aria-hidden="true">${icon(name)}</span>`);
  });
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
          <button class="btn btn-primary" type="button" aria-haspopup="dialog" data-appointment-open>Pedir cita</button>
        </nav>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-navigation" aria-label="Abrir menú">
          <span class="nav-toggle-lines"></span>
        </button>
      </div>
    </header>
    <nav class="mobile-nav" id="mobile-navigation" aria-label="Navegación móvil">
      ${navLinks(currentPage)}
      <button class="btn btn-primary" type="button" aria-haspopup="dialog" data-appointment-open>Pedir cita</button>
    </nav>
    <div class="appointment-backdrop" aria-hidden="true" data-appointment-dialog>
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
const mobileNav = document.querySelector(".mobile-nav");
const appointmentDialog = document.querySelector(".appointment-dialog");
let appointmentTrigger = null;

const focusableSelector = 'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';

const trapFocusList = (focusable, event) => {
  if (event.key !== "Tab") return;
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};

const trapFocus = (container, event) => {
  const focusable = [...container.querySelectorAll(focusableSelector)].filter((element) => element.offsetParent !== null);
  trapFocusList(focusable, event);
};

const mainContent = document.querySelector("main#contenido");
mainContent?.setAttribute("tabindex", "-1");
document.querySelector(".skip-link")?.addEventListener("click", (event) => {
  event.preventDefault();
  mainContent?.focus();
  mainContent?.scrollIntoView();
});

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  if (!link.hasAttribute("aria-label")) link.setAttribute("aria-label", "Llamar a Fisioterapia 3 Olivos al 91 735 33 03");
});

document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
  if (!link.hasAttribute("aria-label")) link.setAttribute("aria-label", "Escribir a Fisioterapia 3 Olivos por WhatsApp");
});

document.querySelectorAll(".faq-list details").forEach((details, index) => {
  const summary = details.querySelector("summary");
  const answer = details.querySelector("p");
  if (!summary || !answer) return;
  const answerId = `respuesta-frecuente-${index + 1}`;
  answer.id = answerId;
  summary.setAttribute("aria-controls", answerId);
  summary.setAttribute("aria-expanded", String(details.open));
  details.addEventListener("toggle", () => summary.setAttribute("aria-expanded", String(details.open)));
});

decorateCards(".quick-card", ["phone", "message", "pin"]);
decorateCards(".area-card", ["movement", "pelvic", "tissue", "strength", "technology", "ultrasound"]);
decorateCards(".treatment-card", ["movement", "listen", "pelvic", "tissue", "followup", "strength"]);
decorateCards(".technology-card", ["technology", "ultrasound", "followup"]);
decorateCards(".process-card", ["message", "listen", "plan", "hands", "followup"]);
decorateCards(".pillar-card", ["listen", "hands", "strength", "technology"]);
decorateCards(".contact-detail-card", ["phone", "message", "pin", "clock"]);
decorateCards(".home-service-grid > a", ["technology", "movement", "pelvic", "tissue", "strength", "ultrasound"]);

navToggle?.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  if (open) mobileNav?.querySelector("a")?.focus();
});

document.querySelectorAll("[data-appointment-open]").forEach((button) => {
  button.addEventListener("click", () => {
    appointmentTrigger = button;
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.add("appointment-open");
    document.querySelector("[data-appointment-dialog]")?.setAttribute("aria-hidden", "false");
    document.querySelector("[data-appointment-close]")?.focus();
  });
});

const closeAppointment = () => {
  const wasOpen = document.body.classList.contains("appointment-open");
  document.body.classList.remove("appointment-open");
  document.querySelector("[data-appointment-dialog]")?.setAttribute("aria-hidden", "true");
  if (wasOpen) {
    const restoreTarget = appointmentTrigger?.closest(".mobile-nav") ? navToggle : appointmentTrigger;
    restoreTarget?.focus();
  }
};
document.querySelector("[data-appointment-close]")?.addEventListener("click", closeAppointment);
document.querySelector("[data-appointment-dialog]")?.addEventListener("click", (event) => {
  if (event.target.matches("[data-appointment-dialog]")) closeAppointment();
});

document.addEventListener("keydown", (event) => {
  if (document.body.classList.contains("appointment-open") && appointmentDialog) {
    trapFocus(appointmentDialog, event);
  } else if (document.body.classList.contains("nav-open") && mobileNav) {
    const menuFocusable = [navToggle, ...mobileNav.querySelectorAll(focusableSelector)].filter((element) => element?.offsetParent !== null);
    trapFocusList(menuFocusable, event);
  }

  if (event.key === "Escape") {
    const navWasOpen = document.body.classList.contains("nav-open");
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Abrir menú");
    if (navWasOpen) navToggle?.focus();
    closeAppointment();
  }
});
