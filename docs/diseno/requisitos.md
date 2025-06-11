# Requisitos

::: info Puntos clave

- La formulación de requisitos es esencial para el éxito técnico y social del sistema.
- Se deben considerar múltiples partes interesadas (gobierno, operadores, usuarios).
- Los requisitos deben ser claros, trazables, verificables y factibles.
- Es fundamental diferenciar entre requisitos funcionales, no funcionales y de rendimiento.

:::

- **Asignación**: Ángeles Ulate  
- **Enfoque**: Desde la perspectiva de la formulación de requisitos, se explora cómo se definen las necesidades y expectativas de los usuarios y otras partes interesadas (stakeholders), y cómo estas se traducen en especificaciones técnicas claras y estructuradas.

---

## Funcionales

- El sistema deberá permitir el **registro, monitoreo y localización en tiempo real** de las unidades de transporte público.
- Deberá **integrarse con el sistema de pago electrónico** ya en implementación (ej. pago con tarjetas sin contacto).
- Permitirá a los usuarios consultar rutas, horarios y tiempos estimados de llegada en una interfaz web y/o app móvil.
- Deberá permitir la **gestión y validación de datos por parte de entes reguladores** (ej. CTP, ARESEP).
- Permitirá el **envío automático de alertas** a la CNE en caso de eventos que afecten la movilidad (ej. sismos, inundaciones, cierres de vías).
- Incluirá un **módulo para recolección de retroalimentación de usuarios**, que pueda ser analizada por las municipalidades.

---

## No funcionales

- El sistema deberá ser **escalable**, para integrar nuevos operadores de transporte o municipios sin rediseño completo.
- El software deberá cumplir con estándares de **accesibilidad digital**.
- La interfaz deberá estar disponible en al menos dos idiomas: **español e inglés**.
- El sistema deberá garantizar **alta disponibilidad** (>99%) y recuperación ante fallos.
- Se deben respetar normativas de **protección de datos personales** y garantizar la privacidad de los usuarios.

---

## Rendimiento

- El sistema deberá ser capaz de procesar datos de al menos **5,000 unidades móviles concurrentes**.
- Las actualizaciones de ubicación deben reflejarse en el mapa en un tiempo menor a **3 segundos**.
- La plataforma deberá estar optimizada para funcionar en dispositivos móviles con conexiones 3G o superior.
- Los reportes de fallos o eventos críticos deberán generarse y enviarse en un tiempo menor a **1 minuto** tras su detección.

---

## Proceso

La formulación de requisitos para un sistema de información de transporte público inteligente debe seguir un enfoque iterativo y estructurado, que permita transformar necesidades y expectativas de las partes interesadas en especificaciones técnicas claras.

Este proceso involucra:

- **Identificación de partes interesadas**: Incluye entidades como MOPT, CTP, ARESEP, operadores de transporte, usuarios finales, municipalidades y emergencias (CNE).
- **Recolección de información contextual**: Mediante análisis documental, entrevistas, talleres participativos y benchmarking con otros sistemas de transporte inteligentes.
- **Modelado de requisitos**: Uso de herramientas como QFD, SysML y matrices de trazabilidad para representar gráficamente los requisitos.
- **Ciclo de revisión y validación**: A través de simulaciones, prototipos funcionales, pruebas de concepto y retroalimentación continua.

Este enfoque ayuda a asegurar que los requisitos sean **verificables, trazables y factibles** en el contexto costarricense.

---

## Restricciones

El proyecto enfrenta diversas restricciones que condicionan la formulación de requisitos:

- **Presupuesto limitado**: Requiere priorización y triaje de requisitos en función del valor agregado y costo de implementación.
- **Fragmentación operativa**: Existen más de 300 operadores independientes, lo que impone desafíos de interoperabilidad.
- **Infraestructura desigual**: No todas las regiones cuentan con conectividad estable o acceso a dispositivos móviles.
- **Marco normativo en transición**: Requiere que el sistema se adapte a cambios legales o técnicos.

---

## Etapas

La formulación de requisitos sigue una serie de etapas propuestas por Zimmermann y de Weck:

1. **Elicitación**  
   Recopilación de necesidades mediante entrevistas, cuestionarios, análisis de contexto y revisión documental.

2. **Análisis**  
   Se organiza y filtra la información recopilada. Se detectan conflictos, ambigüedades o duplicaciones.

3. **Triaje**  
   Priorización de los requisitos según criterios de viabilidad, impacto y urgencia, especialmente clave ante presupuestos limitados.

4. **Especificación**  
   Redacción formal de los requisitos, diferenciando funcionales, no funcionales y de rendimiento, en lenguaje claro y técnico.

5. **Verificación**  
   Evaluación de que cada requisito esté completo, sin ambigüedad, verificable y trazable.

6. **Validación**  
   Confirmación con stakeholders de que los requisitos especificados reflejan fielmente sus necesidades reales.

---

## Referencias

- Maier, A., Oehmen, J., & Vermaas, P. E. (Eds.). (2022). *Handbook of Engineering Systems Design*. Springer Nature. https://doi.org/10.1007/978-3-030-81159-4

