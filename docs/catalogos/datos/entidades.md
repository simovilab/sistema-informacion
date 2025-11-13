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
## Agency

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:001</code></span>

- Presencia: Required
- Descripción: Transit agencies with service represented in this dataset.
- Atributos: agency_name; agency_url; agency_timezone; agency_id

<a id="data-entity-002"></a>
## Stop

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:002</code></span>

- Presencia: Conditionally Required
- Descripción: Stops where vehicles pick up or drop off riders. Also defines stations and station entrances.
- Atributos: stop_id; stop_name; stop_lat; stop_lon

<a id="data-entity-003"></a>
## Route

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:003</code></span>

- Presencia: Required
- Descripción: Transit routes. A route is a group of trips that are displayed to riders as a single service.
- Atributos: route_id; agency_id; route_short_name; route_long_name; route_type

<a id="data-entity-004"></a>
## Trip

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:004</code></span>

- Presencia: Required
- Descripción: Trips for each route. A trip is a sequence of two or more stops that occur during a specific time period.
- Atributos: route_id; service_id; trip_id

<a id="data-entity-005"></a>
## Stop Time

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:005</code></span>

- Presencia: Required
- Descripción: Times that a vehicle arrives at and departs from stops for each trip.
- Atributos: trip_id; arrival_time; departure_time; stop_id; stop_sequence

<a id="data-entity-006"></a>
## Calendar

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:006</code></span>

- Presencia: Conditionally Required
- Descripción: Service dates specified using a weekly schedule with start and end dates.
- Atributos: service_id; monday; tuesday; wednesday; thursday; friday; saturday; sunday; start_date; end_date

<a id="data-entity-007"></a>
## Calendar Date

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:007</code></span>

- Presencia: Conditionally Required
- Descripción: Exceptions for the services defined in the calendar.
- Atributos: service_id; date; exception_type

<a id="data-entity-008"></a>
## Fare Attribute

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:008</code></span>

- Presencia: Optional
- Descripción: Fare information for a transit agency's routes.

<a id="data-entity-009"></a>
## Fare Rule

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:009</code></span>

- Presencia: Optional
- Descripción: Rules to apply fares for itineraries.

<a id="data-entity-010"></a>
## Timeframe

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:010</code></span>

- Presencia: Optional
- Descripción: Date and time periods to use in fare rules for fares that depend on date and time factors.

<a id="data-entity-011"></a>
## Rider Category

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:011</code></span>

- Presencia: Optional
- Descripción: Defines categories of riders (e.g. elderly, student).

<a id="data-entity-012"></a>
## Fare Medium

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:012</code></span>

- Presencia: Optional
- Descripción: Describes the fare media that can be employed to use fare products.

<a id="data-entity-013"></a>
## Fare Product

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:013</code></span>

- Presencia: Optional
- Descripción: Describes the different types of tickets or fares that can be purchased by riders.

<a id="data-entity-014"></a>
## Fare Leg Rule

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:014</code></span>

- Presencia: Optional
- Descripción: Fare rules for individual legs of travel.

<a id="data-entity-015"></a>
## Fare Leg Join Rule

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:015</code></span>

- Presencia: Optional
- Descripción: Rules for defining two or more legs should be considered as a single effective fare leg for the purposes of matching against rules in fare leg rules.

<a id="data-entity-016"></a>
## Fare Transfer Rule

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:016</code></span>

- Presencia: Optional
- Descripción: Fare rules for transfers between legs of travel.

<a id="data-entity-017"></a>
## Area

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:017</code></span>

- Presencia: Optional
- Descripción: Area grouping of locations.

<a id="data-entity-018"></a>
## Stop Area

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:018</code></span>

- Presencia: Optional
- Descripción: Rules to assign stops to areas.

<a id="data-entity-019"></a>
## Network

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:019</code></span>

- Presencia: Conditionally Forbidden
- Descripción: Network grouping of routes.

<a id="data-entity-020"></a>
## Route Network

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:020</code></span>

- Presencia: Conditionally Forbidden
- Descripción: Rules to assign routes to networks.

<a id="data-entity-021"></a>
## Shape

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:021</code></span>

- Presencia: Optional
- Descripción: Rules for mapping vehicle travel paths, sometimes referred to as route alignments.

<a id="data-entity-022"></a>
## Frequency

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:022</code></span>

- Presencia: Optional
- Descripción: Headway (time between trips) for headway-based service or a compressed representation of fixed-schedule service.

<a id="data-entity-023"></a>
## Transfer

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:023</code></span>

- Presencia: Optional
- Descripción: Rules for making connections at transfer points between routes.

<a id="data-entity-024"></a>
## Pathway

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:024</code></span>

- Presencia: Optional
- Descripción: Pathways linking together locations within stations.

<a id="data-entity-025"></a>
## Level

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:025</code></span>

- Presencia: Conditionally Required
- Descripción: Levels within stations.

<a id="data-entity-026"></a>
## Location Group

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:026</code></span>

- Presencia: Optional
- Descripción: A group of stops that together indicate locations where a rider may request pickup or drop off.

<a id="data-entity-027"></a>
## Location Group Stop

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:027</code></span>

- Presencia: Optional
- Descripción: Rules to assign stops to location groups.

<a id="data-entity-028"></a>
## Location

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:028</code></span>

- Presencia: Optional
- Descripción: Zones for rider pickup or drop-off requests by on-demand services, represented as GeoJSON polygons.

<a id="data-entity-029"></a>
## Booking Rule

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:029</code></span>

- Presencia: Optional
- Descripción: Booking information for rider-requested services.

<a id="data-entity-030"></a>
## Translation

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:030</code></span>

- Presencia: Optional
- Descripción: Translations of customer-facing dataset values.

<a id="data-entity-031"></a>
## Feed Info

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:031</code></span>

- Presencia: Conditionally Required
- Descripción: Dataset metadata, including publisher, version, and expiration information.

<a id="data-entity-032"></a>
## Attribution

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:032</code></span>

- Presencia: Optional
- Descripción: Dataset attributions.
