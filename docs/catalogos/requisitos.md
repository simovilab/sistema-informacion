<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# Requisitos

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0 |
| Fecha | 2025-09-18 |
| Descripción | A catalog of architectural requirements for a Public Transportation Information System. |
| Autores | César Alvarado Castro, Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


## Requisitos


<a id="requirement-001"></a>
### Real-Time Bus Tracking

ID: `requirement:001`

- Description: The system shall provide real-time tracking of buses to users.
- Application: application:001, application:002
- Type: Functional
- Priority: High
- Status: Approved
- Rationale: To enhance user experience and improve transit efficiency.
- Stakeholders: Passengers, Transit Authorities
- AcceptanceCriteria: Users can view real-time bus locations on a map., Bus arrival times are updated in real-time.
- RelatedComponents: GPS Tracking Module, Mobile Application
- RelatedInterfaces: Bus Location API
- RelatedDataEntities: Bus, Route
- RelatedActors: Passenger

<a id="requirement-002"></a>
### User Authentication

ID: `requirement:002`

- Description: The system shall provide secure user authentication and authorization.
- Application: application:001, application:002
- Type: Functional
- Priority: Medium
- Status: Approved
- Rationale: To protect user data and ensure secure access to the system.
- Stakeholders: Passengers, System Administrators
- AcceptanceCriteria: Users can register and log in using email and password., Password recovery options are available.
- RelatedComponents: Authentication Service, User Management Module
- RelatedInterfaces: User Authentication API
- RelatedDataEntities: User
- RelatedActors: Passenger, System Administrator
