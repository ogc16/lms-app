export const databaseCourse = {
  id: 'database',
  title: 'Database Management Systems',
  subtitle: 'ICS 2206 \u2014 Database Management Systems',
  icon: '\uD83D\uDCC4',
  color: '#3498db',
  bgColor: '#EBF5FB',
  description: 'Comprehensive study of database management systems covering DBMS concepts, relational models, SQL, normalization, and implementation.',
  chapters: [
    {
      id: 'db_intro',
      title: 'Introduction to DBMS',
      lessons: [
        {
          id: 'db_intro_main',
          title: 'Database Systems Overview',
          content: 'A database is a collection of related, logically coherent data, while a DBMS (Database Management System) is software that manages, stores, retrieves, and manipulates data in databases. The database is the actual data stored, while the DBMS provides an interface between data and users. Examples of DBMS include MySQL, Oracle, PostgreSQL, and MS Access.\n\nHistory & Motivation:\n\u2022 1960s: File-based systems \u2014 data redundancy, inconsistency, isolation\n\u2022 1970s: Hierarchical and network DBMS (IMS, CODASYL)\n\u2022 1970 (Codd): Relational model proposed \u2014 tables, SQL\n\u2022 1980s: Relational DBMS dominate (DB2, Oracle, dBase)\n\u2022 1990s: Object-oriented, client-server, web databases\n\u2022 2000s+: NoSQL, Big Data, cloud databases\n\nMotivation for DBMS: Eliminate redundancy, avoid inconsistency, enable concurrent access, enforce standards, provide security, and maintain integrity.\n\nComponents of Database Systems:\n1. Hardware: storage devices, servers, network\n2. Software: DBMS, operating system, application programs\n3. Data: the actual stored information\n4. Procedures: rules and instructions for using the DBMS\n5. People: end users, DBAs, application developers, system analysts\n\nDBMS Functions:\n\u2022 Data storage, retrieval, and update\n\u2022 Data dictionary / catalog management\n\u2022 Transaction management & concurrency control\n\u2022 Security & authorization\n\u2022 Backup and recovery\n\u2022 Data integrity enforcement\n\nThree-Level Architecture (ANSI/SPARC):\n\u2022 External level: user views (subschemas)\n\u2022 Conceptual level: community view (full logical structure)\n\u2022 Internal level: physical storage details'
        }
      ],
      quiz: [
        { question: 'Which of the following is an example of a DBMS?', options: ['Excel', 'MySQL', 'Notepad', 'Windows'], correct: 1 },
        { question: 'What is the main motivation for using a DBMS over file systems?', options: ['Lower cost', 'Eliminate data redundancy', 'Faster CPU', 'Smaller files'], correct: 1 },
        { question: 'Which level of the ANSI/SPARC architecture deals with user views?', options: ['Internal', 'Conceptual', 'External', 'Physical'], correct: 2 },
        { question: 'A _____ is a collection of related data, while a _____ manages it.', options: ['DBMS, database', 'database, DBMS', 'file, record', 'schema, table'], correct: 1 },
        { question: 'Which component is NOT a part of a database system?', options: ['Hardware', 'Software', 'Compiler', 'Procedures'], correct: 2 }
      ]
    },
    {
      id: 'db_models',
      title: 'DB Models & DBLC',
      lessons: [
        {
          id: 'db_models_main',
          title: 'Database Models and Life Cycle',
          content: 'Logical vs Physical Data Models:\n\u2022 Logical Model: Describes data as users see it (entities, attributes, relationships), independent of DBMS. Example: ER diagram, relational schema.\n\u2022 Physical Model: Describes how data is stored on hardware (files, indexes, partitions), DBMS-specific. Example: B+ tree indexes, hash files, storage blocks.\n\nDatabase Models Comparison:\n\u2022 Hierarchical: Tree structure (parent-child), one-to-many relationships. Example: IMS (IBM)\n\u2022 Network: Graph structure (sets), many-to-many via pointers. Example: CODASYL, IDMS\n\u2022 Relational: Tables (relations), keys, SQL. Example: MySQL, Oracle, PostgreSQL\n\u2022 Object-based: Objects, classes, inheritance. Example: ObjectStore, MongoDB (document)\n\nDatabase Life Cycle (DBLC):\n1. Database initial study: analyze situation, define problems and constraints\n2. Database design: conceptual, logical, and physical design\n3. Implementation and loading: create schema, load data\n4. Testing and evaluation: verify functionality and performance\n5. Operation: daily use, transactions, queries\n6. Maintenance and evolution: changes, tuning, backup'
        }
      ],
      quiz: [
        { question: 'Which data model organizes data in a tree structure?', options: ['Relational', 'Hierarchical', 'Network', 'Object-based'], correct: 1 },
        { question: 'The DBLC phase where the schema is created and data is loaded is called:', options: ['Design', 'Implementation', 'Maintenance', 'Study'], correct: 1 },
        { question: 'Which model uses tables and SQL?', options: ['Hierarchical', 'Network', 'Relational', 'Object'], correct: 2 },
        { question: 'A logical data model is _____ of the DBMS.', options: ['dependent', 'independent', 'part', 'the same'], correct: 1 },
        { question: 'Which database model uses sets and pointers to represent relationships?', options: ['Relational', 'Network', 'Hierarchical', 'Object'], correct: 1 }
      ]
    },
    {
      id: 'db_relational',
      title: 'Relational Database System',
      lessons: [
        {
          id: 'db_relational_main',
          title: 'Relational Model and Operators',
          content: 'Relational Algebra Operators:\n\u2022 SELECT (\u03c3): choose rows (horizontal subset)\n\u2022 PROJECT (\u03c0): choose columns (vertical subset)\n\u2022 UNION (\u222a): combine rows from two relations\n\u2022 INTERSECT (\u2229): rows common to two relations\n\u2022 DIFFERENCE (-): rows in one but not the other\n\u2022 JOIN (\u2a1d): combine related rows from two tables\n\u2022 DIVIDE (\u00f7): rows matching all values in a set\n\u2022 PRODUCT (\u00d7): Cartesian product\n\nFeatures of Relational Database Systems:\n\u2022 Data stored in relations (tables) with rows and columns\n\u2022 Each row is uniquely identified by a primary key\n\u2022 Foreign keys establish relationships between tables\n\u2022 Support for integrity constraints (entity, referential, domain)\n\u2022 SQL as standard query language\n\u2022 ACID transactions (Atomicity, Consistency, Isolation, Durability)\n\u2022 Data independence (logical and physical)\n\u2022 Views for security and customization'
        }
      ],
      quiz: [
        { question: 'Which relational operator selects rows?', options: ['PROJECT', 'SELECT', 'JOIN', 'UNION'], correct: 1 },
        { question: 'Which operator combines rows from two tables based on a condition?', options: ['UNION', 'PRODUCT', 'JOIN', 'DIFFERENCE'], correct: 2 },
        { question: 'A _____ key uniquely identifies each row in a table.', options: ['foreign', 'primary', 'candidate', 'composite'], correct: 1 },
        { question: 'Which of the following ensures a transaction is all-or-nothing?', options: ['Consistency', 'Atomicity', 'Isolation', 'Durability'], correct: 1 },
        { question: 'What does the PROJECT operator do?', options: ['Selects rows', 'Selects columns', 'Joins tables', 'Sorts data'], correct: 1 }
      ]
    },
    {
      id: 'db_conceptual',
      title: 'Conceptual Data Model',
      lessons: [
        {
          id: 'db_conceptual_main',
          title: 'ER Modeling and Database Design',
          content: 'Three Levels of Database Design:\n\u2022 Conceptual: High-level business view, entities, relationships (ER diagram), DBMS-independent\n\u2022 Logical: Relational schema, tables, keys, normalization applied, DBMS-independent but relational\n\u2022 Physical: Storage details, indexes, partitions, DBMS-specific implementation\n\nER Model Components:\n\u2022 Entity: real-world object (rectangle) \u2014 e.g., Student, Course\n\u2022 Attribute: property of an entity (ellipse) \u2014 e.g., student_id, name\n\u2022 Relationship: association between entities (diamond) \u2014 e.g., Enrolls\n\u2022 Cardinality: 1:1, 1:M, M:N\n\u2022 Key attribute: uniquely identifies an entity (underline)\n\u2022 Weak entity: depends on another entity (double rectangle)\n\nMapping ER to Relational Schema:\n1. Each entity becomes a table with its attributes as columns\n2. Primary key of entity becomes primary key of table\n3. 1:1 relationship becomes foreign key in either table\n4. 1:M relationship becomes foreign key in the "many" side\n5. M:N relationship becomes a new intersection/associative table with composite key\n6. Weak entity becomes a table with foreign key to parent (partial key + parent PK)'
        }
      ],
      quiz: [
        { question: 'Which design level is DBMS-independent and uses ER diagrams?', options: ['Physical', 'Logical', 'Conceptual', 'Internal'], correct: 2 },
        { question: 'In an ER diagram, a relationship is represented by a:', options: ['Rectangle', 'Ellipse', 'Diamond', 'Line'], correct: 2 },
        { question: 'An M:N relationship maps to:', options: ['A foreign key', 'A new table', 'A composite attribute', 'A view'], correct: 1 },
        { question: 'A weak entity is drawn with a:', options: ['Single rectangle', 'Double rectangle', 'Dashed ellipse', 'Double diamond'], correct: 1 },
        { question: 'What is cardinality in an ER model?', options: ['Number of attributes', 'Number of entities in a relationship', 'Key length', 'Table size'], correct: 1 }
      ]
    },
    {
      id: 'db_normalization',
      title: 'Normalization',
      lessons: [
        {
          id: 'db_normalization_main',
          title: 'Normal Forms and Functional Dependencies',
          content: 'Normal Forms Overview:\n\u2022 1NF: Each cell has a single value (atomic); each column has unique name; rows are unique. Removes multivalued attributes and repeating groups.\n\u2022 2NF: In 1NF AND every non-key attribute is fully functionally dependent on the entire primary key. Removes partial dependencies.\n\u2022 3NF: In 2NF AND no transitive dependencies (non-key attribute depends on another non-key attribute). Removes transitive dependencies.\n\nExample Normalization Steps:\nUnnormalized: Student(stud_id, name, courses)\n1NF: Student(stud_id, name, course_code, course_name) \u2014 split courses into separate rows\n2NF: Student(stud_id, name) | Enrollment(stud_id, course_code, course_name) \u2014 remove partial dependency on course\n3NF: Student(stud_id, name) | Course(course_code, course_name) | Enrollment(stud_id, course_code) \u2014 remove transitive dependency of course_name on course_code\n\nKey Definitions:\n\u2022 Partial dependency: non-key attribute depends on part of composite key\n\u2022 Transitive dependency: non-key attribute depends on another non-key attribute\n\u2022 Functional dependency (FD): X \u2192 Y means X determines Y'
        }
      ],
      quiz: [
        { question: 'A table is in 1NF if:', options: ['All keys are single', 'All attributes are atomic', 'No transitive dependencies', 'Every attribute depends on the key'], correct: 1 },
        { question: '2NF removes:', options: ['Transitive dependencies', 'Partial dependencies', 'Repeating groups', 'All of the above'], correct: 1 },
        { question: '3NF requires that no _____ dependency exists.', options: ['partial', 'transitive', 'functional', 'repeating'], correct: 1 },
        { question: 'In Student(stud_id, course_code, course_name), course_name depends on course_code. This is a:', options: ['Partial dependency', 'Transitive dependency', 'Functional dependency', 'Multivalued attribute'], correct: 1 },
        { question: 'Which normal form eliminates repeating groups?', options: ['1NF', '2NF', '3NF', 'BCNF'], correct: 0 }
      ]
    },
    {
      id: 'db_sql',
      title: 'SQL',
      lessons: [
        {
          id: 'db_sql_main',
          title: 'Structured Query Language',
          content: 'Major Components of SQL:\n\u2022 DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE \u2014 define/modify database structure\n\u2022 DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE \u2014 manipulate data\n\u2022 DCL (Data Control Language): GRANT, REVOKE \u2014 control access and permissions\n\u2022 TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT \u2014 manage transactions',
          codeExamples: [
            {
              title: 'SQL Examples',
              code: '-- Create database\nCREATE DATABASE university;\n\n-- Create table\nCREATE TABLE Student (\n  stud_id INT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(100) UNIQUE,\n  dob DATE\n);\n\n-- Insert data\nINSERT INTO Student VALUES (1, \'Alice\', \'alice@u.edu\', \'2000-05-10\');\n\n-- Query\nSELECT name, email FROM Student WHERE stud_id = 1;\n\n-- Join\nSELECT s.name, c.course_name\nFROM Student s\nJOIN Enrollment e ON s.stud_id = e.stud_id\nJOIN Course c ON e.course_code = c.course_code;\n\n-- Update & Delete\nUPDATE Student SET email = \'alice@new.edu\' WHERE stud_id = 1;\nDELETE FROM Student WHERE stud_id = 1;\n\n-- Aggregate\nSELECT course_code, COUNT(*) AS students FROM Enrollment GROUP BY course_code;'
            }
          ]
        }
      ],
      quiz: [
        { question: 'Which SQL category does CREATE belong to?', options: ['DML', 'DDL', 'DCL', 'TCL'], correct: 1 },
        { question: 'Which SQL command is used to retrieve data?', options: ['GET', 'FETCH', 'SELECT', 'RETRIEVE'], correct: 2 },
        { question: 'GRANT and REVOKE belong to:', options: ['DDL', 'DML', 'DCL', 'TCL'], correct: 2 },
        { question: 'Which clause is used to group rows in SQL?', options: ['ORDER BY', 'GROUP BY', 'HAVING', 'WHERE'], correct: 1 },
        { question: 'Which SQL statement removes a table from the database?', options: ['DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'CLEAR TABLE'], correct: 1 }
      ]
    },
    {
      id: 'db_msaccess',
      title: 'MS Access Implementation',
      lessons: [
        {
          id: 'db_msaccess_main',
          title: 'Database Implementation in MS Access',
          content: 'Creating a Database in MS Access:\n1. Open MS Access \u2192 "Blank Database" \u2192 name it and click Create\n2. Use Table Design view to define fields, data types, and properties\n3. Set primary key by selecting field(s) and clicking the key icon\n4. Set field properties: Field Size, Format, Input Mask, Validation Rule, Default Value, Required, Indexed\n5. Set relationships: Database Tools \u2192 Relationships \u2192 drag fields between tables\n6. Enforce referential integrity, cascade update/delete\n\nQueries, Forms, Reports:\n\u2022 Queries: Create \u2192 Query Design \u2192 add tables, select fields, set criteria. Use SQL View for raw SQL.\n\u2022 Forms: Create \u2192 Form Wizard \u2192 select table/query \u2192 layout \u2192 finish. Used for data entry.\n\u2022 Reports: Create \u2192 Report Wizard \u2192 select fields, grouping, sorting \u2192 finish. Used for printing/summary.'
        }
      ],
      quiz: [
        { question: 'To enforce referential integrity in MS Access, you use:', options: ['Queries', 'Relationships', 'Forms', 'Reports'], correct: 1 },
        { question: 'Which view is best for defining field properties in MS Access?', options: ['Datasheet View', 'Design View', 'Layout View', 'SQL View'], correct: 1 },
        { question: 'Forms in MS Access are primarily used for:', options: ['Reporting data', 'Data entry', 'Querying', 'Storing data'], correct: 1 },
        { question: 'Which of these is NOT a field property in MS Access?', options: ['Field Size', 'Validation Rule', 'Indexed', 'Auto Fit'], correct: 3 },
        { question: 'What tool in MS Access is used to create a printable summary of data?', options: ['Form', 'Report', 'Query', 'Table'], correct: 1 }
      ]
    },
    {
      id: 'db_forms_reports',
      title: 'Forms & Reports',
      lessons: [
        {
          id: 'db_forms_reports_main',
          title: 'Designing Forms and Reports',
          content: 'Designing Forms for Data Entry:\n\u2022 Forms provide a user-friendly interface for entering, editing, and viewing data\n\u2022 Form Wizard: quick creation based on table/query\n\u2022 Design View: full control over layout, labels, text boxes, combo boxes, buttons\n\u2022 Common controls: Text Box, Combo Box (dropdown), List Box, Check Box, Button, Subform\n\u2022 Properties: set data source, default values, validation, format, visibility\n\u2022 Add navigation buttons to move between records\n\nDesigning Reports:\n\u2022 Reports present data in a printed/printable format\n\u2022 Report Wizard: step-by-step to select fields, grouping, sorting, layout\n\u2022 Design View: add headers/footers, grouping levels, calculated fields\n\u2022 Sections: Report Header, Page Header, Group Header, Detail, Group Footer, Page Footer, Report Footer\n\u2022 Use expressions for calculated totals: =Sum([field_name])\n\u2022 Sort and group data to create summary/subtotal sections'
        }
      ],
      quiz: [
        { question: 'Which form control provides a dropdown list?', options: ['Text Box', 'Combo Box', 'Check Box', 'Button'], correct: 1 },
        { question: 'In a report, which section repeats for every record?', options: ['Page Header', 'Detail', 'Report Footer', 'Group Header'], correct: 1 },
        { question: 'Which expression calculates the total of a field in a report?', options: ['=Sum([field])', '=Total([field])', '=Count([field])', '=Avg([field])'], correct: 0 },
        { question: 'Which report section appears at the top of every page?', options: ['Detail', 'Page Header', 'Report Header', 'Group Footer'], correct: 1 },
        { question: 'What is the purpose of a form in MS Access?', options: ['Store data', 'Enter and edit data', 'Print summaries', 'Create relationships'], correct: 1 }
      ]
    },
    {
      id: 'db_mysql',
      title: 'Creating DB with MySQL',
      lessons: [
        {
          id: 'db_mysql_main',
          title: 'MySQL Database Implementation',
          content: 'MySQL is a popular open-source relational DBMS. Below are essential commands for creating and managing a database.\n\nKey MySQL Data Types:\n\u2022 INT, BIGINT \u2014 integers\n\u2022 DECIMAL(p,s) \u2014 exact numeric\n\u2022 VARCHAR(n) \u2014 variable-length string\n\u2022 CHAR(n) \u2014 fixed-length string\n\u2022 DATE, DATETIME, TIMESTAMP \u2014 date and time\n\u2022 TEXT, BLOB \u2014 large text / binary\n\u2022 BOOLEAN \u2014 true/false (actually TINYINT)',
          codeExamples: [
            {
              title: 'MySQL Database Setup',
              code: '-- Connect to MySQL\nmysql -u root -p\n\n-- Create database\nCREATE DATABASE IF NOT EXISTS university;\nUSE university;\n\n-- Create tables\nCREATE TABLE Student (\n  stud_id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(100) UNIQUE NOT NULL,\n  dob DATE,\n  enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE Course (\n  course_code VARCHAR(10) PRIMARY KEY,\n  course_name VARCHAR(100) NOT NULL,\n  credits INT CHECK (credits > 0)\n);\n\nCREATE TABLE Enrollment (\n  stud_id INT,\n  course_code VARCHAR(10),\n  grade CHAR(2),\n  PRIMARY KEY (stud_id, course_code),\n  FOREIGN KEY (stud_id) REFERENCES Student(stud_id)\n    ON DELETE CASCADE,\n  FOREIGN KEY (course_code) REFERENCES Course(course_code)\n    ON DELETE CASCADE\n);\n\n-- Insert sample data\nINSERT INTO Student (name, email, dob) VALUES\n  (\'Alice\', \'alice@example.com\', \'2000-05-10\'),\n  (\'Bob\', \'bob@example.com\', \'2001-08-22\');\n\nINSERT INTO Course VALUES\n  (\'ICS2206\', \'Database Management Systems\', 3);\n\nINSERT INTO Enrollment VALUES\n  (1, \'ICS2206\', \'A\'),\n  (2, \'ICS2206\', \'B+\');\n\n-- Useful queries\nSHOW DATABASES;\nSHOW TABLES;\nDESCRIBE Student;\n\n-- Indexes for performance\nCREATE INDEX idx_student_name ON Student(name);\n\n-- Views\nCREATE VIEW StudentGrades AS\nSELECT s.name, c.course_name, e.grade\nFROM Student s\nJOIN Enrollment e ON s.stud_id = e.stud_id\nJOIN Course c ON e.course_code = c.course_code;'
            }
          ]
        }
      ],
      quiz: [
        { question: 'Which MySQL command shows all tables in the current database?', options: ['LIST TABLES', 'SHOW TABLES', 'DISPLAY TABLES', 'GET TABLES'], correct: 1 },
        { question: 'What does AUTO_INCREMENT do in MySQL?', options: ['Creates an index', 'Automatically increments a unique number', 'Updates timestamps', 'Checks constraints'], correct: 1 },
        { question: 'Which keyword is used to remove duplicate rows in a SELECT?', options: ['UNIQUE', 'DISTINCT', 'DIFFERENT', 'ONLY'], correct: 1 },
        { question: 'Which MySQL data type stores variable-length strings?', options: ['CHAR', 'VARCHAR', 'TEXT', 'STRING'], correct: 1 },
        { question: 'What does the ON DELETE CASCADE clause do?', options: ['Deletes the table', 'Deletes related rows automatically', 'Prevents deletion', 'Archives deleted data'], correct: 1 }
      ]
    },
    {
      id: 'db_db2',
      title: 'Using DB2 DBMS',
      lessons: [
        {
          id: 'db_db2_main',
          title: 'IBM DB2 Database Management',
          content: 'DB2 is IBM\'s relational DBMS supporting SQL standards with enterprise features.\n\nDB2 Command Line Processor (CLP):\n\u2022 Launch: db2cmd (Windows) or db2 (Linux)\n\u2022 Interactive mode: just type db2 at command prompt\n\u2022 Batch mode: db2 -f script.sql\n\u2022 Quiet mode: db2 -tvf script.sql (t=terminate with ;, v=verbose)\n\u2022 Use GET SNAPSHOT for monitoring, RUNSTATS for optimizer, REORG for table maintenance',
          codeExamples: [
            {
              title: 'DB2 Database Setup',
              code: '-- Create a database (DB2 command line processor)\nCREATE DATABASE university\n  AUTOMATIC STORAGE YES\n  USING CODESET UTF-8 PAGESIZE 32768;\n\n-- Connect to a database\nCONNECT TO university USER db2admin USING password;\n\n-- Connect to a remote database\nCATALOG TCPIP NODE mynode REMOTE 192.168.1.100 SERVER 50000;\nCATALOG DATABASE mydb AS university AT NODE mynode;\nCONNECT TO university USER myuser USING mypass;\n\n-- Create tables (similar to SQL standard)\nCREATE TABLE Student (\n  stud_id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(100) NOT NULL UNIQUE,\n  dob DATE,\n  PRIMARY KEY (stud_id)\n);\n\nCREATE TABLE Course (\n  course_code VARCHAR(10) NOT NULL,\n  course_name VARCHAR(100) NOT NULL,\n  credits INTEGER,\n  PRIMARY KEY (course_code)\n);\n\nCREATE TABLE Enrollment (\n  stud_id INTEGER NOT NULL,\n  course_code VARCHAR(10) NOT NULL,\n  grade CHAR(2),\n  PRIMARY KEY (stud_id, course_code),\n  FOREIGN KEY (stud_id) REFERENCES Student(stud_id),\n  FOREIGN KEY (course_code) REFERENCES Course(course_code)\n);\n\n-- Insert, update, delete (same SQL standard)\nINSERT INTO Student (name, email, dob)\n  VALUES (\'Alice\', \'alice@example.com\', \'2000-05-10\');\n\n-- Useful DB2 commands\nLIST DATABASE DIRECTORY;\nLIST TABLES;\nDESCRIBE TABLE Student;\nSELECT * FROM Student;\n\n-- Backup\nBACKUP DATABASE university TO \'C:\\backups\\\';\n\n-- Terminate connection\nTERMINATE;'
            }
          ]
        }
      ],
      quiz: [
        { question: 'Which command connects to a DB2 database?', options: ['USE', 'OPEN', 'CONNECT TO', 'ATTACH'], correct: 2 },
        { question: 'To list databases in DB2, use:', options: ['SHOW DATABASES', 'LIST DATABASE DIRECTORY', 'DISPLAY DATABASES', 'GET DATABASES'], correct: 1 },
        { question: 'Which command is used to back up a DB2 database?', options: ['DUMP', 'BACKUP DATABASE', 'EXPORT', 'SAVE'], correct: 1 },
        { question: 'In DB2, what command catalogs a remote node?', options: ['CATALOG TCPIP NODE', 'ADD NODE', 'CONNECT NODE', 'REGISTER NODE'], correct: 0 },
        { question: 'Which DB2 utility updates table statistics for the optimizer?', options: ['REORG', 'RUNSTATS', 'BACKUP', 'GET SNAPSHOT'], correct: 1 }
      ]
    }
  ]
};
