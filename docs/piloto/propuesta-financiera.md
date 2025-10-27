# Propuesta financiera

::: info Costo total estimado con deducciones aplicadas

El costo total del proyecto incluyendo las fases de desarrollo, implementación (6 meses), operación (12 meses) y otros costos estratégicos, junto con las deducciones aplicadas -asumiendo la colaboración institucional-, es de aproximadamente **$120.850,00**.

:::

En general, el proyecto subdivide los costos en las fases de desarrollo, implementación, operación y otros costos estratégicos.

| Concepto                |        Monto |
| ----------------------- | -----------: |
| Subtotal desarrollo     |     $290.000 |
| Subtotal implementación |      $69.650 |
| Subtotal operación      |      $77.400 |
| Subtotal otros costos   |      $54.905 |
| **Total estimado**      | **$491.955** |

Las siguientes deducciones pueden ser aplicadas con la colaboración institucional en algunos aspectos claves del desarrollo, implementación y operación.

| Concepto                                                |        Monto |
| ------------------------------------------------------- | -----------: |
| **Total estimado preliminar**                           | **$491.955** |
| Donación en especie de Databús e Infobús                |    -$285.000 |
| Préstamo de espacio físico en la fase de desarrollo     |      -$6.000 |
| Acceso a infraestructura de TI en la fase de desarrollo |      -$2.400 |
| Préstamo de espacio físico en la fase de operación      |     -$12.000 |
| Acceso a infraestructura de TI en la fase de operación  |      -$4.800 |
| Mantenimiento institucional de equipos                  |      -$6.000 |
| Excepción de costos estratégicos                        |     -$54.905 |
| **Total estimado con deducciones**                      | **$120.850** |

El desglose de los costos asociados con cada una de las fases del proyecto está especificado a continuación.

## Fase de desarrollo

| Categoría            | Descripción                                | Monto    |
| -------------------- | ------------------------------------------ | -------- |
| Software             | Desarrollo de Databús e Infobús            | $285.000 |
| Preparación de datos | Generación de GTFS, levantamiento de campo | $5.000   |

**Subtotal desarrollo:** **$290.000,00**

## Fase de implementación

**Duración**: 6 meses

| Categoría                     | Descripción                                   |   Monto |
| ----------------------------- | --------------------------------------------- | ------: |
| Recursos humanos              | Salarios ($4.500/mes, 6 meses)                | $27.000 |
| Diseño gráfico y de servicios | Identidad visual, diseño UX/UI, materiales    |  $9.500 |
| Alquiler                      | Oficina / espacio ($1.000/mes, 6 meses)       |  $6.000 |
| Infraestructura en la nube    | Servidores y servicios ($400/mes, 6 meses)    |  $2.400 |
| Equipos de oficina            | Computadoras, periféricos                     | $12.000 |
| Dispositivos a bordo          | Dispositivos con GPS, interfaz y conectividad | $10.000 |
| Capacitación                  | Talleres a personal y conductores             |    $750 |
| Comunicación y difusión       | Campañas de lanzamiento y guías de usuario    |  $2.000 |

**Subtotal implementación:** **$69.650,00**

### Equipos

| Cantidad | Descripción                         | Costo unitario |   Total |
| -------- | ----------------------------------- | -------------: | ------: |
| 4        | Pantallas                           |         $1.000 |  $4.000 |
| 3        | Computadoras de alto rendimiento    |         $2.000 |  $6.000 |
| 1        | Computadora de escritorio           |         $1.000 |  $1.000 |
| 1        | Computadora de control de pantallas |         $1.000 |  $1.000 |
|          |                                     |      **Total** | $12.000 |

### Infraestructura en la nube

#### Aplicación

Servidores para la gestión de los datos del servicio de transporte público.

| Servidor        | Costo mensual |
| --------------- | ------------- |
| Databús         | $75           |
| Databús MQTT    | $25           |
| Databús MCP     | $25           |
| Infobús         | $75           |
| Infobús MQTT    | $25           |
| Infobús MCP     | $25           |
| Infobús Screens | $25           |
| Infobús SPARQL  | $11           |
| **Total**       | **$286**      |

#### Monitoreo y seguridad

Servidores para el monitoreo de los servidores de la aplicación.

| Servidor        | Costo mensual |
| --------------- | ------------- |
| Wazuh Indexer   | $25           |
| Wazuh Server    | $25           |
| Wazuh Dashboard | $25           |
| Zabbix          | $25           |
| **Total**       | **$100**      |

## Fase de operación

**Duración**: 12 meses

| Categoría                  | Descripción                                            |   Monto |
| -------------------------- | ------------------------------------------------------ | ------: |
| Recursos humanos           | Salarios ($4.500/mes, 12 meses)                        | $54.000 |
| Alquiler                   | Oficina / espacio ($1.000/mes, 12 meses)               | $12.000 |
| Infraestructura en la nube | Servidores y servicios ($400/mes, 12 meses)            |  $4.800 |
| Mantenimiento de equipos   | Repuestos y servicio técnico                           |  $6.000 |
| Licencias y servicios      | Mapas, SMS gateway, APIs externas                      |      $0 |
| Conectividad dispositivos  | Planes de datos ($4/dispositivo/mes, 150 dispositivos) |    $600 |

**Subtotal operación:** **$77.400,00**

## Otros costos estratégicos

| Categoría             | Descripción                                              |   Monto |
| --------------------- | -------------------------------------------------------- | ------: |
| Fondo de contingencia | 10% del total de desarrollo + implementación + operación | $44.905 |
| Fondo de reposición   | Sustitución de dispositivos (ciclo 3 a 5 años)           | $10.000 |

**Subtotal costos estratégicos:** **$54.905,00**
