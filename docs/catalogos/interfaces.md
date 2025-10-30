<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# Interfaces

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0 |
| Fecha | 2025-09-18 |
| Descripción | Catálogo de interfaces arquitectónicas para un sistema de información de transporte público. |
| Autores | Oriana Mora López, Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY 4.0 |


<a id="interface-001"></a>
## Interfaz de autenticación de usuario

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:001</code></span>

- Descripción: Interfaz para autenticación y autorización de usuarios.
- Tipo: REST API
- Protocolos: HTTPS
- Formatos de datos: JSON
- Seguridad: OAuth 2.0
- Versión: 1.0
- Responsable: Oriana Mora López
- Contacto: oriana.mora@ucr.ac.cr
- Componentes relacionados: Servicio de gestión de usuarios, Aplicación frontend
- Estado: Activo
- Documentación: https://docs.example.com/user-auth-interface

<a id="interface-002"></a>
## REST API

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:002</code></span>

- Descripción: Interfaz de programación de aplicaciones basada en el estilo arquitectónico REST, utilizada para conectar sistemas distribuidos y facilitar el intercambio de datos entre aplicaciones, servicios web y bases de datos.
- Tipo: REST API
- Protocolos: HTTP, HTTPS
- Formatos de datos: JSON, XML, Text
- Seguridad: OAuth 2.0, TLS
- Versión: 3.0
- Responsable: Equipo de arquitectura
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Aplicación frontend, Servicios backend
- Estado: Activo
- Documentación: https://www.ibm.com/think/topics/rest-apis

<a id="interface-003"></a>
## GraphQL API

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:003</code></span>

- Descripción: Lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan, facilitando la evolución flexible del esquema y la recuperación eficiente de datos.
- Tipo: GraphQL
- Protocolos: HTTP, HTTPS
- Formatos de datos: JSON
- Seguridad: JWT, TLS
- Versión: 1.0
- Responsable: Equipo de arquitectura
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Aplicación frontend, Servicios backend
- Estado: Activo
- Documentación: https://aws.amazon.com/es/compare/the-difference-between-graphql-and-rest/

<a id="interface-004"></a>
## Interfaz gRPC/Protobuf

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:004</code></span>

- Descripción: Interfaz basada en gRPC que utiliza Protocol Buffers para la serialización eficiente de datos estructurados y la definición de servicios remotos.
- Tipo: gRPC
- Protocolos: TCP, HTTP
- Formatos de datos: Protobuf, Binary
- Seguridad: TLS, mTLS
- Versión: 4.31.0
- Responsable: Equipo de arquitectura
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Servicios backend
- Estado: Activo
- Documentación: https://protobuf.dev/overview/

<a id="interface-005"></a>
## Protocolo HTTP

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:005</code></span>

- Descripción: Protocolo fundamental para la comunicación web, utilizado para el intercambio de información entre clientes y servidores.
- Tipo: REST API
- Protocolos: HTTP, HTTPS
- Formatos de datos: JSON, XML, Text, Binary
- Seguridad: TLS
- Versión: 2.0
- Responsable: Equipo de arquitectura
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Aplicación frontend, Servicios backend
- Estado: Activo
- Documentación: https://developer.mozilla.org/en-US/docs/Web/HTTP

<a id="interface-006"></a>
## Interfaz WebSocket

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:006</code></span>

- Descripción: Protocolo de comunicación bidireccional en tiempo real entre cliente y servidor, permitiendo el envío de mensajes en cualquier momento.
- Tipo: WebSocket
- Protocolos: WebSocket
- Formatos de datos: Text, Binary
- Seguridad: TLS
- Versión: 1.0
- Responsable: Equipo de arquitectura
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Aplicación frontend, Servicios backend
- Estado: Activo
- Documentación: https://developer.mozilla.org/en-US/docs/Web/HTTP

<a id="interface-007"></a>
## SSE Server-Sent Events

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:007</code></span>

- Descripción: Tecnología web que permite al servidor enviar datos automáticamente al navegador de forma continua a través de una conexión HTTP abierta.
- Tipo: Event Stream
- Protocolos: HTTP, HTTPS
- Formatos de datos: Text
- Seguridad: TLS
- Versión: 1.0
- Responsable: Equipo de arquitectura
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Aplicación frontend, Servicios backend
- Estado: Activo
- Documentación: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events

<a id="interface-008"></a>
## Transferencia de archivos ZIP

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:008</code></span>

- Descripción: Formato de archivo comprimido utilizado para empaquetar y transferir archivos de manera eficiente.
- Tipo: File Transfer
- Protocolos: HTTP, FTP, SFTP
- Formatos de datos: Binary
- Seguridad: TLS
- Versión: 6.3.10
- Responsable: Equipo de arquitectura
- Contacto: simovi@ucr.ac.cr
- Componentes relacionados: Servicios backend
- Estado: Activo
- Documentación: https://www.loc.gov/preservation/digital/formats/fdd/fdd000362.shtml?utm
