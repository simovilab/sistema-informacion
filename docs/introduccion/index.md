# Visión

La digitalización del transporte público requiere una **visión integral**, capaz de satisfacer las necesidades actuales y preparar el camino para atender las necesidades futuras.

Este informe es el resultado de la investigación sobre tecnologías de información y comunicación (TIC) aplicadas al transporte público, y ofrece una propuesta de _arquitectura tecnológica_ para la creación de **un sistema de información para la movilidad inteligente** (SIMI).

::: info Nuestras premisas

- La información _completa_, _accesible_ y _actualizada_ del servicio de transporte público facilita un **uso efectivo del sistema**.
- En el contexto costarricense, la _calidad de la información_ disponible **mejora significativamente la satisfacción** de las personas usuarias con el servicio.
- Los _sistemas digitales_ y la _inteligencia artificial_ ofrecen nuevas oportunidades concretas para facilitar el **acceso oportuno y por múltiples canales de comunicación** a la información.
- El diseño de una _arquitectura tecnológica_ es clave para **maximizar los beneficios** de la implementación de un sistema tecnológico complejo como el propuesto.
- Los sistemas inteligentes pueden mejorar significativamente las tareas de operación, gestión, planificación, regulación e investigación del transporte público.

En las siguientes secciones hay una ampliación de estas ideas, con referencias al desarrollo de cada una dentro del informe.

:::

## Principios

### "Yo elijo usar el transporte público"

> La revolución no sucede cuando la sociedad adopta **nuevas tecnologías**, sucede cuando la sociedad adopta **nuevos comportamientos**.
>
> <div class="italic text-xs mt-2">Clay Shirky, experto en el impacto social de las tecnologías</div>

Elegir el transporte público es ampliamente reconocido como un impulso para la economía, para el medio ambiente y para nuestro propio bienestar. Queremos promover ese comportamiento e incentivar a las personas a tomar constantemente esa elección.

The <Concept term="api">API</Concept> allows different systems to communicate.

La elección del transporte público es una decisión compleja que requiere de muchos factores como , sin embargo, la información es un factor de peso, y la digitalización una de los formas más efectivas de

Si nos preguntamos ¿por qué digitalizar el transporte público?, hay muchas respuestas.

<Ref url="./diseno/principios" icon="directions_bus">Principios de diseño</Ref>

## Diseño

### Una estrategia integral de comunicación

La información nos llega de todas partes. ¿Por qué limitarnos con el transporte público? Con datos abiertos y estandarizados esto no es un problema.

Concepto clave: datos abiertos y estandarizados.

Y hablamos de los medios de comunicación digital del presente y del futuro también. ¿Habrá señales de tránsito holográficas tridimensionales? Estaremos preparados para ese momento, con algunos pequeños ajustes.

Los estudios realizados en la Universidad de Costa Rica demuestran que la **información** es actualmente **el factor más decisivo** en la satisfacción con el servicio de las personas usuarias.

(Diagrama de pesos de SEM)

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

<Ref url="./diseno/canales" icon="directions_bus">Canales de comunicación</Ref>

### Una propuesta nacida para esta época

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
      Un ecosistema de herramientas computacionales y componentes web para la creación de contenidos interactivos con
      elementos de matemáticas y programación aplicados al análisis de datos.
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/kalouk">Saber más</a>
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
      Un servidor web versátil para generación de datos sintéticos utilizados en el curso y sus proyectos, accesibles
      por medio de diferentes modelos de comunicación (REST API, WebSocket, SSE y webhooks).
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/servicios/kalouk-web">Saber más</a>
      🌐
      <a href="https://web.kalouk.xyz/" target="_blank">web.kalouk.xyz</a>
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
      Un servidor web con el protocolo de contexto de modelos (MCP) para proveer datos e información de contexto sobre
      la teoría del curso a agentes de inteligencia artificial.
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/servicios/kalouk-mcp">Saber más</a>
      🌐
      <a href="https://mcp.kalouk.xyz/" target="_blank">mcp.kalouk.xyz</a>
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
      Un conjunto de componentes de JavaScript para actividades interactivas en sitios web, tanto en las presentaciones
      como en el contenido teórico.
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/interfaces/kalouk-js">Saber más</a>
      🌐
      <a href="https://www.npmjs.com/org/kalouk" target="_blank">npm</a>
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
      Una interfaz de línea de comandos (CLI) para interactuar de forma programática con los servicios de Kalouk, como
      Kalouk WEB y Kalouk MCP.
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/interfaces/kalouk-cli">Saber más</a>
      🌐
      <a href="https://www.npmjs.com/package/@kalouk/cli" target="_blank">@kalouk/cli</a>
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
      Un paquete de Python para interactuar con los servicios y herramientas de Kalouk, especialmente para la gestión de
      contenidos y evaluaciones del curso.
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/interfaces/kalouk-py">Saber más</a>
      🌐
      <a href="https://pypi.org/project/kalouk/" target="_blank">PyPI</a>
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
      Un sitio web para alojar presentaciones interactivas de Slidev para sesiones sincrónicas, utilizando las
      integraciones desarrolladas con Kalouk.
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/interfaces/kalouk-xyz">Saber más</a>
      🌐
      <a href="https://kalouk.xyz/" target="_blank">kalouk.xyz</a>
    </div>
  </div>
</div>

Los estudios realizados en la Universidad de Costa Rica demuestran que la **información** es actualmente **el factor más decisivo** en la satisfacción con el servicio de las personas usuarias.

<Ref url="./diseno/experiencia/" icon="directions_bus">Experiencia del usuario</Ref>

## Desarrollo

### Una arquitectura tecnológica, muchas opciones

Una arquitectura tecnológica ofrece

¿Nuevas tecnologías?, ¿uno solo o distintos desarrolladores y proveedores tecnológicos?, ¿diferentes fuentes de financiamiento? Estas son opciones en la arquitectura propuesta.

Las tecnologías digitales... pero es necesario considerar algunas características de un sistema de información de transporte público, propia de cualquier sistema técnico y social complejo:

- Es un sistema de sistemas
- No es un sistema aislado
- Es parte de un contexto sociotécnico complejo
- Evoluciona con el tiempo

Los sistemas inteligentes de transporte público son parte de algo más grande. La visión de una ciudad inteligente tiene en su corazón sistemas que son capaces de comunicarse entre sí.

<Ref url="./desarrollo/requisitos" icon="checklist">Requisitos</Ref>

### Un mundo digital: la ciudad inteligente comienza aquí

Los sistemas inteligentes de transporte público son parte de algo más grande. La visión de una ciudad inteligente tiene en su corazón sistemas que son capaces de comunicarse entre sí.

Interoperabilidad

Los sistemas inteligentes de transporte público son parte de algo más grande. La visión de una ciudad inteligente tiene en su corazón sistemas que son capaces de comunicarse entre sí.

<Ref url="./desarrollo/arquitectura" icon="checklist">Arquitectura</Ref>

### Más y mejor información con tecnologías digitales

Los sistemas inteligentes de transporte público son parte de algo más grande. La visión de una ciudad inteligente tiene en su corazón sistemas que son capaces de comunicarse entre sí.

#### Conexiones abiertas, ideas libres

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

<Ref url="./diseno/requisitos-propiedades" icon="checklist">Tecnologías</Ref> &nbsp;
<Ref url="./desarrollo/arquitectura" icon="architecture">Aplicaciones</Ref>

## Operación

### Respuestas para un sistema dinámico

> Un sistema complejo que funciona proviene de **un sistema simple que funcionaba**.
>
> <div class="italic text-xs mt-2">John Gall, pionero de la teoría de sistemas</div>

No es un escenario "todo o nada".

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Complejidad</div>
      <div class="cell-icon"><span class="material-symbols-outlined">account_tree</span></div>
    </div>
    <div class="cell-content">
      Este es un sistema socio-técnico, es decir, en donde interactúan las tecnologías con las personas e influyen
      mutuamente.
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/kalouk">Saber más</a>
    </div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Interconexión</div>
      <div class="cell-icon"><span class="material-symbols-outlined">hub</span></div>
    </div>
    <div class="cell-content">
      Un servidor web versátil para generación de datos sintéticos utilizados en el curso y sus proyectos, accesibles
      por medio de diferentes modelos de comunicación (REST API, WebSocket, SSE y webhooks).
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/servicios/kalouk-web">Saber más</a>
      🌐
      <a href="https://web.kalouk.xyz/" target="_blank">web.kalouk.xyz</a>
    </div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Dinamismo</div>
      <div class="cell-icon"><span class="material-symbols-outlined">autorenew</span></div>
    </div>
    <div class="cell-content">
      Un servidor web con el protocolo de contexto de modelos (MCP) para proveer datos e información de contexto sobre
      la teoría del curso a agentes de inteligencia artificial.
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/servicios/kalouk-mcp">Saber más</a>
      🌐
      <a href="https://mcp.kalouk.xyz/" target="_blank">mcp.kalouk.xyz</a>
    </div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Escala global</div>
      <div class="cell-icon"><span class="material-symbols-outlined">public</span></div>
    </div>
    <div class="cell-content">
      Un conjunto de componentes de JavaScript para actividades interactivas en sitios web, tanto en las presentaciones
      como en el contenido teórico.
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/interfaces/kalouk-js">Saber más</a>
      🌐
      <a href="https://www.npmjs.com/org/kalouk" target="_blank">npm</a>
    </div>
  </div>
  <div class="cell">
    <div class="cell-header">
      <div class="cell-title">Interdisciplinariedad</div>
      <div class="cell-icon"><span class="material-symbols-outlined">diversity_3</span></div>
    </div>
    <div class="cell-content">
      Una interfaz de línea de comandos (CLI) para interactuar de forma programática con los servicios de Kalouk, como
      Kalouk WEB y Kalouk MCP.
    </div>
    <div class="cell-footer">
      📖
      <a href="/resultados/interfaces/kalouk-cli">Saber más</a>
      🌐
      <a href="https://www.npmjs.com/package/@kalouk/cli" target="_blank">@kalouk/cli</a>
    </div>
  </div>
</div>

### Nuevo modelo de gobernanza

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

<Ref url="./operacion/monetizacion" icon="architecture">Gobernanza</Ref>

### Sistema dinámico: estrategias de seguimiento

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

<Ref url="./operacion/monetizacion" icon="architecture">Seguimiento</Ref>

### Flexibilidad en las fuentes de financiamiento

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

<Ref url="./operacion/monetizacion" icon="architecture">Monetización</Ref>

## Plan piloto

### La base de un sistema de sistemas

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

<Ref url="./operacion/monetizacion" icon="architecture">Propuesta técnica</Ref>

### En un lugar de La Mancha

El código abierto y el software libre es cada vez más la elección de grandes y pequeñas compañías para construir sistemas complejos con robustez y la colaboración de la comunidad.

<Ref url="./operacion/monetizacion" icon="architecture">Propuesta financiera</Ref>
