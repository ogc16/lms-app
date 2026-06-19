export const softwareEngineeringCourse = {
  id: 'software_engineering',
  title: 'Software Engineering',
  subtitle: 'ICS 2302 — Software Engineering',
  icon: '🛠️',
  color: '#e67e22',
  bgColor: '#FEF5E7',
  description: 'Software Engineering principles covering SDLC, requirements engineering, design, testing, and project management.',
  chapters: [
    {
      id: 'se_intro',
      title: 'Introduction to Software Engineering',
      lessons: [
        {
          id: 'se_what_is',
          title: 'What is Software Engineering?',
          content: 'Software Engineering is the systematic application of engineering approaches to the development of software. It involves the application of principles, methods, and tools to design, build, and maintain high-quality software systems.\n\nKey aspects:\n• Concerned with all phases of software development\n• Applies engineering discipline to software creation\n• Addresses both technical and managerial aspects\n• Aims to produce reliable, efficient, and cost-effective software',
          codeExamples: [
            {
              title: 'Software Engineering vs Programming',
              code: 'Programming: Writing code to solve a specific problem\nSoftware Engineering: Managing the entire lifecycle of a software product\n\nAnalogy:\nProgramming is like writing a single recipe.\nSoftware Engineering is like running a restaurant chain.'
            }
          ]
        },
        {
          id: 'se_sdlc',
          title: 'Software Development Life Cycle',
          content: 'The SDLC is a structured process used for developing software. It consists of several phases:\n\n1. Planning — Define scope, resources, and timeline\n2. Requirements Analysis — Gather and document what the system must do\n3. Design — Create architecture and detailed design\n4. Implementation — Write the actual code\n5. Testing — Verify the software meets requirements\n6. Deployment — Release the software to users\n7. Maintenance — Fix issues and add enhancements',
          codeExamples: [
            {
              title: 'SDLC Phases Overview',
              code: 'Planning → Requirements → Design → Implementation → Testing → Deployment → Maintenance\n\nCommon SDLC Models:\n• Waterfall: Sequential, phase-by-phase\n• Iterative: Repeat cycles with refinement\n• Spiral: Risk-driven iterations\n• Agile: Incremental, adaptive delivery'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the primary focus of software engineering?',
          options: ['Writing code quickly', 'Systematic development of software', 'Hardware design', 'Network configuration'],
          correct: 1
        },
        {
          question: 'Which phase comes after Design in the SDLC?',
          options: ['Planning', 'Requirements', 'Implementation', 'Maintenance'],
          correct: 2
        },
        {
          question: 'Which SDLC model is sequential in nature?',
          options: ['Agile', 'Spiral', 'Waterfall', 'Iterative'],
          correct: 2
        }
      ]
    },
    {
      id: 'se_processes',
      title: 'Software Processes',
      lessons: [
        {
          id: 'se_process_models',
          title: 'Process Models',
          content: 'A software process model is an abstract representation of a development process. Different models suit different types of projects.\n\nWaterfall Model: Each phase must be completed before the next begins. Works well when requirements are well-understood and unlikely to change.\n\nIncremental Development: Develop the system in increments, each delivering a subset of functionality. Reduces risk and allows early feedback.\n\nSpiral Model: Combines prototyping with risk analysis. Each iteration goes through planning, risk analysis, development, and evaluation.',
          codeExamples: [
            {
              title: 'Waterfall Model Flow',
              code: 'Requirements → Design → Implementation → Testing → Deployment\n\nStrengths: Simple, clear milestones\nWeaknesses: Inflexible, late feedback\n\nIncremental Model:\nIncrement 1: Core features\nIncrement 2: Extended features\nIncrement 3: Advanced features'
            }
          ]
        },
        {
          id: 'se_uml_activity',
          title: 'Process Activities',
          content: 'Software process activities include:\n\n• Software Specification: Defining what the system should do\n• Software Design and Implementation: Organizing the system and building it\n• Software Validation: Checking that the system does what it should\n• Software Evolution: Modifying the system in response to changing needs\n\nThese activities are interleaved in most modern processes rather than being strictly sequential.',
          codeExamples: [
            {
              title: 'Process Activity Workflow',
              code: 'Specification: "The system shall allow users to log in"\n     ↓\nDesign: Architecture diagram, component design\n     ↓\nImplementation: Write Login class, database queries\n     ↓\nValidation: Test login with valid/invalid credentials\n     ↓\nEvolution: Add OAuth, biometric login'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which process model emphasizes risk analysis?',
          options: ['Waterfall', 'Spiral', 'Agile', 'V-Model'],
          correct: 1
        },
        {
          question: 'What is the first activity in most software processes?',
          options: ['Implementation', 'Testing', 'Specification', 'Deployment'],
          correct: 2
        },
        {
          question: 'A disadvantage of the Waterfall model is:',
          options: ['Too much user feedback', 'Late discovery of problems', 'Too many increments', 'Excessive risk analysis'],
          correct: 1
        }
      ]
    },
    {
      id: 'se_agile',
      title: 'Agile Development',
      lessons: [
        {
          id: 'se_agile_principles',
          title: 'Agile Principles',
          content: 'Agile development emerged as a response to the rigidity of plan-driven models. The Agile Manifesto (2001) values:\n\n• Individuals and interactions over processes and tools\n• Working software over comprehensive documentation\n• Customer collaboration over contract negotiation\n• Responding to change over following a plan\n\nAgile methods emphasize iterative development, customer involvement, and adaptability to changing requirements.',
          codeExamples: [
            {
              title: 'Agile vs Waterfall Comparison',
              code: 'Waterfall:\n[Plan all] → [Design all] → [Build all] → [Test at end]\n\nAgile:\n[Sprint 1: Plan+Design+Build+Test] ✓\n[Sprint 2: Plan+Design+Build+Test] ✓\n[Sprint 3: Plan+Design+Build+Test] ✓\n\nEach sprint delivers working, tested software.'
            }
          ]
        },
        {
          id: 'se_scrum',
          title: 'Scrum Framework',
          content: 'Scrum is the most popular Agile framework. Key concepts:\n\n• Product Backlog: Prioritized list of features\n• Sprint: Time-boxed iteration (typically 2-4 weeks)\n• Sprint Planning: Team selects backlog items for the sprint\n• Daily Stand-up: 15-minute daily meeting\n• Sprint Review: Demonstrate completed work\n• Sprint Retrospective: Reflect and improve\n\nRoles: Product Owner, Scrum Master, Development Team',
          codeExamples: [
            {
              title: 'Scrum Process Flow',
              code: 'Product Backlog [Features A, B, C, D, E]\n        ↓ Sprint Planning\nSprint Backlog [Features A, B] (2 weeks)\n        ↓\nDaily Stand-ups → Development → Testing\n        ↓ Sprint Review\nPotentially Shippable Product Increment\n        ↓ Sprint Retrospective\nImprove process for next sprint'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What year was the Agile Manifesto published?',
          options: ['1999', '2000', '2001', '2002'],
          correct: 2
        },
        {
          question: 'How long does a typical Scrum sprint last?',
          options: ['1 day', '1 week', '2-4 weeks', '2-4 months'],
          correct: 2
        },
        {
          question: 'Who is responsible for the Product Backlog?',
          options: ['Scrum Master', 'Development Team', 'Product Owner', 'Project Manager'],
          correct: 2
        }
      ]
    },
    {
      id: 'se_requirements',
      title: 'Requirements Engineering',
      lessons: [
        {
          id: 'se_req_types',
          title: 'Functional and Non-Functional Requirements',
          content: 'Requirements describe what a system should do and the constraints under which it must operate.\n\nFunctional Requirements: Statements of services the system should provide.\n• "The system shall allow users to search for products."\n• "Users must be able to reset their password."\n\nNon-Functional Requirements: Constraints on the system\'s operation.\n• Performance: "The system shall respond within 2 seconds."\n• Security: "All passwords must be encrypted."\n• Usability: "The interface must be accessible."\n\nDomain Requirements: Specific to the application domain (e.g., legal, regulatory).',
          codeExamples: [
            {
              title: 'Requirements Specification Example',
              code: 'Functional Requirement FR-01:\nThe system shall allow registered users to log in\nusing their email and password.\n\nNon-Functional Requirement NFR-01:\nThe login process shall complete within 3 seconds\nfor 95% of requests under normal load.\n\nNon-Functional Requirement NFR-02:\nPasswords shall be stored using bcrypt hashing.'
            }
          ]
        },
        {
          id: 'se_req_process',
          title: 'Requirements Engineering Process',
          content: 'The requirements engineering process includes:\n\n1. Elicitation: Gathering requirements from stakeholders through interviews, surveys, observation, and document analysis.\n\n2. Analysis: Checking for conflicts, overlaps, and omissions. Prioritizing requirements.\n\n3. Specification: Documenting requirements in a clear, unambiguous format (e.g., SRS document).\n\n4. Validation: Ensuring requirements accurately reflect stakeholder needs. Reviews and prototyping are common techniques.',
          codeExamples: [
            {
              title: 'Requirements Elicitation Techniques',
              code: 'Interviews: One-on-one discussions with stakeholders\nQuestionnaires: Surveys distributed to many users\nObservation: Watching users in their work environment\nPrototyping: Building a mockup for feedback\nDocument Analysis: Studying existing system docs\n\nValidation Checklist:\n✓ Correct: Does it reflect real needs?\n✓ Consistent: No contradictions\n✓ Complete: All scenarios covered\n✓ Feasible: Technically possible\n✓ Verifiable: Can we test this?'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which type of requirement specifies system performance?',
          options: ['Functional', 'Non-functional', 'Domain', 'User'],
          correct: 1
        },
        {
          question: 'What is the process of gathering requirements called?',
          options: ['Validation', 'Specification', 'Elicitation', 'Analysis'],
          correct: 2
        },
        {
          question: 'Which document formally records requirements?',
          options: ['SDD', 'SRS', 'UML', 'API'],
          correct: 1
        }
      ]
    },
    {
      id: 'se_modeling',
      title: 'System Modeling',
      lessons: [
        {
          id: 'se_uml_diagrams',
          title: 'UML Diagrams',
          content: 'The Unified Modeling Language (UML) provides a standardized way to visualize system design.\n\nStructural Diagrams:\n• Class Diagram: Shows classes, attributes, methods, and relationships\n• Object Diagram: Instances of classes at a specific moment\n• Component Diagram: Physical components of the system\n\nBehavioral Diagrams:\n• Use Case Diagram: User interactions with the system\n• Sequence Diagram: Interactions over time\n• Activity Diagram: Workflow of activities\n• State Machine Diagram: States and transitions',
          codeExamples: [
            {
              title: 'UML Class Diagram Notation',
              code: '+---------------------------+\n|         Student           |\n+---------------------------+\n| - name: string           |\n| - id: int                |\n| - courses: Course[]      |\n+---------------------------+\n| + enroll(c: Course): void |\n| + drop(c: Course): bool   |\n| + getGPA(): float         |\n+---------------------------+\n         |\n         | attends\n         v\n+---------------------------+\n|         Course            |\n+---------------------------+\n| - code: string           |\n| - title: string          |\n| - credits: int           |\n+---------------------------+\n| + getSchedule(): string  |\n+---------------------------+'
            }
          ]
        },
        {
          id: 'se_modeling_techniques',
          title: 'Modeling Techniques',
          content: 'System modeling helps stakeholders understand the system before construction.\n\nContext Models: Show the system boundaries and what lies outside it. Typically use a simple box-and-arrow diagram.\n\nInteraction Models: Show how users and system components interact. Use case diagrams and sequence diagrams are common.\n\nStructural Models: Show the organization of the system. Class diagrams and component diagrams are typical.\n\nBehavioral Models: Show system behavior in response to events. State machine and activity diagrams capture dynamic behavior.',
          codeExamples: [
            {
              title: 'Sequence Diagram Example',
              code: 'User          LoginSystem      Database\n  |               |               |\n  |--login()----->|               |\n  |               |--query()----->|\n  |               |<--result()----|\n  |<--success()---|               |\n  |               |               |\nThis shows the order of interactions\nbetween components over time.'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which UML diagram shows the static structure of classes?',
          options: ['Sequence Diagram', 'Class Diagram', 'Use Case Diagram', 'Activity Diagram'],
          correct: 1
        },
        {
          question: 'What type of UML diagram is a Sequence Diagram?',
          options: ['Structural', 'Behavioral', 'Physical', 'Deployment'],
          correct: 1
        },
        {
          question: 'Which symbol in a class diagram indicates private visibility?',
          options: ['+', '-', '#', '~'],
          correct: 1
        }
      ]
    },
    {
      id: 'se_arch_design',
      title: 'Architectural Design',
      lessons: [
        {
          id: 'se_arch_styles',
          title: 'Architectural Styles',
          content: 'Software architecture describes the overall structure of the system and how components interact.\n\nCommon Architectural Styles:\n\n• Layered Architecture: Organizes the system into layers (e.g., presentation, business logic, data access). Each layer communicates only with adjacent layers.\n\n• Client-Server: Separates clients (requesters) from servers (providers). Web applications follow this model.\n\n• Microservices: Decomposes the system into small, independent services that communicate via APIs.\n\n• Repository: All data is managed in a central repository that components access.',
          codeExamples: [
            {
              title: 'Layered Architecture Pattern',
              code: 'Presentation Layer (UI)\n      ↕\nBusiness Logic Layer\n      ↕\nData Access Layer\n      ↕\nDatabase Layer\n\nEach layer has a specific responsibility:\n- UI: User interface, input handling\n- Business: Rules, calculations, workflow\n- Data Access: Database operations, queries\n- Database: Data storage and retrieval'
            }
          ]
        },
        {
          id: 'se_arch_decisions',
          title: 'Architectural Decisions',
          content: 'Key architectural decisions affect the entire system:\n\n• Decomposition: How to break the system into components\n• Concurrency: How components run in parallel\n• Data Distribution: Where data is stored and how it flows\n• Interface Design: How components communicate\n• Technology Stack: Which languages, frameworks, and tools to use\n\nGood architectural decisions consider quality attributes like performance, security, maintainability, and scalability.',
          codeExamples: [
            {
              title: 'Architectural Decision Record (ADR)',
              code: 'ADR-001: Use Microservices Architecture\n\nContext: The system needs to scale independently\nand support multiple deployment pipelines.\n\nDecision: Adopt microservices with REST APIs\n\nConsequences:\n+ Independent deployment per service\n+ Technology flexibility per service\n- Increased network complexity\n- Requires service orchestration\n- More operational overhead'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'In a layered architecture, how do layers communicate?',
          options: ['Directly with any layer', 'Only with adjacent layers', 'Through a central bus', 'Via a database'],
          correct: 1
        },
        {
          question: 'Which architecture style decomposes an application into small independent services?',
          options: ['Monolithic', 'Client-Server', 'Microservices', 'Layered'],
          correct: 2
        },
        {
          question: 'What is an ADR?',
          options: ['Architecture Design Review', 'Architectural Decision Record', 'Application Data Repository', 'Automated Deployment Run'],
          correct: 1
        }
      ]
    },
    {
      id: 'se_design_impl',
      title: 'Design and Implementation',
      lessons: [
        {
          id: 'se_design_principles',
          title: 'Design Principles',
          content: 'Good design principles lead to maintainable, scalable software.\n\n• Modularity: Divide the system into cohesive modules with clear interfaces.\n• Separation of Concerns: Each module addresses a specific concern.\n• Encapsulation: Hide internal details, expose only necessary interfaces.\n• Coupling and Cohesion: Aim for loose coupling (minimal dependencies) and high cohesion (related elements grouped together).\n\nSOLID Principles:\nS: Single Responsibility\nO: Open/Closed\nL: Liskov Substitution\nI: Interface Segregation\nD: Dependency Inversion',
          codeExamples: [
            {
              title: 'High vs Low Cohesion',
              code: 'Low Cohesion (Bad):\nclass Utils {\n    sendEmail();\n    calculateTax();\n    printReport();\n    connectDatabase();\n}\n\nHigh Cohesion (Good):\nclass EmailService {\n    sendEmail();\n    validateAddress();\n    formatTemplate();\n}\n\nclass TaxCalculator {\n    calculateTax();\n    applyDiscount();\n    getTaxRate();\n}'
            }
          ]
        },
        {
          id: 'se_implementation',
          title: 'Implementation Strategies',
          content: 'Implementation involves translating design into executable code.\n\nCoding Standards: Consistent naming conventions, indentation, and commenting practices improve readability.\n\nCode Review: Systematic examination of code by peers to find defects and improve quality.\n\nRefactoring: Restructuring existing code without changing its external behavior to improve internal quality.\n\nVersion Control: Use Git or similar tools to track changes, collaborate, and manage releases.',
          codeExamples: [
            {
              title: 'Refactoring Example',
              code: 'Before refactoring:\nfunction calculate(a, b, type) {\n    if (type === "add") return a + b;\n    if (type === "sub") return a - b;\n    if (type === "mul") return a * b;\n    if (type === "div") return a / b;\n}\n\nAfter refactoring:\nfunction add(a, b) { return a + b; }\nfunction sub(a, b) { return a - b; }\nfunction mul(a, b) { return a * b; }\nfunction div(a, b) { return a / b; }\n\nconst operations = { add, sub, mul, div };\nfunction calculate(a, b, type) {\n    return operations[type](a, b);\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which principle states a class should have only one reason to change?',
          options: ['Open/Closed', 'Single Responsibility', 'Liskov Substitution', 'Dependency Inversion'],
          correct: 1
        },
        {
          question: 'What is refactoring?',
          options: ['Adding new features', 'Restructuring code without changing behavior', 'Deleting old code', 'Writing documentation'],
          correct: 1
        },
        {
          question: 'High coupling between modules is generally considered:',
          options: ['Good for performance', 'Bad for maintainability', 'Required for OOP', 'Neutral'],
          correct: 1
        }
      ]
    },
    {
      id: 'se_testing',
      title: 'Software Testing',
      lessons: [
        {
          id: 'se_test_levels',
          title: 'Levels of Testing',
          content: 'Software testing verifies that the system meets requirements and finds defects.\n\nUnit Testing: Tests individual components or functions in isolation. Usually automated.\n\nIntegration Testing: Tests how components work together. Focuses on interfaces and data flow between modules.\n\nSystem Testing: Tests the complete, integrated system. Verifies functional and non-functional requirements.\n\nAcceptance Testing: Tests from the user\'s perspective to determine if the system is ready for delivery. Often involves users directly.',
          codeExamples: [
            {
              title: 'Testing Levels Visualization',
              code: 'Unit Tests:    [ ] [ ] [ ]  (individual functions)\nIntegration:   [---] [---]   (module interactions)\nSystem Tests:  [-------]     (entire system)\nAcceptance:    [=======]     (user validation)\n\nExample Unit Test (pseudocode):\ntest calculateTotal() {\n    assert calculateTotal([10, 20]) == 30\n    assert calculateTotal([]) == 0\n    assert calculateTotal([-5, 5]) == 0\n}'
            }
          ]
        },
        {
          id: 'se_test_techniques',
          title: 'Testing Techniques',
          content: 'Different testing techniques uncover different types of defects.\n\nBlack-Box Testing: Tests functionality without knowing internal code structure. Uses input/output validation.\n\nWhite-Box Testing: Tests internal code paths. Includes statement coverage, branch coverage, and path coverage.\n\nEquivalence Partitioning: Divides input data into partitions; testing one value from each partition.\n\nBoundary Value Analysis: Tests values at the edges of input ranges where defects are more likely.',
          codeExamples: [
            {
              title: 'Black-Box vs White-Box Testing',
              code: 'Black-Box: You test the remote control buttons\nwithout knowing the internal circuitry.\nInput: Volume+ → Output: Sound increases\nInput: Power → Output: TV turns off\n\nWhite-Box: You examine the circuit board and\ntest each connection internally.\nif (x > 0) { ... } else { ... }\nTest both branches (x > 0 and x <= 0)\n\nBoundary Value Analysis:\nIf valid age is 18-65, test: 17, 18, 65, 66'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which testing level tests individual functions in isolation?',
          options: ['Integration Testing', 'System Testing', 'Unit Testing', 'Acceptance Testing'],
          correct: 2
        },
        {
          question: 'What technique divides input into ranges and tests edge values?',
          options: ['Equivalence Partitioning', 'Boundary Value Analysis', 'Statement Coverage', 'Fuzz Testing'],
          correct: 1
        },
        {
          question: 'Testing without knowledge of internal code is called:',
          options: ['White-Box', 'Black-Box', 'Glass-Box', 'Gray-Box'],
          correct: 1
        }
      ]
    },
    {
      id: 'se_evolution',
      title: 'Software Evolution',
      lessons: [
        {
          id: 'se_maintenance',
          title: 'Software Maintenance',
          content: 'Software maintenance is the process of modifying software after delivery. It is often the most expensive phase of the SDLC.\n\nTypes of Maintenance:\n• Corrective: Fixing discovered bugs and defects\n• Adaptive: Adapting to changes in the environment (OS, hardware, regulations)\n• Perfective: Adding new features and improving performance\n• Preventive: Restructuring code to prevent future problems\n\nLehman\'s Laws of Evolution describe how software systems change over time.',
          codeExamples: [
            {
              title: 'Maintenance Cost Distribution',
              code: 'Types of Maintenance:\nCorrective (17%): Bug fixes\nAdaptive (18%): Environment changes\nPerfective (60%): New features, enhancements\nPreventive (5%): Code cleanup, refactoring\n\nLehman\'s Laws:\n1. Continuing Change — System must adapt or die\n2. Increasing Complexity — Complexity grows without intervention\n3. Self-Regulation — Evolution follows statistical patterns'
            }
          ]
        },
        {
          id: 'se_reengineering',
          title: 'Reengineering and Reverse Engineering',
          content: 'Legacy systems often need significant changes to remain useful.\n\nReverse Engineering: Analyzing a system to identify its components and their relationships, creating representations at a higher abstraction level. Does not change the system.\n\nReengineering: Examining and altering a system to reconstitute it in a new form. Includes reverse engineering followed by forward engineering.\n\nRefactoring: A continuous process of improving code structure without changing behavior, distinct from large-scale reengineering.',
          codeExamples: [
            {
              title: 'Reengineering Process',
              code: 'Original System (Legacy Code)\n        ↓\n[Reverse Engineering] — Understand the code\n        ↓\nAbstraction Level Up (Design Models)\n        ↓\n[Restructuring] — Improve organization\n        ↓\n[Forward Engineering] — Generate new implementation\n        ↓\nModernized System\n\nThis is often necessary when:\n- Documentation is missing or outdated\n- Original developers are unavailable\n- Technology stack must be modernized'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which type of maintenance fixes bugs?',
          options: ['Adaptive', 'Perfective', 'Corrective', 'Preventive'],
          correct: 2
        },
        {
          question: 'What is the most expensive phase of the SDLC?',
          options: ['Planning', 'Design', 'Implementation', 'Maintenance'],
          correct: 3
        },
        {
          question: 'Analyzing a system without changing it is called:',
          options: ['Reengineering', 'Reverse Engineering', 'Forward Engineering', 'Refactoring'],
          correct: 1
        }
      ]
    },
    {
      id: 'se_project_mgmt',
      title: 'Project Management',
      lessons: [
        {
          id: 'se_pm_basics',
          title: 'Project Planning and Estimation',
          content: 'Software project management involves planning, organizing, and controlling resources to achieve project goals.\n\nKey Activities:\n• Estimation: Predicting effort, time, and cost\n• Scheduling: Defining tasks, dependencies, and milestones\n• Risk Management: Identifying and mitigating risks\n• Quality Management: Ensuring quality standards are met\n\nEstimation Techniques:\n• Expert Judgment: Consulting experienced professionals\n• Analogy: Comparing with similar past projects\n• COCOMO: Algorithmic cost estimation model\n• Function Point Analysis: Measuring system functionality',
          codeExamples: [
            {
              title: 'Project Estimation Example',
              code: 'COCOMO Model (Basic):\nEffort = a × (KLOC)^b person-months\n\nWhere KLOC = thousands of lines of code\nOrganic mode: a=2.4, b=1.05 (small teams, familiar)\nSemi-detached: a=3.0, b=1.12 (mixed)\nEmbedded: a=3.6, b=1.20 (tight constraints)\n\nExample: 50 KLOC, Organic mode\nEffort = 2.4 × (50)^1.05 ≈ 145 person-months'
            }
          ]
        },
        {
          id: 'se_risk_mgmt',
          title: 'Risk Management',
          content: 'Risk management identifies, analyzes, and responds to project risks.\n\nRisk Categories:\n• Technical: Technology challenges, integration issues\n• Schedule: Unrealistic timelines, dependency delays\n• Resource: Staff turnover, budget cuts, tool limitations\n• Requirements: Changing requirements, unclear specifications\n\nRisk Management Process:\n1. Identification — List potential risks\n2. Analysis — Assess probability and impact\n3. Planning — Develop mitigation strategies\n4. Monitoring — Track risks throughout the project',
          codeExamples: [
            {
              title: 'Risk Assessment Matrix',
              code: 'Risk                Probability  Impact   Priority\nStaff turnover      Low         High     Medium\nTech failure        Medium      High     High\nRequirement change  High        Medium   High\nBudget overrun      Medium      High     High\nSchedule slip       High        High     Critical\n\nMitigation strategies:\n- Cross-train team members (staff turnover)\n- Prototype key technologies (tech failure)\n- Frequent stakeholder reviews (req changes)\n- Regular budget tracking (budget overrun)\n- Buffer time in schedule (schedule slip)'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does COCOMO stand for?',
          options: ['Computer Cost Model', 'Constructive Cost Model', 'Calculated Cost Model', 'Complex Cost Model'],
          correct: 1
        },
        {
          question: 'Which risk has high probability and high impact?',
          options: ['Staff turnover', 'Schedule slip', 'Tech failure', 'Budget overrun'],
          correct: 1
        },
        {
          question: 'What is the first step in risk management?',
          options: ['Analysis', 'Monitoring', 'Identification', 'Planning'],
          correct: 2
        }
      ]
    }
  ]
};
