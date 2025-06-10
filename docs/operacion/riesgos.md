# Riesgos y mitigación

::: info Puntos clave

- Lista de conclusiones importantes o mensajes clave (_key takeaways_)
- Síntesis de toda esta página

:::

- Asignación: Johnnixia Valdés
- Enfoque: desde la perspectiva del análisis de riesgos, incertidumbre e ignorancia, cómo se pueden identificar y mitigar los riesgos asociados con el sistema de información de transporte público inteligente.

************************************************************************************************************************************
Referencias dadas
Riesgos Identificados

  Gobernanza y Organización
    Falta de coordinación: No hay una estrategia unificada ni una entidad técnica responsable del diseño de sistemas de información para el     transporte público en Costa Rica.
    Departamentos de TIC obsoletos: Solo gestionan tareas administrativas, sin capacidad para implementar sistemas complejos.
    Políticas públicas desactualizadas: Documentos clave (como el SITGAM 2020-2035) ignoran el rol de las TIC en el transporte. [2], [3]
  
  Datos e Información
    Fragmentación: Cada empresa gestiona sus datos, resultando en inconsistencia (menos del 15% de rutas tienen datos completos).
    Acceso limitado: Iniciativas como GIS o seguimiento de autobuses no llegan a los usuarios por falta de integración.
    Complejidad técnica: Estándares como GTFS son difíciles de interpretar sin interfaces amigables. [1], [2], [5]
  
  Financieros y Tecnológicos
    Costos elevados: La implementación de tecnologías puede ser insostenible para concesionarias con modelos económicos frágiles.
    Dependencia de proveedores: Riesgo de vendor lock-in y obsolescencia rápida.
    Limitaciones de IA: Modelos como LLMs no pueden proveer datos en tiempo real.  [3], [4], [6]

Estrategias de Mitigación

  Gobernanza Centralizada
    Crear un Comité Técnico multisectorial para guiar el desarrollo tecnológico.
    Adoptar Arquitecturas Empresariales para alinear TIC con necesidades del negocio.
    Legislar la gobernanza digital en transporte, definiendo responsabilidades claras. [3]
  
  Gestión de Datos
    Unificación: Exigir a todas las concesionarias compartir datos bajo estándares como GTFS.
    Datos abiertos: Publicar información en formatos accesibles para usuarios y desarrolladores.
    Vocabulario común: Usar definiciones consistentes [1], [2], [5]
  
  Implementación Práctica
    Plan piloto: Comenzar con rutas específicas para validar el modelo con bajo costo.
    APIs abiertas: Diseñar interfaces (Infobús/Databús) para integrar datos heterogéneos.
    Telemetría económica: Usar apps móviles como alternativa a sistemas de rastreo costosos. [1], [4], [3]
  
  Innovación Tecnológica
    Interoperabilidad: Priorizar estándares abiertos para evitar dependencia.
    IA accesible: Combinar LLMs con APIs en tiempo real para responder consultas en lenguaje natural. [6], [3]



Referencias externas 
**Identificación riesgos**
En un Sistema de Información para Transporte Público Inteligente (SITPI), los riesgos pueden clasificarse en tres categorías principales: operacionales y de seguridad, relacionados con datos e inferencias, y de salud pública (especialmente en pandemias).
  **1. Riesgos operacionales y de seguridad** incluyen fallos técnicos en las unidades, accidentes de tránsito, inseguridad dentro del        vehículo (delincuencia, exceso de pasajeros, desperfectos), retrasos causados por malas condiciones viales, y conflictos entre el           personal y los usuarios. Estos factores generan incertidumbre y reducen la calidad del servicio.
  **2. Riesgos relacionados con los datos** abarcan errores en la calidad de la señal GPS, incertidumbre sobre el comportamiento de los       pasajeros (como paradas o destinos no conocidos), y la ignorancia derivada de datos faltantes en los registros. Esto complica la            inferencia de modos de transporte y análisis de comportamiento.
  **3. Riesgos de contagio** en contextos sanitarios se refieren a la transmisión de enfermedades infecciosas en espacios cerrados con alta   densidad de personas. La ignorancia sobre quién está infectado impide conocer con certeza la cantidad de contactos cercanos. [7], [8], [9], [10]

**Mitigación de riesgos**:
  **Planificación y mantenimiento:** incluye revisiones mecánicas frecuentes, capacitación del personal, y cumplimiento de normativas de     transporte.
  **Tecnologías inteligentes:** el uso de datos GPS y GIS mejora la inferencia de modos de transporte y el análisis del flujo vehicular.     Algoritmos de aprendizaje automático permiten clasificar trayectorias y estimar datos faltantes.
  **Minería de datos para salud pública:** se aplican modelos de simulación para reducir interacciones cercanas (por ejemplo, políticas de   asignación de asientos) e identificar patrones de riesgo por ruta.
  **Otras estrategias:** mejor infraestructura vial, limpieza de unidades, sistemas de comunicación con el usuario, y mejoras en la          comodidad y seguridad general del servicio.  [7], [8], [9], [10]

En conjunto, la gestión de riesgos en un SITPI requiere una estrategia integral que combine mantenimiento, formación humana y herramientas tecnológicas avanzadas para anticipar fallos, reducir incertidumbre, y mejorar la experiencia y seguridad del usuario.



Abreviaturas
TIC (Tecnologías de Información y Comunicación)
IPTS (Sistemas de Transporte Público Inteligente)
GIS (Sistema de Información Geográfica)
CTP (Consejo de Transporte Público)
GTFS (General Transit Feed Specification)
ARC-IT (Architecture Reference for Cooperative and Intelligent Transportation)
SDM (Smart Data Models)
LLMs (Large Language Models o Modelos Extensos de Lenguaje)

****************************************************************************************************************************************



### Referencias
1. F. Abarca Calderón, J. D. Segura Cruz y E. J. Vargas Céspedes, “Concentrador de datos en tiempo real para servicios de información en el transporte público,” Universidad de Costa Rica, 2023.

2. F. Abarca Calderón y M. A. Araya Salazar, “Estudio de la información del servicio de transporte público en Costa Rica,” Universidad de Costa Rica, 2023.

3. F. Abarca et al., “A System-Level Design for a Public Transportation Information System in Costa Rica,” Universidad de Costa Rica, 2023.

4. F. Abarca Calderón, A. Cordero Méndez y E. J. Murillo Mamani, “Recolección en tiempo real de datos de telemetría y rastreo en el transporte público,” Universidad de Costa Rica, 2023.

5. F. Abarca Calderón, “Sistema de información para las personas usuarias del transporte público en Costa Rica,” Universidad de Costa Rica, 2023.

6. F. Abarca Calderón, “Interfaz de lenguaje natural para un sistema de información del transporte público,” Universidad de Costa Rica, 2023.
<Citation doi="10.1007/978-3-030-81159-4" />

7. T. Cristóbal, A. Quesada-Arencibia, G. S. De Blasio, G. Padrón, F. Alayón, and C. R. García, "Using data mining to estimate patterns of contagion-risk interactions in an intercity public road transport system," IEEE Access, vol. 10, pp. 100006–100020, Sep. 2022, doi: 10.1109/ACCESS.2022.3206838.
Fuente: IEEE Access – Universidad de Las Palmas de Gran Canaria.

8. J. Li, X. Pei, X. Wang, D. Yao, Y. Zhang, and Y. Yue, "Transportation mode identification with GPS trajectory data and GIS information," Tsinghua Science and Technology, vol. 26, no. 4, pp. 403–416, Aug. 2021, doi: 10.26599/TST.2020.9010014.
Fuente: Tsinghua Science and Technology – Universidad de Tsinghua, China.

9. J. E. Zamora Delgado, M. I. Tercero Betanco, and M. A. Zuniga Cárdenas, Análisis de la calidad del servicio de transporte público. [En línea]. Disponible: (sin DOI, presumiblemente un documento académico local o de universidad).
Fuente: Documento académico, probablemente universitario o institucional de Latinoamérica (no indexado formalmente).

10. M. Erdoğan and İ. Kaya, "A systematic approach to evaluate risks and failures of public transport systems with a real case study for bus rapid system in Istanbul," World Transit Research, Journal Article, 2020. [En línea]. Disponible: https://www.worldtransitresearch.info/ (buscar por título exacto para enlace directo).
Fuente: World Transit Research – artículo sobre BRT en Estambul.
