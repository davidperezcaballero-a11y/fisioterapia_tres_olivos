# Fisioterapia 3 Olivos

Web estática en HTML, CSS y JavaScript desplegada en Cloudflare Pages.

## Configuración principal

- Dominio oficial: `https://www.fisioterapia3olivos.es`
- Directorio publicado: `public`
- Compilación: ninguna
- Configuración de Cloudflare: `wrangler.toml`
- Procedimiento de migración y marcha atrás: `pasos-para-la-migracion.md`

## Estructura

- `public/index.html`: página de inicio.
- `public/*/index.html`: páginas interiores.
- `public/assets/`: estilos, JavaScript e imágenes utilizadas por la web.
- `public/_redirects`: redirecciones 301 entre rutas internas.
- `public/robots.txt`: instrucciones para buscadores.
- `public/sitemap.xml`: listado de páginas indexables.
- `public/404.html`: página mostrada cuando una dirección no existe.

Solo el contenido de `public` debe quedar accesible desde Internet. La documentación y los archivos de configuración permanecen fuera de ese directorio.

## Criterios SEO

- Todas las páginas utilizan URLs canónicas con `www`.
- El sitemap contiene únicamente URLs con `www`.
- La antigua ruta `/visita-virtual/` redirige mediante 301 a `/presentacion/`.
- El dominio sin `www` debe redirigir al dominio oficial conservando la ruta.
