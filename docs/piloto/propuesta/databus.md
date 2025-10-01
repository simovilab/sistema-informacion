# Databús

Implementación de la arquitectura A1.

## Databús

<CatalogItem catalog="applications" item="001" />

> Servidor para la recolección y producción de datos GTFS

| Información | Valor                                |
| ----------- | ------------------------------------ |
| Versión     | 0.2                                  |
| Repositorio | https://github.com/simovilab/databus |

### Relaciones con el sistema

| Relación          | Ítem de catálogo                                              |
| ----------------- | ------------------------------------------------------------- |
| implementa        | <CatalogItem catalog="principles" item="D02" show="name" />   |
| usado por         | <CatalogItem catalog="principles" item="A02" show="name" />   |
| es servido por    | <CatalogItem catalog="requirements" item="001" show="name" /> |
| es del interés de | <CatalogItem catalog="stakeholders" item="001" show="name" /> |

## Databús _DB_

(componente de datos)

Base de datos relacional, geoespacial, de documentos y de series temporales

## Databús _MEM_

(componente de datos)

Base de datos en memoria

## Databús _API_

(componente de datos)

Interfaz de programación de aplicaciones tipo REST.

## Databús _GraphQL_

(componente de datos)

Interfaz de programación de aplicaciones tipo GraphQL.

## Databús _MQTT_

(componente de datos)

Intermediador de mensajes (_broker_) para recolección de datos de rastreo y telemetría de alta frecuencia

## Databús _GTFS_

(aplicación)

Aplicación de Django para gestión de bases de datos y tareas típicas con GTFS Schedule y Realtime

## Databús _App_

(aplicación)

Aplicación móvil operativa para recolección de datos de rastreo y telemetría de vehículos de transporte público

## Databús _Py_

(aplicación)

SDK de Python para control de Infobús

## Databús _Editor_

(aplicación): editor web para la creación de suministros (_feeds_) de GTFS Schedule

## Databús _CMS_

(aplicación)

Sistema de gestión de contenidos

## Databús _MCP_

(aplicación)

Servidor y cliente del protocolo de contexto de modelos (MCP, _Model Context Protocol_) para interacción con modelos extensos de lenguaje (LLM, _Large Language Models_)

## Databús _SIM_

(aplicación)

Simulador de datos en tiempo real para pruebas operativas
