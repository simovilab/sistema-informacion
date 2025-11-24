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

- Descripción: API RESTful para acceder a datos de transporte público en tiempo real y datos históricos del sistema Databús.
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

- Descripción: Interfaz GraphQL para consultas flexibles y eficientes de datos de transporte público del sistema Databús.
- Tipo: Query Interface
- Protocolos: HTTPS
- Formatos de datos: JSON
- Seguridad: API Keys, TLS
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Databús Backend, Databús Database
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/databus/graphql

<a id="interface-003"></a>
## Databús MQTT

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:003</code></span>

- Descripción: Interfaz de mensajería MQTT para la transmisión de datos de transporte en tiempo real desde dispositivos IoT al sistema Databús.
- Tipo: Message Queue
- Protocolos: MQTT, TCP
- Formatos de datos: JSON, Binary
- Seguridad: TLS, Certificate Auth
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Databús IoT Gateway, Databús Backend
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/databus/mqtt

<a id="interface-004"></a>
## Infobús API

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:004</code></span>

- Descripción: API RESTful para acceder a información de transporte público, rutas, horarios y servicios del sistema Infobús.
- Tipo: Application Programming Interface (API)
- Protocolos: HTTPS, REST
- Formatos de datos: JSON
- Seguridad: OAuth 2.0, TLS
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús Backend, Infobús Database
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/api

<a id="interface-005"></a>
## Infobús GraphQL

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:005</code></span>

- Descripción: Interfaz GraphQL para consultas personalizadas de información de transporte público del sistema Infobús.
- Tipo: Query Interface
- Protocolos: HTTPS
- Formatos de datos: JSON
- Seguridad: OAuth 2.0, JWT, TLS
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús Backend, Infobús Database
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/graphql

<a id="interface-006"></a>
## Infobús SSE

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:006</code></span>

- Descripción: Interfaz de Server-Sent Events para transmitir actualizaciones en tiempo real de transporte público a clientes web del sistema Infobús.
- Tipo: Event Stream
- Protocolos: HTTPS, SSE
- Formatos de datos: JSON, Text
- Seguridad: JWT, TLS
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús Backend, Infobús Web Client
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/sse

<a id="interface-007"></a>
## Infobús WebSockets

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:007</code></span>

- Descripción: Interfaz WebSocket para comunicación bidireccional en tiempo real entre el sistema Infobús y aplicaciones cliente.
- Tipo: Event Stream
- Protocolos: WebSocket, HTTPS
- Formatos de datos: JSON
- Seguridad: JWT, TLS
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús Backend, Infobús Mobile App, Infobús Web Client
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/websockets

<a id="interface-008"></a>
## Infobús Webhooks

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:008</code></span>

- Descripción: Interfaz de webhooks para notificaciones basadas en eventos del sistema Infobús a servicios externos.
- Tipo: Event Stream
- Protocolos: HTTPS
- Formatos de datos: JSON
- Seguridad: JWT, API Keys, TLS
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús Backend, External Services
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/webhooks

<a id="interface-009"></a>
## Infobús MQTT

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:009</code></span>

- Descripción: Interfaz de mensajería MQTT para la publicación y suscripción de eventos de transporte en tiempo real del sistema Infobús.
- Tipo: Message Queue
- Protocolos: MQTT, TCP
- Formatos de datos: JSON
- Seguridad: TLS, Certificate Auth
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús Backend, Infobús IoT Devices
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/mqtt

<a id="interface-010"></a>
## Infobús SPARQL

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:010</code></span>

- Descripción: Interfaz SPARQL para consultas semánticas sobre datos enlazados de transporte público en el sistema Infobús.
- Tipo: Query Interface
- Protocolos: HTTPS
- Formatos de datos: JSON, XML
- Seguridad: OAuth 2.0, TLS
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús Knowledge Graph, Infobús RDF Store
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/sparql

<a id="interface-011"></a>
## Infobús MCP

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:011</code></span>

- Descripción: Interfaz de Protocolo de Contexto de Modelo (MCP) que permite a aplicaciones de IA acceder a datos y herramientas del sistema Infobús.
- Tipo: Remote Procedure Call (RPC)
- Protocolos: HTTPS, WebSocket
- Formatos de datos: JSON
- Seguridad: API Keys, TLS
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Infobús MCP Server, AI Applications
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/infobus/mcp

<a id="interface-012"></a>
## AdminTP Auth

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:012</code></span>

- Descripción: Interfaz de autenticación y autorización para el sistema administrativo de transporte público AdminTP.
- Tipo: Application Programming Interface (API)
- Protocolos: HTTPS
- Formatos de datos: JSON
- Seguridad: OAuth 2.0, JWT, TLS
- Versión: 1.0.0
- Responsable: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: AdminTP Backend, AdminTP Web Client, User Management System
- Estado: Active
- Documentación: https://docs.simovi.ucr.ac.cr/admintp/auth
