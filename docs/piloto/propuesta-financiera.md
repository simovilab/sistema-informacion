# Propuesta financiera

Los siguientes son costos estimados derivados de la propuesta la arquitectura tecnológica planteada en este informe.

## Fase de desarrollo

| Categoría            | Descripción                                | Monto    |
| -------------------- | ------------------------------------------ | -------- |
| Software             | Desarrollo de Databús e Infobús            | $285,000 |
| Preparación de datos | Generación de GTFS, levantamiento de campo | $5,000   |

**Subtotal desarrollo:** **$290,000**

## Fase de implementación (6 meses)

| Categoría                     | Descripción                                   |   Monto |
| ----------------------------- | --------------------------------------------- | ------: |
| Recursos humanos              | Salarios ($4,500/mes, 6 meses)                | $27,000 |
| Diseño gráfico y de servicios | Identidad visual, diseño UX/UI, materiales    |  $9,500 |
| Alquiler                      | Oficina / espacio ($1,000/mes, 6 meses)       |  $6,000 |
| Infraestructura en la nube    | Servidores y servicios ($400/mes, 6 meses)    |  $2,400 |
| Equipos de oficina            | Computadoras, periféricos                     | $12,000 |
| Dispositivos a bordo          | Dispositivos con GPS, interfaz y conectividad | $10,000 |
| Capacitación                  | Talleres a personal y conductores             |    $750 |
| Comunicación y difusión       | Campañas de lanzamiento y guías de usuario    |  $2,000 |

**Subtotal implementación:** **$69,650**

## Fase de operación (12 meses)

| Categoría                  | Descripción                                            |   Monto |
| -------------------------- | ------------------------------------------------------ | ------: |
| Recursos humanos           | Salarios ($4,500/mes, 12 meses)                        | $54,000 |
| Alquiler                   | Oficina / espacio ($1,000/mes, 12 meses)               | $12,000 |
| Infraestructura en la nube | Servidores y servicios ($400/mes, 12 meses)            |  $4,800 |
| Mantenimiento de equipos   | Repuestos y servicio técnico                           |  $6,000 |
| Licencias y servicios      | Mapas, SMS gateway, APIs externas                      |      $0 |
| Conectividad dispositivos  | Planes de datos ($4/dispositivo/mes, 150 dispositivos) |    $600 |

**Subtotal operación:** **$77,400**

## Otros costos estratégicos

| Categoría             | Descripción                                              |   Monto |
| --------------------- | -------------------------------------------------------- | ------: |
| Fondo de contingencia | 10% del total de desarrollo + implementación + operación | $44,905 |
| Fondo de reposición   | Sustitución de dispositivos (ciclo 3 a 5 años)           | $10,000 |

**Subtotal costos estratégicos:** **$54,905**

## Resumen

| Concepto                          |        Monto |
| --------------------------------- | -----------: |
| Subtotal desarrollo               |     $290,000 |
| Subtotal implementación           |      $69,650 |
| Subtotal operación                |      $77,400 |
| Otros (contingencia + reposición) |      $54,905 |
| **Total estimado**                | **$491,955** |

### Posibles descuentos

| Concepto                                                |        Monto |
| ------------------------------------------------------- | -----------: |
| **Total estimado preliminar**                           | **$491,955** |
| Donación en especie de Databús e Infobús                |    -$285,000 |
| Préstamo de espacio físico en la fase de desarrollo     |      -$6,000 |
| Acceso a infraestructura de TI en la fase de desarrollo |      -$2,400 |
| Préstamo de espacio físico en la fase de operación      |     -$12,000 |
| Acceso a infraestructura de TI en la fase de desarrollo |      -$4,800 |
| Mantenimiento institucional de equipos                  |      -$6,000 |
| Excepción de costos estratégicos                        |     -$54,905 |
| **Total estimado con posibles descuentos**              | **$120,850** |

## Desglose

### Equipos

| Cantidad | Descripción                         | Costo unitario |  Total |
| -------- | ----------------------------------- | -------------: | -----: |
| 4        | Pantallas                           |          $1000 |  $4000 |
| 3        | Computadoras de alto rendimiento    |          $2000 |  $6000 |
| 1        | Computadora de escritorio           |          $1000 |  $1000 |
| 1        | Computadora de control de pantallas |          $1000 |  $1000 |
|          |                                     |      **Total** | $12000 |

### Infraestructura en la nube

#### Aplicación

Servidores para la gestión de los datos del servicio de transporte público.

| Servidor        | Costo mensual |
| --------------- | ------------- |
| Databús         | 75            |
| Databús MQTT    | 25            |
| Databús MCP     | 25            |
| Infobús         | 75            |
| Infobús MQTT    | 25            |
| Infobús MCP     | 25            |
| Infobús Screens | 25            |
| Infobús SPARQL  | 11            |
| **Total**       | **286**       |

#### Monitoreo y seguridad

Servidores para el monitoreo de los servidores de la aplicación.

| Servidor        | Costo mensual |
| --------------- | ------------- |
| Wazuh Indexer   | 25            |
| Wazuh Server    | 25            |
| Wazuh Dashboard | 25            |
| Zabbix          | 25            |
| **Total**       | **100**       |

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
