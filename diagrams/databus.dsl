workspace "Databús" "El caballo de batalla de la transferencia de datos" {
	
	model {
		driver = person "Conductor" "Usa la app Databús"
		agency = person "Administradores de la agencia" "Gestiona datos de transporte y configuraciones"
		databus = softwareSystem "Databús" "Datos de transporte en tiempo real" {
			group "Servicios de backend" {
				server = container "Servidor de tiempo real" "Gestiona el procesamiento de datos en tiempo real" "Django" {
					api = component "API pública" "Expone endpoints públicos" "Django REST Framework"
					graphql = component "API GraphQL" "Gestiona consultas y suscripciones GraphQL" "Strawberry GraphQL"
					gtfs = component "Procesador GTFS" "Procesa datos GTFS" "Django app"
				}
				db = container "Base de datos" "Almacena datos de transporte" "PostgreSQL (PostGIS, TimescaleDB, DocumentDB extension)"
				celery = container "Cola de tareas" "Gestiona tareas en segundo plano" "Celery" {
					worker = component "Trabajador" "Procesa trabajos en segundo plano" "Celery worker"
					scheduler = component "Programador" "Programa tareas periódicas" "Celery Beat"
					broker = component "Agente de mensajería" "Gestiona mensajería de tareas" "Redis (Pub/Sub)"
				}
			}
			group "Procesamiento de flujos y caché" {
				mqtt = container "Agente de mensajería" "Colas e ingreso MQTT" "RabbitMQ (MQTT)"
				stream = container "Procesador de flujos de datos" "Procesa flujos de datos en tiempo real" "Bytewax"
				mem = container "Caché en memoria" "Almacena en caché datos de acceso frecuente" "Redis (Hashes, Streams)"
			}
		}
		app = softwareSystem "Databús App" "Aplicación móvil para datos de transporte" "Capacitor, Ionic, Vue" {
			mobile = container "Aplicación móvil" "Aplicación móvil multiplataforma" "Capacitor, Ionic, Vue"
			mqttClient = container "Cliente MQTT" "Gestiona datos en tiempo real vía MQTT" "Paho MQTT"
		}
		cms = softwareSystem "Sistema de gestión de contenidos" "Gestiona contenidos y configuraciones" "Strapi CMS"
		mcp = softwareSystem "Servidor MCP" "Conecta LLMs con herramientas y datos" "FastMCP"
		editor = softwareSystem "Databús Editor" "Aplicación web para gestionar datos de transporte" {
			webApp = container "Aplicación web" "Frontend para gestionar datos" "Vue, Nuxt"
			adminApi = container "API de administración" "Backend para operaciones de administración" "Django REST Framework"
		}
		
		// External consumers of published feeds
		consumers = softwareSystem "Consumidores de datos abiertos" "Aplicaciones, investigadores, integradores (consumen feeds públicos)"
		
		agency -> editor "Gestiona datos de transporte y configuraciones" "REST/HTTPS"
		agency -> cms "Gestiona contenidos y configuraciones" "REST/HTTPS"
		editor -> databus "Proporciona GTFS Schedule y alertas en tiempo real" "REST/HTTPS"
		driver -> app "Usa la app Databús para enviar datos de transporte en tiempo real" "REST/HTTPS, WebSocket, MQTT"
		app -> databus "Proporciona datos de transporte en tiempo real" "REST/HTTPS, WebSocket, MQTT"
		app -> mcp "Usa chat LLM para responder consultas de usuarios" "REST/HTTPS"
		mcp -> databus "Accede a datos y herramientas" "REST/GraphQL API"
		cms -> app "Gestiona configuraciones, mensajes y contenidos" "REST/HTTPS"
		
		// Salidas desde Databús
		databus -> consumers "Publica GTFS Schedule" "HTTP/ZIP (.zip)"
		databus -> consumers "Publica GTFS Realtime" "HTTP/Protobuf (.pb)"
		
		mqtt -> mem "Almacena en caché datos en tiempo real" "MQTT"
		stream -> mem "Procesa y almacena en caché datos en tiempo real" "Redis Streams"
		stream -> mem "Almacena datos procesados en tiempo real" "Redis Hashes"
		celery -> mem "Lee instantáneas de datos en tiempo real" "Redis Hashes"
		celery -> db "Lee/escribe datos" "SQL"
		celery -> gtfs "Dispara el procesamiento de datos GTFS" "Internal API"
		
	}
	
}
