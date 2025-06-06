# Sistema de información para la movilidad inteligente

## Cómo ejecutar

1. Clonar el repositorio con `git clone https://github.com/simovilab/sistema-informacion.git`
2. Moverse al directorio con `cd sistema-informacion`
3. Instalar los paquetes de Node.js con pnpm: `pnpm install`
4. Crear una rama de Git para desarrollo con `git branch <nombre-rama>` y luego `git switch <nombre-rama>`
5. Correr el servidor de desarrollo con `pnpm docs:dev` (en el mismo directorio donde está `package.json`)

## Enunciado del curso

> [!TIP]
> Hemos sido contratados como empresa de consultoría para generar un reporte sobre sistemas de información para el transporte público inteligente, con el objetivo de evaluar las posibilidades de implementación.

Entes contratantes:

- Ministerio de Obras Públicas y Transportes (MOPT)
- Consejo de Transporte Público (CTP)
- Autoridad Reguladora de los Servicios Públicos (ARESEP)
- Cámara Nacional de Transportistas (CANATRANS)
- Ministerio de Ciencia, Innovación, Tecnología y Telecomunicaciones (MICITT)
- Comisión Nacional de Prevención de Riesgos y Atención de Emergencias (CNE)
- Municipalidades

### Entregables

- Análisis de prefactibilidad técnica y económica
- Una guía práctica para tomadores de decisiones
- Pruebas de concepto

### Contexto básico

- No existen unidades especializadas en tecnologías de información y comunicación para el transporte público inteligente dentro de las entidades responsables de la gestión del servicio.
- Los recursos económicos son limitados.
- Ya hay avances en el pago electrónico y otros planes piloto.
- La gestión del servicio la hacen más de 300 empresas individuales.

### Primera propuesta de estructura

- Resumen ejecutivo
- Transporte público inteligente
- Sistemas de información
  - Componentes esenciales
  - Experiencia de usuario
  - Monetización
- Análisis de datos
- Arquitectura propuesta
- Modelo de gobernanza
- Plan piloto

## Asignación de secciones

| Tema                                      | Nombre                               | Directorio                       |
| ----------------------------------------- | ------------------------------------ | -------------------------------- |
| Digitalización de la sociedad             | Morales Quesada José Fabian          | `presentations/3-digitalization` |
| Pensamiento sistémico                     | Alfaro Herrera Brandon Andrey        | `presentations/4-thinking`       |
| Complejidad técnica y social              | Cambronero Hernández Gabriel Antonio | `presentations/5-complexity`     |
| Comportamiento humano, roles y procesos   | Blanco Arias José Luis               | `presentations/6-behavior`       |
| Riesgo, incertidumbre e ignorancia        | Valdés Céspedes Johnnixia            | `presentations/7-risk`           |
| Propiedades de los sistemas de ingeniería | Guzmán Carranza Denzel Darío         | `presentations/8-properties`     |
| Objetivos de diseño y necesidades         | Esquivel Guadamuz Andrés Josué       | `presentations/9-goals`          |
| Formulación de requisitos                 | Ulate Jarquín Ángeles                | `presentations/10-requirements`  |
