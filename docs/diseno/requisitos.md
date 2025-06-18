::: info Puntos clave

- La formulación de requisitos es esencial para el éxito técnico y social del sistema.
- Se deben considerar múltiples partes interesadas (gobierno, operadores, usuarios).
- Los requisitos deben ser claros, trazables, verificables y factibles.
- Es fundamental diferenciar entre requisitos funcionales, no funcionales y de rendimiento.
- Las restricciones del entorno sociotécnico costarricense condicionan el diseño, implementación y escalabilidad del sistema.

:::

- **Asignación**: Ángeles Ulate  
- **Enfoque**: Desde la perspectiva de la formulación de requisitos, se explora cómo se definen las necesidades y expectativas de los usuarios y otras partes interesadas (stakeholders), y cómo estas se traducen en especificaciones técnicas claras y estructuradas que puedan ser implementadas eficazmente en sistemas de transporte público inteligente.

---

## Requisitos funcionales

- El sistema deberá permitir el **registro, monitoreo y localización en tiempo real** de las unidades de transporte público mediante tecnologías GPS y redes móviles.
- Permitirá a los usuarios consultar **rutas, horarios y tiempos estimados de llegada** a través de una interfaz web y/o aplicación móvil.
- Deberá posibilitar la **gestión y validación de datos por parte de entes reguladores** como el CTP y ARESEP.
- El sistema deberá integrar un canal para el **envío automático de alertas** (sismos, inundaciones, bloqueos) desde instituciones como la CNE.
- Incluirá un **módulo de retroalimentación ciudadana**, accesible para usuarios desde la plataforma, con mecanismos para su análisis por parte de las municipalidades.

---

## Requisitos no funcionales

- El sistema deberá ser **escalable**, permitiendo la incorporación de nuevos operadores o municipalidades sin rediseños estructurales.
- Cumplirá con estándares internacionales de **accesibilidad digital**, como los establecidos por el W3C (WCAG 2.1).
- Soportará múltiples idiomas, siendo **español e inglés** los mínimos requeridos.
- Garantizará una **alta disponibilidad** (>99%) y mecanismos de recuperación ante fallos (resiliencia).
- Deberá respetar la **Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley 8968)**, asegurando la privacidad de los usuarios.

---

## Requisitos de rendimiento

- El sistema deberá procesar y visualizar información de al menos **5,000 unidades móviles concurrentes** sin comprometer el rendimiento.
- Las actualizaciones de ubicación deberán reflejarse en la interfaz en un tiempo inferior a **3 segundos**.
- La plataforma será compatible con **dispositivos móviles con conectividad 3G o superior**.
- La **generación y notificación de fallos o eventos críticos** no deberá exceder los **60 segundos** desde su ocurrencia.

---

## Proceso de formulación

La formulación de requisitos debe estructurarse de manera iterativa, incluyendo validaciones frecuentes con los actores involucrados. Este enfoque mejora la adaptabilidad, la alineación sociotécnica y la viabilidad técnica del sistema.

### Etapas clave

1. **Elicitación**  
   Recolección de necesidades a través de entrevistas semiestructuradas, encuestas, análisis de procesos actuales y benchmarking de sistemas como Transantiago o Moovit.

2. **Análisis**  
   Se realiza la depuración, categorización y detección de contradicciones, omisiones o ambigüedades en los requisitos recopilados.

3. **Triaje**  
   Priorización en función de restricciones presupuestarias, impacto potencial y riesgos técnicos o sociales.

4. **Especificación**  
   Formalización escrita y clara de requisitos, organizados por tipo (funcionales, no funcionales, de rendimiento), utilizando lenguaje técnico y sin ambigüedad.

5. **Verificación**  
   Evaluación de requisitos según criterios como completitud, trazabilidad, consistencia y verificabilidad.

6. **Validación**  
   Contraste con stakeholders para confirmar que los requisitos representan fielmente sus necesidades reales.

---

## Restricciones contextuales

- **Presupuesto limitado**: Es imperativo realizar un triaje eficiente de requisitos y aplicar metodologías ágiles.
- **Fragmentación operativa**: La existencia de más de 300 operadores requiere un diseño orientado a interoperabilidad y modularidad.
- **Infraestructura desigual**: Las soluciones deben contemplar zonas rurales o periféricas con baja conectividad.
- **Marco normativo en evolución**: Se deben prever mecanismos de adaptación legal y tecnológica.

---

## Herramientas y metodologías

- **QFD (Quality Function Deployment)**: Para mapear las necesidades de los usuarios a especificaciones técnicas.
- **SysML (Systems Modeling Language)**: Para modelado estructurado y visual de requisitos.
- **Matriz de trazabilidad**: Para asegurar el seguimiento entre los requisitos, sus fuentes y los entregables técnicos.
- **Prototipado rápido y pruebas de concepto**: Para facilitar validaciones tempranas con stakeholders.

---

## Conclusión

La correcta formulación de requisitos en sistemas sociotécnicos complejos como el transporte público inteligente en Costa Rica es crítica para el éxito del proyecto. Al integrar metodologías estructuradas, participación activa de stakeholders y herramientas de trazabilidad, se maximizan las probabilidades de éxito técnico, económico y social del sistema.

---

## Referencias

<Citation doi="10.1007/978-3-030-81159-4" />  
<Citation doi="10.1007/978-3-662-69207-3" />  
<Citation doi="10.1007/978-3-031-62194-9" />
<Citation doi="10.1007/978-3-031-57327-9" />
