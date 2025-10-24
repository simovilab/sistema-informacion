workspace "Infobús" "La autopista de información para datos de tránsito" {
	
	model {
		user = person "Usuario" "Accede a la información"
		infobus = softwareSystem "Infobús" "Sistema centralizado de información de transporte público"
		
		user -> infobus "Consulta datos de transporte público"
	}
	
	views {
		branding {
			logo https://api.iconify.design/simple-icons:anchor.svg?color=%23888888
		}
		styles {
			element "Person" {
				background "#08427b"
				color "#ffffff"
				shape person
				icon https://api.iconify.design/simple-icons:codefresh.svg
			}
			element "Software System" {
				background "#1168bd"
				color "#ffffff"
				shape roundedBox
				icon https://api.iconify.design/simple-icons:redis.svg
			}
		}
		
		systemContext infobus {
			include *
			autolayout tb
		}
		
	}
}
