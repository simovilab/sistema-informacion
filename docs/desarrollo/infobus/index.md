# Infobús

Implementación de la arquitectura A2.

## Infobús

<CatalogItem catalog="applications" item="001" />

> Servidor para la recolección y producción de datos GTFS

| Información | Valor                                |
| ----------- | ------------------------------------ |
| Versión     | 0.2                                  |
| Repositorio | https://github.com/simovilab/databus |

### Relaciones con el sistema

| Relación | Ítem de catálogo                                              |
| -------- | ------------------------------------------------------------- |
| usa      | <CatalogItem catalog="technologies" item="001" show="name" /> |
| usa      | <CatalogItem catalog="entities" item="002" show="name" />     |

## Infobús _DB_

(componente de datos): base de datos relacional, geoespacial, de documentos y de series temporales

T: PostgreSQL, PostGIS, DocumentDB

## Infobús _MEM_

(componente de datos)

Base de datos en memoria

T: Redis

## Infobús _API_

(componente de datos): API REST

T: Django REST Framework

## Infobús _GraphQL_

(componente de datos): API GraphQL

T: Strawberry

## Infobús _SSE_

(componente de datos): interfaz de eventos enviados por el servidor (SSE, _Server-Sent Events_)

T: Django Channels (no está en el teck stack)
S:

## Infobús _WebSockets_

(componente de datos): interfaz de WebSockets

T: Django Channels (no está en el teck stack)
S: IETF RFC 6455

## Infobús _Webhooks_

(componente de datos): interfaz de webhooks

## Infobús _MQTT_

(componente de datos): intermediador de mensajes MQTT

T: RabbitMQ
S: MQTT 5 3.1.1

## Infobús _SPARQL_

(componente de datos): terminal de consultas SPARQL para bases de datos de tripletas (_triplestores_)

T: Apache Jena Fuseki
S: SPARQL (1.1) (https://www.w3.org/TR/sparql11-query/)

## Infobús _MCP_

(aplicación): servidor y cliente del protocolo de contexto de modelos (MCP, _Model Context Protocol_) para interacción con modelos extensos de lenguaje (LLM, _Large Language Models_)

T: FastMCP
S: MCP (buscar versión)

## Infobús _Py_

(aplicación): SDK de Python para control de Infobús

T: Python

## Infobús _Screens_

(aplicación): servidor para administración y distribución de datos de pantallas informativas

T: Django

## Infobús _Display_

(aplicación): aplicación de _frontend_ para pantallas informativas basadas en tecnologías web

T: TypeScript, Vue, Nuxt, Tailwind (no está en el teck stack)

## Infobús _Signage_

(aplicación): para la creación programática de rotulación y señalética

T: Python

## Infobús _Data_

(aplicación): servidor e interfaz para análisis y visualización de datos

T: Grafana

## Infobús _Web_

(aplicación): sitio web de información para pasajeros

T: TypeScript, Vue, Nuxt, Nuxt UI

## Infobús _App_

(aplicación): aplicación móvil de información para pasajeros

T: Capacitor, Ionic, Vue

## Infobús _CMS_

(aplicación): sistema de gestión de contenidos

T: Strapi
