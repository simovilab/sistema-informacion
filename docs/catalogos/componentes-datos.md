<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# Componentes de datos

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0.0 |
| Fecha | 2025-09-18 |
| Descripción | Componentes lógicos/físicos que realizan/gestionan entidades de datos en el Sistema de Información de Transporte Público. |
| Autores | Jostin Cubero Torres, Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


<a id="component-001"></a>
## Gestor de base de datos relacionada

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:001</code></span>

- Descripción: Base de datos transaccional (p.ej., PostgreSQL) que materializa entidades GTFS canónicas.
- Entidades de datos: data-entity:002, data-entity:003, data-entity:004, data-entity:005, data-entity:006, data-entity:007

<a id="component-002"></a>
## Infobus API (API pública de información)

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:002</code></span>

- Descripción: API HTTP para consulta pública de información (lecturas) sobre rutas, viajes y paradas.
- Entidades de datos: data-entity:003, data-entity:004, data-entity:005

<a id="component-003"></a>
## Databus API (API de ingesta de datos)

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:003</code></span>

- Descripción: Servicio de ingesta que importa/valida GTFS y datos operativos; escribe en el gestor relacional.
- Entidades de datos: data-entity:002, data-entity:003, data-entity:004, data-entity:005, data-entity:006, data-entity:007

<a id="component-004"></a>
## Databus Realtime Server (servidor en tiempo real)

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:004</code></span>

- Descripción: Publica/gestiona actualizaciones en tiempo real (p.ej., posiciones de vehículos, avances de viaje).
- Entidades de datos: data-entity:007, data-entity:004

<a id="component-005"></a>
## Infobus Screens (servidor de pantalla)

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:005</code></span>

- Descripción: Back-end que alimenta pantallas de usuario/estación; consume Info API y tiempo real.
- Entidades de datos: data-entity:003, data-entity:004, data-entity:005

<a id="component-006"></a>
## Infobus Info Server (servidor de información del TP)

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:006</code></span>

- Descripción: Servicio interno de agregación/caching para consultas combinadas (catálogos + tiempo real).
- Entidades de datos: data-entity:002, data-entity:003, data-entity:004, data-entity:005, data-entity:006

<a id="component-007"></a>
## Infobus Data (servidor de análisis de datos)

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:007</code></span>

- Descripción: Plataforma analítica que consolida históricos para reporting y modelos (BI/ETL).
- Entidades de datos: data-entity:003, data-entity:004, data-entity:005, data-entity:007

<a id="component-008"></a>
## User Management

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:008</code></span>

- Descripción: Gestión de perfiles de usuario (registro y perfil). **No** maneja credenciales aquí; solo metadatos del User.
- Entidades de datos: data-entity:001
