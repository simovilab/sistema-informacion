workspace "Infobús" "La autopista de información para datos de tránsito" {
	
	model {
		user = person "Usuario" "Accede a la información de tránsito"
		infobus = softwareSystem "Infobús" "Sistema centralizado de información de transporte público"
		
		user -> infobus "Consulta datos de transporte público"
	}
}
