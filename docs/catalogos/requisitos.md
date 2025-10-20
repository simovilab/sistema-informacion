<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# Requisitos

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0 |
| Fecha | 2025-09-18 |
| Descripción | Un catálogo de requisitos de arquitectura para un Sistema de Información de Transporte Público. |
| Autores | César Alvarado Castro, Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


<a id="requirement-001"></a>
## Seguimiento de autobuses en tiempo real

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:001</code></span>

- Descripción: El sistema deberá proporcionar a las personas usuarias el seguimiento en tiempo real de los autobuses.
- Justificación: Para mejorar la experiencia de usuario y la eficiencia del transporte.
- Aplicación: application:001, application:002
- Tipo: Funcional
- Prioridad: Alta
- Estado: Aprobado
- Partes interesadas: Pasajeros, Autoridades de transporte
- Criterios de aceptación: Las personas usuarias pueden ver las ubicaciones de los autobuses en tiempo real en un mapa., Los tiempos de llegada de los autobuses se actualizan en tiempo real.
- Componentes relacionados: Módulo de rastreo GPS, Aplicación móvil
- Interfaces relacionadas: API de ubicación de autobuses
- Entidades de datos relacionadas: Autobús, Ruta
- Actores relacionados: Pasajero

<a id="requirement-002"></a>
## Autenticación de usuarios

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:002</code></span>

- Descripción: El sistema deberá proporcionar autenticación y autorización de usuarios segura.
- Justificación: Para proteger los datos de los usuarios y garantizar acceso seguro al sistema.
- Aplicación: application:001, application:002
- Tipo: Funcional
- Prioridad: Media
- Estado: Aprobado
- Partes interesadas: Pasajeros, Administradores del sistema
- Criterios de aceptación: Las personas usuarias pueden registrarse e iniciar sesión utilizando correo electrónico y contraseña., Existen opciones para recuperación de contraseña.
- Componentes relacionados: Servicio de autenticación, Módulo de gestión de usuarios
- Interfaces relacionadas: API de autenticación de usuarios
- Entidades de datos relacionadas: Usuario
- Actores relacionados: Pasajero, Administrador del sistema
