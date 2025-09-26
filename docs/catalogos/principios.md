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


<a id="principles-001"></a>
## Maximizar beneficios para las personas usuarias

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:001</code></span>

- Dominio: Negocio
- Descripción: Un servicio público debe priorizar la mejora continua de la experiencia de sus personas usuarias.
- Justificación: Los beneficios económicos y sociales de las tecnologías para el transporte público derivan, en última instancia, de la efectividad y conveniencia que brindan a sus usuarios.
- Implicaciones: Se deben realizar actualizaciones continuas del sistema de información para responder mejor a las necesidades cambiantes de las personas pasajeras.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-002"></a>
## Sostenibilidad financiera y asequibilidad del servicio

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:002</code></span>

- Dominio: Negocio
- Descripción: La implementación de nuevas tecnologías debe garantizar un financiamiento adecuado para minimizar los riesgos financieros de las empresas privadas proveedoras del servicio, manteniendo a la vez costos razonables para las personas pasajeras.
- Justificación: Sin un modelo de negocio sostenible, el modelo de concesión del transporte público en Costa Rica no puede existir y, de hecho, el servicio mismo se ve amenazado. Nuevos costos operativos derivados de estas tecnologías empeorarían la situación, sin importar cuán útiles e importantes sean.
- Implicaciones: El diseño del sistema debe planificarse cuidadosamente para permitir una implementación gradual y de bajo costo inicial. Se podría discutir nueva legislación para realizar cambios estructurales relacionados, por ejemplo, con los mecanismos de financiamiento de nuevas tecnologías. También deben discutirse subsidios, como sugieren muchas entidades técnicas.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-003"></a>
## Los datos del servicio son abiertos y estandarizados

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:003</code></span>

- Dominio: Datos
- Descripción: Todos los datos relacionados con el servicio que deben brindarse a las personas pasajeras para facilitar el uso del sistema deben ser abiertos y de fácil acceso para consumo público.
- Justificación: Existe una obligación de los proveedores de un servicio público de ser claros y transparentes con toda la información que sus usuarios necesitan para hacer uso efectivo del mismo, mientras que las entidades rectoras tienen la obligación de coordinar el esfuerzo de compartir datos de tránsito abiertos y estandarizados.
- Implicaciones: Las entidades rectoras crearán los canales adecuados para compartir datos abiertos, incluyendo una arquitectura tecnológica que permita la evolución sostenible de los sistemas, disponible sin restricciones para su consumo y análisis por cualquier parte interesada, incluyendo empresas privadas, investigadores, la prensa y otros.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847, https://www.go-fair.org/fair-principles/

<a id="principles-004"></a>
## Los datos operativos se comparten

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:004</code></span>

- Dominio: Datos
- Descripción: Los datos operativos son un activo para múltiples partes interesadas del sistema y deben ser accesibles para la eficiencia, la regulación y la mejora continua.
- Justificación: La concesión de un servicio público requiere una inspección cercana por parte de los órganos rectores y reguladores. Para este propósito, los datos operativos son importantes y valiosos para evaluar la efectividad y el cumplimiento legal de la empresa, lo cual es de máximo interés público.
- Implicaciones: Los órganos rectores y reguladores deben definir qué datos deben compartirse con ellos. Los datos a compartir (ocupación, emisiones, etc.) —aunque no necesariamente de forma pública— ayudarán a examinar, regular y mejorar el servicio.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847, https://www.go-fair.org/fair-principles/

<a id="principles-005"></a>
## Vocabulario común y definiciones de datos

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:005</code></span>

- Dominio: Datos
- Descripción: Todos los componentes tecnológicos del sistema seguirán un conjunto único de conceptos y definiciones.
- Justificación: Un sistema tecnológico complejo requiere consistencia entre sus componentes en el entendimiento de sus definiciones, elementos y relaciones. Esto permitirá una expansión e integración más sencilla con las ciudades inteligentes, en general.
- Implicaciones: Todas las bases de datos e intercambios de datos internos deben seguir, lo más cercanamente posible, las definiciones de estándares predefinidos y aplicables. Los datos de servicio y los datos operativos comparten un vocabulario y definiciones comunes o tienen una función de mapeo bien definida, evitando duplicidad o confusión cuando se incluyen sistemas heredados o externos.
- Principios relacionados: —
- Referencias: https://www.go-fair.org/fair-principles/

<a id="principles-006"></a>
## Unicidad de la información

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:006</code></span>

- Dominio: Aplicación
- Descripción: La información disponible para las personas usuarias es consistente, precisa, actualizada y de una única fuente, a través de la mayor cantidad posible de canales de comunicación.
- Justificación: Las personas pasajeras requieren información del sistema de transporte público como un todo. Actualmente, en Costa Rica, cada concesionario privado es responsable de compartir la información de su servicio, resultando en una severa falta de disponibilidad, con menos del 15% de las rutas presentando datos completos y consistentes en línea y sin una guía clara de cómo compartir esta información.
- Implicaciones: Todas las personas concesionarias seguirán los requisitos de recolección y compartición de datos establecidos por los órganos rectores. Esto no limita quién puede recolectar y compartir estos datos —por ejemplo, empresas TIC privadas de terceros— pero los detalles técnicos se establecen previamente.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-007"></a>
## Facilidad de uso y accesibilidad

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:007</code></span>

- Dominio: Aplicación
- Descripción: El servicio debe diseñarse para todas las personas usuarias.
- Justificación: Los sistemas tecnológicos modernos deben ser sensibles a las necesidades de usuarios con diferentes capacidades físicas y cognitivas o conocimientos previos.
- Implicaciones: Deben seguirse recomendaciones de diseño del servicio para asegurar accesibilidad en señalización gráfica, medios digitales, estrategias de comunicación y otros puntos de contacto entre el sistema y las personas usuarias. El sistema también debe seguir desde el inicio un proceso de internacionalización (i18n) proporcionando información que sea comprensible para la mayoría de visitantes internacionales. Por ejemplo, se deben realizar traducciones al menos al inglés para señalización de orientación, alertas y otros datos en medios impresos y digitales. Nuevas tecnologías de inteligencia artificial generativa como los modelos de lenguaje (LLM) podrían y deberían usarse para ampliar estas capacidades.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-008"></a>
## Arquitectura de sistema único

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:008</code></span>

- Dominio: Tecnología
- Descripción: Todas las partes interesadas deben seguir y cumplir las directrices de una arquitectura de sistema integral ideada por los órganos rectores.
- Justificación: Un sistema complejo requiere un plano bien definido para evolucionar sin dificultades. Internet es un ejemplo esencial de un sistema vasto e intrincado con una multitud de aplicaciones y tecnologías, todas coordinadas a través de un conjunto de estándares y arquitecturas. Los nuevos paradigmas de diseño de sistemas de ingeniería exigen intervenciones con consideraciones cuidadosas de las complejidades de un sistema sociotécnico como el transporte público.
- Implicaciones: Los órganos rectores deben funcionar como planificadores tecnológicos, propietarios de producto y árbitros, y deben desarrollar la experiencia técnica requerida para estos roles. Sin embargo, al diseñar dicha arquitectura, se debe prestar atención para asegurar que no se convierta en un obstáculo para la modernización futura y la interoperabilidad.
- Principios relacionados: —
- Referencias: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-009"></a>
## Independencia tecnológica

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:009</code></span>

- Dominio: Tecnología
- Descripción: Las implementaciones deben ser independientes de elecciones tecnológicas particulares, permitiendo funcionar en múltiples plataformas y junto a sistemas externos.
- Justificación: La independencia tecnológica resulta en implementaciones flexibles, escalables y costo-efectivas, mientras minimiza el riesgo de obsolescencia. Se incrementa la accesibilidad y compatibilidad con diferentes opciones tecnológicas, así como la innovación y resiliencia de los resultados.
- Implicaciones: Los estándares deben seguirse en las etapas principales de la implementación. Críticamente, los procesos de contratación pública deben incorporar esto en sus requisitos.
- Principios relacionados: —
- Referencias: https://machalliance.org/mach-principles, https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-010"></a>
## Interoperabilidad

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:010</code></span>

- Dominio: Tecnología
- Descripción: Las implementaciones deben seguir estándares establecidos para asegurar compatibilidad e intercambio efectivo de información entre sistemas.
- Justificación: Este enfoque mejora la eficiencia al permitir integración fluida de diferentes tecnologías. Reduce costos al utilizar infraestructura existente y fomenta la innovación mediante la colaboración. Adherirse a estándares también asegura consistencia y mejora la gestión del sistema, mientras maximiza el retorno de inversión y apoya la integración de proveedores y la eficiencia de la cadena de suministro.
- Implicaciones: Se requiere un protocolo para idear o adoptar y revisar estándares relevantes. Las plataformas actuales deben identificarse y documentarse. Los estándares deben seguirse a menos que exista una fuerte justificación de negocio para desviarse. Debe establecerse un mecanismo de gobernanza digital para supervisar este principio.
- Principios relacionados: —
- Referencias: https://machalliance.org/mach-principles, https://doi.org/10.1109/CONCAPAN63470.2024.10933847, https://www.interoperablemobility.org/

<a id="principles-011"></a>
## Separación de responsabilidades

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:011</code></span>

- Dominio: Arquitectura de software
- Descripción: Las distintas preocupaciones deben separarse en secciones del sistema para mejorar mantenibilidad y escalabilidad.
- Justificación: Al separar responsabilidades, reducimos complejidad y facilitamos la gestión de cambios.
- Implicaciones: Los módulos deben tener responsabilidades e interfaces claras.
- Principios relacionados: —
- Referencias: https://en.wikipedia.org/wiki/Separation_of_concerns

<a id="principles-012"></a>
## Principio de responsabilidad única

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:012</code></span>

- Dominio: Arquitectura de software
- Descripción: Una clase o módulo debe tener una, y solo una, razón para cambiar.
- Justificación: Este principio ayuda a reducir el impacto de los cambios y mejora la legibilidad del código.
- Implicaciones: Las clases deben diseñarse para manejar una única funcionalidad.
- Principios relacionados: principles:001
- Referencias: https://en.wikipedia.org/wiki/Single_responsibility_principle

<a id="principles-013"></a>
## No te repitas (DRY)

<span class="catalog-badge" style="--catalog-badge-bg:#F0F9EB"><span class="catalog-icon material-symbols-outlined">verified</span><code style="background:none;padding:0;margin:0;border:0;">principles:013</code></span>

- Dominio: Arquitectura de software
- Descripción: Cada pieza de conocimiento debe tener una representación única, inequívoca y autoritativa dentro de un sistema.
- Justificación: Evitar duplicación reduce el riesgo de inconsistencias y facilita el mantenimiento.
- Implicaciones: El código debe ser modular y reutilizable.
- Principios relacionados: principles:001, principles:002
- Referencias: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
