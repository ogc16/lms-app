export const rustCourse = {
  id: 'rust',
  title: 'Rust',
  subtitle: 'Build blazingly fast with Rust',
  icon: '🦀',
  color: '#DE3E2E',
  bgColor: '#FFF0ED',
  description: 'Rust is a systems programming language focused on safety, speed, and concurrency. It guarantees memory safety without a garbage collector.',
  chapters: [
    {
      id: 'rust_intro',
      title: 'Introduction to Rust',
      lessons: [
        {
          id: 'rust_what_is',
          title: 'What is Rust?',
          content: 'Rust was created by Mozilla Research in 2015 and has since become one of the most loved programming languages. It provides the performance of C/C++ with memory safety guarantees.\n\nKey features:\n• Zero-cost abstractions\n• Move semantics and ownership\n• Memory safety without garbage collection\n• Fearless concurrency\n• Pattern matching and type inference\n• Excellent package manager (Cargo)\n\nRust is used for systems programming, WebAssembly, game engines, and CLI tools.',
          codeExamples: [
            {
              title: 'Hello, Rust!',
              code: 'fn main() {\n    println!("Hello, Rust!");\n}'
            }
          ]
        },
        {
          id: 'rust_setup',
          title: 'Setting Up Rust',
          content: 'Getting started with Rust:\n\n1. Install via rustup: rustup.rs\n2. Follow the prompts for your OS\n3. Verify: rustc --version\n4. Cargo comes with Rust — verify: cargo --version\n\nCreate a new project:\ncargo new my_project\ncd my_project\ncargo run\n\nUpdate Rust: rustup update.',
          codeExamples: [
            {
              title: 'Create and Run a Project',
              code: '# Install Rust (Windows/macOS/Linux)\ncurl --proto \'=https\' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n\n# Create a new binary project\ncargo new hello_rust\ncd hello_rust\n\n# Build and run\ncargo run'
            }
          ]
        },
        {
          id: 'rust_syntax',
          title: 'Rust Syntax Basics',
          content: 'Rust has a C-like syntax with modern features:\n\n• Variables are immutable by default (let)\n• Use mut for mutability (let mut x = 5)\n• Types are inferred but can be annotated\n• Functions use fn keyword\n• Macros end with ! (println!)\n• Semicolons are required\n\nData types: i32, u64, f64, bool, char, String, &str, tuples, arrays.',
          codeExamples: [
            {
              title: 'Variables and Functions',
              code: 'fn main() {\n    let name = "Rust";\n    let version: f64 = 1.78;\n    let mut count = 0;\n    count += 1;\n    \n    let sum = add(5, 7);\n    println!("{} v{}: 5+7={}", name, version, sum);\n}\n\nfn add(a: i32, b: i32) -> i32 {\n    a + b  // no semicolon = return value\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Who originally created Rust?',
          options: ['Google', 'Mozilla Research', 'Microsoft', 'Apple'],
          correct: 1
        },
        {
          question: 'What keyword declares variables in Rust?',
          options: ['var', 'let', 'const', 'def'],
          correct: 1
        },
        {
          question: 'How do you make a variable mutable in Rust?',
          options: ['var keyword', 'mut keyword', 'changeable keyword', 'mutable keyword'],
          correct: 1
        }
      ]
    },
    {
      id: 'rust_ownership',
      title: 'Ownership & Borrowing',
      lessons: [
        {
          id: 'rust_ownership_basics',
          title: 'Ownership Rules',
          content: 'Rust\'s ownership system is its most unique feature. Three rules:\n\n1. Each value has exactly one owner\n2. When the owner goes out of scope, the value is dropped\n3. Ownership can be transferred (moved)\n\nlet s1 = String::from("hello");\nlet s2 = s1;  // s1 is MOVED to s2\n// println!("{}", s1);  // ERROR: s1 no longer valid\n\nThis prevents double-free bugs at compile time.',
          codeExamples: [
            {
              title: 'Ownership in Action',
              code: 'fn main() {\n    let s = String::from("hello");\n    takes_ownership(s);\n    // s is no longer valid here\n    \n    let x = 5;\n    makes_copy(x);\n    // x is still valid (i32 is Copy)\n}\n\nfn takes_ownership(some_string: String) {\n    println!("{}", some_string);\n}\n\nfn makes_copy(some_int: i32) {\n    println!("{}", some_int);\n}'
            }
          ]
        },
        {
          id: 'rust_borrowing',
          title: 'Borrowing & References',
          content: 'Borrowing lets you reference a value without taking ownership:\n\n• & creates a reference (borrow)\n• &mut creates a mutable reference\n\nRules:\n1. At any time, you can have one mutable reference OR any number of immutable references\n2. References must always be valid\n\nlet s = String::from("hello");\nlet len = calculate_length(&s);  // borrow\n\nfn calculate_length(s: &String) -> usize {\n    s.len()\n}  // s is not dropped here',
          codeExamples: [
            {
              title: 'Borrowing Example',
              code: 'fn main() {\n    let mut s = String::from("hello");\n    \n    let r1 = &s;   // immutable borrow\n    let r2 = &s;   // immutable borrow\n    println!("{} and {}", r1, r2);\n    // r1 and r2 are no longer used here\n    \n    let r3 = &mut s;  // mutable borrow\n    r3.push_str(", world");\n    println!("{}", r3);\n}'
            }
          ]
        },
        {
          id: 'rust_lifetimes',
          title: 'Lifetimes',
          content: 'Lifetimes ensure references are always valid. They are denoted with \'a notation.\n\nfn longest<\'a>(x: &\'a str, y: &\'a str) -> &\'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nLifetime annotations tell the compiler how references relate to each other. In many cases, lifetimes are inferred (elision).\n\nStatic lifetime (\'static) means the reference lives for the entire program (e.g., string literals).',
          codeExamples: [
            {
              title: 'Lifetime Annotation',
              code: 'fn main() {\n    let string1 = String::from("long");\n    let string2 = "short";\n    \n    let result = longest(string1.as_str(), string2);\n    println!("The longest string is {}", result);\n}\n\nfn longest<\'a>(x: &\'a str, y: &\'a str) -> &\'a str {\n    if x.len() > y.len() { x } else { y }\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'How many owners can a value have in Rust?',
          options: ['Multiple', 'Exactly one', 'Zero', 'Unlimited'],
          correct: 1
        },
        {
          question: 'What does &mut create?',
          options: ['Immutable reference', 'Mutable reference', 'Raw pointer', 'Box'],
          correct: 1
        },
        {
          question: 'What does \'static mean for a lifetime?',
          options: ['Compile-time only', 'Lasts entire program', 'Thread-local', 'Unbounded'],
          correct: 1
        }
      ]
    },
    {
      id: 'rust_advanced',
      title: 'Advanced Rust',
      lessons: [
        {
          id: 'rust_enums_patterns',
          title: 'Enums & Pattern Matching',
          content: 'Enums in Rust are powerful algebraic data types:\n\nenum Option<T> {\n    Some(T),\n    None,\n}\n\nenum Result<T, E> {\n    Ok(T),\n    Err(E),\n}\n\nPattern matching with match:\nmatch value {\n    Some(x) => println!("Got {}", x),\n    None => println!("Nothing"),\n}\n\nIf let is a concise alternative for single patterns:\nif let Some(x) = value { println!("{}", x); }',
          codeExamples: [
            {
              title: 'Enum with Match',
              code: 'enum Coin {\n    Penny,\n    Nickel,\n    Dime,\n    Quarter,\n}\n\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => 1,\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter => 25,\n    }\n}\n\nfn main() {\n    println!("{}", value_in_cents(Coin::Dime));\n}'
            }
          ]
        },
        {
          id: 'rust_error_handling',
          title: 'Error Handling',
          content: 'Rust doesn\'t have exceptions. It uses Result for recoverable errors and panic! for unrecoverable ones.\n\nuse std::fs::File;\n\nlet f = File::open("hello.txt");\n\nlet f = match f {\n    Ok(file) => file,\n    Err(error) => panic!("Error: {:?}", error),\n};\n\nThe ? operator propagates errors:\nfn read_file() -> Result<String, io::Error> {\n    let mut s = String::new();\n    File::open("file.txt")?.read_to_string(&mut s)?;\n    Ok(s)\n}',
          codeExamples: [
            {
              title: 'Result and ? Operator',
              code: 'use std::fs::File;\nuse std::io::{self, Read};\n\nfn read_username() -> Result<String, io::Error> {\n    let mut file = File::open("username.txt")?;\n    let mut username = String::new();\n    file.read_to_string(&mut username)?;\n    Ok(username.trim().to_string())\n}\n\nfn main() {\n    match read_username() {\n        Ok(name) => println!("Hello, {}!", name),\n        Err(e) => eprintln!("Error: {}", e),\n    }\n}'
            }
          ]
        },
        {
          id: 'rust_traits',
          title: 'Traits & Generics',
          content: 'Traits define shared behavior (similar to interfaces in other languages):\n\npub trait Summary {\n    fn summarize(&self) -> String;\n}\n\nImplement a trait:\nimpl Summary for Article {\n    fn summarize(&self) -> String {\n        format!("{} by {}", self.headline, self.author)\n    }\n}\n\nGenerics allow code to work with multiple types:\nfn largest<T: PartialOrd>(list: &[T]) -> &T { ... }',
          codeExamples: [
            {
              title: 'Traits and Generics',
              code: 'trait Greet {\n    fn greet(&self) -> String;\n}\n\nstruct Person { name: String }\n\nimpl Greet for Person {\n    fn greet(&self) -> String {\n        format!("Hello, I\'m {}!", self.name)\n    }\n}\n\nfn print_greeting<T: Greet>(item: T) {\n    println!("{}", item.greet());\n}\n\nfn main() {\n    let p = Person { name: "Alice".to_string() };\n    print_greeting(p);\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does Rust use for recoverable errors?',
          options: ['Exceptions', 'Result type', 'Option type', 'Try-catch'],
          correct: 1
        },
        {
          question: 'What operator propagates errors in Rust?',
          options: ['!', '?', '->', '&'],
          correct: 1
        },
        {
          question: 'What are Rust\'s version of interfaces called?',
          options: ['Abstract classes', 'Traits', 'Protocols', 'Contracts'],
          correct: 1
        }
      ]
    }
  ]
};
