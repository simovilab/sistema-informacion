# Arquitectura del sistema

::: info Puntos clave

- Lista de conclusiones importantes o mensajes clave (_key takeaways_)
- Síntesis de toda esta página

:::

A nivel tecnológico, un sistema de información para el transporte público tiene dos grandes etapas: recopilación y producción de datos y consumo y distribución de datos. El diseño de la arquitectura debe tomar en cuenta el público meta de estos datos. En InfoTP, el objetivo principal es proveer información oportuna a las personas usuarias. Sin embargo, la infraestructura también habilita el aprovechamiento de estos datos para todos los actores del transporte público: operadores, gestores, planificadores, reguladores, investigadores, sector civil, entre otros.

Con la implementación de un apropiado sistema de información del transporte público –incluyendo los datos en tiempo real provistos por GPS– es esperable, según la literatura, un aumento de la utilización del servicio y una mayor satisfacción con el mismo. Es necesario, sin embargo, un cuidadoso diseño e implementación de las tecnologías y sistemas interconectados.

Es importante recordar que en 2017 fueron instalados cerca de 1700 equipos GPS en autobuses de la GAM, sin que esto significara una mejoría de la información disponible para las personas usuarias. Según entrevistas realizadas, esta información tampoco estuvo fácilmente disponible para CTP, MOPT, ARESEP o la academia, y los dispositivos sufrieron episodios de vandalismo. Este es un importante precedente que demuestra que las tecnologías por sí solas, sin una visión general, no necesariamente cumplen los propósitos trazados. Es crucial, por tanto, realizar este nuevo proceso con objetivos claros y un adecuado plan de implementación.

La “interoperabilidad” de los sistemas tecnológicos asociados con el transporte público es la capacidad de varios subsistemas heterogéneos (diferentes tecnologías, diferentes proveedores, diferentes entidades) de interactuar entre sí. Así, por ejemplo, una pantalla de información en tiempo real en una parada de bus, administrada por una municipalidad, recibe datos de un servidor administrado por CTP, que recibe información de alertas de la CNE, datos meteorológicos del IMN y datos en tiempo real de autobuses provistos por múltiples proveedores distintos de equipos GPS.

Este tipo de interoperabilidad es promovido por las principales agencias de transporte de los Estados Unidos, pioneras en el transporte público inteligente, por medio de los “Principios de Interoperabilidad de los Datos de Movilidad” (MDIP, Mobility Data Interoperability Principles).

Esto es especialmente útil o necesario en un sistema de administración del transporte público atomizado como el de Costa Rica, donde no es posible asumir que una única entidad cuenta con recursos suficientes para un despliegue tecnológico de tal magnitud.

Proponemos la interoperabilidad y la neutralidad tecnológica, junto con los datos abiertos y estandarizados, como premisas de diseño del sistema, como una práctica recomendada internacionalmente pero también como una medida necesaria para facilitar la implementación en Costa Rica. Es importante anotar que, a nuestro criterio, la interoperabilidad y la neutralidad tecnológica no limitan las posibilidades tecnológicas, sino más bien las expanden.

Las personas usuarias deben percibir al transporte público del país como un único servicio, independientemente de la estructura administrativa por detrás. A pesar de que aquí sugerimos la interoperabilidad y neutralidad tecnológica como promotores de la participación diversificada de actores y tecnologías para recolección, análisis y canales de comunicación, es cierto también que la información debe tener una única fuente confiable para facilitar su uso.

Esto tiene una primera implicación inmediata: que las empresas autobuseras no deberían ser las responsables de difundir su información del servicio. En cambio, hacemos un llamado a romper con este modelo de gestión al nivel operativo y pasar a una estructura en el ámbito digital en la que el CTP tutela el sistema de información del servicio, enfocando sus esfuerzos en entregar datos de calidad provenientes de todas las empresas concesionarias para todos los canales de distribución de información.

## Recopilación y producción de datos

Desde los vehículos en carretera, desde las oficinas administrativas o desde otros sistemas interconectados surgen datos

## Consumo y distribución de datos
