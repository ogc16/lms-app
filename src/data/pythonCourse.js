export const pythonCourse = {
  id: 'python',
  title: 'Python',
  subtitle: 'Learn Python from scratch',
  icon: '🐍',
  color: '#3776AB',
  bgColor: '#E8F0FE',
  description: 'Python is a versatile, high-level programming language known for its readability and simplicity. Perfect for beginners and powerful enough for experts.',
  chapters: [
    {
      id: 'py_intro',
      title: 'Introduction to Python',
      lessons: [
        {
          id: 'py_what_is',
          title: 'What is Python?',
          content: 'Python is an interpreted, object-oriented, high-level programming language created by Guido van Rossum in 1991. It emphasizes code readability with its notable use of significant whitespace.\n\nPython is used for:\n• Web development (Django, Flask)\n• Data science & machine learning\n• Automation & scripting\n• Software prototyping\n• Game development',
          codeExamples: [
            {
              title: 'Your First Python Program',
              code: 'print("Hello, World!")\n\n# This is a comment\nname = "Python"\nprint(f"Welcome to {name}!")'
            }
          ]
        },
        {
          id: 'py_install',
          title: 'Installing Python',
          content: 'To get started with Python:\n\n1. Visit python.org and download the latest version\n2. Run the installer (check "Add Python to PATH")\n3. Open a terminal/command prompt\n4. Type "python --version" to verify installation\n\nYou can also use online environments like Replit or Google Colab to write Python without any installation.',
          codeExamples: [
            {
              title: 'Verify Installation',
              code: '# Run in terminal:\n# python --version\n# Expected output: Python 3.x.x\n\nprint("Python is working!")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Who created Python?',
          options: ['Dennis Ritchie', 'Guido van Rossum', 'Brendan Eich', 'James Gosling'],
          correct: 1
        },
        {
          question: 'What type of language is Python?',
          options: ['Compiled', 'Interpreted', 'Assembly', 'Markup'],
          correct: 1
        },
        {
          question: 'Which of these is NOT a common use of Python?',
          options: ['Web development', 'Data science', 'Operating system kernel', 'Automation'],
          correct: 2
        }
      ]
    },
    {
      id: 'py_basics',
      title: 'Variables & Data Types',
      lessons: [
        {
          id: 'py_variables',
          title: 'Variables',
          content: 'Variables are containers for storing data values. Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.\n\nVariable naming rules:\n• Must start with a letter or underscore\n• Cannot start with a number\n• Can only contain alpha-numeric characters and underscores\n• Case-sensitive (age, Age, AGE are different)',
          codeExamples: [
            {
              title: 'Variable Assignment',
              code: 'name = "Alice"        # string\nage = 25              # integer\nheight = 5.6          # float\nis_student = True     # boolean\n\nprint(name, age, height, is_student)'
            },
            {
              title: 'Multiple Assignment',
              code: 'x, y, z = 1, 2, 3\nprint(x, y, z)  # 1 2 3\n\na = b = c = 0\nprint(a, b, c)  # 0 0 0'
            }
          ]
        },
        {
          id: 'py_types',
          title: 'Data Types',
          content: 'Python has several built-in data types:\n\n• int: Whole numbers (e.g., 42, -7, 0)\n• float: Decimal numbers (e.g., 3.14, -0.5)\n• str: Text (e.g., "Hello", \'World\')\n• bool: True or False\n• list: Ordered collection (e.g., [1, 2, 3])\n• tuple: Immutable ordered collection (e.g., (1, 2))\n• dict: Key-value pairs (e.g., {"name": "Alice"})\n• set: Unordered unique items (e.g., {1, 2, 3})',
          codeExamples: [
            {
              title: 'Working with Types',
              code: '# Check types with type()\nprint(type(42))        # <class \'int\'>\nprint(type(3.14))      # <class \'float\'>\nprint(type("Hello"))   # <class \'str\'>\nprint(type(True))      # <class \'bool\'>\n\n# Type conversion\nx = 5\nprint(float(x))        # 5.0\nprint(str(x))          # "5"\nprint(bool(0))         # False'
            }
          ]
        },
        {
          id: 'py_strings',
          title: 'Strings & Operations',
          content: 'Strings are sequences of characters. Python provides many operations for string manipulation.\n\nString methods include upper(), lower(), split(), join(), replace(), find(), and many more. You can also use slicing to extract parts of a string.',
          codeExamples: [
            {
              title: 'String Operations',
              code: 'text = "Hello, Python!"\n\n# String methods\nprint(text.upper())        # HELLO, PYTHON!\nprint(text.lower())        # hello, python!\nprint(len(text))           # 14\nprint(text.split(","))     # [\'Hello\', \' Python!\']\n\n# Slicing\nprint(text[0:5])           # Hello\nprint(text[-6:])           # Python!\nprint(text[::-1])          # !nohtyP ,olleH'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which of these is a valid variable name?',
          options: ['2ndPlace', 'my-var', '_count', 'class'],
          correct: 2
        },
        {
          question: 'What is the type of 3.14?',
          options: ['int', 'float', 'str', 'double'],
          correct: 1
        },
        {
          question: 'What does "Hello"[::-1] return?',
          options: ['Hello', 'olleH', 'H', 'oH'],
          correct: 1
        }
      ]
    },
    {
      id: 'py_control',
      title: 'Control Flow',
      lessons: [
        {
          id: 'py_if',
          title: 'If/Else Statements',
          content: 'Conditional statements let you execute code based on conditions. Python uses if, elif, and else keywords.\n\nIndentation is crucial in Python - it defines code blocks. Use 4 spaces for each indentation level.',
          codeExamples: [
            {
              title: 'Conditional Statements',
              code: 'age = 18\n\nif age >= 18:\n    print("You are an adult")\nelif age >= 13:\n    print("You are a teenager")\nelse:\n    print("You are a child")\n\n# Ternary operator\nstatus = "Adult" if age >= 18 else "Minor"\nprint(status)'
            }
          ]
        },
        {
          id: 'py_loops',
          title: 'Loops',
          content: 'Loops allow you to execute code repeatedly. Python has two types of loops:\n\n• for loop: Iterates over a sequence (list, string, range, etc.)\n• while loop: Repeats while a condition is True\n\nThe break statement exits the loop, and continue skips to the next iteration.',
          codeExamples: [
            {
              title: 'For Loop',
              code: '# Loop through a list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)\n\n# Using range()\nfor i in range(5):\n    print(i, end=" ")  # 0 1 2 3 4\n\n# While loop\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the correct indentation in Python?',
          options: ['2 spaces', '4 spaces', '1 tab', 'Any of the above, as long as consistent'],
          correct: 3
        },
        {
          question: 'What does range(3) produce?',
          options: ['[1, 2, 3]', '[0, 1, 2]', '[0, 1, 2, 3]', '[1, 2]'],
          correct: 1
        }
      ]
    },
    {
      id: 'py_functions',
      title: 'Functions',
      lessons: [
        {
          id: 'py_def',
          title: 'Defining Functions',
          content: 'Functions are reusable blocks of code that perform a specific task. Define them with the def keyword. Functions can take parameters and return values using the return statement.',
          codeExamples: [
            {
              title: 'Basic Functions',
              code: 'def greet(name):\n    """This is a docstring - explains the function"""\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))  # Hello, Alice!\n\n# Default parameters\ndef power(base, exp=2):\n    return base ** exp\n\nprint(power(3))     # 9\nprint(power(3, 3))  # 27'
            },
            {
              title: 'Multiple Returns',
              code: 'def analyze(numbers):\n    total = sum(numbers)\n    avg = total / len(numbers)\n    maximum = max(numbers)\n    minimum = min(numbers)\n    return total, avg, maximum, minimum\n\nresult = analyze([10, 20, 30, 40])\nprint(result)  # (100, 25.0, 40, 10)'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What keyword is used to define a function?',
          options: ['function', 'def', 'func', 'define'],
          correct: 1
        },
        {
          question: 'What does a function return if no return statement is used?',
          options: ['0', 'False', 'None', 'undefined'],
          correct: 2
        }
      ]
    },
    {
      id: 'py_lists',
      title: 'Lists & Dictionaries',
      lessons: [
        {
          id: 'py_lists_detailed',
          title: 'Lists',
          content: 'Lists are ordered, mutable collections. They can hold items of different types. Lists are created with square brackets [] and are zero-indexed.\n\nCommon list methods: append(), insert(), remove(), pop(), sort(), reverse().',
          codeExamples: [
            {
              title: 'List Operations',
              code: 'numbers = [3, 1, 4, 1, 5]\nnumbers.append(9)\nnumbers.sort()\nprint(numbers)  # [1, 1, 3, 4, 5, 9]\n\n# List comprehension\nsquares = [x**2 for x in range(5)]\nprint(squares)  # [0, 1, 4, 9, 16]\n\n# Slicing lists\nprint(numbers[1:4])  # [1, 3, 4]'
            }
          ]
        },
        {
          id: 'py_dicts',
          title: 'Dictionaries',
          content: 'Dictionaries store key-value pairs. Keys must be unique and immutable (strings, numbers, tuples). Values can be any type. Dictionaries are created with curly braces {}.',
          codeExamples: [
            {
              title: 'Dictionary Operations',
              code: 'student = {\n    "name": "Alice",\n    "age": 20,\n    "grades": [85, 92, 78]\n}\n\nprint(student["name"])        # Alice\nprint(student.get("gpa", 0))  # 0 (default)\n\n# Add/update\nstudent["gpa"] = 3.5\n\n# Loop through\nfor key, value in student.items():\n    print(f"{key}: {value}")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'How do you add an item to the end of a list?',
          options: ['list.add()', 'list.push()', 'list.append()', 'list.insert()'],
          correct: 2
        },
        {
          question: 'What does [x*2 for x in [1,2,3]] return?',
          options: ['[1,2,3,1,2,3]', '[2,4,6]', '[[1,2],[2,4],[3,6]]', 'Error'],
          correct: 1
        }
      ]
    },
    {
      id: 'py_oop',
      title: 'Object-Oriented Programming',
      lessons: [
        {
          id: 'py_classes',
          title: 'Classes & Objects',
          content: 'Python supports object-oriented programming. Classes are blueprints for creating objects. The __init__ method is the constructor, called when creating a new object. self refers to the current instance.',
          codeExamples: [
            {
              title: 'Basic Class',
              code: 'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        return f"{self.name} says Woof!"\n    \n    def __str__(self):\n        return f"Dog({self.name}, {self.age})"\n\nmy_dog = Dog("Buddy", 3)\nprint(my_dog.bark())   # Buddy says Woof!\nprint(my_dog)           # Dog(Buddy, 3)'
            },
            {
              title: 'Inheritance',
              code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        pass\n\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name} says Meow!"\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says Woof!"\n\nanimals = [Cat("Kitty"), Dog("Buddy")]\nfor a in animals:\n    print(a.speak())'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does "self" refer to in a class method?',
          options: ['The class itself', 'The current instance', 'The parent class', 'A global variable'],
          correct: 1
        },
        {
          question: 'Which method is the constructor in Python?',
          options: ['__init__', '__construct', '__new__', 'init'],
          correct: 0
        }
      ]
    },
    {
      id: 'py_advanced',
      title: 'Advanced Topics',
      lessons: [
        {
          id: 'py_lambda',
          title: 'Lambda Functions',
          content: 'Lambda functions are small, anonymous functions defined with the lambda keyword. They can take any number of arguments but only have one expression. Perfect for simple operations used temporarily.',
          codeExamples: [
            {
              title: 'Lambda Examples',
              code: '# Basic lambda\nsquare = lambda x: x ** 2\nprint(square(5))  # 25\n\n# With map\nnumbers = [1, 2, 3, 4]\ndoubled = list(map(lambda x: x * 2, numbers))\nprint(doubled)  # [2, 4, 6, 8]\n\n# With filter\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(evens)  # [2, 4]'
            }
          ]
        },
        {
          id: 'py_files',
          title: 'File Handling',
          content: 'Python makes file I/O easy with the built-in open() function. Always use the with statement to ensure files are properly closed after operations.',
          codeExamples: [
            {
              title: 'Reading & Writing Files',
              code: '# Writing to a file\nwith open("example.txt", "w") as f:\n    f.write("Hello, File!\\n")\n    f.write("This is line 2")\n\n# Reading from a file\nwith open("example.txt", "r") as f:\n    content = f.read()\n    print(content)\n    \n# Reading line by line\nwith open("example.txt", "r") as f:\n    for line in f:\n        print(line.strip())'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What keyword is used to create a lambda function?',
          options: ['fn', 'lambda', 'function', 'arrow'],
          correct: 1
        },
        {
          question: 'What does the with statement do when opening files?',
          options: ['Locks the file', 'Auto-closes the file', 'Encrypts the file', 'Checks permissions'],
          correct: 1
        }
      ]
    }
  ]
};
