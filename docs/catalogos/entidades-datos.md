<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# Entidades de datos

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0.0 |
| Fecha | 2025-09-18 |
| Descripción | Entidades canónicas del Sistema de Información de Transporte Público (alineadas a GTFS y extensiones operativas). |
| Autores | Jostin Cubero Torres, Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


<a id="data-entity-001"></a>
## User

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:001</code></span>

- Descripción: Usuario del sistema (operadores, analistas, público). No incluye credenciales; solo metadatos de perfil.
- Atributos: user_id; display_name; email

<a id="data-entity-002"></a>
## Agency

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:002</code></span>

- Descripción: Operador de transporte (GTFS Agency).
- Atributos: agency_id; agency_name; timezone

<a id="data-entity-003"></a>
## Route

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:003</code></span>

- Descripción: Ruta GTFS que agrupa viajes.
- Atributos: route_id; route_short_name; route_long_name; agency_id

<a id="data-entity-004"></a>
## Trip

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:004</code></span>

- Descripción: Instancia planificada de recorrido (GTFS Trip).
- Atributos: trip_id; route_id; service_id; direction_id

<a id="data-entity-005"></a>
## Stop

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:005</code></span>

- Descripción: Punto de parada (GTFS Stop).
- Atributos: stop_id; stop_name; lat; lon

<a id="data-entity-006"></a>
## ServiceCalendar

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:006</code></span>

- Descripción: Calendario de servicio (GTFS).
- Atributos: service_id; weekday_pattern; start_date; end_date

<a id="data-entity-007"></a>
## Vehicle

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:007</code></span>

- Descripción: Vehículo/Bus operativo (extensión).
- Atributos: vehicle_id; plate; capacity; agency_id
