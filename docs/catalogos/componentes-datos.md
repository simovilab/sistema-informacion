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
## Relational Database Manager

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:001</code></span>

- Descripción: Transactional relational database (e.g., PostgreSQL) that materializes canonical GTFS entities.
- Entidades de datos: data-entity:001, data-entity:002, data-entity:003, data-entity:004, data-entity:005, data-entity:006, data-entity:007, data-entity:008, data-entity:009, data-entity:010, data-entity:011, data-entity:012, data-entity:013, data-entity:014, data-entity:015, data-entity:016, data-entity:017, data-entity:018, data-entity:019, data-entity:020, data-entity:021, data-entity:022, data-entity:023, data-entity:024, data-entity:025, data-entity:026, data-entity:027, data-entity:028, data-entity:029, data-entity:030, data-entity:031, data-entity:032

<a id="component-002"></a>
## Databus API (GTFS Ingestion)

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:002</code></span>

- Descripción: Ingestion service that imports and validates GTFS files and writes them into the relational database.
- Entidades de datos: data-entity:001, data-entity:002, data-entity:003, data-entity:004, data-entity:005, data-entity:006, data-entity:007

<a id="component-003"></a>
## Infobus API (Public Query)

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:003</code></span>

- Descripción: HTTP read-only API that exposes routes, trips, stops, and schedules to the public.
- Entidades de datos: data-entity:002, data-entity:003, data-entity:004, data-entity:005

<a id="component-004"></a>
## Infobus Screens (Display Server)

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:004</code></span>

- Descripción: Back-end service that feeds information displays for stations and users; consumes Infobus API.
- Entidades de datos: data-entity:002, data-entity:003, data-entity:004

<a id="component-005"></a>
## Infobus Info Server (Aggregation/Cache)

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:005</code></span>

- Descripción: Internal aggregation and caching service for combined catalog and real-time data queries.
- Entidades de datos: data-entity:001, data-entity:002, data-entity:003, data-entity:004, data-entity:006

<a id="component-006"></a>
## Infobus Data (Analytics/BI)

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:006</code></span>

- Descripción: Analytical platform that consolidates historical data for reporting and business intelligence models (BI/ETL).
- Entidades de datos: data-entity:002, data-entity:003, data-entity:004, data-entity:005
