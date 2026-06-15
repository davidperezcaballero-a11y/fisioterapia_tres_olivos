# Requisitos TO BE \- Nueva web Fisioterapia 3 Olivos

**Versión:** 2.1 \- Sitio sin cookies: mapa estático y sin banner de consentimiento  
**Fecha:** 15 de junio de 2026  
**Estado:** Borrador para validación de los propietarios  
**Objetivo del documento:** definir qué páginas tendrá la nueva web, qué contenido concreto aparecerá en cada una y qué requisitos de diseño, contenido, SEO, legal, accesibilidad y migración deberán cumplirse antes de implementarla y publicarla bajo el dominio `www.fisioterapia3olivos.es`.

**Alcance de este documento:** únicamente la **web**. La identidad de marca y la automatización de procesos se tratan en documentos independientes.

**Principio de privacidad:** el sitio se diseña **sin cookies que requieran consentimiento** y, por tanto, **sin banner**. No hay formularios ni contenido personalizado, el mapa se resuelve con una imagen estática que enlaza a Google Maps y cualquier herramienta incorporada deberá respetar este principio.

**Plataforma TO BE confirmada:** sitio estático HTML/CSS/JS, versionado en Git y desplegado en **Cloudflare Pages mediante integración con Git**. Webnode se mantiene únicamente como plataforma de la web AS IS hasta la migración.

### Registro de cambios

| Versión | Fecha | Cambios principales |
| :---- | :---- | ----: |
| 1.0 | 15/06/2026 | Primera propuesta completa: arquitectura, contenidos por página, look & feel, SEO y requisitos técnicos. |
| 2.0 | 15/06/2026 | Se añaden: datos estructurados (JSON-LD) concretos, decisión y requisitos del mapa con consentimiento, páginas legales (aviso legal, privacidad y cookies) como páginas con URL y alcance, tabla de redirecciones 301 AS-IS→TO-BE, accesibilidad (WCAG), medición de conversiones, Open Graph/compartir en WhatsApp y apéndice de prompts para Codificar. Se corrige la referencia a "implementar en Webnode" (el destino es despliegue propio vía Git, no Webnode). |
| 2.1 | 15/06/2026 | Se confirma Cloudflare Pages mediante Git como plataforma TO BE. Se descarta el iframe de Google Maps y el banner de consentimiento; se usa una imagen estática que enlaza a Google Maps. Se confirma que no habrá formularios y se ajustan sitemap, JSON-LD, páginas legales, analítica y prompts. |

---

## 1\. Contexto del proyecto

El proyecto tiene como objetivo modernizar la web de Fisioterapia 3 Olivos sin interrumpir el funcionamiento de la página actual ni perder el posicionamiento SEO conseguido.

### Web actual \- AS IS

**URL de producción:** [https://www.fisioterapia3olivos.es/](https://www.fisioterapia3olivos.es/)

- Es la web actualmente utilizada por pacientes y buscadores.  
- Está implementada en Webnode.  
- Continuará activa hasta que la nueva web esté validada y preparada para la migración.  
- Sus páginas, URLs, estadísticas y posicionamiento deben utilizarse como referencia para evitar pérdidas de tráfico.

### Prototipo validado \- Referencia TO BE

**URL de validación:** [https://fisioterapia-tres-olivos.pages.dev/](https://fisioterapia-tres-olivos.pages.dev/)

- Es la primera versión validada como referencia visual y funcional del TO BE.  
- Coincide con el archivo principal `index.html` y con la etiqueta Git `to-be-validada-v1`.  
- Su look & feel ha sido aprobado como punto de partida, salvo el cambio del verde principal por azul.  
- No representa todavía la arquitectura final de varias páginas definida en este documento.  
- No sustituirá la web actual hasta completar, validar e implementar todos los requisitos.

### Despliegue experimental no válido como referencia

**URL experimental:** [https://fisioterapia-tres-olivos-v2.vercel.app/](https://fisioterapia-tres-olivos-v2.vercel.app/)

- Contiene una prueba experimental de reserva online.  
- La reserva online ha sido descartada.  
- Esta URL no debe utilizarse como referencia del TO BE validado.

### Flujo previsto

1. Cerrar y aprobar este documento de requisitos.  
2. Implementar la nueva arquitectura y contenidos en el repositorio Git.  
3. Desplegar y validar cada avance en Cloudflare Pages.  
4. Validar diseño, funcionamiento, experiencia móvil y SEO.  
5. Preparar las redirecciones y elementos técnicos de migración.  
6. Conectar el dominio `www.fisioterapia3olivos.es` al despliegue definitivo de Cloudflare Pages y sustituir la web actual.  
7. Revisar funcionamiento, indexación y métricas después de publicar.

## 2\. Objetivo de negocio

La nueva web debe convertir más visitas en llamadas y conversaciones por WhatsApp. Para conseguirlo debe:

- Explicar en pocos segundos qué problemas trata la clínica.  
- Transmitir experiencia, cercanía y especialización.  
- Ayudar al paciente a reconocer su problema y entender cómo puede ayudarle la clínica.  
- Dar motivos claros para elegir Fisioterapia 3 Olivos frente a otras clínicas.  
- Facilitar el contacto desde cualquier página.  
- Mantener y mejorar el posicionamiento SEO de la web actual.

**Conversión principal:** llamada telefónica al `91 735 33 03`.  
**Conversión secundaria:** conversación por WhatsApp al `630 18 74 46`.  
**No se ofrecerá reserva ni gestión de citas online.**

## 3\. Principios de comunicación

### Propuesta de valor

Fisioterapia cercana, personal y efectiva para ayudarte a recuperar movimiento, reducir dolor y volver a tu vida.

La clínica valora y trata problemas del aparato locomotor, ATM, suelo pélvico y ámbito dermatofuncional. El tratamiento manual es la base y se apoya, cuando aporta valor, en ejercicio terapéutico y tecnología.

### Mensajes que deben repetirse en la web

- Más de 25 años de experiencia en la zona norte de Madrid.  
- Valoración y tratamiento personalizados.  
- Terapia manual como base del tratamiento.  
- Tecnología utilizada con criterio por fisioterapeutas.  
- Sesiones personalizadas de 50 a 55 minutos.  
- Horario ininterrumpido de lunes a viernes, de 9:00 a 22:00, durante todo el año.  
- Atención a pacientes de Tres Olivos, Fuencarral, Montecarmelo, Las Tablas y Mirasierra.  
- Posibilidad de consultar el problema por teléfono o WhatsApp antes de pedir cita.

### Tono

- Profesional, humano y tranquilizador.  
- Directo y fácil de entender.  
- En segunda persona, hablando al paciente de “tú”.  
- Sin promesas absolutas de curación ni afirmaciones médicas no demostrables.  
- Sin lenguaje excesivamente técnico.

## 4\. Decisiones confirmadas

- Mantener el look & feel del prototipo actual: composición editorial, fondo cálido, tarjetas, fotografías reales, tipografía elegante y sensación premium cercana.  
- Sustituir el verde principal del prototipo por azul, alineado con el color de la clínica.  
- Eliminar la reserva online experimental.  
- Gestionar citas exclusivamente por teléfono y WhatsApp.  
- Mantener Contacto y Visita Virtual como páginas independientes.  
- Escribir siempre **INDIBA®** con la marca registrada.  
- Comunicar que la clínica es centro oficial INDIBA®.  
- Utilizar el término **ecografía**, evitando “ecografía diagnóstica”.  
- Añadir neuromodulación.  
- Eliminar todas las menciones a punción seca.  
- Destacar a Elena Polo en fisioterapia dermatofuncional.  
- Destacar a Mercedes Pérez en suelo pélvico y eliminar nutrición.

## 5\. Información aportada por las estadísticas actuales

En los datos compartidos de los últimos 30 días:

| Página actual | Visualizaciones |
| :---- | ----: |
| Inicio `/` | 2.395 |
| Contacto `/contacto/` | 234 |
| Equipo `/conocenos/` | 195 |
| Presentación `/presentacion/` | 170 |
| Centro INDIBA® `/centro-indiba-r/` | 153 |
| Visita Virtual `/visita-virtual/` | 151 |
| Indicaciones `/indicaciones/` | 145 |

**Conclusiones para el TO BE:**

- La portada concentra la mayoría de las visualizaciones: debe funcionar como resumen completo y convertir sin obligar a navegar.  
- Contacto es la segunda página más visitada: debe ser extremadamente sencilla y orientada a llamar, escribir o llegar.  
- Equipo, Presentación, INDIBA®, Visita Virtual e Indicaciones ya reciben tráfico y deben conservar sus URLs.  
- El tráfico procede principalmente de accesos directos y, en menor medida, de buscadores. Existe margen para mejorar el SEO de cada página.

## 6\. Arquitectura y navegación

### Menú principal

1. Inicio  
2. La clínica  
3. Tratamientos  
4. Tecnología  
5. Equipo  
6. Cómo trabajamos  
7. Visita virtual  
8. Contacto  
9. Botón destacado: **Pedir cita**

El botón **Pedir cita** abrirá opciones para llamar o escribir por WhatsApp, nunca un sistema de reserva online.

### URLs

| Página | URL definitiva recomendada | Decisión SEO |
| :---- | :---- | :---- |
| Inicio | `/` | Conservar |
| La clínica | `/presentacion/` | Conservar |
| Tratamientos | `/indicaciones/` | Conservar |
| Tecnología | `/centro-indiba-r/` | Conservar para proteger el tráfico actual |
| Equipo | `/conocenos/` | Conservar |
| Cómo trabajamos | `/como-trabajamos/` | Nueva página |
| Visita virtual | `/visita-virtual/` | Conservar |
| Contacto | `/contacto/` | Conservar |

## 7\. Requisitos comunes a todas las páginas

### Cabecera

- Logotipo de Fisioterapia 3 Olivos.  
- Menú principal.  
- Botón azul destacado **Pedir cita**.  
- Cabecera fija al desplazarse, como en el prototipo.  
- En móvil, acceso visible y permanente a **Llamar** y **WhatsApp**.

### Cierre comercial

Todas las páginas terminarán con una banda de llamada a la acción:

**Título:** `¿No sabes qué tratamiento necesitas?`  
**Texto:** `Cuéntanos qué te ocurre. Te orientaremos antes de pedir cita.`  
**Botones:** `Llamar al 91 735 33 03` y `Escribir por WhatsApp`.

### Pie de página

- Logotipo y frase breve de posicionamiento.  
- Enlaces a todas las páginas.  
- Teléfono, WhatsApp, dirección y horario.  
- Aviso legal, privacidad y cookies.  
- Enlace a Instagram.

---

## 8\. Contenido detallado por página

## Página 1 \- Inicio

**URL:** `/`  
**Objetivo comercial:** conseguir que el visitante entienda rápidamente qué ofrece la clínica y contacte.  
**H1 propuesto:** `Fisioterapia cercana, personal y efectiva en Tres Olivos`  
**Título SEO:** `Fisioterapia 3 Olivos | Clínica de fisioterapia en Madrid`  
**Metadescripción propuesta:** `Clínica de fisioterapia en Tres Olivos desde 1999. Aparato locomotor, suelo pélvico, dermatofuncional, Pilates, fuerza e INDIBA®. Pide cita.`

### Bloque 1 \- Hero

**Antetítulo:** `Fisioterapia en Tres Olivos, Madrid · desde 1999`  
**Titular:** `Fisioterapia cercana, personal y efectiva`  
**Texto:**

Valoramos tu caso y diseñamos un tratamiento personalizado para ayudarte a reducir dolor, recuperar movimiento y volver a tu actividad. Terapia manual, ejercicio y tecnología útil en Tres Olivos.

**Botones:** `Llamar para pedir cita` y `Escribir por WhatsApp`.  
**Imagen:** fotografía real y luminosa de la clínica o del tratamiento.

### Bloque 2 \- Información práctica inmediata

Tres tarjetas visibles:

- **Teléfono:** `91 735 33 03`.  
- **WhatsApp:** `630 18 74 46`.  
- **Dónde estamos:** dirección completa y horario `L-V · 9:00-22:00 ininterrumpido`.

### Bloque 3 \- Razones para elegir la clínica

- `25+ años` de experiencia.  
- `50-55 min` de sesión personalizada.  
- `Centro oficial INDIBA®`.  
- Horario amplio durante todo el año.

### Bloque 4 \- Áreas principales

Seis tarjetas enlazadas a Tratamientos o Tecnología:

1. **Fisioterapia del aparato locomotor**  
   `Dolor de espalda y cuello, lesiones deportivas, ATM, recuperación postoperatoria y dolor articular.`  
     
2. **Unidad de suelo pélvico e hipopresivos**  
   `Valoración y tratamiento personalizado en embarazo, postparto, incontinencias, prolapsos y recuperación abdominal.`  
     
3. **Fisioterapia dermatofuncional**  
   `Tratamiento fisioterapéutico para mejorar la recuperación de tejidos, cicatrices, edema y procesos postquirúrgicos.`  
     
4. **Ejercicio funcional, Pilates y fuerza**  
   `Ejercicio dirigido por fisioterapeutas para recuperar función, prevenir lesiones y mantener fuerza y autonomía.`  
     
5. **Centro oficial INDIBA®**  
   `Radiofrecuencia aplicada por fisioterapeutas como apoyo para aliviar dolor y favorecer la recuperación.`  
     
6. **Ecografía**  
   `Una herramienta de apoyo para valorar, comprender y seguir la evolución del tejido tratado.`

### Bloque 5 \- Propuesta de valor resumida

**Título:** `Entender tu problema antes de tratarlo`  
**Texto:**

No aplicamos tratamientos estándar. Escuchamos qué te ocurre, valoramos cómo afecta a tu vida y definimos contigo un plan. La terapia manual es nuestra base; el ejercicio y la tecnología se incorporan cuando ayudan a avanzar.

**Enlace:** `Conoce nuestra forma de trabajar`.

### Bloque 6 \- Equipo resumido

- Fotografía y nombre de José Ramón, Mercedes y Elena.  
- Una línea de especialidad por profesional.  
- Enlace: `Conoce al equipo`.

### Bloque 7 \- Opiniones

- Mostrar tres reseñas reales breves como avance para generar confianza desde la portada.  
- Incluir valoración y procedencia cuando sea posible.  
- Enlace `Ver más opiniones` hacia la sección completa de reseñas en Cómo trabajamos.

### Bloque 8 \- Ubicación

- Fotografía de la entrada.  
- Dirección, horario y zonas cercanas.  
- Botón `Cómo llegar`.

---

## Página 2 \- La clínica

**URL:** `/presentacion/`  
**Objetivo comercial:** explicar por qué confiar en Fisioterapia 3 Olivos.  
**H1 propuesto:** `Más de 25 años cuidando el movimiento de nuestros pacientes`  
**Título SEO:** `Clínica Fisioterapia 3 Olivos | Nuestra forma de entender la fisioterapia`  
**Metadescripción propuesta:** `Conoce Fisioterapia 3 Olivos: valoración personalizada, terapia manual, ejercicio y tecnología con criterio desde 1999.`

### Bloque 1 \- Presentación

Desde 1999 ayudamos a pacientes de Tres Olivos y la zona norte de Madrid a recuperar movilidad, reducir dolor y volver a sus actividades. Nuestra forma de trabajar parte de una valoración personalizada y de un trato cercano durante todo el proceso.

### Bloque 2 \- Qué problemas abordamos

Valoramos y tratamos problemas del aparato locomotor, ATM, suelo pélvico y ámbito dermatofuncional. También acompañamos recuperaciones postoperatorias y diseñamos programas de ejercicio, Pilates y fuerza.

**Mensaje destacado:** `Si no sabes si podemos ayudarte, consúltanos tu problema.`

### Bloque 3 \- Los cuatro pilares

1. **Escucha y valoración:** entender el problema, antecedentes y objetivos.  
2. **Terapia manual:** base del tratamiento personalizado.  
3. **Ejercicio y prevención:** recuperar capacidad y reducir recaídas.  
4. **Tecnología con criterio:** utilizarla solo cuando aporta valor.

### Bloque 4 \- Experiencia local

- Desde 1999\.  
- Más de 25 años.  
- Clínica situada en la Plaza de los Tres Olivos.  
- Atención a Tres Olivos, Fuencarral, Montecarmelo, Las Tablas y Mirasierra.

### Bloque 5 \- Instalaciones

- Fotografías reales de salas, equipamiento y entrada.  
- Enlace a `Visita virtual`.

---

## Página 3 \- Tratamientos

**URL:** `/indicaciones/`  
**Objetivo comercial:** lograr que el paciente reconozca su problema y consulte.  
**H1 propuesto:** `Tratamientos de fisioterapia adaptados a tu problema`  
**Título SEO:** `Tratamientos de fisioterapia en Tres Olivos | Fisioterapia 3 Olivos`  
**Metadescripción propuesta:** `Tratamiento personalizado para dolor de espalda, lesiones, ATM, suelo pélvico, dermatofuncional, postoperatorios, Pilates y fuerza.`

**Introducción:**

Cada persona y cada lesión son diferentes. Valoramos tu caso para decidir qué tratamiento, ejercicio o tecnología puede ayudarte. Si no encuentras tu problema en esta página, consúltanos.

### Bloque 1 \- Aparato locomotor

**Texto:**

Tratamos dolor y limitaciones relacionadas con músculos, articulaciones y movimiento, buscando recuperar función y ayudarte a volver a tus actividades.

**Indicaciones visibles:**

- Cervicalgia, lumbalgia y dolor de espalda.  
- Contracturas y sobrecargas musculares.  
- Dolor articular y artrosis.  
- Tendinopatías y lesiones deportivas.  
- Esguinces y recuperación tras inmovilización.  
- Recuperación funcional después de cirugía.

### Bloque 2 \- ATM y cefalea tensional

**Texto:**

Abordaje fisioterapéutico del dolor mandibular, tensión muscular, limitación al abrir la boca y cefaleas relacionadas con la musculatura cervical y mandibular.

**Indicaciones visibles:**

- Dolor o tensión mandibular.  
- Limitación de apertura.  
- Bruxismo y sobrecarga muscular.  
- Cefalea tensional.  
- Dolor cervical asociado.

### Bloque 3 \- Suelo pélvico e hipopresivos

**Texto:**

Valoración y tratamiento del suelo pélvico en diferentes etapas de la vida, con especial atención al embarazo, postparto y recuperación funcional.

**Indicaciones visibles:**

- Incontinencias.  
- Prolapsos.  
- Preparación al parto y masaje perineal.  
- Recuperación postparto.  
- Cicatrices de cesárea o episiotomía.  
- Diástasis abdominal.  
- Hipopresivos.

### Bloque 4 \- Fisioterapia dermatofuncional

**Texto propuesto sujeto a validación clínica:**

Fisioterapia orientada a mejorar la función y recuperación de la piel y los tejidos, especialmente después de cirugías o ante alteraciones como cicatrices, edema o fibrosis.

**Indicaciones propuestas sujetas a validación:**

- Tratamiento de cicatrices y adherencias.  
- Edema y drenaje.  
- Fibrosis.  
- Recuperación postquirúrgica.  
- Mejora de la movilidad y calidad del tejido.

### Bloque 5 \- Recuperación postoperatoria

**Texto:**

Acompañamiento progresivo para recuperar movilidad, fuerza, confianza y función después de una intervención, respetando los tiempos de cada fase.

### Bloque 6 \- Pilates y entrenamiento de fuerza

**Texto:**

Pilates Springboard, ejercicio funcional y fuerza dirigidos por fisioterapeutas, adaptados al nivel y objetivos de cada persona.

**Beneficios comunicados:**

- Recuperar movilidad y fuerza.  
- Prevenir lesiones y recaídas.  
- Mejorar control postural y autonomía.  
- Prevenir la pérdida de masa muscular y la sarcopenia.

### Cierre

**Título:** `¿No encuentras tu problema?`  
**Texto:** `Llámanos o escríbenos por WhatsApp. Te orientaremos sobre el profesional y la cita más adecuados.`

---

## Página 4 \- Tecnología

**URL:** `/centro-indiba-r/`  
**Objetivo comercial:** reforzar la diferenciación tecnológica sin transmitir tratamientos impersonales.  
**H1 propuesto:** `Tecnología al servicio de tu recuperación`  
**Título SEO:** `Centro oficial INDIBA®, ecografía y neuromodulación | Fisioterapia 3 Olivos`  
**Metadescripción propuesta:** `Centro oficial INDIBA® en Tres Olivos. Ecografía y neuromodulación utilizadas por fisioterapeutas como apoyo al tratamiento personalizado.`

### Bloque 1 \- Enfoque

**Título:** `La tecnología ayuda. El criterio del fisioterapeuta decide.`  
**Texto:**

La terapia manual y la valoración personalizada son la base de nuestro tratamiento. Incorporamos tecnología cuando permite comprender mejor el problema, aliviar síntomas o acompañar la recuperación.

### Bloque 2 \- Centro oficial INDIBA®

**Texto propuesto sujeto a validación clínica y de marca:**

INDIBA® es una tecnología de radiofrecuencia no invasiva que utilizamos como apoyo dentro del tratamiento fisioterapéutico. Puede ayudar a aliviar dolor, mejorar la movilidad y acompañar la recuperación de tejidos.

**Aplicaciones a destacar:**

- Dolor musculoesquelético.  
- Lesiones deportivas y sobrecargas.  
- Recuperación postoperatoria.  
- Suelo pélvico y postparto.  
- Fisioterapia dermatofuncional.

**Recursos:** distintivo oficial y fotografía real del equipo.

### Bloque 3 \- Ecografía

**Texto:**

Utilizamos la ecografía como herramienta de apoyo para observar tejidos, completar la valoración del fisioterapeuta y seguir la evolución durante el tratamiento.

No utilizar la expresión `ecografía diagnóstica`.

### Bloque 4 \- Neuromodulación

**Texto propuesto sujeto a validación clínica:**

La neuromodulación es una técnica utilizada por fisioterapeutas para actuar sobre el sistema nervioso y modular el dolor o mejorar la función en casos seleccionados.

**Requisito:** explicar de forma sencilla cuándo se recomienda y aclarar que siempre depende de una valoración previa.

### Elementos eliminados

- Punción seca.  
- Cualquier tecnología que la clínica no quiera ofrecer o comunicar actualmente.

---

## Página 5 \- Equipo

**URL:** `/conocenos/`  
**Objetivo comercial:** convertir la experiencia y especialización del equipo en confianza.  
**H1 propuesto:** `Un equipo con experiencia real y trato cercano`  
**Título SEO:** `Equipo de fisioterapeutas en Tres Olivos | Fisioterapia 3 Olivos`  
**Metadescripción propuesta:** `Conoce al equipo de Fisioterapia 3 Olivos: José Ramón Gómez de los Ángeles, Mercedes Pérez y Elena Polo.`

### Introducción

Detrás de cada tratamiento hay un fisioterapeuta que escucha, valora y se implica en tu recuperación. Somos un equipo con experiencia y especialidades complementarias.

### José Ramón Gómez de los Ángeles

**Datos confirmados:** director, fisioterapeuta, colegiado nº 411 y fundador de la clínica.  
**Texto propuesto:**

Director y fundador de Fisioterapia 3 Olivos. Más de 25 años de experiencia en fisioterapia del aparato locomotor, lesiones deportivas y recuperación funcional.

**Pendiente:** validar especialidades y trayectoria exactas que se desean publicar.

### Mercedes Pérez

**Datos confirmados:** fisioterapeuta, colegiada nº 6178\.  
**Posicionamiento requerido:** suelo pélvico; eliminar nutrición.  
**Texto propuesto sujeto a validación:**

Fisioterapeuta especializada en suelo pélvico, postparto, hipopresivos y terapia manual.

### Elena Polo

**Datos confirmados:** fisioterapeuta, colegiada nº 16633\.  
**Posicionamiento requerido:** fisioterapia dermatofuncional.  
**Texto propuesto sujeto a validación:**

Fisioterapeuta especializada en dermatofuncional, ejercicio terapéutico y recuperación funcional.

### Formato de las fichas

- Fotografía profesional real.  
- Nombre y número de colegiado.  
- Especialidades.  
- Trayectoria breve.  
- Frase personal sobre su forma de trabajar.  
- Botón común `Pedir cita con el equipo`, sin prometer elección de profesional.

---

## Página 6 \- Cómo trabajamos

**URL:** `/como-trabajamos/`  
**Objetivo comercial:** reducir dudas antes de la primera cita y demostrar un método claro.  
**H1 propuesto:** `Un proceso claro para ayudarte a recuperar`  
**Título SEO:** `Cómo trabajamos | Fisioterapia 3 Olivos`  
**Metadescripción propuesta:** `Conoce cómo trabajamos: orientación inicial, valoración personalizada, terapia manual, tecnología cuando aporta y seguimiento.`

### Proceso

1. **Cuéntanos qué te ocurre**  
   `Llámanos o escríbenos por WhatsApp. Te orientaremos para concertar la cita más adecuada.`  
     
2. **Valoración personalizada**  
   `Escuchamos tu historia, exploramos el problema y revisamos los informes o pruebas que puedan ayudar.`  
     
3. **Definimos un plan contigo**  
   `Te explicamos qué hemos observado, qué objetivos proponemos y cómo planteamos el tratamiento.`  
     
4. **Terapia manual como base**  
   `La terapia manual siempre es la base de nuestro tratamiento, apoyada, cuando es necesario, por ejercicio y las tecnologías más modernas.`  
     
5. **Seguimiento y prevención**  
   `Revisamos tu evolución y te damos pautas para recuperar función y reducir el riesgo de recaída.`

### La opinión de nuestros pacientes

- Esta será la sección principal y completa de reseñas de la web.  
- Publicar cinco reseñas reales, incluyendo también las tres destacadas en Inicio.  
- Priorizar reseñas relacionadas con José Ramón y Mercedes.  
- Incluir variedad: dolor de espalda, postoperatorio, suelo pélvico, lesión deportiva y atención general.  
- No publicar testimonios inventados ni modificarlos de forma que altere su significado.  
- Añadir enlace a Google o fuente original cuando sea viable.

### Preguntas frecuentes con respuesta propuesta

**¿Cuánto dura una sesión?**  
`Las sesiones son personalizadas y duran aproximadamente entre 50 y 55 minutos.`

**¿Qué debo llevar a la primera sesión?**  
`Si tienes informes médicos o pruebas relacionadas con tu problema, tráelos. También recomendamos ropa cómoda que permita valorar la zona.`

**¿Tratáis recuperaciones después de una operación?**  
`Sí. Adaptamos el tratamiento a la intervención realizada, la fase de recuperación y las indicaciones médicas.`

**¿Cómo sé qué tratamiento necesito?**  
`No necesitas decidirlo antes de venir. Cuéntanos qué te ocurre y, tras valorarte, te explicaremos las opciones adecuadas para tu caso.`

**¿Cómo puedo pedir, cambiar o cancelar una cita?**  
`Puedes hacerlo llamando al 91 735 33 03 o escribiendo por WhatsApp al 630 18 74 46.`

**¿Dónde está la clínica y hay aparcamiento?**  
`Estamos en la Plaza de los Tres Olivos, cerca del Metro Tres Olivos y de los autobuses EMT 66 y 137. La zona dispone de fácil acceso y aparcamiento.`

Eliminar la pregunta sobre seguros médicos.

---

## Página 7 \- Visita virtual

**URL:** `/visita-virtual/`  
**Objetivo comercial:** reducir incertidumbre y mostrar una clínica cuidada, profesional y accesible.  
**H1 propuesto:** `Conoce Fisioterapia 3 Olivos antes de tu visita`  
**Título SEO:** `Visita virtual de Fisioterapia 3 Olivos`  
**Metadescripción propuesta:** `Descubre las instalaciones de Fisioterapia 3 Olivos antes de tu cita: entrada, salas de tratamiento y equipamiento.`

### Contenido

- Visita virtual interactiva, si la herramienta actual puede conservarse.  
- La visita virtual no podrá instalar cookies ni cargar recursos de terceros que requieran consentimiento. Si la herramienta actual no cumple este requisito, se sustituirá por una galería local de fotografías.  
- Fotografía clara de la entrada para facilitar la llegada.  
- Galería de las salas de tratamiento.  
- Fotografías de INDIBA®, ecografía, Pilates Springboard y zona de ejercicio.  
- Texto breve sobre privacidad, comodidad y accesibilidad.  
- Enlace destacado a Contacto y botones de llamada y WhatsApp.

---

## Página 8 \- Contacto

**URL:** `/contacto/`  
**Objetivo comercial:** eliminar cualquier fricción para llamar, escribir o llegar a la clínica.  
**H1 propuesto:** `Contacta con Fisioterapia 3 Olivos`  
**Título SEO:** `Contacto y cita | Fisioterapia 3 Olivos`  
**Metadescripción propuesta:** `Contacta con Fisioterapia 3 Olivos. Teléfono 91 735 33 03, WhatsApp 630 18 74 46. Horario de lunes a viernes de 9:00 a 22:00.`

### Bloque principal

**Título:** `Cuéntanos qué te ocurre`  
**Texto:**

Llámanos o escríbenos por WhatsApp. Te orientaremos y concertaremos la cita adecuada para tu caso.

**Botones prioritarios:** `Llamar ahora` y `Escribir por WhatsApp`.

### Datos de contacto

- Teléfono: `91 735 33 03`.  
- WhatsApp: `630 18 74 46`.  
- Dirección: `Plaza de los Tres Olivos, local · 28034 Madrid` \- pendiente completar número exacto.  
- Horario: `Lunes a viernes · 9:00 a 22:00 ininterrumpido · todo el año`.

### Cómo llegar

- **Imagen estática del mapa** que enlaza a Google Maps (sin iframe ni cookies; ver sección 8 ter).  
- La imagen debe mostrar de forma visible el marcador y el nombre de **Fisioterapia 3 Olivos**, colocado exactamente en la ubicación de la clínica.  
- No mostrar únicamente una zona aproximada o la Plaza de los Tres Olivos sin identificar la clínica.  
- Botón **Cómo llegar** que abre la ubicación en Google Maps en una pestaña nueva.  
- Fotografía exterior de la entrada.  
- Metro Tres Olivos.  
- Autobuses EMT 66 y 137\.  
- Información sobre acceso y aparcamiento.  
- Enlace a `Visita virtual`.

No incluir ningún formulario. Las consultas y la gestión de citas se realizarán exclusivamente por teléfono y WhatsApp.

---

---

## 8 bis. Páginas legales (aviso legal, privacidad y cookies)

El sitio **no tiene formularios** de contacto ni de reserva, **no usa cookies que requieran consentimiento** y **no incluye banner de cookies**. No hay recogida activa de datos personales por parte del visitante. El mapa se resuelve con una **imagen estática que enlaza a Google Maps**, sin cargar recursos de terceros al abrir la página (ver sección 8 ter).

Las tres páginas legales se enlazan desde el pie de página en todas las páginas. No aparecen en el menú principal y se excluyen del foco SEO, pero deben ser indexables salvo decisión en contra.

### Aviso legal

**URL:** `/aviso-legal/`  
**H1:** `Aviso legal`  
**Indexación:** permitir.  
**Contenido mínimo:**

- Titular de la actividad y datos identificativos (nombre o razón social, NIF, dirección de la clínica, teléfono y correo de contacto).  
- Objeto y condiciones de uso del sitio.  
- Propiedad intelectual e industrial de los contenidos, marca y logotipo.  
- Exención de responsabilidad sobre el contenido y los enlaces externos.  
- Legislación aplicable y jurisdicción.

**Pendiente de aportar por los propietarios:** denominación exacta del titular, NIF, dirección postal completa y correo de contacto legal.

### Política de privacidad

**URL:** `/privacidad/`  
**H1:** `Política de privacidad`  
**Indexación:** permitir.  
**Contenido mínimo (RGPD \+ LOPDGDD):**

- Responsable del tratamiento e identificación.  
- Aclaración de que el sitio **no recoge datos a través de formularios**.  
- El sitio **no embebe** el mapa de Google; solo enlaza a Google Maps, de modo que cualquier tratamiento por parte de Google ocurre únicamente si el visitante pulsa el enlace y ya en el dominio de Google. Si se utiliza analítica, debe ser **sin cookies y agregada** (ver sección 11 bis).  
- Finalidad, base jurídica y conservación (al no usarse cookies no esenciales, no se solicita consentimiento por ese motivo).  
- Cesiones a terceros y transferencias internacionales asociadas a Google.  
- Derechos de las personas (acceso, rectificación, supresión, oposición, etc.) y cómo ejercerlos.  
- Enlace a la política de cookies.

**Nota sobre canales de contacto:** el teléfono y WhatsApp son los canales de contacto reales. Conviene una línea que informe de que, al escribir por WhatsApp, el tratamiento de esa conversación se rige por las condiciones de WhatsApp/Meta y por la propia clínica como responsable.

### Política de cookies

**URL:** `/cookies/`  
**H1:** `Política de cookies`  
**Indexación:** permitir.  
**Contenido mínimo:**

- Qué es una cookie y tipos utilizados.  
- Declaración de que el sitio **no instala cookies propias ni de terceros que requieran consentimiento**, por lo que no se muestra banner.  
- Aclaración de que el mapa **no se embebe**: solo se enlaza a Google Maps, que aplicará sus propias cookies únicamente si el visitante accede.  
- Indicar la solución de analítica sin cookies y agregada utilizada, si finalmente se incorpora.

**Nota:** al no haber cookies que requieran consentimiento, no se necesita banner ni enlace de "Configurar cookies". Cualquier futura herramienta deberá evaluarse antes de incorporarla y respetar este principio o requerirá una revisión expresa de estos requisitos.

---

## 8 ter. Mapa de la clínica (sin cookies, sin banner)

**Decisión adoptada:** **no** usar el mapa de Google embebido (iframe). En su lugar, mostrar una **imagen estática del mapa** con el marcador de la clínica, que **enlaza a Google Maps** en una pestaña nueva. Con esto el sitio no carga recursos de terceros al abrir Contacto y **no necesita banner de cookies**, evitando interrumpir la navegación.

**Motivo:** el iframe de Google Maps instala cookies/almacenamiento de terceros y obligaría a pedir consentimiento. Como la web no tiene formularios ni nada personalizado, eliminando el iframe el sitio queda sin cookies que requieran aprobación.

**Comportamiento requerido:**

- En Contacto se muestra una **imagen estática del mapa** (captura con el marcador "Fisioterapia 3 Olivos" en la ubicación exacta), optimizada y con texto alternativo descriptivo.  
- La imagen y un botón **Cómo llegar** enlazan a la ubicación en **Google Maps** (`https://maps.google.com/...`), que se abre en una pestaña nueva. El visitante solo entra en el dominio de Google si pulsa, ya bajo las condiciones de Google.  
- No se carga ningún iframe ni script de Google al abrir la página.  
- La imagen del mapa se sirve con **lazy loading** y dimensiones reservadas para no provocar saltos de contenido.

**Requisitos de aceptación:**

- Al cargar Contacto, **ninguna** petición a dominios de Google se dispara hasta que el usuario pulsa el enlace.  
- La imagen muestra claramente el marcador y el nombre de la clínica en su ubicación.  
- El botón **Cómo llegar** abre la ubicación correcta en Google Maps.  
- No aparece ningún banner de cookies en ninguna página.

## 9\. Look & feel

### Dirección visual

Se mantendrá el estilo del prototipo validado:

- Diseño editorial y limpio.  
- Sensación premium, cercana y tranquila.  
- Fondo crema cálido y tarjetas blancas.  
- Tipografía serif elegante para títulos y sans serif legible para textos.  
- Fotografías reales y naturales.  
- Iconos lineales.  
- Bordes redondeados, sombras suaves y animaciones discretas.  
- Sin gradientes, estética hospitalaria ni imágenes genéricas de stock.

### Primera propuesta de paleta azul

Esta paleta deberá contrastarse con el azul exacto de la clínica:

| Uso | Color propuesto |
| :---- | :---- |
| Azul profundo principal | `#185A7D` |
| Azul medio para enlaces y elementos activos | `#2F7FA6` |
| Azul claro para iconos y fondos suaves | `#B9DCEB` |
| Coral cálido para CTA principal | `#D66B4D` |
| Crema de fondo | `#F3F0E9` |
| Texto principal | `#292D30` |
| Blanco para tarjetas | `#FFFFFF` |

El coral se conservará como acento cálido para evitar que el conjunto resulte frío. El azul sustituirá al verde en títulos, iconos, footer, bloques oscuros, sombras y estados interactivos.

## 10\. SEO y migración

- Conservar las siete URLs actuales con tráfico.  
- Crear `/como-trabajamos/` como nueva página.  
- No cambiar URLs existentes sin redirección permanente `301`.  
- Configurar un único `H1`, título SEO y metadescripción por página.  
- Mantener el nombre, dirección, teléfono y horario escritos de forma idéntica en toda la web.  
- Incluir de forma natural Tres Olivos, Fuencarral, Montecarmelo, Las Tablas y Mirasierra.  
- Mantener y ampliar el contenido de `/centro-indiba-r/`.  
- Añadir enlaces internos entre Inicio, Tratamientos, Tecnología, Equipo y Contacto.  
- Usar textos alternativos descriptivos en las imágenes.  
- Configurar sitemap, robots, canonical y datos estructurados de negocio local.  
- Revisar que todas las páginas estén indexadas después de la migración.  
- Medir clics en teléfono, WhatsApp y Cómo llegar.

## 10 bis. Datos estructurados (JSON-LD)

Para reforzar el SEO local, cada página relevante incluirá datos estructurados. Como mínimo, en **Inicio** y **Contacto** se incluirá un bloque `LocalBusiness` de tipo `Physiotherapy`. El siguiente ejemplo es JSON válido y utilizable; los valores que empiezan por `PENDIENTE_` deben sustituirse antes de publicar.

```json
{
  "@context": "https://schema.org",
  "@type": "Physiotherapy",
  "name": "Fisioterapia 3 Olivos",
  "url": "https://www.fisioterapia3olivos.es/",
  "image": "https://www.fisioterapia3olivos.es/img/clinica.jpg",
  "logo": "https://www.fisioterapia3olivos.es/img/logo.png",
  "telephone": "+34917353303",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PENDIENTE_DIRECCION_COMPLETA",
    "addressLocality": "Madrid",
    "postalCode": "28034",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "PENDIENTE_LATITUD",
    "longitude": "PENDIENTE_LONGITUD"
  },
  "areaServed": [
    "Tres Olivos",
    "Fuencarral",
    "Montecarmelo",
    "Las Tablas",
    "Mirasierra"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "22:00"
    }
  ],
  "sameAs": [
    "PENDIENTE_URL_INSTAGRAM",
    "PENDIENTE_URL_GOOGLE_BUSINESS"
  ]
}
```

**Requisitos de aceptación:**

- El NAP (nombre, dirección, teléfono) del JSON-LD debe coincidir **carácter a carácter** con el visible en la web y con la ficha de Google Business.  
- Validar con la prueba de resultados enriquecidos de Google antes de publicar.  
- Añadir `BreadcrumbList` si se implementan migas de pan.  
- En **Cómo trabajamos**, valorar marcar las preguntas frecuentes con `FAQPage` si se desea aparecer como fragmento ampliado.

## 10 ter. Redirecciones 301 (AS-IS → TO-BE)

Como las URLs principales se conservan, la mayoría son correspondencia directa. La tabla sirve de control durante la migración y debe completarse tras un rastreo de la web actual para detectar URLs antiguas no listadas (versiones con/sin barra final, mayúsculas, parámetros, páginas huérfanas).

| URL actual (AS-IS) | URL nueva (TO-BE) | Acción |
| :---- | :---- | :---- |
| `/` | `/` | Conservar |
| `/presentacion/` | `/presentacion/` | Conservar |
| `/indicaciones/` | `/indicaciones/` | Conservar |
| `/centro-indiba-r/` | `/centro-indiba-r/` | Conservar |
| `/conocenos/` | `/conocenos/` | Conservar |
| `/visita-virtual/` | `/visita-virtual/` | Conservar |
| `/contacto/` | `/contacto/` | Conservar |
| (no existe) | `/como-trabajamos/` | Nueva |
| (no existe) | `/aviso-legal/`, `/privacidad/`, `/cookies/` | Nuevas |
| `<URLs antiguas detectadas en el rastreo>` | `<destino equivalente>` | **301 permanente** |

**Requisitos de aceptación:**

- Antes de migrar, rastrear la web actual y exportar el listado completo de URLs indexadas.  
- Toda URL antigua que no tenga equivalente exacto debe redirigir con **301** a la página más cercana (nunca a un 404 ni a la portada de forma indiscriminada).  
- Verificar las redirecciones con una herramienta de comprobación de cabeceras antes y después de publicar.

## 11\. Requisitos técnicos, rendimiento y SEO

### Optimización para móvil

**Función:** adaptar correctamente la web a teléfonos y tabletas.  
**Objetivo:** facilitar que los pacientes comprendan el contenido y contacten desde cualquier dispositivo.

**Requisitos de aceptación:**

- Diseñar y validar todas las páginas con enfoque mobile-first.  
- No permitir desplazamiento horizontal, textos cortados ni elementos superpuestos.  
- Mantener textos, botones y enlaces fácilmente legibles y pulsables.  
- Mostrar accesos visibles a teléfono y WhatsApp en móvil.  
- Adaptar menú, tablas, tarjetas, imágenes, mapa y visita virtual a pantallas pequeñas.  
- Probar al menos anchuras de `360 px`, `390 px`, `768 px` y escritorio.

### Lazy loading

**Función:** cargar imágenes, mapas y contenidos pesados cuando se aproximan al área visible.  
**Objetivo:** reducir el tiempo de carga inicial y mejorar el rendimiento.

**Requisitos de aceptación:**

- Aplicar lazy loading a fotografías situadas fuera del primer bloque visible, galerías, mapa y visita virtual.  
- No aplicar lazy loading al logotipo ni a la imagen principal visible al abrir cada página.  
- Comprimir y servir las imágenes con dimensiones adecuadas.  
- Evitar saltos de contenido reservando el espacio de cada imagen antes de su carga.

### `sitemap.xml`

**Función:** ofrecer a los buscadores un mapa de todas las páginas públicas de la web.  
**Objetivo:** facilitar a Google el descubrimiento e indexación de contenidos.

**Requisitos de aceptación:**

- Generar un `sitemap.xml` accesible públicamente.  
- Incluir las once páginas públicas definitivas: las ocho páginas principales y las tres páginas legales. Excluir páginas privadas, búsquedas internas o contenido duplicado.  
- Actualizarlo cuando se añadan, eliminen o cambien URLs.  
- Enviarlo a Google Search Console después de la migración.

### `robots.txt`

**Función:** indicar a los buscadores qué contenido pueden rastrear.  
**Objetivo:** controlar el rastreo y evitar la indexación de contenido técnico o innecesario.

**Requisitos de aceptación:**

- Publicar un archivo `robots.txt` accesible desde la raíz del dominio.  
- Permitir el rastreo de todas las páginas públicas.  
- Bloquear áreas privadas, páginas técnicas y resultados de búsqueda interna cuando corresponda.  
- Incluir la ubicación del `sitemap.xml`.  
- Comprobar antes de publicar que no bloquea accidentalmente páginas importantes.

### Meta Title

**Función:** definir el título de cada página que aparece en Google y en la pestaña del navegador.  
**Objetivo:** mejorar el posicionamiento y la tasa de clics.

**Requisitos de aceptación:**

- Cada página tendrá un Meta Title único y descriptivo.  
- Incluir la intención principal de búsqueda, la ubicación cuando aporte valor y la marca.  
- Evitar títulos duplicados, genéricos o excesivamente largos.  
- Utilizar los títulos SEO propuestos en este documento como base.

### Meta Description

**Función:** definir la descripción que Google puede mostrar bajo el título de la página.  
**Objetivo:** incrementar el porcentaje de clics desde los resultados de búsqueda.

**Requisitos de aceptación:**

- Cada página tendrá una Meta Description única y orientada al paciente.  
- Resumir claramente el contenido y beneficio principal de la página.  
- Incluir una llamada a la acción cuando resulte natural.  
- Evitar descripciones duplicadas o que no correspondan con el contenido real.

### URL canónica

**Función:** indicar cuál es la URL oficial de cada página.  
**Objetivo:** evitar problemas de contenido duplicado y consolidar las señales SEO.

**Requisitos de aceptación:**

- Configurar una etiqueta canónica autorreferenciada en cada página pública.  
- Utilizar siempre la versión definitiva con `https://www.fisioterapia3olivos.es/`.  
- Evitar que parámetros, versiones de prueba u otras variantes se consideren páginas diferentes.  
- Comprobar todas las URL canónicas antes de la migración y después de publicar.

### Verificación técnica final

- Revisar que no existan enlaces rotos ni errores `404` inesperados.  
- Verificar redirecciones `301` desde cualquier URL modificada.  
- Comprobar indexación, sitemap y robots en Google Search Console.  
- Comprobar rendimiento y experiencia móvil con PageSpeed Insights.  
- Revisar que teléfono, WhatsApp, mapa y enlaces internos funcionen correctamente.

## 11 bis. Medición de conversiones y analítica

**Función:** medir las conversiones reales (llamadas, WhatsApp, cómo llegar) sin comprometer la privacidad ni el rendimiento.

**Requisitos de aceptación:**

- Registrar como **eventos** los clics en: `Llamar` (cada enlace `tel:`), `WhatsApp` (cada enlace `wa.me`) y `Cómo llegar` (enlace a Google Maps).  
- Diferenciar el evento por la página de origen para saber dónde convierte mejor.  
- Elegir exclusivamente una solución de analítica **sin cookies y agregada**, sin identificar al visitante, para mantener el sitio sin banner. Cualquier proveedor que utilice cookies o identificadores queda descartado para esta versión.  
- La medición no debe alterar el funcionamiento de los enlaces de teléfono, WhatsApp o Cómo llegar.

**Pendiente de decisión:** proveedor de analítica concreto.

## 11 ter. Compartir enlaces (Open Graph) y WhatsApp

Dado que WhatsApp es la conversión secundaria, los enlaces compartidos por mensajería deben verse correctamente.

**Requisitos de aceptación:**

- Cada página define etiquetas **Open Graph**: `og:title`, `og:description`, `og:image`, `og:url` y `og:type`.  
- La `og:image` es una imagen real, nítida y con la marca, en proporción adecuada para previsualización (aprox. 1200×630).  
- Comprobar la previsualización al pegar un enlace en WhatsApp y en redes antes de dar por cerrada la migración.

## 11 quater. Accesibilidad (WCAG)

**Función:** garantizar que pacientes de cualquier edad y condición puedan usar la web.

**Requisitos de aceptación:**

- Contraste de texto suficiente sobre el fondo crema y, en especial, **validar el coral del CTA**: el texto sobre coral debe alcanzar contraste AA; si no, oscurecer el coral o usar texto blanco según corresponda.  
- Foco de teclado **visible** en enlaces y botones; navegación completa por teclado.  
- Botones de **Llamar** y **WhatsApp** con etiqueta accesible clara (no solo un icono).  
- Imágenes con texto alternativo descriptivo; imágenes decorativas marcadas como tales.  
- Jerarquía de encabezados correcta: un único `H1` por página y orden lógico de `H2`/`H3`.  
- Tamaño de toque adecuado en móvil para los accesos a teléfono y WhatsApp.

## 12\. Recursos necesarios

- Dirección postal completa y ubicación exacta del marcador.  
- Fotografía exterior de la entrada.  
- Fotografías actualizadas de instalaciones y equipamiento.  
- Fotografías profesionales del equipo.  
- Distintivo oficial INDIBA® autorizado.  
- Cinco reseñas reales seleccionadas.  
- Contenido y herramienta de visita virtual.  
- Enlace correcto de Instagram.  
- Textos legales: aviso legal, privacidad y cookies.

## 13\. Validaciones pendientes

1. Validar la descripción e indicaciones de fisioterapia dermatofuncional.  
2. Validar los textos de INDIBA® y neuromodulación.  
3. Validar las especialidades y biografías exactas de cada profesional.  
4. Confirmar la dirección postal completa.  
5. Seleccionar las cinco reseñas reales.  
6. Confirmar si la visita virtual actual cumple el modelo sin cookies; en caso contrario, sustituirla por una galería local.  
7. Validar la paleta propuesta frente al azul real de la clínica.  
8. **Decidido:** no se incluye ningún formulario (ni de consultas ni de reserva); el contacto es solo por teléfono y WhatsApp.  
9. Aportar los datos del titular para las páginas legales: denominación/razón social, NIF, dirección postal completa y correo de contacto legal.  
10. Aportar la latitud/longitud exactas del marcador para el mapa y el JSON-LD.  
11. Decidir el proveedor de analítica respetuoso con la privacidad (sección 11 bis).

## 14\. Criterio de aceptación

El documento podrá considerarse cerrado cuando:

- Los propietarios aprueben arquitectura, mensajes y textos.  
- Los contenidos clínicos sean validados por el equipo.  
- Estén disponibles fotografías, reseñas y recursos.  
- La paleta azul esté aprobada.  
- Todas las URLs y requisitos SEO estén confirmados.  
- Se hayan validado la experiencia móvil, lazy loading, sitemap, robots, metadatos y URL canónicas.  
- El repositorio Git esté conectado a Cloudflare Pages y el despliegue de validación sea reproducible desde la rama acordada.  
- Se haya comprobado que la web no instala cookies que requieran consentimiento ni muestra formularios.  
- Se disponga de la información legal y de contacto definitiva.

---

## Apéndice A. Prompts para Codificar (por tareas)

Este apéndice traduce los requisitos en prompts encadenados para implementar la web tarea a tarea. Cada tarea se valida antes de pasar a la siguiente. El sitio es estático (HTML/CSS/JS), versionado en Git y desplegado en Cloudflare Pages mediante integración con Git.

**Convención:** antes de cada tarea, indica en el prompt  el contexto del proyecto y este documento como fuente de verdad. Trabaja en una rama por tarea y valida en local/preview antes de fusionar.

### Tarea 0 — Base del proyecto

Crea la estructura base del sitio estático para Fisioterapia 3 Olivos: un único `index.html` por página, hoja de estilos común, carpeta de imágenes y JS mínimo. Aplica el look & feel de la sección 9 (editorial, fondo crema, tarjetas blancas, serif para títulos, sans legible, iconos lineales, bordes redondeados, sombras suaves) y la paleta azul de la sección 9, con el coral como acento del CTA. Implementa cabecera fija, menú de la sección 6, botón "Pedir cita" (que despliega Llamar/WhatsApp, sin reserva online) y el pie de la sección 7 con enlaces a las páginas legales. Mobile-first. Configura el proyecto para despliegue automático en Cloudflare Pages desde Git, sin conectar todavía el dominio de producción.

### Tarea 1 — Páginas legales (sin banner de cookies)

Implementa las páginas `/aviso-legal/`, `/privacidad/` y `/cookies/` con el alcance de la sección 8 bis (el sitio NO tiene formularios y NO usa cookies que requieran consentimiento). NO implementes banner de cookies. La política de cookies debe declarar que no se instalan cookies no esenciales. Deja como marcadores los datos del titular pendientes de aportar.

### Tarea 2 — Página de Contacto y mapa estático

Implementa `/contacto/` según la sección 8 (Página 8). Para el mapa, usa una **imagen estática** con el marcador de la clínica que enlaza a Google Maps en pestaña nueva (sección 8 ter), sin iframe ni scripts de Google y con lazy loading. Añade un botón "Cómo llegar". No cargues nada de Google hasta que el usuario pulse. Registra los eventos de conversión de la sección 11 bis.

### Tarea 3 — Inicio

Implementa la portada `/` con los ocho bloques de la Página 1, los H1/título SEO/metadescripción indicados y el cierre comercial común de la sección 7\. Inserta el JSON-LD `Physiotherapy` de la sección 10 bis con los datos marcados como pendientes en formato placeholder.

### Tarea 4 — Resto de páginas de contenido

Implementa `/presentacion/`, `/indicaciones/`, `/centro-indiba-r/`, `/conocenos/`, `/como-trabajamos/` y `/visita-virtual/` con los contenidos, H1, títulos SEO y metadescripciones de las Páginas 2 a 7\. Respeta las decisiones confirmadas de la sección 4 (INDIBA® con marca, ecografía sin "diagnóstica", neuromodulación incluida, sin punción seca, posicionamiento de Mercedes y Elena). Marca como pendientes de validación clínica los textos así señalados.

### Tarea 5 — SEO técnico y datos estructurados

Genera `sitemap.xml`, `robots.txt`, etiquetas canónicas autorreferenciadas, Meta Title y Meta Description únicos por página, Open Graph (sección 11 ter) y completa los datos estructurados (sección 10 bis). Añade enlaces internos según la sección 10\.

### Tarea 6 — Rendimiento, accesibilidad y QA

Aplica lazy loading (sección 11\) sin afectar al logotipo ni a la imagen principal. Cumple los requisitos de accesibilidad de la sección 11 quater (contraste del coral, foco visible, etiquetas de tel/WhatsApp, jerarquía de encabezados). Valida en 360/390/768 px y escritorio. Comprueba que no haya scroll horizontal ni saltos de contenido.

### Tarea 7 — Migración y verificación

Prepara las redirecciones 301 de la sección 10 ter a partir del rastreo de la web actual y configúralas en Cloudflare Pages. Tras conectar y publicar `www.fisioterapia3olivos.es`: verifica 301, ausencia de 404 inesperados, indexación, sitemap y robots en Search Console; mide rendimiento y móvil con PageSpeed Insights; comprueba clics de teléfono, WhatsApp y Cómo llegar; valida la previsualización Open Graph en WhatsApp.  
