export const nextjsCourse = {
  id: 'nextjs',
  title: 'Next.js',
  subtitle: 'React framework for production',
  icon: '▲',
  color: '#000000',
  bgColor: '#F5F5F5',
  description: 'Next.js is a React framework for building full-stack web applications. It provides server-side rendering, static generation, API routes, and file-based routing out of the box.',
  chapters: [
    {
      id: 'next_intro',
      title: 'Introduction to Next.js',
      lessons: [
        {
          id: 'next_what_is',
          title: 'What is Next.js?',
          content: 'Next.js, created by Vercel, is a React framework that provides production-grade features for web applications.\n\nKey features:\n• Server-Side Rendering (SSR) - pages rendered on the server\n• Static Site Generation (SSG) - pre-rendered at build time\n• File-based routing - pages created by file structure\n• API routes - backend endpoints in the same project\n• Image optimization - automatic image resizing\n• Fast Refresh - instant feedback during development\n\nNext.js eliminates the need to configure Webpack, Babel, and other tooling manually.',
          codeExamples: [
            {
              title: 'Create a Next.js App',
              code: '# Create a new Next.js project\nnpx create-next-app@latest my-app\ncd my-app\n\n# Run development server\nnpm run dev\n\n# Your app is now running on http://localhost:3000\n\n# Project structure:\n# my-app/\n#   app/       # App Router pages\n#   public/    # Static assets\n#   package.json'
            }
          ]
        },
        {
          id: 'next_project',
          title: 'Project Structure',
          content: 'Next.js has two routing approaches: Pages Router (traditional) and App Router (new, recommended).\n\nApp Router structure:\napp/\n  layout.js      # Root layout (wraps all pages)\n  page.js         # Home page (/)\n  about/\n    page.js       # /about\n  blog/\n    [slug]/\n      page.js     # /blog/:slug\n  api/\n    hello.js      # API route /api/hello\n\nEach folder creates a route segment. page.js exports the UI for that route.\n\nlayout.js wraps child pages with shared UI (headers, footers).\n\nloading.js shows a loading state. error.js catches errors.',
          codeExamples: [
            {
              title: 'App Router Structure',
              code: '// app/layout.js - Root layout\nimport Link from "next/link";\n\nexport default function RootLayout({ children }) {\n    return (\n        <html>\n            <body>\n                <nav>\n                    <Link href="/">Home</Link>\n                    <Link href="/about">About</Link>\n                </nav>\n                {children}\n            </body>\n        </html>\n    );\n}\n\n// app/page.js - Home page\nexport default function Home() {\n    return <h1>Hello, Next.js!</h1>;\n}\n\n// app/about/page.js - About page\nexport default function About() {\n    return <h1>About Us</h1>;\n}'
            }
          ]
        },
        {
          id: 'next_ssr',
          title: 'Rendering Strategies',
          content: 'Next.js supports multiple rendering strategies:\n\nStatic Generation (SSG):\nHTML generated at build time. Fastest option.\nDefault for pages without dynamic data.\n\nexport default function Page() { return <h1>Static</h1>; }\n\nServer-Side Rendering (SSR):\nHTML generated on each request.\nUse when data changes frequently.\n\nexport default async function Page() {\n    const data = await fetch("https://api.example.com/data");\n    return <div>{/* render data */}</div>;\n}\n\nIn App Router, components are server components by default.\n\nClient Components: add "use client" at the top for interactivity (hooks, events).',
          codeExamples: [
            {
              title: 'Server vs Client Components',
              code: '// Server Component (default)\n// app/page.js\nasync function getPosts() {\n    const res = await fetch("https://jsonplaceholder.typicode.com/posts");\n    return res.json();\n}\n\nexport default async function Page() {\n    const posts = await getPosts();\n    return (\n        <ul>\n            {posts.slice(0, 5).map(p => (\n                <li key={p.id}>{p.title}</li>\n            ))}\n        </ul>\n    );\n}\n\n// Client Component (interactive)\n// app/counter.js\n"use client";\nimport { useState } from "react";\n\nexport default function Counter() {\n    const [count, setCount] = useState(0);\n    return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Who created Next.js?',
          options: ['Google', 'Vercel', 'Meta', 'Amazon'],
          correct: 1
        },
        {
          question: 'Which file defines the root layout in App Router?',
          options: ['index.js', 'layout.js', 'root.js', 'app.js'],
          correct: 1
        },
        {
          question: 'What directive makes a component interactive?',
          options: ['"use client"', '"use server"', '"use interactive"', '"client component"'],
          correct: 0
        }
      ]
    },
    {
      id: 'next_routing',
      title: 'Pages and Routing',
      lessons: [
        {
          id: 'next_file_routing',
          title: 'File-Based Routing',
          content: 'Next.js uses the file system to define routes.\n\napp/page.js         -> /\napp/about/page.js   -> /about\napp/blog/page.js    -> /blog\n\nDynamic routes use brackets:\napp/blog/[slug]/page.js  -> /blog/:slug\napp/products/[id]/page.js -> /products/:id\n\nCatch-all routes: [...slug] matches /a, /a/b, /a/b/c\n\nRoute groups: (marketing)/about/page.js (folder in parentheses, ignored in URL)\n\nLink component for navigation:\nimport Link from "next/link";\n<Link href="/about">About</Link>',
          codeExamples: [
            {
              title: 'Dynamic Routes',
              code: '// app/products/[id]/page.js\nexport default async function Product({ params }) {\n    const { id } = await params;\n    \n    const product = await fetch(\n        `https://fakestoreapi.com/products/${id}`\n    ).then(r => r.json());\n    \n    return (\n        <div>\n            <h1>{product.title}</h1>\n            <p>${product.price}</p>\n            <p>{product.description}</p>\n        </div>\n    );\n}\n\n// app/products/page.js - List all products\nexport default async function Products() {\n    const products = await fetch(\n        "https://fakestoreapi.com/products"\n    ).then(r => r.json());\n    \n    return (\n        <div>\n            {products.map(p => (\n                <div key={p.id}>\n                    <Link href={`/products/${p.id}`}>\n                        {p.title}\n                    </Link>\n                </div>\n            ))}\n        </div>\n    );\n}'
            }
          ]
        },
        {
          id: 'next_layouts',
          title: 'Layouts and Templates',
          content: 'Layouts persist across pages and do not remount on navigation.\n\n// app/layout.js - wraps all pages\nexport default function RootLayout({ children }) {\n    return (\n        <html>\n            <body>\n                <header>Shared Header</header>\n                {children}\n                <footer>Shared Footer</footer>\n            </body>\n        </html>\n    );\n}\n\nNested layouts:\napp/layout.js          -> wraps everything\napp/dashboard/layout.js -> wraps only /dashboard/* pages\n\nTemplates (template.js) remount on every navigation (for animations, analytics).\n\nMetadata API for SEO:\nexport const metadata = { title: "My Page", description: "..." };',
          codeExamples: [
            {
              title: 'Nested Layouts',
              code: '// app/layout.js - Root layout\nexport const metadata = {\n    title: "My App",\n    description: "Built with Next.js"\n};\n\nexport default function RootLayout({ children }) {\n    return (\n        <html lang="en">\n            <body>\n                <nav style={{ padding: 16, background: "#333", color: "#fff" }}>\n                    My App\n                </nav>\n                <main style={{ padding: 24 }}>{children}</main>\n                <footer style={{ padding: 16, textAlign: "center" }}>\n                    &copy; 2026\n                </footer>\n            </body>\n        </html>\n    );\n}\n\n// app/dashboard/layout.js - Dashboard layout\nexport default function DashboardLayout({ children }) {\n    return (\n        <div style={{ display: "flex" }}>\n            <aside style={{ width: 200, background: "#f4f4f4", padding: 16 }}>\n                Dashboard Sidebar\n            </aside>\n            <section style={{ flex: 1, padding: 16 }}>\n                {children}\n            </section>\n        </div>\n    );\n}'
            }
          ]
        },
        {
          id: 'next_navigation',
          title: 'Navigation and Links',
          content: 'Next.js provides Link and useRouter for navigation.\n\nLink component (preferred):\nimport Link from "next/link";\n<Link href="/about">About</Link>\n<Link href={`/blog/${slug}`}>Post</Link>\n\nLink prefetches pages in the background for instant navigation.\n\nuseRouter hook (programmatic):\n"use client";\nimport { useRouter } from "next/navigation";\n\nfunction MyButton() {\n    const router = useRouter();\n    return <button onClick={() => router.push("/about")}>Go</button>;\n}\n\nShallow routing: router.push("/path", { scroll: false })\n\nusePathname() gets current path. useSearchParams() gets query parameters.',
          codeExamples: [
            {
              title: 'Navigation Examples',
              code: '"use client";\nimport { useRouter, usePathname, useSearchParams } from "next/navigation";\nimport Link from "next/link";\n\nexport default function Navigation() {\n    const router = useRouter();\n    const pathname = usePathname();\n    const searchParams = useSearchParams();\n    \n    return (\n        <div>\n            <p>Current path: {pathname}</p>\n            \n            {/* Link component */}\n            <Link href="/" style={{ marginRight: 12 }}>Home</Link>\n            <Link href="/about">About</Link>\n            \n            {/* Programmatic navigation */}\n            <button onClick={() => router.push("/dashboard")}>\n                Go to Dashboard\n            </button>\n            \n            {/* With query params */}\n            <Link href="/search?q=nextjs">Search Next.js</Link>\n            \n            {/* Replace (no history) */}\n            <button onClick={() => router.replace("/login")}>\n                Login (no back)\n            </button>\n        </div>\n    );\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'How do you create a dynamic route for product IDs?',
          options: ['app/product/:id/page.js', 'app/products/[id]/page.js', 'app/products/$id/page.js', 'app/products/<id>/page.js'],
          correct: 1
        },
        {
          question: 'What component is used for client-side navigation?',
          options: ['<a>', '<Link>', '<Nav>', '<Route>'],
          correct: 1
        },
        {
          question: 'Do layouts remount on navigation?',
          options: ['Yes', 'No, they persist'],
          correct: 1
        }
      ]
    },
    {
      id: 'next_data',
      title: 'Data Fetching',
      lessons: [
        {
          id: 'next_fetching',
          title: 'Server Data Fetching',
          content: 'In the App Router, server components can fetch data directly using async/await.\n\nexport default async function Page() {\n    const data = await fetch("https://api.example.com/data");\n    const json = await data.json();\n    return <div>{/* render */}</div>;\n}\n\nfetch options:\n{ cache: "force-cache" } - static (default)\n{ cache: "no-store" } - dynamic\n{ next: { revalidate: 60 } } - ISR (revalidate every 60 seconds)\n\nParallel data fetching with Promise.all:\nconst [user, posts] = await Promise.all([\n    fetch("/api/user"),\n    fetch("/api/posts")\n]);\n\nSequential fetching (waterfall) is slower, avoid when possible.',
          codeExamples: [
            {
              title: 'Data Fetching Patterns',
              code: '// Static data (fetched at build time)\nexport default async function StaticPage() {\n    const data = await fetch("https://api.github.com/repos/vercel/next.js", {\n        cache: "force-cache"\n    });\n    const repo = await data.json();\n    return <div>Stars: {repo.stargazers_count}</div>;\n}\n\n// Dynamic data (fetched on each request)\nexport default async function DynamicPage() {\n    const data = await fetch("https://api.example.com/live", {\n        cache: "no-store"\n    });\n    // render...\n}\n\n// Incremental Static Regeneration\nexport default async function ISRPage() {\n    const data = await fetch("https://api.example.com/stats", {\n        next: { revalidate: 60 } // regenerate every 60 seconds\n    });\n    // render...\n}\n\n// Parallel fetching\nasync function getHero() {\n    return fetch("https://api.example.com/hero").then(r => r.json());\n}\n\nasync function getFeatured() {\n    return fetch("https://api.example.com/featured").then(r => r.json());\n}\n\nexport default async function Home() {\n    const [hero, featured] = await Promise.all([\n        getHero(),\n        getFeatured()\n    ]);\n    return <div>{/* render both */}</div>;\n}'
            }
          ]
        },
        {
          id: 'next_api',
          title: 'API Routes',
          content: 'Next.js lets you create API endpoints within your app.\n\nRoute handlers:\napp/api/hello/route.js -> GET /api/hello\n\nexport async function GET() {\n    return Response.json({ message: "Hello" });\n}\n\nMethods: GET, POST, PUT, PATCH, DELETE\n\nAccess params from URL:\nexport async function GET(req, { params }) {\n    const { id } = await params;\n    const data = await db.find(id);\n    return Response.json(data);\n}\n\nRead request body:\nexport async function POST(req) {\n    const body = await req.json();\n    return Response.json({ received: true });\n}\n\nYou can also read cookies, headers, and search params from the request.',
          codeExamples: [
            {
              title: 'API Routes',
              code: '// app/api/posts/route.js - GET all posts\nexport async function GET() {\n    const posts = [\n        { id: 1, title: "First Post" },\n        { id: 2, title: "Second Post" }\n    ];\n    return Response.json(posts);\n}\n\n// app/api/posts/[id]/route.js - GET single post\nexport async function GET(req, { params }) {\n    const { id } = await params;\n    // Fetch from database\n    return Response.json({ id, title: `Post ${id}` });\n}\n\n// app/api/contact/route.js - POST handler\nexport async function POST(req) {\n    try {\n        const body = await req.json();\n        const { name, email, message } = body;\n        \n        // Validate\n        if (!name || !email) {\n            return Response.json(\n                { error: "Name and email required" },\n                { status: 400 }\n            );\n        }\n        \n        // Save to database\n        return Response.json(\n            { success: true, message: "Message sent" },\n            { status: 201 }\n        );\n    } catch (error) {\n        return Response.json(\n            { error: "Internal server error" },\n            { status: 500 }\n        );\n    }\n}'
            }
          ]
        },
        {
          id: 'next_isr',
          title: 'ISR and Caching',
          content: 'Incremental Static Regeneration (ISR) combines static generation with dynamic updates.\n\nWith fetch:\nawait fetch(url, { next: { revalidate: 60 } });\n\nThis regenerates the page in the background every 60 seconds while serving the cached version.\n\nOn-demand revalidation (via API route):\nimport { revalidatePath } from "next/cache";\nimport { revalidateTag } from "next/cache";\n\nexport async function POST(req) {\n    // Update data...\n    revalidatePath("/blog");\n    revalidateTag("posts");\n    return Response.json({ revalidated: true });\n}\n\nTags let you group related fetches and revalidate them together.\n\nstale-while-revalidate pattern: serve stale data while fetching fresh data in background.',
          codeExamples: [
            {
              title: 'ISR and Revalidation',
              code: '// app/blog/page.js - ISR blog list\nasync function getPosts() {\n    const res = await fetch("https://api.example.com/posts", {\n        next: {\n            revalidate: 60,\n            tags: ["posts"]\n        }\n    });\n    return res.json();\n}\n\nexport default async function Blog() {\n    const posts = await getPosts();\n    return (\n        <div>\n            {posts.map(p => (\n                <article key={p.id}>\n                    <h2>{p.title}</h2>\n                </article>\n            ))}\n        </div>\n    );\n}\n\n// app/api/revalidate/route.js - On-demand revalidation\nimport { revalidateTag, revalidatePath } from "next/cache";\n\nexport async function POST(req) {\n    const body = await req.json();\n    \n    if (body.tag) {\n        revalidateTag(body.tag);\n    }\n    if (body.path) {\n        revalidatePath(body.path);\n    }\n    \n    return Response.json({ revalidated: true });\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What option makes fetch dynamic (no caching)?',
          options: ['{ cache: "no-store" }', '{ dynamic: true }', '{ cache: false }', '{ next: { dynamic: true } }'],
          correct: 0
        },
        {
          question: 'What file creates an API route at /api/hello?',
          options: ['app/api/hello.js', 'app/api/hello/route.js', 'pages/api/hello.js', 'api/hello.js'],
          correct: 1
        },
        {
          question: 'What function revalidates a path on demand?',
          options: ['revalidatePath()', 'refreshPath()', 'revalidate()', 'clearCache()'],
          correct: 0
        }
      ]
    },
    {
      id: 'next_fullstack',
      title: 'Full Stack Features',
      lessons: [
        {
          id: 'next_middleware',
          title: 'Middleware',
          content: 'Middleware runs before every request and can modify the response.\n\n// middleware.js at project root\nexport function middleware(request) {\n    const token = request.cookies.get("token");\n    \n    if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {\n        return Response.redirect(new URL("/login", request.url));\n    }\n}\n\nexport const config = {\n    matcher: ["/dashboard/:path*", "/admin/:path*"]\n};\n\nMiddleware can:\n• Redirect users based on auth\n• Rewrite URLs\n• Add headers\n• Implement A/B testing\n• Block certain countries/regions\n\nMiddleware runs on the Edge runtime (fast, global).',
          codeExamples: [
            {
              title: 'Authentication Middleware',
              code: '// middleware.js\nimport { NextResponse } from "next/server";\n\nexport function middleware(request) {\n    const token = request.cookies.get("auth-token");\n    const isAuthPage = request.nextUrl.pathname.startsWith("/login");\n    const isProtected = request.nextUrl.pathname.startsWith("/dashboard");\n    \n    // Redirect to login if not authenticated\n    if (!token && isProtected) {\n        const loginUrl = new URL("/login", request.url);\n        loginUrl.searchParams.set("redirect", request.nextUrl.pathname);\n        return NextResponse.redirect(loginUrl);\n    }\n    \n    // Redirect to dashboard if already logged in\n    if (token && isAuthPage) {\n        return NextResponse.redirect(new URL("/dashboard", request.url));\n    }\n    \n    // Add security headers\n    const response = NextResponse.next();\n    response.headers.set("X-Frame-Options", "DENY");\n    response.headers.set("X-Content-Type-Options", "nosniff");\n    \n    return response;\n}\n\nexport const config = {\n    matcher: [\n        "/dashboard/:path*",\n        "/admin/:path*",\n        "/login"\n    ]\n};'
            }
          ]
        },
        {
          id: 'next_images',
          title: 'Image and Font Optimization',
          content: 'Next.js provides built-in image and font optimization.\n\nImage component:\nimport Image from "next/image";\n\n<Image\n    src="/hero.jpg"\n    alt="Hero"\n    width={1200}\n    height={600}\n    priority // above-the-fold images\n/>\n\nBenefits: lazy loading, responsive images, WebP format, CLS prevention.\n\nFor external images, configure domains in next.config.js:\nremotePatterns: [\n    { protocol: "https", hostname: "images.unsplash.com" }\n]\n\nFont optimization with next/font:\nimport { Inter } from "next/font/google";\nconst inter = Inter({ subsets: ["latin"] });\n\nFonts are self-hosted, no external requests. Automatically optimizes font loading.',
          codeExamples: [
            {
              title: 'Images and Fonts',
              code: '// app/layout.js\nimport { Inter } from "next/font/google";\nimport Image from "next/image";\n\nconst inter = Inter({\n    subsets: ["latin"],\n    display: "swap"\n});\n\nexport default function RootLayout({ children }) {\n    return (\n        <html className={inter.className}>\n            <body>\n                {children}\n            </body>\n        </html>\n    );\n}\n\n// app/page.js\nexport default function Home() {\n    return (\n        <div>\n            <h1>Optimized Images</h1>\n            \n            {/* Local image */}\n            <Image\n                src="/hero.png"\n                alt="Hero"\n                width={800}\n                height={400}\n                priority\n            />\n            \n            {/* Remote image */}\n            <Image\n                src="https://images.unsplash.com/photo-1"\n                alt="Remote"\n                width={800}\n                height={600}\n            />\n            \n            {/* Fill parent container */}\n            <div style={{ position: "relative", height: 300 }}>\n                <Image\n                    src="/banner.jpg"\n                    alt="Banner"\n                    fill\n                    style={{ objectFit: "cover" }}\n                />\n            </div>\n        </div>\n    );\n}'
            }
          ]
        },
        {
          id: 'next_deploy',
          title: 'Deployment',
          content: 'Next.js apps can be deployed to various platforms.\n\nVercel (recommended, built by Next.js team):\n1. Push code to GitHub\n2. Import repo in Vercel\n3. Auto-deploys on every push\n\nBuild command: next build\nOutput: .next folder\n\nSelf-hosting:\nnpm run build\nnpm run start  # production server\n\nNode.js server required. Can use Docker, PM2, or process manager.\n\nEnvironment variables:\n.env.local (local, gitignored)\n.env (committed defaults)\nNEXT_PUBLIC_ prefix exposes to client\n\nAnalytics, monitoring, and logging should be configured for production apps.',
          codeExamples: [
            {
              title: 'Deployment Configuration',
              code: '// next.config.js\n/** @type {import("next").NextConfig} */\nconst nextConfig = {\n    images: {\n        remotePatterns: [\n            {\n                protocol: "https",\n                hostname: "images.unsplash.com",\n            },\n            {\n                protocol: "https",\n                hostname: "**.amazonaws.com",\n            },\n        ],\n    },\n    \n    // Enable React strict mode\n    reactStrictMode: true,\n    \n    // Output for self-hosting\n    // output: "standalone" reduces image size\n    \n    // Headers for security\n    async headers() {\n        return [\n            {\n                source: "/(.*)",\n                headers: [\n                    { key: "X-Frame-Options", value: "DENY" },\n                    { key: "X-Content-Type-Options", value: "nosniff" },\n                ],\n            },\n        ];\n    },\n};\n\nmodule.exports = nextConfig;\n\n// .env.local (not committed)\n// DATABASE_URL=postgres://...\n// AUTH_SECRET=my-secret\n\n// .env (committed, defaults)\n// NEXT_PUBLIC_SITE_URL=http://localhost:3000'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Where does middleware file go?',
          options: ['app/middleware.js', 'middleware.js at project root', 'pages/middleware.js', 'src/middleware.js'],
          correct: 1
        },
        {
          question: 'What component optimizes images in Next.js?',
          options: ['<OptimizedImage>', '<Image>', '<Img>', '<Picture>'],
          correct: 1
        },
        {
          question: 'Which platform is made by the Next.js team?',
          options: ['Netlify', 'Vercel', 'AWS', 'Cloudflare'],
          correct: 1
        }
      ]
    }
  ]
};
