workspace "InfoTP" "The information highway for transit data" {
	
	model {
		// InfoTP
		databus = softwareSystem "Databús" "Real-time transit data system"
		infobus = softwareSystem "Infobús" "Real-time passenger information system"
		
		// Stakeholders
		user = person "User" "Accesses transit information"
		agency = person "Agency Admin" "Manages transit data and configurations"
		driver = person "Driver" "Uses the Databús App"
		operator = person "Operator" "Monitors and manages transit operations"
		regulator = person "Regulator" "Oversees compliance and standards"
		planner = person "Planner" "Plans and optimizes transit routes and schedules"
		manager = person "Manager" "Oversees transit operations and performance"
		
		// External systems
		weather = softwareSystem "Weather Service" "Provides weather data"
		mapping = softwareSystem "Mapping Service" "Provides mapping and geolocation data"
		notification = softwareSystem "Notification Service" "Sends notifications to users"
		
		// Relationships
		user -> infobus "Accesses transit information" "Web/Mobile App"
		agency -> databus "Manages transit data and configurations" "REST/HTTPS"
		agency -> infobus "Configures information displays and alerts" "REST/HTTPS"
		driver -> databus "Uses the Databús App to send real-time transit data" "REST/HTTPS, WebSocket, MQTT"
		operator -> infobus "Monitors transit operations" "Web App"
		regulator -> infobus "Accesses compliance reports and data" "Web App"
		planner -> infobus "Accesses transit data for planning" "REST/GraphQL API"
		manager -> infobus "Oversees transit performance and metrics" "Web App"
		infobus -> weather "Fetches weather data" "REST API"
		infobus -> mapping "Fetches mapping and geolocation data" "REST API"
		infobus -> notification "Sends notifications to users" "REST API"
		databus -> infobus "Provides GTFS Realtime data" "HTTP/Protobuf"
		databus -> infobus "Provides GTFS Schedule data" "HTTP/ZIP"
	}
}