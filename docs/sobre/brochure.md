Convenciones:

- ⁠Tipografía: Inter https://fonts.google.com/specimen/Inter
- ⁠⁠Tipografía: Bitcount Light https://fonts.google.com/specimen/Bitcount
- ⁠⁠Colores: UCR
- ⁠⁠Logos: UCR, EIE, SIMOVI, databús, infobús, infotp, MobilityData
- ⁠⁠Logos de las tecnologías: https://github.com/simovilab/context/blob/main/tech_stack.md
- ⁠⁠Logos de tecnologías: https://icones.js.org/collection/simple-icons
- Tamaño de hoja: US Letter

# infotp

Arquitectura tecnológica y estrategia de comunicación para los sistemas de información del transporte público

_Resumen ejecutivo_

InfoTP es un sistema de principio a fin (_end-to-end_) de información para las personas usuarias del transporte público.

El Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) de la Escuela de Ingeniería Eléctrica (EIE) de la Universidad de Costa Rica (UCR) realiza investigación y desarrollo en sistemas inteligentes de transporte público.
InfoTP es un reporte técnico que reúne la investigación en tecnologías y estándares aplicados al transporte público, el diseño de sistemas de ingeniería y el diseño de servicios, como una guía práctica de diseño e implementación para tomadores de decisiones.

Con dos subsistemas, Databús® e Infobús®, y más de 20 proyectos de código abierto, este desarrollo pretende ser un referente tecnológico en el sector del transporte público inteligente.

También, el reporte incluye 17 catálogos con una recopilación exhaustiva de actores, organizaciones, principios, tecnologías, estándares, interfaces y otros elementos relevantes para el sistema.

Las tecnologías utilizadas son todas de código abierto, robustas y utilizadas en la industria en aplicaciones críticas como esta.

## Principios

Construimos nuestra arquitectura con base en las recomendaciones de los líderes internacionales en sistemas inteligentes de transporte público.

Somos miembros académicos de MobilityData, los gestores del estándar de facto GTFS (General Transit Feed Specification) para datos abiertos del servicio.

[Logo de MobilityData]

## Arquitectura

Sobre la base de datos abiertos y estandarizados y una arquitectura modular, nuestro sistema está preparado para incorporar nuevas aplicaciones futuras e interactuar con otros proveedores tecnológicos. Sabemos que el transporte público debe ser parte de las ciudades inteligentes y sentamos las bases para esta interconectividad.

### A1 | Databús®

Servicios

1. Recolección de datos de rastreo de vehículos con la aplicación móvil Databús App, como una solución efectiva y de bajo costo.
2. Recolección y procesamiento de datos en tiempo real de alta frecuencia.
3. Publicación de suministros (feeds) de GTFS Schedule y GTFS Realtime.

### A2 | Infobús®

Servicios

1. Compilación de suministros (feeds) de GTFS de diferentes fuentes y distribución de la información a diferentes servicios por múltiples canales y protocolos.
2. Página web informativa con información en tiempo real
3. Aplicación móvil con información en tiempo real
4. Sistema de pantallas con información en tiempo real
5. Planificación de viajes (A a B)
6. Búsquedas inteligentes con inteligencia artificial
7. Bases de datos especializadas para almacenamiento de datos históricos y análisis de datos para optimización del servicio
8. Búsquedas semánticas

### A3 | Infobús® Admin

Servicios

1. Editor con interfaz gráfica de usuario para la creación de suministros (feeds) GTFS Schedule, con validación y generación automática de estimación de tiempos.
2. Sistema de visualización de métricas de desempeño del sistema.
3. Sistema de gestión de contenidos de los canales de comunicación
4. Simulador de datos de transporte para pruebas del sistema

### A4 | Databús® Admin

Servicios

1. Monitoreo del desempeño del sistema para optimizar el tiempo de operación.
2. Atención de amenazas de seguridad y medidas

### A5 | Herramientas auxiliares

Servicios

1. Herramientas de programación en Python
2. Herramientas de programación en JavaScript
3. Creador automático de rotulación

## Tecnologías

Utilizamos una cuidadosa selección de tecnologías robustas y de código abierto.

[Lista de todas las tecnologías en GitHub en las secciones Backend Technologies, Frontend Technologies y DevOps Monitoring]
[Cuarta parte]

Nuestro sistema permite extender los alcances de la propuesta inicial con un costo adicional marginal.

## Las ventajas

Durante el año 2026, SIMOVI en conjunto con la Oficina de Servicios Generales (OSG) de la UCR desarrollará el plan piloto de un sistema de información del transporte público para el servicio de bus interno del campus universitario, el cual permitirá evaluar la propuesta de arquitectura tecnológica y la estrategia de comunicación en un ambiente de aplicación real y controlado.

[Logo UCR]
[Logo EIE]
[Logo SIMOVI]

Derechos reservados (C) 2025 Laboratorios de Sistemas Inteligentes de Movilidad
