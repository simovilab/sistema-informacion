# Gobernanza

::: Puntos clave
  
- En esta sección se describe el modelo de gobernanza propuesto para el sistema de transporte público, centrado en la creación de un Comité Directivo Técnico con representación multisectorial.
- La implementación de este comite permite superar la fragmentación institucional, fortalecer la capacidad técnica y establecer una coordinación efectiva basada en principios de gobernanza digital.
- Se adopta un enfoque basado en el marco TOGAF, mediante un modelo estructurado de toma de decisiones, estándares abiertos y participación de actores clave en la planificación y supervisión tecnológica.

## Gobernanza tecnica y social

La gobernanza de sistemas públicos de transporte requiere un modelo que articule tanto capacidades técnicas como estructuras de coordinación institucional [4]. En el contexto costarricense, actores como el **Ministerio de Obras Públicas y Transportes (MOPT)** y el **Consejo de Transporte Público (CTP)** enfrentan limitaciones importantes en materia de tecnologías de la información y comunicación (TIC). Estas limitaciones se agravan por la fragmentación institucional y la escasa coordinación entre las entidades responsables.

Frente a esta situación, se propone un modelo de gobernanza basado en el **Ciclo ADM** del marco **TOGAF**, ampliamente utilizado en el diseño de arquitecturas empresariales. Este marco permite alinear decisiones técnicas con los objetivos estratégicos del servicio público [3].

La gobernanza se entiende en este contexto como un conjunto de **arreglos institucionales**, tanto formales (leyes, reglamentos, estructuras organizativas) como informales (prácticas, valores, costumbres), que permiten la toma y ejecución de decisiones públicas [5]. En un sistema complejo y multisectorial como el transporte público, este tipo de arreglos es esencial para lograr una visión compartida, continuidad operativa y capacidad de respuesta ante emergencias técnicas o sociales [2].

Los principios fundamentales de este modelo son:

- Beneficio a las **personas usuarias** como prioridad del sistema.
- Sostenibilidad financiera para las entidades operadoras y reguladoras.
- Interoperabilidad y neutralidad tecnológica.
- Unicidad y calidad de la información.
- Estándares abiertos y gobernanza de datos.

Los actores involucrados incluyen:
| Actor                | Rol                                     |
|----------------------|-----------------------------------------|
| MOPT y CTP           | Cuerpos gobernantes                     |
| ARESEP               | Entidad reguladora                      |
| Empresas operadoras  | Prestadoras del servicio                 |
| Personas usuarias, investigadores y planificadores | Partes interesadas clave     |


La complejidad del sistema, debido a una alta fragmentación, influye en la falta de coordinación entre ministerios, la incertidumbre en la rentabilidad para las entidades operadoras, los costos asociados a las nuevas tecnologías y la insuficiente capacidad técnico-administrativa del CTP y el MOPT para gestionar la infraestructura, las rutas y las tecnologías [3,6].

---

## Propuesta para el sistema de gobernanza

Se plantea la creación de un **Comité Directivo Técnico**, órgano multisectorial que liderará la implementación de la gobernanza digital del sistema.

### Funciones principales del comité:

1. Asesorar en necesidades de las personas usuarias y prioridades tecnológicas [1].
2. Diseñar estrategias de implementación organizacional y técnica [3].
3. Supervisar estándares e interoperabilidad de los sistemas [3].
4. Garantizar la calidad y unicidad de la información hacia las personas usuarias finales [1].
5. Fomentar diálogo político-técnico entre actores públicos y privados.
6. Coordinar acciones ante situaciones de emergencia técnica o social.

### Actores representados en el comité:

| Sector             | Representación                     |
|--------------------|----------------------------------|
| Gobierno central    | MOPT, CTP                        |
| Regulación         | ARESEP                          |
| Operación          | Empresas operadoras             |
| Sociedad civil     | Personas usuarias, investigadores |
| Planificación      | Técnicos en transporte y TIC     |

### Modelo de gobernanza propuesto
---
config:
  layout: dagre
  theme: base
  look: minimalist
  themeVariables:
    nodeBorder: "#455a64"
    primaryColor: "#f5f5f5"
    fontFamily: "Segoe UI"
    
flowchart TD
    A["Problema:<br>Fragmentación institucional<br>y limitada capacidad técnica"]
    A --> B["Propuesta:<br>Crear Comité Directivo Técnico"]
    B --> C["Actores:<br>MOPT, CTP, ARESEP,<br>Empresas operadoras, Personas usuarias,<br>Investigadores"]
    B --> D["Funciones:<br>- Asesoría técnica<br>- Coordinación institucional<br>- Supervisión de estándares"]
    D --> E["Objetivo:<br>Gobernanza digital eficaz<br>y servicios centrados en las personas usuarias"]
    
---


**Referencias**

[1] Abarca, F., & Araya Salazar, M. A. (2024, October). *Estudio de la información del servicio de transporte público en Costa Rica*. 6 Jornadas de Investigación de la Facultad de Ingeniería.

[2] Abarca, F., Murillo, D., Segura, D., Vargas, J., Cordero, A., Murillo, E., Núñez, G., & Coto, M. (2024, October). *A System-Level Design for a Public Transportation Information System in Costa Rica*. IEEE Xplore.

[3] Abarca Calderón, F. (2024, October). Sistema de información para las personas usuarias del transporte público en Costa Rica. *Revista Ingeniería*.

[4] De-Vries-Gamboa, N., Jiménez-Quirós, V., & Vega-Vega, D. (2021). Diseño de sistema seguro de objetos inteligentes para el trayecto y espera de autobuses en Costa Rica. *Revista IDI+*, *4*(1), 22-33.

[5] Longo, F. (2010). Ejes vertebradores de la gobernanza en los sistemas públicos. Un marco de análisis en clave latinoamericana. *Revista del CLAD Reforma y Democracia*, (46), 73-102.

[6] Maier, A., Oehmen, J., & Vermaas, P. E. (2022). Handbook of Engineering Systems Design. Cap.8 Technical and Social Complexity. En Springer eBooks. https://doi.org/10.1007/978-3-030-81159-4

<Citation key="abarca2024jornadas" />
<Citation key="abarca2024ieeexplore" />
<Citation doi="10.15517/iv.v25i44.54872" />
<Citation key="devries2021idi" />
<Citation key="longo2010clad" />
<Citation doi="10.1007/978-3-030-81159-4" />

