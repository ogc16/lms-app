export const oopCourse = {
  id: 'oop',
  title: 'Object-Oriented Programming 1',
  subtitle: 'ICS 2104 — OOP 1',
  icon: '💻',
  color: '#9b59b6',
  bgColor: '#F4ECF7',
  description: 'Introduction to Object-Oriented Programming using C++ covering classes, objects, inheritance, polymorphism, and file handling.',
  chapters: [
    {
      id: 'oop_intro',
      title: 'Introduction to OOP and C++',
      lessons: [
        {
          id: 'oop_what_is',
          title: 'What is OOP?',
          content: 'Object-Oriented Programming is a paradigm that organizes software design around objects rather than functions and logic. An object contains data (attributes) and code (methods) that operates on that data.\n\nFour Pillars of OOP:\n• Encapsulation: Bundling data and methods together, hiding internal state\n• Inheritance: Creating new classes from existing ones\n• Polymorphism: One interface, multiple implementations\n• Abstraction: Hiding complex implementation details\n\nC++ is a general-purpose programming language that supports both procedural and object-oriented programming.',
          codeExamples: [
            {
              title: 'Your First C++ Program',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    // This is a comment\n    string name = "C++";\n    cout << "Welcome to " << name << "!" << endl;\n    return 0;\n}'
            }
          ]
        },
        {
          id: 'oop_cpp_basics',
          title: 'C++ Program Structure',
          content: 'A C++ program consists of:\n\n• Preprocessor Directives (#include, #define) — Include libraries and define constants\n• using namespace std — Use the standard namespace\n• main() function — Entry point of every C++ program\n• Statements terminated with semicolons (;)\n• Blocks enclosed in curly braces { }\n\nCompile with: g++ program.cpp -o program\nRun with: ./program',
          codeExamples: [
            {
              title: 'C++ Program Structure',
              code: '#include <iostream>   // Input/output library\nusing namespace std;   // Standard namespace\n\n// Function prototype\nint add(int a, int b);\n\nint main() {\n    int result = add(5, 3);\n    cout << "Sum: " << result << endl;\n    return 0;  // Indicates successful execution\n}\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which is NOT one of the four pillars of OOP?',
          options: ['Encapsulation', 'Compilation', 'Inheritance', 'Polymorphism'],
          correct: 1
        },
        {
          question: 'What is the entry point of every C++ program?',
          options: ['start()', 'begin()', 'main()', 'run()'],
          correct: 2
        },
        {
          question: 'What header is needed for input/output in C++?',
          options: ['<string>', '<cmath>', '<iostream>', '<fstream>'],
          correct: 2
        }
      ]
    },
    {
      id: 'oop_vars_types',
      title: 'Variables and Data Types',
      lessons: [
        {
          id: 'oop_variables',
          title: 'Variables in C++',
          content: 'Variables are named memory locations that store data. C++ is statically typed — every variable must have a declared type.\n\nVariable naming rules:\n• Must start with a letter or underscore\n• Cannot start with a digit\n• Can contain letters, digits, and underscores\n• Case-sensitive (count, Count, COUNT are different)\n• Cannot use reserved keywords (int, return, etc.)\n\nDeclaration syntax: type variableName = value;',
          codeExamples: [
            {
              title: 'Variable Declaration and Initialization',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Basic data types\n    int age = 25;             // Integer\n    double price = 19.99;     // Double precision float\n    float pi = 3.14f;         // Single precision float\n    char grade = \'A\';         // Single character\n    bool isPassed = true;     // Boolean (true/false)\n    \n    cout << "Age: " << age << endl;\n    cout << "Price: " << price << endl;\n    cout << "Grade: " << grade << endl;\n    cout << "Passed: " << isPassed << endl;\n    \n    return 0;\n}'
            },
            {
              title: 'Type Modifiers and Sizes',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    short int a = 10;         // 2 bytes\n    long int b = 100000;      // 4 or 8 bytes\n    unsigned int c = 50;       // Only positive\n    long long d = 1000000000;  // 8 bytes\n    \n    cout << "Size of int: " << sizeof(int) << " bytes" << endl;\n    cout << "Size of double: " << sizeof(double) << " bytes" << endl;\n    \n    // const - value cannot change\n    const double TAX_RATE = 0.16;\n    // TAX_RATE = 0.20;  // Error!\n    \n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which of these is a valid C++ variable name?',
          options: ['2ndPlace', 'my-var', '_count', 'class'],
          correct: 2
        },
        {
          question: 'What is the size of an int in most C++ implementations?',
          options: ['2 bytes', '4 bytes', '8 bytes', 'Depends on the compiler'],
          correct: 3
        },
        {
          question: 'Which keyword creates a variable whose value cannot change?',
          options: ['static', 'const', 'final', 'readonly'],
          correct: 1
        }
      ]
    },
    {
      id: 'oop_control',
      title: 'Control Structures',
      lessons: [
        {
          id: 'oop_if_else',
          title: 'Decision Making',
          content: 'Control structures allow you to control the flow of program execution based on conditions.\n\nif statement: Executes code if a condition is true\nif-else: Executes one block if true, another if false\nif-else if-else: Tests multiple conditions\nswitch: Selects among multiple cases based on an integer/char expression\n\nComparison operators: ==, !=, <, >, <=, >=\nLogical operators: && (AND), || (OR), ! (NOT)',
          codeExamples: [
            {
              title: 'If/Else and Switch Statements',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 85;\n    \n    // if-else if-else\n    if (score >= 90) {\n        cout << "Grade: A" << endl;\n    } else if (score >= 80) {\n        cout << "Grade: B" << endl;\n    } else if (score >= 70) {\n        cout << "Grade: C" << endl;\n    } else if (score >= 60) {\n        cout << "Grade: D" << endl;\n    } else {\n        cout << "Grade: F" << endl;\n    }\n    \n    // Ternary operator\n    string status = (score >= 50) ? "Pass" : "Fail";\n    cout << "Status: " << status << endl;\n    \n    // Switch statement\n    int day = 3;\n    switch (day) {\n        case 1: cout << "Monday"; break;\n        case 2: cout << "Tuesday"; break;\n        case 3: cout << "Wednesday"; break;\n        case 4: cout << "Thursday"; break;\n        case 5: cout << "Friday"; break;\n        default: cout << "Weekend";\n    }\n    cout << endl;\n    \n    return 0;\n}'
            }
          ]
        },
        {
          id: 'oop_loops',
          title: 'Loops in C++',
          content: 'Loops execute a block of code repeatedly.\n\nfor loop: Executes a known number of times. Has initialization, condition, and increment/decrement.\n\nwhile loop: Executes while a condition is true. Checks condition before each iteration.\n\ndo-while loop: Executes at least once, then repeats while condition is true. Checks condition after each iteration.\n\nControl keywords: break (exit loop), continue (skip to next iteration).',
          codeExamples: [
            {
              title: 'Loop Examples',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // For loop\n    for (int i = 0; i < 5; i++) {\n        cout << i << " ";  // 0 1 2 3 4\n    }\n    cout << endl;\n    // While loop\n    int count = 0;\n    while (count < 5) {\n        cout << count << " ";  // 0 1 2 3 4\n        count++;\n    }\n    cout << endl;\n    // Do-while loop\n    int x = 0;\n    do {\n        cout << x << " ";  // 0 1 2 3 4\n        x++;\n    } while (x < 5);\n    cout << endl;\n    // Break and continue\n    for (int i = 0; i < 10; i++) {\n        if (i == 3) continue;\n        if (i == 7) break;\n        cout << i << " ";  // 0 1 2 4 5 6\n    }\n    cout << endl;\n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does the break statement do in a loop?',
          options: ['Skips the current iteration', 'Exits the loop entirely', 'Restarts the loop', 'Pauses the loop'],
          correct: 1
        },
        {
          question: 'How many times will a do-while loop always execute?',
          options: ['0', '1', 'At least once', 'Depends on condition'],
          correct: 2
        },
        {
          question: 'Which operator represents logical AND in C++?',
          options: ['&', '&&', '||', '!'],
          correct: 1
        }
      ]
    },
    {
      id: 'oop_functions',
      title: 'Functions',
      lessons: [
        {
          id: 'oop_func_basics',
          title: 'Defining and Using Functions',
          content: 'Functions are reusable blocks of code that perform specific tasks. They help organize code, reduce repetition, and improve readability.\n\nFunction syntax: returnType functionName(parameters) { body }\n\n• Function Prototype: Declares the function before main()\n• Function Definition: Provides the actual implementation\n• Function Call: Invokes the function\n\nParameters can be passed by value (copy) or by reference (original).',
          codeExamples: [
            {
              title: 'Function Examples',
              code: '#include <iostream>\nusing namespace std;\n\n// Function prototype\nint max(int a, int b);\nvoid printMessage(string msg);\n\nint main() {\n    // Calling functions\n    int result = max(10, 20);\n    cout << "Max: " << result << endl;  // 20\n    \n    printMessage("Hello, Functions!");\n    \n    return 0;\n}\n\n// Function definitions\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}\n\nvoid printMessage(string msg) {\n    cout << msg << endl;\n}'
            },
            {
              title: 'Pass by Value vs Reference',
              code: '#include <iostream>\nusing namespace std;\n\n// Pass by value (copy)\nvoid swapByValue(int x, int y) {\n    int temp = x;\n    x = y;\n    y = temp;\n}\n\n// Pass by reference (original)\nvoid swapByRef(int &x, int &y) {\n    int temp = x;\n    x = y;\n    y = temp;\n}\n\n// Default parameters\ndouble power(double base, int exp = 2) {\n    double result = 1;\n    for (int i = 0; i < exp; i++)\n        result *= base;\n    return result;\n}\n\nint main() {\n    int a = 5, b = 10;\n    swapByValue(a, b);\n    cout << a << " " << b << endl;  // 5 10 (unchanged!)\n    \n    swapByRef(a, b);\n    cout << a << " " << b << endl;  // 10 5 (swapped!)\n    \n    cout << power(3) << endl;       // 9\n    cout << power(3, 3) << endl;    // 27\n    \n    // Function overloading\n    return 0;\n}'
            }
          ]
        },
        {
          id: 'oop_overloading',
          title: 'Function Overloading',
          content: 'Function overloading allows multiple functions with the same name but different parameters. The compiler determines which function to call based on the number and types of arguments.\n\nRules for overloading:\n• Functions must have different parameter lists (different number or types of parameters)\n• Return type alone is not sufficient for overloading\n• Default arguments can also be used but may cause ambiguity',
          codeExamples: [
            {
              title: 'Function Overloading Example',
              code: '#include <iostream>\nusing namespace std;\n\n// Overloaded functions\nint add(int a, int b) {\n    return a + b;\n}\n\ndouble add(double a, double b) {\n    return a + b;\n}\n\nint add(int a, int b, int c) {\n    return a + b + c;\n}\n\nint main() {\n    cout << add(5, 10) << endl;         // 15 (int, int)\n    cout << add(3.5, 2.7) << endl;      // 6.2 (double, double)\n    cout << add(1, 2, 3) << endl;       // 6 (int, int, int)\n    \n    // Compiler chooses based on arguments\n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is a function prototype?',
          options: ['The function body', 'A declaration before main()', 'A function call', 'A return statement'],
          correct: 1
        },
        {
          question: 'How do you pass a parameter by reference in C++?',
          options: ['Use a pointer', 'Use the & symbol', 'Use the * symbol', 'Use the ref keyword'],
          correct: 1
        },
        {
          question: 'Can two functions with the same name and parameters but different return types be overloaded?',
          options: ['Yes', 'No', 'Only in classes', 'Only with virtual keyword'],
          correct: 1
        }
      ]
    },
    {
      id: 'oop_arrays_strings',
      title: 'Arrays and Strings',
      lessons: [
        {
          id: 'oop_arrays',
          title: 'Arrays in C++',
          content: 'Arrays store multiple values of the same type in contiguous memory locations.\n\nDeclaration: type name[size];\n\n• Indexing starts at 0\n• Size must be a constant expression for static arrays\n• Arrays are fixed-size — cannot be resized at runtime\n• No bounds checking — accessing out-of-bounds causes undefined behavior\n\nMultidimensional arrays: int matrix[3][4];\n\nC++ also provides std::array (fixed-size container) and std::vector (dynamic array) from the STL.',
          codeExamples: [
            {
              title: 'Array Operations',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // One-dimensional array\n    int numbers[5] = {10, 20, 30, 40, 50};\n    \n    cout << "Array elements: ";\n    for (int i = 0; i < 5; i++) {\n        cout << numbers[i] << " ";  // 10 20 30 40 50\n    }\n    cout << endl;\n    \n    // Modifying elements\n    numbers[2] = 100;\n    \n    // Array size calculation\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    cout << "Array size: " << size << endl;\n    \n    // Two-dimensional array (matrix)\n    int matrix[2][3] = {\n        {1, 2, 3},\n        {4, 5, 6}\n    };\n    \n    cout << "Matrix:" << endl;\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 3; j++) {\n            cout << matrix[i][j] << " ";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}'
            }
          ]
        },
        {
          id: 'oop_strings',
          title: 'Strings in C++',
          content: 'C++ provides two ways to work with strings:\n\nC-style strings: char arrays terminated with null character (\'\\0\')\n• char name[] = "Hello";\n• Functions: strlen(), strcpy(), strcmp() from <cstring>\n\nC++ strings: std::string class from <string>\n• Safer, more convenient, supports many operations\n• Can be concatenated with + operator\n• Provides methods like length(), substr(), find(), etc.',
          codeExamples: [
            {
              title: 'C++ String Operations',
              code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // C++ string class\n    string firstName = "John";\n    string lastName = "Doe";\n    \n    // Concatenation\n    string fullName = firstName + " " + lastName;\n    cout << "Name: " << fullName << endl;\n    \n    // String methods\n    cout << "Length: " << fullName.length() << endl;\n    cout << "First char: " << fullName[0] << endl;\n    cout << "Substring: " << fullName.substr(0, 4) << endl;\n    \n    // Find\n    int pos = fullName.find("Doe");\n    cout << "Position of Doe: " << pos << endl;\n    \n    // Comparison\n    if (firstName == "John") {\n        cout << "Hello John!" << endl;\n    }\n    \n    // C-style string (alternative)\n    char greeting[] = "Hello C++";\n    cout << greeting << endl;\n    \n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the index of the first element in a C++ array?',
          options: ['1', '-1', '0', 'It depends'],
          correct: 2
        },
        {
          question: 'Which header is needed for the std::string class?',
          options: ['<cstring>', '<string>', '<iostream>', '<text>'],
          correct: 1
        },
        {
          question: 'What happens when you access an array out of bounds in C++?',
          options: ['Exception is thrown', 'Program crashes gracefully', 'Undefined behavior', 'Compiler error'],
          correct: 2
        }
      ]
    },
    {
      id: 'oop_classes_objects',
      title: 'Classes and Objects',
      lessons: [
        {
          id: 'oop_class_basics',
          title: 'Defining Classes',
          content: 'A class is a blueprint for creating objects. It encapsulates data (attributes) and functions (methods) that operate on that data.\n\nClass syntax:\nclass ClassName {\n    accessSpecifier:\n        data members;\n        member functions;\n};\n\nAccess Specifiers:\n• private: Accessible only within the class (default)\n• public: Accessible from anywhere\n• protected: Accessible in the class and derived classes\n\nAn object is an instance of a class created using: ClassName objectName;',
          codeExamples: [
            {
              title: 'Basic Class Example',
              code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int age;\n    double gpa;\n\npublic:\n    // Setter methods\n    void setName(string n) {\n        name = n;\n    }\n    \n    void setAge(int a) {\n        if (a > 0) age = a;\n    }\n    \n    void setGPA(double g) {\n        if (g >= 0 && g <= 4.0) gpa = g;\n    }\n    \n    // Getter methods\n    string getName() {\n        return name;\n    }\n    \n    int getAge() {\n        return age;\n    }\n    \n    double getGPA() {\n        return gpa;\n    }\n    \n    void displayInfo() {\n        cout << "Name: " << name << endl;\n        cout << "Age: " << age << endl;\n        cout << "GPA: " << gpa << endl;\n    }\n};\n\nint main() {\n    Student s1;  // Creating an object\n    \n    s1.setName("Alice");\n    s1.setAge(20);\n    s1.setGPA(3.8);\n    \n    s1.displayInfo();\n    \n    return 0;\n}'
            },
            {
              title: 'Multiple Objects and Classes',
              code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    double length;\n    double width;\n\npublic:\n    void setDimensions(double l, double w) {\n        length = l;\n        width = w;\n    }\n    \n    double getArea() {\n        return length * width;\n    }\n    \n    double getPerimeter() {\n        return 2 * (length + width);\n    }\n};\n\nint main() {\n    Rectangle rect1, rect2;\n    \n    rect1.setDimensions(5.0, 3.0);\n    rect2.setDimensions(7.5, 4.2);\n    \n    cout << "Rectangle 1 area: " << rect1.getArea() << endl;\n    cout << "Rectangle 2 area: " << rect2.getArea() << endl;\n    \n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the default access specifier in a C++ class?',
          options: ['public', 'private', 'protected', 'internal'],
          correct: 1
        },
        {
          question: 'What is an object in OOP?',
          options: ['A variable', 'An instance of a class', 'A function', 'A data type'],
          correct: 1
        },
        {
          question: 'Which access specifier allows access in derived classes but not outside?',
          options: ['public', 'private', 'protected', 'friend'],
          correct: 2
        }
      ]
    },
    {
      id: 'oop_ctors_dtors',
      title: 'Constructors and Destructors',
      lessons: [
        {
          id: 'oop_constructors',
          title: 'Constructors',
          content: 'A constructor is a special member function that is automatically called when an object is created.\n\nCharacteristics:\n• Same name as the class\n• No return type (not even void)\n• Can be overloaded\n• Usually used to initialize member variables\n\nTypes of Constructors:\n• Default Constructor: No parameters\n• Parameterized Constructor: Takes parameters\n• Copy Constructor: Creates a copy from an existing object\n\nIf no constructor is defined, C++ provides a default constructor automatically.',
          codeExamples: [
            {
              title: 'Constructor Types',
              code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Car {\nprivate:\n    string brand;\n    string model;\n    int year;\n\npublic:\n    // Default constructor\n    Car() {\n        brand = "Unknown";\n        model = "Unknown";\n        year = 0;\n        cout << "Default constructor called" << endl;\n    }\n    \n    // Parameterized constructor\n    Car(string b, string m, int y) {\n        brand = b;\n        model = m;\n        year = y;\n        cout << "Parameterized constructor called" << endl;\n    }\n    \n    // Copy constructor\n    Car(const Car &c) {\n        brand = c.brand;\n        model = c.model;\n        year = c.year;\n        cout << "Copy constructor called" << endl;\n    }\n    \n    void display() {\n        cout << brand << " " << model << " (" << year << ")" << endl;\n    }\n};\n\nint main() {\n    Car car1;                              // Default\n    Car car2("Toyota", "Camry", 2022);     // Parameterized\n    Car car3 = car2;                       // Copy\n    \n    car1.display();\n    car2.display();\n    car3.display();\n    \n    return 0;\n}'
            }
          ]
        },
        {
          id: 'oop_destructors',
          title: 'Destructors',
          content: 'A destructor is a special member function called automatically when an object goes out of scope or is deleted.\n\nCharacteristics:\n• Same name as class with a tilde (~) prefix\n• No parameters\n• No return type\n• Cannot be overloaded (only one destructor per class)\n• Used to release resources (memory, files, sockets)\n\nIf not defined, the compiler generates a default destructor.\n\nDestructors are called in reverse order of object creation.',
          codeExamples: [
            {
              title: 'Destructor Example',
              code: '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass StringContainer {\nprivate:\n    char* data;\n    int length;\n\npublic:\n    // Constructor - allocates memory\n    StringContainer(const char* str) {\n        length = strlen(str);\n        data = new char[length + 1];\n        strcpy_s(data, length + 1, str);\n        cout << "Constructor: Allocated memory" << endl;\n    }\n    \n    // Destructor - deallocates memory\n    ~StringContainer() {\n        delete[] data;\n        cout << "Destructor: Freed memory" << endl;\n    }\n    \n    void display() {\n        cout << "String: " << data << endl;\n    }\n};\n\nint main() {\n    StringContainer s1("Hello");\n    s1.display();\n    \n    {\n        StringContainer s2("World");\n        s2.display();\n    }  // s2 destructor called here\n    \n    cout << "Back in main" << endl;\n    // s1 destructor called here\n    \n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the name of a constructor?',
          options: ['Same as the class name', 'init()', 'constructor()', 'create()'],
          correct: 0
        },
        {
          question: 'What symbol prefixes a destructor name?',
          options: ['!', '~', '^', '#'],
          correct: 1
        },
        {
          question: 'How many destructors can a class have?',
          options: ['0 or 1', 'As many as needed', 'Same as constructors', 'At least one'],
          correct: 0
        }
      ]
    },
    {
      id: 'oop_inheritance',
      title: 'Inheritance',
      lessons: [
        {
          id: 'oop_inherit_basics',
          title: 'Inheritance Basics',
          content: 'Inheritance allows a class (derived/child) to inherit properties and methods from another class (base/parent).\n\nSyntax: class DerivedClass : accessSpecifier BaseClass { };\n\nAccess specifiers in inheritance control how base class members are inherited:\n• public inheritance: public → public, protected → protected\n• protected inheritance: public → protected, protected → protected\n• private inheritance: public → private, protected → private\n\nPrivate members of the base class are never directly accessible in the derived class.',
          codeExamples: [
            {
              title: 'Inheritance Example',
              code: '#include <iostream>\n#include <string>\nusing namespace std;\n\n// Base class\nclass Animal {\nprotected:\n    string name;\n    int age;\n\npublic:\n    void setName(string n) {\n        name = n;\n    }\n    \n    void setAge(int a) {\n        age = a;\n    }\n    \n    void eat() {\n        cout << name << " is eating" << endl;\n    }\n    \n    void sleep() {\n        cout << name << " is sleeping" << endl;\n    }\n};\n\n// Derived class (public inheritance)\nclass Dog : public Animal {\npublic:\n    void bark() {\n        cout << name << " says Woof!" << endl;\n    }\n};\n\n// Another derived class\nclass Cat : public Animal {\npublic:\n    void meow() {\n        cout << name << " says Meow!" << endl;\n    }\n};\n\nint main() {\n    Dog dog;\n    dog.setName("Buddy");\n    dog.setAge(3);\n    dog.eat();     // Inherited from Animal\n    dog.bark();    // Own method\n    \n    Cat cat;\n    cat.setName("Kitty");\n    cat.setAge(2);\n    cat.sleep();   // Inherited from Animal\n    cat.meow();    // Own method\n    \n    return 0;\n}'
            }
          ]
        },
        {
          id: 'oop_inherit_types',
          title: 'Types of Inheritance',
          content: 'C++ supports multiple types of inheritance:\n\n1. Single Inheritance: One derived class from one base class\n2. Multiple Inheritance: One derived class from multiple base classes\n3. Multilevel Inheritance: A derived class becomes base for another\n4. Hierarchical Inheritance: Multiple derived classes from one base\n5. Hybrid Inheritance: Combination of multiple and multilevel\n\nMultiple Inheritance syntax:\nclass Derived : public Base1, public Base2 { };\n\nVirtual inheritance solves the diamond problem in hybrid inheritance.',
          codeExamples: [
            {
              title: 'Multiple and Multilevel Inheritance',
              code: '#include <iostream>\nusing namespace std;\n\n// Multiple Inheritance\nclass Printable {\npublic:\n    void print() {\n        cout << "Printing..." << endl;\n    }\n};\n\nclass Scalable {\npublic:\n    void scale(double factor) {\n        cout << "Scaling by " << factor << endl;\n    }\n};\n\nclass Shape : public Printable, public Scalable {\nprivate:\n    double area;\npublic:\n    Shape(double a) : area(a) {}\n    double getArea() { return area; }\n};\n\n// Multilevel Inheritance\nclass Person {\nprotected:\n    string name;\npublic:\n    Person(string n) : name(n) {}\n    void introduce() { cout << "I am " << name << endl; }\n};\n\nclass Employee : public Person {\nprotected:\n    int id;\npublic:\n    Employee(string n, int i) : Person(n), id(i) {}\n    void work() { cout << name << " is working" << endl; }\n};\n\nclass Manager : public Employee {\nprivate:\n    int teamSize;\npublic:\n    Manager(string n, int i, int t)\n        : Employee(n, i), teamSize(t) {}\n    void manage() {\n        cout << name << " manages " << teamSize << " people" << endl;\n    }\n};\n\nint main() {\n    Shape rect(25.0);\n    rect.print();\n    rect.scale(2.0);\n    \n    Manager mgr("Alice", 1001, 5);\n    mgr.introduce();\n    mgr.work();\n    mgr.manage();\n    \n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What type of inheritance has one base class and multiple derived classes?',
          options: ['Multilevel', 'Multiple', 'Hierarchical', 'Hybrid'],
          correct: 2
        },
        {
          question: 'Can a derived class access private members of the base class?',
          options: ['Yes', 'No', 'Only with friend', 'Only through public methods'],
          correct: 3
        },
        {
          question: 'Which keyword prevents the diamond problem in multiple inheritance?',
          options: ['static', 'virtual', 'abstract', 'final'],
          correct: 1
        }
      ]
    },
    {
      id: 'oop_polymorphism',
      title: 'Polymorphism',
      lessons: [
        {
          id: 'oop_compile_time',
          title: 'Compile-Time Polymorphism',
          content: 'Polymorphism means "many forms" — the ability of different objects to respond to the same message in different ways.\n\nCompile-Time Polymorphism (Static Binding) is resolved at compile time:\n\n1. Function Overloading: Multiple functions with same name, different parameters\n2. Operator Overloading: Custom behavior for operators (+, -, etc.) on user-defined types\n\nOperator overloading uses the keyword operator followed by the operator symbol.\nSyntax: returnType operator symbol(parameters) { body }',
          codeExamples: [
            {
              title: 'Operator Overloading',
              code: '#include <iostream>\nusing namespace std;\n\nclass Complex {\nprivate:\n    double real;\n    double imag;\n\npublic:\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n    \n    // Overload + operator\n    Complex operator+(const Complex& c) {\n        return Complex(real + c.real, imag + c.imag);\n    }\n    \n    // Overload - operator\n    Complex operator-(const Complex& c) {\n        return Complex(real - c.real, imag - c.imag);\n    }\n    \n    // Overload == operator\n    bool operator==(const Complex& c) {\n        return (real == c.real && imag == c.imag);\n    }\n    \n    // Overload << as friend function\n    friend ostream& operator<<(ostream& out, const Complex& c) {\n        out << c.real;\n        if (c.imag >= 0)\n            out << " + " << c.imag << "i";\n        else\n            out << " - " << -c.imag << "i";\n        return out;\n    }\n    \n    void display() {\n        cout << real << " + " << imag << "i" << endl;\n    }\n};\n\nint main() {\n    Complex c1(3, 4), c2(1, 2);\n    \n    Complex sum = c1 + c2;\n    Complex diff = c1 - c2;\n    \n    cout << "c1 = " << c1 << endl;\n    cout << "c2 = " << c2 << endl;\n    cout << "Sum = " << sum << endl;\n    cout << "Diff = " << diff << endl;\n    \n    if (c1 == c2)\n        cout << "Equal" << endl;\n    else\n        cout << "Not equal" << endl;\n    \n    return 0;\n}'
            }
          ]
        },
        {
          id: 'oop_runtime',
          title: 'Run-Time Polymorphism',
          content: 'Run-Time Polymorphism (Dynamic Binding) is resolved at runtime using virtual functions.\n\nA virtual function is a function in the base class that is expected to be overridden in derived classes. The virtual keyword tells the compiler to use dynamic binding.\n\n• virtual function: Can be overridden, base class provides a default\n• Pure virtual function: Has no implementation (= 0), making the class abstract\n• Abstract class: Cannot be instantiated, must be inherited\n\nVirtual function mechanism uses a vtable (virtual table) for dynamic dispatch.',
          codeExamples: [
            {
              title: 'Virtual Functions and Abstract Classes',
              code: '#include <iostream>\n#include <string>\nusing namespace std;\n\n// Abstract base class (has pure virtual function)\nclass Shape {\nprotected:\n    string color;\n\npublic:\n    Shape(string c) : color(c) {}\n    \n    // Virtual function (can be overridden)\n    virtual void displayColor() {\n        cout << "Color: " << color << endl;\n    }\n    \n    // Pure virtual function (makes class abstract)\n    virtual double getArea() = 0;\n    \n    // Virtual destructor (important for proper cleanup)\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n\npublic:\n    Circle(string c, double r) : Shape(c), radius(r) {}\n    \n    double getArea() override {\n        return 3.14159 * radius * radius;\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double length, width;\n\npublic:\n    Rectangle(string c, double l, double w)\n        : Shape(c), length(l), width(w) {}\n    \n    double getArea() override {\n        return length * width;\n    }\n};\n\nint main() {\n    // Shape s;  // Error: cannot instantiate abstract class\n    \n    Shape* shapes[2];\n    shapes[0] = new Circle("Red", 5.0);\n    shapes[1] = new Rectangle("Blue", 4.0, 6.0);\n    \n    for (int i = 0; i < 2; i++) {\n        shapes[i]->displayColor();\n        cout << "Area: " << shapes[i]->getArea() << endl;\n        delete shapes[i];\n    }\n    \n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What keyword makes a function dynamically bound at runtime?',
          options: ['static', 'virtual', 'dynamic', 'abstract'],
          correct: 1
        },
        {
          question: 'A class with a pure virtual function is called:',
          options: ['Virtual class', 'Abstract class', 'Interface class', 'Final class'],
          correct: 1
        },
        {
          question: 'What is operator overloading?',
          options: ['Using too many operators', 'Defining custom behavior for operators', 'Removing operator functions', 'Creating new operators'],
          correct: 1
        }
      ]
    },
    {
      id: 'oop_file_io',
      title: 'File I/O',
      lessons: [
        {
          id: 'oop_fstream',
          title: 'File Streams',
          content: 'C++ provides file handling through the fstream library. The three main classes are:\n\n• ofstream: Output file stream (write to files)\n• ifstream: Input file stream (read from files)\n• fstream: File stream (both read and write)\n\nFile Modes:\n• ios::in — Open for reading\n• ios::out — Open for writing (creates/overwrites file)\n• ios::app — Append mode (writes at end of file)\n• ios::binary — Open in binary mode\n• ios::ate — Seek to end of file on open\n\nAlways close files after operations.',
          codeExamples: [
            {
              title: 'Writing and Reading Files',
              code: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Writing to a file\n    ofstream outFile("students.txt");\n    \n    if (!outFile) {\n        cerr << "Error creating file!" << endl;\n        return 1;\n    }\n    \n    outFile << "Name, Age, GPA" << endl;\n    outFile << "Alice, 20, 3.8" << endl;\n    outFile << "Bob, 22, 3.5" << endl;\n    outFile << "Charlie, 19, 3.9" << endl;\n    \n    outFile.close();\n    cout << "Data written to file successfully" << endl;\n    \n    // Reading from a file\n    ifstream inFile("students.txt");\n    \n    if (!inFile) {\n        cerr << "Error opening file!" << endl;\n        return 1;\n    }\n    \n    string line;\n    cout << "\\nFile contents:" << endl;\n    while (getline(inFile, line)) {\n        cout << line << endl;\n    }\n    \n    inFile.close();\n    \n    return 0;\n}'
            }
          ]
        },
        {
          id: 'oop_file_advanced',
          title: 'Binary Files and File Positioning',
          content: 'Binary files store data in the same format as memory, making them more efficient for complex data types.\n\nFunctions for binary I/O:\n• write(reinterpret_cast<char*>(&data), sizeof(data))\n• read(reinterpret_cast<char*>(&data), sizeof(data))\n\nFile Positioning:\n• tellg() — Get current read position\n• tellp() — Get current write position\n• seekg(position) — Set read position\n• seekp(position) — Set write position\n\nClasses can be written to binary files if they have no pointers or virtual functions (POD types) or with proper serialization.',
          codeExamples: [
            {
              title: 'Binary File Operations',
              code: '#include <iostream>\n#include <fstream>\n#pragma pack(push, 1)  // Ensure exact byte alignment\nusing namespace std;\n\nstruct Student {\n    int id;\n    char name[50];\n    double gpa;\n};\n#pragma pack(pop)\n\nint main() {\n    Student students[3] = {\n        {101, "Alice", 3.8},\n        {102, "Bob", 3.5},\n        {103, "Charlie", 3.9}\n    };\n    \n    // Write binary data\n    ofstream outFile("students.dat", ios::binary);\n    if (!outFile) {\n        cerr << "Error creating binary file!" << endl;\n        return 1;\n    }\n    \n    outFile.write(reinterpret_cast<char*>(students),\n                  sizeof(students));\n    outFile.close();\n    cout << "Binary data written" << endl;\n    \n    // Read binary data\n    Student readStudents[3];\n    ifstream inFile("students.dat", ios::binary);\n    if (!inFile) {\n        cerr << "Error reading binary file!" << endl;\n        return 1;\n    }\n    \n    inFile.read(reinterpret_cast<char*>(readStudents),\n                sizeof(readStudents));\n    inFile.close();\n    \n    // Display read data\n    for (int i = 0; i < 3; i++) {\n        cout << "ID: " << readStudents[i].id\n             << ", Name: " << readStudents[i].name\n             << ", GPA: " << readStudents[i].gpa << endl;\n    }\n    \n    // File positioning example\n    fstream file(\"example.txt\", ios::in | ios::out | ios::trunc);\n    file << "Hello World!";\n    \n    file.seekp(6);  // Move write position to index 6\n    file << "C++";\n    \n    file.seekg(0);  // Move read position to beginning\n    string content;\n    getline(file, content);\n    cout << "Modified: " << content << endl;  // Hello C++!\n    \n    file.close();\n    \n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which class is used for writing to files in C++?',
          options: ['ifstream', 'ofstream', 'fstream', 'filestream'],
          correct: 1
        },
        {
          question: 'What mode should you use to write at the end of a file?',
          options: ['ios::out', 'ios::app', 'ios::ate', 'ios::trunc'],
          correct: 1
        },
        {
          question: 'Which function reads a line from a file into a string?',
          options: ['readline()', 'getline()', 'gets()', 'read()'],
          correct: 1
        }
      ]
    }
  ]
};
