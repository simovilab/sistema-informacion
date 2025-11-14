<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# GTFS

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0.0 |
| Fecha | 2025-09-18 |
| Descripción | Especificación GTFS v2.0. |
| Autores | Jostin Cubero Torres, Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


<a id="data-entity-001"></a>
## Agencia

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:001</code></span>

- Presence: Required
- Description: Agencias de transporte con servicio representado en este conjunto de datos.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `agency_id` | String | Identifica una marca de transporte que a menudo es sinónimo de una agencia de transporte. |
| `agency_name` | String | Nombre completo de la agencia de transporte. |
| `agency_url` | String | URL del sitio web de la agencia de transporte. |
| `agency_timezone` | String | Zona horaria donde se encuentra la agencia de transporte. |
| `agency_lang` | String | Idioma principal utilizado por esta agencia de transporte. |
| `agency_phone` | String | Número telefónico de voz de la agencia especificada. |
| `agency_fare_url` | String | URL de una página web donde una persona usuaria puede comprar tiquetes u otros instrumentos de tarifa para esa agencia. |
| `agency_email` | String | Dirección de correo electrónico monitoreada activamente por el departamento de atención al cliente de la agencia. |
| `cemv_support` | String | Indica si las personas usuarias pueden acceder a un servicio de transporte asociado a esta agencia utilizando EMV sin contacto |


<a id="data-entity-002"></a>
## Parada

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:002</code></span>

- Presence: Conditionally Required
- Description: Paradas donde los vehículos recogen o dejan personas usuarias. También define estaciones y accesos a estaciones.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `stop_id` | String | Identifica una ubicación: parada/plataforma, estación, acceso/salida, nodo genérico o área de abordaje |
| `stop_code` | String | Texto corto o número que identifica la ubicación para las personas usuarias. |
| `stop_name` | String | Nombre de la ubicación. |
| `stop_desc` | String | Descripción de la ubicación que proporciona información útil y de calidad. |
| `stop_lat` | Float | Latitud de la ubicación. |
| `stop_lon` | Float | Longitud de la ubicación. |
| `zone_id` | String | Identifica la zona tarifaria de una parada. |
| `stop_url` | String | URL de una página web sobre la ubicación. |
| `location_type` | String | Tipo de ubicación.  |
| `parent_station` | String | Define jerarquía entre las diferentes ubicaciones definidas en stops.txt. |
| `stop_timezone` | String | Zona horaria de la ubicación. |
| `wheelchair_boarding` | String | Indica si es posible el abordaje en silla de ruedas desde la ubicación. |
| `level_id` | String | Nivel de la ubicación. |
| `platform_code` | String | Identificador de plataforma para una parada en plataforma (una parada que pertenece a una estación). |
| `stop_access` | Integer | Indica cómo se accede a la parada para una estación en particular. |


<a id="data-entity-003"></a>
## Ruta

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:003</code></span>

- Presence: Required
- Description: Rutas de transporte. Una ruta es un grupo de viajes que se muestran a las personas usuarias como un único servicio.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `route_id` | String | Identifica una ruta. |
| `agency_id` | String | Agencia correspondiente a la ruta especificada. |
| `route_short_name` | String | Nombre corto de una ruta. A menudo es un identificador breve y abstracto. |
| `route_long_name` | String | Nombre completo de una ruta. Generalmente es más descriptivo que `route_short_name` e incluye el destino o una parada de la ruta. |
| `route_type` | String | Indica el tipo de transporte utilizado en una ruta. |


<a id="data-entity-004"></a>
## Viaje

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:004</code></span>

- Presence: Required
- Description: Viajes para cada ruta. Un viaje es una secuencia de dos o más paradas que ocurren durante un periodo de tiempo específico.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `route_id` | String | Identifies a route. |
| `service_id` | String | Identifica un conjunto de fechas en las que hay servicio disponible para una o más rutas. |
| `trip_id` | String | Identifies a trip. |
| `trip_headsign` | String | Texto que aparece en la rotulación identificando el destino del viaje para las personas usuarias. |
| `trip_short_name` | String | Texto visible al público usado para identificar el viaje a las personas usuarias; por ejemplo, para identificar números de tren en viajes de tren de cercanías. |
| `direction_id` | String | Indica el sentido de recorrido del viaje. |
| `block_id` | String | Identifica el bloque al que pertenece el viaje |
| `shape_id` | String | Identifica una forma geoespacial que describe el recorrido del vehículo para un viaje. |
| `wheelchair_accessible` | String | Indica accesibilidad para sillas de ruedas. |
| `bikes_allowed` | String | Indica si se permiten bicicletas. |
| `cars_allowed` | String | Indica si se permiten automóviles. |


<a id="data-entity-005"></a>
## Tiempos de parada

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:005</code></span>

- Presence: Required
- Description: Tiempos en que un vehículo llega a y sale de las paradas para cada viaje.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `trip_id` | String | Identifies a trip. |
| `arrival_time` | String | Hora de llegada a la parada para un viaje específico. |
| `departure_time` | String | Hora de salida de la parada para un viaje específico. |
| `stop_id` | String | Identifica la parada atendida. |
| `stop_sequence` | Integer | Orden de las paradas para un viaje en particular. |
| `stop_headsign` | String | Texto que aparece en la rotulación identificando el destino del viaje para esta parada. |
| `pickup_type` | Integer | Indica el método de abordaje. |
| `drop_off_type` | Integer | Indica el método de descenso. |
| `continuous_pickup` | Integer | Indica abordaje continuo a lo largo de la ruta. |
| `continuous_drop_off` | Integer | Indica descenso continuo a lo largo de la ruta. |
| `shape_dist_traveled` | Float | Distancia recorrida a lo largo de la forma para esta parada. |
| `timepoint` | Integer | Indica tiempos exactos o aproximados en esta parada. |
| `start_pickup_drop_off_window` | String | Inicio de la ventana de abordaje o descenso. |
| `end_pickup_drop_off_window` | String | Fin de la ventana de abordaje o descenso. |
| `pickup_booking_rule_id` | String | Identifica la regla de reserva que aplica para el abordaje. |
| `drop_off_booking_rule_id` | String | Identifica la regla de reserva que aplica para el descenso. |
| `location_group_id` | String | Identifica el grupo de ubicaciones atendido en lugar de una parada específica. |
| `location_id` | String | Identifica una ubicación GeoJSON atendida en lugar de una parada específica. |


<a id="data-entity-006"></a>
## Calendario

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:006</code></span>

- Presence: Conditionally Required
- Description: Fechas de servicio especificadas utilizando un horario semanal con fechas de inicio y fin.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `service_id` | String | Identifica un conjunto de fechas cuando hay servicio disponible para una o más rutas. |
| `monday` | String | Indica si el servicio opera todos los lunes en el rango de fechas especificado por los campos `start_date` y `end_date` |
| `tuesday` | String | Funciona de la misma manera que `monday`, excepto que aplica a los martes. |
| `wednesday` | String | Funciona de la misma manera que `monday`, excepto que aplica a los miércoles. |
| `thursday` | String | Funciona de la misma manera que `monday`, excepto que aplica a los jueves. |
| `friday` | String | Funciona de la misma manera que `monday`, excepto que aplica a los viernes. |
| `saturday` | String | Funciona de la misma manera que `monday`, excepto que aplica a los sábados. |
| `sunday` | String | Funciona de la misma manera que `monday`, excepto que aplica a los domingos. |
| `start_date` | String | Día de inicio del servicio para el intervalo. |
| `end_date` | String | Día de fin del servicio para el intervalo. Este día de servicio se incluye en el intervalo. |


<a id="data-entity-007"></a>
## Fecha de calendario

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:007</code></span>

- Presence: Conditionally Required
- Description: Excepciones para los servicios definidos en el calendario.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `service_id` | String | Identifica un conjunto de fechas cuando ocurre una excepción de servicio para una o más rutas. |
| `date` | Date | Fecha en la que ocurre la excepción del servicio. |
| `exception_type` | Integer | Indica si el servicio se agrega o se elimina en la fecha especificada. |


<a id="data-entity-008"></a>
## Atributo de tarifa

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:008</code></span>

- Presence: Optional
- Description: Información de tarifas para las rutas de una agencia de transporte.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `fare_id` | String | Identifica una clase de tarifa. |
| `price` | Float | Precio de la tarifa. |
| `currency_type` | String | Código de moneda ISO 4217. |
| `payment_method` | Integer | 0 = el pago se realiza a bordo; 1 = el pago se realiza antes de abordar. |
| `transfers` | Integer | Número de transbordos permitidos con esta tarifa (0 = ninguno, vacío = ilimitado). |
| `agency_id` | String | Agencia asociada a esta tarifa (opcional, si las tarifas varían por agencia). |
| `transfer_duration` | Integer | Duración en segundos durante la cual un transbordo es válido. |


<a id="data-entity-009"></a>
## Regla de tarifa

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:009</code></span>

- Presence: Optional
- Description: Reglas para aplicar tarifas a los itinerarios.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `fare_id` | String | Identifies a fare class. |
| `route_id` | String | Ruta a la que aplica esta regla de tarifa (opcional). |
| `origin_id` | String | ID de zona de origen o ID de parada/estación al que aplica la regla de tarifa (opcional). |
| `destination_id` | String | ID de zona de destino o ID de parada/estación al que aplica la regla de tarifa (opcional). |
| `contains_id` | String | ID de zona por la que debe pasar el itinerario para que se aplique la regla de tarifa (opcional). |


<a id="data-entity-010"></a>
## Intervalo temporal

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:010</code></span>

- Presence: Optional
- Description: Periodos de fecha y hora que se usan en reglas de tarifa que dependen de factores de fecha y hora.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `timeframe_id` | String | Identifica el intervalo temporal. |
| `start_date` | Date | Fecha de inicio en la que el intervalo se vuelve válido. |
| `start_time` | String | Hora de inicio en la fecha inicial del intervalo. |
| `end_date` | Date | Fecha de fin en la que el intervalo es válido. |
| `end_time` | String | Hora de fin en la fecha final del intervalo. |


<a id="data-entity-011"></a>
## Categoría de pasajero

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:011</code></span>

- Presence: Optional
- Description: Define categorías de personas usuarias (p. ej., personas adultas mayores, estudiantes).

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `rider_category_id` | String | Identificador de la categoría de persona usuaria. |
| `rider_category_name` | String | Nombre de la categoría de persona usuaria tal como se presenta a las personas usuarias. |
| `is_default_fare_category` | Integer | Indica si esta categoría es la categoría de tarifa predeterminada (1 = predeterminada). |
| `eligibility_url` | String | URL con más información sobre la elegibilidad para la categoría de persona usuaria. |


<a id="data-entity-012"></a>
## Medio de pago

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:012</code></span>

- Presence: Optional
- Description: Describe los medios de pago que se pueden emplear para utilizar productos de tarifa.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `fare_media_id` | String | Identifica el medio de pago. |
| `fare_media_name` | String | Nombre del medio de pago. |
| `fare_media_type` | Integer | Indica el tipo de medio de pago. |


<a id="data-entity-013"></a>
## Producto de tarifa

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:013</code></span>

- Presence: Optional
- Description: Describe los diferentes tipos de tiquetes o tarifas que pueden adquirir las personas usuarias.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `fare_product_id` | String | Identifica un producto de tarifa. |
| `fare_product_name` | String | Nombre del producto de tarifa. |
| `fare_media_id` | String | Identifica el medio de pago asociado con el producto de tarifa. |
| `fare_leg_group_id` | String | Identifica el grupo de tramos de tarifa al que aplica este producto de tarifa. |
| `amount` | Float | Valor monetario del producto de tarifa. |
| `currency` | String | Código de moneda ISO 4217 para el producto de tarifa. |


<a id="data-entity-014"></a>
## Regla de tramo de tarifa

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:014</code></span>

- Presence: Optional
- Description: Reglas de tarifa para tramos individuales del viaje.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `leg_group_id` | String | Identifica un grupo de entradas en fare_leg_rules.txt. |
| `network_id` | String | Identifica una red de rutas que aplica para la regla de tramo de tarifa. |
| `from_area_id` | String | Identifica un área de salida. |
| `to_area_id` | String | Identifica un área de llegada. |
| `from_timeframe_group_id` | String | Define el intervalo temporal para el evento de validación de tarifa al inicio del tramo. |
| `to_timeframe_group_id` | String | Define el intervalo temporal para el evento de validación de tarifa al final del tramo. |
| `fare_product_id` | String | El producto de tarifa requerido para viajar el tramo. |
| `rule_priority` | Integer | Define el orden de prioridad con el que se aplican las reglas coincidentes a los tramos, permitiendo que ciertas reglas tengan precedencia sobre otras. Cuando varias entradas en fare_leg_rules.txt coinciden, se seleccionará la regla o conjunto de reglas con el valor más alto de rule_priority. |


<a id="data-entity-015"></a>
## Regla de unión de tramos de tarifa

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:015</code></span>

- Presence: Optional
- Description: Reglas para definir que dos o más tramos se consideren como un único tramo efectivo de tarifa para efectos de comparación con las reglas en fare_leg_rules.txt.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `from_network_id` | String | Coincide con un tramo previo al transbordo que utiliza la red de rutas especificada. Si se especifica, también se debe especificar el mismo to_network_id. |
| `to_network_id` | String | Coincide con un tramo posterior al transbordo que utiliza la red de rutas especificada. Si se especifica, también se debe especificar el mismo from_network_id. |
| `from_stop_id` | String | Coincide con un tramo previo al transbordo que termina en la parada especificada (location_type=0 o vacío) o estación (location_type=1). |
| `to_stop_id` | String | Coincide con un tramo posterior al transbordo que inicia en la parada especificada (location_type=0 o vacío) o estación (location_type=1). |


<a id="data-entity-016"></a>
## Regla de transbordo

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:016</code></span>

- Presence: Optional
- Description: Reglas de tarifa para transbordos entre tramos de viaje.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `from_leg_group_id` | String | Identifica un grupo de reglas de tramo de tarifa previas al transbordo. |
| `to_leg_group_id` | String | Identifica un grupo de reglas de tramo de tarifa posteriores al transbordo. |
| `transfer_count` | Integer | Define a cuántos transbordos consecutivos se puede aplicar la regla de transbordo. |
| `duration_limit` | Integer | Define el límite de duración del transbordo. |
| `duration_limit_type` | Integer | Define el inicio y fin relativos de fare_transfer_rules.duration_limit. |
| `fare_transfer_type` | Integer | Indica el método de procesamiento de costo del transbordo entre tramos en un viaje: |
| `fare_product_id` | String | El producto de tarifa requerido para transbordar entre dos tramos de tarifa. Si está vacío, el costo de la regla de transbordo es 0. |


<a id="data-entity-017"></a>
## Área

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:017</code></span>

- Presence: Optional
- Description: Agrupación por áreas de ubicaciones.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `area_id` | String | Identifica un área. Debe ser único en areas.txt. |
| `area_name` | String | Nombre del área tal como se muestra a la persona usuaria. |


<a id="data-entity-018"></a>
## Área de parada

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:018</code></span>

- Presence: Optional
- Description: Reglas para asignar paradas a áreas.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `area_id` | String | Identifica un área a la que pertenecen uno o varios `stop_id`. El mismo `stop_id` puede definirse en muchos `area_id`. |
| `stop_id` | String | Identifica una parada. Si en este campo se define una estación (es decir, una parada con `stops.location_type=1`), se asume que todas sus plataformas (todas las paradas con `stops.location_type=0` que tienen esa estación como `stops.parent_station`) forman parte de la misma área. Este comportamiento puede modificarse asignando plataformas a otras áreas. |


<a id="data-entity-019"></a>
## Red

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:019</code></span>

- Presence: Conditionally Forbidden
- Description: Agrupación de rutas por red.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `network_id` | String | Identifica una red. Debe ser único en networks.txt. |
| `network_name` | String | Nombre de la red que aplica para reglas de tramo de tarifa, según lo usa la agencia local y sus personas usuarias. |


<a id="data-entity-020"></a>
## Red de rutas

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:020</code></span>

- Presence: Conditionally Forbidden
- Description: Reglas para asignar rutas a redes.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `route_id` | String | Identifica una ruta. |
| `network_id` | String | Identifica una red a la que pertenece uno o varios route_id. |


<a id="data-entity-021"></a>
## Forma

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:021</code></span>

- Presence: Optional
- Description: Reglas para mapear los recorridos de los vehículos, a veces denominados alineamientos de ruta.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `shape_id` | String | Identifica una forma. |
| `shape_pt_lat` | Float | Latitud de un punto de la forma. |
| `shape_pt_lon` | Float | Longitud de un punto de la forma. |
| `shape_pt_sequence` | Integer | Secuencia en la que los puntos de la forma se conectan para formar la forma. |
| `shape_dist_traveled` | Float | Distancia real recorrida a lo largo de la forma asociada, desde la primera parada hasta la parada especificada en este registro. |


<a id="data-entity-022"></a>
## Frecuencia

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:022</code></span>

- Presence: Optional
- Description: Intervalo (tiempo entre viajes) para servicio basado en intervalos o una representación comprimida del servicio con horario fijo.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `trip_id` | String | Identifica un viaje al que aplica el intervalo de servicio especificado. |
| `start_time` | String | Hora a la que el primer vehículo parte de la primera parada del viaje con el intervalo especificado. |
| `end_time` | String | Hora a la que el servicio cambia a un intervalo diferente (o cesa) en la primera parada del viaje. |
| `headway_secs` | Integer | Tiempo entre salidas desde la misma parada (en segundos). |
| `exact_times` | Integer | 0 = servicio basado en intervalos; 1 = representación comprimida de servicio basado en horario. |


<a id="data-entity-023"></a>
## Transbordo

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:023</code></span>

- Presence: Optional
- Description: Reglas para realizar conexiones en puntos de transbordo entre rutas.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `from_stop_id` | String | Identifica una parada desde la cual es posible una conexión. |
| `to_stop_id` | String | Identifica una parada a la cual es posible una conexión. |
| `transfer_type` | Integer | Tipo de conexión para el transbordo. |
| `min_transfer_time` | Integer | Tiempo mínimo necesario para transbordar entre las paradas (en segundos). |


<a id="data-entity-024"></a>
## Pasarela

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:024</code></span>

- Presence: Optional
- Description: Pasarelas que conectan ubicaciones dentro de las estaciones.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `pathway_id` | String | Identifica la pasarela. |
| `from_stop_id` | String | Parada o ubicación donde inicia la pasarela. |
| `to_stop_id` | String | Parada o ubicación donde termina la pasarela. |
| `pathway_mode` | Integer | Modo de la pasarela. |
| `is_bidirectional` | Integer | 1 si la pasarela puede usarse en ambos sentidos, 0 en caso contrario. |
| `length` | Float | Longitud de la pasarela en metros. |


<a id="data-entity-025"></a>
## Nivel

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:025</code></span>

- Presence: Conditionally Required
- Description: Niveles dentro de las estaciones.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `level_id` | String | Identifica el nivel. |
| `level_index` | Integer | Índice del nivel relativo a la planta baja. |
| `level_name` | String | Nombre del nivel (para mostrar a las personas usuarias). |


<a id="data-entity-026"></a>
## Grupo de ubicaciones

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:026</code></span>

- Presence: Optional
- Description: Un grupo de paradas que en conjunto indican ubicaciones donde una persona usuaria puede solicitar abordaje o descenso.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `location_group_id` | String | Identifica un grupo de ubicaciones. El ID debe ser único entre todos los valores de `stops.stop_id`, `id` de locations.geojson y `location_groups.location_group_id`. |
| `location_group_name` | String | Nombre del grupo de ubicaciones tal como se muestra a la persona usuaria. |


<a id="data-entity-027"></a>
## Parada de grupo de ubicaciones

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:027</code></span>

- Presence: Optional
- Description: Reglas para asignar paradas a grupos de ubicaciones.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `location_group_id` | String | Identifica un grupo de ubicaciones al que pertenecen uno o varios `stop_id`. El mismo `stop_id` puede definirse en muchos `location_group_id`. |
| `stop_id` | String | Identifica una parada que pertenece al grupo de ubicaciones. |


<a id="data-entity-028"></a>
## Ubicación

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:028</code></span>

- Presence: Optional
- Description: Zonas para solicitudes de abordaje o descenso de servicios bajo demanda, representadas como polígonos GeoJSON.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `type` | String | "FeatureCollection" de ubicaciones. |
| `features` | Array | Colección de objetos "Feature" que describen las ubicaciones. |
| `feature.type` | String | "Feature" |
| `feature.id` | String | Identifica una ubicación. El ID debe ser único entre todos los valores de `stops.stop_id`, `id` de locations.geojson y `location_groups.location_group_id`. |
| `feature.properties.stop_name` | String | Indica el nombre de la ubicación tal como se muestra a las personas usuarias. |
| `feature.properties.stop_desc` | String | Descripción significativa de la ubicación para ayudar a orientar a las personas usuarias. |
| `feature.geometry.type` | String | Debe ser de tipo: "Polygon" o "MultiPolygon". |
| `feature.geometry.coordinates` | Array | Coordenadas geográficas (latitud y longitud) que definen la geometría de la ubicación. |


<a id="data-entity-029"></a>
## Regla de reserva

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:029</code></span>

- Presence: Optional
- Description: Información de reserva para servicios solicitados por personas usuarias.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `booking_rule_id` | String | Identifica una regla. |
| `booking_type` | Integer | Indica con cuánta anticipación se puede realizar la reserva. |
| `prior_notice_duration_min` | Integer | Número mínimo de minutos antes del viaje para realizar la solicitud. |
| `prior_notice_duration_max` | Integer | Número máximo de minutos antes del viaje para realizar la solicitud de reserva. |
| `prior_notice_last_day` | Integer | Último día antes del viaje para realizar la solicitud de reserva. |
| `prior_notice_last_time` | String | Última hora del último día antes del viaje para realizar la solicitud de reserva. |
| `prior_notice_start_day` | Integer | Día más temprano antes del viaje para realizar la solicitud de reserva. |
| `prior_notice_start_time` | String | Hora más temprana del día más temprano antes del viaje para realizar la solicitud de reserva. |
| `prior_notice_service_id` | String | Indica los días de servicio en los que se cuentan `prior_notice_last_day` o `prior_notice_start_day`. |
| `message` | String | Mensaje para las personas usuarias que utilizan el servicio en un `stop_time` al reservar abordaje y descenso bajo demanda. |
| `pickup_message` | String | Funciona de la misma manera que `message`, pero se usa cuando las personas usuarias tienen solo abordaje bajo demanda. |
| `drop_off_message` | String | Funciona de la misma manera que `message`, pero se usa cuando las personas usuarias tienen solo descenso bajo demanda. |
| `phone_number` | String | Número de teléfono al que llamar para realizar la solicitud de reserva. |
| `info_url` | String | URL que proporciona información sobre la regla de reserva. |
| `booking_url` | String | URL de una interfaz en línea o aplicación donde se puede realizar la solicitud de reserva. |


<a id="data-entity-030"></a>
## Traducción

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:030</code></span>

- Presence: Optional
- Description: Traducciones de valores del conjunto de datos expuestos al público.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `table_name` | String | Define la tabla que contiene el campo a traducir. |
| `field_name` | String | Nombre del campo que se va a traducir. |
| `language` | String | Idioma de la traducción. |
| `translation` | String | Valor traducido. |
| `record_id` | String | Define el registro que corresponde al campo a traducir. |
| `record_sub_id` | String | Ayuda a identificar el registro que contiene el campo a traducir cuando la tabla no tiene un ID único. |
| `field_value` | String | En lugar de definir qué registro debe traducirse usando `record_id` y `record_sub_id`, este campo se puede usar para definir el valor que debe traducirse. |


<a id="data-entity-031"></a>
## Información del feed

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:031</code></span>

- Presence: Conditionally Required
- Description: Metadatos del conjunto de datos, incluyendo publicador, versión e información de expiración.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `feed_publisher_name` | String | Nombre completo de la organización que publica el conjunto de datos. |
| `feed_publisher_url` | String | URL del sitio web de la organización que publica el conjunto de datos. |
| `feed_lang` | String | Idioma predeterminado utilizado para el texto en este conjunto de datos. |
| `default_lang` | String | Define el idioma que se debe usar cuando el consumidor de datos no conoce el idioma de la persona usuaria. |
| `feed_start_date` | Date | El conjunto de datos proporciona información completa y confiable de horarios para el periodo desde el inicio del día `feed_start_date` hasta el final del día `feed_end_date`. |
| `feed_end_date` | Date | (ver arriba) |
| `feed_version` | String | Cadena que indica la versión actual del conjunto de datos GTFS. |
| `feed_contact_email` | String | Dirección de correo electrónico para comunicación relacionada con el conjunto de datos GTFS y prácticas de publicación de datos. |
| `feed_contact_url` | String | URL para información de contacto, un formulario web, mesa de ayuda u otras herramientas de comunicación relacionadas con el conjunto de datos GTFS y prácticas de publicación de datos. |


<a id="data-entity-032"></a>
## Atribución

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:032</code></span>

- Presence: Optional
- Description: Atribuciones del conjunto de datos.

**Fields:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `attribution_id` | String | Identifica una atribución para el conjunto de datos o un subconjunto del mismo. Esto es especialmente útil para traducciones. |
| `agency_id` | String | Agencia a la que aplica la atribución. |
| `route_id` | String | Funciona de la misma manera que `agency_id`, excepto que la atribución aplica a una ruta. |
| `trip_id` | String | Funciona de la misma manera que `agency_id`, excepto que la atribución aplica a un viaje. |
| `organization_name` | String | Nombre de la organización a la que se atribuye el conjunto de datos. |
| `is_producer` | Integer | El rol de la organización es productor. |
| `is_operator` | Integer | Funciona de la misma manera que `is_producer`, excepto que el rol de la organización es operador. |
| `is_authority` | Integer | Funciona de la misma manera que `is_producer`, excepto que el rol de la organización es autoridad. |
| `attribution_url` | String | URL de la organización. |
| `attribution_email` | String | Correo electrónico de la organización. |
| `attribution_phone` | String | Número telefónico de la organización. |

