/*
 * Integración TIMP
 * Sustituir esta URL por el enlace real de reservas cuando esté disponible.
 */
window.TIMP_BOOKING_URL = "reserva-online.html";

document.querySelectorAll("[data-timp-link]").forEach((link) => {
  link.href = window.TIMP_BOOKING_URL;
});
