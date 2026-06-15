# Decisiones de implementación

Documento compartido para registrar decisiones, desviaciones y dudas surgidas
durante la implementación del TO BE.

## Reglas

- No modificar los requisitos aprobados de forma implícita.
- Registrar cualquier desviación antes de implementarla.
- Indicar fecha, rama, decisión, motivo e impacto.

## Registro

| Fecha | Rama | Decisión | Motivo | Impacto |
|---|---|---|---|---|
| 2026-06-15 | `codex/to-be-v2.1` | Centralizar cabecera, navegación, selector de cita, cierre comercial, pie y barra móvil en `assets/site.js`. | Evitar duplicar componentes comunes en once documentos estáticos y facilitar su evolución por fases, manteniendo un JavaScript pequeño y sin dependencias. | Cada URL conserva su propio `index.html`; los elementos comunes requieren JavaScript para mostrarse. |
| 2026-06-15 | `codex/to-be-v2.1` | No cargar Google Fonts ni otros recursos externos en la base. | Mantener el principio de sitio sin cookies ni peticiones innecesarias a terceros, y evitar recursos de Google al cargar cualquier página. | Se usan tipografías serif y sans del sistema conservando la dirección visual editorial. |
| 2026-06-15 | `codex/to-be-v2.1` | Crear las once rutas públicas como armazón y posponer sus contenidos detallados. | La Tarea 0 solicita la estructura base; páginas legales, Contacto, Inicio, contenidos y SEO técnico pertenecen a tareas posteriores. | Todas las URLs navegan y comparten componentes, pero muestran contenido provisional de fase salvo la introducción base de Inicio. |
| 2026-06-15 | `codex/to-be-v2.1` | Sustituir `vercel.json` por `wrangler.toml` y documentar Cloudflare Pages sin conectar dominio. | La plataforma TO BE confirmada es Cloudflare Pages mediante Git. | El repositorio queda preparado para publicar la raíz estática, sin configuración de dominio de producción. |
| 2026-06-15 | `codex/to-be-v2.1` | Mostrar Instagram como dato pendiente, sin crear un enlace ficticio. | Los requisitos indican que la URL correcta de Instagram todavía debe aportarse. | El pie reserva el lugar del canal sin introducir un enlace roto; se convertirá en enlace al confirmar la URL. |
| 2026-06-15 | `codex/to-be-v2.1` | Mostrar tres placeholders explícitos en Opiniones y usar temporalmente el mapa estático en Ubicación. | Las reseñas reales seleccionadas y la fotografía exterior siguen pendientes de aportar; no deben inventarse contenidos ni presentarse otro recurso como fotografía de entrada. | Inicio queda completo y verificable, con ambos pendientes claramente visibles para sustituirlos antes de publicar. |
| 2026-06-15 | `codex/to-be-v2.1` | Mantener los valores desconocidos del JSON-LD de Inicio con prefijo `PENDIENTE_`. | La dirección completa, coordenadas y URLs sociales no están confirmadas y el requisito solicita conservar esos placeholders. | El bloque estructurado está preparado, pero debe completarse y validarse antes de producción. |
| 2026-06-15 | `codex/to-be-v2.1` | Usar en Contacto el mapa estático local existente y enlazarlo a una búsqueda de Google Maps por nombre y teléfono de la clínica. | El recurso muestra claramente el marcador de la clínica y se sirve localmente; las coordenadas exactas siguen pendientes. | No se realiza ninguna petición a Google al cargar la página. El enlace debe sustituirse por la URL definitiva de la ficha cuando se confirme `PENDIENTE_URL_GOOGLE_BUSINESS`. |
| 2026-06-15 | `codex/to-be-v2.1` | Mostrar `PENDIENTE_FOTOGRAFIA_EXTERIOR_ENTRADA`, `PENDIENTE_DIRECCION_COMPLETA` y coordenadas pendientes sin inventar recursos ni datos. | Los requisitos exigen identificar claramente los datos pendientes y todavía no se ha aportado la fotografía exterior ni la dirección completa. | Contacto queda funcional y listo para sustituir los marcadores antes de publicar. |
| 2026-06-15 | `codex/to-be-v2.1` | No activar eventos de conversión durante la Tarea 2. | El proveedor de analítica sin cookies y agregada continúa pendiente de decisión; activar una solución no validada contradiría el requisito de privacidad. | Los enlaces de llamada, WhatsApp y Cómo llegar funcionan sin medición ni peticiones externas añadidas. |
