<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# Interfaces

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 0.1 |
| Fecha | 2025-11-13 |
| Descripción | Un catálogo de interfaces arquitectónicas para un Sistema de Información de Transporte Público. |
| Autores | Oriana Mora López, Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY 4.0 |


<a id="interface-001"></a>
## Databús API

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:001</code></span>

- Descripción: Es una interfaz de programación de aplicaciones que facilita la gestión y distribución de datos en tiempo real entre dispositivos y aplicaciones. API RESTful para acceder a datos de transporte público en tiempo real y datos históricos del sistema Databús.
- Tipo: Application Programming Interface (API)
- Protocolos: HTTPS, REST
- Formatos de datos: JSON
- Seguridad: API Keys, TLS
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Databús Backend, Databús Database
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/databus/api

<a id="interface-002"></a>
## Databús GraphQL

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:002</code></span>

- Descripción: Interfaz GraphQL es un lenguaje para consultas flexibles y eficientes de datos de transporte público del sistema Databús. El cliente recibe exactametne lo que pide, evitando sobrecarga de datos.
- Tipo: Query Interface
- Protocolos: HTTPS
- Formatos de datos: JSON
- Seguridad: API Keys, JWT
- Versión: 2021.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Databús Backend, Databús Database
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/databus/graphql

<a id="interface-003"></a>
## Databús MQTT

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:003</code></span>

- Descripción: Interfaz de mensajería MQTT, diseñado para comunicaciones de máxima eficiencia en redes con bajo ancho de banda, alta latencia o entornos inestables para la transmisión de datos de transporte en tiempo real desde dispositivos IoT al sistema Databús.
- Tipo: Message Queue
- Protocolos: TCP
- Formatos de datos: JSON, Binary
- Seguridad: TLS
- Versión: 3.1.1
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Databús IoT Gateway, Databús Backend
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/databus/mqtt

<a id="interface-004"></a>
## Infobús

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:004</code></span>

- Descripción: API RESTful para acceder a información de transporte público, rutas, horarios y servicios del sistema Infobús. Tambien llamado INTERBUS es un sistema de comunicación tipo fieldbus diseñado para transmitir datos entre controladores y módulos distribuidos de E/S (sensores, actuadores)
- Tipo: Application Programming Interface (API)
- Protocolos: HTTP, TCP, WebSocket
- Formatos de datos: JSON, XML
- Seguridad: OAuth 2.0
- Versión: 0.1.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús Backend, Infobús Database
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/api

<a id="interface-005"></a>
## Infobús SSE

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:005</code></span>

- Descripción: Interfaz de Server-Sent Events que se usa como canal estandarizado para que un servidor envíe datos al cliente en tiempo real mediante HTTP, para transmitir actualizaciones en tiempo real de transporte público a clientes web del sistema Infobús.
- Tipo: Event Stream
- Protocolos: HTTPS
- Formatos de datos: JSON, Text, XML
- Seguridad: TLS
- Versión: 0.1.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús Backend, Infobús Web Client
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/sse

<a id="interface-006"></a>
## Infobús WebSockets

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:006</code></span>

- Descripción: Interfaz WebSocket para comunicación bidireccional en tiempo real entre el sistema Infobús y aplicaciones cliente.
- Tipo: Event Stream
- Protocolos: TCP, HTTPS
- Formatos de datos: JSON, XML
- Seguridad: TLS
- Versión: 0.1.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús Backend, Infobús Mobile App, Infobús Web Client
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/websockets

<a id="interface-007"></a>
## Infobús SPARQL

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:007</code></span>

- Descripción: Interfaz SPARQL para consultas semánticas sobre datos enlazados de transporte público en el sistema Infobús.
- Tipo: Query Interface
- Protocolos: HTTPS
- Formatos de datos: JSON, XML
- Seguridad: OAuth 2.0, TLS
- Versión: 1.1.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús Knowledge Graph, Infobús RDF Store
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/sparql

<a id="interface-008"></a>
## Infobús MCP

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:008</code></span>

- Descripción: Interfaz de Protocolo de Contexto de Modelo (MCP) que permite a aplicaciones de IA acceder a datos y herramientas del sistema Infobús.
- Tipo: Remote Procedure Call (RPC)
- Protocolos: HTTPS, WebSocket
- Formatos de datos: JSON
- Seguridad: TLS
- Versión: 0.1.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús MCP Server, AI Applications
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/mcp
