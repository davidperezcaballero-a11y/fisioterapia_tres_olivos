# Dos líneas de desarrollo

## Base compartida

- Rama: `to-be/v2.1-base`
- Fuente de verdad: `REQUISITOS_TO_BE_WEBv2.1.md`
- Referencia visual: `https://fisioterapia-tres-olivos.pages.dev/`

La rama base contiene los requisitos aprobados y las instrucciones comunes. No
se utiliza para desarrollar directamente.

## Línea Codex

- Rama: `codex/to-be-v2.1`
- Entorno local: `../04_IMPLEMENTACION_CODEX`
- Instrucciones: `AGENTS.md`
- Puerto de preview recomendado: `4601`

## Línea Claude

- Rama: `claude/to-be-v2.1`
- Entorno local: `../05_IMPLEMENTACION_CLAUDE`
- Instrucciones: `CLAUDE.md`
- Puerto de preview recomendado: `4602`

## Flujo recomendado

1. Implementar las mismas fases del Apéndice A en ambas ramas.
2. Mantener commits pequeños y descriptivos.
3. Validar cada rama de forma independiente.
4. Comparar diseño, calidad, rendimiento y cumplimiento de requisitos.
5. Elegir una línea como candidata final o integrar selectivamente mejoras.
6. Fusionar únicamente la versión aprobada hacia `main`.

## Sincronización de requisitos

Si cambian los requisitos:

1. Actualizar y aprobar el cambio en `to-be/v2.1-base`.
2. Fusionar la rama base en Codex y Claude.
3. Resolver las diferencias en cada línea sin mezclar sus implementaciones.
