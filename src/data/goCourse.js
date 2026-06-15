export const goCourse = {
  id: 'go',
  title: 'Go',
  subtitle: 'Build with Go',
  icon: '💙',
  color: '#00ADD8',
  bgColor: '#E0F7FA',
  description: 'Go is a statically typed, compiled programming language designed at Google for building efficient, scalable software. It combines the performance of C with the simplicity of Python.',
  chapters: [
    {
      id: 'go_intro',
      title: 'Introduction to Go',
      lessons: [
        {
          id: 'go_what_is',
          title: 'What is Go?',
          content: 'Go (Golang) was created at Google in 2009 by Robert Griesemer, Rob Pike, and Ken Thompson. It was designed to address the challenges of modern software development.\n\nKey features:\n• Fast compilation\n• Built-in concurrency with goroutines\n• Garbage collection\n• Static typing with type inference\n• Rich standard library\n• Cross-platform support\n\nGo is used for cloud services, CLI tools, microservices, and DevOps automation.',
          codeExamples: [
            {
              title: 'Hello, Go!',
              code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, Go!")\n}'
            }
          ]
        },
        {
          id: 'go_setup',
          title: 'Setting Up Go',
          content: 'Getting started with Go:\n\n1. Download from golang.org\n2. Install the package for your OS\n3. Set up GOPATH (usually ~/go)\n4. Verify: go version\n\nRun code: go run main.go\nBuild binary: go build main.go\n\nGo modules (modern): go mod init myproject.',
          codeExamples: [
            {
              title: 'Initialize a Module',
              code: '# Create a new module\nmkdir hello\ncd hello\ngo mod init hello\n\n# Create main.go and run\ngo run main.go'
            }
          ]
        },
        {
          id: 'go_syntax',
          title: 'Go Syntax Basics',
          content: 'Go has a clean, minimal syntax:\n\n• No semicolons needed\n• Types come after variable names: var x int\n• Functions use func keyword\n• Public names start with uppercase\n• Packages group related code\n\nVariables:\nvar name string = "Go"\nage := 10  // short declaration\n\nControl flow: if, for (no while), switch.',
          codeExamples: [
            {
              title: 'Variables and Functions',
              code: 'package main\n\nimport "fmt"\n\nfunc add(a int, b int) int {\n    return a + b\n}\n\nfunc main() {\n    name := "Go"\n    version := 1.22\n    sum := add(3, 4)\n    fmt.Printf("%s v%.1f: 3+4=%d\\n", name, version, sum)\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Who created Go?',
          options: ['Google', 'Microsoft', 'Apple', 'Mozilla'],
          correct: 0
        },
        {
          question: 'What keyword declares a function in Go?',
          options: ['function', 'def', 'func', 'fn'],
          correct: 2
        },
        {
          question: 'How are public names identified in Go?',
          options: ['With @ prefix', 'Start with uppercase', 'Start with lowercase', 'With pub keyword'],
          correct: 1
        }
      ]
    },
    {
      id: 'go_concurrency',
      title: 'Concurrency in Go',
      lessons: [
        {
          id: 'go_goroutines',
          title: 'Goroutines',
          content: 'Goroutines are lightweight threads managed by the Go runtime. They make concurrent programming simple.\n\nStart a goroutine with the go keyword:\ngo myFunction()\n\nGoroutines are cheap: thousands can run simultaneously.\n\nThey share the same address space, so you must use synchronization primitives to access shared data safely.',
          codeExamples: [
            {
              title: 'Basic Goroutine',
              code: 'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc say(msg string) {\n    for i := 0; i < 3; i++ {\n        fmt.Println(msg)\n        time.Sleep(100 * time.Millisecond)\n    }\n}\n\nfunc main() {\n    go say("async")  // runs concurrently\n    say("sync")       // runs on main thread\n}'
            }
          ]
        },
        {
          id: 'go_channels',
          title: 'Channels',
          content: 'Channels are Go\'s way of communicating between goroutines. They let you send and receive values.\n\nCreate: ch := make(chan int)\nSend: ch <- 42\nReceive: val := <-ch\n\nChannels can be buffered or unbuffered. Unbuffered channels block until both sender and receiver are ready.\n\nUse close(ch) to signal no more values will be sent.',
          codeExamples: [
            {
              title: 'Channel Communication',
              code: 'package main\n\nimport "fmt"\n\nfunc sum(s []int, c chan int) {\n    total := 0\n    for _, v := range s {\n        total += v\n    }\n    c <- total\n}\n\nfunc main() {\n    s := []int{1, 2, 3, 4, 5}\n    c := make(chan int)\n    go sum(s[:3], c)\n    go sum(s[3:], c)\n    x, y := <-c, <-c\n    fmt.Println(x+y) // 15\n}'
            }
          ]
        },
        {
          id: 'go_select',
          title: 'Select Statement',
          content: 'The select statement lets a goroutine wait on multiple channel operations simultaneously.\n\nselect {\ncase msg1 := <-ch1:\n    fmt.Println(msg1)\ncase msg2 := <-ch2:\n    fmt.Println(msg2)\ncase <-time.After(1 * time.Second):\n    fmt.Println("timeout")\n}\n\nSelect picks one case at random if multiple are ready. Default case runs if no channels are ready.',
          codeExamples: [
            {
              title: 'Select Example',
              code: 'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    ch1 := make(chan string)\n    ch2 := make(chan string)\n\n    go func() {\n        time.Sleep(1 * time.Second)\n        ch1 <- "one"\n    }()\n    go func() {\n        time.Sleep(2 * time.Second)\n        ch2 <- "two"\n    }()\n\n    select {\n    case msg := <-ch1:\n        fmt.Println(msg)\n    case msg := <-ch2:\n        fmt.Println(msg)\n    case <-time.After(3 * time.Second):\n        fmt.Println("timeout")\n    }\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What keyword starts a goroutine?',
          options: ['thread', 'go', 'spawn', 'async'],
          correct: 1
        },
        {
          question: 'How do you send a value to a channel?',
          options: ['ch >> val', 'ch <- val', 'ch.send(val)', 'val -> ch'],
          correct: 1
        },
        {
          question: 'What does select do?',
          options: ['Chooses data type', 'Waits on multiple channels', 'Selects array elements', 'Filters values'],
          correct: 1
        }
      ]
    },
    {
      id: 'go_advanced',
      title: 'Advanced Go',
      lessons: [
        {
          id: 'go_interfaces',
          title: 'Interfaces',
          content: 'Interfaces define behavior through method signatures. Go interfaces are satisfied implicitly.\n\ntype Writer interface {\n    Write([]byte) (int, error)\n}\n\nAny type with a Write method satisfies the Writer interface. No explicit implements keyword needed.\n\nThe empty interface (interface{}) can hold any value. In modern Go, use any (type alias for interface{}).',
          codeExamples: [
            {
              title: 'Interface Example',
              code: 'package main\n\nimport "fmt"\n\ntype Animal interface {\n    Speak() string\n}\n\ntype Dog struct{}\nfunc (d Dog) Speak() string { return "Woof!" }\n\ntype Cat struct{}\nfunc (c Cat) Speak() string { return "Meow!" }\n\nfunc main() {\n    animals := []Animal{Dog{}, Cat{}}\n    for _, a := range animals {\n        fmt.Println(a.Speak())\n    }\n}'
            }
          ]
        },
        {
          id: 'go_errors',
          title: 'Error Handling',
          content: 'Go handles errors explicitly using the error interface. Functions return errors as a separate return value.\n\nf, err := os.Open("file.txt")\nif err != nil {\n    return err\n}\n\nCreate errors:\n• errors.New("message")\n• fmt.Errorf("code %d failed", code)\n\nPanic and recover are used for exceptional cases, but idiomatic Go prefers returning errors.',
          codeExamples: [
            {
              title: 'Error Handling Pattern',
              code: 'package main\n\nimport (\n    "errors"\n    "fmt"\n)\n\nfunc divide(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, errors.New("division by zero")\n    }\n    return a / b, nil\n}\n\nfunc main() {\n    result, err := divide(10, 0)\n    if err != nil {\n        fmt.Println("Error:", err)\n        return\n    }\n    fmt.Println(result)\n}'
            }
          ]
        },
        {
          id: 'go_modules',
          title: 'Packages and Modules',
          content: 'Go organizes code into packages and modules.\n\nA package is a directory of .go files. The main package defines an executable.\n\nA module is a collection of packages with a go.mod file.\n\ngo mod init myproject\ngo get github.com/gin-gonic/gin\n\nModules track dependencies and versions. Use go mod tidy to clean up dependencies.\n\nImport paths: import "myproject/pkg/util"',
          codeExamples: [
            {
              title: 'Custom Package',
              code: '// math/util.go\npackage math\n\nfunc Add(a, b int) int {\n    return a + b\n}\n\n// main.go\npackage main\n\nimport (\n    "fmt"\n    "myproject/math"\n)\n\nfunc main() {\n    fmt.Println(math.Add(2, 3))\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'How are interfaces satisfied in Go?',
          options: ['Explicit implements keyword', 'Implicitly by implementing methods', 'By inheritance', 'By annotation'],
          correct: 1
        },
        {
          question: 'What type does Go use for error handling?',
          options: ['Exception', 'error interface', 'Result type', 'Option type'],
          correct: 1
        },
        {
          question: 'What file defines a Go module?',
          options: ['package.json', 'go.mod', 'module.toml', 'go.config'],
          correct: 1
        }
      ]
    }
  ]
};
