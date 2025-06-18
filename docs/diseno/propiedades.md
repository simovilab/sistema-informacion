# Propiedades del sistema

::: info Puntos clave

- Lista de conclusiones importantes o mensajes clave (_key takeaways_)
- Síntesis de toda esta página

:::

- Asignación: Darío Guzmán
- Enfoque: desde la perspectiva de las propiedades deseadas del sistema y de su aplicación, cuáles son las propiedades que se deben considerar para el diseño y operación del sistema de información de transporte público inteligente.

## El transporte público inteligente como un sistema de sistemas

Un sistema de ingeniería está basado en una interconexión compleja de distintos subsistemas que trabajan en conjunto para brindar un servicio y cumplir con requisitos de funcionalidad. El transporte público inteligente por si mismo en un subsistema de ingeniería, que parte de un gran sistema como lo son las ciudades inteligentes [1]. Como un sistema de ingeniería, este debe cumplir con ciertos requerimientos que no impactan directamente en la funcionalidad del sistema, pero si en el éxito que se espera que tenga en un futuro, así como la ampliación de su ciclo de vida más allá de lo esperado.

Una propiedad se define como un atributo, cualidad o característica de alguna cosa en específico. Lo anterior hace referencia a la definición básica de una propiedad, pero en un sistema de ingeniería esta va más allá ya que, se especifican como requerimientos de diseño no funcionales [2]. De forma que, antes de empezar con el trabajo de montaje y diseño del sistema, es importante considerar antes las propiedades que se desean para ese sistema. 

## Partes del sistema de transporte público y sus propiedades
En esta sección se presentan las propiedades objetivo para el sistema de transporte público a diseñar. Muchas de estas están relacionadas directamente con el comportamiento informático interno (software), así como la interacción humana (usuarios, stakeholders y desarrolladores) y ciclo de vida edel sistema. Algunas propiedades deseadas para un sistema de transporte público se muestran en el cuadro I. 

### Cuadro I. Propiedades deseadas para un sistema de transporte público
| Propiedad         | Descripción breve                                                   |
|-------------------|----------------------------------------------------------------------|
| Flexibilidad       | Capacidad del sistema para operar por largos períodos sin fallas    |
| Accesibilidad     | Facilidad de acceso para los usuarios previstos                      |
| Tiempo de respuesta | Rapidez con la que el sistema reacciona a entradas               |
| Seguridad         | Protección contra accesos no autorizados y fallas                   |
| Mantenibilidad    | Facilidad para realizar mantenimiento y actualizaciones             |
| Interoperabilidad | Capacidad de comunicación existente entre los distintos “órganos”|
| Sostenibilidad    | El sistema de ser capaz de ser rentable durante su ciclo de vida |

Muchas de estas propiedades están directamente relacionadas directamente por qué rumbo se desea que vaya el sistema. Por ejemplo, en el caso de la flexibilidad, esta está enfocada en la capacidad que tendrá el sistema para mantener su funcionamiento independientemente del dipo de tecnología [3]. Es decir que, por ejemplo la transmisión de la información de los horarios, contratiempos, rutas entre otras puedan ser capaces de transmitirse por diversos medios como páginas web, aplicaciones entre otras. También el método de pago ya que, en la era digital, el dinero en efectivo es cada vez menos usado para el pago de transporte, es por ello que, el sistema debe ser flexible para tolerar tanto pago efectivo como digital.

Por otra parte, la seguridad es un factor muy importante para la aplicación de un sistema de transporte que amerite el pago del servicio a través medios digitales como tarjetas. Es un sistema que debe mantener su operación y soporte durante todo el tiempo de operación y, además, mantenerse lo menos interrumpido posible para evitar angustias a los pasajeeros.

No obstante, la propiedad más sonada dentro de las mencionadas es la interoperabilidad, la cual se define como la capacidad de comunicación existente entre los distintos “órganos”. De esto deriva la flexibilidad del sistema, propiedad ya anteriormente desarrollada. El sistema debe funcionar independientemente de la tecnología aplicada a su diseño. Dada la gran cantidad de relaciones de sistemas y subsistemas, la interoperabilidad es la principal propiedad que, permitirá la perduración del sistema más allá del ciclo de vida estimado [1]. 

## Norma ISO-25010 para la calidad del software
Como bien es esperable, un sistema de transporte público ingeligente moderno debe operar de acuerdo con la interacción de sistemas informáticos y de software. El software necesario para un sistema de ingeniería debe cumplir con parámetros de calidad que indican el cómo el producto logra satisfacer las necesidades de los usuarios. Esta necesidad de software de calidad está directamente relacionada con algunas propiedades deseadas para el sistema, las cuales se rigen según la norma ISO-25010. En el cuadro II que muestran las características de calidad según la ISO-25010.

### Cuadro I. CALIDAD DEL PRODUCTO SOFTWARE

| ADECUACIÓN FUNCIONAL         | EFICIENCIA DE DESEMPEÑO     | COMPATIBILIDAD         | CAPACIDAD DE INTERACCIÓN                   | FIABILIDAD            | SEGURIDAD            | MANTENIBILIDAD        | FLEXIBILIDAD        | PROTECCIÓN                |
|-----------------------------|------------------------------|------------------------|--------------------------------------------|------------------------|----------------------|------------------------|----------------------|----------------------------|
| COMPLETITUD FUNCIONAL       | COMPORTAMIENTO TEMPORAL     | COEXISTENCIA           | RECONOCIBILIDAD DE ADECUACIÓN              | AUSENCIA DE FALLOS     | CONFIDENCIALIDAD     | MODULARIDAD           | ADAPTABILIDAD       | RESTRICCIÓN OPERATIVA      |
| CORRECCIÓN FUNCIONAL        | UTILIZACIÓN DE RECURSOS     | INTEROPERABILIDAD      | APRENDIZABILIDAD                           | DISPONIBILIDAD         | INTEGRIDAD           | REUSABILIDAD          | ESCALABILIDAD       | IDENTIFICACIÓN DE RIESGOS  |
| PERTINENCIA FUNCIONAL       | CAPACIDAD                   |                        | OPERABILIDAD                               | TOLERANCIA A FALLOS    | NO-REPUDIO           | ANALIZABILIDAD        | INSTALABILIDAD      | PROTECCIÓN ANTE FALLOS     |
|                             |                              |                        | PROTECCIÓN FRENTE A ERRORES DE USUARIO     | RECUPERABILIDAD        | RESPONSABILIDAD      | CAPACIDAD DE SER MODIFICADO | REEMPLAZABILIDAD | ADVERTENCIA DE PELIGRO     |
|                             |                              |                        | INVOLUCRACIÓN DEL USUARIO                   |                        | AUTENTICIDAD         | CAPACIDAD DE SER PROBADO  |                      | INTEGRACIÓN SEGURA         |
|                             |                              |                        | INCLUSIVIDAD                                |                        | RESISTENCIA          |                        |                      |                            |
|                             |                              |                        | ASISTENCIA AL USUARIO                       |                        |                      |                        |                      |                            |
|                             |                              |                        | AUTO-DESCRIPTIVIDAD                         |                        |                      |                        |                      |                            |

Al realizar una comparativa entre el cuadro I de propiedades deseadas y el cuadro II extraído de la norma ISO-25010, muchas de las propiedades deseadas son parte de las necesarias para el desarrollo de sistemas de software de calidad, que directamente son aplicadas a sistemas de ingeniería más complejos. 

# Conclusioens
A partir de la exploración realizada, es sencillo concluir que el enfoque de las propiedades para el desarrollo del transporte público en Costa Rica está orientado a incentivar el desarrollo tecnológico en el ámbito del transporte siguiendo como principal propiedad la interoperabilidad y la flexibilidad del sistema. 

Por otra parte es importante concluir que, tanto la flexibilidad como la interoperabilidad son dos propiedades sumamente importantes que, según [2] son importantes para el éxito y la extensión de la vida útil del sistema de ingeniería.








### Referencias
[1] Bubelíny, O., & Kubina, M. (2021). Impact of the concept Smart City on public transport. Transportation Research Procedia, 55, 1361-1367.

[2] Maier, A., Oehmen, J., & Vermaas, P. E. (Eds.). (2022). Handbook of Engineering Systems Design. Springer.

[3] Abarca, F., Murillo, J. D., Segura, D., Vargas, J., Cordero, A., Murillo, E., ... & Coto, M. (2024, November). A System-Level Design for a Public Transportation Information System in Costa Rica. In 2024 IEEE 42nd Central America and Panama Convention (CONCAPAN XLII) (pp. 1-7). IEEE.
<Citation doi="10.1007/978-3-030-81159-4" />
