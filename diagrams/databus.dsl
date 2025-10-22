workspace "Databús" "El caballo de batalla de la transferencia de datos" {
	
	model {
		driver = person "Conductor" "Usa la app Databús"
		databus = softwareSystem "Databús" "Datos de transporte público en tiempo real" {
			group "Servicios de backend" {
				server = container "Servidor de tiempo real" "Gestiona el procesamiento de datos en tiempo real" "Django" {
					rest = component "API REST" "Expone endpoints REST públicos" "Django REST Framework"
					graphql = component "API GraphQL" "Gestiona consultas y suscripciones GraphQL" "Strawberry GraphQL"
					gtfs = component "Procesador GTFS" "Procesa datos GTFS" "Django app"
				}
				db = container "Base de datos" "Almacena datos de transporte" "PostgreSQL" {
					tags "Database"
					postgis = component "Extensión PostGIS" "Soporte geoespacial" "PostGIS"
					timescale = component "Extensión TimescaleDB" "Soporte de series temporales" "TimescaleDB"
					document = component "Almacenamiento de documentos" "Almacena documentos JSON" "DocumentDB"
				}
				queue = container "Cola de tareas" "Gestiona tareas en segundo plano" "Celery" {
					worker = component "Trabajador" "Procesa trabajos en segundo plano" "Celery worker"
					scheduler = component "Programador" "Programa tareas periódicas" "Celery Beat"
					broker = component "Agente de mensajería" "Gestiona mensajería de tareas" "Redis (Pub/Sub)"
				}
			}
			group "Procesamiento de flujos y caché" {
				mqttBroker = container "Agente de mensajería" "Colas e ingreso MQTT" "RabbitMQ (MQTT)"
				streamProcessor = container "Procesador de flujos de datos" "Procesa flujos de datos en tiempo real" "Bytewax"
				cache = container "Caché en memoria" "Almacena en caché datos de acceso frecuente" "Redis" {
					streamCache = component "Caché de flujos" "Almacena en caché datos de flujos en tiempo real" "Redis Streams"
					hashCache = component "Caché de hashes" "Almacena en caché instantáneas de datos" "Redis Hashes"
				}
			}
		}
		app = softwareSystem "Databús App" "Aplicación móvil para datos de transporte" "Capacitor, Ionic, Vue" {
			mobile = container "Aplicación móvil" "Aplicación móvil multiplataforma" "Capacitor, Ionic, Vue"
			mqttClient = container "Cliente MQTT" "Gestiona datos en tiempo real vía MQTT" "Paho MQTT"
		}
		
		// External consumers of published feeds
		consumers = softwareSystem "Consumidores de datos abiertos" "Aplicaciones, investigadores, integradores (consumen feeds públicos)"
		
		driver -> app "Usa la app Databús para enviar datos de transporte en tiempo real" "REST/HTTPS, WebSocket, MQTT"
		app -> databus "Proporciona datos de transporte en tiempo real" "REST/HTTPS, WebSocket, MQTT"
		
		// Salidas desde Databús
		databus -> consumers "Publica GTFS Schedule" "HTTP/ZIP (.zip)"
		databus -> consumers "Publica GTFS Realtime" "HTTP/Protobuf (.pb)"
		
		mobile -> rest "Consume API pública" "REST/HTTPS"
		mobile -> graphql "Consume API pública" "GraphQL/HTTPS"
		mqttClient -> mqttBroker "Envía y recibe datos en tiempo real" "MQTT"
		mqttBroker -> streamCache "Almacena en caché datos de flujos en tiempo real" "Redis Streams"
		streamCache -> streamProcessor "Proporciona datos de flujos en tiempo real" "Bytewax"
		streamProcessor -> hashCache "Almacena en caché instantáneas de datos" "Redis Hashes"
		hashCache -> queue "Proporciona datos en caché para procesamiento en segundo plano" "Redis (Pub/Sub)"
		queue -> gtfs "Procesa datos GTFS en segundo plano" "Django app"
		gtfs -> document "Almacena documentos JSON de datos GTFS" "DocumentDB"
		rest -> db "Accede a datos de transporte" "SQL"
		graphql -> db "Accede a datos de transporte" "SQL"
		
	}
	
	views {
		styles {
			element "Person" {
				background "#08427b"
				color "#ffffff"
				shape person
			}
			element "Software System" {
				background "#1168bd"
				color "#ffffff"
			}
			element "Container" {
				background "#438dd5"
				color "#ffffff"
			}
			element "Component" {
				background "#85bbf0"
				color "#000000"
			}
			element "Database" {
				shape cylinder
			}
		}
	}
	
}
