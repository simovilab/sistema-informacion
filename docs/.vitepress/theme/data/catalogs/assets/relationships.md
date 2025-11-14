| Source Entity                   | Target Entity                   | Relationship                          |
| ------------------------------- | ------------------------------- | ------------------------------------- |
| Actor                           | Actor                           | Decomposes                            |
| Actor                           | Business Service                | Consumes                              |
| Actor                           | Data Entity                     | Supplies or consumes                  |
| Actor                           | Event                           | Generates                             |
| Actor                           | Event                           | Resolves                              |
| Actor                           | Function                        | Interacts with                        |
| Actor                           | Function                        | Performs                              |
| Actor                           | Organization Unit               | Belongs to                            |
| Actor                           | Process                         | Participates in                       |
| Actor                           | Process                         | Triggers                              |
| Actor                           | Role                            | Performs task in                      |
| Actor                           | Value Stream                    | Performs a task in                    |
| Application Service             | Business Service                | Automates some or all of              |
| Application Service             | Data Entity                     | Used by                               |
| Application Service             | Logical Application Component   | Is realized through                   |
| Application Service             | Technology Service              | Is served by                          |
| Business Capability             | Business Information            | Uses                                  |
| Business Capability             | Course of Action                | Is influenced by                      |
| Business Capability             | Function                        | Is delivered by                       |
| Business Capability             | Organization Unit               | Is used by                            |
| Business Capability             | Process                         | Is operationalized by                 |
| Business Capability             | Value Stream                    | Enables                               |
| Business Information            | Business Capability             | Is used by                            |
| Business Information            | Business Service                | Used to derive                        |
| Business Information            | Course of Action                | Is influenced by                      |
| Business Information            | Data Entity                     | Is realized by                        |
| Business Information            | Process                         | Uses                                  |
| Business Service                | Actor                           | Is provided to                        |
| Business Service                | Application Service             | Uses                                  |
| Business Service                | Business Information            | Is derived from                       |
| Business Service                | Business Service Quality        | Meets                                 |
| Business Service                | Business Service                | Consumes                              |
| Business Service                | Business Service                | Decomposes                            |
| Business Service                | Contract                        | Is governed and measured by           |
| Business Service                | Data Entity                     | Is accessed and updated through       |
| Business Service                | Event                           | Resolves                              |
| Business Service                | Function                        | Provides governed interface to access |
| Business Service                | Logical Technology Component    | Is implemented on                     |
| Business Service                | Organization Unit               | Is owned and governed by              |
| Business Service                | Process                         | Is realized by                        |
| Business Service                | Process                         | Supports                              |
| Capability                      | Work Package                    | Is delivered by                       |
| Contract                        | Business Service                | Governs, measures                     |
| Contract                        | Service Quality                 | Meets                                 |
| Control                         | Process                         | Ensures correct operation of          |
| Course of Action                | Business Capability             | Influences                            |
| Course of Action                | Business Information            | Influences                            |
| Course of Action                | Function                        | Influences                            |
| Course of Action                | Goal                            | Realizes                              |
| Course of Action                | Organization Unit               | Influences                            |
| Course of Action                | Product                         | Influences                            |
| Course of Action                | Value Stream                    | Influences                            |
| Data Entity                     | Actor                           | Is supplied or consumed by            |
| Data Entity                     | Application Service             | Used by                               |
| Data Entity                     | Business Information            | Realizes                              |
| Data Entity                     | Business Service                | Is accessed and updated through       |
| Data Entity                     | Data Entity                     | Decomposes                            |
| Data Entity                     | Data Entity                     | Relates to                            |
| Data Entity                     | Logical Data Component          | Resides within                        |
| Driver                          | Driver                          | Decomposes                            |
| Driver                          | Goal                            | Creates                               |
| Driver                          | Organization Unit               | Motivates                             |
| Event                           | Actor                           | Is generated by                       |
| Event                           | Actor                           | Is resolved by                        |
| Event                           | Business Service                | Is resolved by                        |
| Event                           | Process                         | Is generated by                       |
| Event                           | Process                         | Is resolved by                        |
| Function                        | Actor                           | Supports                              |
| Function                        | Business Capability             | Delivers                              |
| Function                        | Business Service                | Is bounded by                         |
| Function                        | Course of Action                | Is influenced by                      |
| Function                        | Function                        | Communicates with                     |
| Function                        | Function                        | Decomposes                            |
| Function                        | Organization Unit               | Is owned by                           |
| Function                        | Process                         | Orchestrates                          |
| Function                        | Process                         | Decomposes                            |
| Goal                            | Course of Action                | Is realized by                        |
| Goal                            | Driver                          | Addresses                             |
| Goal                            | Goal                            | Decomposes                            |
| Goal                            | Objective                       | Is made specific                      |
| Logical Application Component   | Application Service             | Implements                            |
| Logical Application Component   | Logical Application Component   | Decomposes                            |
| Logical Application Component   | Logical Application Component   | Communicates with                     |
| Logical Application Component   | Logical Data Component          | Used by                               |
| Logical Application Component   | Logical Technology Component    | Is served by                          |
| Logical Application Component   | Physical Application Component  | Is realized by                        |
| Logical Data Component          | Data Entity                     | Encapsulates                          |
| Logical Data Component          | Logical Application Component   | Uses                                  |
| Logical Data Component          | Physical Data Component         | Is realized by                        |
| Logical Technology Component    | Business Service                | Provides platform for                 |
| Logical Technology Component    | Logical Application Component   | Serves                                |
| Logical Technology Component    | Logical Technology Component    | Decomposes                            |
| Logical Technology Component    | Logical Technology Component    | Is dependent on                       |
| Logical Technology Component    | Physical Technology Component   | Is realized by                        |
| Logical Technology Component    | Technology Service              | Supplies                              |
| Measure                         | Measure                         | Decomposes                            |
| Measure                         | Objective                       | Sets performance criteria for         |
| Objective                       | Goal                            | Realizes                              |
| Objective                       | Measure                         | Is tracked against                    |
| Objective                       | Objective                       | Decomposes                            |
| Organization Unit               | Actor                           | Contains                              |
| Organization Unit               | Business Capability             | Delivers                              |
| Organization Unit               | Business Service                | Owns and governs                      |
| Organization Unit               | Course of Action                | Participates in                       |
| Organization Unit               | Driver                          | Is motivated by                       |
| Organization Unit               | Function                        | Enables                               |
| Organization Unit               | Organization Unit               | Decomposes                            |
| Organization Unit               | Product                         | Delivers                              |
| Physical Application Component  | Logical Application Component   | Realizes                              |
| Physical Application Component  | Physical Application Component  | Decomposes                            |
| Physical Application Component  | Physical Application Component  | Communicates with                     |
| Physical Application Component  | Physical Data Component         | Used by                               |
| Physical Application Component  | Physical Technology Component   | Is served by                          |
| Physical Data Component         | Logical Data Component          | Realizes                              |
| Physical Data Component         | Physical Application Component  | Used by                               |
| Physical Data Component         | Physical Data Component         | Decomposes                            |
| Physical Technology Component   | Logical Technology Component    | Realizes                              |
| Physical Technology Component   | Physical Application Component  | Serves                                |
| Physical Technology Component   | Physical Technology Component   | Decomposes                            |
| Physical Technology Component   | Physical Technology Component   | Is dependent on                       |
| Process                         | Actor                           | Is produced by                        |
| Process                         | Actor                           | Supports                              |
| Process                         | Business Capability             | Operationalizes                       |
| Process                         | Business Information            | Is used by                            |
| Process                         | Business Service                | Orchestrates                          |
| Process                         | Business Service                | Decomposes                            |
| Process                         | Control                         | Is guided by                          |
| Process                         | Event                           | Generates                             |
| Process                         | Event                           | Resolves                              |
| Process                         | Function                        | Supports                              |
| Process                         | Function                        | Is realized by                        |
| Process                         | Process                         | Decomposes                            |
| Process                         | Process                         | Precedes, follows                     |
| Process                         | Product                         | Delivers                              |
| Process                         | Role                            | Involves                              |
| Process                         | Role                            | Is performed by                       |
| Process                         | Value Stream                    | Operationalizes                       |
| Product                         | Course of Action                | Is produced by                        |
| Product                         | Organization Unit               | Is produced by                        |
| Product                         | Process                         | Is produced by                        |
| Role                            | Actor                           | Is performed by                       |
| Role                            | Process                         | Participates in                       |
| Role                            | Process                         | Performs                              |
| Role                            | Role                            | Decomposes                            |
| Service Quality                 | Contract                        | Applies to                            |
| Service Quality                 | Service                         | Applies to                            |
| Technology Service              | Application Service             | Serves                                |
| Technology Service              | Logical Technology Component    | Is supplied by                        |
| Value Stream                    | Actor                           | Involves                              |
| Value Stream                    | Actor                           | Is triggered by                       |
| Value Stream                    | Business Capability             | Is enabled by                         |
| Value Stream                    | Course of Action                | Is influenced by                      |
| Value Stream                    | Process                         | Is operationalized by                 |
| Work Package                    | Capability                      | Delivers                              |
