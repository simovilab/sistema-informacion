# Propuesta financiera

::: info Puntos clave

- La arquitectura tecnológica propuesta en este informe permite
- Síntesis de toda esta página

:::

Una unidad técnica de gestión de datos, compuesta por personal técnico especializado, es una propuesta de este informe.

## Resumen

Costos totales para la fase de desarrollo, implementación y un año de operación regular

## Fase de desarrollo

Esta es la fase de desarrollo del sistema informático, ajustado a las necesidades de la aplicación en Costa Rica.

## Fase de implementación

Esta es la fase de implementación (_deployment_) y pruebas para llevar el sistema a "producción", incluyendo el trabajo de gestión de la seguridad, confiabilidad y otras propiedades definidas.

## Fase de operación regular

### Instalaciones físicas

### Equipos

### Infraestructura en la nube

#### Aplicación

Servidores para la gestión de los datos del servicio de transporte público.

| Servidor        | Costo mensual (USD) |
| --------------- | ------------------- |
| Databús         | 75                  |
| Databús MQTT    | 25                  |
| Infobús         | 75                  |
| Infobús MQTT    | 25                  |
| Infobús Screens | 25                  |
| Infobús SPARQL  | 11                  |
| **Total**       | **236**             |

#### Monitoreo y seguridad

Servidores para el monitoreo de los servidores de la aplicación.

| Servidor        | Costo mensual (USD) |
| --------------- | ------------------- |
| Wazuh Indexer   | 25                  |
| Wazuh Server    | 25                  |
| Wazuh Dashboard | 25                  |
| Zabbix          | 25                  |
| **Total**       | **100**             |

Los detalles están a continuación.

#### Databús

Aplicaciones:

##### Rol

Servidor central para la recolección, procesamiento y construcción de datos GTFS Schedule y Realtime. Gestiona la base de datos principal, ejecuta tareas de procesamiento de datos de transporte público, y proporciona APIs REST y GraphQL para acceso a los datos estructurados.

##### Características

- 4 vCPU
- 16 GB RAM
- 120 GB almacenamiento

Referencia: [Linux Compute Bundle VPS 3](https://clientarea.racknation.cr/clients/cart/vps-computes-in-cr1-datacenter/&step=0)

#### Databús MQTT

**Rol**: intermediador de mensajes (_broker_) MQTT especializado para la recolección en tiempo real de datos de rastreo vehicular, telemetría y eventos operativos de alta frecuencia. Maneja miles de mensajes por segundo desde dispositivos móviles y sensores instalados en vehículos de transporte público.

- 2 vCPU
- 8 GB RAM
- 60 GB almacenamiento

Referencia: [Linux Compute Bundle VPS 2](https://clientarea.racknation.cr/clients/cart/vps-computes-in-cr1-datacenter/&step=0)

#### Infobús

**Rol**: servidor multi-protocolo para el consumo de datos GTFS y otros datos relacionados del transporte público, su procesamiento y distribución a múltiples servicios de información ciudadana. Proporciona APIs REST, GraphQL, WebSockets, Server-Sent Events y webhooks para alimentar aplicaciones web, móviles y pantallas informativas.

- 4 vCPU
- 16 GB RAM
- 120 GB almacenamiento

Referencia: [Linux Compute Bundle VPS 3](https://clientarea.racknation.cr/clients/cart/vps-computes-in-cr1-datacenter/&step=0)

#### Infobús MQTT

**Rol**: intermediador de mensajes (_broker_) MQTT dedicado a la distribución en tiempo real de información de transporte público hacia aplicaciones de usuario final, sistemas de terceros y servicios de información ciudadana. Facilita la comunicación bidireccional y notificaciones push instantáneas.

- 2 vCPU
- 8 GB RAM
- 60 GB almacenamiento

Referencia: [Linux Compute Bundle VPS 2](https://clientarea.racknation.cr/clients/cart/vps-computes-in-cr1-datacenter/&step=0)

#### Infobús SCREENS

**Rol**: servidor especializado para la gestión centralizada de pantallas informativas en paradas de autobús y estaciones de transporte público. Administra contenido dinámico, horarios de llegada en tiempo real, alertas operativas y rotulación digital, con capacidad de actualización remota y programación de contenidos.

- 2 vCPU
- 8 GB RAM
- 60 GB almacenamiento

Referencia: [Linux Compute Bundle VPS 2](https://clientarea.racknation.cr/clients/cart/vps-computes-in-cr1-datacenter/&step=0)

#### Infobús SPARQL

**Rol**: base de datos RDF (Resource Description Framework) y terminal de consultas SPARQL para gestión de datos semánticos y linked data del ecosistema de transporte público. Permite consultas complejas sobre relaciones entre entidades, interoperabilidad con sistemas externos y análisis avanzados de datos interconectados.

- 1 vCPU
- 4 GB RAM
- 30 GB almacenamiento

Referencia: [Linux Compute Bundle VPS 1](https://clientarea.racknation.cr/clients/cart/vps-computes-in-cr1-datacenter/&step=0)
