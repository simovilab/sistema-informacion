# Databús

::: info Descripción

Implementación de la arquitectura [A1](../../diseno/arquitectura/a1.md).

:::

## Databús _RT_

> Plataforma central de procesamiento que recolecta, valida y transforma datos de rastreo y telemetría del transporte público en tiempo real. Genera y mantiene suministros (_feeds_) actualizados de GTFS _Schedule_ y GTFS _Realtime_ para distribución a aplicaciones cliente y sistemas externos

| Información   | Valor                                                         |
| ------------- | ------------------------------------------------------------- |
| Arquitectura  | [A1-RT](../../diseno/arquitectura/a1#servidor-en-tiempo-real) |
| Clasificación | Aplicación                                                    |
| Versión       | 0.1.0                                                         |
| Repositorio   | https://github.com/simovilab/databus-rt                       |

### Tecnologías y estándares

| Categoría  | Nombre        | Versión |
| ---------- | ------------- | ------- |
| Tecnología | Django        | 5.1     |
| Tecnología | Python        | 3.12    |
| Estándar   | GTFS Schedule | -       |
| Estándar   | GTFS Realtime | -       |

### Subcomponentes

#### Databús _API_

> Interfaz de programación de aplicaciones (API) RESTful que proporciona acceso estructurado y escalable a datos operativos del sistema de transporte público

| Información   | Valor                                                       |
| ------------- | ----------------------------------------------------------- |
| Arquitectura  | [A1-RT-API](../../diseno/arquitectura/a1#interfaz-api-rest) |
| Clasificación | Interfaz                                                    |
| Versión       | 0.1.0                                                       |
| Repositorio   | https://github.com/simovilab/databus-rt                     |

##### Tecnologías y estándares

| Categoría  | Nombre                | Versión |
| ---------- | --------------------- | ------- |
| Tecnología | Django REST Framework | 3.15    |
| Estándar   | OpenAPI               | 3.0     |
| Estándar   | OAuth 2.0             | -       |
| Estándar   | JWT                   | -       |

#### Databús _GraphQL_

> Interfaz de programación de aplicaciones (API) GraphQL que permite consultas flexibles y eficientes mediante un esquema unificado

| Información   | Valor                                                              |
| ------------- | ------------------------------------------------------------------ |
| Arquitectura  | [A1-RT-GraphQL](../../diseno/arquitectura/a1#interfaz-api-graphql) |
| Clasificación | Interfaz                                                           |
| Versión       | 0.1.0                                                              |
| Repositorio   | https://github.com/simovilab/databus-rt                            |

##### Tecnologías y estándares

| Categoría  | Nombre                               | Versión   |
| ---------- | ------------------------------------ | --------- |
| Tecnología | Strawberry                           | 0.247     |
| Estándar   | [GraphQL](https://spec.graphql.org/) | June 2018 |

#### Databús _Queue_

> Sistema de gestión asíncrona de trabajos en segundo plano que permite el procesamiento diferido, priorizado y resiliente de operaciones intensivas o de larga duración

| Información   | Valor                                                      |
| ------------- | ---------------------------------------------------------- |
| Arquitectura  | [A1-RT-Queue](../../diseno/arquitectura/a1#cola-de-tareas) |
| Clasificación | Componente de procesamiento                                |
| Versión       | 0.1.0                                                      |
| Repositorio   | https://github.com/simovilab/databus-rt                    |

##### Tecnologías y estándares

| Categoría  | Nombre | Versión |
| ---------- | ------ | ------- |
| Tecnología | Celery | 5.4     |
| Tecnología | Redis  | 7.4     |

#### Databús _Stream_

> Motor de análisis continuo de datos en tiempo real que consume, transforma y enriquece flujos (_streams_) de eventos de telemetría vehicular

| Información   | Valor                                                                |
| ------------- | -------------------------------------------------------------------- |
| Arquitectura  | [A1-RT-Stream](../../diseno/arquitectura/a1#procesamiento-de-flujos) |
| Clasificación | Componente de procesamiento                                          |
| Versión       | 0.1.0                                                                |
| Repositorio   | https://github.com/simovilab/databus-stream                          |

##### Tecnologías y estándares

| Categoría  | Nombre                         | Versión |
| ---------- | ------------------------------ | ------- |
| Tecnología | [Bytewax](https://bytewax.io/) | 0.21    |
| Tecnología | Python                         | 3.12    |

## Databús _DB_

> Sistema de almacenamiento principal para datos operativos e históricos del transporte público, optimizado para consultas geoespaciales, análisis temporal y gestión de grandes volúmenes de información estructurada y semi-estructurada

| Información   | Valor                                               |
| ------------- | --------------------------------------------------- |
| Arquitectura  | [A1-DB](../../diseno/arquitectura/a1#base-de-datos) |
| Clasificación | Componente de datos                                 |
| Versión       | 0.1.0                                               |
| Repositorio   | https://github.com/simovilab/databus-rt             |

### Tecnologías y estándares

| Categoría  | Nombre     | Versión |
| ---------- | ---------- | ------- |
| Tecnología | PostgreSQL | 17      |
| Tecnología | PostGIS    | 3.5     |
| Tecnología | pgVector   | 0.8     |

## Databús _IMDB_

> Caché de alta velocidad para datos temporales de rastreo y telemetría que requieren acceso rápido durante el procesamiento en tiempo real. Actúa como _buffer_ entre la ingesta de datos y el almacenamiento persistente

| Información   | Valor                                                            |
| ------------- | ---------------------------------------------------------------- |
| Arquitectura  | [A1-IMDB](../../diseno/arquitectura/a1#base-de-datos-en-memoria) |
| Clasificación | Componente de datos                                              |
| Versión       | 0.1.0                                                            |
| Repositorio   | https://github.com/simovilab/databus-rt                          |

### Tecnologías y estándares

| Categoría  | Nombre | Versión |
| ---------- | ------ | ------- |
| Tecnología | Redis  | 7.4     |

## Databús _MQTT_

> Intermediador (_broker_) de mensajes de publicación/suscripción MQTT de alto desempeño especializado en telemetría vehicular y comunicación en tiempo real. Actúa como concentrador central para el intercambio de mensajes entre vehículos, sistemas de control y aplicaciones de monitoreo

| Información   | Valor                                                      |
| ------------- | ---------------------------------------------------------- |
| Arquitectura  | [A1-MQTT](../../diseno/arquitectura/a1#intermediador-mqtt) |
| Clasificación | Aplicación                                                 |
| Versión       | 0.1.0                                                      |
| Repositorio   | https://github.com/simovilab/databus-mqtt                  |

### Tecnologías y estándares

| Categoría  | Nombre   | Versión |
| ---------- | -------- | ------- |
| Tecnología | RabbitMQ | 4.0     |
| Estándar   | MQTT     | 5.0     |
| Estándar   | MQTT     | 3.1.1   |

## Databús _App_

> Aplicación móvil nativa diseñada para operadores de transporte público que combina funcionalidades de gestión operativa con capacidades de telemetría básica. Proporciona una interfaz intuitiva para el personal de campo con sincronización en tiempo real

| Información   | Valor                                                             |
| ------------- | ----------------------------------------------------------------- |
| Arquitectura  | [A1-APP](../../diseno/arquitectura/a1#aplicacion-movil-operativa) |
| Clasificación | Aplicación                                                        |
| Versión       | 0.1.0                                                             |
| Repositorio   | https://github.com/simovilab/databus-app                          |

### Tecnologías y estándares

| Categoría  | Nombre    | Versión |
| ---------- | --------- | ------- |
| Tecnología | Capacitor | 6.2     |
| Tecnología | Ionic     | 8.4     |
| Tecnología | Vue       | 3.5     |
