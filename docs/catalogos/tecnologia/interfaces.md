<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# Interfaces

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0 |
| Fecha | 2025-09-18 |
| Descripción | Un catálogo de interfaces arquitectónicas para un Sistema de Información de Transporte Público. |
| Autores | Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY 4.0 |


<a id="interface-001"></a>
## Interfaz de Autenticación de Usuario

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:001</code></span>

- Descripción: Interfaz para la autenticación y autorización de usuarios.
- Tipo: REST API
- Protocolos: HTTPS
- DataFormats: JSON
- Seguridad: OAuth 2.0
- Versión: 1.0
- Responsable: Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI)
- Contacto: simovi@ucr.ac.cr
- Estado: Activo
- Documentación: https://docs.example.com/user-auth-interface

<a id="interface-002"></a>
## Protocolo HTTP

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:002</code></span>

- Descripción: Protocolo fundamental para la comunicación web, utilizado para el intercambio de información entre clientes y servidores.
- Tipo: REST API
- Protocolos: HTTP, HTTPS
- DataFormats: JSON, XML, Texto, Binario
- Seguridad: TLS
- Versión: 2.0
- Responsable: Equipo de Arquitectura
- Contacto: simovi@ucr.ac.cr
- Estado: Activo
- Documentación: https://developer.mozilla.org/en-US/docs/Web/HTTP

<a id="interface-003"></a>
## REST API

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:003</code></span>

- Descripción: Interfaz de programación de aplicaciones basada en el estilo arquitectónico REST, utilizada para conectar sistemas distribuidos y facilitar el intercambio de datos entre aplicaciones, servicios web y bases de datos.
- Tipo: REST API
- Protocolos: HTTP, HTTPS
- DataFormats: JSON, XML, Texto
- Seguridad: OAuth 2.0, TLS
- Versión: 3.0
- Responsable: Equipo de Arquitectura
- Contacto: simovi@ucr.ac.cr
- Estado: Activo
- Documentación: https://www.ibm.com/think/topics/rest-apis

<a id="interface-004"></a>
## API GraphQL

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:004</code></span>

- Descripción: Lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan, habilitando una evolución flexible del esquema y una recuperación eficiente de datos.
- Tipo: GraphQL
- Protocolos: HTTP, HTTPS
- DataFormats: JSON
- Seguridad: JWT, TLS
- Versión: 1.0
- Responsable: Equipo de Arquitectura
- Contacto: simovi@ucr.ac.cr
- Estado: Activo
- Documentación: https://aws.amazon.com/es/compare/the-difference-between-graphql-and-rest/

<a id="interface-005"></a>
## Interfaz de usuario WEB (WUI)

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:005</code></span>

- Descripción: Protocolo de comunicación entre el usuario y una aplicación o bien un sitio web a través de un navegador web.
- Tipo: HTML
- Protocolos: HTTP
- DataFormats: HTML, JSON
- Seguridad: XSS
- Versión: HTTP/2
- Responsable: Equipo de Arquitectura
- Contacto: simovi@ucr.ac.cr
- Estado: Activo
- Documentación: https://www.ibm.com

<a id="interface-006"></a>
## Interfaz WebSocket

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:006</code></span>

- Descripción: Protocolo de comunicación bidireccional en tiempo real entre cliente y servidor, que permite enviar mensajes en cualquier momento.
- Tipo: WebSocket
- Protocolos: WebSocket
- DataFormats: Texto, Binario
- Seguridad: TLS
- Versión: 1.0
- Responsable: Equipo de Arquitectura
- Contacto: simovi@ucr.ac.cr
- Estado: Activo
- Documentación: https://developer.mozilla.org/en-US/docs/Web/HTTP

<a id="interface-007"></a>
## Interfaz MQTT

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:007</code></span>

- Descripción: Protocolo de comunicación basado en un modelo de publicación/suscripción; los dispositivos se conectan a un broker que filtra y distribuye mensajes.
- Tipo: MQTT
- Protocolos: TCP/IP
- DataFormats: JSON, Binario
- Seguridad: TLS, SSL
- Versión: 3.1.1
- Responsable: Equipo de Arquitectura
- Contacto: simovi@ucr.ac.cr
- Estado: Activo
- Documentación: https://mqtt.org

<a id="interface-008"></a>
## Interfaz gRPC

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:008</code></span>

- Descripción: Interfaz basada en gRPC que utiliza Protocol Buffers que actúa como un contrato para la comunicación entre aplicaciones. Usa definiciones de Protobuf para la comunicación RPC.
- Tipo: gRPC
- Protocolos: HTTP
- DataFormats: Protobuf
- Seguridad: TLS
- Responsable: Equipo de Arquitectura
- Contacto: simovi@ucr.ac.cr
- Estado: Activo
- Documentación: https://protobuf.dev/overview/

<a id="interface-009"></a>
## Interfaz Protobuf

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:009</code></span>

- Descripción: Interfaz basada en gRPC que utiliza Protocol Buffers para la serialización eficiente de datos estructurados y la definición de servicios remotos.
- Tipo: gRPC
- Protocolos: JSON, XML
- DataFormats: Binario
- Seguridad: TLS
- Versión: proto3
- Responsable: Equipo de Arquitectura
- Contacto: simovi@ucr.ac.cr
- Estado: Activo
- Documentación: https://protobuf.dev/overview/

<a id="interface-010"></a>
## SSE Eventos Enviados por el Servidor

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:010</code></span>

- Descripción: Tecnología web que permite al servidor enviar datos automáticamente al navegador de forma continua a través de una conexión HTTP abierta.
- Tipo: Flujo de Eventos
- Protocolos: HTTP, HTTPS
- DataFormats: Texto
- Seguridad: TLS
- Versión: 1.0
- Responsable: Equipo de Arquitectura
- Contacto: simovi@ucr.ac.cr
- Estado: Activo
- Documentación: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events

<a id="interface-011"></a>
## Transferencia de Archivos ZIP

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:011</code></span>

- Descripción: Formato de archivo comprimido utilizado para empaquetar y transferir archivos de manera eficiente.
- Tipo: Transferencia de Archivos
- Protocolos: HTTP, FTP, SFTP
- DataFormats: Binario
- Seguridad: TLS
- Versión: 6.3.10
- Responsable: Equipo de Arquitectura
- Contacto: simovi@ucr.ac.cr
- Estado: Activo
- Documentación: https://www.loc.gov/preservation/digital/formats/fdd/fdd000362.shtml
