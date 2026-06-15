# Línea de implementación Claude

**Rama:** `claude/to-be-v2.1`  
**Fuente de verdad:** `REQUISITOS_TO_BE_WEBv2.1.md`  
**Instrucciones:** `CLAUDE.md`  
**Preview local recomendado:** `http://127.0.0.1:4602`

## Primer objetivo

Ejecutar la Tarea 0 del Apéndice A:

- Preparar la estructura multipágina compartida.
- Aplicar la nueva paleta azul conservando el look & feel validado.
- Implementar cabecera, navegación, cierre comercial y pie comunes.
- Mantener teléfono y WhatsApp como únicas conversiones.
- Preparar el proyecto para despliegue automático en Cloudflare Pages desde Git.

## Arranque del preview

Desde esta carpeta:

```sh
python3 -m http.server 4602
```

## Regla de aislamiento

No fusionar cambios procedentes de la línea Codex durante la fase de comparación.
