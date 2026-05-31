---
name: 3olivos-design
description: Use this skill to generate well-branded interfaces and assets for Fisioterapia 3 Olivos — a Madrid physiotherapy clinic (est. 1999). Contains essential design guidelines, color tokens, type scale, brand assets, logo variants, team photography, and UI components for the clinic's website.
user-invocable: true
---

Read the README.md file within this skill, then explore colors_and_type.css for exact CSS tokens, and assets/ for logos and photography.

If creating visual artifacts (HTML mocks, slides, banners, etc), copy the brand assets from assets/ and import colors_and_type.css. Follow the Visual Foundations in README.md precisely — especially:
- Use Cormorant Garamond for headings, Hanken Grotesk for body/UI
- Teal (#0F6E56) as the dominant color; coral (#D85A30) only as an accent
- Cream (#F1EFE8) as the page background; white for card surfaces
- Shadows with teal tint (not black), border-radius scale from --r-sm to --r-xl
- Icon tiles: dark teal background + teal-light stroke icons
- Eyebrow: uppercase, spaced, color --teal, with a short coral rule (::before)
- Never use gradients, emoji, or a cold/clinical aesthetic

If working on production code, treat colors_and_type.css as the source of truth for all --* tokens.

If the user invokes this skill without guidance, ask what they want to design (web section, social banner, print material, slides…), ask a few focused questions, and act as an expert designer outputting a polished HTML artifact or production CSS/JSX, as appropriate.
