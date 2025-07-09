# Objetivos

## Objetivo general

Modelar y desarrollar un **sistema de información para la movilidad inteligente en Costa Rica**, con énfasis en el transporte público, mediante el diseño de una **arquitectura tecnológica de referencia interoperable y abierta**, empleando metodologías de **ingeniería de sistemas y procesos participativos**, para lograr cumplir la necesidad de satisfacer la accesibilidad, calidad de servicio y la toma de decisiones en el sistema de transporte público.

   📖 **Más información**

   - [Desarrollo e implementación / Plan piloto](/desarrollo/piloto/index.md)

## Objetivos específicos

### Arquitectura tecnológica

1. Implementar un **concentrador de datos central para el procesamiento y distribución de información estructurada** y en tiempo real, mediante una API REST desarrollada bajo **especificaciones OpenAPI version 3.0**, con el fin de iterar sana y flexiblemente las plataformas de consulta y análisis de datos.

   📖 **Más información**

   - [Desarrollo e implementación / API](/desarrollo/componentes/api.md)
   - [Desarrollo e implementación / Databus](/desarrollo/arquitectura/databus.md)

2. Desarrollar un **modelo de arquitectura nacional interoperable para el sistema de información**, mediante la aplicación de **estándares como GTFS, ARC-IT y la metodología TOGAF** todo para permitir la integración eficiente de datos y subsistemas a escala país.

   📖 **Más información**

   - [Desarrollo e implementación / Aquitectura](/desarrollo/arquitectura/index.md)
   - [Desarrollo e implementación / Infobus](/desarrollo/arquitectura/infobus.md)

### Interfaces de usuario

3. Diseñar una **interfaz conversacional inteligente basada en modelos de lenguaje natural y el protocolo MCP**, mediante el desarrollo de un **chatbot multilingüe que consuma datos de la API Infobús**, con el fin de aumentar el acceso a información de horarios y servicios de transporte en tiempo real para la persona usuaria.

   📖 **Más información**

   - [Desarrollo y diseño / Chatbots](/desarrollo/componentes/chatbots.md)
   - [Desarrollo y diseño / Atención al cliente](/desarrollo/diseno/componentes/atencion-cliente.md)

4. Implementar un **chatbot de apoyo de errores con una interfaz conversacional** basada en **lenguaje natural mediante inteligencia artificial generativa**, utilizando modelos extensos de lenguaje integrados con el protocolo MCP y la API Infobús, para consultas desestructuradas en múltiples idiomas. Esto para facilitar el acceso a información de errores con el chatbot principial, mejorar la experiencia de la persona usuaria y garantizar accesibilidad a diversos perfiles de personas usuarias.

   📖 **Más información**

   - [Desarrollo y diseño / Experiencia persona usuaria](/desarrollo/diseno/experiencia/index.md)

### Proceso de diseño

5. Incorporar un **modelo participativo de diseño de sistema**, mediante la **consulta iterativa a partes interesadas** siguiendo marcos de diseño participativo para garantizar que el sistema diseñado satisface las necesidades reales de las personas usuarias, operadores y autoridades.

   📖 **Más información**

- [Desarrollo y diseño / Comunicación](/desarrollo/diseno/componentes/comunicacion.md)
- [Desarrollo y diseño / Accesibilidad](/desarrollo/diseno/experiencia/index.md)
   

6. Asegurar la **escalabilidad, seguridad y sostenibilidad del sistema**, mediante la definición de requisitos funcionales y no funcionales siguiendo los **principios de la ingeniería de sistemas orientada al estándar ISO/IEC/IEEE 24765**, esto para permitir su evolución tecnológica, protección de datos y continuidad operativa a lo largo del ciclo de vida del sistema.

   📖 **Más información**

   - [Desarrollo y diseño / Componentes del diseño](/desarrollo/diseno/componentes/index.md)
   - [Desarrollo y diseño / Requisitos](/desarrollo/diseno/experiencia/requisitos.md)

### Desarrollo e implementación

7. Desarrollar un **sistema de recolección en tiempo real de datos de telemetría y rastreo vehicular para autobuses** mediante un **servidor web , una API REST y una app móvil básica de recolección de datos desde el vehículo**. Con el fin de generar información precisa que permita alimentar sistemas de información para usuarios y aplicaciones de planificación de viajes.

   📖 **Más información**

   - [Desarrollo e implementación / Transmisión de datos](/desarrollo/tecnologias/telecomunicaciones.md)
   - [Desarrollo e implementación / Servidores](/desarrollo/componentes/servidores.md)

8. Implementar un **concentrador de datos para distribuir información del transporte público en tiempo real** a través de una **arquitectura basada en estándares abiertos y una API tipo REST**. Para permitir el consumo de información desde diversas plataformas como pantallas, aplicaciones móviles, sitios web y herramientas de análisis de datos.

   📖 **Más información**

   - [Desarrollo e implementación / Software](/desarrollo/tecnologias/software.md)
   - [Desarrollo e implementación / Pantallas](/desarrollo/componentes/pantallas.md)

### Operación y mantenimiento

9. Mantener un **sistema de información interoperable y tecnológicamente neutral** adoptando **estándares abiertos**, asegurando independencia de proveedores y facilitando la integración de componentes modulares. Para garantizar la sostenibilidad técnica del sistema, su expansión futura y su adaptación a distintos entornos tecnológicos del país.

   📖 **Más información**

   - [Desarrollo e implementación / Evolución](/diseno/operacion/evolucion.md)
   - [Desarrollo e implementación / Unidad](/diseno/operacion/unidad.md)

10. Operar un **sistema de información unificado y accesible para las personas usuarias** estandarizando los datos y **centralizando la arquitectura de información** para evitar fraccionamientos entre concesionarios. Para mejorar la calidad, consistencia y cobertura de la información disponible sobre el transporte público en Costa Rica.

   📖 **Más información**

   - [Desarrollo e implementación / Validación de la operación](/desarrollo/validacion.md)
   - [Desarrollo e implementación / Seguimiento de ciclo de vida del proyecto](/desarrollo/operacion/seguimiento.md)

### Referencias

1. Bahn S, Lee C, Nam CS, Yun MH (2009) Incorporating affective customer needs for luxuriousness into product design attributes. Human Factors and Ergonomics in Manufacturing 19(2):105–127

2. Drain A, Shekar A, Grigg N (2018) Insights, solutions and empowerment: a framework for
   evaluating participatory design. CoDesign:1-21

3. Farrell R, Hooker C (2013) Design, science and wicked problems. Des Stud 34:681-705
