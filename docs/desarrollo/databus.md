# Databús

Implementación de la arquitectura A1.

## Databús (servidor)

Implementación de <CatalogItem catalog="applications" item="001" show="name" />

NOTA: mapear con una o varias entidades del metamodelo de TOGAF ADM

Application service

<CatalogItem catalog="applications" item="001" />

> Servidor para la recolección y producción de datos GTFS

| Información | Valor                                |
| ----------- | ------------------------------------ |
| Versión     | 0.2                                  |
| Repositorio | https://github.com/simovilab/databus |

### Tecnologías y estándares

| Relación | Ítem de catálogo                                              |
| -------- | ------------------------------------------------------------- |
| usa      | <CatalogItem catalog="technologies" item="001" show="name" /> |
| usa      | <CatalogItem catalog="entities" item="002" show="name" />     |

T: Django, Celery, Nginx, Daphne

## Databús _DB_

(componente de datos)

Base de datos relacional, geoespacial, de documentos y de series temporales

T: PostgreSQL, PostGIS, DocumentDB (Microsoft y Linux Foundation)

## Databús _MEM_

(componente de datos)

Base de datos en memoria

T: Redis

## Databús _API_

(componente de datos)

Interfaz de programación de aplicaciones tipo REST.

T: Django REST Framework (no está en el tech stack)
S: OpenAPI 3.0

## Databús _GraphQL_

(componente de datos)

Interfaz de programación de aplicaciones tipo GraphQL.

T: Strawberry
S: GraphQL

## Databús _MQTT_

(componente de datos)

Intermediador de mensajes (_broker_) para recolección de datos de rastreo y telemetría de alta frecuencia

T: RabbitMQ
S: MQTT (OASIS MQTT 5, MQTT 3.1.1)

## Databús _GTFS_

(aplicación)

Aplicación de Django para gestión de bases de datos y tareas típicas con GTFS Schedule y Realtime

T: Python, Django
S: GTFS vX.0 (buscar)

## Databús _App_

(aplicación)

Aplicación móvil operativa para recolección de datos de rastreo y telemetría de vehículos de transporte público

T: Capacitor, Ionic, Vue

## Databús _Py_

(aplicación)

SDK de Python para control de Infobús

T: Python

## Databús _Editor_

(aplicación): editor web para la creación de suministros (_feeds_) de GTFS Schedule

T: TypeScript, Vue, Nuxt
S: GTFS vX.0

## Databús _CMS_

(aplicación)

Sistema de gestión de contenidos

T: Strapi

## Databús _MCP_

(aplicación)

Servidor y cliente del protocolo de contexto de modelos (MCP, _Model Context Protocol_) para interacción con modelos extensos de lenguaje (LLM, _Large Language Models_)

T: FastMCP
S: MCP

## Databús _SIM_

(aplicación)

Simulador de datos en tiempo real para pruebas operativas

T: Python
