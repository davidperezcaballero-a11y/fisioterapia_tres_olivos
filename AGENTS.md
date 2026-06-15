# Instrucciones para Codex

## Objetivo

Implementar la nueva web TO BE de Fisioterapia 3 Olivos siguiendo
`REQUISITOS_TO_BE_WEBv2.1.md` como fuente principal de verdad.

## Contexto

- Web AS IS: `https://www.fisioterapia3olivos.es/`
- Referencia visual validada: `https://fisioterapia-tres-olivos.pages.dev/`
- Plataforma TO BE: sitio estático HTML/CSS/JS desplegado en Cloudflare Pages mediante Git.
- Conversión: teléfono y WhatsApp. No implementar formularios ni reserva online.

## Forma de trabajo

1. Trabajar únicamente en la rama `codex/to-be-v2.1`.
2. Antes de implementar una tarea, revisar los requisitos relacionados.
3. Mantener el look & feel validado, sustituyendo el verde por la paleta azul definida.
4. Implementar por fases siguiendo el Apéndice A del documento de requisitos.
5. Verificar cada fase en móvil y escritorio antes de continuar.
6. Mantener las URLs AS IS indicadas y preparar las redirecciones requeridas.
7. No añadir herramientas que instalen cookies o requieran consentimiento.
8. Registrar decisiones o desviaciones en `DECISIONES_IMPLEMENTACION.md`.

## Criterios técnicos

- HTML semántico, CSS compartido y JavaScript mínimo.
- Mobile-first, accesible y sin desplazamiento horizontal.
- Sin frameworks ni dependencias nuevas salvo necesidad justificada.
- Lazy loading fuera del primer bloque visible.
- Meta Title, Meta Description, canonical, Open Graph y JSON-LD por página.
- `sitemap.xml`, `robots.txt` y redirecciones compatibles con Cloudflare Pages.

## Verificación mínima

- Revisar enlaces internos, teléfono, WhatsApp y Cómo llegar.
- Comprobar ausencia de formularios, reserva online y punción seca.
- Comprobar que no se cargan recursos de Google antes de pulsar Cómo llegar.
- Validar en anchuras de 360, 390, 768 px y escritorio.
