# Pasos para la migración

Guía operativa para sustituir la web actual de Webnode por la nueva web de Cloudflare Pages manteniendo el dominio registrado y el DNS en Webnode.

## Estrategia acordada

- Dominio principal: `https://www.fisioterapia3olivos.es`.
- El dominio continúa registrado y administrado desde Webnode/Register.it.
- La web antigua se mantiene disponible durante la migración para poder volver atrás rápidamente.
- Solo se modifican los registros DNS imprescindibles para dirigir el tráfico a Cloudflare Pages.
- No se cambia la estructura de las seis URLs antiguas que tienen equivalente directo.
- `/visita-virtual/` se redirige permanentemente a `/presentacion/`.

> **Importante sobre los registros DNS:** actualmente `fisioterapia3olivos.es` utiliza dos registros A, pero `www.fisioterapia3olivos.es` utiliza un CNAME hacia Webnode. Como `www` es el dominio principal, el cambio que traslada la web será normalmente el **CNAME de `www`**, no los registros A. Debe utilizarse exactamente el destino que indique Cloudflare Pages al añadir el dominio personalizado; no debe inventarse una IP de Cloudflare.

# 1. Acciones y comprobaciones antes de la migración

## 1.1. En Webnode y en la gestión DNS

1. [ ] No cancelar el servicio, eliminar la web antigua ni transferir el dominio.
2. [ ] Confirmar que se puede acceder al panel donde se administran los registros DNS.
3. [ ] Guardar capturas y una copia escrita de todos los registros DNS actuales.
4. [ ] Anotar especialmente la configuración actual relacionada con la web:
   - Dominio raíz `fisioterapia3olivos.es`: registros A actuales `3.125.172.46` y `3.73.27.108`.
   - Subdominio `www`: CNAME actual `fisioterapia3olivos.webnode.es`.
5. [ ] No modificar registros de correo, como MX, SPF, DKIM o DMARC.
6. [ ] Si el panel lo permite, reducir el TTL del CNAME de `www` a 300 segundos con antelación. Esto facilitará la propagación y una posible vuelta atrás.
7. [ ] Confirmar que la web antigua funciona y guardar como referencia su sitemap:
   `https://www.fisioterapia3olivos.es/sitemap.xml`.
8. [ ] Revisar Google Search Console y anotar cualquier URL histórica que reciba tráfico y no aparezca en el sitemap actual.

## 1.2. En Cloudflare Pages

1. [ ] Confirmar que la versión definitiva está publicada en la dirección temporal `*.pages.dev`.
2. [ ] Probar en esa dirección todas las páginas nuevas incluidas en el inventario del final de este documento.
3. [ ] Revisar textos, imágenes, menú, botones, teléfono, WhatsApp, Google Maps y visualización móvil.
4. [ ] Confirmar que el archivo `_redirects` contiene:

   ```text
   /visita-virtual/ /presentacion/ 301
   /visita-virtual /presentacion/ 301
   ```

5. [ ] Confirmar que canonical, Open Graph, datos estructurados, `robots.txt` y `sitemap.xml` usan `https://www.fisioterapia3olivos.es`.
6. [ ] Añadir `www.fisioterapia3olivos.es` en **Cloudflare Pages → Custom domains**. Antes de cambiar el DNS es normal que aparezca como pendiente de activación.
7. [ ] Anotar el destino CNAME exacto solicitado por Cloudflare Pages, normalmente una dirección `*.pages.dev`.
8. [ ] No cambiar todavía el DNS hasta que la nueva web haya superado todas las pruebas. La activación definitiva del dominio y su certificado HTTPS se comprobarán después de cambiar el CNAME.

## 1.3. Criterios para autorizar el cambio

La migración solo debe comenzar si se cumplen todos estos puntos:

- [ ] La dirección temporal de Cloudflare carga correctamente.
- [ ] Las diez páginas nuevas funcionan.
- [ ] La redirección de `/visita-virtual/` está incluida en `_redirects`.
- [ ] Se conoce el CNAME exacto solicitado por Cloudflare.
- [ ] Se dispone de una copia de los registros DNS anteriores.
- [ ] Webnode continúa operativo para poder volver atrás.
- [ ] Hay una persona disponible para validar la web inmediatamente después del cambio.

# 2. Acciones y verificaciones durante la migración

Realizar el cambio en un periodo de poco tráfico y completar los pasos en este orden.

## Paso 1. Comprobar por última vez la web nueva

- [ ] Abrir la dirección temporal de Cloudflare Pages.
- [ ] Comprobar portada, contacto y al menos una página con fotografías.
- [ ] Confirmar que la publicación corresponde a la versión definitiva.

## Paso 2. Cambiar el registro de `www`

En la gestión DNS que actualmente utiliza el dominio:

1. [ ] Localizar el CNAME de `www` que apunta a `fisioterapia3olivos.webnode.es`.
2. [ ] Sustituir únicamente su destino por el CNAME exacto proporcionado por Cloudflare Pages.
3. [ ] No modificar los registros de correo.
4. [ ] No eliminar la anotación del valor anterior; será necesaria para una posible vuelta atrás.

> Si Cloudflare muestra instrucciones diferentes, detener el cambio y revisarlas antes de continuar. No sustituir el CNAME por una dirección A genérica.

## Paso 3. Esperar la activación

- [ ] Después de cambiar el CNAME, esperar a que el nuevo DNS se propague hasta Cloudflare.
- [ ] Esperar a que Cloudflare marque `www.fisioterapia3olivos.es` como **Active**.
- [ ] Esperar a que el certificado HTTPS esté activo.
- [ ] Tener en cuenta que durante la propagación distintas conexiones pueden ver temporalmente Webnode o Cloudflare.

## Paso 4. Primera verificación del dominio principal

- [ ] Abrir `https://www.fisioterapia3olivos.es/` en una ventana privada.
- [ ] Confirmar visualmente que aparece la web nueva, no la de Webnode.
- [ ] Confirmar que responde mediante HTTPS sin avisos de certificado.
- [ ] Abrir `https://www.fisioterapia3olivos.es/contacto/` y comprobar que carga la página nueva.
- [ ] Probar también desde un móvil con datos móviles para utilizar una resolución DNS diferente.

## Paso 5. Comprobar el dominio sin `www`

Mientras los registros A del dominio raíz continúen apuntando a Webnode, Webnode debe seguir haciendo esta redirección:

`https://fisioterapia3olivos.es/*` → `https://www.fisioterapia3olivos.es/*`

- [ ] Confirmar que `https://fisioterapia3olivos.es/` termina en la nueva portada con `www`.
- [ ] Confirmar que `https://fisioterapia3olivos.es/contacto/` termina en la nueva página `/contacto/` con `www`.
- [ ] Confirmar que la respuesta es una redirección 301 y que conserva la ruta.

Si Webnode deja de prestar esta redirección, será necesario trasladar también el dominio raíz a Cloudflare y crear allí una regla 301 que conserve ruta y parámetros. Esta acción no debe improvisarse durante la ventana de cambio: debe prepararse y probarse expresamente.

## Paso 6. Comprobar la redirección de página

- [ ] `https://www.fisioterapia3olivos.es/visita-virtual/` devuelve 301 y termina en `https://www.fisioterapia3olivos.es/presentacion/`.
- [ ] `https://www.fisioterapia3olivos.es/visita-virtual` devuelve 301 y termina en `https://www.fisioterapia3olivos.es/presentacion/`.

# 3. Validaciones después de la migración

## 3.1. Validación inmediata

- [ ] Probar todas las páginas nuevas del inventario y confirmar que devuelven estado 200.
- [ ] Comprobar el menú completo y todos los enlaces del pie de página.
- [ ] Comprobar teléfono, WhatsApp, Google Maps y botones de contacto.
- [ ] Verificar la web en ordenador y móvil.
- [ ] Confirmar que no existen errores 404 inesperados.
- [ ] Confirmar que no existen bucles ni cadenas innecesarias de redirecciones.
- [ ] Verificar `https://www.fisioterapia3olivos.es/robots.txt`.
- [ ] Verificar `https://www.fisioterapia3olivos.es/sitemap.xml`.
- [ ] Confirmar que el sitemap contiene únicamente URLs con `www`.
- [ ] Confirmar que cada página declara como canonical su propia URL con `www`.

## 3.2. Validación SEO

- [ ] Enviar `https://www.fisioterapia3olivos.es/sitemap.xml` en Google Search Console.
- [ ] Inspeccionar la portada, `/indicaciones/`, `/contacto/` y `/presentacion/`.
- [ ] Solicitar indexación cuando Google Search Console confirme que puede acceder a las páginas.
- [ ] Revisar errores 404, páginas excluidas y canonical seleccionada por Google.
- [ ] Confirmar que la ficha de Google Business Profile apunta a `https://www.fisioterapia3olivos.es/`.
- [ ] Mantener permanentemente el 301 de `/visita-virtual/`.

## 3.3. Seguimiento posterior

- [ ] Repetir las pruebas principales después de 24 horas.
- [ ] Revisar Google Search Console durante los primeros días y semanalmente durante el primer mes.
- [ ] Vigilar clics, impresiones, indexación y errores de rastreo.
- [ ] Mantener Webnode disponible durante el periodo acordado de seguridad.
- [ ] No borrar la configuración DNS antigua hasta confirmar que no será necesaria para volver atrás.

# 4. Procedimiento de marcha atrás en caso de resultado KO

Aplicar la marcha atrás si la nueva web no carga, muestra errores graves, no dispone de HTTPS o Cloudflare no activa correctamente el dominio.

## 4.1. Restauración

1. [ ] Entrar en el mismo panel DNS utilizado durante la migración.
2. [ ] Localizar el CNAME de `www` modificado durante el cambio.
3. [ ] Restaurar su valor anterior:

   ```text
   fisioterapia3olivos.webnode.es
   ```

4. [ ] Guardar el cambio.
5. [ ] No tocar los registros A del dominio raíz si no fueron modificados.
6. [ ] No modificar registros de correo.
7. [ ] Esperar la propagación DNS.

## 4.2. Verificación de la vuelta atrás

- [ ] Abrir `https://www.fisioterapia3olivos.es/` y confirmar que vuelve a mostrarse la web antigua de Webnode.
- [ ] Probar `/contacto/`, `/indicaciones/` y `/visita-virtual/`.
- [ ] Confirmar que `https://fisioterapia3olivos.es/` vuelve a redirigir correctamente hacia `www`.
- [ ] Probar desde una ventana privada y desde datos móviles.
- [ ] Anotar el fallo encontrado antes de intentar una nueva migración.

## 4.3. Preparación de un nuevo intento

- [ ] Corregir el problema en la dirección temporal de Cloudflare Pages.
- [ ] Repetir todas las comprobaciones previas.
- [ ] Confirmar de nuevo el destino CNAME indicado por Cloudflare.
- [ ] Programar una nueva ventana de migración.
- [ ] No repetir el cambio hasta haber identificado la causa del resultado KO.

# Anexo A. Mapeo de páginas antiguas y nuevas

| Página antigua | Página nueva | Acción |
|---|---|---|
| `https://www.fisioterapia3olivos.es/` | Misma URL | Sin redirección |
| `https://www.fisioterapia3olivos.es/contacto/` | Misma URL | Sin redirección |
| `https://www.fisioterapia3olivos.es/indicaciones/` | Misma URL | Sin redirección |
| `https://www.fisioterapia3olivos.es/conocenos/` | Misma URL | Sin redirección |
| `https://www.fisioterapia3olivos.es/presentacion/` | Misma URL | Sin redirección |
| `https://www.fisioterapia3olivos.es/centro-indiba-r/` | Misma URL | Sin redirección |
| `https://www.fisioterapia3olivos.es/visita-virtual/` | `https://www.fisioterapia3olivos.es/presentacion/` | Redirección 301 en `_redirects` |

# Anexo B. Inventario completo de URLs para probar

## Páginas antiguas

- [ ] `https://www.fisioterapia3olivos.es/`
- [ ] `https://www.fisioterapia3olivos.es/contacto/`
- [ ] `https://www.fisioterapia3olivos.es/indicaciones/`
- [ ] `https://www.fisioterapia3olivos.es/visita-virtual/`
- [ ] `https://www.fisioterapia3olivos.es/conocenos/`
- [ ] `https://www.fisioterapia3olivos.es/presentacion/`
- [ ] `https://www.fisioterapia3olivos.es/centro-indiba-r/`

## Páginas nuevas

- [ ] `https://www.fisioterapia3olivos.es/`
- [ ] `https://www.fisioterapia3olivos.es/presentacion/`
- [ ] `https://www.fisioterapia3olivos.es/indicaciones/`
- [ ] `https://www.fisioterapia3olivos.es/centro-indiba-r/`
- [ ] `https://www.fisioterapia3olivos.es/conocenos/`
- [ ] `https://www.fisioterapia3olivos.es/como-trabajamos/`
- [ ] `https://www.fisioterapia3olivos.es/contacto/`
- [ ] `https://www.fisioterapia3olivos.es/aviso-legal/`
- [ ] `https://www.fisioterapia3olivos.es/privacidad/`
- [ ] `https://www.fisioterapia3olivos.es/cookies/`

## Redirecciones y archivos técnicos

- [ ] `https://www.fisioterapia3olivos.es/visita-virtual/` → `/presentacion/` mediante 301.
- [ ] `https://www.fisioterapia3olivos.es/visita-virtual` → `/presentacion/` mediante 301.
- [ ] `https://fisioterapia3olivos.es/` → `https://www.fisioterapia3olivos.es/` mediante 301.
- [ ] `https://fisioterapia3olivos.es/contacto/` → `https://www.fisioterapia3olivos.es/contacto/` mediante 301.
- [ ] `http://www.fisioterapia3olivos.es/` → `https://www.fisioterapia3olivos.es/`.
- [ ] `https://www.fisioterapia3olivos.es/robots.txt`.
- [ ] `https://www.fisioterapia3olivos.es/sitemap.xml`.

# Resultado esperado

La web nueva se sirve desde `https://www.fisioterapia3olivos.es`, las URLs antiguas mantienen su destino o reciben un 301 apropiado, y Webnode continúa disponible como vía rápida de marcha atrás durante el periodo de seguridad.
