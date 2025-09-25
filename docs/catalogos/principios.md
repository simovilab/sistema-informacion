<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# Principios

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0 |
| Fecha | 2025-09-18 |
| Descripción | A catalog of architectural principles for a Public Transportation Information System. |
| Autores | Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


## Principios


<a id="principles-001"></a>
### Maximize Benefits for Users

ID: `principles:001`

- Domain: Business
- Description: A public service should prioritize the continuous improvement of its users' experience.
- Rationale: The economic and social benefits of technologies for public transportation derive, ultimately, from the effectiveness and convenience that it provides to its users.
- Implications: Continuous upgrades of the information system should be made to better address the evolving needs of its passengers.
- Related principles: —
- References: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-002"></a>
### Financial Sustainability and Service Affordability

ID: `principles:002`

- Domain: Business
- Description: The implementation of new technologies must ensure proper funding so that the financial risks for the private companies, as service providers, are minimized, while keeping the costs for passengers reasonable.
- Rationale: Without a sustainable business model, the concession model of public transportation in Costa Rica cannot exist and, in fact, the service itself is threatened. New operational costs derived from these technologies would worsen the situation, regardless of how useful and important they might be.
- Implications: The system design should be carefully planned to enable a gradual, low initial cost implementation. New legislation could be discussed to make structural changes related to, for example, the funding mechanisms for new technologies. Subsidies should also be discussed, as suggested by many technical entities.
- Related principles: —
- References: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-003"></a>
### Service Data is Open and Standardized

ID: `principles:003`

- Domain: Data
- Description: All data related to the service that should be provided to passengers to facilitate system usage must be open and readily accessible for public consumption.
- Rationale: There is an obligation for the providers of a public service to be clear and transparent about all the information that its users need to effectively make use of it, while there is an obligation of the governing bodies to coordinate the effort for sharing open and standardized transit data.
- Implications: The governing bodies will create the appropriate channels for sharing open data, including a technology architecture that allows sustainable evolution of the systems, available without restrictions for consumption and analysis by any interested party, including private companies, researchers, the press and others.
- Related principles: —
- References: https://doi.org/10.1109/CONCAPAN63470.2024.10933847, https://www.go-fair.org/fair-principles/

<a id="principles-004"></a>
### Operational Data is Shared

ID: `principles:004`

- Domain: Data
- Description: Operational data is an asset for multiple stakeholders of the system and should be accessible for efficiency, regulation and continuous improvement.
- Rationale: The concession of a public service requires close inspection from governing and regulatory bodies. For this purpose, operational data is important and valuable for assessing the effectiveness and legal compliance of the company, which is in the highest public interest.
- Implications: The governing and regulatory bodies must rule what data needs to be shared with them. The data to be shared (occupancy, emissions, etc.) --although not necessarily publicly-- will help in examining, regulating and improving the service.
- Related principles: —
- References: https://doi.org/10.1109/CONCAPAN63470.2024.10933847, https://www.go-fair.org/fair-principles/

<a id="principles-005"></a>
### Common Vocabulary and Data Definitions

ID: `principles:005`

- Domain: Data
- Description: All technological components of the system will follow a single set of concepts and definitions.
- Rationale: A complex technological system requires consistency among its components on the understanding of its definitions, elements and relationships. This will allow an easier expansion and integration with smart cities, in general.
- Implications: All databases and internal data exchanges must follow, as closely as possible, the definitions of any pre-defined, applicable standards. Service data and operational data either share a common vocabulary and data definitions or have a well-defined mapping function, avoiding duplicity or confusion in cases where legacy or external systems are included.
- Related principles: —
- References: https://www.go-fair.org/fair-principles/

<a id="principles-006"></a>
### Unicity of the Information

ID: `principles:006`

- Domain: Application
- Description: The information available to the users is consistent, accurate, up-to-date and single-sourced, via as many communication channels as possible.
- Rationale: Passengers require information of the public transportation system as a whole. Currently, in Costa Rica, every private concessionaire is responsible for sharing the information of its service, resulting in a severe lack of availability, with less than 15% of the routes presenting complete and consistent data online and without any clear guidance on how to share this information.
- Implications: All concessionaires will follow the requirements for data collection and data sharing established by the governing bodies. This does not limit who can collect and share this data --for example, third-party ICT private companies-- but the technical details are previously established.
- Related principles: —
- References: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-007"></a>
### Ease-of-Use and Accessibility

ID: `principles:007`

- Domain: Application
- Description: The service should be designed for all users.
- Rationale: Modern technological systems must be sensible to the needs of special users with different physical and cognitive abilities or background knowledge.
- Implications: Recommendations in service design must be followed for ensuring accessibility in graphic signage, digital media, communication strategies, and other 'touch points' between the system and the users. The system should also follow from the start an internationalization (i18n) process by providing information that is understandable for most international visitors. For example, translations should be made to, at least, English for wayfinding signage, alerts and other data in print and digital media. New generative artificial intelligence technologies like large language models (LLM) could and should be used to expand these capabilities.
- Related principles: —
- References: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-008"></a>
### Single System Architecture

ID: `principles:008`

- Domain: Technology
- Description: All stakeholders should follow and comply with the guidelines of a system-wide architecture devised by the governing bodies.
- Rationale: A complex system requires a well-defined blueprint to evolve more seamlessly. The internet is an essential example of a vast, intricate system with a multitude of applications and technologies, all coordinated through a set of standards and architectures. The new paradigms of design of engineering systems demand interventions with careful considerations of the complexities of a socio-technical system like public transportation.
- Implications: Governing bodies should function as technology planners, product owners and referees, and must develop the technical expertise required for these roles. However, in designing such an architecture, careful attention must be given to ensure it does not become an obstacle to future modernization and interoperability.
- Related principles: —
- References: https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-009"></a>
### Technology Independence

ID: `principles:009`

- Domain: Technology
- Description: Implementations should be independent of particular technology choices, allowing them to function on multiple platforms and alongside external systems.
- Rationale: Technology independence results in flexibility, scalability and cost-effective implementations, while minimizing the risk of obsolescence. The accessibility and compatibility to different technology options is increased, as well as the innovation and resilience of results.
- Implications: Standards must be followed at major steps of the implementation. Critically, government bidding processes must add this in their requirements.
- Related principles: —
- References: https://machalliance.org/mach-principles, https://doi.org/10.1109/CONCAPAN63470.2024.10933847

<a id="principles-010"></a>
### Interoperability

ID: `principles:010`

- Domain: Technology
- Description: Implementations should follow established standards to ensure compatibility and effective information exchange between systems.
- Rationale: This approach enhances efficiency by allowing seamless integration of different technologies. It reduces costs by using existing infrastructure, and fosters innovation through collaboration. Adhering to standards also ensures consistency and improves system management, while maximizing return on investment and supporting vendor integration and supply chain efficiency.
- Implications: A protocol for devising or adopting and reviewing relevant standards is needed. Current platforms must be identified and documented. Standards should be followed unless there is a strong business case for deviation. A digital governance mechanism should be put in place to oversee this principle.
- Related principles: —
- References: https://machalliance.org/mach-principles, https://doi.org/10.1109/CONCAPAN63470.2024.10933847, https://www.interoperablemobility.org/

<a id="principles-011"></a>
### Separation of Concerns

ID: `principles:011`

- Domain: Software Architecture
- Description: Different concerns should be separated into distinct sections of the system to improve maintainability and scalability.
- Rationale: By separating concerns, we can reduce complexity and make it easier to manage changes.
- Implications: Modules should have clear responsibilities and interfaces.
- Related principles: —
- References: https://en.wikipedia.org/wiki/Separation_of_concerns

<a id="principles-012"></a>
### Single Responsibility Principle

ID: `principles:012`

- Domain: Software Architecture
- Description: A class or module should have one, and only one, reason to change.
- Rationale: This principle helps in reducing the impact of changes and improves code readability.
- Implications: Classes should be designed to handle a single functionality.
- Related principles: principles:001
- References: https://en.wikipedia.org/wiki/Single_responsibility_principle

<a id="principles-013"></a>
### Don't Repeat Yourself (DRY)

ID: `principles:013`

- Domain: Software Architecture
- Description: Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.
- Rationale: Avoiding duplication reduces the risk of inconsistencies and makes maintenance easier.
- Implications: Code should be modular and reusable.
- Related principles: principles:001, principles:002
- References: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
