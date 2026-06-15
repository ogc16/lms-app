export const sqlCourse = {
  id: 'sql',
  title: 'Database - SQL',
  subtitle: 'Query and manage data',
  icon: '🗄️',
  color: '#336791',
  bgColor: '#E3F2FD',
  description: 'SQL (Structured Query Language) is the standard language for managing relational databases. This course covers querying, creating tables, joins, aggregation, and database design principles.',
  chapters: [
    {
      id: 'sql_intro',
      title: 'Introduction to SQL',
      lessons: [
        {
          id: 'sql_what_is',
          title: 'What is SQL?',
          content: 'SQL (Structured Query Language) is the standard language for interacting with relational databases. It was developed in the 1970s at IBM.\n\nKey concepts:\n• Database: organized collection of data\n• Table: data organized in rows and columns\n• Row: a single record\n• Column: a specific field (attribute)\n• Primary Key: uniquely identifies each row\n• Foreign Key: links tables together\n\nPopular database systems: PostgreSQL, MySQL, SQLite, SQL Server, Oracle.\n\nSQL categories:\n• DDL: CREATE, ALTER, DROP (schema)\n• DML: SELECT, INSERT, UPDATE, DELETE (data)\n• DCL: GRANT, REVOKE (permissions)',
          codeExamples: [
            {
              title: 'Database Concepts',
              code: '-- A typical table structure\n-- Users table\n-- | id | name  | email             | age |\n-- |----|-------|-------------------|-----|\n-- | 1  | Alice | alice@email.com   | 30  |\n-- | 2  | Bob   | bob@email.com     | 25  |\n-- | 3  | Carol | carol@email.com   | 35  |\n\n-- Creating this table\nCREATE TABLE users (\n    id INTEGER PRIMARY KEY,\n    name TEXT NOT NULL,\n    email TEXT UNIQUE,\n    age INTEGER\n);'
            }
          ]
        },
        {
          id: 'sql_select',
          title: 'SELECT Queries',
          content: 'The SELECT statement retrieves data from tables.\n\nBasic syntax:\nSELECT column1, column2 FROM table_name;\nSELECT * FROM table_name;  -- all columns\n\nFilter with WHERE:\nSELECT * FROM users WHERE age > 25;\n\nOperators: =, <>, >, <, >=, <=, BETWEEN, LIKE, IN, IS NULL\n\nLogical: AND, OR, NOT\n\nSort: ORDER BY column ASC (default) / DESC\n\nLimit: LIMIT 10 (or TOP in SQL Server, ROWNUM in Oracle)',
          codeExamples: [
            {
              title: 'SELECT Examples',
              code: '-- Basic select\nSELECT name, email FROM users;\n\n-- Filtered\nSELECT * FROM products\nWHERE price > 50\n  AND category = \'Electronics\';\n\n-- Pattern matching\nSELECT * FROM users\nWHERE name LIKE \'A%\';\n\n-- Sorted and limited\nSELECT name, age FROM users\nWHERE age >= 18\nORDER BY age DESC\nLIMIT 10;\n\n-- Distinct values\nSELECT DISTINCT city FROM customers;'
            }
          ]
        },
        {
          id: 'sql_insert',
          title: 'Insert, Update, Delete',
          content: 'DML statements modify data in tables.\n\nINSERT:\nINSERT INTO users (name, email, age)\nVALUES (\'David\', \'david@email.com\', 28);\n\nInsert multiple rows:\nINSERT INTO products (name, price) VALUES\n    (\'Widget\', 9.99),\n    (\'Gadget\', 24.99);\n\nUPDATE:\nUPDATE users SET age = 31 WHERE name = \'Alice\';\n\nDELETE:\nDELETE FROM users WHERE id = 4;\n\nAlways use WHERE with UPDATE/DELETE—otherwise all rows are affected!\n\nUse transactions when modifying multiple related tables.',
          codeExamples: [
            {
              title: 'Data Modification',
              code: '-- Insert\nINSERT INTO students (name, grade, major)\nVALUES (\'Alice\', 85, \'Computer Science\');\n\n-- Update\nUPDATE students\nSET grade = 90\nWHERE name = \'Alice\';\n\n-- Delete\nDELETE FROM students\nWHERE grade < 50;\n\n-- Using transactions\nBEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n-- ROLLBACK if something goes wrong'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does SQL stand for?',
          options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'Structured Question Language'],
          correct: 0
        },
        {
          question: 'Which clause filters rows?',
          options: ['HAVING', 'WHERE', 'FILTER', 'MATCH'],
          correct: 1
        },
        {
          question: 'What keyword deletes all rows without removing the table?',
          options: ['DROP TABLE', 'TRUNCATE', 'DELETE FROM', 'REMOVE'],
          correct: 2
        }
      ]
    },
    {
      id: 'sql_joins',
      title: 'Joins and Relationships',
      lessons: [
        {
          id: 'sql_joins_intro',
          title: 'Table Joins',
          content: 'JOINs combine rows from two or more tables based on related columns.\n\nTypes of JOINs:\n\nINNER JOIN: returns matching rows from both tables\nLEFT JOIN: all rows from left, matched rows from right (NULL if no match)\nRIGHT JOIN: all rows from right, matched from left\nFULL OUTER JOIN: all rows from both tables\nCROSS JOIN: cartesian product (every row × every row)\n\nON clause specifies the join condition, typically foreign key = primary key.\n\nTable aliases shorten syntax: FROM users u JOIN orders o ON u.id = o.user_id',
          codeExamples: [
            {
              title: 'JOIN Examples',
              code: '-- Sample tables\n-- users: id, name\n-- orders: id, user_id, product, total\n\n-- INNER JOIN - only users with orders\nSELECT u.name, o.product, o.total\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;\n\n-- LEFT JOIN - all users, even without orders\nSELECT u.name, o.product, o.total\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id;\n\n-- Multiple joins\nSELECT u.name, o.product, p.payment_method\nFROM users u\nJOIN orders o ON u.id = o.user_id\nJOIN payments p ON o.id = p.order_id;'
            }
          ]
        },
        {
          id: 'sql_grouping',
          title: 'Grouping and Aggregation',
          content: 'Aggregate functions summarize data across rows.\n\nFunctions: COUNT, SUM, AVG, MIN, MAX\n\nSELECT COUNT(*) FROM users;\nSELECT AVG(price) FROM products;\nSELECT MIN(age), MAX(age) FROM users;\n\nGROUP BY groups rows by column values:\nSELECT department, AVG(salary)\nFROM employees\nGROUP BY department;\n\nHAVING filters groups (like WHERE but for GROUP BY):\nHAVING AVG(salary) > 50000\n\nYou can combine WHERE (filter rows) with GROUP BY (group) with HAVING (filter groups).',
          codeExamples: [
            {
              title: 'Grouping and Aggregation',
              code: '-- Count per category\nSELECT category, COUNT(*) AS product_count\nFROM products\nGROUP BY category;\n\n-- Average order value per customer\nSELECT customer_id,\n       COUNT(*) AS order_count,\n       SUM(total) AS total_spent,\n       AVG(total) AS avg_order\nFROM orders\nGROUP BY customer_id\nORDER BY total_spent DESC;\n\n-- Departments with high average salary\nSELECT department, AVG(salary) AS avg_salary\nFROM employees\nGROUP BY department\nHAVING AVG(salary) > 60000\nORDER BY avg_salary DESC;\n\n-- Distinct combination\nSELECT DISTINCT city, state FROM customers;'
            }
          ]
        },
        {
          id: 'sql_subqueries',
          title: 'Subqueries',
          content: 'A subquery is a query nested inside another query.\n\nSubquery in WHERE:\nSELECT name FROM products\nWHERE price > (SELECT AVG(price) FROM products);\n\nSubquery in FROM (derived table):\nSELECT * FROM (SELECT * FROM users WHERE age > 18) AS adults;\n\nSubquery in SELECT:\nSELECT name,\n    (SELECT COUNT(*) FROM orders WHERE user_id = u.id) AS order_count\nFROM users u;\n\nOperators: IN, EXISTS, ANY, ALL\n\nEXISTS checks if a subquery returns any rows.\nIN checks if a value is in a subquery result set.',
          codeExamples: [
            {
              title: 'Subquery Examples',
              code: '-- Customers with above-average orders\nSELECT name\nFROM customers\nWHERE id IN (\n    SELECT customer_id\n    FROM orders\n    GROUP BY customer_id\n    HAVING SUM(total) > (\n        SELECT AVG(total) FROM orders\n    )\n);\n\n-- Products never ordered\nSELECT name FROM products\nWHERE id NOT IN (\n    SELECT DISTINCT product_id FROM order_items\n);\n\n-- Using EXISTS\nSELECT name FROM departments d\nWHERE EXISTS (\n    SELECT 1 FROM employees e\n    WHERE e.department_id = d.id\n    AND e.salary > 100000\n);\n\n-- Correlated subquery\nSELECT name, salary\nFROM employees e\nWHERE salary > (\n    SELECT AVG(salary)\n    FROM employees\n    WHERE department_id = e.department_id\n);'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which JOIN returns all rows from the left table?',
          options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'],
          correct: 1
        },
        {
          question: 'What function counts rows?',
          options: ['TOTAL()', 'COUNT()', 'SUM()', 'LEN()'],
          correct: 1
        },
        {
          question: 'What clause filters grouped data?',
          options: ['WHERE', 'HAVING', 'FILTER', 'GROUP FILTER'],
          correct: 1
        }
      ]
    },
    {
      id: 'sql_advanced',
      title: 'Advanced SQL',
      lessons: [
        {
          id: 'sql_indexes',
          title: 'Indexes and Performance',
          content: 'Indexes speed up data retrieval at the cost of slower writes and more storage.\n\nCREATE INDEX idx_users_email ON users(email);\nCREATE UNIQUE INDEX idx_product_code ON products(code);\n\nTypes:\n• B-tree index (default) - good for range queries\n• Hash index - good for equality lookups\n• Composite index - multiple columns\n• Partial index - WHERE clause condition\n• Covering index - includes all needed columns\n\nUse EXPLAIN (or EXPLAIN ANALYZE) to see query plans and identify slow queries.\n\nIndex columns used in WHERE, JOIN, ORDER BY, and GROUP BY clauses.\n\nAvoid over-indexing—each index slows INSERT/UPDATE/DELETE.',
          codeExamples: [
            {
              title: 'Working with Indexes',
              code: '-- Create indexes\nCREATE INDEX idx_orders_date\nON orders(order_date);\n\n-- Composite index for common query pattern\nCREATE INDEX idx_orders_user_status\nON orders(user_id, status);\n\n-- Partial index\nCREATE INDEX idx_active_users\nON users(email)\nWHERE active = true;\n\n-- View query plan (PostgreSQL)\nEXPLAIN ANALYZE\nSELECT * FROM orders\nWHERE user_id = 42\n  AND status = \'pending\';\n\n-- Drop index\nDROP INDEX IF EXISTS idx_old_index;'
            }
          ]
        },
        {
          id: 'sql_normalization',
          title: 'Database Normalization',
          content: 'Normalization organizes data to reduce redundancy and improve integrity.\n\nForms:\n\n1NF (First Normal Form): atomic values, no repeating groups\n• Each cell has one value\n• Each row is unique\n\n2NF (Second Normal Form): 1NF + no partial dependencies\n• Every non-key column depends on the full primary key\n\n3NF (Third Normal Form): 2NF + no transitive dependencies\n• Non-key columns depend only on the primary key\n\nDenormalization: intentionally adding redundancy for performance (fewer JOINs).\n\nIn practice, aim for 3NF, then denormalize if needed for performance.',
          codeExamples: [
            {
              title: 'Normalization Example',
              code: '-- UNNORMALIZED (bad design)\n-- orders: id, customer_name, customer_email, product_1, product_2, product_3\n\n-- 1NF: atomic values, no repeating groups\n-- orders: id, customer_name, customer_email\n-- order_items: order_id, product_name, quantity\n\n-- 2NF: no partial dependencies\n-- order_items depends on order_id, but product_name depends on product_id\n-- orders: id, customer_id, order_date\n-- order_items: order_id, product_id, quantity\n-- products: id, name, price\n\n-- 3NF: no transitive dependencies\n-- customer_name depends on customer_id, not on order_id\n-- orders: id, customer_id, order_date\n-- customers: id, name, email\n-- order_items: order_id, product_id, quantity\n-- products: id, name, price, category_id\n-- categories: id, name\n\n-- Final normalized schema:\nCREATE TABLE categories (\n    id SERIAL PRIMARY KEY,\n    name TEXT NOT NULL\n);\n\nCREATE TABLE products (\n    id SERIAL PRIMARY KEY,\n    name TEXT NOT NULL,\n    price DECIMAL(10,2),\n    category_id INTEGER REFERENCES categories(id)\n);\n\nCREATE TABLE customers (\n    id SERIAL PRIMARY KEY,\n    name TEXT NOT NULL,\n    email TEXT UNIQUE\n);\n\nCREATE TABLE orders (\n    id SERIAL PRIMARY KEY,\n    customer_id INTEGER REFERENCES customers(id),\n    order_date TIMESTAMP DEFAULT NOW()\n);\n\nCREATE TABLE order_items (\n    order_id INTEGER REFERENCES orders(id),\n    product_id INTEGER REFERENCES products(id),\n    quantity INTEGER NOT NULL,\n    PRIMARY KEY (order_id, product_id)\n);'
            }
          ]
        },
        {
          id: 'sql_transactions',
          title: 'Transactions and Constraints',
          content: 'Transactions ensure data consistency. ACID properties:\n\nAtomicity: all or nothing\nConsistency: data follows rules\nIsolation: concurrent transactions don\'t interfere\nDurability: committed data persists\n\nBEGIN TRANSACTION / COMMIT / ROLLBACK\n\nConstraints enforce data integrity:\n• NOT NULL: column must have value\n• UNIQUE: no duplicate values\n• PRIMARY KEY: NOT NULL + UNIQUE\n• FOREIGN KEY: references another table\n• CHECK: custom validation\n• DEFAULT: default value\n\nCASCADE: ON DELETE CASCADE auto-deletes related rows.',
          codeExamples: [
            {
              title: 'Transactions and Constraints',
              code: '-- Creating table with constraints\nCREATE TABLE employees (\n    id SERIAL PRIMARY KEY,\n    name TEXT NOT NULL,\n    email TEXT UNIQUE NOT NULL,\n    salary DECIMAL(10,2) CHECK (salary > 0),\n    department_id INTEGER REFERENCES departments(id),\n    start_date DATE DEFAULT CURRENT_DATE\n);\n\n-- Transaction example\nBEGIN TRANSACTION;\n\n-- Deduct from sender\nUPDATE accounts\nSET balance = balance - 500\nWHERE id = 1;\n\n-- Add to recipient\nUPDATE accounts\nSET balance = balance + 500\nWHERE id = 2;\n\n-- Check for negative balance\nDO $$\nBEGIN\n    IF (SELECT balance FROM accounts WHERE id = 1) < 0 THEN\n        RAISE EXCEPTION \'Insufficient funds\';\n    END IF;\nEND $$;\n\nCOMMIT;\n-- ROLLBACK if anything fails\n\n-- Foreign key with cascade\nCREATE TABLE orders (\n    id SERIAL PRIMARY KEY,\n    customer_id INTEGER REFERENCES customers(id)\n        ON DELETE CASCADE\n);'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does ACID stand for?',
          options: ['Atomicity, Consistency, Isolation, Durability', 'Automatic, Consistent, Isolated, Durable', 'Atomic, Consistent, Isolated, Durable', 'All, Consistency, Integrity, Durability'],
          correct: 0
        },
        {
          question: 'Which normal form removes transitive dependencies?',
          options: ['1NF', '2NF', '3NF', 'BCNF'],
          correct: 2
        },
        {
          question: 'What constraint ensures no duplicate values?',
          options: ['PRIMARY KEY', 'UNIQUE', 'DISTINCT', 'NOT NULL'],
          correct: 1
        }
      ]
    }
  ]
};
