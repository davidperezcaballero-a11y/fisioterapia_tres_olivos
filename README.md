# Fisioterapia 3 Olivos — Design System

## Sobre la marca

**Fisioterapia 3 Olivos** es una clínica de fisioterapia en Madrid (zona Tres Olivos / Fuencarral / Montecarmelo / Las Tablas), activa desde **1999**. Se especializa en recuperación postoperatoria, lesiones deportivas, aparato locomotor, suelo pélvico, ATM y trabajo preventivo con Pilates e hipopresivos. Usa tecnología de apoyo (INDIBA®, punción seca, ecógrafo) siempre supeditada al criterio manual del fisioterapeuta.

**Propósito de marca:** que el paciente sienta que ha llegado a otro nivel de fisioterapia.

**Diferencial:** tratamiento manual 100% personalizado, siempre el mismo fisioterapeuta, la tecnología apoya pero no sustituye el trato.

**Equipo:** José Ramón Gómez de los Ángeles (Director, col. 411), Mercedes Pérez (col. 6178), Elena Polo (col. 16633).

**Contacto:** 91 735 33 03 · WhatsApp 630 18 74 46 · Plaza de los Tres Olivos, local, 28034 Madrid. L–V 9:00–22:00.

---

## Fuentes usadas

| Fuente | Uso | Origen |
|--------|-----|--------|
| **Cormorant Garamond** | Títulos h1–h3, blockquotes, numerales de proceso | Google Fonts |
| **Hanken Grotesk** | Cuerpo de texto, labels, botones, UI | Google Fonts |

Peso Cormorant: 500 (light italic), 600, 700. Pesos Hanken: 400, 500, 600, 700.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap">
```

---

## Paleta de color (exacta)

| Token | Valor | Uso |
|-------|-------|-----|
| `--teal-deep` | `#0F6E56` | Titulares, botón principal, header oscuro, footer |
| `--teal` | `#1D9E75` | Eyebrows, labels, bordes activos |
| `--teal-light` | `#9FE1CB` | Iconos sobre fondo oscuro, acentos suaves |
| `--coral` | `#D85A30` | CTA principal, toque cálido, título destacado |
| `--cream` | `#F1EFE8` | Fondo principal |
| `--ink` | `#2C2C2A` | Texto de cuerpo |
| `--white` | `#FFFFFF` | Tarjetas, fondos de sección alternos |

Colores derivados (oklch, misma familia):
- `--teal-darkest` — footer / secciones profundas
- `--teal-tint` — fondo lavado verde muy claro
- `--cream-2` — crema cálida ligeramente distinta
- `--coral-soft` — fondo coral muy suave
- `--ink-soft` — texto secundario / muted
- `--line` — hairlines y bordes neutros

---

## CONTENT FUNDAMENTALS

**Tono:** Profesional pero humano. Tranquilizador. El paciente se pregunta "¿esto funciona de verdad?" y la respuesta viene de la competencia técnica y la cercanía del trato.

**Casing:** Normal (no todo mayúsculas salvo eyebrows en small-caps). Los eyebrows van en mayúsculas espaciadas (`letter-spacing: .26em`).

**Voz:** Segunda persona (tuteo). Directa y cercana. No clínica ni fría. No grandilocuente.

**Ejemplos de copy:**
- "Fisioterapia cercana, personal y efectiva"
- "¿Esto funciona de verdad? Sí. Y lo notarás porque entendemos tu cuerpo antes de tratarlo."
- "Te acompañamos desde el alta hasta recuperar movilidad, confianza y función."
- "El objetivo es que dejes de necesitarnos."

**Emoji:** Nunca. No se usan en ningún contexto.

**Números:** Se usan números reales con peso (25+, 1 a 1, 100%). Los números grandes llevan tipografía serif para resaltarlos.

---

## VISUAL FOUNDATIONS

### Fondos y layout
- Fondo principal: crema `#F1EFE8`. Secciones alternas: blanco `#FFFFFF`.
- Sección de proceso/oscura: `--teal-darkest` (profundo, no negro).
- Sin gradientes. Sin imágenes de fondo. Sin texturas.
- Layout en grid CSS. `max-width: 1200px` centrado con `padding: 0 24px`.

### Tipografía
- Display (h1): Cormorant Garamond 600, `clamp(44px, 7vw, 84px)`, line-height 0.98.
- h2: Cormorant 600, `clamp(32px, 4.4vw, 52px)`.
- h3: Cormorant 600, `clamp(23px, 2.6vw, 30px)`.
- Lead: Hanken 400, `clamp(18px, 2vw, 21px)`, color `--ink-soft`.
- Cuerpo: Hanken 400, 17px, line-height 1.6.
- Eyebrow: Hanken 600, 13px, `letter-spacing: .26em`, UPPERCASE, con regla coral.
- Botones: Hanken 600, 15.5px.

### Color y contraste
- Teal profundo sobre crema → ratio altísimo.
- Coral solo como toque (botón CTA, énfasis en títulos, eyebrow accent). Nunca como fondo base.
- Blanco sobre teal profundo (footer, proceso) → limpio y legible.

### Sombras
```css
--shadow-sm: 0 1px 2px rgba(15,110,86,.06), 0 6px 18px rgba(15,110,86,.06);
--shadow-md: 0 4px 12px rgba(15,110,86,.08), 0 18px 50px rgba(15,110,86,.10);
--shadow-lg: 0 20px 70px rgba(15,110,86,.16);
```
Todas las sombras usan el teal como color de tinte (no negro), lo que da un efecto premium cálido.

### Bordes y radios
```css
--r-sm: 10px   /* chips, badges */
--r-md: 18px   /* tarjetas, cards */
--r-lg: 28px   /* hero, imágenes grandes */
--r-xl: 40px   /* CTA bands, pill shapes */
```
Botones: `border-radius: 999px` (píldora).

### Iconografía
- Lucide-style: trazo fino (`stroke-width: 1.6–2`), sin relleno, `stroke-linecap: round`, `stroke-linejoin: round`.
- Sobre tile teal: `color: --teal-light` sobre `background: --teal-deep`.
- Tiles de icono: `border-radius: 16px`, 58×58px por defecto.
- No se usan icon fonts ni sprites — SVG inline.
- No se usan emojis como iconos.

### Animaciones y transiciones
- Timing: `cubic-bezier(.22,.61,.36,1)` — var `--ease`.
- Duración base: 0.25–0.35s para hover; 0.7s para reveal de scroll.
- Hover en tarjetas: `transform: translateY(-5px)` + `box-shadow` intensificada.
- Hover en botones: `transform: translateY(-2px)` + sombra.
- Sin bounces. Sin fades agresivos. Sutileza premium.
- Reveal on scroll: entrada desde `translateY(22px)` con fade-in.

### Imágenes
- Fotografía real (retratos del equipo, sala de clínica). Cálida, natural.
- `object-fit: cover`, reencuadre con `object-position` por foto.
- Sin filtros. Sin blanco/negro. Sin grano artificial.
- Placeholders: rayas diagonales teal claro cuando no hay foto.

### Cards
- Fondo blanco, borde `1px solid --line`, radio `--r-md`.
- En hover: border desaparece, sube `shadow-md`, sube 5px.
- Padding: 34px 30px (tarjetas de servicio).

### Glassmorphism / blur
- Solo en el header sticky: `backdrop-filter: blur(12px)` + crema semi-transparente.
- Float cards en hero: `background: white + shadow-md`.

---

## Archivos disponibles

| Archivo | Descripción |
|---------|-------------|
| `README.md` | Este documento |
| `colors_and_type.css` | CSS variables completos de la marca |
| `assets/logo-3olivos.png` | Logo completo (transparente, sobre claro) |
| `assets/logo-3olivos-light.png` | Logo completo (crema, para fondos oscuros) |
| `assets/emblema-manos.png` | Sólo el emblema de manos (transparente) |
| `assets/emblema-manos-light.png` | Emblema de manos claro (para fondos oscuros) |
| `assets/original/hero-clinica.jpg` | Foto clínica (sala de tratamiento) |
| `assets/original/jose-ramon.jpg` | Retrato José Ramón |
| `assets/original/mercedes.jpg` | Retrato Mercedes Pérez |
| `assets/original/elena-polo.jpeg` | Retrato Elena Polo |
| `assets/original/mapa-clinica.jpg` | Captura de mapa de ubicación |
| `preview/` | Tarjetas del sistema de diseño |
| `ui_kits/web/` | UI Kit del sitio web |
| `opcion-a.html` | Web completa final (referencia) |
| `SKILL.md` | Instrucciones para agente AI |
