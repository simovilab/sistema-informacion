workspace "InfoTP" "La autopista de información para datos de transporte" {
	
	model {
		
		archetypes {
			stakeholder = person
			organization = container
			actor = component
		}
		
		group "Procesamiento de datos en tiempo real" {
			databus = softwareSystem "Databús" "Sistema de datos de transporte en tiempo real"
			infobus = softwareSystem "Infobús" "Sistema de información de pasajeros en tiempo real"
		}
		
		group "Partes interesadas" {
			user = stakeholder "Usuario" "Accede a información de transporte"
			agency = stakeholder "Administrador de agencia" "Gestiona datos de transporte y configuraciones"
			driver = stakeholder "Conductor" "Usa la app Databús"
			operator = stakeholder "Operador" "Monitorea y gestiona operaciones de transporte"
			regulator = stakeholder "Regulador" "Supervisa cumplimiento y estándares"
			planner = stakeholder "Planificador" "Planifica y optimiza rutas y horarios de transporte"
			manager = stakeholder "Gerente" "Supervisa operaciones y rendimiento del transporte"
		}
		
		group "Organizaciones" {
			mopt = organization "Ministerio de Obras Públicas y Transportes" "Gestiona y opera servicios de transporte"
			ctp = organization "Consejo de Transporte Público" "Regula y supervisa el transporte público"
			aresep = organization "ARESEP" "Supervisa tarifas y calidad del servicio de transporte público"
			bccr = organization "Banco Central de Costa Rica" "Proporciona servicios financieros y de pago electrónico para el transporte público"
			simovi = organization "SIMOVI" "Gestiona el sistema de movilidad urbana integrada"
			ongs = organization "ONGs de transporte y movilidad" "Defienden los intereses de los usuarios y promueven la movilidad sostenible"
			lanamme = organization "LANAMME" "Proporciona investigación y análisis en transporte y movilidad"
			produs = organization "ProDUS" "Ofrece servicios de datos y análisis para el sector transporte"
			defensoria = organization "Defensoría de los Habitantes" "Protege los derechos de los usuarios del transporte público"
			contraloria = organization "Contraloría General de la República" "Supervisa la gestión pública y el uso de recursos en el sector transporte"
			ungl = organization "Unión Nacional de Gobiernos Locales" "Gestionan y regulan el transporte público a nivel local"
			canatrans = organization "CANATRANS" "Cámara Nacional de Transportistas"
			canabus = organization "CANABUS" "Cámara Nacional de Autobuseros"
			developmentAgencies = organization "Agencias de desarrollo internacional" "Proveen financiamiento y apoyo técnico para proyectos de transporte"
			incofer = organization "INCOFER" "Instituto Costarricense de Ferrocarriles"
		}
		
		group "Entidades de datos" {
			vehicle = component "Vehículo" "Proporciona datos de ubicación y estado en tiempo real"
			agency = component "Agencia de transporte" "Proporciona datos estáticos y operativos del sistema de transporte"
			passenger = component "Pasajero" "Consume información de transporte en tiempo real"
			route = component "Ruta" "Define rutas de transporte con paradas y horarios"
			stop = component "Parada" "Punto de recogida y descenso de pasajeros"
			run = component "Viaje" "Instancia de un recorrido de transporte con horarios y estado"
		}
		
		group "Componentes de datos" {
			// Define components related to data processing and management here (create as groups in Databús and Infobús)
			// API de ingesta de datos, API pública de información, Servidor en tiempo real, Infobús Screens, Infobús Info, Infobús Screens
			// Gestor de base de datos relacional
		}
		
	}
}