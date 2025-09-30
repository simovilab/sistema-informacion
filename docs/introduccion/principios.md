# Principios de diseño

::: info Mensajes clave

- Un conjunto de **principios de diseño** basados en **tendencias internacionales** de desarrollo de sistemas inteligentes de transporte público y sistemas informáticos en general proveen una **base sólida para tomar decisiones** en la arquitectura tecnológica propuesta.
- Esta sección presenta una recopilación de **principios relevantes para el sistema** propuesto, surgidos de varias fuentes: nuestra propia investigación, agencias relacionadas con el transporte público, organizaciones transnacionales, consorcios industriales y otras fuentes.

:::

Los principios de diseño de InfoTP están construidos a partir de la unión de varias referencias relevantes para el transporte público inteligente y para el desarrollo de sistemas informáticos.

<Ref url="./diseno/principios" icon="directions_bus">Principios de diseño</Ref>

## Tecnologías del transporte público

::: warning Principios organizacionales de los sistemas de información del transporte público

> Estos diez principios fundamentales están organizados en cuatro categorías complementarias que abordan distintos aspectos del diseño del sistema: principios de negocio que procuran la viabilidad económica y el beneficio para las personas usuarias, principios de datos que promueven la transparencia y la estandarización, principios de aplicaciones que priorizan la usabilidad y la accesibilidad, y principios de tecnología que fomentan implementaciones robustas y preparadas para el futuro.

Propuestos por el **Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI)**.

Fuente: [SIMOVI (GitHub)](https://github.com/simovilab/).

:::

### Principios de aplicaciones

1. **Unicidad de la información**: La información disponible para las personas usuarias es consistente, precisa, actualizada y proviene de una fuente única, a través de la mayor cantidad posible de canales de comunicación.
2. **Facilidad de uso y accesibilidad**: El servicio debe diseñarse para todas las personas usuarias.

### Principios de datos

3. **Los datos del servicio son abiertos y estandarizados**: Todos los datos relativos al servicio que deban brindarse a las personas usuarias para facilitar el uso del sistema deben ser abiertos y de fácil acceso para el consumo público.
4. **Los datos operativos son compartidos**: Los datos operativos son un activo para múltiples partes interesadas del sistema y deben ser accesibles para la eficiencia, la planificación, la regulación y la mejora continua.
5. **Vocabulario y definiciones comunes de datos**: Todos los componentes tecnológicos del sistema seguirán un conjunto único de conceptos y definiciones.

### Principios de tecnología

6. **Arquitectura única para todo el sistema**: Todas las partes interesadas deben seguir y cumplir las directrices de una arquitectura común para todo el sistema definida por los órganos de gobernanza.
7. **Independencia tecnológica**: Las implementaciones deben ser independientes de tecnologías particulares, permitiendo funcionar en múltiples plataformas y junto a sistemas externos.
8. **Interoperabilidad**: Las implementaciones deben seguir estándares establecidos para garantizar la compatibilidad y el intercambio efectivo de información entre sistemas.

### Principios de negocio

9. **Maximizar beneficios para las personas usuarias**: Un servicio público debe priorizar la mejora continua de la experiencia de sus personas usuarias.
10. **Sostenibilidad financiera y asequibilidad del servicio**: La implementación de nuevas tecnologías debe asegurar un financiamiento adecuado para minimizar los riesgos financieros de las empresas proveedoras del servicio, manteniendo a la vez costos razonables para las personas usuarias.

## Datos de movilidad

::: warning Principios de interoperabilidad de datos de movilidad

> El transporte es una industria de alta tecnología. Los proveedores de servicios de movilidad necesitan componentes tecnológicos capaces de trabajar juntos en tiempo real utilizando formatos estándar.

Propuestos por una alianza internacional liderada por [MobilityData](https://mobilitydata.org/), un referente en la gestión de datos del transporte público, en colaboración con agencias líderes de transporte público de Estados Unidos, organizaciones civiles y entidades académicas

Fuente: [MDIP (_Mobility Data Interoperability Principles_)](https://www.interoperablemobility.org/).

:::

1. Todas los sistemas que creen, modifiquen o consuman datos de movilidad deben ser **interoperables**.
1. La interoperabilidad debe lograrse mediante el desarrollo, adopción e implementación generalizada de **estándares abiertos** que permitan el intercambio eficiente y la portabilidad de los datos de movilidad.
1. Las agencias de transporte y otros proveedores de servicios de movilidad deben tener acceso a **herramientas que presenten datos de movilidad de alta calidad** de manera accesible, equitativa y en tiempo real, para ayudar a los viajeros a satisfacer sus necesidades de movilidad.
1. Las agencias de transporte, otros proveedores de servicios de movilidad y los viajeros deben poder **seleccionar los componentes tecnológicos** de transporte que mejor se adapten a sus necesidades.
1. Todas las personas y el público en general deben estar empoderados, a través de datos de movilidad de alta calidad y bien distribuidos, para **encontrar, acceder y utilizar opciones de movilidad de calidad** que respondan a sus necesidades según lo consideren conveniente, manteniendo su privacidad.

## Eficacia y equidad

::: warning Compromiso por un transporte público eficaz y equitativo

> El _statu quo_ de la **tecnología del transporte** es un obstáculo para lograr la equidad y el nivel de servicio que las personas usuarias merecen. Mientras estén bloqueadas en el mercado actual de proveedores monolíticos y propietarios, las agencias de transporte público no pueden alcanzar fácilmente la paridad con otros proveedores de movilidad. Estos principios pretenden construir, promover, expandir y respaldar soluciones de software de código abierto en todos los niveles de la pila tecnológica del transporte, con el fin de impulsar la modernización al tiempo que se reducen los costos, se mejora la experiencia del transporte público y se hace que el propio transporte público sea sostenible.

Principios propuestos por [TransitOPS](https://transitops.co/), una organización sin fines de lucro que brinda servicios a agencias de transporte público para modernizar la tecnología, reducir la dependencia de proveedores y disminuir costos.

Fuente: [TransitOPS Manifesto: _Pledge for an Effective & Equitable Public Transit_](https://transitops.co/manifesto/).

:::

- **Principio 1.** El transporte público es una parte integral de la vida moderna: proporciona acceso a oportunidades económicas, educación, comunidad, participación cívica y atención médica, especialmente para las poblaciones dependientes del transporte.
- **Principio 2.** El transporte público es una infraestructura crítica que debe mantenerse viable y accesible para todas las personas.
- **Principio 3.** Las personas usuarias del transporte público merecen una experiencia transparente, confiable y segura, y en paridad o mejor que otras opciones de movilidad en tiempo y costo.
- **Principio 4.** La seguridad y la privacidad de las personas usuarias en el transporte público y en los sistemas de datos de transporte son fundamentales y no deben tratarse como opcionales.
- **Principio 5.** Las agencias deben contar con las herramientas y los datos para operar y planificar un sistema de transporte efectivo y equitativo.
- **Principio 6.** La sostenibilidad del transporte público depende de la interoperabilidad (protocolos, formatos de datos, contenidos), la innovación y la colaboración entre organizaciones públicas y privadas.
- **Principio 7.** El software libre y de código abierto garantiza que las mejoras tecnológicas necesarias sean posibles y favorece un mercado competitivo de servicios tecnológicos.
- **Principio 8.** Los procesos transparentes e inclusivos promueven la participación, la rendición de cuentas y la confianza.
- **Principio 9.** La participación comercial en la tecnología del transporte público aporta muchos beneficios y es fundamental equilibrar el lucro comercial con el beneficio público.
- **Principio 10.** Potenciar los aspectos de beneficio público del transporte es un objetivo importante, digno de tiempo, atención y compromiso.

## Sistemas informáticos

::: warning Principios MACH

> La verdadera transformación digital requiere más que tecnología: exige la alineación entre su arquitectura tecnológica y su estrategia de negocio. MACH proporciona la base para esta integración, asegurando que sus capacidades digitales evolucionen en consonancia con sus objetivos organizacionales.

Propuestos por [MACH Alliance](https://machalliance.org/), un organismo sin fines de lucro de líderes del sector tecnológico dedicado a impulsar arquitecturas organizacionales y tecnológicas flexibles.

Fuente: [The MACH Principles](https://machalliance.org/mach-principles).

:::

- **Modular** (_composable_): Elija soluciones modulares para casos de uso específicos, manteniendo la coherencia del sistema. Las arquitecturas modulares también permiten integrar nuevas capacidades especializadas sin quedar atado a las limitaciones de plataformas monolíticas ni a funcionalidades empaquetadas no deseadas.
- **Conectado** (_connected_): Cree ecosistemas digitales flexibles donde las aplicaciones se comuniquen sin esfuerzo con los sistemas existentes. La conectividad con enfoque en API garantiza que sus iniciativas escalen de forma coherente, permitiendo la experimentación rápida y el despliegue de capacidades inteligentes.
- **Incremental** (_incremental_): Priorice el desarrollo y la entrega continua y la experimentación para alcanzar resultados medibles. Los enfoques incrementales permiten validar modelos en producción, escalar automáticamente las implementaciones exitosas y mantener la estabilidad del sistema mientras se experimenta con nuevas capacidades inteligentes.
- **Abierto** (_open_): Construya tecnología, equipos y estrategias organizacionales sobre una base de transparencia e intercambio de datos. Las arquitecturas abiertas permiten un flujo de información sin fricciones, generando conocimientos unificados que impulsan objetivos organizacionales más amplios mediante inteligencia colaborativa.
- **Autónomo** (_autonomous_): Habilite a las organizaciones para responder con rapidez a requisitos internos y externos mediante automatización inteligente y sistemas autogestionados. Los enfoques MACH autónomos reducen la intervención manual mientras mantienen la agilidad y la adaptabilidad en marcos interoperables.

## Interoperabilidad

::: warning Marco Europeo de Interoperabilidad

> El Marco Europeo de Interoperabilidad (EIF) ofrece orientaciones específicas sobre cómo establecer servicios públicos digitales interoperables.

Propuestos por la Comisión Europea.

Fuente: [EIF (_European Interoperability Framework_)](https://interoperable-europe.ec.europa.eu/collection/iopeu-monitoring/european-interoperability-framework-detail)

:::

1. Subsidiariedad y proporcionalidad
1. Apertura
1. Transparencia
1. Reutilización
1. Neutralidad tecnológica y portabilidad de los datos
1. Enfoque en el usuario
1. Inclusión y accesibilidad
1. Seguridad y privacidad
1. Multilingüismo
1. Simplificación administrativa
1. Preservación de la información
1. Evaluación de la eficacia y la eficiencia

## Gestión de datos

::: warning Principios FAIR

> Los principios enfatizan la _accionabilidad_ por máquinas (es decir, la capacidad de los sistemas computacionales para encontrar, acceder, interoperar y reutilizar datos sin o con mínima intervención humana) porque, debido al aumento del volumen, la complejidad y la velocidad de creación de los datos, las personas dependen cada vez más del apoyo computacional para gestionarlos.

Propuestos en el artículo _The FAIR Guiding Principles for scientific data management and stewardship_ (Scientific Data, 2016) por un equipo internacional de la comunidad científica.

Fuente: [FAIR Principles](https://www.go-fair.org/fair-principles/).

:::

Los datos del transporte público deben ser:

#### Fáciles de encontrar

El primer paso para (re)utilizar datos es encontrarlos. Los metadatos y los datos deben ser fáciles de localizar tanto para las personas como para las computadoras. Los metadatos legibles por máquinas son esenciales para el descubrimiento automático de conjuntos de datos y servicios.

#### Accesibles

Una vez que la persona usuaria encuentra los datos requeridos, debe saber cómo acceder a ellos, posiblemente incluyendo autenticación y autorización.

#### Interoperables

Los datos suelen necesitar integrarse con otros datos. Además, los datos deben interoperar con aplicaciones o flujos de trabajo para su análisis, almacenamiento y procesamiento.

#### Reutilizables

El objetivo último de FAIR es optimizar la reutilización de los datos. Para lograrlo, los metadatos y los datos deben estar bien descritos, de modo que puedan replicarse y/o combinarse en distintos contextos.
