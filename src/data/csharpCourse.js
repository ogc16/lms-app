export const csharpCourse = {
  id: 'csharp',
  title: 'C#',
  subtitle: 'Build .NET applications',
  icon: '🔷',
  color: '#9B4F96',
  bgColor: '#F3E5F5',
  description: 'C# is a modern, object-oriented programming language developed by Microsoft for building Windows applications, games with Unity, web services with ASP.NET, and enterprise software.',
  chapters: [
    {
      id: 'csharp_intro',
      title: 'Introduction to C#',
      lessons: [
        {
          id: 'csharp_what_is',
          title: 'What is C#?',
          content: 'C# (pronounced "C Sharp") was created by Microsoft in 2000 as part of the .NET framework. It combines the power of C++ with the simplicity of Visual Basic.\n\nKey features:\n• Object-oriented with classes and interfaces\n• Type-safe and memory-safe\n• Garbage collection\n• LINQ for data querying\n• Async/await for asynchronous programming\n• Cross-platform with .NET Core\n\nC# is used for desktop apps, games (Unity), web APIs, cloud services, and mobile apps (Xamarin).',
          codeExamples: [
            {
              title: 'Hello, C#!',
              code: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine("Hello, C#!");\n        \n        string name = "C#";\n        int version = 12;\n        Console.WriteLine($"{name} version {version}");\n    }\n}'
            }
          ]
        },
        {
          id: 'csharp_setup',
          title: 'Setting Up C#',
          content: 'Getting started with C#:\n\n1. Install Visual Studio (Community is free) or VS Code with C# extension\n2. Install .NET SDK from dotnet.microsoft.com\n3. Verify: dotnet --version\n\nCreate a new project:\ndotnet new console -n MyApp\ncd MyApp\ndotnet run\n\nOr use the online editor at dotnetfiddle.net.',
          codeExamples: [
            {
              title: 'Create and Run',
              code: '# Create a console app\ndotnet new console -n HelloWorld\ncd HelloWorld\n\n# Build and run\ndotnet run\n\n# Output:\n# Hello, World!\n\n# Create a web API\ndotnet new webapi -n MyApi'
            }
          ]
        },
        {
          id: 'csharp_basics',
          title: 'C# Basics',
          content: 'C# syntax is similar to Java and C++:\n\n• Statements end with semicolons\n• Curly braces for code blocks\n• Strongly typed with type inference (var)\n• int, double, string, bool, char base types\n• Arrays: int[] nums = {1, 2, 3}\n\nString interpolation: $"{name} is {age}"\n\nThe using directive imports namespaces. Console is in the System namespace.',
          codeExamples: [
            {
              title: 'Variables and Control Flow',
              code: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        var name = "C#";\n        int year = 2000;\n        double pi = 3.14159;\n        bool isFun = true;\n\n        int[] numbers = { 1, 2, 3, 4, 5 };\n        \n        foreach (var n in numbers)\n        {\n            if (n % 2 == 0)\n                Console.WriteLine($"{n} is even");\n        }\n\n        string result = isFun ? "yes" : "no";\n        Console.WriteLine($"Is {name} fun? {result}");\n    }\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Who developed C#?',
          options: ['Google', 'Microsoft', 'Apple', 'Oracle'],
          correct: 1
        },
        {
          question: 'What keyword declares a variable with inferred type?',
          options: ['auto', 'var', 'let', 'dynamic'],
          correct: 1
        },
        {
          question: 'What platform does C# primarily run on?',
          options: ['JVM', '.NET', 'V8', 'Python VM'],
          correct: 1
        }
      ]
    },
    {
      id: 'csharp_oop',
      title: 'Object-Oriented C#',
      lessons: [
        {
          id: 'csharp_classes',
          title: 'Classes and Objects',
          content: 'C# is fully object-oriented. Classes are declared with the class keyword.\n\nclass Person {\n    public string Name { get; set; }\n    private int age;\n    \n    public Person(string name) {\n        Name = name;\n    }\n}\n\nProperties use get/set accessors. Auto-properties simplify this.\n\nAccess modifiers: public, private, protected, internal.\n\nConstructors initialize objects. The this keyword refers to the current instance.',
          codeExamples: [
            {
              title: 'Class Example',
              code: 'using System;\n\npublic class BankAccount\n{\n    public string Owner { get; }\n    private decimal balance;\n    \n    public BankAccount(string owner, decimal initial)\n    {\n        Owner = owner;\n        balance = initial;\n    }\n    \n    public void Deposit(decimal amount)\n    {\n        if (amount > 0) balance += amount;\n    }\n    \n    public bool Withdraw(decimal amount)\n    {\n        if (amount > 0 && balance >= amount)\n        {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n    \n    public decimal GetBalance() => balance;\n}\n\nclass Program\n{\n    static void Main()\n    {\n        var account = new BankAccount("Alice", 1000);\n        account.Deposit(500);\n        Console.WriteLine($"Balance: ${account.GetBalance()}");\n    }\n}'
            }
          ]
        },
        {
          id: 'csharp_inheritance',
          title: 'Inheritance and Polymorphism',
          content: 'C# supports single inheritance. Use : to inherit.\n\nclass Animal { public virtual void Speak() { } }\nclass Dog : Animal { public override void Speak() { Console.WriteLine("Woof!"); } }\n\n• virtual methods can be overridden\n• abstract methods must be implemented\n• sealed prevents further inheritance\n• base accesses parent class\n\nPolymorphism: treat derived objects as their base type.\n\nInterfaces (interface) define contracts without implementation.',
          codeExamples: [
            {
              title: 'Inheritance',
              code: 'using System;\n\nabstract class Shape\n{\n    public abstract double GetArea();\n}\n\nclass Circle : Shape\n{\n    private double radius;\n    public Circle(double r) { radius = r; }\n    public override double GetArea() => Math.PI * radius * radius;\n}\n\nclass Rectangle : Shape\n{\n    private double w, h;\n    public Rectangle(double w, double h) { this.w = w; this.h = h; }\n    public override double GetArea() => w * h;\n}\n\nclass Program\n{\n    static void Main()\n    {\n        Shape[] shapes = { new Circle(5), new Rectangle(4, 6) };\n        foreach (var s in shapes)\n            Console.WriteLine($"Area: {s.GetArea():F2}");\n    }\n}'
            }
          ]
        },
        {
          id: 'csharp_interfaces',
          title: 'Interfaces',
          content: 'Interfaces define method signatures that implementing classes must provide.\n\ninterface IComparable {\n    int CompareTo(object obj);\n}\n\nA class can implement multiple interfaces.\n\nInterfaces cannot have fields or constructors.\n\nDefault interface methods (C# 8+) provide default implementations.\n\nCommon interfaces: IDisposable, IComparable, IEnumerable, INotifyPropertyChanged.',
          codeExamples: [
            {
              title: 'Interface Example',
              code: 'using System;\n\ninterface ILogger\n{\n    void Log(string message);\n}\n\ninterface IFormattable\n{\n    string Format();\n}\n\nclass ConsoleLogger : ILogger, IFormattable\n{\n    public void Log(string message)\n    {\n        Console.WriteLine($"[LOG] {message}");\n    }\n    \n    public string Format()\n    {\n        return "ConsoleLogger v1.0";\n    }\n}\n\nclass Program\n{\n    static void Main()\n    {\n        ILogger logger = new ConsoleLogger();\n        logger.Log("Application started");\n    }\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What keyword makes a method overridable?',
          options: ['virtual', 'override', 'abstract', 'new'],
          correct: 0
        },
        {
          question: 'How many classes can a C# class inherit from?',
          options: ['Two', 'Unlimited', 'One', 'None'],
          correct: 2
        },
        {
          question: 'Can a class implement multiple interfaces?',
          options: ['Yes', 'No'],
          correct: 0
        }
      ]
    },
    {
      id: 'csharp_advanced',
      title: 'Advanced C#',
      lessons: [
        {
          id: 'csharp_linq',
          title: 'LINQ',
          content: 'Language Integrated Query (LINQ) lets you query data from collections, databases, and XML using SQL-like syntax.\n\nQuery syntax:\nvar results = from p in people\n              where p.Age > 18\n              select p.Name;\n\nMethod syntax:\nvar results = people.Where(p => p.Age > 18).Select(p => p.Name);\n\nLINQ works with any IEnumerable<T>. Extension methods like Where, Select, OrderBy, GroupBy are in System.Linq.',
          codeExamples: [
            {
              title: 'LINQ Examples',
              code: 'using System;\nusing System.Linq;\nusing System.Collections.Generic;\n\nclass Program\n{\n    static void Main()\n    {\n        var numbers = new List<int> { 5, 2, 8, 1, 9, 3, 7 };\n        \n        // Method syntax\n        var evens = numbers.Where(n => n % 2 == 0).OrderBy(n => n);\n        \n        // Query syntax\n        var big = from n in numbers\n                  where n > 5\n                  orderby n descending\n                  select n;\n        \n        Console.WriteLine("Evens: " + string.Join(", ", evens));\n        Console.WriteLine("Big: " + string.Join(", ", big));\n        \n        var stats = new\n        {\n            Count = numbers.Count,\n            Sum = numbers.Sum(),\n            Avg = numbers.Average(),\n            Max = numbers.Max()\n        };\n        Console.WriteLine($"Sum: {stats.Sum}, Avg: {stats.Avg:F1}");\n    }\n}'
            }
          ]
        },
        {
          id: 'csharp_async',
          title: 'Async/Await',
          content: 'C# makes asynchronous programming simple with async/await.\n\nasync Task<int> FetchDataAsync() {\n    using var client = new HttpClient();\n    string json = await client.GetStringAsync(url);\n    return json.Length;\n}\n\n• async marks a method as asynchronous\n• await suspends execution until the task completes\n• Task represents an async operation\n• Task<T> returns a value\n\nUse ConfigureAwait(false) in library code to avoid deadlocks.\n\nParallel.ForEach for CPU-bound work.',
          codeExamples: [
            {
              title: 'Async Example',
              code: 'using System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    static async Task Main()\n    {\n        await DownloadAndProcessAsync();\n    }\n    \n    static async Task DownloadAndProcessAsync()\n    {\n        using var client = new HttpClient();\n        \n        Task<string> googleTask = client.GetStringAsync("https://google.com");\n        Task<string> githubTask = client.GetStringAsync("https://github.com");\n        \n        // Wait for both concurrently\n        string[] results = await Task.WhenAll(googleTask, githubTask);\n        \n        Console.WriteLine($"Google: {results[0].Length} chars");\n        Console.WriteLine($"GitHub: {results[1].Length} chars");\n    }\n}'
            }
          ]
        },
        {
          id: 'csharp_generics',
          title: 'Generics',
          content: 'Generics allow type-safe data structures without boxing or casting.\n\nList<T> // typed list\nDictionary<TKey, TValue> // typed dictionary\n\nCreate your own generic class:\nclass Repository<T> where T : class {\n    private List<T> items = new();\n    public void Add(T item) => items.Add(item);\n}\n\nConstraints: where T : class, struct, new(), IComparable\n\nGeneric methods: T Max<T>(T a, T b) where T : IComparable<T>\n\nGenerics provide compile-time safety and better performance (no boxing for value types).',
          codeExamples: [
            {
              title: 'Generic Repository',
              code: 'using System;\nusing System.Collections.Generic;\n\nclass Repository<T>\n{\n    private List<T> items = new List<T>();\n    \n    public void Add(T item) => items.Add(item);\n    public T Get(int index) => items[index];\n    public int Count => items.Count;\n}\n\nclass Program\n{\n    static void Main()\n    {\n        var numbers = new Repository<int>();\n        numbers.Add(10);\n        numbers.Add(20);\n        \n        var names = new Repository<string>();\n        names.Add("Alice");\n        \n        Console.WriteLine($"Numbers: {numbers.Count}, Names: {names.Count}");\n    }\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does LINQ stand for?',
          options: ['Language Integrated Query', 'Linked Inquire', 'Linear Inquiry', 'Library Integration Query'],
          correct: 0
        },
        {
          question: 'What keyword marks an asynchronous method?',
          options: ['async', 'await', 'task', 'parallel'],
          correct: 0
        },
        {
          question: 'What constraint restricts T to reference types?',
          options: ['where T : struct', 'where T : class', 'where T : new()', 'where T : IComparable'],
          correct: 1
        }
      ]
    }
  ]
};
