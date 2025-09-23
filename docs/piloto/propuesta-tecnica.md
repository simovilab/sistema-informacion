# Propuesta del plan piloto

::: info Puntos clave

- Databús e Infobús son dos sistemas informáticos diseñados para la gestión integral de los sistemas de información para la movilidad inteligente.
- La implementación de Databús e Infobús es compatible con todos los principios y requisitos establecidos en este informe.
-

:::

El Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) pone a disposición del sector de transporte público dos sistemas informáticos para la implementación de un sistema de información para la movilidad inteligente como el descrito.

## Databús

Databús&reg; es una marca registrada de la Universidad de Costa Rica.

### Servidor Databús

(aplicación)

Servidor para la recolección y producción de datos GTFS

#### Databús _DB_

(componente de datos)

Base de datos relacional, geoespacial, de documentos y de series temporales

#### Databús _MEM_

(componente de datos)

Base de datos en memoria

#### Databús _API_

(componente de datos)

Interfaz de programación de aplicaciones tipo REST.

#### Databús _GraphQL_

(componente de datos)

Interfaz de programación de aplicaciones tipo GraphQL.

#### Databús _MQTT_

(componente de datos)

Intermediador de mensajes (_broker_) para recolección de datos de rastreo y telemetría de alta frecuencia

### Databús _GTFS_

(aplicación)

Aplicación de Django para gestión de bases de datos y tareas típicas con GTFS Schedule y Realtime

### Databús _App_

(aplicación)

Aplicación móvil operativa para recolección de datos de rastreo y telemetría de vehículos de transporte público

### Databús _Py_

(aplicación)

SDK de Python para control de Infobús

### Databús _Editor_

(aplicación): editor web para la creación de suministros (_feeds_) de GTFS Schedule

### Databús _CMS_

(aplicación)

Sistema de gestión de contenidos

### Databús _MCP_

(aplicación)

Servidor y cliente del protocolo de contexto de modelos (MCP, _Model Context Protocol_) para interacción con modelos extensos de lenguaje (LLM, _Large Language Models_)

### Databús _SIM_

(aplicación)

Simulador de datos en tiempo real para pruebas operativas

## Infobús

### Servidor Infobús

(aplicación): servidor para el consumo de datos del transporte público y distribución con múltiples protocolos a servicios de información

#### Infobús _DB_

(componente de datos): base de datos relacional, geoespacial, de documentos y de series temporales

#### Infobús _API_

(componente de datos): API REST

#### Infobús _GraphQL_

(componente de datos): API GraphQL

#### Infobús _SSE_

(componente de datos): interfaz de eventos enviados por el servidor (SSE, _Server-Sent Events_)

#### Infobús _WebSockets_

(componente de datos): interfaz de WebSockets

#### Infobús _Webhooks_

(componente de datos): interfaz de webhooks

#### Infobús _MQTT_

(componente de datos): intermediador de mensajes MQTT

#### Infobús _SPARQL_

(componente de datos): terminal de consultas SPARQL para bases de datos de tripletas (_triplestores_)

### Infobús _MCP_

(aplicación): servidor y cliente del protocolo de contexto de modelos (MCP, _Model Context Protocol_) para interacción con modelos extensos de lenguaje (LLM, _Large Language Models_)

### Infobús _Py_

(aplicación): SDK de Python para control de Infobús

### Infobús _Screens_

(aplicación): servidor para administración y distribución de datos de pantallas informativas

### Infobús _Display_

(aplicación): aplicación de _frontend_ para pantallas informativas basadas en tecnologías web

### Infobús _Signage_

(aplicación): para la creación programática de rotulación y señalética

### Infobús _Data_

(aplicación): servidor e interfaz para análisis y visualización de datos

### Infobús _Web_

(aplicación): sitio web de información para pasajeros

### Infobús _App_

(aplicación): aplicación móvil de información para pasajeros

### Infobús _CMS_

(aplicación): sistema de gestión de contenidos

## Centro de operaciones

Esta propuesta ofrece la creación de una **Unidad de Tecnologías Digitales del Transporte Público (UDTP)** para la gestión del sistema implementado, como una unidad centralizada especializada en tecnologías de información y comunicación.

Infobús&reg; es una marca registrada de la Universidad de Costa Rica.
