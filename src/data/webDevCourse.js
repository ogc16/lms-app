export const webDevCourse = {
  id: 'web_dev',
  title: 'Web Development',
  subtitle: 'HTML, CSS, JavaScript & React',
  icon: '🌐',
  color: '#E44D26',
  bgColor: '#FFF3E0',
  description: 'Web development is the art of building websites and web applications. This course covers HTML for structure, CSS for styling, JavaScript for interactivity, and React for modern UI development.',
  chapters: [
    {
      id: 'web_html',
      title: 'HTML - Structure',
      lessons: [
        {
          id: 'html_intro',
          title: 'HTML Basics',
          content: 'HTML (HyperText Markup Language) defines the structure and content of web pages.\n\n• Tags: <tagname>content</tagname>\n• Elements: html, head, body, h1-h6, p, a, img, div, span\n• Attributes provide additional info: <a href="url">\n• Self-closing tags: <img src="photo.jpg">, <br>, <hr>\n\nThe DOM (Document Object Model) is the tree structure browsers create from HTML.\n\nEvery HTML document needs DOCTYPE, html, head, and body elements.',
          codeExamples: [
            {
              title: 'Basic HTML Page',
              code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Welcome!</h1>\n    <p>This is a paragraph.</p>\n    <a href="https://example.com">Click here</a>\n    <img src="photo.jpg" alt="Description">\n</body>\n</html>'
            }
          ]
        },
        {
          id: 'html_semantic',
          title: 'Semantic HTML',
          content: 'Semantic elements clearly describe their meaning to both the browser and developer.\n\n<header> - page header\n<nav> - navigation links\n<main> - main content\n<section> - thematic grouping\n<article> - independent content\n<aside> - sidebar content\n<footer> - page footer\n<figure> - images/illustrations\n\nSemantic HTML improves accessibility, SEO, and code readability.\n\nAvoid excessive <div> usage—use semantic tags instead.',
          codeExamples: [
            {
              title: 'Semantic Layout',
              code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Semantic Page</title>\n</head>\n<body>\n    <header>\n        <h1>My Website</h1>\n        <nav>\n            <a href="/">Home</a>\n            <a href="/about">About</a>\n        </nav>\n    </header>\n    \n    <main>\n        <article>\n            <h2>Blog Post</h2>\n            <p>Content here...</p>\n        </article>\n        <aside>\n            <h3>Related Links</h3>\n        </aside>\n    </main>\n    \n    <footer>\n        <p>&copy; 2026</p>\n    </footer>\n</body>\n</html>'
            }
          ]
        },
        {
          id: 'html_forms',
          title: 'Forms and Inputs',
          content: 'HTML forms collect user data and send it to servers.\n\n<form action="/submit" method="POST">\n    <input type="text" name="username">\n    <input type="email" name="email">\n    <input type="password" name="password">\n    <textarea name="bio"></textarea>\n    <select name="country">\n        <option>Kenya</option>\n    </select>\n    <button type="submit">Send</button>\n</form>\n\nInput types: text, email, password, number, date, color, file, checkbox, radio, range, etc.\n\nAttributes: required, placeholder, disabled, readonly, min, max, pattern.',
          codeExamples: [
            {
              title: 'Registration Form',
              code: '<form action="/register" method="POST">\n    <label for="name">Full Name:</label>\n    <input type="text" id="name" name="name" required>\n    \n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required>\n    \n    <label for="age">Age:</label>\n    <input type="number" id="age" name="age" min="13" max="120">\n    \n    <fieldset>\n        <legend>Gender</legend>\n        <input type="radio" id="m" name="gender" value="male">\n        <label for="m">Male</label>\n        <input type="radio" id="f" name="gender" value="female">\n        <label for="f">Female</label>\n    </fieldset>\n    \n    <button type="submit">Register</button>\n</form>'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does HTML stand for?',
          options: ['HyperText Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language'],
          correct: 0
        },
        {
          question: 'Which tag is used for navigation links?',
          options: ['<navigation>', '<nav>', '<menu>', '<links>'],
          correct: 1
        },
        {
          question: 'What attribute makes a form field required?',
          options: ['mandatory', 'required', 'must', 'validate'],
          correct: 1
        }
      ]
    },
    {
      id: 'web_css',
      title: 'CSS - Styling',
      lessons: [
        {
          id: 'css_intro',
          title: 'CSS Basics',
          content: 'CSS (Cascading Style Sheets) controls the presentation of HTML elements.\n\nSelector { property: value; }\n\nh1 {\n    color: blue;\n    font-size: 24px;\n    margin-bottom: 10px;\n}\n\nThree ways to apply CSS:\n1. Inline: style="color: red"\n2. Internal: <style> in head\n3. External: <link rel="stylesheet" href="styles.css">\n\nSelectors: element, .class, #id, [attribute], :pseudo-class, ::pseudo-element',
          codeExamples: [
            {
              title: 'CSS Selectors',
              code: '/* Element selector */\np { font-size: 16px; }\n\n/* Class selector */\n.highlight { background: yellow; }\n\n/* ID selector */\n#header { height: 80px; }\n\n/* Descendant */\narticle p { line-height: 1.6; }\n\n/* Pseudo-class */\na:hover { color: red; }\n\n/* Multiple */\nh1, h2, h3 { font-family: Arial; }\n\n/* Attribute */\ninput[type="email"] { border: 1px solid blue; }'
            }
          ]
        },
        {
          id: 'css_layout',
          title: 'Layout with Flexbox',
          content: 'Flexbox is a one-dimensional layout model that distributes space along a row or column.\n\n.container {\n    display: flex;\n    justify-content: center; /* horizontal */\n    align-items: center;     /* vertical */\n    flex-direction: row;     /* or column */\n    gap: 16px;               /* spacing */\n}\n\nFlex properties for children:\n• flex: 1 (grow equally)\n• align-self (override alignment)\n• order (reorder visually)\n\nFlexbox is ideal for navigation bars, card grids, centering, and responsive layouts.',
          codeExamples: [
            {
              title: 'Flexbox Layout',
              code: '<!DOCTYPE html>\n<html>\n<head>\n<style>\n    .nav {\n        display: flex;\n        justify-content: space-between;\n        background: #333;\n        padding: 16px;\n    }\n    .nav a { color: white; text-decoration: none; }\n    \n    .card-grid {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 20px;\n        padding: 20px;\n    }\n    .card {\n        flex: 1 1 300px;\n        padding: 24px;\n        border: 1px solid #ddd;\n        border-radius: 8px;\n    }\n    .card h3 { margin: 0 0 8px 0; }\n</style>\n</head>\n<body>\n    <nav class="nav">\n        <a href="#">Logo</a>\n        <div>\n            <a href="#">Home</a>\n            <a href="#">About</a>\n        </div>\n    </nav>\n    \n    <div class="card-grid">\n        <div class="card"><h3>Card 1</h3></div>\n        <div class="card"><h3>Card 2</h3></div>\n        <div class="card"><h3>Card 3</h3></div>\n    </div>\n</body>\n</html>'
            }
          ]
        },
        {
          id: 'css_responsive',
          title: 'Responsive Design',
          content: 'Responsive design ensures websites work on all screen sizes.\n\nMedia queries apply styles based on conditions:\n@media (max-width: 768px) {\n    .container { flex-direction: column; }\n}\n\nViewport meta tag:\n<meta name="viewport" content="width=device-width, initial-scale=1">\n\nCSS units: rem, em, vw, vh, %, fr\n\nMobile-first approach: write base styles for mobile, add breakpoints for larger screens.\n\nUse rem for font sizes, % for widths, vh/vw for full-screen elements.',
          codeExamples: [
            {
              title: 'Responsive Page',
              code: '<!DOCTYPE html>\n<html>\n<head>\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n<style>\n    * { box-sizing: border-box; }\n    body { font-family: Arial; margin: 0; }\n    \n    .container {\n        display: flex;\n        flex-wrap: wrap;\n    }\n    .sidebar { width: 250px; background: #f4f4f4; padding: 20px; }\n    .main { flex: 1; padding: 20px; }\n    \n    @media (max-width: 768px) {\n        .sidebar { width: 100%; }\n        body { font-size: 14px; }\n    }\n    \n    @media (max-width: 480px) {\n        .container { flex-direction: column; }\n    }\n</style>\n</head>\n<body>\n    <div class="container">\n        <div class="sidebar">Sidebar content</div>\n        <div class="main">Main content area</div>\n    </div>\n</body>\n</html>'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does CSS stand for?',
          options: ['Cascading Style Sheets', 'Computer Style System', 'Creative Style Sheets', 'Coded Style Syntax'],
          correct: 0
        },
        {
          question: 'What display value enables Flexbox?',
          options: ['block', 'flex', 'grid', 'inline'],
          correct: 1
        },
        {
          question: 'What CSS feature makes designs adapt to screen size?',
          options: ['Flexbox', 'Media queries', 'Grid', 'Animations'],
          correct: 1
        }
      ]
    },
    {
      id: 'web_javascript',
      title: 'JavaScript - Interactivity',
      lessons: [
        {
          id: 'js_intro',
          title: 'JavaScript Basics',
          content: 'JavaScript adds interactivity to web pages. It is a dynamic, interpreted language that runs in the browser.\n\nVariables:\nvar, let (block-scoped), const (cannot reassign)\n\nTypes: string, number, boolean, null, undefined, object, array\n\nFunctions:\nfunction add(a, b) { return a + b; }\nconst add = (a, b) => a + b;\n\nControl flow: if/else, for, while, switch\n\nDOM manipulation: document.getElementById(), querySelector(), addEventListener()',
          codeExamples: [
            {
              title: 'JS Basics',
              code: '// Variables\nlet name = "JavaScript";\nconst year = 1995;\n\n// Functions\nfunction greet(name) {\n    return "Hello, " + name + "!";\n}\n\nconst arrowGreet = (name) => "Hi, " + name + "!";\n\n// Arrays\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\n\n// Objects\nconst person = {\n    name: "Alice",\n    age: 30,\n    greet: function() {\n        console.log("Hi, I am " + this.name);\n    }\n};\n\n// DOM\n// document.getElementById("btn").addEventListener("click", () => {\n//     alert("Clicked!");\n// });'
            }
          ]
        },
        {
          id: 'js_dom',
          title: 'DOM Manipulation',
          content: 'The DOM (Document Object Model) API lets JavaScript interact with HTML.\n\nSelecting elements:\ndocument.getElementById("id")\ndocument.querySelector(".class")\ndocument.querySelectorAll("div p")\n\nModifying:\nelement.textContent = "new text"\nelement.innerHTML = "<b>bold</b>"\nelement.style.color = "red"\nelement.classList.add("active")\n\nCreating elements:\nconst div = document.createElement("div")\nparent.appendChild(div)\n\nEvents: click, submit, keydown, mouseover, load, scroll',
          codeExamples: [
            {
              title: 'DOM Manipulation',
              code: '<!DOCTYPE html>\n<html>\n<body>\n    <h1 id="title">Click the button</h1>\n    <button id="btn">Click me</button>\n    <ul id="list"></ul>\n    \n<script>\n    const title = document.getElementById("title");\n    const btn = document.getElementById("btn");\n    const list = document.getElementById("list");\n    let count = 0;\n    \n    btn.addEventListener("click", () => {\n        count++;\n        title.textContent = `Clicked ${count} times`;\n        \n        const li = document.createElement("li");\n        li.textContent = `Click #${count}`;\n        list.appendChild(li);\n    });\n    \n    // Change color on hover\n    title.addEventListener("mouseenter", () => {\n        title.style.color = "blue";\n    });\n    title.addEventListener("mouseleave", () => {\n        title.style.color = "black";\n    });\n</script>\n</body>\n</html>'
            }
          ]
        },
        {
          id: 'js_async',
          title: 'Async JavaScript',
          content: 'JavaScript handles asynchronous operations with callbacks, Promises, and async/await.\n\nPromises represent eventual completion:\nfetch("https://api.example.com/data")\n    .then(res => res.json())\n    .then(data => console.log(data))\n    .catch(err => console.error(err))\n\nAsync/await (cleaner syntax):\nasync function getData() {\n    try {\n        const res = await fetch("/api/data");\n        const data = await res.json();\n        return data;\n    } catch (err) {\n        console.error(err);\n    }\n}\n\nJSON.parse() / JSON.stringify() for data serialization.',
          codeExamples: [
            {
              title: 'Async/Await',
              code: '// Fetch with async/await\nasync function getUser(userId) {\n    try {\n        const response = await fetch(\n            `https://jsonplaceholder.typicode.com/users/${userId}`\n        );\n        if (!response.ok) throw new Error("Not found");\n        const user = await response.json();\n        return user;\n    } catch (error) {\n        console.error("Error:", error);\n        return null;\n    }\n}\n\n// Promise.all for parallel requests\nasync function getUsers() {\n    const ids = [1, 2, 3];\n    const users = await Promise.all(\n        ids.map(id => getUser(id))\n    );\n    console.log(users);\n}\n\ngetUsers();\n\n// setTimeout delay helper\nconst delay = ms => new Promise(r => setTimeout(r, ms));\n\nasync function demo() {\n    console.log("Waiting...");\n    await delay(1000);\n    console.log("Done!");\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which keyword declares a block-scoped variable?',
          options: ['var', 'let', 'const', 'both let and const'],
          correct: 3
        },
        {
          question: 'What method adds an event listener?',
          options: ['onEvent()', 'addEventListener()', 'listen()', 'attachEvent()'],
          correct: 1
        },
        {
          question: 'What does JSON.stringify() do?',
          options: ['Parses JSON', 'Converts object to JSON string', 'Validates JSON', 'Fetches JSON data'],
          correct: 1
        }
      ]
    },
    {
      id: 'web_react',
      title: 'React - Modern UI',
      lessons: [
        {
          id: 'react_intro',
          title: 'React Basics',
          content: 'React is a JavaScript library for building user interfaces. It uses a component-based architecture.\n\nComponents: reusable pieces of UI that return JSX.\n\nJSX: HTML-like syntax in JavaScript:\nfunction Welcome({ name }) {\n    return <h1>Hello, {name}!</h1>;\n}\n\nProps: arguments passed to components\nState: data that changes over time (useState hook)\n\nVirtual DOM: React updates only changed parts of the real DOM.',
          codeExamples: [
            {
              title: 'First React Component',
              code: 'import React, { useState } from "react";\n\nfunction Counter() {\n    const [count, setCount] = useState(0);\n    \n    return (\n        <div>\n            <h2>Count: {count}</h2>\n            <button onClick={() => setCount(c => c + 1)}>+</button>\n            <button onClick={() => setCount(c => c - 1)}>-</button>\n        </div>\n    );\n}\n\nfunction App() {\n    return (\n        <div>\n            <h1>My React App</h1>\n            <Counter />\n        </div>\n    );\n}\n\nexport default App;'
            }
          ]
        },
        {
          id: 'react_hooks',
          title: 'Hooks and Effects',
          content: 'Hooks let function components use state and lifecycle features.\n\nuseState: state management\nconst [name, setName] = useState("");\n\nuseEffect: side effects (fetching, subscriptions):\nuseEffect(() => {\n    fetchData();\n    return () => cleanup(); // optional cleanup\n}, [dependency]);\n\nOther hooks:\n• useContext - consume context\n• useRef - reference DOM elements\n• useReducer - complex state logic\n• useMemo - memoized values\n• useCallback - memoized functions\n\nCustom hooks: reuse stateful logic across components.',
          codeExamples: [
            {
              title: 'useEffect Example',
              code: 'import React, { useState, useEffect } from "react";\n\nfunction UserList() {\n    const [users, setUsers] = useState([]);\n    const [loading, setLoading] = useState(true);\n    const [error, setError] = useState(null);\n    \n    useEffect(() => {\n        fetch("https://jsonplaceholder.typicode.com/users")\n            .then(res => {\n                if (!res.ok) throw new Error("Failed");\n                return res.json();\n            })\n            .then(data => {\n                setUsers(data);\n                setLoading(false);\n            })\n            .catch(err => {\n                setError(err.message);\n                setLoading(false);\n            });\n    }, []); // empty deps = run once\n    \n    if (loading) return <p>Loading...</p>;\n    if (error) return <p>Error: {error}</p>;\n    \n    return (\n        <ul>\n            {users.map(user => (\n                <li key={user.id}>{user.name} - {user.email}</li>\n            ))}\n        </ul>\n    );\n}'
            }
          ]
        },
        {
          id: 'react_components',
          title: 'Component Patterns',
          content: 'React encourages reusable, composable components.\n\nConditional rendering:\n{isLoggedIn ? <Dashboard /> : <Login />}\n{isLoading && <Spinner />}\n\nLists with keys:\n{items.map(item => <Item key={item.id} />)}\n\nLifting state up: share state between components by moving it to common ancestor.\n\nChildren prop: <Card><p>content</p></Card>\nfunction Card({ children }) { return <div className="card">{children}</div>; }\n\nForms: controlled components with state.\n\nStyling: CSS modules, styled-components, Tailwind CSS.',
          codeExamples: [
            {
              title: 'Component Composition',
              code: 'import React, { useState } from "react";\n\n// Reusable card component\nfunction Card({ title, children }) {\n    return (\n        <div style={{\n            border: "1px solid #ddd",\n            borderRadius: 8,\n            padding: 16,\n            margin: 8\n        }}>\n            {title && <h3>{title}</h3>}\n            {children}\n        </div>\n    );\n}\n\n// Toggle component\nfunction Toggle() {\n    const [on, setOn] = useState(false);\n    return (\n        <button onClick={() => setOn(!on)}>\n            {on ? "ON" : "OFF"}\n        </button>\n    );\n}\n\n// Main app\nfunction App() {\n    return (\n        <div>\n            <Card title="Controls">\n                <Toggle />\n            </Card>\n            <Card title="Info">\n                <p>React components are composable</p>\n            </Card>\n        </div>\n    );\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is JSX?',
          options: ['A template engine', 'HTML-like syntax in JavaScript', 'CSS preprocessor', 'Build tool'],
          correct: 1
        },
        {
          question: 'What hook manages state in React?',
          options: ['useEffect', 'useState', 'useReducer', 'useMemo'],
          correct: 1
        },
        {
          question: 'What prop key is needed for lists in React?',
          options: ['id', 'ref', 'key', 'index'],
          correct: 2
        }
      ]
    }
  ]
};
