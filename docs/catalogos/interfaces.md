<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# Interfaces

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0 |
| Fecha | 2025-09-18 |
| Descripción | A catalog of architectural interfaces for a Public Transportation Information System. |
| Autores | Oriana Mora López, Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY 4.0 |


<a id="interface-001"></a>
## User Authentication Interface

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:001</code></span>

- Descripción: Interface for user authentication and authorization.
- Tipo: REST API
- Protocolos: HTTPS
- DataFormats: JSON
- Seguridad: OAuth 2.0
- Versión: 1.0
- Responsable: Oriana Mora López
- Contacto: oriana.mora@ucr.ac.cr
- RelatedComponents: User Management Service, Frontend Application
- Estado: Active
- Documentación: https://docs.example.com/user-auth-interface

<a id="interface-002"></a>
## REST API

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:002</code></span>

- Descripción: Application programming interface based on the REST architectural style, used to connect distributed systems and facilitate data exchange between applications, web services, and databases.
- Tipo: REST API
- Protocolos: HTTP, HTTPS
- DataFormats: JSON, XML, Text
- Seguridad: OAuth 2.0, TLS
- Versión: 3.0
- Responsable: Architecture Team
- Contacto: simovi@ucr.ac.cr
- RelatedComponents: Frontend Application, Backend Services
- Estado: Active
- Documentación: https://www.ibm.com/think/topics/rest-apis

<a id="interface-003"></a>
## GraphQL API

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:003</code></span>

- Descripción: Query language for APIs that allows clients to request exactly the data they need, enabling flexible schema evolution and efficient data retrieval.
- Tipo: GraphQL
- Protocolos: HTTP, HTTPS
- DataFormats: JSON
- Seguridad: JWT, TLS
- Versión: 1.0
- Responsable: Architecture Team
- Contacto: simovi@ucr.ac.cr
- RelatedComponents: Frontend Application, Backend Services
- Estado: Active
- Documentación: https://aws.amazon.com/es/compare/the-difference-between-graphql-and-rest/

<a id="interface-004"></a>
## gRPC/Protobuf Interface

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:004</code></span>

- Descripción: Interface based on gRPC that uses Protocol Buffers for efficient serialization of structured data and remote service definition.
- Tipo: gRPC
- Protocolos: TCP, HTTP
- DataFormats: Protobuf, Binary
- Seguridad: TLS, mTLS
- Versión: 4.31.0
- Responsable: Architecture Team
- Contacto: simovi@ucr.ac.cr
- RelatedComponents: Backend Services
- Estado: Active
- Documentación: https://protobuf.dev/overview/

<a id="interface-005"></a>
## HTTP Protocol

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:005</code></span>

- Descripción: Fundamental protocol for web communication, used for information exchange between clients and servers.
- Tipo: REST API
- Protocolos: HTTP, HTTPS
- DataFormats: JSON, XML, Text, Binary
- Seguridad: TLS
- Versión: 2.0
- Responsable: Architecture Team
- Contacto: simovi@ucr.ac.cr
- RelatedComponents: Frontend Application, Backend Services
- Estado: Active
- Documentación: https://developer.mozilla.org/en-US/docs/Web/HTTP

<a id="interface-006"></a>
## WebSocket Interface

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:006</code></span>

- Descripción: Bidirectional real-time communication protocol between client and server, allowing messages to be sent at any time.
- Tipo: WebSocket
- Protocolos: WebSocket
- DataFormats: Text, Binary
- Seguridad: TLS
- Versión: 1.0
- Responsable: Architecture Team
- Contacto: simovi@ucr.ac.cr
- RelatedComponents: Frontend Application, Backend Services
- Estado: Active
- Documentación: https://developer.mozilla.org/en-US/docs/Web/HTTP

<a id="interface-007"></a>
## SSE Server-Sent Events

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:007</code></span>

- Descripción: Web technology that allows the server to automatically send data to the browser continuously through an open HTTP connection.
- Tipo: Event Stream
- Protocolos: HTTP, HTTPS
- DataFormats: Text
- Seguridad: TLS
- Versión: 1.0
- Responsable: Architecture Team
- Contacto: simovi@ucr.ac.cr
- RelatedComponents: Frontend Application, Backend Services
- Estado: Active
- Documentación: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events

<a id="interface-008"></a>
## ZIP File Transfer

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:008</code></span>

- Descripción: Compressed file format used to efficiently package and transfer files.
- Tipo: File Transfer
- Protocolos: HTTP, FTP, SFTP
- DataFormats: Binary
- Seguridad: TLS
- Versión: 6.3.10
- Responsable: Architecture Team
- Contacto: simovi@ucr.ac.cr
- RelatedComponents: Backend Services
- Estado: Active
- Documentación: https://www.loc.gov/preservation/digital/formats/fdd/fdd000362.shtml?utm
