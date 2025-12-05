# Visión del sistema

Este informe es el resultado de la investigación sobre tecnologías de información y comunicación aplicadas al transporte público, y propone una _arquitectura tecnológica_ junto con una _estrategia de comunicación_ para la creación de **un sistema de información para las personas usuarias del transporte público inteligente**, llamado **InfoTP**.

::: info Nuestras premisas

- La digitalización del transporte público requiere una **visión integral**, capaz de satisfacer las necesidades actuales y preparar el camino para atender las necesidades futuras.
- La información _completa_, _accesible_ y _actualizada_ del servicio de transporte público facilita un **uso efectivo del sistema**.
- En el contexto costarricense, la _calidad de la información_ disponible **mejora significativamente la satisfacción** de las personas usuarias con el servicio.
- Los _sistemas digitales_ y la _inteligencia artificial_ ofrecen nuevas oportunidades concretas para facilitar el **acceso oportuno y por múltiples canales de comunicación** a la información.
- El diseño de una _arquitectura tecnológica_ es clave para **maximizar los beneficios** de la implementación de un sistema tecnológico complejo como el propuesto.
- Los **sistemas inteligentes** pueden mejorar significativamente las tareas de operación, gestión, planificación, regulación e investigación del transporte público.

:::

En las siguientes secciones hay una ampliación de estas ideas, con referencias al desarrollo de cada una dentro del informe.

## Principios

### "Yo elijo usar el transporte público"

> La revolución no sucede cuando la sociedad adopta **nuevas tecnologías**, sucede cuando la sociedad adopta **nuevos comportamientos**.
>
> <div class="italic text-xs mt-2">Clay Shirky, experto en el impacto social de las tecnologías</div>

Elegir el transporte público es ampliamente reconocido como un impulso para la economía, para el medio ambiente y para nuestro propio bienestar. Queremos promover ese comportamiento e incentivar a las personas a tomar constantemente esa elección.

La elección del transporte público es una decisión compleja que requiere de muchos factores como , sin embargo, la información es un factor de peso, y la digitalización una de los formas más efectivas de

Si nos preguntamos ¿por qué digitalizar el transporte público?, hay muchas respuestas.

<Ref url="./diseno/principios" icon="directions_bus">Principios de diseño</Ref>

### Más información es mejor satisfacción

Los estudios realizados en la Universidad de Costa Rica demuestran que la **información** es en la actualidad **el factor más decisivo** en la satisfacción con el servicio de las personas usuarias.

<Mermaid :code="`
flowchart LR
    I[Información]
    F([Frecuencia])
    S([Seguridad])
    P([Paradas])
    SS((Satisfacción))
    I --0.763--> F
    I --0.650--> S
    I --0.837--> P
    F --0.601--> SS
    S --0.215--> SS
    P --0.136--> SS
`" />

En particular, las tecnologías digitales habilitan algunas posibilidades apreciadas por las personas usuarias:

Información en tiempo real
Colaboración de la comunidad
Accesibilidad

### Más y mejor información con tecnologías digitales

Los sistemas inteligentes de transporte público son parte de algo más grande. La visión de una ciudad inteligente tiene en su corazón sistemas que son capaces de comunicarse entre sí.

#### Conexiones abiertas, ideas libres

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

## Diseño

::: info ¿Qué imaginamos cuando pensamos en el transporte público?

Entonces sí y luego también y además después.

:::

<Ref url="/diseno/" icon="directions_bus">Diseño</Ref>

### Un sistema nativo

Vivimos plenamente en la época de la información y también en un momento de nuevas sensibilidades y conciencia sobre la importancia del transporte público para todos. Debemos diseñar un sistema adaptado a estas circunstancias. Por eso, este sistema es **nativo**.

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">
        Nativo
        <i>digital</i>
      </div>
      <div class="cell-icon">
        <span class="material-symbols-outlined">computer</span>
      </div>
    </div>
    <div class="cell-content">
      Todos los canales digitales de comunicación deben formar parte de la oferta de información del servicio.
    </div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">
        Nativo
        <i>móvil</i>
      </div>
      <div class="cell-icon">
        <span class="material-symbols-outlined">smartphone</span>
      </div>
    </div>
    <div class="cell-content">
      La mayoría de consultas del servicio vienen desde teléfonos celulares, y por eso el diseño debe estar centrado en este medio.
    </div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">
        Nativo
        <i>inclusivo</i>
      </div>
      <div class="cell-icon">
        <span class="material-symbols-outlined">accessibility</span>
      </div>
    </div>
    <div class="cell-content">
      El transporte público es para todos. La información oportuna y con diseño universal puede facilitar la experiencia de uso de todas las personas.
    </div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">
        Nativo
        <i>inteligente</i>
      </div>
      <div class="cell-icon">
        <span class="material-symbols-outlined">psychology</span>
      </div>
    </div>
    <div class="cell-content">
      Las nuevas herramientas de inteligencia artificial deben permitir a las personas usuarias utilizar lenguaje natural para hacer consultas sobre el servicio.
    </div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">
        Nativo
        <i>social</i>
      </div>
      <div class="cell-icon">
        <span class="material-symbols-outlined">groups</span>
      </div>
    </div>
    <div class="cell-content">
      Las redes sociales y los medios de atención al cliente son canales primordiales para informar y para crear comunidad alrededor del transporte público.
    </div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">
        Nativo
        <i>multilingüe</i>
      </div>
      <div class="cell-icon">
        <span class="material-symbols-outlined">translate</span>
      </div>
    </div>
    <div class="cell-content">
      En un país de vocación turística como Costa Rica, el transporte público no debe poner barreras del lenguaje a quienes nos visitan desde cualquier parte del mundo.
    </div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">
        Nativo
        <i>tico</i>
      </div>
      <div class="cell-icon">
        <span class="material-symbols-outlined">flag</span>
      </div>
    </div>
    <div class="cell-content">
      Es parte de nuestros pueblos, es parte de nuestras ciudades. El transporte público debe ser parte de nuestro orgullo tico.
    </div>
  </div>
</div>

Los estudios realizados en la Universidad de Costa Rica demuestran que la **información** es actualmente **el factor más decisivo** en la satisfacción con el servicio de las personas usuarias.

<Ref url="./diseno/experiencia/" icon="directions_bus">Experiencia del servicio</Ref>

### Una estrategia integral de comunicación por todos los canales

El objetivo principal de esta propuesta no es construir **una** aplicación móvil, sino crear la infraestructura digital para tener **muchas** aplicaciones: aplicaciones móviles, sitios web, información impresa, señalética, campañas de redes sociales y más, todo de forma coherente entre sí.

La información nos llega de todas partes. ¿Por qué limitarnos con el transporte público? Con datos abiertos y estandarizados esto no es un problema.

Concepto clave: datos abiertos y estandarizados.

Y hablamos de los medios de comunicación digital del presente y del futuro también. ¿Habrá señales de tránsito holográficas tridimensionales? Estaremos preparados para ese momento, con algunos pequeños ajustes.

<Ref url="./diseno/experiencia/" icon="directions_bus">Canales de comunicación</Ref>

### Una arquitectura tecnológica, muchas opciones

Una arquitectura tecnológica ofrece

¿Nuevas tecnologías?, ¿uno solo o distintos desarrolladores y proveedores tecnológicos?, ¿diferentes fuentes de financiamiento? Estas son opciones en la arquitectura propuesta.

Las tecnologías digitales... pero es necesario considerar algunas características de un sistema de información de transporte público, propia de cualquier sistema técnico y social complejo:

- Es un sistema de sistemas
- No es un sistema aislado
- Es parte de un contexto sociotécnico complejo
- Evoluciona con el tiempo

Los sistemas inteligentes de transporte público son parte de algo más grande. La visión de una ciudad inteligente tiene en su corazón sistemas que son capaces de comunicarse entre sí.

<Ref url="./desarrollo/arquitectura" icon="checklist">Arquitectura tecnológica</Ref>

## Desarrollo

::: info La ciudad inteligente comienza aquí

Los sistemas inteligentes de transporte público son parte de algo más grande. La visión de una ciudad inteligente tiene en su corazón sistemas que son capaces de comunicarse entre sí.

Interoperabilidad

Los sistemas inteligentes de transporte público son parte de algo más grande. La visión de una ciudad inteligente tiene en su corazón sistemas que son capaces de comunicarse entre sí.

:::

<Ref url="/desarrollo/" icon="checklist">Desarrollo</Ref>

### Databús

### Infobús

### AdminTP

### DevOpsTP

## Gestión

::: info Un sistema de sistemas

La estrategia de operación y mantenimiento de un _sistema de sistemas_ como el propuesto debe ser especializada.

:::

<Ref url="/gestion/" icon="architecture">Gestión</Ref>

### Nuevo modelo de gobernanza

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

> Un sistema complejo que funciona proviene de **un sistema simple que funcionaba**.
>
> <div class="italic text-xs mt-2">John Gall, pionero de la teoría de sistemas</div>

No es un escenario "todo o nada".

<Ref url="/gestion/monetizacion" icon="architecture">Gobernanza</Ref>

### Estrategias de seguimiento para un sistema dinámico

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

<Ref url="/gestion/unidad-tecnica" icon="architecture">Unidad técnica</Ref>

### Flexibilidad en las fuentes de financiamiento

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

<Ref url="/gestion/monetizacion" icon="architecture">Monetización</Ref>

## Plan piloto

::: info El camino para hacer realidad esta visión

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

:::

<Ref url="/piloto/" icon="architecture">Plan piloto</Ref>

### Tecnologías robustas

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

<Ref url="./piloto/propuesta-tecnica" icon="architecture">Propuesta técnica</Ref>

### Una propuesta competitiva

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

<Ref url="./piloto/propuesta-financiera" icon="architecture">Propuesta financiera</Ref>

## Catálogos

::: info El detalle del contexto

Para elaborar una propuesta robusta, es necesario tener un conocimiento extenso del contexto en el que se desarrolla el proyecto. Para esto, hemos sistematizado.

Los elementos más importantes de la investigación están compilados en una serie de catálogos donde están los elementos más importantes del sistema, incluyendo los principios de diseño, los sectores sociales interesados, las tecnologías y estándares, entre otros.

:::

<Ref url="./catalogos/" icon="architecture">Catálogos</Ref>

Los elementos más importantes de la investigación están compilados en una serie de catálogos donde están los elementos más importantes del sistema, incluyendo los principios de diseño, los sectores sociales interesados, las tecnologías y estándares, entre otros.

Toda la propuesta está interrelacionada con los elementos de estos catálogos, para procurar una propuesta consistente y justificada.
