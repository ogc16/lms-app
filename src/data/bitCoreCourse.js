export const bitCoreCourse = {
  id: 'bit_core',
  title: 'BIT Core Units',
  subtitle: 'Foundation computing courses',
  icon: '🎓',
  color: '#6C3483',
  bgColor: '#F4ECF7',
  description: 'Core units from the Bachelor of Information Technology program covering programming, mathematics, networking, and web development.',
  chapters: [
    {
      id: 'bit_app_prog',
      title: 'Application Programming I (BIT 2118)',
      lessons: [
        {
          id: 'bit_app_intro',
          title: 'Introduction to Application Programming',
          content: 'Application programming focuses on creating software applications that solve real-world problems. This unit introduces fundamental programming concepts using a high-level language.\n\nKey topics:\n• Program structure and syntax\n• Variables, data types, and operators\n• Control structures (sequence, selection, iteration)\n• Input/output operations\n• Basic debugging techniques\n\nUnderstanding these fundamentals is essential for building more complex applications in later units.',
          codeExamples: [
            {
              title: 'Basic Program Structure',
              code: '#include <stdio.h>\n\nint main() {\n    // Variable declaration\n    int age = 20;\n    float height = 1.75;\n    char grade = \'A\';\n    \n    // Input and output\n    printf("Age: %d\\n", age);\n    printf("Height: %.2f\\n", height);\n    printf("Grade: %c\\n", grade);\n    \n    return 0;\n}'
            }
          ]
        },
        {
          id: 'bit_app_functions',
          title: 'Functions and Modular Programming',
          content: 'Functions break programs into smaller, reusable pieces. Modular programming improves code organization, readability, and maintainability.\n\nFunction concepts:\n• Function definition and declaration\n• Parameters and arguments\n• Return values\n• Scope and lifetime of variables\n• Recursion\n\nGood practice: each function should do one thing well (single responsibility principle).',
          codeExamples: [
            {
              title: 'Functions Example',
              code: '#include <stdio.h>\n\n// Function declaration\nint add(int a, int b);\nint factorial(int n);\n\nint main() {\n    int sum = add(5, 3);\n    printf("Sum: %d\\n", sum);\n    printf("Factorial of 5: %d\\n", factorial(5));\n    return 0;\n}\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the purpose of a function in programming?',
          options: ['Store data', 'Break code into reusable pieces', 'Display output', 'Declare variables'],
          correct: 1
        },
        {
          question: 'Which symbol is used for assignment in most languages?',
          options: ['==', '=', ':=', '->'],
          correct: 1
        }
      ]
    },
    {
      id: 'bit_calculus',
      title: 'Calculus II (SMA 2102)',
      lessons: [
        {
          id: 'bit_calc_intro',
          title: 'Review of Calculus I',
          content: 'Calculus II builds on differentiation and integration concepts from Calculus I. A solid review is essential.\n\nKey review topics:\n• Limits and continuity\n• Derivatives: power rule, product rule, quotient rule, chain rule\n• Indefinite and definite integrals\n• Fundamental Theorem of Calculus\n\nMastery of these topics is required before tackling sequences, series, and multivariable calculus.',
          codeExamples: [
            {
              title: 'Numerical Integration',
              code: '# Python demonstration of numerical integration\nimport math\n\ndef f(x):\n    return x ** 2 + 2 * x + 1\n\ndef trapezoidal_rule(a, b, n):\n    h = (b - a) / n\n    result = (f(a) + f(b)) / 2\n    for i in range(1, n):\n        result += f(a + i * h)\n    return result * h\n\narea = trapezoidal_rule(0, 2, 100)\nprint(f"Approximate area: {area:.4f}")\n# Exact: [x^3/3 + x^2 + x]_0^2 = 8/3 + 4 + 2 = 8.6667'
            }
          ]
        },
        {
          id: 'bit_calc_series',
          title: 'Sequences and Series',
          content: 'Sequences and series are fundamental concepts in calculus that deal with ordered lists of numbers and their sums.\n\nTopics covered:\n• Arithmetic and geometric sequences\n• Convergence and divergence tests\n• Power series\n• Taylor and Maclaurin series\n• Applications in approximation\n\nSeries are used extensively in computer science for algorithm analysis and numerical methods.',
          codeExamples: [
            {
              title: 'Taylor Series Approximation',
              code: 'import math\n\ndef taylor_exp(x, terms=5):\n    """Approximate e^x using Taylor series"""\n    result = 0\n    for n in range(terms):\n        result += (x ** n) / math.factorial(n)\n    return result\n\nx = 1.0\napprox = taylor_exp(x, 8)\nexact = math.exp(x)\nprint(f"e^{x} ≈ {approx:.6f}")\nprint(f"e^{x} = {exact:.6f}")\nprint(f"Error: {abs(exact - approx):.6f}")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the Fundamental Theorem of Calculus?',
          options: ['Links derivatives and integrals', 'Defines limits', 'Proves continuity', 'Solves polynomials'],
          correct: 0
        },
        {
          question: 'Which test determines if an infinite series converges?',
          options: ['Derivative test', 'Ratio test', 'Polynomial test', 'Matrix test'],
          correct: 1
        }
      ]
    },
    {
      id: 'bit_dsa',
      title: 'Data Structures and Algorithms (ICS 2105)',
      lessons: [
        {
          id: 'bit_dsa_intro',
          title: 'Introduction to Data Structures',
          content: 'Data structures organize and store data efficiently. Choosing the right data structure is critical for algorithm performance.\n\nFundamental data structures:\n• Arrays - Contiguous memory, O(1) access\n• Linked Lists - Dynamic size, O(n) access\n• Stacks - LIFO, push/pop O(1)\n• Queues - FIFO, enqueue/dequeue O(1)\n• Trees - Hierarchical data\n• Graphs - Network relationships\n• Hash Tables - Key-value storage, O(1) average\n\nTime complexity is measured using Big O notation.',
          codeExamples: [
            {
              title: 'Stack Implementation',
              code: 'class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        self.items.append(item)\n    \n    def pop(self):\n        if not self.is_empty():\n            return self.items.pop()\n        return None\n    \n    def peek(self):\n        if not self.is_empty():\n            return self.items[-1]\n        return None\n    \n    def is_empty(self):\n        return len(self.items) == 0\n\ns = Stack()\ns.push(1); s.push(2); s.push(3)\nprint(s.pop())  # 3\nprint(s.peek()) # 2'
            }
          ]
        },
        {
          id: 'bit_dsa_algo',
          title: 'Sorting and Searching Algorithms',
          content: 'Sorting and searching are fundamental algorithmic operations with many practical applications.\n\nSorting algorithms:\n• Bubble Sort - O(n²), simple but inefficient\n• Selection Sort - O(n²)\n• Insertion Sort - O(n²), good for small datasets\n• Merge Sort - O(n log n), divide and conquer\n• Quick Sort - O(n log n) average, O(n²) worst\n\nSearching algorithms:\n• Linear Search - O(n)\n• Binary Search - O(log n), requires sorted data\n\nAlgorithm choice depends on data size, structure, and requirements.',
          codeExamples: [
            {
              title: 'Binary Search',
              code: 'def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    \n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    \n    return -1\n\ndata = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72]\nresult = binary_search(data, 23)\nprint(f"Found at index: {result}")  # 5\nprint(f"Time: O(log n) = O(log {len(data)})")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the time complexity of Binary Search?',
          options: ['O(n)', 'O(n²)', 'O(log n)', 'O(n log n)'],
          correct: 2
        },
        {
          question: 'Which data structure operates on LIFO principle?',
          options: ['Queue', 'Stack', 'Array', 'Tree'],
          correct: 1
        }
      ]
    },
    {
      id: 'bit_digital_logic',
      title: 'Digital Logic (ICS 2205)',
      lessons: [
        {
          id: 'bit_dl_intro',
          title: 'Number Systems and Logic Gates',
          content: 'Digital logic forms the foundation of all digital computing systems. Understanding number systems and logic gates is essential.\n\nNumber systems:\n• Binary (base-2) - Used by computers\n• Octal (base-8)\n• Decimal (base-10) - Human use\n• Hexadecimal (base-16) - Memory addressing\n\nBasic logic gates:\n• AND - Output 1 only if all inputs are 1\n• OR - Output 1 if at least one input is 1\n• NOT - Inverts input\n• NAND - NOT AND\n• NOR - NOT OR\n• XOR - Output 1 if inputs differ\n• XNOR - Output 1 if inputs are same',
          codeExamples: [
            {
              title: 'Logic Gate Simulation',
              code: 'def AND(a, b): return a & b\ndef OR(a, b): return a | b\ndef NOT(a): return 1 - a\ndef NAND(a, b): return NOT(AND(a, b))\ndef NOR(a, b): return NOT(OR(a, b))\ndef XOR(a, b): return a ^ b\n\nprint("Truth Table for XOR:")\nprint("A B | Q")\nfor a in [0, 1]:\n    for b in [0, 1]:\n        print(f"{a} {b} | {XOR(a, b)}")'
            }
          ]
        },
        {
          id: 'bit_dl_circuits',
          title: 'Combinational and Sequential Circuits',
          content: 'Digital circuits are categorized into combinational and sequential circuits.\n\nCombinational circuits:\n• Output depends only on current inputs\n• Examples: adders, multiplexers, decoders, encoders\n• No memory element\n\nSequential circuits:\n• Output depends on current inputs and previous state\n• Examples: flip-flops, registers, counters\n• Have memory elements (feedback loops)\n\nFlip-flop types: SR, D, JK, T - each with different characteristic tables.',
          codeExamples: [
            {
              title: 'Half Adder Circuit',
              code: '# Half Adder: adds two bits\n# Sum = A XOR B\n# Carry = A AND B\n\ndef half_adder(a, b):\n    sum_bit = a ^ b\n    carry = a & b\n    return sum_bit, carry\n\nprint("Half Adder Truth Table:")\nprint("A B | Sum Carry")\nfor a in [0, 1]:\n    for b in [0, 1]:\n        s, c = half_adder(a, b)\n        print(f"{a} {b} |  {s}    {c}")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the base of the hexadecimal number system?',
          options: ['2', '8', '10', '16'],
          correct: 3
        },
        {
          question: 'Which circuit type has memory elements?',
          options: ['Combinational', 'Sequential', 'Logic gates', 'Multiplexer'],
          correct: 1
        }
      ]
    },
    {
      id: 'bit_networking',
      title: 'Network Systems Administration (BIT 2204)',
      lessons: [
        {
          id: 'bit_net_intro',
          title: 'Network Fundamentals',
          content: 'Network systems administration covers the design, implementation, and management of computer networks.\n\nOSI Model (7 layers):\n7. Application - HTTP, FTP, SMTP\n6. Presentation - Encryption, compression\n5. Session - Session management\n4. Transport - TCP, UDP\n3. Network - IP, routing\n2. Data Link - MAC addresses, switching\n1. Physical - Cables, signals\n\nTCP/IP Model (4 layers): Application, Transport, Internet, Network Access.\n\nIPv4 addresses are 32-bit, written in dotted decimal notation (e.g., 192.168.1.1).',
          codeExamples: [
            {
              title: 'Subnet Calculator',
              code: 'def subnet_mask(prefix):\n    """Calculate subnet mask from CIDR prefix"""\n    mask = (0xFFFFFFFF << (32 - prefix)) & 0xFFFFFFFF\n    octets = []\n    for i in range(4):\n        octets.append(str((mask >> (24 - 8 * i)) & 0xFF))\n    return ".".join(octets)\n\ndef network_address(ip, prefix):\n    octets = [int(x) for x in ip.split(".")]\n    ip_int = sum(o << (24 - 8 * i) for i, o in enumerate(octets))\n    mask = (0xFFFFFFFF << (32 - prefix)) & 0xFFFFFFFF\n    network = ip_int & mask\n    return ".".join(str((network >> (24 - 8 * i)) & 0xFF) for i in range(4))\n\nprint(f"Subnet mask /24: {subnet_mask(24)}")\nprint(f"Network: {network_address(\'192.168.1.55\', 24)}")'
            }
          ]
        },
        {
          id: 'bit_net_admin',
          title: 'Network Administration and Services',
          content: 'Network administration involves configuring, maintaining, and troubleshooting network services.\n\nCommon network services:\n• DHCP - Dynamic IP address assignment\n• DNS - Domain name resolution\n• HTTP/HTTPS - Web services\n• SMTP/IMAP/POP3 - Email services\n• FTP/SFTP - File transfer\n• SSH - Remote administration\n\nAdministration tasks:\n• User and group management\n• Network monitoring (SNMP)\n• Backup and recovery\n• Security policy enforcement\n• Performance tuning\n\nTools: Wireshark, nmap, ping, traceroute, netstat, iptables.',
          codeExamples: [
            {
              title: 'Network Diagnostics',
              code: 'import subprocess\nimport platform\n\ndef ping_host(host, count=4):\n    param = "-n" if platform.system().lower() == "windows" else "-c"\n    command = ["ping", param, str(count), host]\n    try:\n        result = subprocess.run(command, capture_output=True, text=True, timeout=10)\n        return result.returncode == 0\n    except:\n        return False\n\ndef trace_route(host):\n    command = ["tracert" if platform.system().lower() == "windows" else "traceroute", host]\n    print(f"Tracing route to {host}...")\n    # Actual execution would show hops\n    print("Hop 1: 192.168.1.1 (Gateway)")\n    print("Hop 2: 10.0.0.1 (ISP)")\n    print(f"Hop 3: {host} (Destination)")\n\ntrace_route("example.com")\nprint(f"\\nPing status: {\'Up\' if ping_host(\'8.8.8.8\', 2) else \'Down\'}")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which layer of the OSI model handles routing?',
          options: ['Physical', 'Data Link', 'Network', 'Transport'],
          correct: 2
        },
        {
          question: 'What protocol is used for automatic IP address assignment?',
          options: ['DNS', 'DHCP', 'HTTP', 'FTP'],
          correct: 1
        }
      ]
    },
    {
      id: 'bit_oop',
      title: 'Object Oriented Programming II (ICS 2201)',
      lessons: [
        {
          id: 'bit_oop_intro',
          title: 'OOP Principles',
          content: 'Object-Oriented Programming builds on OOP I concepts with advanced features.\n\nFour pillars of OOP:\n• Encapsulation - Bundling data and methods, hiding internal state\n• Inheritance - Creating new classes from existing ones\n• Polymorphism - Same interface, different implementations\n• Abstraction - Hiding complex implementation details\n\nAdditional concepts:\n• Abstract classes and interfaces\n• Virtual functions and method overriding\n• Static and dynamic binding\n• Design patterns introduction',
          codeExamples: [
            {
              title: 'Polymorphism Example',
              code: 'from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n    \n    def describe(self):\n        return f"Area: {self.area():.2f}"\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return 3.14159 * self.radius ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):\n        return self.width * self.height\n\nshapes = [Circle(5), Rectangle(4, 6)]\nfor shape in shapes:\n    print(f"{shape.__class__.__name__}: {shape.describe()}")'
            }
          ]
        },
        {
          id: 'bit_oop_adv',
          title: 'Advanced OOP Concepts',
          content: 'Advanced OOP concepts are essential for building robust, scalable applications.\n\nTopics covered:\n• Exception handling - try/catch/finally\n• Generic programming / Templates\n• Operator overloading\n• Multiple inheritance and the diamond problem\n• Composition vs Inheritance\n• SOLID principles\n  - Single Responsibility\n  - Open/Closed\n  - Liskov Substitution\n  - Interface Segregation\n  - Dependency Inversion\n\nUnderstanding design patterns (Singleton, Factory, Observer, Strategy) is crucial for professional development.',
          codeExamples: [
            {
              title: 'Exception Handling',
              code: 'class InsufficientFundsError(Exception):\n    pass\n\nclass BankAccount:\n    def __init__(self, balance=0):\n        self.balance = balance\n    \n    def withdraw(self, amount):\n        if amount > self.balance:\n            raise InsufficientFundsError(\n                f"Insufficient funds: have {self.balance}, need {amount}"\n            )\n        self.balance -= amount\n        return amount\n\naccount = BankAccount(100)\ntry:\n    account.withdraw(150)\nexcept InsufficientFundsError as e:\n    print(f"Error: {e}")\nexcept Exception as e:\n    print(f"Unexpected: {e}")\nelse:\n    print("Withdrawal successful")\nfinally:\n    print(f"Balance: {account.balance}")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which OOP principle allows the same method name to behave differently?',
          options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction'],
          correct: 2
        },
        {
          question: 'What does the "S" in SOLID stand for?',
          options: ['Simple Responsibility', 'Single Responsibility', 'Structured Design', 'Systematic Logic'],
          correct: 1
        }
      ]
    },
    {
      id: 'bit_stats',
      title: 'Probability and Statistics I (STA 2100)',
      lessons: [
        {
          id: 'bit_stats_intro',
          title: 'Descriptive Statistics',
          content: 'Descriptive statistics summarize and describe the main features of a dataset.\n\nMeasures of central tendency:\n• Mean (average) - Sum of values divided by count\n• Median - Middle value when sorted\n• Mode - Most frequent value\n\nMeasures of dispersion:\n• Range - Max minus min\n• Variance - Average squared deviation from mean\n• Standard deviation - Square root of variance\n\nData visualization: histograms, box plots, scatter plots, bar charts.\n\nThese concepts are fundamental for data analysis in any field.',
          codeExamples: [
            {
              title: 'Statistical Measures',
              code: 'import statistics\n\ndata = [12, 15, 18, 22, 25, 28, 30, 35, 42, 50, 50]\n\nmean = statistics.mean(data)\nmedian = statistics.median(data)\ntry:\n    mode = statistics.mode(data)\nexcept:\n    mode = "No unique mode"\n\nvariance = statistics.variance(data)\nstdev = statistics.stdev(data)\n\nprint(f"Data: {data}")\nprint(f"Mean: {mean:.2f}")\nprint(f"Median: {median}")\nprint(f"Mode: {mode}")\nprint(f"Variance: {variance:.2f}")\nprint(f"Std Dev: {stdev:.2f}")'
            }
          ]
        },
        {
          id: 'bit_stats_prob',
          title: 'Probability Theory',
          content: 'Probability is the mathematical framework for quantifying uncertainty.\n\nKey concepts:\n• Sample space - All possible outcomes\n• Event - A subset of the sample space\n• Probability of event A: P(A) = favorable outcomes / total outcomes\n\nProbability rules:\n• Addition rule: P(A∪B) = P(A) + P(B) - P(A∩B)\n• Multiplication rule: P(A∩B) = P(A) × P(B|A)\n• Conditional probability: P(B|A) = P(A∩B) / P(A)\n\nRandom variables:\n• Discrete - Countable outcomes (binomial, Poisson)\n• Continuous - Measurable outcomes (normal, exponential)\n\nBayes\' Theorem: P(A|B) = P(B|A) × P(A) / P(B)',
          codeExamples: [
            {
              title: 'Probability Distributions',
              code: 'import math\n\ndef binomial_prob(n, k, p):\n    """Probability of k successes in n trials"""\n    def comb(n, k):\n        return math.factorial(n) // (math.factorial(k) * math.factorial(n - k))\n    return comb(n, k) * (p ** k) * ((1 - p) ** (n - k))\n\ndef normal_pdf(x, mu=0, sigma=1):\n    """Probability density function of normal distribution"""\n    coeff = 1 / (sigma * math.sqrt(2 * math.pi))\n    exponent = -((x - mu) ** 2) / (2 * sigma ** 2)\n    return coeff * math.exp(exponent)\n\nprint("Binomial Distribution (n=10, p=0.5):")\nfor k in range(11):\n    prob = binomial_prob(10, k, 0.5)\n    print(f"  P(X={k:2d}) = {prob:.4f}")\n\nprint(f"\\nNormal PDF N(0,1) at x=0: {normal_pdf(0):.4f}")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the standard deviation if the variance is 25?',
          options: ['5', '25', '125', '625'],
          correct: 0
        },
        {
          question: 'Bayes\' Theorem is used to calculate which type of probability?',
          options: ['Joint probability', 'Conditional probability', 'Marginal probability', 'Complement probability'],
          correct: 1
        }
      ]
    },
    {
      id: 'bit_web',
      title: 'Web Design and Development II (BIT 2207)',
      lessons: [
        {
          id: 'bit_web_intro',
          title: 'Advanced HTML and CSS',
          content: 'Web Design II builds on foundational web skills with modern layout techniques and responsive design.\n\nHTML5 semantic elements:\n• header, nav, main, section, article, aside, footer\n• Improved accessibility with ARIA attributes\n\nCSS modern layout:\n• Flexbox - One-dimensional layout\n• CSS Grid - Two-dimensional layout\n• Responsive design with media queries\n• CSS custom properties (variables)\n• Transitions and animations\n\nMobile-first design ensures websites work on all screen sizes.',
          codeExamples: [
            {
              title: 'CSS Grid Layout',
              code: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .grid-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 16px;\n    padding: 16px;\n  }\n  \n  .card {\n    background: #f5f5f5;\n    border-radius: 8px;\n    padding: 20px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  }\n  \n  @media (max-width: 768px) {\n    .grid-container {\n      grid-template-columns: 1fr;\n    }\n  }\n</style>\n</head>\n<body>\n  <div class="grid-container">\n    <div class="card">Card 1</div>\n    <div class="card">Card 2</div>\n    <div class="card">Card 3</div>\n  </div>\n</body>\n</html>'
            }
          ]
        },
        {
          id: 'bit_web_js',
          title: 'Client-Side Scripting and Interactivity',
          content: 'JavaScript brings web pages to life with dynamic content and interactivity.\n\nCore JavaScript concepts:\n• DOM manipulation - Selecting and modifying elements\n• Event handling - Responding to user actions\n• Async programming - Promises, async/await, fetch API\n• Form validation - Client-side validation\n\nModern JavaScript (ES6+):\n• Arrow functions, template literals\n• Destructuring, spread operator\n• Modules (import/export)\n• Classes and inheritance\n\nAJAX and Fetch API allow communication with servers without page reload.',
          codeExamples: [
            {
              title: 'Fetch API Example',
              code: '// Fetch data from an API\nasync function fetchUserData(userId) {\n    try {\n        const response = await fetch(\n            `https://jsonplaceholder.typicode.com/users/${userId}`\n        );\n        \n        if (!response.ok) {\n            throw new Error(`HTTP error! status: ${response.status}`);\n        }\n        \n        const user = await response.json();\n        displayUser(user);\n    } catch (error) {\n        console.error("Failed to fetch user:", error);\n        showError("Could not load user data");\n    }\n}\n\nfunction displayUser(user) {\n    document.getElementById("output").innerHTML = `\n        <h2>${user.name}</h2>\n        <p>Email: ${user.email}</p>\n        <p>Phone: ${user.phone}</p>\n        <p>Website: ${user.website}</p>\n    `;\n}\n\nfetchUserData(1);'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which CSS layout method is best for two-dimensional layouts?',
          options: ['Flexbox', 'CSS Grid', 'Float', 'Inline-block'],
          correct: 1
        },
        {
          question: 'What JavaScript API is used for making HTTP requests?',
          options: ['DOM API', 'Fetch API', 'WebSocket API', 'Canvas API'],
          correct: 1
        }
      ]
    }
  ]
};
