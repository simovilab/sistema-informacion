# Objetivos

## Objetivo general

Modelar y desarrollar un **sistema de información para la movilidad inteligente en Costa Rica**, con énfasis en el transporte público, mediante el diseño de una **arquitectura tecnológica de referencia interoperable y abierta**, empleando metodologías de **ingeniería de sistemas y procesos participativos**, para lograr cumplir la necesidad de satisfacer la accesibilidad, calidad de servicio y la toma de decisiones en el sistema de transporte público.

## Objetivos específicos

### Arquitectura tecnológica

1. Implementar un **concentrador de datos central para el procesamiento y distribución de información estructurada** y en tiempo real, mediante una API REST desarrollada bajo **especificaciones OpenAPI version 3.0**, con el fin de iterar sana y flexiblemente las plataformas de consulta y análisis de datos.

   - [Desarrollo e implementación / Arquitectura](/desarrollo/arquitectura/index.md)

2. Desarrollar un **modelo de arquitectura nacional interoperable para el sistema de información**, mediante la aplicación de **estándares como GTFS, ARC-IT y la metodología TOGAF** todo para permitir la integración eficiente de datos y subsistemas a escala país.

### Interfaces de usuario

3. Diseñar una **interfaz conversacional inteligente basada en modelos de lenguaje natural y el protocolo MCP**, mediante el desarrollo de un **chatbot multilingüe que consuma datos de la API Infobús**, con el fin de aumentar el acceso a información de horarios y servicios de transporte en tiempo real para los usuarios.

4. Implementar un **chatbot de apoyo de errores con una interfaz conversacional** basada en **lenguaje natural mediante inteligencia artificial generativa**, utilizando modelos extensos de lenguaje integrados con el protocolo MCP y la API Infobús, para consultas desestructuradas en múltiples idiomas. Esto para facilitar el acceso a información de errores con el chatbot principial, mejorar la experiencia del usuario y garantizar accesibilidad a diversos perfiles de personas usuarias.

   - [Interfaces de usuario / Modelo visible](/desarrollo/diseno/experiencia/index.md)

### Proceso de diseño

5. Incorporar un **modelo participativo de diseño de sistema**, mediante la **consulta iterativa a partes interesadas** siguiendo marcos de diseño participativo para garantizar que el sistema diseñado satisface las necesidades reales de usuarios, operadores y autoridades.

6. Asegurar la **escalabilidad, seguridad y sostenibilidad del sistema**, mediante la definición de requisitos funcionales y no funcionales siguiendo los **principios de la ingeniería de sistemas orientada al estándar ISO/IEC/IEEE 24765**, esto para permitir su evolución tecnológica, protección de datos y continuidad operativa a lo largo del ciclo de vida del sistema.

   - [Carácter del diseño / Composición](/desarrollo/diseno/componentes/index.md)

### Desarrollo e implementación

7. Desarrollar un **sistema de recolección en tiempo real de datos de telemetría y rastreo vehicular para autobuses** mediante un **servidor web , una API REST y una app móvil básica de recolección de datos desde el vehículo**. Con el fin de generar información precisa que permita alimentar sistemas de información para usuarios y aplicaciones de planificación de viajes.

8. Implementar un **concentrador de datos para distribuir información del transporte público en tiempo real** a través de una **arquitectura basada en estándares abiertos y una API tipo REST**. Para permitir el consumo de información desde diversas plataformas como pantallas, aplicaciones móviles, sitios web y herramientas de análisis de datos.

   - [Realización del proceso / Aplicación](/desarrollo/piloto/index.md)

### Operación y mantenimiento

9. Mantener un **sistema de información interoperable y tecnológicamente neutral** adoptando **estándares abiertos**, asegurando independencia de proveedores y facilitando la integración de componentes modulares. Para garantizar la sostenibilidad técnica del sistema, su expansión futura y su adaptación a distintos entornos tecnológicos del país.

10. Operar un **sistema de información unificado y accesible para las personas usuarias** estandarizando los datos y **centralizando la arquitectura de información** para evitar fraccionamientos entre concesionarios. Para mejorar la calidad, consistencia y cobertura de la información disponible sobre el transporte público en Costa Rica.

   - [Evolución del sistema / Seguimiento](/desarrollo/operacion/index.md)

### Referencias

1. Bahn S, Lee C, Nam CS, Yun MH (2009) Incorporating affective customer needs for luxuriousness into product design attributes. Human Factors and Ergonomics in Manufacturing 19(2):105–127

2. Drain A, Shekar A, Grigg N (2018) Insights, solutions and empowerment: a framework for
   evaluating participatory design. CoDesign:1-21

3. Farrell R, Hooker C (2013) Design, science and wicked problems. Des Stud 34:681-705
