::: info Puntos clave

- A
- B
- C

:::

# Riesgos y mitigación

Un sistema de transporte público inteligente es una red compleja sujeta a múltiples variables que generan riesgos, incertidumbres e incluso ignorancia en aspectos críticos como la gobernanza, la calidad de los datos y la sostenibilidad tecnológica. Estos desafíos desde la fragmentación institucional y las TIC hasta la dependencia de modelos de IA con limitaciones, pueden comprometer su eficiencia y confiabilidad. Por ello, es esencial desarrollar una estrategia integral de mitigación que aborde no solo las amenazas técnicas (como fallos en GPS o vendor lock-in), sino también las organizativas (falta de coordinación entre actores) y sociales (seguridad de usuarios o riesgos sanitarios). La combinación de gobernanza centralizada, estándares de datos abiertos, pilotos escalables y tecnologías interoperables se presenta como un enfoque clave para reducir incertidumbre y garantizar un servicio resiliente, inclusivo y adaptable a contextos dinámicos como el de Costa Rica.

## Puntos clave

### Riesgos Principales

#### Gobernanza

Descoordinación institucional y TIC desactualizados.

#### Datos

Fragmentación, baja calidad y falta de estandarización (GTFS).
####Tecnología
Costos altos, dependencia de proveedores y limitaciones de IA.

#### Operacionales

Fallos técnicos, inseguridad y riesgos sanitarios.

### Mitigación efectiva

#### Gobernanza

Comité técnico multisectorial y marco legal claro.
####Datos
Obligar estándares abiertos (GTFS) y APIs públicas.
####Tecnología
Pilotos escalables, interoperabilidad y evitar vendor lock-in.

#### Seguridad

Minería de datos para riesgos y políticas sanitarias.

## Análisis de riesgos e incertidumbre

### Riesgos identificados

#### Gobernanza y Organización

1. Falta de coordinación: Ausencia de estrategia unificada y entidad técnica responsable del diseño de sistemas de información en Costa Rica.
2. Departamentos de TIC: Limitados a tareas administrativas, sin capacidad para implementar sistemas complejos.
3. Políticas públicas desactualizadas: Documentos clave (ej. SITGAM 2020-2035) no incorporan el rol de las TIC en transporte. [2], [3]

#### Datos e información

1. Fragmentación: Datos dispersos entre empresas, con inconsistencias (menos del 15% de rutas tienen información completa).
2. Acceso limitado: Iniciativas como GIS o seguimiento de autobuses no llegan a usuarios por falta de integración.
3. Complejidad técnica: Estándares como GTFS son difíciles de implementar sin interfaces amigables. [1], [2], [5]

#### Riesgos financieros y tecnológicos

1. Costos elevados: Tecnologías pueden ser insostenibles para concesionarias con modelos económicos frágiles.
2. Dependencia de proveedores: Riesgo de vendor lock-in y obsolescencia acelerada.
3. Limitaciones de IA: Modelos como LLMs no proveen datos en tiempo real. [3], [4], [6]

#### Riesgos operacionales y de seguridad

1. Fallos técnicos: Averías en unidades, accidentes de tránsito y retrasos por mal estado de vías.
2. Inseguridad: Delincuencia, sobrecupo y conflictos entre usuarios y personal.
3. Problemas de datos: Errores en GPS, comportamiento impredecible de pasajeros y datos faltantes. [7], [8], [9], [10]

#### Riesgos sanitarios

1. Contagio en espacios cerrados: Alta densidad de pasajeros facilita transmisión de enfermedades.
2. Ignorancia sobre infectados: Dificultad para rastrear contactos cercanos. [7], [8], [9], [10]

### Estrategias de mitigación

#### Gobernanza y estructura

1. Comité técnico multisectorial: Coordinar desarrollo tecnológico entre actores clave. [3]
2. Arquitecturas empresariales: Alinear TIC con objetivos operativos y de negocio. [3]
3. Marco legal claro: Legislar la gobernanza digital con responsabilidades definidas. [3]

#### Gestión de datos

1. Unificación bajo estándares: Exigir GTFS u otros formatos abiertos a concesionarias. [1], [2], [5]
2. Datos abiertos: Publicar información en formatos accesibles para usuarios y desarrolladores. [1], [2], [5]
3. Vocabulario común: Establecer definiciones consistentes para evitar ambigüedades. [1], [2], [5]

#### Implementación práctica

1. Pilotos escalables: Validar modelos en rutas específicas con bajo costo. [1], [3], [4]
2. APIs abiertas (Infobús/Databús): Integrar datos heterogéneos mediante interfaces estandarizadas. [1], [3], [4]
3. Telemetría económica: Usar apps móviles como alternativa a sistemas de rastreo costosos. [1], [3], [4]

#### Innovación tecnológica

1. Interoperabilidad: Priorizar estándares abiertos para evitar dependencia de proveedores. [3], [6]
2. IA + APIs en tiempo real: Combinar LLMs con datos actualizados para respuestas en lenguaje natural. [3], [6]

#### Seguridad y salud pública

1. Mantenimiento preventivo: Revisiones mecánicas frecuentes y capacitación del personal.
2. Tecnologías inteligentes: GPS/GIS para análisis de flujo vehicular y algoritmos de ML para estimar datos faltantes.Al gual que la minería de Datos Sanitarios como modelos de simulación (ej. asignación de asientos) y clustering (k-means) para identificar rutas de alto riesgo. [7], [8], [9], [10]

## Referencias

<Citation doi="10.1007/978-3-030-81159-4" />

1. F. Abarca Calderón, J. D. Segura Cruz y E. J. Vargas Céspedes, “Concentrador de datos en tiempo real para servicios de información en el transporte público,” Universidad de Costa Rica, 2023.
2. F. Abarca Calderón y M. A. Araya Salazar, “Estudio de la información del servicio de transporte público en Costa Rica,” Universidad de Costa Rica, 2023.
3. F. Abarca et al., “A System-Level Design for a Public Transportation Information System in Costa Rica,” Universidad de Costa Rica, 2023.
4. F. Abarca Calderón, A. Cordero Méndez y E. J. Murillo Mamani, “Recolección en tiempo real de datos de telemetría y rastreo en el transporte público,” Universidad de Costa Rica, 2023.
5. F. Abarca Calderón, “Sistema de información para las personas usuarias del transporte público en Costa Rica,” Universidad de Costa Rica, 2023.
6. F. Abarca Calderón, “Interfaz de lenguaje natural para un sistema de información del transporte público,” Universidad de Costa Rica, 2023. Citation doi="10.1007/978-3-030-81159-4"
7. T. Cristóbal, A. Quesada-Arencibia, G. S. De Blasio, G. Padrón, F. Alayón, and C. R. García, "Using data mining to estimate patterns of contagion-risk interactions in an intercity public road transport system," IEEE Access, vol. 10, pp. 100006–100020, Sep. 2022, doi: 10.1109/ACCESS.2022.3206838.
8. J. Li, X. Pei, X. Wang, D. Yao, Y. Zhang, and Y. Yue, "Transportation mode identification with GPS trajectory data and GIS information," Tsinghua Science and Technology, vol. 26, no. 4, pp. 403–416, Aug. 2021, doi: 10.26599/TST.2020.9010014.
9. J. E. Zamora Delgado, M. I. Tercero Betanco, and M. A. Zuniga Cárdenas, Análisis de la calidad del servicio de transporte público. [En línea]. Disponible: (sin DOI, presumiblemente un documento académico local o de universidad).
10. M. Erdoğan and İ. Kaya, "A systematic approach to evaluate risks and failures of public transport systems with a real case study for bus rapid system in Istanbul," World Transit Research, Journal Article, 2020. [En línea]. Disponible: https://www.worldtransitresearch.info/ (buscar por título exacto para enlace directo).
