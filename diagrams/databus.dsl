workspace "Databús" "The workhorse of data transfer" {
	
	model {
		driver = person "Driver" "Uses the Databús App"
		agency = person "Agency Admin" "Manages transit data and configurations"
		databus = softwareSystem "Databús" "Real-Time Transit Data" {
			server = container "Real-time Server" "Handles real-time data processing" "Django" {
				api = component "Public API" "Exposes public endpoints" "Django REST Framework"
				graphql = component "GraphQL API" "Handles GraphQL queries and subscriptions" "Strawberry GraphQL"
				gtfs = component "GTFS Processor" "Processes GTFS data" "Django app"
			}
			db = container "Database" "Stores transit data" "PostgreSQL (PostGIS, TimescaleDB, DocumentDB extension)"
			mem = container "In-Memory Cache" "Caches frequently accessed data" "Redis (Hashes, Streams, Pub/Sub)"
			celery = container "Task Queue" "Manages background tasks" "Celery"
			mqtt = container "Message Broker" "Queues and MQTT ingress" "RabbitMQ (MQTT)"
			stream = container "Data Stream Processor" "Processes real-time data streams" "Bytewax"
		}
		app = softwareSystem "Databús App" "Mobile app for transit data" "Capacitor, Ionic, Vue" {
			mobile = container "Mobile Application" "Cross-platform mobile app" "Capacitor, Ionic, Vue"
			mqttClient = container "MQTT Client" "Handles real-time data via MQTT" "Paho MQTT"
		}
		cms = softwareSystem "Content Management System" "Manages content and configurations" "Strapi CMS"
		mcp = softwareSystem "MCP Server" "Connects LLMs to tools and data" "FastMCP"
		editor = softwareSystem "Databús Editor" "Web app for managing transit data" {
			webApp = container "Web Application" "Frontend for managing data" "Vue, Nuxt"
			adminApi = container "Admin API" "Backend for admin operations" "Django REST Framework"
		}
		
		// External consumers of published feeds
		consumers = softwareSystem "Open Data Consumers" "Apps, researchers, integrators (consume public feeds)"
		
		agency -> editor "Manages transit data and configurations" "REST/HTTPS"
		agency -> cms "Manages content and configurations" "REST/HTTPS"
		editor -> databus "Provides GTFS Schedule and Realtime Alerts data" "REST/HTTPS"
		driver -> app "Uses the Databús App to send real-time transit data" "REST/HTTPS, WebSocket, MQTT"
		app -> databus "Provides real-time transit data" "REST/HTTPS, WebSocket, MQTT"
		app -> mcp "Uses LLM chat to answer user queries" "REST/HTTPS"
		mcp -> databus "Accesses data and tools" "REST/GraphQL API"
		cms -> app "Manages configurations, messages and content" "REST/HTTPS"
		
		// Outputs from Databús
		databus -> consumers "Publishes GTFS Schedule" "HTTP/ZIP (.zip)"
		databus -> consumers "Publishes GTFS Realtime" "HTTP/Protobuf (.pb)"
		
		mqtt -> mem "Caches real-time data" "MQTT"
		stream -> mem "Processes and caches real-time data" "Redis Streams"
		stream -> mem "Stores processed real-time data" "Redis Hashes"
		celery -> mem "Reads real-time data snapshots" "Redis Hashes"
		celery -> db "Reads/Writes data" "SQL"
		celery -> gtfs "Triggers GTFS data processing" "Internal API"
		
	}
	
}
