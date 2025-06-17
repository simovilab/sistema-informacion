# Riesgos y mitigación

::: info Puntos clave

- Lista de conclusiones importantes o mensajes clave (_key takeaways_)
- Síntesis de toda esta página

:::

- Asignación: Johnnixia Valdés
- Enfoque: desde la perspectiva del análisis de riesgos, incertidumbre e ignorancia, cómo se pueden identificar y mitigar los riesgos asociados con el sistema de información de transporte público inteligente.

## Análisis de riesgos e incertidumbre

**Riesgos Identificados**
1.	Gobernanza y Organización
1.1.	Falta de coordinación: No hay una estrategia unificada ni una entidad técnica responsable del diseño de sistemas de información para el     transporte público en Costa Rica.
1.2.	 Departamentos de TIC obsoletos: Solo gestionan tareas administrativas, sin capacidad para implementar sistemas complejos.
1.3.	Políticas públicas desactualizadas: Documentos clave (como el SITGAM 2020-2035) ignoran el rol de las TIC en el transporte. [2], [3]
2.	Datos e Información
2.1.	Fragmentación: Cada empresa gestiona sus datos, resultando en inconsistencia (menos del 15% de rutas tienen datos completos).
2.2.	Acceso limitado: Iniciativas como GIS o seguimiento de autobuses no llegan a los usuarios por falta de integración.
2.3.	Complejidad técnica: Estándares como GTFS son difíciles de interpretar sin interfaces amigables. [1], [2], [5]
3.	Financieros y Tecnológicos
3.1.	Costos elevados: La implementación de tecnologías puede ser insostenible para concesionarias con modelos económicos frágiles.
3.2.	Dependencia de proveedores: Riesgo de vendor lock-in y obsolescencia rápida.
3.3.	Limitaciones de IA: Modelos como LLMs no pueden proveer datos en tiempo real.  [3], [4], [6]
**Estrategias de Mitigación**
1.	Gobernanza Centralizada
1.1.	Crear un Comité Técnico multisectorial para guiar el desarrollo tecnológico.
1.2.	Adoptar Arquitecturas Empresariales para alinear TIC con necesidades del negocio.
1.3.	Legislar la gobernanza digital en transporte, definiendo responsabilidades claras. [3]
2.	Gestión de Datos
2.1.	Unificación: Exigir a todas las concesionarias compartir datos bajo estándares como GTFS.
2.2.	Datos abiertos: Publicar información en formatos accesibles para usuarios y desarrolladores.
2.3.	Vocabulario común: Usar definiciones consistentes [1], [2], [5]

3.	Implementación Práctica
3.1.	Plan piloto: Comenzar con rutas específicas para validar el modelo con bajo costo.
3.2.	APIs abiertas: Diseñar interfaces (Infobús/Databús) para integrar datos heterogéneos.
3.3.	Telemetría económica: Usar apps móviles como alternativa a sistemas de rastreo costosos. [1], [4], [3]

4.	Innovación Tecnológica
4.1.	Interoperabilidad: Priorizar estándares abiertos para evitar dependencia.
4.2.	IA accesible: Combinar LLMs con APIs en tiempo real para responder consultas en lenguaje natural. [6], [3]

REFERENCIAS EXTERNAS 
**Identificación riesgos**
En un Sistema de Información para Transporte Público Inteligente (SITPI), los riesgos pueden clasificarse en tres categorías principales: operacionales y de seguridad, relacionados con datos e inferencias, y de salud pública (especialmente en pandemias).
1.	Riesgos operacionales y de seguridad
Incluyen fallos técnicos en las unidades, accidentes de tránsito, inseguridad dentro del        vehículo (delincuencia, exceso de pasajeros, desperfectos), retrasos causados por malas condiciones viales, y conflictos entre el           personal y los usuarios. Estos factores generan incertidumbre y reducen la calidad del servicio.
2.	Riesgos relacionados con los datos
Abarcan errores en la calidad de la señal GPS, incertidumbre sobre el comportamiento de los       pasajeros (como paradas o destinos no conocidos), y la ignorancia derivada de datos faltantes en los registros. Esto complica la            inferencia de modos de transporte y análisis de comportamiento.
3.	Riesgos de contagio
En contextos sanitarios se refieren a la transmisión de enfermedades infecciosas en espacios cerrados con alta   densidad de personas. La ignorancia sobre quién está infectado impide conocer con certeza la cantidad de contactos cercanos. [7], [8], [9], [10]

**Mitigación de riesgos**:
1.	Planificación y mantenimiento: Incluye revisiones mecánicas frecuentes, capacitación del personal, y cumplimiento de normativas de     transporte.
2.	Tecnologías inteligentes: El uso de datos GPS y GIS mejora la inferencia de modos de transporte y el análisis del flujo vehicular.     Algoritmos de aprendizaje automático permiten clasificar trayectorias y estimar datos faltantes.
3.	Minería de datos para salud pública: Se aplican modelos de simulación para reducir interacciones cercanas (por ejemplo, políticas de   asignación de asientos) y se emplea clustering (como k-means) para identificar patrones de riesgo por ruta.
4.	Otras estrategias: Mejor infraestructura vial, limpieza de unidades, sistemas de comunicación con el usuario, y mejoras en la          comodidad y seguridad general del servicio.  [7], [8], [9], [10]
En conjunto, la gestión de riesgos en un SITPI requiere una estrategia integral que combine mantenimiento, formación humana y herramientas tecnológicas avanzadas para anticipar fallos, reducir incertidumbre, y mejorar la experiencia y seguridad del usuario.

ABREVIATURAS
TIC (Tecnologías de Información y Comunicación)
IPTS (Sistemas de Transporte Público Inteligente)
GIS (Sistema de Información Geográfica)
CTP (Consejo de Transporte Público)
GTFS (General Transit Feed Specification)
ARC-IT (Architecture Reference for Cooperative and Intelligent Transportation)
SDM (Smart Data Models)
LLMs (Large Language Models o Modelos Extensos de Lenguaje)



### Referencias

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

