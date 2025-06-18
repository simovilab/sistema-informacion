# Evolución

::: info Puntos clave

- La evolución de sistemas socio-técnicos como el transporte público es inherentemente no lineal e impredecible, emergiendo de interacciones dinámicas entre componentes técnicos, sociales y ambientales que generan comportamientos imposibles de deducir de sus partes aisladas. Esta complejidad exige una gestión continua que reconozca la ausencia de soluciones definitivas, integrando enfoques sistémicos (como las cuatro olas del pensamiento sistémico) para navegar interdependencias no lineales y retroalimentación, junto con marcos estructurados como TOGAF ADM. Específicamente, su fase de Architecture Change Management proporciona herramientas para monitorear desencadenantes de cambio, gobernar transiciones arquitectónicas y validar principios clave como interoperabilidad y neutralidad tecnológica.

- Los sistemas complejos como el transporte público evolucionan de manera impredecible a través de interacciones dinámicas entre componentes técnicos, sociales y ambientales. Pequeños cambios pueden generar efectos desproporcionados. Gestionar esta incertidumbre requiere monitoreo continuo y adaptación constante.

- Las cuatro olas del pensamiento sistémico desde optimización técnica hasta alineación de modelos mentales permiten navegar la complejidad. Soluciones como estándares abiertos (GTFS) y arquitecturas flexibles habilitan co-evolución con cambios imprevistos.

- El éxito depende de coordinar actores (CTP, MOPT, municipios) mediante gobernanza policéntrica y alinear modelos mentales con campañas de comunicación y diseño participativo.

- Bucles de aprendizaje convierten datos en acción. Indicadores sistémicos detectan crisis tempranas, activando respuestas ágiles.

- La sostenibilidad exige arquitecturas que "recalibren brújulas" en cada interacción. El destino no es un sistema terminado, sino un proceso de aprendizaje colectivo donde cada viaje redefine el camino.

:::

La evolución de sistemas complejos no es previsible, ni lineal, ni predecible, se pueden inducir ciertos patrones pero no el comportamiento general del sistema. Es un fenomeno emergente que resulta de cada interaccion entre los componentes del sistema, que a su vez no son intecciones estáticas, sino que cambian, son interacciones dinámicas. Entre los elementos o componenetes del sistema estan los tecnicos, sociales y ambientales.

En este caso, un sistema de naturaleza socio-tecnica como lo es el transporte público, el constante cambio es intríseco por lo cual debe gestionarse con periodicidad. Los sistemas complejos no tiene una solución rápida, ni única, ni definitiva, y menos cuando se esta hablando de un sistema socio-tecnico.

Cambios regulares es necesario para una correcta evolución del sistema de trasporte público. Entre estas variaciones se encuentran las mejoras tecnológicas, necesidades de los usuarios, regulaciones del transporte, condiciones ambientales, entre otros.

Desde el punto de vista del pensamiento sistémico, gestionar la inevitable evolución requiere comprender patrones de cambio, retroalimentación y emergencia, donde todo es más que la suma de sus partes[1]. Para esto se deben tener en cuenta los principios del diseño basado en sistemas (System-Led Design)[1] y el marco teorico método de desarrollo de la arquitectura (ADM - Architecture Development Method) de TOGAF [2].

## Fundamentos del pensamiento sistemico para la gestion evolutiva.

### Cuatro olas de pensamiento sistemico

El pensamiento sistémico ha evolucionado a través de distintas “olas” o enfoques, cada una ampliando la manera en que comprendemos y gestionamos la complejidad. Estas olas representan cambios paradigmáticos en la forma de abordar los sistemas:

- 1°. Sistemas duros: Se enfoca en control y optimización. 

- 2°. Sistemas Blandos: Incorpora perspectivas humanas y subjetividad.

- 3°. Pensamiento critico: Considera el poder, la ética y el pluralismos metodológicos.

- 4°. Enfoque cognitivo: Aborda cómo los modelos mentales de actores que moldean el sistema.

### Complejidad y emergencia

Los sistemas complejos presentan comportamientos que surgen de la interacción entre múltiples componentes. Fundamentales asociados a esta dinámica:

- 1°. Interdependencias no lineales: Las relaciones entre los elementos del sistema no siguen proporciones directas. Un pequeño cambio en un componente puede tener grandes consecuencias en otros, o puede no generar ningún efecto visible. Esta no linealidad dificulta predecir el comportamiento del sistema.

- 2°. Retroalimentación: Los sistemas complejos están atravesados por bucles de retroalimentación.
    - Reforzadora: amplifica los efectos de una acción, generando crecimiento o cambio acelerado.
    - Equilibradora: busca estabilizar el sistema frente a alteraciones, manteniendo cierto equilibrio funcional.

- 3°. Adaptación continua: Los sistemas complejos se adaptan de forma dinámica al contexto. Esta adaptación no es diseñada explícitamente, sino que surge del comportamiento colectivo de los componentes del sistema. Como resultado, aparecen nuevas estructuras o patrones no previstos, conocidos como propiedades emergentes.

## Fundamentos de gestion de cambio de arquitectura de ADM TOGAF

La fase H. Architecture Change Management de TOGAF proporciona un marco estructurado para gestionar la evolución sistémica mediante:

### Principios Clave

- 1°. Gestión de Capacidades de Cambio: Monitoreo continuo de disparadores evolutivos (ej.: nuevos estándares tecnológicos, cambios regulatorios, etc).

- 2°. Gobernanza de Transición: Mecanismos para transitar entre estados arquitectónicos (ej.: migración de sistemas propietarios o privados a API abiertas o públicas).

- 3°. Alineación con Requisitos de Negocio: Validar que los cambios preserven los principios de interoperabilidad y neutralidad tecnológica[3].

### Proceso Adaptativo para Sistemas Complejos
Fases TOGAF ADM	para aplicación en transporte público:

- 1°. Monitoreo Continuo: Proceso constante de recolección de información del sistema. Ej.: Sensores IoT en buses + feedback usuarios vía app Databús[4].
- 2.° Evaluación de Impacto: Análisis de cómo nuevos datos GTFS afectan aplicaciones terceras (Moovit, Google Maps).
- 3°. Implementación Iterativa: Estrategia de desarrollo y despliegue que permite adaptar soluciones progresivamente y reducir riesgos en contextos inciertos o variables (ej.: Rollout gradual de Infobús API en data hub)[5].
- 4°. Validación Emergente: Proceso de comprobación del funcionamiento y aceptación de una implementación mediante experimentación directa en el sistema real.

## Factores Críticos para la Gestión Evolutiva a Largo Plazo

- Diseño para la Emergencia
    - Arquitecturas Flexibles: Uso de microservicios en el data hub para integrar nuevas fuentes (redes sociales, clima) sin reingeniería[5].

    - Estándares Abiertos (GTFS): Permiten evolución ecológica del ecosistema (nuevos desarrolladores, apps) sin control centralizado.

- Retroalimentación como Motor Evolutivo
    - Bucles de Aprendizaje
    - Indicadores Sistémicos


- Resiliencia y Adaptabilidad
    - Redundancia Funcional: Múltiples canales de información (electrónicos, impresos, atención al cliente) para resistir fallos[3].

    - Detección Temprana de "Dragon Kings": Eventos extremos (ej.: huelgas, desastres) gestionados mediante CAP (Common Alerting Protocol) en el data hub.

-  Factores Humanos y de Gobernanza
    - Modelos Mentales Compartidos: Campañas de comunicación para alinear expectativas de usuarios, conductores y reguladores.

    - Gobernanza Policéntrica: Coordinación entre CTP, MOPT, ARESEP y municipios para evitar fragmentación (principio de "unicidad del sistema").


#### Referencias

[1] Kaur, M., & Craven, L. (2022). Systems Thinking: Practical Insights on Systems-Led Design in Socio-Technical Engineering Systems. En Handbook of Engineering Systems Design (pp. 189-217). Springer International Publishing. https://doi.org/10.1007/978-3-030-81159-4_36

[2] The Open Group. (s.f.). TOGAF Standard — Architecture Development Method (ADM): H. Architecture Change Management. https://www.opengroup.org/togaf

[3] Abarca Calderón, F. (s.f.). Sistema de información para las personas usuarias del transporte público en Costa Rica. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.

[4]Abarca Calderón, F., Cordero Méndez, A., & Murillo Mamani, E. J. (s.f.). Recolección en tiempo real de datos de telemetría y rastreo en el transporte público. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.

[5]Abarca Calderón, F., Segura Cruz, J. D., & Vargas Céspedes, E. J. (s.f.). Concentrador de datos en tiempo real para servicios de información en el transporte público. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.

[6] Sevaldson, B. (2017). Redesigning Systems Thinking. FormAkademisk, 10(1). https://doi.org/10.7577/formakademisk.1755

[7] Cilliers, P. (2000). What Can We Learn From a Theory of Complexity? Emergence, 2(1), 23–33. https://doi.org/10.1207/S15327000EM0201_03

[8] Gerald Midgley, “Systemic Intervention for Public Health”, American Journal of Public Health 96, no. 3 (March 1, 2006): pp. 466-472. https://doi.org/10.2105/AJPH.2005.067660

[9] Abarca, F., Murillo, D., Segura, D., Vargas, J., Cordero, A., Murillo, E., Núñez, G., & Coto, M. (s.f.). A System-Level Design for a Public Transportation Information System in Costa Rica. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.

[10] Abarca Calderón, F., & Araya Salazar, M. A. (s.f.). Estudio de la información del servicio de transporte público en Costa Rica. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.

[11] Abarca Calderón, F. (s.f.). Interfaz de lenguaje natural para un sistema de información del transporte público. Escuela de Ingeniería Eléctrica, Universidad de Costa Rica.
