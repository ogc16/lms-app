export const calculusCourse = {
  id: 'calculus',
  title: 'Calculus 1',
  subtitle: 'SMA 2101 — Calculus 1',
  icon: '∫',
  color: '#2c3e50',
  bgColor: '#F4F6F7',
  description: 'Calculus 1 covering limits, derivatives, integration, and applications of differential and integral calculus.',
  chapters: [
    {
      id: 'calc_functions',
      title: 'Functions and Their Graphs',
      lessons: [
        {
          id: 'calc_func_intro',
          title: 'Introduction to Functions',
          content: 'A function f from a set A to a set B assigns exactly one element in B to each element in A. We write f: A → B and denote f(x) as the value of f at x.\n\nKey concepts:\n• Domain: The set of all possible inputs\n• Range: The set of all possible outputs\n• Vertical line test: A graph represents a function if no vertical line intersects it more than once\n\nCommon function types include linear, quadratic, polynomial, rational, trigonometric, exponential, and logarithmic functions.',
        },
        {
          id: 'calc_graphs',
          title: 'Graphing Functions',
          content: 'Graphs provide a visual representation of functions. Key transformations include:\n\n• Vertical shift: f(x) + k moves up by k\n• Horizontal shift: f(x - h) moves right by h\n• Reflection: -f(x) reflects over x-axis, f(-x) reflects over y-axis\n• Stretch/compression: af(x) stretches vertically by factor a\n\nKey features to identify: intercepts, symmetry, asymptotes, intervals of increase/decrease, and end behavior.',
        }
      ],
      quiz: [
        {
          question: 'Which test determines if a graph represents a function?',
          options: ['Horizontal line test', 'Vertical line test', 'Slope test', 'Derivative test'],
          correct: 1
        },
        {
          question: 'What is the domain of f(x) = 1/(x - 2)?',
          options: ['All real numbers', 'x ≠ 2', 'x > 2', 'x < 2'],
          correct: 1
        },
        {
          question: 'How does the graph of f(x) + 3 compare to f(x)?',
          options: ['Shifted right 3', 'Shifted left 3', 'Shifted up 3', 'Shifted down 3'],
          correct: 2
        }
      ]
    },
    {
      id: 'calc_limits',
      title: 'Limits and Continuity',
      lessons: [
        {
          id: 'calc_limits_intro',
          title: 'Introduction to Limits',
          content: 'The limit of a function f(x) as x approaches a is the value that f(x) gets arbitrarily close to. We write lim_{x→a} f(x) = L.\n\nProperties of limits:\n• lim_{x→a} [f(x) ± g(x)] = lim f(x) ± lim g(x)\n• lim_{x→a} [f(x) · g(x)] = lim f(x) · lim g(x)\n• lim_{x→a} [f(x)/g(x)] = lim f(x) / lim g(x), if lim g(x) ≠ 0\n\nOne-sided limits consider approach from left (x → a⁻) or right (x → a⁺). The limit exists only when both one-sided limits are equal.',
        },
        {
          id: 'calc_continuity',
          title: 'Continuity',
          content: 'A function f is continuous at x = a if:\n1. f(a) is defined\n2. lim_{x→a} f(x) exists\n3. lim_{x→a} f(x) = f(a)\n\nTypes of discontinuities:\n• Removable (hole): limit exists but function undefined or different\n• Jump: left and right limits exist but differ\n• Infinite: function approaches ±∞ (vertical asymptote)\n\nThe Intermediate Value Theorem: If f is continuous on [a, b] and k is between f(a) and f(b), then there exists c in (a, b) with f(c) = k.',
        }
      ],
      quiz: [
        {
          question: 'When does lim_{x→a} f(x) exist?',
          options: ['When f(a) is defined', 'When left and right limits are equal', 'When f is continuous at a', 'When the limit is finite'],
          correct: 1
        },
        {
          question: 'What type of discontinuity occurs at a vertical asymptote?',
          options: ['Removable', 'Jump', 'Infinite', 'Oscillating'],
          correct: 2
        },
        {
          question: 'What is lim_{x→0} sin(x)/x?',
          options: ['0', '1', '∞', 'Does not exist'],
          correct: 1
        }
      ]
    },
    {
      id: 'calc_derivatives',
      title: 'Derivatives',
      lessons: [
        {
          id: 'calc_derivative_intro',
          title: 'The Derivative',
          content: 'The derivative of a function f at x measures the instantaneous rate of change. It is defined as the limit of the difference quotient:\n\nf\'(x) = lim_{h→0} [f(x + h) - f(x)] / h\n\nGeometrically, f\'(a) is the slope of the tangent line to the graph of f at x = a. The equation of the tangent line at (a, f(a)) is y - f(a) = f\'(a)(x - a).\n\nA function is differentiable at a if the derivative exists there. Differentiability implies continuity, but continuity does not imply differentiability.',
        }
      ],
      quiz: [
        {
          question: 'What does the derivative represent geometrically?',
          options: ['Area under the curve', 'Slope of the tangent line', 'Slope of the secant line', 'Length of the curve'],
          correct: 1
        },
        {
          question: 'If a function is differentiable at a point, what else must be true?',
          options: ['It is continuous there', 'It is increasing there', 'It has a maximum there', 'It is positive there'],
          correct: 0
        }
      ]
    },
    {
      id: 'calc_diff_rules',
      title: 'Differentiation Rules',
      lessons: [
        {
          id: 'calc_basic_rules',
          title: 'Basic Differentiation Rules',
          content: 'Key differentiation rules:\n\n• Constant rule: d/dx[c] = 0\n• Power rule: d/dx[xⁿ] = nxⁿ⁻¹\n• Constant multiple: d/dx[cf(x)] = cf\'(x)\n• Sum/difference: d/dx[f ± g] = f\' ± g\'\n• Product rule: d/dx[fg] = f\'g + fg\'\n• Quotient rule: d/dx[f/g] = (f\'g - fg\')/g²\n• Chain rule: d/dx[f(g(x))] = f\'(g(x)) · g\'(x)',
        },
        {
          id: 'calc_trig_derivatives',
          title: 'Derivatives of Trigonometric Functions',
          content: 'Derivatives of trigonometric functions:\n\n• d/dx[sin x] = cos x\n• d/dx[cos x] = -sin x\n• d/dx[tan x] = sec² x\n• d/dx[cot x] = -csc² x\n• d/dx[sec x] = sec x tan x\n• d/dx[csc x] = -csc x cot x\n\nImplicit differentiation is used when y is not explicitly defined as a function of x. Differentiate both sides with respect to x and solve for dy/dx.',
        }
      ],
      quiz: [
        {
          question: 'What is the derivative of x⁵?',
          options: ['4x⁴', '5x⁴', '5x⁵', 'x⁴'],
          correct: 1
        },
        {
          question: 'What is the derivative of sin(x)?',
          options: ['-cos(x)', 'cos(x)', '-sin(x)', 'tan(x)'],
          correct: 1
        },
        {
          question: 'Which rule is used to differentiate (x² + 1)¹⁰?',
          options: ['Product rule', 'Quotient rule', 'Chain rule', 'Power rule only'],
          correct: 2
        }
      ]
    },
    {
      id: 'calc_apps_derivatives',
      title: 'Applications of Derivatives',
      lessons: [
        {
          id: 'calc_optimization',
          title: 'Optimization and Related Rates',
          content: 'Derivatives are used to solve optimization problems by finding maximum and minimum values of functions.\n\nCritical points occur where f\'(x) = 0 or f\'(x) is undefined. The First Derivative Test determines if a critical point is a local max, min, or neither based on sign changes of f\'.\n\nThe Second Derivative Test: if f\'(c) = 0 and f\'\'(c) > 0, then c is a local minimum; if f\'\'(c) < 0, then c is a local maximum.\n\nRelated rates problems involve finding the rate of change of one quantity in terms of the rate of change of another, using implicit differentiation with respect to time.',
        },
        {
          id: 'calc_graph_analysis',
          title: 'Curve Sketching',
          content: 'Derivatives help analyze function behavior for graphing:\n\n• f\'(x) > 0 means f is increasing\n• f\'(x) < 0 means f is decreasing\n• f\'\'(x) > 0 means f is concave up\n• f\'\'(x) < 0 means f is concave down\n• Inflection points occur where concavity changes (f\'\'(x) = 0 or undefined)\n\nL\'Hôpital\'s Rule: If lim f(x)/g(x) gives 0/0 or ∞/∞, then lim f(x)/g(x) = lim f\'(x)/g\'(x), provided the latter limit exists.',
        }
      ],
      quiz: [
        {
          question: 'If f\'(c) = 0 and f\'\'(c) > 0, what kind of point is c?',
          options: ['Local maximum', 'Local minimum', 'Inflection point', 'Saddle point'],
          correct: 1
        },
        {
          question: 'What does f\'\'(x) > 0 indicate about the graph?',
          options: ['Increasing', 'Decreasing', 'Concave up', 'Concave down'],
          correct: 2
        },
        {
          question: 'What indeterminate forms does L\'Hôpital\'s Rule apply to?',
          options: ['0·∞ and ∞-∞', '0/0 and ∞/∞', '1^∞ and 0⁰', 'All of the above'],
          correct: 1
        }
      ]
    },
    {
      id: 'calc_integration',
      title: 'Integration',
      lessons: [
        {
          id: 'calc_antiderivatives',
          title: 'Antiderivatives and Indefinite Integrals',
          content: 'An antiderivative of f is a function F such that F\'(x) = f(x). The indefinite integral ∫f(x)dx represents the family of all antiderivatives of f, plus a constant C.\n\nBasic integration rules:\n• ∫xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ -1\n• ∫(1/x) dx = ln|x| + C\n• ∫eˣ dx = eˣ + C\n• ∫sin x dx = -cos x + C\n• ∫cos x dx = sin x + C\n\nThe constant of integration C is essential because the derivative of a constant is zero.',
        }
      ],
      quiz: [
        {
          question: 'What is ∫x³ dx?',
          options: ['x⁴ + C', 'x⁴/4 + C', '3x² + C', 'x²/2 + C'],
          correct: 1
        },
        {
          question: 'Why is the constant C added in indefinite integrals?',
          options: ['Because the derivative of a constant is zero', 'To make the answer unique', 'Because integrals are approximations', 'To indicate convergence'],
          correct: 0
        }
      ]
    },
    {
      id: 'calc_techniques_integration',
      title: 'Techniques of Integration',
      lessons: [
        {
          id: 'calc_substitution',
          title: 'Integration by Substitution',
          content: 'Integration by substitution (u-substitution) is the reverse of the chain rule. If u = g(x) and du = g\'(x)dx, then:\n\n∫f(g(x))g\'(x)dx = ∫f(u)du\n\nSteps:\n1. Choose u = g(x)\n2. Compute du = g\'(x)dx\n3. Rewrite the integral in terms of u\n4. Integrate with respect to u\n5. Substitute back to x\n\nThis technique is useful when the integrand contains a function and its derivative.',
        },
        {
          id: 'calc_integration_parts',
          title: 'Integration by Parts',
          content: 'Integration by parts is the reverse of the product rule:\n\n∫u dv = uv - ∫v du\n\nChoose u and dv such that u is easy to differentiate and dv is easy to integrate. A common guideline is the LIATE order for choosing u: Logarithmic, Inverse trigonometric, Algebraic, Trigonometric, Exponential.\n\nOther techniques include trigonometric integrals and partial fractions for rational functions.',
        }
      ],
      quiz: [
        {
          question: 'Which technique reverses the chain rule?',
          options: ['Integration by parts', 'U-substitution', 'Partial fractions', 'Trigonometric substitution'],
          correct: 1
        },
        {
          question: 'Integration by parts reverses which differentiation rule?',
          options: ['Chain rule', 'Product rule', 'Quotient rule', 'Power rule'],
          correct: 1
        },
        {
          question: 'What is ∫2x(x² + 1)³ dx using u-substitution?',
          options: ['(x² + 1)⁴/4 + C', '(x² + 1)³/3 + C', 'x²(x² + 1)³ + C', '(x² + 1)⁴ + C'],
          correct: 0
        }
      ]
    },
    {
      id: 'calc_definite_integrals',
      title: 'Definite Integrals',
      lessons: [
        {
          id: 'calc_fundamental_theorem',
          title: 'The Fundamental Theorem of Calculus',
          content: 'The Fundamental Theorem of Calculus connects differentiation and integration.\n\nPart 1: If f is continuous on [a, b] and F(x) = ∫ₐˣ f(t)dt, then F\'(x) = f(x).\n\nPart 2: If F is any antiderivative of f, then ∫ₐᵇ f(x)dx = F(b) - F(a).\n\nThe definite integral ∫ₐᵇ f(x)dx represents the net area between the curve y = f(x) and the x-axis from x = a to x = b. Properties include linearity, reversal of limits (∫ₐᵇ = -∫ᵇₐ), and additivity of intervals.',
        },
        {
          id: 'calc_riemann_sums',
          title: 'Riemann Sums',
          content: 'The definite integral is defined as the limit of Riemann sums. Partition [a, b] into n subintervals of width Δx = (b - a)/n. Choose sample points xᵢ* in each subinterval. Then:\n\n∫ₐᵇ f(x)dx = lim_{n→∞} Σᵢ₌₁ⁿ f(xᵢ*)Δx\n\nCommon Riemann sum types:\n• Left endpoint: xᵢ* = xᵢ₋₁\n• Right endpoint: xᵢ* = xᵢ\n• Midpoint: xᵢ* = (xᵢ₋₁ + xᵢ)/2\n\nThe Mean Value Theorem for Integrals states that for a continuous function, there exists c in [a, b] such that f(c) = (1/(b-a))∫ₐᵇ f(x)dx.',
        }
      ],
      quiz: [
        {
          question: 'What does the Fundamental Theorem of Calculus connect?',
          options: ['Limits and continuity', 'Differentiation and integration', 'Algebra and geometry', 'Series and sequences'],
          correct: 1
        },
        {
          question: 'What is ∫₀¹ x dx?',
          options: ['0', '0.5', '1', '2'],
          correct: 1
        },
        {
          question: 'What does ∫ₐᵇ f(x)dx represent?',
          options: ['Arc length', 'Net area', 'Volume', 'Average value'],
          correct: 1
        }
      ]
    },
    {
      id: 'calc_apps_integration',
      title: 'Applications of Integration',
      lessons: [
        {
          id: 'calc_area_volume',
          title: 'Areas and Volumes',
          content: 'Integration can compute areas between curves and volumes of solids.\n\nArea between curves: A = ∫ₐᵇ [f(x) - g(x)]dx, where f(x) ≥ g(x) on [a, b].\n\nVolume by disc method: Rotating y = f(x) about the x-axis gives V = π∫ₐᵇ [f(x)]²dx.\n\nVolume by washer method: V = π∫ₐᵇ ([R(x)]² - [r(x)]²)dx, where R is outer radius and r is inner radius.\n\nVolume by cylindrical shells: V = 2π∫ₐᵇ x·f(x)dx for rotation about the y-axis.',
        },
        {
          id: 'calc_arc_length',
          title: 'Arc Length and Surface Area',
          content: 'Arc length of a curve y = f(x) from x = a to x = b:\n\nL = ∫ₐᵇ √(1 + [f\'(x)]²) dx\n\nFor a curve defined parametrically as x = x(t), y = y(t) from t = α to t = β:\n\nL = ∫ₐᵝ √([dx/dt]² + [dy/dt]²) dt\n\nSurface area of revolution about the x-axis: SA = 2π∫ₐᵇ f(x)√(1 + [f\'(x)]²)dx.\n\nThe average value of f on [a, b] is f_avg = (1/(b-a))∫ₐᵇ f(x)dx.',
        }
      ],
      quiz: [
        {
          question: 'What method finds volume by rotating a region around an axis using rectangles parallel to the axis?',
          options: ['Disc method', 'Washer method', 'Cylindrical shells', 'Cross-section method'],
          correct: 2
        },
        {
          question: 'What is the formula for arc length of y = f(x)?',
          options: ['∫ √(1 + f\'(x)) dx', '∫ √(1 + [f\'(x)]²) dx', '∫ (1 + f\'(x)²) dx', '∫ √(f\'(x)) dx'],
          correct: 1
        },
        {
          question: 'What is the average value of f(x) = x on [0, 2]?',
          options: ['0', '1', '2', '4'],
          correct: 1
        }
      ]
    },
    {
      id: 'calc_transcendental',
      title: 'Transcendental Functions',
      lessons: [
        {
          id: 'calc_exp_log',
          title: 'Exponential and Logarithmic Functions',
          content: 'The natural exponential function f(x) = eˣ has the unique property that its derivative equals itself: d/dx[eˣ] = eˣ. Its inverse is the natural logarithm ln x.\n\nKey formulas:\n• d/dx[ln x] = 1/x, x > 0\n• ∫(1/x)dx = ln|x| + C\n• d/dx[aˣ] = aˣ ln a\n• ∫aˣ dx = aˣ/ln a + C\n\nLogarithmic differentiation simplifies derivatives of complicated products, quotients, and powers by taking ln of both sides first.',
        },
        {
          id: 'calc_inverse_trig',
          title: 'Inverse Trigonometric Functions',
          content: 'Inverse trigonometric functions and their derivatives:\n\n• d/dx[arcsin x] = 1/√(1 - x²)\n• d/dx[arccos x] = -1/√(1 - x²)\n• d/dx[arctan x] = 1/(1 + x²)\n• d/dx[arcsec x] = 1/(|x|√(x² - 1))\n\nCorresponding integral formulas:\n• ∫(1/√(1 - x²))dx = arcsin x + C\n• ∫(1/(1 + x²))dx = arctan x + C\n• ∫(1/(x√(x² - 1)))dx = arcsec|x| + C\n\nHyperbolic functions sinh x = (eˣ - e⁻ˣ)/2 and cosh x = (eˣ + e⁻ˣ)/2 also have useful calculus properties.',
        }
      ],
      quiz: [
        {
          question: 'What is the derivative of eˣ?',
          options: ['xeˣ⁻¹', 'eˣ', 'ln x · eˣ', 'x · eˣ⁻¹'],
          correct: 1
        },
        {
          question: 'What is d/dx[ln x]?',
          options: ['1/x', 'ln x', 'x⁻¹ ln x', 'eˣ'],
          correct: 0
        },
        {
          question: 'What is ∫(1/(1 + x²))dx?',
          options: ['arcsin x + C', 'arccos x + C', 'arctan x + C', 'arcsec x + C'],
          correct: 2
        }
      ]
    }
  ]
};
