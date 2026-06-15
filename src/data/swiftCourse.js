export const swiftCourse = {
  id: 'swift',
  title: 'Swift',
  subtitle: 'Build for Apple platforms',
  icon: '🕊️',
  color: '#F05138',
  bgColor: '#FFF3F0',
  description: 'Swift is a powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS. It is designed to be safe, fast, and expressive with modern language features.',
  chapters: [
    {
      id: 'swift_intro',
      title: 'Introduction to Swift',
      lessons: [
        {
          id: 'swift_what_is',
          title: 'What is Swift?',
          content: 'Swift was introduced by Apple in 2014 as a modern replacement for Objective-C. It combines the performance of compiled languages with the readability of scripting languages.\n\nKey features:\n• Type safety and type inference\n• Optional types for safe nil handling\n• Functional programming support\n• Protocol-oriented design\n• Automatic memory management (ARC)\n• Open source since 2015\n\nSwift is used for iOS apps, macOS software, server-side development (Vapor), and system programming.',
          codeExamples: [
            {
              title: 'Hello, Swift!',
              code: 'import Foundation\n\nprint("Hello, Swift!")\n\nlet name = "Swift"\nvar version = 5.9\nprint("\\(name) version \\(version)")'
            }
          ]
        },
        {
          id: 'swift_setup',
          title: 'Setting Up Swift',
          content: 'To develop with Swift:\n\n1. Install Xcode from the Mac App Store\n2. Swift comes built-in with Xcode\n3. For Linux: download from swift.org\n4. Create a new Playground in Xcode to experiment\n\nCommand line: swift main.swift\n\nSwift Package Manager: swift package init --type executable',
          codeExamples: [
            {
              title: 'Swift Package Init',
              code: '# Create a new Swift project\nmkdir MyApp\ncd MyApp\nswift package init --type executable\n\n# Build and run\nswift build\nswift run\n\n# Create a playground\n# mkdir -p MyPlayground.playground/Pages\n# touch MyPlayground.playground/Contents.swift'
            }
          ]
        },
        {
          id: 'swift_basics',
          title: 'Swift Basics',
          content: 'Swift syntax is clean and expressive:\n\n• let for constants, var for variables\n• Types inferred automatically\n• String interpolation with \\()\n• Arrays and dictionaries use [] syntax\n• Functions use func keyword\n\nOptionals allow values to be nil:\nvar name: String? = nil\n\nUnwrap with if let or guard let.',
          codeExamples: [
            {
              title: 'Variables and Types',
              code: 'import Foundation\n\nlet language = "Swift"       // String\nvar version = 5.9             // Double\nlet isAwesome = true           // Bool\n\nvar fruits: [String] = ["Apple", "Banana"]\nfruits.append("Orange")\n\nvar scores: [String: Int] = ["Alice": 95, "Bob": 87]\n\nfunc greet(name: String) -> String {\n    return "Hello, \\(name)!"\n}\n\nprint(greet(name: language))'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Who created Swift?',
          options: ['Google', 'Microsoft', 'Apple', 'JetBrains'],
          correct: 2
        },
        {
          question: 'What keyword declares a constant in Swift?',
          options: ['const', 'let', 'var', 'final'],
          correct: 1
        },
        {
          question: 'What type represents an optional value in Swift?',
          options: ['Maybe<T>', 'T?', 'Option<T>', 'Nullable<T>'],
          correct: 1
        }
      ]
    },
    {
      id: 'swift_oop',
      title: 'Object-Oriented Swift',
      lessons: [
        {
          id: 'swift_classes',
          title: 'Classes and Structures',
          content: 'Swift offers both classes and structs:\n\nClasses: reference types, support inheritance, deinitializers\nStructs: value types, no inheritance, copied on assignment\n\nBoth can have properties, methods, initializers, and conform to protocols.\n\nUse structs by default. Use classes when you need reference semantics or inheritance.\n\nSwift also has automatic initializers for structs.',
          codeExamples: [
            {
              title: 'Class vs Struct',
              code: 'import Foundation\n\n// Struct (value type)\nstruct Point {\n    var x: Double\n    var y: Double\n}\n\n// Class (reference type)\nclass Person {\n    let name: String\n    var age: Int\n    \n    init(name: String, age: Int) {\n        self.name = name\n        self.age = age\n    }\n    \n    func describe() -> String {\n        return "\\(name) is \\(age) years old"\n    }\n}\n\nlet p1 = Person(name: "Alice", age: 30)\nprint(p1.describe())'
            }
          ]
        },
        {
          id: 'swift_protocols',
          title: 'Protocols',
          content: 'Protocols define a blueprint of methods, properties, and requirements. They are central to Swift\'s design.\n\nprotocol Identifiable {\n    var id: String { get }\n    func identify() -> String\n}\n\nClasses, structs, and enums can conform to protocols. A type can conform to multiple protocols.\n\nProtocol extensions provide default implementations.\n\nSwift uses protocol-oriented programming extensively.',
          codeExamples: [
            {
              title: 'Protocol Example',
              code: 'import Foundation\n\nprotocol Vehicle {\n    var speed: Double { get set }\n    func move() -> String\n}\n\nstruct Car: Vehicle {\n    var speed: Double = 0\n    \n    func move() -> String {\n        return "Car moving at \\(speed) km/h"\n    }\n}\n\nstruct Bicycle: Vehicle {\n    var speed: Double = 0\n    \n    func move() -> String {\n        return "Bike moving at \\(speed) km/h"\n    }\n}\n\nlet vehicles: [Vehicle] = [Car(speed: 80), Bicycle(speed: 20)]\nfor v in vehicles {\n    print(v.move())\n}'
            }
          ]
        },
        {
          id: 'swift_inheritance',
          title: 'Inheritance',
          content: 'Only classes can inherit from other classes in Swift. A class can inherit from one superclass.\n\nclass Animal {\n    func speak() -> String { return "..." }\n}\n\nclass Dog: Animal {\n    override func speak() -> String { return "Woof!" }\n}\n\nUse override keyword to override methods. Use final to prevent overriding.\n\nSwift also supports extensions which add functionality to existing types (even from libraries).',
          codeExamples: [
            {
              title: 'Inheritance and Extensions',
              code: 'import Foundation\n\nclass Animal {\n    let name: String\n    init(name: String) { self.name = name }\n    func makeSound() -> String { return "..." }\n}\n\nclass Dog: Animal {\n    override func makeSound() -> String { return "Woof!" }\n}\n\n// Extension adds functionality\nextension Animal {\n    func describe() -> String {\n        return "\\(name) says \\(makeSound())"\n    }\n}\n\nlet dog = Dog(name: "Rex")\nprint(dog.describe())'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Are structs value or reference types?',
          options: ['Value types', 'Reference types', 'Both', 'Neither'],
          correct: 0
        },
        {
          question: 'What keyword conforms a type to a protocol?',
          options: ['extends', 'implements', ':', 'conforms'],
          correct: 2
        },
        {
          question: 'Can a struct inherit from another struct?',
          options: ['Yes', 'No, only classes can inherit'],
          correct: 1
        }
      ]
    },
    {
      id: 'swift_advanced',
      title: 'Advanced Swift',
      lessons: [
        {
          id: 'swift_closures',
          title: 'Closures',
          content: 'Closures are self-contained blocks of functionality. They are similar to lambdas in other languages.\n\n{ (params) -> ReturnType in\n    statements\n}\n\nClosures can capture and store references to variables from their surrounding context.\n\nTrailing closure syntax: pass closure as the last argument without parentheses.\n\nShorthand names: $0, $1, $2 for parameters.',
          codeExamples: [
            {
              title: 'Closures',
              code: 'import Foundation\n\nlet numbers = [3, 1, 4, 1, 5, 9]\n\n// Full closure syntax\nlet sorted1 = numbers.sorted(by: { (a: Int, b: Int) -> Bool in\n    return a < b\n})\n\n// Shorthand\nlet sorted2 = numbers.sorted { $0 < $1 }\n\n// Map, Filter, Reduce\nlet doubled = numbers.map { $0 * 2 }\nlet evens = numbers.filter { $0.isMultiple(of: 2) }\nlet sum = numbers.reduce(0, +)\n\nprint("Sum: \\(sum)")'
            }
          ]
        },
        {
          id: 'swift_enums',
          title: 'Enumerations',
          content: 'Swift enums are powerful. They can have associated values, raw values, and methods.\n\nenum Result<T> {\n    case success(T)\n    case failure(Error)\n}\n\nEnums with associated values are perfect for handling different states or outcomes.\n\nSwitch statements must exhaustively cover all enum cases, promoting safer code.\n\nOptional is actually an enum: enum Optional<T> { case none, some(T) }',
          codeExamples: [
            {
              title: 'Enums with Associated Values',
              code: 'import Foundation\n\nenum NetworkResult {\n    case success(data: String)\n    case failure(code: Int, message: String)\n    case loading\n}\n\nfunc fetchData() -> NetworkResult {\n    return .success(data: "User profile loaded")\n}\n\nlet result = fetchData()\nswitch result {\ncase .success(let data):\n    print("Got:", data)\ncase .failure(let code, let msg):\n    print("Error \\(code): \\(msg)")\ncase .loading:\n    print("Loading...")\n}'
            }
          ]
        },
        {
          id: 'swift_memory',
          title: 'Memory Management',
          content: 'Swift uses Automatic Reference Counting (ARC) for memory management.\n\n• Strong references: default, keeps object alive\n• Weak references: doesn\'t keep object alive, becomes nil\n• Unowned references: doesn\'t keep object alive, assumed to exist\n\nStrong reference cycles happen when two objects hold strong references to each other. Use weak or unowned to break cycles.\n\nARC only applies to class instances (reference types). Structs and enums are value types.',
          codeExamples: [
            {
              title: 'Weak References',
              code: 'import Foundation\n\nclass Apartment {\n    let unit: String\n    weak var tenant: Person?\n    init(unit: String) { self.unit = unit }\n    deinit { print("Apartment \\(unit) deinitialized") }\n}\n\nclass Person {\n    let name: String\n    var apartment: Apartment?\n    init(name: String) { self.name = name }\n    deinit { print("\\(name) deinitialized") }\n}\n\nvar person: Person? = Person(name: "Alice")\nvar apartment: Apartment? = Apartment(unit: "4B")\n\nperson?.apartment = apartment\napartment?.tenant = person  // weak ref, no cycle\n\nperson = nil\napartment = nil  // both deallocated'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What are shorthand parameter names in closures?',
          options: ['$0, $1, $2', '_0, _1, _2', 'p0, p1, p2', 'arg0, arg1, arg2'],
          correct: 0
        },
        {
          question: 'What keyword weakens a reference to avoid cycles?',
          options: ['weak', 'unowned', 'both weak and unowned', 'soft'],
          correct: 2
        },
        {
          question: 'Can enums have methods in Swift?',
          options: ['Yes', 'No'],
          correct: 0
        }
      ]
    }
  ]
};
