# Seguimiento y evaluación

::: info Puntos clave

- Lista de conclusiones importantes o mensajes clave (_key takeaways_)
- Síntesis de toda esta página

:::

# Evolución

::: info Puntos clave

- Exploración de la evolución no lineal del transporte público como **sistema socio-técnico**, integrando marcos como el pensamiento sistémico y la fase de Gestión del Cambio de TOGAF para entender su comportamiento emergente y dinámico.

- La gestión adaptativa de estos sistemas es crucial para asegurar su resiliencia y sostenibilidad, ya que pequeños cambios pueden generar efectos desproporcionados y requieren respuestas ágiles, éticas y colaborativas.

- La propuesta se implementa mediante arquitecturas flexibles, estándares abiertos, **gobernanza policéntrica**, retroalimentación continua y alineación de actores clave mediante comunicación estratégica y diseño participativo.

:::

## Bases Teóricas

### Pensamiento sistémico

La evolución de los sistemas complejos, como el transporte público, es intrínsecamente no lineal, impredecible y emergente. Estos sistemas están conformados por componentes técnicos (infraestructura, software, hardware), sociales (usuarios, operadores, autoridades) y ambientales (condiciones climáticas, urbanización), cuyas interacciones dinámicas generan comportamientos imposibles de prever desde una visión reduccionista.

Desde la perspectiva del **pensamiento sistémico**, los sistemas deben entenderse como totalidades organizadas donde el todo es más que la suma de sus partes. Las cuatro olas del pensamiento sistémico (duro, blando, crítico y cognitivo) aportan enfoques complementarios para comprender y actuar sobre esta complejidad (Kaur & Craven, 2022).

flowchart TD
A1["**Sistemas duros**
Optimización técnica"]
A1 --> A2["**Sistemas blandos**
Perspectivas humanas"]
A2 --> A3["**Pensamiento crítico**
Poder y Ética"]
A3 --> A4["**Enfoque cognitivo**
Modelos mentales compartidos"]

### Gestión del Cambio Arquitectónico

En este contexto, el marco **ADM** de TOGAF, especialmente su Fase H,Gestión del Cambio Arquitectónico (The Open Group, s.f.), permite estructurar la evolución mediante:

- Monitoreo de desencadenantes técnicos, sociales o normativos.

- Gobernanza de transiciones arquitectónicas.

- Validación de principios como la interoperabilidad y la neutralidad tecnológica.

flowchart TD
H1[Disparador de cambio]
H1 --> H2[Evaluar impacto del cambio]
H2 --> H3[Desarrollar plan de transición]
H3 --> H4[Implementar cambios arquitectónicos]
H4 --> H5[Monitorear implementación]
H5 --> H6[Revisión y retroalimentación]

La gestión de estos sistemas no busca soluciones definitivas, sino una capacidad continua de adaptación y aprendizaje colectivo, donde cada interacción redefine parcialmente el sistema (Cilliers, 2000).

## Acciones prácticas para implementar una gestión evolutiva

### 1. Diseñar arquitecturas flexibles

- Uso de microservicios para permitir integración ágil de nuevos módulos.

- Estándares abiertos como GTFS para interoperabilidad.

### 2. Implementar monitoreo continuo del entorno

- Sistemas de alerta temprana con indicadores de crisis (sociales, climáticos, técnicos).

- Protocolos como **CAP** para responder ante eventos disruptivos.

### 3. Adoptar bucles de retroalimentación sistémica

- Incorporación de mecanismos de aprendizaje: cuadro de mando, indicadores clave de desempeño en tiempo real.

- Evaluaciones participativas con personas usuarias y personas operadoras.

### 4. Fomentar gobernanza policéntrica y coordinación multinivel

- Incluir al CTP, MOPT, municipios y operadores privados en decisiones estratégicas.

- Mesas técnicas permanentes y herramientas de co-creación.

### 5. Alinear modelos mentales entre actores clave

- Campañas de comunicación integradas.

- Diseño participativo de interfaces y servicios.

### 6. Evitar enfoques cerrados o definitivos

- Planificación iterativa y evolutiva.

- Revisión periódica de principios y supuestos.

flowchart TD
A["Condiciones del entorno"] --> B["Interacciones técnicas, sociales y ambientales"]
B --> C["Comportamientos emergentes"]
C --> D{"¿Se requiere adaptación?"}
D -- Sí --> E(["Activar gestión del cambio arquitectónico"])
D -- No --> F["Continuar monitoreo"]
E --> G["Ajustes arquitectónicos y de gobernanza"]
G --> H["Validación y comunicación con actores"]
H --> I["Revisión de indicadores y principios"]
I --> J["Iteración y evolución del sistema"]

    A@{ shape: trap-t}
    J@{ shape: stored-data}

## Referencias

[1] Kaur, M., & Craven, L. (2022). Systems Thinking: Practical Insights on Systems-Led Design in Socio-Technical Engineering Systems. En Handbook of Engineering Systems Design (pp. 189-217). Springer International Publishing. https://doi.org/10.1007/978-3-030-81159-4_36

[2] The Open Group. (s.f.). TOGAF Standard — Architecture Development Method (ADM): H. Architecture Change Management. https://www.opengroup.org/togaf

[3] Cilliers, P. (2000). What Can We Learn From a Theory of Complexity? Emergence, 2(1), 23–33. https://doi.org/10.1207/S15327000EM0201_03

[4] Abarca Calderón, F. (s.f.). Sistema de información para las personas usuarias del transporte público en Costa Rica. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.

[5]Abarca Calderón, F., Cordero Méndez, A., & Murillo Mamani, E. J. (s.f.). Recolección en tiempo real de datos de telemetría y rastreo en el transporte público. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.

[6]Abarca Calderón, F., Segura Cruz, J. D., & Vargas Céspedes, E. J. (s.f.). Concentrador de datos en tiempo real para servicios de información en el transporte público. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.

[7] Sevaldson, B. (2017). Redesigning Systems Thinking. FormAkademisk, 10(1). https://doi.org/10.7577/formakademisk.1755

[8] Cilliers, P. (2000). What Can We Learn From a Theory of Complexity? Emergence, 2(1), 23–33. https://doi.org/10.1207/S15327000EM0201_03

[9] Gerald Midgley, “Systemic Intervention for Public Health”, American Journal of Public Health 96, no. 3 (March 1, 2006): pp. 466-472. https://doi.org/10.2105/AJPH.2005.067660

[10] Abarca, F., Murillo, D., Segura, D., Vargas, J., Cordero, A., Murillo, E., Núñez, G., & Coto, M. (s.f.). A System-Level Design for a Public Transportation Information System in Costa Rica. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.

[11] Abarca Calderón, F., & Araya Salazar, M. A. (s.f.). Estudio de la información del servicio de transporte público en Costa Rica. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.

[12] Abarca Calderón, F. (s.f.). Interfaz de lenguaje natural para un sistema de información del transporte público. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.

# Riesgos y mitigación

Un sistema de transporte público inteligente es una red compleja sujeta a múltiples variables que generan riesgos, incertidumbres e incluso ignorancia en aspectos críticos como la gobernanza, la calidad de los datos y la sostenibilidad tecnológica. Estos desafíos desde la fragmentación institucional y las TIC hasta la dependencia de modelos de IA con limitaciones, pueden comprometer su eficiencia y confiabilidad. Por ello, es esencial desarrollar una estrategia integral de mitigación que aborde no solo las amenazas técnicas (como fallos en GPS o vendor lock-in), sino también las organizativas (falta de coordinación entre actores) y sociales (seguridad de usuarios o riesgos sanitarios). La combinación de gobernanza centralizada, estándares de datos abiertos, pilotos escalables y tecnologías interoperables se presenta como un enfoque clave para reducir incertidumbre y garantizar un servicio resiliente, inclusivo y adaptable a contextos dinámicos como el de Costa Rica.

## Puntos clave

Esta sección analiza los principales riesgos, incertidumbres e ignorancias asociadas al desarrollo de un sistema de transporte público inteligente en Costa Rica, desde dimensiones como la gobernanza, la tecnología y la gestión de datos. La identificación y mitigación de estos riesgos es fundamental para asegurar la continuidad operativa del servicio, su adaptabilidad futura y la confianza de las personas usuarias, considerando la alta complejidad institucional y tecnológica del entorno. La propuesta de mitigación incluye acciones como la creación de un comité técnico multisectorial, la exigencia de estándares de datos abiertos, el diseño de pilotos escalables con telemetría económica y el uso combinado de inteligencia artificial con APIs en tiempo real. Estos elementos permiten reducir la incertidumbre y facilitar decisiones basadas en evidencia, además de garantizar un sistema resiliente, inclusivo e interoperable que pueda evolucionar con el tiempo y las necesidades locales.

## Análisis de riesgos e incertidumbre

Los sistemas de transporte inteligente operan en entornos de alta complejidad, donde interactúan factores técnicos, institucionales y sociales. Según la teoría de sistemas adaptativos complejos, estos sistemas exhiben comportamientos emergentes difíciles de predecir, por otra parte la incertidumbre se agrava en contextos como Costa Rica, donde la falta de estandarización y la heterogeneidad de actores aumentan la probabilidad de fallos en cascada.

### Riesgos identificados

Los sistemas de transporte inteligente enfrentan riesgos críticos que pueden comprometer su eficiencia y sostenibilidad. Estos se clasifican en cuatro dimensiones principales

| Categoría     | Riesgos identificados                                         |
| ------------- | ------------------------------------------------------------- |
| Gobernanza    | Descoordinación institucional y TIC desactualizados           |
| Datos         | Fragmentación, baja calidad y falta de estandarización (GTFS) |
| Tecnología    | Costos altos, dependencia de proveedores y limitaciones de IA |
| Operacionales | Fallos técnicos, inseguridad y riesgos sanitarios             |

### Estrategias de mitigación

Para contrarrestar estos riesgos, se propone un enfoque multidimensional, donde una mitigación efectiva requiere equilibrar innovación tecnológica con gobernanza robusta, asegurando que las soluciones sean tanto avanzadas como institucionalmente sostenibles.

| Dimensión         | Propuesta                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Gobernanza        | Crear un comité técnico multisectorial y definir un marco legal claro.                       |
| Datos             | Exigir estándares abiertos (como GTFS) y publicar información mediante APIs accesibles.      |
| Tecnología        | Implementar pilotos escalables, evitar vendor lock-in y asegurar interoperabilidad.          |
| Seguridad y salud | Usar minería de datos para identificar riesgos, realizar mantenimiento preventivo y usar IA. |

## Referencias

1. F. Abarca Calderón, J. D. Segura Cruz y E. J. Vargas Céspedes. [“Concentrador de datos en tiempo real para servicios de información en el transporte público”](https://www.ucr.ac.cr). Universidad de Costa Rica, 2023.
2. F. Abarca Calderón y M. A. Araya Salazar. [“Estudio de la información del servicio de transporte público en Costa Rica”](https://www.ucr.ac.cr). Universidad de Costa Rica, 2023.
3. F. Abarca et al. [“A System-Level Design for a Public Transportation Information System in Costa Rica”](https://www.ucr.ac.cr). Universidad de Costa Rica, 2023.
4. F. Abarca Calderón, A. Cordero Méndez y E. J. Murillo Mamani. [“Recolección en tiempo real de datos de telemetría y rastreo en el transporte público”](https://www.ucr.ac.cr). Universidad de Costa Rica, 2023.
5. F. Abarca Calderón. [“Sistema de información para las personas usuarias del transporte público en Costa Rica”](https://www.ucr.ac.cr). Universidad de Costa Rica, 2023.
6. F. Abarca Calderón. [“Interfaz de lenguaje natural para un sistema de información del transporte público”](https://doi.org/10.1007/978-3-030-81159-4). Springer, 2023.
7. T. Cristóbal et al. [“Using data mining to estimate patterns of contagion-risk interactions in an intercity public road transport system”](https://doi.org/10.1109/ACCESS.2022.3206838). _IEEE Access_, vol. 10, 2022.
8. J. Li et al. [“Transportation mode identification with GPS trajectory data and GIS information”](https://doi.org/10.26599/TST.2020.9010014). _Tsinghua Science and Technology_, vol. 26, no. 4, 2021.
9. J. E. Zamora Delgado, M. I. Tercero Betanco y M. A. Zúñiga Cárdenas. _Análisis de la calidad del servicio de transporte público_. [Disponible en sitio académico local](https://www.ucr.ac.cr).
10. M. Erdoğan e İ. Kaya. [“A systematic approach to evaluate risks and failures of public transport systems”](https://www.worldtransitresearch.info). _World Transit Research_, 2020.
