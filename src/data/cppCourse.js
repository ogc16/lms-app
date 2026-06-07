export const cppCourse = {
  id: 'cpp',
  title: 'C++',
  subtitle: 'Master C++ programming',
  icon: '⚡',
  color: '#00599C',
  bgColor: '#E3F2FD',
  description: 'C++ is a powerful, high-performance programming language used for system programming, game development, and applications where speed matters.',
  chapters: [
    {
      id: 'cpp_intro',
      title: 'Introduction to C++',
      lessons: [
        {
          id: 'cpp_what_is',
          title: 'What is C++?',
          content: 'C++ is a compiled, general-purpose programming language created by Bjarne Stroustrup in 1985. It extends C with object-oriented features while maintaining high performance.\n\nC++ is used for:\n• Game engines (Unreal Engine)\n• Operating systems\n• Web browsers\n• Financial systems\n• Embedded systems\n\nC++ gives you fine-grained control over memory and hardware.',
          codeExamples: [
            {
              title: 'Your First C++ Program',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}'
            }
          ]
        },
        {
          id: 'cpp_setup',
          title: 'Setting Up C++',
          content: 'To compile and run C++ programs:\n\n1. Install a compiler (g++ for MinGW on Windows, Xcode on Mac, or g++ on Linux)\n2. Write code in a .cpp file\n3. Compile: g++ program.cpp -o program\n4. Run: ./program (or program.exe on Windows)\n\nOnline options: Replit, OnlineGDB, Compiler Explorer.',
          codeExamples: [
            {
              title: 'Compilation Steps',
              code: '# Step 1: Write code in hello.cpp\n# Step 2: Compile\n# g++ hello.cpp -o hello\n#\n# Step 3: Run\n# ./hello\n#\n# Output: Hello, World!'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Who created C++?',
          options: ['Dennis Ritchie', 'Bjarne Stroustrup', 'Brendan Eich', 'James Gosling'],
          correct: 1
        },
        {
          question: 'What kind of language is C++?',
          options: ['Interpreted', 'Compiled', 'Scripting', 'Markup'],
          correct: 1
        },
        {
          question: 'What header is needed for input/output in C++?',
          options: ['<stdio.h>', '<iostream>', '<io.h>', '<console>'],
          correct: 1
        }
      ]
    },
    {
      id: 'cpp_basics',
      title: 'Variables & Data Types',
      lessons: [
        {
          id: 'cpp_variables',
          title: 'Variables',
          content: 'In C++, variables must be declared with a type before use. C++ is statically typed - once a variable\'s type is set, it cannot change.\n\nBasic syntax: type variableName = value;\n\nCommon integer types: int, short, long, long long\nUnsigned variants: unsigned int, etc.',
          codeExamples: [
            {
              title: 'Variable Declaration',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    double price = 19.99;\n    char grade = \'A\';\n    bool isPassed = true;\n    string name = "Alice";\n    \n    cout << name << " is " << age << " years old" << endl;\n    return 0;\n}'
            }
          ]
        },
        {
          id: 'cpp_types',
          title: 'Data Types & Sizes',
          content: 'C++ provides several fundamental data types:\n\n• int: 4 bytes (-2B to 2B)\n• double: 8 bytes (floating-point)\n• float: 4 bytes (smaller precision)\n• char: 1 byte (single character)\n• bool: 1 byte (true/false)\n• string: Variable (text, from <string>)\n\nUse sizeof() to check type sizes on your system.',
          codeExamples: [
            {
              title: 'Type Sizes',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "int size: " << sizeof(int) << " bytes" << endl;\n    cout << "double size: " << sizeof(double) << " bytes" << endl;\n    cout << "char size: " << sizeof(char) << " byte" << endl;\n    cout << "bool size: " << sizeof(bool) << " byte" << endl;\n    return 0;\n}'
            }
          ]
        },
        {
          id: 'cpp_const',
          title: 'Constants & Type Modifiers',
          content: 'Use const to create unchangeable variables. Type modifiers (short, long, unsigned, signed) adjust the range and behavior of basic types.\n\nconst: The value cannot be changed after initialization.\n\nType conversion can be implicit (automatic) or explicit (casting).',
          codeExamples: [
            {
              title: 'Constants & Casting',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    const double PI = 3.14159;\n    // PI = 3.14;  // ERROR: can\'t modify const\n    \n    // Type casting\n    double d = 3.7;\n    int i = (int)d;  // C-style cast: 3\n    int j = static_cast<int>(d);  // C++ cast: 3\n    \n    cout << i << " " << j << endl;\n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What keyword prevents a variable from being modified?',
          options: ['static', 'const', 'final', 'readonly'],
          correct: 1
        },
        {
          question: 'What is the size of an int typically?',
          options: ['2 bytes', '4 bytes', '8 bytes', 'Depends on system'],
          correct: 3
        },
        {
          question: 'Which is NOT a valid C++ type?',
          options: ['int', 'double', 'string', 'number'],
          correct: 3
        }
      ]
    },
    {
      id: 'cpp_control',
      title: 'Control Flow',
      lessons: [
        {
          id: 'cpp_if',
          title: 'If/Else Statements',
          content: 'Conditional statements control program flow. C++ supports if, else if, else, and the ternary operator.\n\nComparison operators: ==, !=, <, >, <=, >=\nLogical operators: && (AND), || (OR), ! (NOT)',
          codeExamples: [
            {
              title: 'Conditional Statements',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 85;\n    \n    if (score >= 90) {\n        cout << "Grade: A" << endl;\n    } else if (score >= 80) {\n        cout << "Grade: B" << endl;\n    } else if (score >= 70) {\n        cout << "Grade: C" << endl;\n    } else {\n        cout << "Grade: F" << endl;\n    }\n    \n    // Ternary operator\n    string status = (score >= 60) ? "Pass" : "Fail";\n    cout << status << endl;\n    \n    return 0;\n}'
            }
          ]
        },
        {
          id: 'cpp_loops',
          title: 'Loops',
          content: 'C++ has three types of loops:\n\n• for: When you know the number of iterations\n• while: When you continue while a condition is true\n• do-while: Executes at least once, then checks condition\n\nUse break to exit early, continue to skip to next iteration.',
          codeExamples: [
            {
              title: 'Loop Examples',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // For loop\n    for (int i = 0; i < 5; i++) {\n        cout << i << " ";\n    }\n    cout << endl;  // 0 1 2 3 4\n    \n    // While loop\n    int count = 0;\n    while (count < 3) {\n        cout << count << " ";\n        count++;\n    }\n    cout << endl;  // 0 1 2\n    \n    // Do-while loop\n    int x = 0;\n    do {\n        cout << x << " ";\n        x++;\n    } while (x < 3);\n    cout << endl;  // 0 1 2\n    \n    return 0;\n}'
            }
          ]
        },
        {
          id: 'cpp_switch',
          title: 'Switch Statement',
          content: 'The switch statement is an alternative to multiple if-else chains when comparing a single variable against constant values. Each case must end with break to prevent fall-through.',
          codeExamples: [
            {
              title: 'Switch Example',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int day = 3;\n    \n    switch (day) {\n        case 1:\n            cout << "Monday" << endl;\n            break;\n        case 2:\n            cout << "Tuesday" << endl;\n            break;\n        case 3:\n            cout << "Wednesday" << endl;\n            break;\n        case 4:\n            cout << "Thursday" << endl;\n            break;\n        case 5:\n            cout << "Friday" << endl;\n            break;\n        default:\n            cout << "Weekend!" << endl;\n    }\n    \n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does the break statement do in a switch?',
          options: ['Exits the switch', 'Restarts the switch', 'Skips the next case', 'Throws an error'],
          correct: 0
        },
        {
          question: 'Which loop always executes at least once?',
          options: ['for', 'while', 'do-while', 'All of them'],
          correct: 2
        }
      ]
    },
    {
      id: 'cpp_functions',
      title: 'Functions',
      lessons: [
        {
          id: 'cpp_func_def',
          title: 'Function Basics',
          content: 'Functions in C++ must be declared with a return type, name, and parameters. The function body contains the code to execute.\n\nSyntax: returnType functionName(parameters) { body }\n\nFunctions must be declared before use, or you can use a forward declaration (prototype).',
          codeExamples: [
            {
              title: 'Functions in C++',
              code: '#include <iostream>\nusing namespace std;\n\n// Function declaration (prototype)\nint add(int a, int b);\n\nint main() {\n    int sum = add(5, 3);\n    cout << "Sum: " << sum << endl;  // 8\n    return 0;\n}\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}'
            },
            {
              title: 'Default Parameters & Overloading',
              code: '#include <iostream>\nusing namespace std;\n\n// Default parameter\nint multiply(int a, int b = 2) {\n    return a * b;\n}\n\n// Function overloading\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}\n\ndouble max(double a, double b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    cout << multiply(5) << endl;    // 10\n    cout << multiply(5, 3) << endl; // 15\n    cout << max(3, 7) << endl;      // 7\n    cout << max(3.5, 2.1) << endl;  // 3.5\n    return 0;\n}'
            }
          ]
        },
        {
          id: 'cpp_pass',
          title: 'Pass by Reference',
          content: 'By default, C++ passes arguments by value (a copy is made). To modify the original variable inside a function, use pass-by-reference with the & symbol. This is more efficient for large objects.',
          codeExamples: [
            {
              title: 'Pass by Reference',
              code: '#include <iostream>\nusing namespace std;\n\n// Pass by reference\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    \n    cout << "Before: " << x << " " << y << endl;\n    \n    swap(x, y);\n    \n    cout << "After: " << x << " " << y << endl;\n    \n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is function overloading?',
          options: ['Multiple functions with same name but different parameters', 'A function calling itself', 'A function with no return type', 'A function with default values'],
          correct: 0
        },
        {
          question: 'What symbol is used for pass-by-reference?',
          options: ['*', '&', '@', '#'],
          correct: 1
        }
      ]
    },
    {
      id: 'cpp_arrays',
      title: 'Arrays & Strings',
      lessons: [
        {
          id: 'cpp_arrays_detailed',
          title: 'Arrays',
          content: 'Arrays store multiple values of the same type in contiguous memory. Array size must be known at compile time (fixed size) unless using dynamic allocation.\n\nArrays are zero-indexed. C++ does not perform bounds checking - accessing out-of-bounds elements is undefined behavior.',
          codeExamples: [
            {
              title: 'Array Operations',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Declaration and initialization\n    int numbers[5] = {10, 20, 30, 40, 50};\n    \n    // Access elements\n    cout << "First: " << numbers[0] << endl;\n    \n    // Loop through array\n    for (int i = 0; i < 5; i++) {\n        cout << numbers[i] << " ";\n    }\n    cout << endl;\n    \n    // 2D array\n    int matrix[2][3] = {{1,2,3}, {4,5,6}};\n    \n    // Range-based for loop (C++11)\n    for (int num : numbers) {\n        cout << num << " ";\n    }\n    \n    return 0;\n}'
            }
          ]
        },
        {
          id: 'cpp_strings_detailed',
          title: 'Strings',
          content: 'C++ offers two string types: C-style strings (char arrays) and the string class from <string>. The string class is easier and safer to use.\n\nStrings support concatenation (+), comparison (==, !=, <), and many useful methods.',
          codeExamples: [
            {
              title: 'String Operations',
              code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name = "Alice";\n    string greeting = "Hello, " + name + "!";\n    \n    cout << greeting << endl;  // Hello, Alice!\n    cout << "Length: " << name.length() << endl;  // 5\n    cout << "Substring: " << name.substr(0, 3) << endl;  // Ali\n    \n    // Find\n    size_t pos = greeting.find("Alice");\n    if (pos != string::npos) {\n        cout << "Found at position " << pos << endl;\n    }\n    \n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the index of the first element in an array?',
          options: ['-1', '0', '1', 'It depends'],
          correct: 1
        },
        {
          question: 'What header is needed for the string class?',
          options: ['<cstring>', '<string>', '<text>', '<char>'],
          correct: 1
        }
      ]
    },
    {
      id: 'cpp_oop',
      title: 'Object-Oriented Programming',
      lessons: [
        {
          id: 'cpp_classes',
          title: 'Classes & Objects',
          content: 'Classes are the foundation of OOP in C++. A class is a blueprint for creating objects. It contains data members (attributes) and member functions (methods).\n\nAccess specifiers: public, private, protected.\nThe constructor is called when an object is created.',
          codeExamples: [
            {
              title: 'Basic Class',
              code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Dog {\nprivate:\n    string name;\n    int age;\n\npublic:\n    // Constructor\n    Dog(string n, int a) : name(n), age(a) {}\n    \n    void bark() {\n        cout << name << " says Woof!" << endl;\n    }\n    \n    int getAge() { return age; }\n    void setAge(int a) { age = a; }\n};\n\nint main() {\n    Dog myDog("Buddy", 3);\n    myDog.bark();  // Buddy says Woof!\n    return 0;\n}'
            },
            {
              title: 'Inheritance',
              code: '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    string name;\n    virtual void speak() {\n        cout << "..." << endl;\n    }\n};\n\nclass Cat : public Animal {\npublic:\n    void speak() override {\n        cout << name << " says Meow!" << endl;\n    }\n};\n\nint main() {\n    Cat cat;\n    cat.name = "Kitty";\n    cat.speak();\n    return 0;\n}'
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
          question: 'Which symbol is used for inheritance?',
          options: [':', '::', '->', 'extends'],
          correct: 0
        }
      ]
    },
    {
      id: 'cpp_pointers',
      title: 'Pointers & Memory',
      lessons: [
        {
          id: 'cpp_pointers_basic',
          title: 'Pointers',
          content: 'Pointers store memory addresses. They are powerful but require careful handling. The * operator declares a pointer and dereferences it. The & operator gets the address of a variable.\n\nPointers are used for:\n• Dynamic memory allocation\n• Passing large objects efficiently\n• Building data structures (linked lists, trees)',
          codeExamples: [
            {
              title: 'Pointer Basics',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int value = 42;\n    int* ptr = &value;  // ptr holds the address of value\n    \n    cout << "Value: " << value << endl;        // 42\n    cout << "Address: " << &value << endl;\n    cout << "Pointer: " << ptr << endl;         // same address\n    cout << "Dereference: " << *ptr << endl;    // 42\n    \n    // Modify through pointer\n    *ptr = 100;\n    cout << "New value: " << value << endl;    // 100\n    \n    return 0;\n}'
            },
            {
              title: 'Dynamic Memory',
              code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Dynamic allocation\n    int* arr = new int[5];\n    \n    for (int i = 0; i < 5; i++) {\n        arr[i] = i * 10;\n    }\n    \n    for (int i = 0; i < 5; i++) {\n        cout << arr[i] << " ";  // 0 10 20 30 40\n    }\n    \n    // MUST free dynamically allocated memory\n    delete[] arr;\n    \n    return 0;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does the & operator do when applied to a variable?',
          options: ['Dereferences', 'Gets address', 'Gets value', 'Negates'],
          correct: 1
        },
        {
          question: 'What keyword releases dynamically allocated memory?',
          options: ['free', 'delete', 'release', 'dealloc'],
          correct: 1
        }
      ]
    }
  ]
};
