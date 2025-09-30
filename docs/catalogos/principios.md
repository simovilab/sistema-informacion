<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# Principios

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0 |
| Fecha | 2025-09-18 |
| Descripción | Un catálogo de principios de arquitectura para un Sistema de Información de Transporte Público. |
| Autores | Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


<a id="principles-a01"></a>
## El servicio ofrece unicidad de información

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:A01</code></span>

- Dominio: Application
- Descripción: La información disponible para las personas usuarias es consistente, precisa, actualizada y de una única fuente, a través de la mayor cantidad posible de canales de comunicación.
- Justificación: Las personas pasajeras requieren información del sistema de transporte público como un todo. Actualmente, en Costa Rica, cada concesionario privado es responsable de compartir la información de su servicio, resultando en una severa falta de disponibilidad, con menos del 15% de las rutas presentando datos completos y consistentes en línea y sin una guía clara de cómo compartir esta información.
- Implicaciones: Todas las personas concesionarias seguirán los requisitos de recolección y compartición de datos establecidos por los órganos rectores. Esto no limita quién puede recolectar y compartir estos datos —por ejemplo, empresas TIC privadas de terceros— pero los detalles técnicos se establecen previamente.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-a02"></a>
## El servicio ofrece facilidad de uso y accesibilidad

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:A02</code></span>

- Dominio: Application
- Descripción: El servicio debe diseñarse para todas las personas usuarias.
- Justificación: Los sistemas tecnológicos modernos deben ser sensibles a las necesidades de usuarios con diferentes capacidades físicas y cognitivas o conocimientos previos.
- Implicaciones: Deben seguirse recomendaciones de diseño del servicio para asegurar accesibilidad en señalización gráfica, medios digitales, estrategias de comunicación y otros puntos de contacto entre el sistema y las personas usuarias., El sistema también debe seguir desde el inicio un proceso de internacionalización (i18n) proporcionando información que sea comprensible para la mayoría de visitantes internacionales. Por ejemplo, se deben realizar traducciones al menos al inglés para señalización de orientación, alertas y otros datos en medios impresos y digitales. Nuevas tecnologías de inteligencia artificial generativa como los modelos de lenguaje (LLM) podrían y deberían usarse para ampliar estas capacidades., Inclusión y accesibilidad., Multilingüismo.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-d01"></a>
## Los datos del servicio son abiertos

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:D01</code></span>

- Dominio: Data
- Descripción: Todos los datos relacionados con el servicio que deben brindarse a las personas pasajeras para facilitar el uso del sistema deben ser abiertos y de fácil acceso para consumo público.
- Justificación: Existe una obligación de los proveedores de un servicio público de ser claros y transparentes con toda la información que sus usuarios necesitan para hacer uso efectivo del mismo, mientras que las entidades rectoras tienen la obligación de coordinar el esfuerzo de compartir datos de tránsito abiertos y estandarizados.
- Implicaciones: Las entidades rectoras crearán los canales adecuados para compartir datos abiertos, incluyendo una arquitectura tecnológica que permita la evolución sostenible de los sistemas, disponible sin restricciones para su consumo y análisis por cualquier parte interesada, incluyendo empresas privadas, investigadores, la prensa y otros.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847, https://www.go-fair.org/fair-principles/

<a id="principles-d02"></a>
## Los datos del servicio son estandarizados

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:D02</code></span>

- Dominio: Data
- Descripción: La interoperabilidad debe lograrse mediante el desarrollo, adopción e implementación generalizada de estándares abiertos que permitan el intercambio eficiente y la portabilidad de los datos de movilidad.
- Justificación: Existe una obligación de los proveedores de un servicio público de ser claros y transparentes con toda la información que sus usuarios necesitan para hacer uso efectivo del mismo, mientras que las entidades rectoras tienen la obligación de coordinar el esfuerzo de compartir datos de tránsito abiertos y estandarizados.
- Implicaciones: Las entidades rectoras crearán los canales adecuados para compartir datos abiertos, incluyendo una arquitectura tecnológica que permita la evolución sostenible de los sistemas, disponible sin restricciones para su consumo y análisis por cualquier parte interesada, incluyendo empresas privadas, investigadores, la prensa y otros.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847, https://www.go-fair.org/fair-principles/

<a id="principles-d03"></a>
## Los datos operativos son compartidos

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:D03</code></span>

- Dominio: Data
- Descripción: Los datos operativos son un activo para múltiples partes interesadas del sistema y deben ser accesibles para la eficiencia, la regulación y la mejora continua.
- Justificación: La concesión de un servicio público requiere una inspección cercana por parte de los órganos rectores y reguladores. Para este propósito, los datos operativos son importantes y valiosos para evaluar la efectividad y el cumplimiento legal de la empresa, lo cual es de máximo interés público.
- Implicaciones: Los órganos rectores y reguladores deben definir qué datos deben compartirse con ellos. Los datos a compartir (ocupación, emisiones, etc.) —aunque no necesariamente de forma pública— ayudarán a examinar, regular y mejorar el servicio.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847, https://www.go-fair.org/fair-principles/

<a id="principles-d04"></a>
## Los datos de las personas usuarias son privados

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:D04</code></span>

- Dominio: Data
- Descripción: La seguridad y la privacidad de las personas usuarias en el transporte público y en los sistemas de datos de transporte son fundamentales y no deben tratarse como opcionales.
- Justificación: La recolección y el uso de datos personales deben gestionarse con el máximo respeto por la privacidad y la seguridad de las personas usuarias. La confianza del público en el sistema depende de la protección adecuada de sus datos personales.
- Implicaciones: Las entidades rectoras y los proveedores de servicios deben implementar políticas y tecnologías robustas para proteger los datos personales, cumpliendo con las regulaciones de privacidad aplicables y asegurando la transparencia en el manejo de dichos datos.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-d05"></a>
## Los datos tienen vocabulario y definiciones comunes

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:D05</code></span>

- Dominio: Data
- Descripción: Todos los componentes tecnológicos del sistema seguirán un conjunto único de conceptos y definiciones.
- Justificación: Un sistema tecnológico complejo requiere consistencia entre sus componentes en el entendimiento de sus definiciones, elementos y relaciones. Esto permitirá una expansión e integración más sencilla con las ciudades inteligentes, en general.
- Implicaciones: Todas las bases de datos e intercambios de datos internos deben seguir, lo más cercanamente posible, las definiciones de estándares predefinidos y aplicables. Los datos de servicio y los datos operativos comparten un vocabulario y definiciones comunes o tienen una función de mapeo bien definida, evitando duplicidad o confusión cuando se incluyen sistemas heredados o externos.
- Principios relacionados: —
- Referencias: https://www.go-fair.org/fair-principles/

<a id="principles-d06"></a>
## Los datos son fáciles de encontrar

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:D06</code></span>

- Dominio: Data
- Descripción: Los datos y los metadatos deben ser fáciles de localizar tanto para las personas como para las computadoras.
- Justificación: El primer paso para (re)utilizar datos es encontrarlos. Los metadatos y los datos deben ser fáciles de localizar tanto para las personas como para las computadoras. Los metadatos legibles por máquinas son esenciales para el descubrimiento automático de conjuntos de datos y servicios.
- Implicaciones: Los datos y los metadatos deben estar indexados en catálogos de datos accesibles públicamente y ser fácilmente localizables mediante motores de búsqueda comunes., Los metadatos deben seguir estándares reconocidos para asegurar su interoperabilidad y facilidad de uso.
- Principios relacionados: —
- Referencias: https://www.go-fair.org/fair-principles/

<a id="principles-d07"></a>
## Los datos son accesibles

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:D07</code></span>

- Dominio: Data
- Descripción: Los datos y los metadatos deben ser accesibles, incluso cuando los datos reales no estén disponibles.
- Justificación: Una vez que la persona usuaria encuentra los datos requeridos, debe saber cómo acceder a ellos, posiblemente incluyendo autenticación y autorización.
- Implicaciones: Los datos y los metadatos deben estar disponibles a través de protocolos estándar y abiertos., Los datos deben estar disponibles en formatos que sean accesibles para personas con discapacidades.
- Principios relacionados: —
- Referencias: https://www.go-fair.org/fair-principles/

<a id="principles-d08"></a>
## Los datos son interoperables

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:D08</code></span>

- Dominio: Data
- Descripción: Los datos y los metadatos deben ser interoperables, lo que significa que pueden ser utilizados y comprendidos por diferentes sistemas y aplicaciones.
- Justificación: Los datos suelen necesitar integrarse con otros datos. Además, los datos deben interoperar con aplicaciones o flujos de trabajo para su análisis, almacenamiento y procesamiento.
- Implicaciones: Los datos y los metadatos deben seguir estándares abiertos y ampliamente aceptados para asegurar su interoperabilidad., Se deben proporcionar herramientas y servicios que faciliten la integración de datos de diferentes fuentes.
- Principios relacionados: —
- Referencias: https://www.go-fair.org/fair-principles/

<a id="principles-d09"></a>
## Los datos son reutilizables

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:D09</code></span>

- Dominio: Data
- Descripción: Los datos y los metadatos deben ser reutilizables, lo que significa que pueden ser utilizados para múltiples propósitos y en diferentes contextos.
- Justificación: El objetivo último de FAIR es optimizar la reutilización de los datos. Para lograrlo, los metadatos y los datos deben estar bien descritos, de modo que puedan replicarse y/o combinarse en distintos contextos.
- Implicaciones: Los datos y los metadatos deben estar acompañados de información clara sobre su origen, licencia y condiciones de uso., Se deben seguir estándares y mejores prácticas para la documentación y el almacenamiento de datos.
- Principios relacionados: —
- Referencias: https://www.go-fair.org/fair-principles/

<a id="principles-t01"></a>
## La arquitectura del sistema es global

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:T01</code></span>

- Dominio: Technology
- Descripción: Todas las partes interesadas deben seguir y cumplir las directrices de una arquitectura de sistema integral ideada por los órganos rectores.
- Justificación: Un sistema complejo requiere un plano bien definido para evolucionar sin dificultades. Internet es un ejemplo esencial de un sistema vasto e intrincado con una multitud de aplicaciones y tecnologías, todas coordinadas a través de un conjunto de estándares y arquitecturas. Los nuevos paradigmas de diseño de sistemas de ingeniería exigen intervenciones con consideraciones cuidadosas de las complejidades de un sistema sociotécnico como el transporte público.
- Implicaciones: Los órganos rectores deben funcionar como planificadores tecnológicos, propietarios de producto y árbitros, y deben desarrollar la experiencia técnica requerida para estos roles. Sin embargo, al diseñar dicha arquitectura, se debe prestar atención para asegurar que no se convierta en un obstáculo para la modernización futura y la interoperabilidad.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-t02"></a>
## La arquitectura es modular, conectada y abierta

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:T02</code></span>

- Dominio: Technology
- Descripción: Elija soluciones modulares para casos de uso específicos, manteniendo la coherencia del sistema. Las arquitecturas modulares también permiten integrar nuevas capacidades especializadas sin quedar atado a las limitaciones de plataformas monolíticas ni a funcionalidades empaquetadas no deseadas. Cree ecosistemas digitales flexibles donde las aplicaciones se comuniquen sin esfuerzo con los sistemas existentes. La conectividad con enfoque en API garantiza que sus iniciativas escalen de forma coherente, permitiendo la experimentación rápida y el despliegue de capacidades inteligentes.
- Justificación: Las arquitecturas modulares, conectadas y abiertas permiten una mayor flexibilidad, escalabilidad y adaptabilidad en la implementación de tecnologías para el transporte público. Facilitan la integración de nuevas funcionalidades y la colaboración entre diferentes proveedores y sistemas. Construya tecnología, equipos y estrategias organizacionales sobre una base de transparencia e intercambio de datos. Las arquitecturas abiertas permiten un flujo de información sin fricciones, generando conocimientos unificados que impulsan objetivos organizacionales más amplios mediante inteligencia colaborativa.
- Implicaciones: Las soluciones tecnológicas deben diseñarse como módulos independientes que puedan integrarse fácilmente con otros componentes del sistema., Se deben utilizar APIs estándar para asegurar la comunicación fluida entre diferentes sistemas y aplicaciones.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-t03"></a>
## La arquitectura permite una implementación incremental y adaptable

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:T03</code></span>

- Dominio: Technology
- Descripción: Es prioritario el desarrollo y la entrega continua y la experimentación para alcanzar resultados medibles.
- Justificación: Los enfoques incrementales permiten validar modelos en producción, escalar automáticamente las implementaciones exitosas y mantener la estabilidad del sistema mientras se experimenta con nuevas capacidades inteligentes.
- Implicaciones: Las implementaciones deben planificarse en fases, con entregas regulares de valor al negocio y a las personas usuarias., Se deben establecer mecanismos para recopilar retroalimentación continua y ajustar las implementaciones según sea necesario.
- Principios relacionados: —
- Referencias: —

<a id="principles-t04"></a>
## Los sistemas son autónomos

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:T04</code></span>

- Dominio: Technology
- Descripción: Habilite a las organizaciones para responder con rapidez a requisitos internos y externos mediante automatización inteligente y sistemas autogestionados.
- Justificación: Los enfoques autónomos reducen la intervención manual mientras mantienen la agilidad y la adaptabilidad en marcos interoperables.
- Implicaciones: Los sistemas deben incorporar capacidades de auto-monitoreo y auto-corrección para mantener su funcionamiento óptimo., Se deben implementar mecanismos de supervisión remota para detectar y resolver problemas sin necesidad de intervención física.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-t05"></a>
## El sistema promueve la independencia tecnológica

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:T05</code></span>

- Dominio: Technology
- Descripción: Las implementaciones deben ser independientes de elecciones tecnológicas particulares, permitiendo funcionar en múltiples plataformas y junto a sistemas externos.
- Justificación: La independencia tecnológica resulta en implementaciones flexibles, escalables y costo-efectivas, mientras minimiza el riesgo de obsolescencia. Se incrementa la accesibilidad y compatibilidad con diferentes opciones tecnológicas, así como la innovación y resiliencia de los resultados.
- Implicaciones: Los estándares deben seguirse en las etapas principales de la implementación. Críticamente, los procesos de contratación pública deben incorporar esto en sus requisitos., Las agencias de transporte, otros proveedores de servicios de movilidad y los viajeros deben poder seleccionar los componentes tecnológicos de transporte que mejor se adapten a sus necesidades.
- Principios relacionados: —
- Referencias: https://machalliance.org/mach-principles, https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-t06"></a>
## El sistema garantiza la interoperabilidad

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:T06</code></span>

- Dominio: Technology
- Descripción: Las implementaciones deben seguir estándares establecidos para asegurar compatibilidad e intercambio efectivo de información entre sistemas.
- Justificación: Este enfoque mejora la eficiencia al permitir integración fluida de diferentes tecnologías. Reduce costos al utilizar infraestructura existente y fomenta la innovación mediante la colaboración. Adherirse a estándares también asegura consistencia y mejora la gestión del sistema, mientras maximiza el retorno de inversión y apoya la integración de proveedores y la eficiencia de la cadena de suministro. La sostenibilidad del transporte público depende de la interoperabilidad (protocolos, formatos de datos, contenidos), la innovación y la colaboración entre organizaciones públicas y privadas.
- Implicaciones: Se requiere un protocolo para idear o adoptar y revisar estándares relevantes. Las plataformas actuales deben identificarse y documentarse. Los estándares deben seguirse a menos que exista una fuerte justificación de negocio para desviarse. Debe establecerse un mecanismo de gobernanza digital para supervisar este principio.
- Principios relacionados: —
- Referencias: https://machalliance.org/mach-principles, https://doi.org/10.1109/CONCAPAN63470.2024.10933847, https://www.interoperablemobility.org/

<a id="principles-t07"></a>
## El sistema favorece el software de código abierto

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:T07</code></span>

- Dominio: Technology
- Descripción: El software libre y de código abierto garantiza que las mejoras tecnológicas necesarias sean posibles y favorece un mercado competitivo de servicios tecnológicos.
- Justificación: El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.
- Implicaciones: Siempre que sea posible, se debe preferir el software de código abierto y libre para nuevas implementaciones. Esto incluye tanto software desarrollado internamente como soluciones de terceros. Se debe fomentar la contribución a proyectos de código abierto relevantes y la colaboración con la comunidad.
- Principios relacionados: —
- Referencias: https://opensource.org/

<a id="principles-b01"></a>
## El servicio maximiza los beneficios para las personas usuarias

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:B01</code></span>

- Dominio: Business
- Descripción: Un servicio público debe priorizar la mejora continua de la experiencia de sus personas usuarias.
- Justificación: Los beneficios económicos y sociales de las tecnologías para el transporte público derivan, en última instancia, de la efectividad y conveniencia que brindan a sus usuarios. El transporte público es una parte integral de la vida moderna: proporciona acceso a oportunidades económicas, educación, comunidad, participación cívica y atención médica, especialmente para las poblaciones dependientes del transporte.
- Implicaciones: Se deben realizar actualizaciones continuas del sistema de información para responder mejor a las necesidades cambiantes de las personas pasajeras., El transporte público es una infraestructura crítica que debe mantenerse viable y accesible para todas las personas., Las personas usuarias del transporte público merecen una experiencia transparente, confiable y segura, y en paridad o mejor que otras opciones de movilidad en tiempo y costo., Todas las personas y el público en general deben estar empoderados, a través de datos de movilidad de alta calidad y bien distribuidos, para encontrar, acceder y utilizar opciones de movilidad de calidad que respondan a sus necesidades según lo consideren conveniente., Subsidiariedad y proporcionalidad., Enfoque en el usuario.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-b02"></a>
## El servicio procura sostenibilidad financiera y asequibilidad

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:B02</code></span>

- Dominio: Business
- Descripción: La implementación de nuevas tecnologías debe garantizar un financiamiento adecuado para minimizar los riesgos financieros de las empresas privadas proveedoras del servicio, manteniendo a la vez costos razonables para las personas pasajeras.
- Justificación: Sin un modelo de negocio sostenible, el modelo de concesión del transporte público en Costa Rica no puede existir y, de hecho, el servicio mismo se ve amenazado. Nuevos costos operativos derivados de estas tecnologías empeorarían la situación, sin importar cuán útiles e importantes sean.
- Implicaciones: El diseño del sistema debe planificarse cuidadosamente para permitir una implementación gradual y de bajo costo inicial. Se podría discutir nueva legislación para realizar cambios estructurales relacionados, por ejemplo, con los mecanismos de financiamiento de nuevas tecnologías. También deben discutirse subsidios, como sugieren muchas entidades técnicas.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847
