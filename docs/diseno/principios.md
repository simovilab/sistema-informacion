# Principios de diseño

::: info Puntos clave
- Desde su formulación en los años 90, las heurísticas de Nielsen han sido un referente en el diseño de interfaces centradas en el usuario, y mantienen su vigencia en procesos como la digitalización del transporte urbano, donde la usabilidad y la accesibilidad representan factores clave para mejorar la experiencia de uso.
- Las 10 heurísticas de Nielsen fueron seleccionadas por su eficacia en procesos de evaluación rápida de interfaces, permitiendo detectar problemas de usabilidad de forma accesible y con bajo requerimiento de recursos técnicos, lo que resulta adecuado para entornos en desarrollo.
- Las 10 heurísticas de Nielsen permiten mejorar la experiencia de usuario en plataformas digitales de transporte urbano, guiando el diseño de interfaces accesibles, seguras y centradas en las personas usuarias en el contexto costarricense.
- El enfoque considera distintos perfiles de uso —ciudadanía, desarrolladores y entes reguladores—, con interfaces accesibles, lenguaje natural, visualización clara y APIs bien documentadas, promoviendo una experiencia coherente y soporte en tiempo real.
- Estas heurísticas son clave en el desarrollo de soluciones como apps de movilidad, portales de consulta y sistemas de gestión, donde es fundamental integrar principios como accesibilidad, prevención de errores y flexibilidad para diferentes niveles de experiencia.
- El uso de estándares abiertos como GTFS y el principio de “Unicidad de la información” aseguran una fuente confiable y común de datos en tiempo real, accesible tanto desde interfaces tradicionales como desde asistentes con inteligencia artificial multilingüe.

:::

- Asignación: Fabián Abarca y Jose Blanco

## Interoperabilidad

> El transporte es una industria de alta tecnología. Los proveedores de servicios de movilidad necesitan componentes tecnológicos capaces de trabajar juntos en tiempo real utilizando formatos estándar.

### Principios de interoperabilidad de datos de movilidad

(MDIP, _Mobility Data Interoperability Principles_)

1. Todas los sistemas que creen, modifiquen o consuman datos de movilidad deben ser **interoperables**.
1. La interoperabilidad debe lograrse mediante el desarrollo, adopción e implementación generalizada de **estándares abiertos** que permitan el intercambio eficiente y la portabilidad de los datos de movilidad.
1. Las agencias de transporte y otros proveedores de servicios de movilidad deben tener acceso a herramientas que presenten datos de movilidad de alta calidad de manera accesible, equitativa y en tiempo real, para ayudar a los viajeros a satisfacer sus necesidades de movilidad.
1. Las agencias de transporte, otros proveedores de servicios de movilidad y los viajeros deben poder **seleccionar los componentes tecnológicos** de transporte que mejor se adapten a sus necesidades.
1. Todas las personas y el público en general deben estar empoderados, a través de datos de movilidad de alta calidad y bien distribuidos, para encontrar, acceder y utilizar opciones de movilidad de calidad que respondan a sus necesidades según lo consideren conveniente, manteniendo su privacidad.

### Marco Europeo de Interoperabilidad

(EIF, _European Interoperability Framework_)

1. Subsidiariedad y proporcionalidad
1. Apertura
1. Transparencia
1. Reutilización
1. Neutralidad tecnológica y portabilidad de los datos
1. Enfoque en el usuario
1. Inclusión y accesibilidad
1. Seguridad y privacidad
1. Multilingüismo
1. Simplificación administrativa
1. Preservación de la información
1. Evaluación de la eficacia y la eficiencia

### Principios MACH

- Componible (_composable_)
- Conectado (_connected_)
- Incremental (_incremental_)
- Abierto (_open_)
- Autónomo (_autonomous_)


## Heurísticas de Nielsen aplicadas a la modernización del sistema de transporte público en Costa Rica

La digitalización del transporte urbano requiere interfaces que no solo sean funcionales, sino también comprensibles, confiables y centradas en las personas. Las 10 heurísticas de usabilidad de Jakob Nielsen ofrecen un marco práctico para evaluar y mejorar la experiencia de usuario en sistemas digitales. A continuación, se presenta cómo estas heurísticas pueden aplicarse al diseño de plataformas, APIs e interfaces de información para el transporte público en Costa Rica, con el objetivo de garantizar accesibilidad, eficiencia y confianza en el uso de la tecnología por parte de todos los ciudadanos.

---
---
---

## 1. Visibilidad del estado del sistema
<details>
  <summary> Ampliar </summary>

> Los usuarios deben estar siempre informados sobre lo que está ocurriendo mediante **retroalimentación adecuada y oportuna**.

### Aplicación en transporte urbano

Las aplicaciones y sitios web deben informar a los usuarios sobre lo que está ocurriendo. El sistema propuesto busca esto mediante la entrega de datos **GTFS Realtime**, que incluyen la **posición geoespacial del vehículo**, **estimaciones actualizadas de tiempos de llegada** y alertas de interrupciones \[1]. Esta información en tiempo real, distribuida por la **API Infobús**, es fundamental para páginas web, aplicaciones móviles y **pantallas en paradas** \[1].

---
</details>

## 2. Concordancia entre el sistema y el mundo real
<details>
  <summary> Ampliar </summary>

> El sistema debe hablar el lenguaje del usuario, con palabras, frases y conceptos familiares.

### Aplicación en transporte urbano

El lenguaje y los conceptos deben ser familiares para el usuario. **GTFS** es el estándar de facto para describir el servicio de transporte público para los usuarios, facilitando una comprensión intuitiva en aplicaciones de planificación de viajes como Google Maps o Moovit \[1]. La propuesta de una interfaz de chat con inteligencia artificial generativa, que utiliza el **Protocolo de Contexto de Modelos (MCP)**, permite a los usuarios interactuar usando lenguaje natural y consultas desestructuradas en casi cualquier idioma, lo que se alinea con la forma en que las personas se comunican naturalmente \[2].

---
</details>

## 3. Control y libertad del usuario
<details>
  <summary> Ampliar </summary>

> Los usuarios necesitan "salidas de emergencia" para abandonar acciones por error.

### Aplicación en transporte urbano

Los usuarios deben poder deshacer acciones o salir fácilmente. Si bien no se detalla explícitamente en términos de "deshacer", el sistema se diseña para que los usuarios puedan planificar viajes multimodales \[1] y elegir entre diversas aplicaciones (propias o de terceros como Google Maps y Moovit) para acceder a la información, promoviendo la libertad de elección \[1].

---
</details>

## 4. Consistencia y estándares
<details>
  <summary> Ampliar </summary>

> Los usuarios no deberían tener que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo.

### Aplicación en transporte urbano

La adhesión a estándares es clave para la interoperabilidad. La propuesta enfatiza el uso de **GTFS (Schedule y Realtime)** como referencia principal, así como **ARC-IT**, **Smart Data Models**, **CAP** y **MDS**. Se establece el principio de "**Unicidad de la Información**" para asegurar datos consistentes y de una única fuente, y el de "**Vocabulario y Definiciones de Datos Comunes**" para la coherencia en todo el sistema \[1].

---
</details>

## 5. Prevención de errores
<details>
  <summary> Ampliar </summary>

> Mejor que buenos mensajes de error es un diseño que evite que ocurran.

### Aplicación en transporte urbano

Es mejor evitar que los errores ocurran. Al proporcionar información consistente y precisa \[1], y mediante la capacidad de la entidad "**Alerts**" de **GTFS Realtime** para informar sobre afectaciones al servicio \[3] \[4], se ayuda a los usuarios a evitar problemas en sus viajes. El editor **GTFS** también incluye validación de datos \[1].

---
</details>

## 6. Reconocer antes que recordar
<details>
  <summary> Ampliar </summary>

> Minimizar la carga de memoria del usuario mostrando elementos relevantes.

### Aplicación en transporte urbano

Minimizar la carga de memoria del usuario. La información del servicio (**horarios**, **rutas**, **paradas**, **tarifas**) se propone esté disponible de forma visible y accesible a través de páginas web, aplicaciones móviles y **pantallas informativas**, en lugar de requerir que el usuario la recuerde \[5]. Un sistema de **identidad visual** y **señalética** también contribuye a esto. La identidad visual, con elementos como colores y logotipos consistentes, ayuda a los usuarios a reconocer rápidamente el servicio y reduce la necesidad de memorizar información. La señalética, aplicada en paradas, vehículos y medios digitales, orienta a los usuarios de forma clara y uniforme, facilitando el acceso a la información en distintos espacios y plataformas.

---
</details>

## 7. Flexibilidad y eficiencia de uso
<details>
  <summary> Ampliar </summary>

> El sistema debe atender tanto a usuarios novatos como a expertos.

### Aplicación en transporte urbano

El sistema debe ser útil para usuarios principiantes y avanzados. Las APIs **Databús** e **Infobús** permiten a desarrolladores y científicos de datos acceder y utilizar la información de diversas maneras, desde análisis hasta la creación de nuevas aplicaciones \[4]. La interfaz de chat con IA ofrece una forma rápida y desestructurada de obtener información, adaptándose a diferentes necesidades.

---
</details>

## 8. Diseño estético y minimalista
<details>
  <summary> Ampliar </summary>

> Las interfaces no deben contener información irrelevante o raramente necesaria.

### Aplicación en transporte urbano

La información debe ser relevante y clara. Aunque no se especifica un estilo de diseño, los principios de "**Maximizar Beneficios para los Usuarios**" \[1] y "**Facilidad de Uso y Accesibilidad**" implican un diseño claro y sin sobrecarga de información en las plataformas digitales.

---
</details>

## 9. Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de errores
<details>
  <summary> Ampliar </summary>

> Los mensajes de error deben estar redactados en lenguaje claro, sin códigos técnicos.

### Aplicación en transporte urbano

En caso de problemas, el sistema debe facilitar la solución. La entidad "**Alerts**" de **GTFS Realtime** es un componente clave para informar sobre interrupciones, ayudando a los usuarios a comprender la situación y ajustar sus planes \[3].

---
</details>

## 10. Ayuda y documentación
<details>
  <summary> Ampliar </summary>

> Aunque idealmente no deberían necesitarla, los usuarios pueden requerir ayuda.

### Aplicación en transporte urbano

La disponibilidad de documentación clara es esencial. Las APIs **Databús** e **Infobús** cuentan con documentación completa \[6], y los proyectos están disponibles como código abierto en GitHub, lo que facilita su comprensión y uso por parte de desarrolladores y otros interesados.

---
</details>

---

### Términos para el glosario

<details>
  <summary> Ampliar </summary>

* **GTFS Realtime**
* **posición geoespacial del vehículo**
* **estimaciones actualizadas de tiempos de llegada**
* **API Infobús**
* **pantallas en paradas**
* **GTFS**
* **Protocolo de Contexto de Modelos (MCP)**
* **GTFS (Schedule y Realtime)**
* **ARC-IT**
* **Smart Data Models**
* **CAP**
* **MDS**
* **Unicidad de la Información**
* **Vocabulario y Definiciones de Datos Comunes**
* **Alerts**
* **horarios**
* **rutas**
* **paradas**
* **tarifas**
* **pantallas informativas**
* **identidad visual**
* **señalética**
* **Databús**
* **Infobús**
* **Maximizar Beneficios para los Usuarios**
* **Facilidad de Uso y Accesibilidad**

---
</details>


## Referencias

- [1] Abarca, F., Murillo, D., Segura, D., Vargas, J., Cordero, A., Murillo, E., Núñez, G., & Coto, M. (s.f.). A System-Level Design for a Public Transportation Information System in Costa Rica. School of Electrical Engineering, University of Costa Rica.
- [2] Abarca Calderón, F. (s.f.). Interfaz de lenguaje natural para un sistema de información del transporte público: A Natural Language Interface for a Passenger Information System in Public Transportation. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.
- [3] Abarca Calderón, F. (s.f.). Sistema de información para las personas usuarias del transporte público en Costa Rica: Information System for Public Transportation Users in Costa Rica. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.
- [4] Abarca Calderón, F., Cordero Méndez, A., & Murillo Mamani, E. J. (s.f.). Recolección en tiempo real de datos de telemetría y rastreo en el transporte público: Real-time Collection of Telemetry and Tracking Data in Public Transportation. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.
- [5] Abarca Calderón, F., & Araya Salazar, M. A. (s.f.). Estudio de la información del servicio de transporte público en Costa Rica: Study of Public Transportation Service Information in Costa Rica. Universidad de Costa Rica.
- [6] Abarca Calderón, F., Segura Cruz, J. D., & Vargas Céspedes, E. J. (s.f.). Concentrador de datos en tiempo real para servicios de información en el transporte público: Real-time Data Hub for Information Services in Public Transportation. Universidad de Costa Rica.
- [7] Maier, A., Oehmen, J., & Vermaas, P. E. (Eds.). (2022). *Handbook of Engineering Systems Design*. Springer Nature. https://doi.org/10.1007/978-3-030-81159-4
