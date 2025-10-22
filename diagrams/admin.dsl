workspace "Admin" "La autopista de información para datos de tránsito" {
	
	model {
		cms = softwareSystem "Sistema de gestión de contenidos" "Gestiona contenidos y configuraciones" "Strapi CMS"
		editor = softwareSystem "Databús Editor" "Aplicación web para gestionar datos de transporte" {
			webApp = container "Aplicación web" "Frontend para gestionar datos" "Vue, Nuxt"
			adminApi = container "API de administración" "Backend para operaciones de administración" "Django REST Framework"
		}
		adminBot = softwareSystem "Servidor MCP" "Conecta LLMs con herramientas y datos" "FastMCP"
	}
}
