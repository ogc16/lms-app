export const ooadCourse = {
  id: 'ooad',
  title: 'Object-Oriented Analysis & Design',
  subtitle: 'BIT 2114 — OOAD',
  icon: '\uD83D\uDD04',
  color: '#e94560',
  bgColor: '#FFF0F3',
  description: 'Object-Oriented Analysis and Design — covering OOP principles, UML diagrams, system methodologies, requirements modeling, and design patterns.',
  chapters: [
    {
      id: 'ooad_intro',
      title: 'Introduction to OOAD',
      lessons: [
        {
          id: 'ooad_what_is_ooa',
          title: 'What is Object-Oriented Analysis?',
          content: 'Object-Oriented Analysis (OOA) is the process of examining a problem domain from the perspective of objects and their interactions. The focus is on understanding what the system needs to do, identifying the key objects in the problem domain, and defining their attributes and behaviors. OOA is concerned with the "what" rather than the "how."\n\nKey output of OOA: A conceptual model consisting of classes, objects, attributes, and operations that represent the problem domain.'
        },
        {
          id: 'ooad_what_is_ood',
          title: 'What is Object-Oriented Design?',
          content: 'Object-Oriented Design (OOD) is the process of defining how the system will be built using object-oriented concepts. It takes the analysis model and adds implementation details, defining the software objects, their interfaces, and their interactions. OOD is concerned with the "how."\n\nKey output of OOD: A detailed design model that can be directly implemented in an object-oriented programming language.'
        },
        {
          id: 'ooad_ooa_vs_ood',
          title: 'OOA vs OOD Comparison',
          content: 'OOA focuses on understanding the problem — answering "what must the system do?" with an analysis model of conceptual classes. OOD focuses on defining the solution — answering "how will the system do it?" with a detailed design model of software classes.\n\nOOA produces high-level, business-oriented output for stakeholders and domain experts. OOD produces detailed, implementation-oriented output for developers and architects. OOA considers business rules and requirements; OOD considers performance, technology, and constraints.'
        },
        {
          id: 'ooad_benefits',
          title: 'Benefits of OOAD',
          content: 'Reusability — Classes and objects can be reused across projects, reducing development time and cost.\n\nMaintainability — Object-oriented systems are easier to modify and extend due to modular design.\n\nBetter Modeling — The real world is naturally represented through objects, making models more intuitive.\n\nImproved Communication — Unified Modeling Language (UML) provides a common vocabulary for stakeholders.\n\nReduced Complexity — Systems are broken down into manageable objects and classes.\n\nFaster Development — Iterative development and reuse accelerate the development process.'
        }
      ],
      quiz: [
        {
          question: 'What does OOA stand for?',
          options: ['Object-Oriented Architecture', 'Object-Oriented Analysis', 'Object-Oriented Application', 'Object-Oriented Algorithm'],
          correct: 1
        },
        {
          question: 'What is the primary goal of Object-Oriented Analysis?',
          options: ['Writing efficient code', 'Understanding the problem domain', 'Designing the user interface', 'Testing the system'],
          correct: 1
        },
        {
          question: 'During OOD, the focus is on:',
          options: ['Understanding user requirements', 'Building the system architecture', 'Defining how the system will be built', 'Gathering requirements from stakeholders'],
          correct: 2
        },
        {
          question: 'OOAD combines which two disciplines?',
          options: ['OOA and OOD', 'OOP and OOD', 'UML and OOP', 'Analysis and Testing'],
          correct: 0
        },
        {
          question: 'Which of the following is a key benefit of OOAD?',
          options: ['Increased documentation', 'Reusability of components', 'More complex code', 'Slower development'],
          correct: 1
        },
        {
          question: 'Which activity belongs to Object-Oriented Analysis?',
          options: ['Defining class hierarchies', 'Identifying objects in the problem domain', 'Writing constructor methods', 'Optimizing database queries'],
          correct: 1
        },
        {
          question: 'Which activity belongs to Object-Oriented Design?',
          options: ['Interviewing stakeholders', 'Defining software object interfaces', 'Creating a business process diagram', 'Conducting user surveys'],
          correct: 1
        },
        {
          question: 'The main output of OOA is:',
          options: ['Source code', 'An analysis/object model', 'A deployment plan', 'A test suite'],
          correct: 1
        }
      ]
    },
    {
      id: 'ooad_oop',
      title: 'Object-Oriented Concepts & Principles',
      lessons: [
        {
          id: 'ooad_four_pillars',
          title: 'The Four Pillars of Object-Orientation',
          content: 'Encapsulation — Bundling data (attributes) and methods (operations) into a single unit (a class), while restricting access to internal components. This protects data integrity and prevents unintended interference. Example: A BankAccount class encapsulates the balance attribute and provides public methods like deposit() and withdraw().\n\nInheritance — A mechanism where a new class (child/subclass) derives properties and behaviors from an existing class (parent/superclass). It promotes code reuse and establishes a hierarchical relationship. Example: SavingsAccount and CheckingAccount inherit from BankAccount.\n\nPolymorphism — "Many forms" — allows objects of different types to respond to the same message (method call) in different ways. Example: calculateInterest() behaves differently for SavingsAccount and LoanAccount objects.\n\nAbstraction — Hiding complex implementation details and showing only the essential features of an object. Example: A Vehicle abstract class defines start() and stop() without specifying how they work; subclasses provide implementations.'
        },
        {
          id: 'ooad_classes_vs_objects',
          title: 'Classes vs Objects',
          content: 'A class is a blueprint or template defining attributes and methods. No memory is allocated when a class is defined. A class exists at compile time and defines structure and behavior.\n\nAn object is an instance of a class with actual values for attributes. Memory is allocated when an object is created. Objects exist at runtime.\n\nExample: Student class defines name, ID, GPA — student1 = new Student("Alice", "S123", 3.8) is an object.'
        },
        {
          id: 'ooad_relationships',
          title: 'Relationships in Object-Oriented Systems',
          content: 'Association — A general relationship where one class uses or knows about another. Example: a Teacher teaches Student.\n\nAggregation — A "has-a" relationship where the part can exist independently of the whole. Example: a Department has Employee objects. If the department is dissolved, employees still exist.\n\nComposition — A strong "has-a" relationship where the part cannot exist without the whole. Example: a House has Room objects. If the house is destroyed, the rooms cease to exist.\n\nInheritance (Generalization) — An "is-a" relationship where a child class inherits from a parent class. Example: a Dog is an Animal.\n\nDependency — A temporary relationship where one class depends on another, usually as a method parameter. Example: a Report class depends on a Printer class to print.'
        }
      ],
      quiz: [
        {
          question: 'What is encapsulation in object-orientation?',
          options: ['Inheriting properties from a parent class', 'Bundling data and methods into a single unit', 'Creating multiple forms of a method', 'Hiding complex details behind a simple interface'],
          correct: 1
        },
        {
          question: 'Inheritance allows a child class to:',
          options: ['Only access public methods of the parent', 'Inherit attributes and methods from a parent class', 'Create multiple instances of itself', 'Define its own namespace'],
          correct: 1
        },
        {
          question: 'What does polymorphism mean?',
          options: ['Many forms', 'One form', 'No form', 'Fixed form'],
          correct: 0
        },
        {
          question: 'Abstraction focuses on:',
          options: ['All details of an object', 'Only the essential characteristics of an object', 'How to write efficient algorithms', 'The user interface design'],
          correct: 1
        },
        {
          question: 'A class is best described as a:',
          options: ['Runtime instance of data', 'Blueprint for creating objects', 'Collection of functions only', 'Database table'],
          correct: 1
        },
        {
          question: 'An object is an:',
          options: ['Instance of a class', 'Definition of a class', 'Template for data', 'Method signature'],
          correct: 0
        },
        {
          question: 'Which relationship describes a general connection between two classes?',
          options: ['Composition', 'Association', 'Implementation', 'Realization'],
          correct: 1
        },
        {
          question: 'Composition is a strong form of:',
          options: ['Inheritance', 'Association', 'Aggregation', 'Dependency'],
          correct: 2
        }
      ]
    },
    {
      id: 'ooad_uml_structural',
      title: 'UML Structural Diagrams',
      lessons: [
        {
          id: 'ooad_structural_intro',
          title: 'What Are Structural Diagrams?',
          content: 'Structural diagrams in UML represent the static structure of a system. They show the elements of the system, their relationships, and their internal structure. Structural diagrams remain constant over time and focus on the architecture of the system.'
        },
        {
          id: 'ooad_class_diagram',
          title: 'Class Diagram',
          content: 'The class diagram is the most commonly used UML diagram. It shows classes, their attributes, operations, and the relationships among classes. It provides a static view of the system\'s building blocks.\n\nIn a class diagram, classes are shown as rectangles divided into three compartments: class name, attributes, and methods. Visibility modifiers include + (public), - (private), and # (protected).'
        },
        {
          id: 'ooad_object_diagram',
          title: 'Object Diagram',
          content: 'An object diagram shows instances of classes (objects) at a specific point in time. It is a snapshot of the system\'s state, useful for testing and understanding complex interactions.\n\nWhile a class diagram shows "Student," an object diagram shows "alice: Student" with specific values like name = "Alice", ID = "S123".'
        },
        {
          id: 'ooad_component_diagram',
          title: 'Component Diagram',
          content: 'A component diagram shows the physical components of a system, their dependencies, and their interactions. Components represent modular parts of the system that encapsulate implementation and expose interfaces through which they communicate.'
        },
        {
          id: 'ooad_deployment_diagram',
          title: 'Deployment Diagram',
          content: 'A deployment diagram shows the physical deployment of artifacts on hardware nodes. It models the topology of the system\'s hardware and the software components running on each node, including communication paths between nodes. It is used for distributed and embedded systems.'
        },
        {
          id: 'ooad_package_diagram',
          title: 'Package Diagram',
          content: 'A package diagram organizes related elements into groups (packages). It shows dependencies between packages and provides a high-level view of the system\'s structure, helping manage large models by grouping related classes, use cases, or components into logical units.'
        },
        {
          id: 'ooad_composite_structure',
          title: 'Composite Structure Diagram',
          content: 'A composite structure diagram shows the internal structure of a class, including its parts and their connections. It is used to model complex classes that contain other components, revealing how the internal parts collaborate to achieve the class\'s behavior.'
        }
      ],
      quiz: [
        {
          question: 'Which UML diagram shows the static structure of a system?',
          options: ['Sequence diagram', 'Activity diagram', 'Class diagram', 'Use case diagram'],
          correct: 2
        },
        {
          question: 'An object diagram shows:',
          options: ['The structure of a single class', 'Instances of classes at a specific point in time', 'The deployment of components on hardware', 'The interaction between objects over time'],
          correct: 1
        },
        {
          question: 'A component diagram shows:',
          options: ['How objects communicate', 'The physical components and their dependencies', 'The behavior of a single object', 'The user interface layout'],
          correct: 1
        },
        {
          question: 'A deployment diagram models:',
          options: ['Database schema', 'The physical topology of hardware and software', 'Algorithm flow', 'User interface navigation'],
          correct: 1
        },
        {
          question: 'A package diagram organizes:',
          options: ['Related classes into groups', 'Hardware components', 'Database tables', 'User interface screens'],
          correct: 0
        },
        {
          question: 'In a class diagram, the symbol "+" means:',
          options: ['Private', 'Protected', 'Public', 'Package'],
          correct: 2
        },
        {
          question: 'In a class diagram, the symbol "-" means:',
          options: ['Public', 'Protected', 'Private', 'Package-private'],
          correct: 2
        },
        {
          question: 'In a class diagram, the symbol "#" means:',
          options: ['Public', 'Private', 'Protected', 'Static'],
          correct: 2
        }
      ]
    },
    {
      id: 'ooad_uml_behavioral',
      title: 'UML Behavioral Diagrams',
      lessons: [
        {
          id: 'ooad_behavioral_intro',
          title: 'What Are Behavioral Diagrams?',
          content: 'Behavioral diagrams in UML represent the dynamic behavior of a system. They show how the system responds to events, how objects interact over time, and the flow of control or data through the system. These diagrams are time-dependent and model the changing aspects of a system.'
        },
        {
          id: 'ooad_use_case_diagram',
          title: 'Use Case Diagram',
          content: 'A use case diagram shows the functionality of a system from the user\'s perspective. It displays actors (external entities) and use cases (system functions) with their relationships. Use case diagrams capture functional requirements and help define system scope.'
        },
        {
          id: 'ooad_sequence_diagram',
          title: 'Sequence Diagram',
          content: 'A sequence diagram shows object interactions arranged in time sequence. It emphasizes the order of messages exchanged between objects, making it clear which interactions occur first. Key elements include lifelines (vertical dashed lines representing object existence), activation bars (when an object is executing), and messages (arrows between lifelines).'
        },
        {
          id: 'ooad_communication_diagram',
          title: 'Communication Diagram',
          content: 'A communication diagram (formerly collaboration diagram) shows interactions between objects with a focus on the structural organization of the objects. Messages are numbered to show sequence. Communication diagrams are better for showing how objects are linked, while sequence diagrams are better for showing the timing of interactions.'
        },
        {
          id: 'ooad_state_machine',
          title: 'State Machine Diagram',
          content: 'A state machine diagram shows the life cycle of an object: the states it can be in, transitions between states, and events that trigger transitions. It is useful for modeling event-driven systems and objects with complex behavior. Example: an Order object with states New, Paid, Shipped, Delivered.'
        },
        {
          id: 'ooad_activity_diagram',
          title: 'Activity Diagram',
          content: 'An activity diagram shows the flow of control from one activity to another. It resembles a flowchart and is used to model business processes, workflows, and the logic of operations. Activity diagrams can show parallel activities, decision points, and concurrency using fork and join nodes.'
        },
        {
          id: 'ooad_timing_diagram',
          title: 'Timing Diagram',
          content: 'A timing diagram shows the behavior of objects over a specific time period, focusing on timing constraints and state changes. It is used for real-time and embedded systems where timing is critical.'
        },
        {
          id: 'ooad_structural_vs_behavioral',
          title: 'Structural vs Behavioral Diagrams',
          content: 'Structural diagrams show the static structure of a system — what elements exist — and are independent of time. Examples: Class, Object, Component, Deployment diagrams.\n\nBehavioral diagrams show the dynamic behavior of a system — how elements interact — and are dependent on time/sequence. Examples: Use Case, Sequence, Activity, State Machine diagrams.\n\nStructural diagrams are relatively stable; behavioral diagrams may change with behavior.'
        }
      ],
      quiz: [
        {
          question: 'Which UML diagram is used to show system functionality from a user\'s perspective?',
          options: ['Class diagram', 'Sequence diagram', 'Use case diagram', 'State machine diagram'],
          correct: 2
        },
        {
          question: 'A sequence diagram emphasizes:',
          options: ['The structural links between objects', 'The time ordering of messages', 'The states of an object', 'The business workflow'],
          correct: 1
        },
        {
          question: 'A communication diagram focuses on:',
          options: ['Time ordering', 'The structural organization of objects', 'State transitions', 'Hardware deployment'],
          correct: 1
        },
        {
          question: 'A state machine diagram models:',
          options: ['Object interactions', 'The life cycle of an object', 'System hardware', 'Package dependencies'],
          correct: 1
        },
        {
          question: 'An activity diagram resembles a:',
          options: ['Class hierarchy', 'Flowchart', 'Network diagram', 'Gantt chart'],
          correct: 1
        },
        {
          question: 'A timing diagram is used for:',
          options: ['Modeling real-time systems', 'Modeling database schemas', 'Modeling class hierarchies', 'Modeling user interfaces'],
          correct: 0
        },
        {
          question: 'Which of the following is NOT a behavioral diagram?',
          options: ['Sequence diagram', 'Activity diagram', 'Class diagram', 'Use case diagram'],
          correct: 2
        },
        {
          question: 'In a sequence diagram, a lifeline represents:',
          options: ['The end of a process', 'The existence of an object over time', 'The destruction of an object', 'A database connection'],
          correct: 1
        }
      ]
    },
    {
      id: 'ooad_methodologies',
      title: 'System Development Methodologies',
      lessons: [
        {
          id: 'ooad_why_methodology',
          title: 'Why a Methodology?',
          content: 'A system development methodology provides a structured, disciplined approach to building information systems. It defines processes, deliverables, roles, and standards that guide the development team through each phase of the project.\n\nConsistency — Ensures all projects follow the same proven patterns and practices.\nQuality — Standardized reviews, testing, and documentation improve quality.\nCommunication — Provides a common language and framework for all stakeholders.\nRisk Management — Identifies and mitigates risks early in the development process.\nPredictability — Better estimates of time, cost, and resources.\nTraceability — Requirements can be traced through design, implementation, and testing.'
        },
        {
          id: 'ooad_agile',
          title: 'Agile Methodology',
          content: 'Agile is an iterative, incremental approach to software development that emphasizes flexibility, collaboration, and customer feedback. The Agile Manifesto (2001) values:\n\n1) Individuals and interactions over processes and tools\n2) Working software over comprehensive documentation\n3) Customer collaboration over contract negotiation\n4) Responding to change over following a plan\n\nPopular Agile frameworks include Scrum, Extreme Programming (XP), and Kanban. Scrum uses timeboxed iterations called sprints, with ceremonies including Sprint Planning, Daily Stand-up, Sprint Review, and Sprint Retrospective.'
        },
        {
          id: 'ooad_agile_ooad',
          title: 'How Agile Supports OOAD',
          content: 'Agile and OOAD complement each other in several ways:\n\nIterative Modeling — Agile iterations allow OOAD models to evolve gradually rather than being fully defined upfront.\n\nUser Stories — Agile user stories align with use case modeling in OOAD.\n\nRefactoring — Agile encourages continuous refactoring of both code and design models.\n\nTest-Driven Development — TDD supports verifying object interactions during design.\n\nCollaboration — Both Agile and OOAD emphasize close collaboration between developers and stakeholders.\n\nIn an Agile-OOAD project, models are created "just in time" and "just enough" to guide implementation, rather than being comprehensive documents created upfront.'
        }
      ],
      quiz: [
        {
          question: 'What is a system development methodology?',
          options: ['A programming language', 'A structured approach to building systems', 'A type of database', 'A testing tool'],
          correct: 1
        },
        {
          question: 'Why is a methodology important?',
          options: ['It guarantees bug-free software', 'It provides consistency, quality, and communication', 'It eliminates the need for testing', 'It replaces the need for developers'],
          correct: 1
        },
        {
          question: 'Agile methodology emphasizes:',
          options: ['Rigid upfront planning', 'Flexibility and iterative development', 'Comprehensive documentation', 'Fixed requirements'],
          correct: 1
        },
        {
          question: 'Which is a principle of the Agile Manifesto?',
          options: ['Comprehensive documentation over working software', 'Following a plan over responding to change', 'Individuals and interactions over processes and tools', 'Contract negotiation over customer collaboration'],
          correct: 2
        },
        {
          question: 'Scrum is an example of:',
          options: ['A programming paradigm', 'A framework within Agile', 'A database system', 'A testing methodology'],
          correct: 1
        },
        {
          question: 'How does Agile support OOAD?',
          options: ['By requiring complete models upfront', 'Through iterative modeling and continuous refactoring', 'By eliminating the need for UML diagrams', 'By focusing only on code'],
          correct: 1
        },
        {
          question: 'In Scrum, a sprint is:',
          options: ['A meeting to review code', 'A timeboxed iteration of development', 'A deployment to production', 'A testing phase'],
          correct: 1
        },
        {
          question: 'A daily stand-up meeting in Scrum is used for:',
          options: ['Long presentations', 'Quick coordination and progress updates', 'Writing code', 'Client negotiations'],
          correct: 1
        }
      ]
    },
    {
      id: 'ooad_requirements',
      title: 'Requirements Elicitation & Use Case Modeling',
      lessons: [
        {
          id: 'ooad_elicitation',
          title: 'Requirements Elicitation Techniques',
          content: 'Requirements elicitation is the process of gathering information from stakeholders to determine what the system must do. Common techniques include:\n\nInterviews — One-on-one conversations with stakeholders to understand their needs and expectations.\n\nQuestionnaires — Written surveys distributed to a large number of stakeholders to collect broad input.\n\nObservation — Watching users perform their work to understand current processes and pain points.\n\nDocument Analysis — Studying existing documents, reports, and systems to extract requirements.\n\nBrainstorming — Group sessions where stakeholders generate ideas in a creative, open environment.\n\nPrototyping — Building a working model of the system to help stakeholders visualize requirements.\n\nJoint Application Development (JAD) — Structured workshops where stakeholders and developers collaborate intensively.\n\nFocus Groups — Small groups of stakeholders discussing specific aspects of the system.'
        },
        {
          id: 'ooad_uc_benefits',
          title: 'Use Case Model Benefits',
          content: 'A use case model captures the functional requirements of a system by describing interactions between actors and the system. Benefits include:\n\nUser-Centric — Focuses on what users need the system to do.\nClear Communication — Provides a simple, intuitive notation understood by all stakeholders.\nComprehensive — Captures all functional requirements in a structured way.\nTraceability — Each use case can be traced through design and testing.\nBasis for Testing — Use cases form the foundation for acceptance testing.\nScope Control — Helps define and manage the boundaries of the system.\nEstimating — Use cases can be used to estimate development effort and complexity.'
        }
      ],
      quiz: [
        {
          question: 'Requirements elicitation is the process of:',
          options: ['Testing the system', 'Gathering requirements from stakeholders', 'Writing source code', 'Deploying the system'],
          correct: 1
        },
        {
          question: 'Which of the following is a requirements elicitation technique?',
          options: ['Compiling code', 'Conducting interviews', 'Running tests', 'Designing the database'],
          correct: 1
        },
        {
          question: 'A use case model primarily captures:',
          options: ['Non-functional requirements', 'Functional requirements', 'Hardware specifications', 'Database schema'],
          correct: 1
        },
        {
          question: 'In requirements modeling, an actor is:',
          options: ['Someone who tests the system', 'An external entity that interacts with the system', 'A class in the system', 'A specific use case'],
          correct: 1
        },
        {
          question: 'Brainstorming is a technique used in:',
          options: ['Requirements elicitation', 'Code compilation', 'Database design', 'Deployment'],
          correct: 0
        },
        {
          question: 'Observation as an elicitation technique involves:',
          options: ['Watching users perform their work', 'Reading code documentation', 'Running automated tests', 'Designing system architecture'],
          correct: 0
        },
        {
          question: 'A use case model includes:',
          options: ['Actors and use cases', 'Classes and objects', 'Nodes and components', 'States and transitions'],
          correct: 0
        },
        {
          question: 'Well-written requirements should be:',
          options: ['Vague and open-ended', 'Clear, testable, and unambiguous', 'Written only by developers', 'Focused only on technical details'],
          correct: 1
        }
      ]
    },
    {
      id: 'ooad_use_case_diagrams',
      title: 'Use Case Diagrams & Written Use Cases',
      lessons: [
        {
          id: 'ooad_uc_elements',
          title: 'Elements of Use Case Diagrams',
          content: 'Actor — An external entity that interacts with the system (a person, another system, or hardware). Represented as a stick figure.\n\nUse Case — A specific function or behavior of the system. Represented as an oval/ellipse containing the name.\n\nSystem Boundary — A rectangle that encloses all use cases, defining the scope of the system.\n\nAssociation — A line connecting an actor to a use case, indicating communication.\n\n<<include>> — A relationship where one use case always includes the behavior of another.\n\n<<extend>> — A relationship where a use case optionally extends the behavior of another.\n\nGeneralization — Shows inheritance between actors or between use cases.'
        },
        {
          id: 'ooad_include_vs_extend',
          title: 'Include vs Extend',
          content: '<<include>> is a mandatory relationship where the included behavior is always executed when the base use case runs. It represents shared behavior that is factored out for reusability. Example: "Login" includes "Validate Credentials."\n\n<<extend>> is an optional relationship where the extending use case adds behavior under certain conditions. Example: "Place Order" may extend "Apply Discount" when eligible.\n\nInclude is directed from the base use case to the included one. Extend is directed from the extending use case to the base one.'
        },
        {
          id: 'ooad_written_uc',
          title: 'Written Use Case Format',
          content: 'A written use case describes the step-by-step interaction between an actor and the system. A typical template includes:\n\nUse Case Name — A unique, verb-noun phrase\nActor(s) — Who initiates and participates\nPrecondition — What must be true before the use case starts\nPostcondition — What must be true after the use case completes\nMain Flow — The normal sequence of steps\nAlternative Flows — Variations or error conditions\nExceptions — Error handling steps'
        },
        {
          id: 'ooad_maua_gallery',
          title: 'Case Study: Maua Art Gallery',
          content: 'The Maua Art Gallery requires a system to manage its art collection, exhibitions, and sales. The system must support:\n\n- Register new artworks (paintings, sculptures, photographs) with details (title, artist, medium, price)\n- Schedule and manage exhibitions\n- Process sales and rentals of artworks\n- Manage customer information and preferences\n- Generate reports on sales, inventory, and exhibition performance\n\nActors: Gallery Manager, Sales Clerk, Customer, Exhibition Curator, System Administrator'
        }
      ],
      quiz: [
        {
          question: 'The <<include>> relationship in use case diagrams means:',
          options: ['The included behavior is optional', 'The included behavior is always executed', 'The use case is incomplete', 'The actor is optional'],
          correct: 1
        },
        {
          question: 'The <<extend>> relationship in use case diagrams means:',
          options: ['Optional behavior added under certain conditions', 'Mandatory behavior always executed', 'The base use case cannot exist without extension', 'The actor must be logged in'],
          correct: 0
        },
        {
          question: 'In a use case diagram, the system boundary is drawn as a:',
          options: ['Circle', 'Rectangle', 'Triangle', 'Diamond'],
          correct: 1
        },
        {
          question: 'In a use case diagram, an actor is represented as a:',
          options: ['Rectangle', 'Oval', 'Stick figure', 'Diamond'],
          correct: 2
        },
        {
          question: 'In a use case diagram, a use case is drawn as an:',
          options: ['Rectangle', 'Oval/ellipse', 'Arrow', 'Triangle'],
          correct: 1
        },
        {
          question: 'A precondition in a use case defines:',
          options: ['What happens after the use case', 'What must be true before the use case starts', 'The main actor', 'The system boundary'],
          correct: 1
        },
        {
          question: 'A postcondition in a use case defines:',
          options: ['What must be true after the use case completes', 'The hardware requirements', 'The database connection', 'The user interface design'],
          correct: 0
        },
        {
          question: 'An alternative flow in a written use case represents:',
          options: ['The main success scenario', 'A variant of the main flow', 'The system architecture', 'The database design'],
          correct: 1
        }
      ]
    },
    {
      id: 'ooad_class_diagrams',
      title: 'Class Diagrams — Three Views',
      lessons: [
        {
          id: 'ooad_three_views',
          title: 'The Three Views of Class Diagrams',
          content: 'In OOAD, class diagrams can be created at three different levels of abstraction, each serving a distinct purpose: Conceptual View, Specification View, and Implementation View.'
        },
        {
          id: 'ooad_conceptual_view',
          title: 'Conceptual View',
          content: 'The conceptual view focuses on the real-world domain concepts and their relationships. It contains no software-specific details and is used to communicate with domain experts and stakeholders.\n\n- Classes represent real-world concepts (e.g., Patient, Ambulance, Hospital)\n- Attributes are simple (e.g., patient name, ambulance ID)\n- No method signatures or visibility modifiers\n- Focus on understanding the problem domain'
        },
        {
          id: 'ooad_specification_view',
          title: 'Specification View',
          content: 'The specification view focuses on the interfaces of software classes. It defines what the classes do without specifying how they do it. This view is useful for designing contracts between components.\n\n- Classes have interfaces (methods) defined\n- Attributes still high-level\n- Focus on what the class provides\n- Suitable for designing system architecture'
        },
        {
          id: 'ooad_implementation_view',
          title: 'Implementation View',
          content: 'The implementation view is the most detailed view, showing the actual code-level structure of classes. It includes all method implementations, visibility, types, and platform-specific details.\n\n- Full method signatures with return types\n- Visibility modifiers (+, -, #)\n- Data types for all attributes\n- Constructors and destructors\n- Platform-specific details'
        },
        {
          id: 'ooad_ambulance_example',
          title: 'Example: Ambulance Booking System',
          content: 'The following hierarchy models an ambulance booking system across the three views:\n\nConceptual View classes: Patient (name, contact, condition), Ambulance (vehicleID, status, location), Booking (bookingID, time, pickupLocation, destination), Dispatcher (name, employeeID).\n\nRelationships: Patient requests Booking, Booking assigns Ambulance, Dispatcher manages Booking.\n\nImplementation View (Java-like):\npublic class Booking {\n    private String bookingID;\n    private Date bookingTime;\n    private String pickupLocation;\n    private String destination;\n    private Patient patient;\n    private Ambulance ambulance;\n\n    public boolean assignAmbulance(Ambulance amb) { ... }\n    public void cancelBooking() { ... }\n    public String getStatus() { ... }\n}'
        }
      ],
      quiz: [
        {
          question: 'Which view of class diagrams focuses on real-world domain concepts?',
          options: ['Implementation view', 'Specification view', 'Conceptual view', 'Deployment view'],
          correct: 2
        },
        {
          question: 'Which view of class diagrams focuses on interfaces?',
          options: ['Conceptual view', 'Specification view', 'Implementation view', 'Process view'],
          correct: 1
        },
        {
          question: 'Which view of class diagrams includes visibility modifiers and data types?',
          options: ['Conceptual view', 'Specification view', 'Implementation view', 'Logical view'],
          correct: 2
        },
        {
          question: 'A conceptual class represents:',
          options: ['A database table', 'A real-world concept', 'A user interface element', 'A network protocol'],
          correct: 1
        },
        {
          question: 'Multiplicity in a class diagram indicates:',
          options: ['The number of attributes', 'The number of instances in a relationship', 'The number of methods', 'The number of packages'],
          correct: 1
        },
        {
          question: 'Navigability in a class diagram shows:',
          options: ['The direction of association', 'The speed of data flow', 'The depth of inheritance', 'The size of objects'],
          correct: 0
        },
        {
          question: 'Generalization in a class diagram represents:',
          options: ['Association', 'Inheritance', 'Aggregation', 'Dependency'],
          correct: 1
        }
      ]
    },
    {
      id: 'ooad_interaction',
      title: 'Interaction Diagrams',
      lessons: [
        {
          id: 'ooad_sequence_diagrams',
          title: 'Sequence Diagrams',
          content: 'A sequence diagram is a type of interaction diagram that shows how objects communicate with each other over time. It emphasizes the chronological order of messages exchanged between objects.\n\nKey elements include:\n\nLifeline — A vertical dashed line representing the existence of an object over time.\n\nActivation Bar — A thin rectangle on a lifeline showing when an object is executing.\n\nMessage — An arrow from one lifeline to another representing communication.\n\nSelf-Message — A message an object sends to itself.\n\nCombined Fragment — A rectangle enclosing interaction parts with a guard condition. Types: alt (alternatives), opt (optional), loop (iteration), par (parallel).'
        },
        {
          id: 'ooad_robot_example',
          title: 'Example: Robot Stacking Blocks',
          content: 'In the Robot Stacking Blocks sequence diagram, the interaction flows as follows:\n\n1) Robot sends moveTo(pos) to Arm\n2) Arm sends extend() to Gripper\n3) Gripper sends grab(block) to Block\n4) Block confirms grabbed to Gripper\n5) Gripper confirms extended to Arm\n6) Arm confirms moved to Robot\n7) Robot sends liftArm() to Arm\n8) Arm sends retract() to Gripper\n9) Gripper sends release() to Block\n10) Block confirms released to Gripper\n11) Gripper confirms retracted to Arm\n12) Arm confirms lifted to Robot'
        },
        {
          id: 'ooad_communication_diagrams',
          title: 'Communication Diagrams',
          content: 'A communication diagram (formerly collaboration diagram) shows the same interactions as a sequence diagram but emphasizes the structural organization of objects. Messages are numbered to indicate sequence.\n\nCommunication diagrams are better for showing how objects are linked, while sequence diagrams are better for showing the timing of interactions. Communication diagrams use a graph-like layout with numbered messages (1, 1.1, 2, etc.) to indicate sequence, making them more compact.'
        },
        {
          id: 'ooad_sequence_vs_comm',
          title: 'Sequence vs Communication Diagrams',
          content: 'Sequence Diagram — Focuses on time ordering of messages. Uses vertical lifelines with horizontal messages. Shows sequence by vertical position. Better for complex scenarios. Requires more horizontal space.\n\nCommunication Diagram — Focuses on structural links between objects. Uses graph-like layout with numbered messages. Shows sequence by message numbers (1, 1.1, 2). Better for simple scenarios. More compact layout. Links explicitly shown.'
        }
      ],
      quiz: [
        {
          question: 'A sequence diagram emphasizes which aspect of object interactions?',
          options: ['Structural links', 'Time ordering', 'State changes', 'Hardware topology'],
          correct: 1
        },
        {
          question: 'A communication diagram emphasizes:',
          options: ['Time ordering', 'The structural organization of objects', 'State transitions', 'The sequence of events'],
          correct: 1
        },
        {
          question: 'In a sequence diagram, a message is shown as:',
          options: ['A dashed line', 'An arrow between lifelines', 'A rectangle', 'A circle'],
          correct: 1
        },
        {
          question: 'An activation bar in a sequence diagram shows:',
          options: ['The destruction of an object', 'When an object is executing', 'The creation of an object', 'The end of a lifeline'],
          correct: 1
        },
        {
          question: 'A self-message in a sequence diagram is sent from:',
          options: ['One object to another', 'An object to itself', 'The system to an actor', 'An actor to the system'],
          correct: 1
        },
        {
          question: 'A combined fragment in a sequence diagram is used for:',
          options: ['Defining class attributes', 'Conditional or loop behavior', 'Hardware deployment', 'Package organization'],
          correct: 1
        },
        {
          question: 'An "alt" combined fragment represents:',
          options: ['Alternative behaviors (if-else)', 'Loops', 'Optional behavior', 'Parallel execution'],
          correct: 0
        },
        {
          question: 'A "loop" combined fragment represents:',
          options: ['Alternative behavior', 'Repeated behavior', 'Optional behavior', 'Parallel behavior'],
          correct: 1
        }
      ]
    },
    {
      id: 'ooad_design_patterns',
      title: 'Design Patterns & Case Studies',
      lessons: [
        {
          id: 'ooad_pattern_categories',
          title: 'Three Categories of Design Patterns',
          content: 'Design patterns are reusable solutions to common software design problems. They are categorized into three groups:\n\nCreational Patterns — Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.\n\nStructural Patterns — Deal with object composition, defining how classes and objects can be combined to form larger structures.\n\nBehavioral Patterns — Deal with object interactions and responsibility distribution.'
        },
        {
          id: 'ooad_creational',
          title: 'Creational Patterns',
          content: 'Singleton — Ensures a class has only one instance and provides a global point of access.\n\nFactory Method — Defines an interface for creating an object but lets subclasses decide which class to instantiate.\n\nAbstract Factory — Provides an interface for creating families of related objects without specifying their concrete classes.\n\nBuilder — Separates the construction of a complex object from its representation.\n\nPrototype — Creates new objects by copying an existing object (prototype).'
        },
        {
          id: 'ooad_structural',
          title: 'Structural Patterns',
          content: 'Adapter — Allows incompatible interfaces to work together.\n\nDecorator — Adds responsibilities to objects dynamically.\n\nFacade — Provides a simplified interface to a complex subsystem.\n\nComposite — Composes objects into tree structures to represent part-whole hierarchies.\n\nProxy — Provides a surrogate or placeholder for another object.'
        },
        {
          id: 'ooad_behavioral',
          title: 'Behavioral Patterns',
          content: 'Observer — Defines a one-to-many dependency so that when one object changes state, dependents are notified.\n\nStrategy — Defines a family of algorithms, encapsulates each one, and makes them interchangeable.\n\nTemplate Method — Defines the skeleton of an algorithm, letting subclasses redefine certain steps.\n\nCommand — Encapsulates a request as an object, allowing parameterization and queuing.\n\nState — Allows an object to alter its behavior when its internal state changes.'
        },
        {
          id: 'ooad_template_method',
          title: 'Template Method Pattern',
          content: 'The Template Method pattern defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. It lets subclasses redefine certain steps without changing the algorithm\'s structure.\n\nExample: DataProcessor.process() defines the algorithm as: readData(), processData(), writeOutput(). Subclasses like CSVProcessor and JSONProcessor implement the steps differently while the algorithm structure remains unchanged.'
        },
        {
          id: 'ooad_maua_domain',
          title: 'Case Study: Maua Art Gallery Domain Model',
          content: 'Applying OOAD concepts to the Maua Art Gallery system:\n\nIdentified Classes: Artwork, Painting, Sculpture, Photograph, Exhibition, Customer, Sale, Rental, Invoice, Artist, GalleryManager, SalesClerk\n\nRelationships: Exhibition contains Artwork (composition), Customer purchases Artwork (association), Artist creates Artwork (aggregation)\n\nPatterns: Factory Method for creating different artwork types, Observer for notifying customers about new exhibitions, Strategy for different pricing models (sale vs rental)\n\nUse Cases: RegisterArtwork, ScheduleExhibition, ProcessSale, ProcessRental, GenerateReport, ManageCustomer\n\nThe Maua Art Gallery case study demonstrates how all the OOAD concepts from Lessons 1-10 come together in a real-world system.'
        }
      ],
      quiz: [
        {
          question: 'A design pattern is best described as:',
          options: ['A programming language', 'A reusable solution to a common design problem', 'A type of database', 'A testing framework'],
          correct: 1
        },
        {
          question: 'Creational patterns deal with:',
          options: ['Object creation mechanisms', 'Object composition', 'Object interactions', 'Object destruction'],
          correct: 0
        },
        {
          question: 'Structural patterns deal with:',
          options: ['Object creation', 'Object composition and structure', 'Object behavior', 'Algorithm design'],
          correct: 1
        },
        {
          question: 'Behavioral patterns deal with:',
          options: ['Object creation', 'Object composition', 'Object interactions and responsibility distribution', 'Class hierarchy design'],
          correct: 2
        },
        {
          question: 'Singleton is classified as a:',
          options: ['Creational pattern', 'Structural pattern', 'Behavioral pattern', 'Architectural pattern'],
          correct: 0
        },
        {
          question: 'Observer is classified as a:',
          options: ['Creational pattern', 'Structural pattern', 'Behavioral pattern', 'Concurrency pattern'],
          correct: 2
        },
        {
          question: 'Adapter is classified as a:',
          options: ['Creational pattern', 'Structural pattern', 'Behavioral pattern', 'Performance pattern'],
          correct: 1
        },
        {
          question: 'Strategy pattern allows:',
          options: ['A class to have only one instance', 'Interchangeable algorithms at runtime', 'Creating complex objects step by step', 'Adding responsibilities to objects dynamically'],
          correct: 1
        }
      ]
    }
  ]
};
