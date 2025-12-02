# Infobús

::: info Descripción

Implementación de la arquitectura [A2](../../diseno/arquitectura/a2.md).

:::

## Infobús _RT_

> Plataforma central de procesamiento que recolecta suministros (_feeds_) actualizados de GTFS _Schedule_ y GTFS _Realtime_ para distribución a aplicaciones cliente y sistemas externos en múltiples formatos e interfaces

| Información   | Valor                                                         |
| ------------- | ------------------------------------------------------------- |
| Arquitectura  | [A2-RT](../../diseno/arquitectura/a2#servidor-en-tiempo-real) |
| Clasificación | Aplicación                                                    |
| Versión       | 0.1.0                                                         |
| Repositorio   | https://github.com/simovilab/infobus-rt                       |

### Tecnologías y estándares

| Categoría  | Nombre        | Versión |
| ---------- | ------------- | ------- |
| Tecnología | Django        | 5.1     |
| Tecnología | Python        | 3.12    |
| Estándar   | GTFS Schedule | -       |
| Estándar   | GTFS Realtime | -       |

### Relaciones con el sistema

| Relación | Ítem de catálogo                                              |
| -------- | ------------------------------------------------------------- |
| usa      | <CatalogItem catalog="technologies" item="001" show="name" /> |
| usa      | <CatalogItem catalog="entities" item="002" show="name" />     |

### Subcomponentes

#### Infobús _API_

> Interfaz de programación de aplicaciones (API) RESTful que proporciona acceso estructurado y escalable a datos del sistema de transporte público

| Información   | Valor                                                       |
| ------------- | ----------------------------------------------------------- |
| Arquitectura  | [A2-RT-API](../../diseno/arquitectura/a2#interfaz-api-rest) |
| Clasificación | Interfaz                                                    |
| Versión       | 0.1.0                                                       |
| Repositorio   | https://github.com/simovilab/infobus-rt                     |

##### Tecnologías y estándares

| Categoría  | Nombre                | Versión |
| ---------- | --------------------- | ------- |
| Tecnología | Django REST Framework | 3.15    |
| Estándar   | OpenAPI               | 3.0     |
| Estándar   | OAuth 2.0             | -       |
| Estándar   | JWT                   | -       |

#### Infobús _GraphQL_

> Interfaz de programación de aplicaciones (API) GraphQL que permite consultas flexibles y eficientes mediante un esquema unificado

| Información   | Valor                                                              |
| ------------- | ------------------------------------------------------------------ |
| Arquitectura  | [A2-RT-GraphQL](../../diseno/arquitectura/a2#interfaz-api-graphql) |
| Clasificación | Interfaz                                                           |
| Versión       | 0.1.0                                                              |
| Repositorio   | https://github.com/simovilab/infobus-rt                            |

##### Tecnologías y estándares

| Categoría  | Nombre                               | Versión   |
| ---------- | ------------------------------------ | --------- |
| Tecnología | Strawberry                           | 0.247     |
| Estándar   | [GraphQL](https://spec.graphql.org/) | June 2018 |

#### Infobús _SSE_

> Canal unidireccional servidor-a-cliente para enviar eventos en tiempo real sobre cambios de estado (vehículos, alertas, estimaciones) con baja sobrecarga y reconexión automática

| Información   | Valor                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Arquitectura  | [A2-RT-SSE](../../diseno/arquitectura/a2#interfaz-de-comunicacion-persistente-con-eventos-enviados-por-el-servidor-sse) |
| Clasificación | Interfaz                                                                                                                |
| Versión       | 0.1.0                                                                                                                   |
| Repositorio   | https://github.com/simovilab/infobus-rt                                                                                 |

##### Tecnologías y estándares

| Categoría  | Nombre                   | Versión |
| ---------- | ------------------------ | ------- |
| Tecnología | Django Channels          | 4.2     |
| Estándar   | Server-Sent Events (SSE) | -       |

#### Infobús _WebSockets_

> Canal bidireccional de baja latencia para intercambio interactivo de eventos y comandos (suscripciones dinámicas, eco de posición, telemetría y notificaciones)

| Información   | Valor                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------ |
| Arquitectura  | [A2-RT-WS](../../diseno/arquitectura/a2#interfaz-de-comunicacion-persistente-bidireccional-websockets) |
| Clasificación | Interfaz                                                                                               |
| Versión       | 0.1.0                                                                                                  |
| Repositorio   | https://github.com/simovilab/infobus-rt                                                                |

##### Tecnologías y estándares

| Categoría  | Nombre                                                              | Versión  |
| ---------- | ------------------------------------------------------------------- | -------- |
| Tecnología | Django Channels                                                     | 4.2      |
| Estándar   | [WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455) | RFC 6455 |

#### Infobús _Webhooks_

> Mecanismo de entrega tipo _push_ hacia sistemas externos mediante conexión HTTP cuando ocurren eventos (nuevas alertas, cambios de servicio, incidencias)

| Información   | Valor                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------- |
| Arquitectura  | [A2-RT-WH](../../diseno/arquitectura/a2#interfaz-de-notificaciones-http-salientes-webhooks) |
| Clasificación | Interfaz                                                                                    |
| Versión       | 0.1.0                                                                                       |
| Repositorio   | https://github.com/simovilab/infobus-rt                                                     |

##### Tecnologías y estándares

| Categoría | Nombre | Versión |
| --------- | ------ | ------- |
| Estándar  | HTTP   | 1.1     |
| Estándar  | HTTPS  | -       |

## Infobús _DB_

> Sistema de almacenamiento principal para datos operativos e históricos del transporte público, optimizado para consultas geoespaciales, análisis temporal y gestión de grandes volúmenes de información estructurada y semi-estructurada

| Información   | Valor                                               |
| ------------- | --------------------------------------------------- |
| Arquitectura  | [A2-DB](../../diseno/arquitectura/a2#base-de-datos) |
| Clasificación | Componente de datos                                 |
| Versión       | 0.1.0                                               |
| Repositorio   | https://github.com/simovilab/infobus-rt             |

### Tecnologías y estándares

| Categoría  | Nombre     | Versión |
| ---------- | ---------- | ------- |
| Tecnología | PostgreSQL | 17      |
| Tecnología | PostGIS    | 3.5     |
| Tecnología | pgVector   | 0.8     |

## Infobús _IMDB_

> Caché de alta velocidad para datos temporales de rastreo y telemetría que requieren acceso rápido durante el procesamiento en tiempo real. Actúa como _buffer_ entre la ingesta de datos y el almacenamiento persistente

| Información   | Valor                                                            |
| ------------- | ---------------------------------------------------------------- |
| Arquitectura  | [A2-IMDB](../../diseno/arquitectura/a2#base-de-datos-en-memoria) |
| Clasificación | Componente de datos                                              |
| Versión       | 0.1.0                                                            |
| Repositorio   | https://github.com/simovilab/infobus-rt                          |

### Tecnologías y estándares

| Categoría  | Nombre | Versión |
| ---------- | ------ | ------- |
| Tecnología | Redis  | 7.4     |

## Infobús _MQTT_

> Intermediador (_broker_) MQTT de alto desempeño especializado en actualizaciones de información en tiempo real. Actúa como concentrador central para el intercambio de mensajes entre el servidor y los servicios de información

| Información   | Valor                                                      |
| ------------- | ---------------------------------------------------------- |
| Arquitectura  | [A2-MQTT](../../diseno/arquitectura/a2#intermediador-mqtt) |
| Clasificación | Aplicación                                                 |
| Versión       | 0.1.0                                                      |
| Repositorio   | https://github.com/simovilab/infobus-mqtt                  |

### Tecnologías y estándares

| Categoría  | Nombre   | Versión |
| ---------- | -------- | ------- |
| Tecnología | RabbitMQ | 4.0     |
| Estándar   | MQTT     | 5.0     |
| Estándar   | MQTT     | 3.1.1   |

## Infobús _Web_

> Portal de información ciudadana con información del servicio, próximas llegadas, alertas y contenidos editoriales

| Información   | Valor                                                    |
| ------------- | -------------------------------------------------------- |
| Arquitectura  | [A2-WEB](../../diseno/arquitectura/a2#sitio-web-publico) |
| Clasificación | Aplicación                                               |
| Versión       | 0.1.0                                                    |
| Repositorio   | https://github.com/simovilab/infobus-web                 |

### Tecnologías y estándares

| Categoría  | Nombre     | Versión |
| ---------- | ---------- | ------- |
| Tecnología | TypeScript | 5.7     |
| Tecnología | Vue        | 3.5     |
| Tecnología | Nuxt       | 3.14    |
| Tecnología | Nuxt UI    | 2.19    |

## Infobús _Screens_

> Servidor para administración, orquestación y distribución de contenidos a pantallas en vehículos, paradas y estaciones, con aplicación web para kioscos/pantallas con renderizado optimizado y operación 24/7

| Información   | Valor                                                             |
| ------------- | ----------------------------------------------------------------- |
| Arquitectura  | [A2-SCREENS](../../diseno/arquitectura/a2#pantallas-informativas) |
| Clasificación | Aplicación                                                        |
| Versión       | 0.1.0                                                             |
| Repositorio   | https://github.com/simovilab/infobus-screens                      |

### Tecnologías y estándares

| Categoría  | Nombre       | Versión |
| ---------- | ------------ | ------- |
| Tecnología | Django       | 5.1     |
| Tecnología | TypeScript   | 5.7     |
| Tecnología | Vue          | 3.5     |
| Tecnología | Nuxt         | 3.14    |
| Tecnología | Tailwind CSS | 3.4     |

## Infobús _App_

> Aplicación móvil para personas usuarias con información en tiempo real, notificaciones y herramientas de planificación básica

| Información   | Valor                                                           |
| ------------- | --------------------------------------------------------------- |
| Arquitectura  | [A2-APP](../../diseno/arquitectura/a2#aplicacion-movil-publica) |
| Clasificación | Aplicación                                                      |
| Versión       | 0.1.0                                                           |
| Repositorio   | https://github.com/simovilab/infobus-app                        |

### Tecnologías y estándares

| Categoría  | Nombre    | Versión |
| ---------- | --------- | ------- |
| Tecnología | Capacitor | 6.2     |
| Tecnología | Ionic     | 8.4     |
| Tecnología | Vue       | 3.5     |

## Infobús _SPARQL_

> Terminal de consultas SPARQL para bases de datos de tripletas (_triplestores_) que permite consultas semánticas sobre datos de transporte público estructurados como grafos RDF

| Información   | Valor                                                                 |
| ------------- | --------------------------------------------------------------------- |
| Arquitectura  | [A2-SPARQL](../../diseno/arquitectura/a2#consultas-semanticas-sparql) |
| Clasificación | Interfaz                                                              |
| Versión       | 0.1.0                                                                 |
| Repositorio   | https://github.com/simovilab/infobus-sparql                           |

### Tecnologías y estándares

| Categoría  | Nombre                                          | Versión |
| ---------- | ----------------------------------------------- | ------- |
| Tecnología | Apache Jena Fuseki                              | 5.2     |
| Estándar   | [SPARQL](https://www.w3.org/TR/sparql11-query/) | 1.1     |

## Infobús _MCP_

> Servidor y cliente del protocolo de contexto de modelos (MCP, _Model Context Protocol_) para interacción con modelos extensos de lenguaje (LLM, _Large Language Models_)

| Información   | Valor                                                       |
| ------------- | ----------------------------------------------------------- |
| Arquitectura  | [A2-MCP](../../diseno/arquitectura/a2#servidor-cliente-mcp) |
| Clasificación | Aplicación                                                  |
| Versión       | 0.1.0                                                       |
| Repositorio   | https://github.com/simovilab/infobus-mcp                    |

### Tecnologías y estándares

| Categoría  | Nombre                                  | Versión |
| ---------- | --------------------------------------- | ------- |
| Tecnología | [FastMCP](https://gofastmcp.com/)       | 2.0     |
| Estándar   | [MCP](https://modelcontextprotocol.io/) | 0.1.0   |
