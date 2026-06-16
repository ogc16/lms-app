export const operationsManagementCourse = {
  id: 'operations_management',
  title: 'Operations Management',
  subtitle: 'Optimize business operations and processes',
  icon: '⚙️',
  color: '#E65100',
  bgColor: '#FFF3E0',
  description: 'Operations Management focuses on designing, overseeing, and controlling the production process and business operations to create goods and services efficiently and effectively.',
  chapters: [
    {
      id: 'om_intro',
      title: 'Introduction to Operations Management',
      lessons: [
        {
          id: 'om_what_is',
          title: 'What is Operations Management?',
          content: 'Operations Management (OM) is the administration of business practices to create the highest level of efficiency possible within an organization. It involves converting materials and labor into goods and services as efficiently as possible.\n\nKey areas:\n• Process design and management\n• Quality control\n• Supply chain management\n• Inventory management\n• Capacity planning\n• Facility layout and design\n\nThe goal: Maximize profit while ensuring customer satisfaction through efficient use of resources (people, materials, technology, information).',
          codeExamples: [
            {
              title: 'The Operations Model',
              code: 'INPUTS              TRANSFORMATION       OUTPUTS\n-----------         -------------        -----------\nMaterials    \\                          /  Products\nLabor         \\                        /   Services\nEquipment      >   Operations Process  >   Finished\nTechnology    /                        \\   Goods\nInformation  /                          \\  Value\n\nFEEDBACK LOOP:\nCustomer Feedback -> Process Improvement\nQuality Metrics -> Adjust Operations\nCost Analysis -> Efficiency Improvements'
            }
          ]
        },
        {
          id: 'om_history',
          title: 'Historical Development',
          content: 'Operations management has evolved significantly over time:\n\n1. Industrial Revolution (1760-1840): Division of labor, interchangeable parts\n2. Scientific Management (1910s): Taylorism, time and motion studies\n3. Mass Production (1913): Ford assembly line\n4. Quality Revolution (1950s-80s): Deming, Juran, TQM\n5. Lean Production (1990s): Toyota Production System, Just-in-Time\n6. Digital Era (2000s-present): AI, IoT, Industry 4.0\n\nEach era brought new techniques for improving productivity and quality while reducing costs and waste.',
          codeExamples: [
            {
              title: 'Key Contributors',
              code: 'Frederick Taylor (1856-1915)\n- Scientific Management\n- Time studies, standard work\n- "One best way" to do work\n\nHenry Ford (1863-1947)\n- Moving assembly line (1913)\n- Mass production\n- Economies of scale\n\nW. Edwards Deming (1900-1993)\n- Statistical quality control\n- PDCA Cycle (Plan-Do-Check-Act)\n- 14 Points for Management\n\nTaiichi Ohno (1912-1990)\n- Toyota Production System\n- Just-in-Time (JIT)\n- Kaizen (continuous improvement)'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the primary goal of operations management?',
          options: ['Maximize sales', 'Efficient use of resources', 'Minimize employee count', 'Increase marketing'],
          correct: 1
        },
        {
          question: 'Who is known for the moving assembly line?',
          options: ['Frederick Taylor', 'Henry Ford', 'W. Edwards Deming', 'Taiichi Ohno'],
          correct: 1
        },
        {
          question: 'What does JIT stand for in operations management?',
          options: ['Job Integration Technique', 'Just-in-Time', 'Joint Inspection Team', 'Judicial Information Tracking'],
          correct: 1
        }
      ]
    },
    {
      id: 'om_strategy',
      title: 'Operations Strategy',
      lessons: [
        {
          id: 'om_strat_intro',
          title: 'Strategic Operations Decisions',
          content: 'Operations strategy aligns operational capabilities with overall business strategy. It involves long-term decisions about how operations will support competitive advantage.\n\nCompetitive priorities:\n• Cost - being the low-cost producer\n• Quality - superior product/service quality\n• Speed - fast delivery and response\n• Flexibility - ability to change product mix or volume\n• Innovation - introducing new products/services\n\nOrder winners vs Order qualifiers:\n• Order Winners: Factors that win customer orders\n• Order Qualifiers: Minimum standards required to be considered',
          codeExamples: [
            {
              title: 'Strategy Matrix',
              code: 'Business Strategy\n       |\n       v\nOperations Strategy\n       |\n       v\nOperations Decisions:\n\nProduct Design      |  Process Design\nQuality Management  |  Capacity Planning\nSupply Chain        |  Inventory Management\nLayout Design       |  Workforce Management\n       |\n       v\nPerformance Metrics:\n- Cost per unit\n- Defect rate\n- On-time delivery\n- Cycle time\n- Customer satisfaction'
            }
          ]
        },
        {
          id: 'om_competitive',
          title: 'Competitive Advantage through Operations',
          content: 'Companies can achieve competitive advantage through operational excellence in different ways.\n\n1. Cost Leadership (Walmart, Ryanair)\n   - Economies of scale\n   - Low-cost supply chain\n   - Process efficiency\n\n2. Differentiation (Apple, Mercedes)\n   - Superior quality\n   - Innovative features\n   - Premium customer service\n\n3. Speed/Flexibility (Amazon, Zara)\n   - Fast delivery\n   - Quick product changeovers\n   - Responsive supply chain\n\nThe Operations Strategy Triangle: Quality, Speed, Cost, Flexibility - trade-offs often exist between these dimensions.',
          codeExamples: [
            {
              title: 'Strategic Trade-offs',
              code: 'HIGH COST - HIGH QUALITY\n        |\n        |  Mercedes, Rolex\n        |\n        |  Toyota, Dell\n        |\n        |  Walmart, Ryanair\n        |\nLOW COST - ADEQUATE QUALITY\n        |\n        v\nLOW SPEED --------------- HIGH SPEED\n\nProduct-Process Matrix:\n\nProduct Type    | Process Type    | Example\n----------------|-----------------|-------------------\nUnique/High Vol | Project         | Construction\nMultiple Products| Batch          | Bakeries\nStandard/High Vol| Assembly Line | Automobiles\nContinuous      | Continuous Flow | Oil Refining'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What are order winners?',
          options: ['Minimum standards to compete', 'Factors that win customer orders', 'Cost reduction targets', 'Quality benchmarks'],
          correct: 1
        },
        {
          question: 'Which competitive priority focuses on being the lowest cost producer?',
          options: ['Quality', 'Flexibility', 'Cost', 'Speed'],
          correct: 2
        },
        {
          question: 'What type of process is best for standard, high-volume products?',
          options: ['Project', 'Batch', 'Assembly Line', 'Continuous Flow'],
          correct: 2
        }
      ]
    },
    {
      id: 'om_process_design',
      title: 'Process Design',
      lessons: [
        {
          id: 'om_process_types',
          title: 'Types of Processes',
          content: 'Process design determines how work is organized and flows through the operations system. The choice of process type depends on volume and variety.\n\nProcess types:\n\n1. Project: Unique, complex, one-time products (construction, movies)\n   - Low volume, high variety\n   - Skilled labor, flexible resources\n\n2. Job Shop: Small batches, wide variety (machine shops, print shops)\n   - General-purpose equipment\n   - Skilled operators\n\n3. Batch: Moderate volumes, moderate variety (bakeries, furniture)\n   - Repeat processing\n   - Some standardization\n\n4. Assembly Line: High volume, standardized products (automotive)\n   - Specialized equipment\n   - Semi-skilled labor\n\n5. Continuous Flow: Very high volume, continuous production (oil, chemicals)\n   - Highly automated\n   - Dedicated facilities',
          codeExamples: [
            {
              title: 'Process Selection',
              code: 'Factors Influencing Process Choice:\n\n1. Product Volume\n   Low Volume  -----------  High Volume\n   (Project/Job)           (Line/Continuous)\n\n2. Product Variety\n   High Variety  ---------  Low Variety\n   (Project/Job)           (Line/Continuous)\n\n3. Degree of Standardization\n   Custom  --------------  Standard\n\nDecision Matrix:\n\nFactor               | Project | Job Shop | Batch | Line | Continuous\n---------------------|---------|----------|-------|------|-----------\nVolume               | Very Low| Low      | Med   | High | Very High\nProduct Flexibility  | Very High| High    | Med   | Low  | Very Low\nUnit Cost            | Very High| High    | Med   | Low  | Very Low\nEquipment Utiliz.    | Low     | Low-Med  | Med   | High | Very High'
            }
          ]
        },
        {
          id: 'om_layout',
          title: 'Facility Layout',
          content: 'Facility layout determines physical arrangement of work areas, equipment, and resources. Good layout reduces material handling, improves workflow, and increases efficiency.\n\nLayout types:\n\n1. Product Layout (Flow Line)\n   - Arranged in sequence of operations\n   - High volume, standardized products\n   - Example: Assembly line\n\n2. Process Layout (Functional)\n   - Grouped by function/process type\n   - Low volume, high variety\n   - Example: Hospital departments\n\n3. Cellular Layout\n   - Grouped into cells for product families\n   - Combines flexibility with efficiency\n   - Example: Manufacturing cells\n\n4. Fixed Position Layout\n   - Product stays in one place\n   - Resources move to product\n   - Example: Shipbuilding, construction',
          codeExamples: [
            {
              title: 'Layout Comparison',
              code: 'PRODUCT LAYOUT (Assembly Line):\n[Work 1] -> [Work 2] -> [Work 3] -> [Work 4] -> Output\n\nPROCESS LAYOUT (Job Shop):\n|--------|  |--------|  |--------|\n| Welding|  | Cutting|  | Painting|\n|--------|  |--------|  |--------|\n     |           |           |\n|--------|  |--------|  |--------|\n| Drilling|  | Grinding| |Assembly|\n|--------|  |--------|  |--------|\n\nCELLULAR LAYOUT:\nCell A: [Cut] -> [Drill] -> [Assembly]\nCell B: [Form] -> [Weld] -> [Finish]\nCell C: [Stamp] -> [Bend] -> [Pack]\n\nWorkflow efficiency:\nProduct Layout: 90-95%\nProcess Layout: 40-60%\nCellular Layout: 70-85%'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which process type is best for unique, one-time projects?',
          options: ['Batch', 'Assembly Line', 'Project', 'Continuous Flow'],
          correct: 2
        },
        {
          question: 'In which layout are resources grouped by function?',
          options: ['Product Layout', 'Process Layout', 'Cellular Layout', 'Fixed Position Layout'],
          correct: 1
        },
        {
          question: 'What is the main advantage of cellular layout?',
          options: ['Lowest cost', 'Fastest throughput', 'Combines flexibility with efficiency', 'Simplest to implement'],
          correct: 2
        }
      ]
    },
    {
      id: 'om_supply_chain',
      title: 'Supply Chain Management',
      lessons: [
        {
          id: 'om_sc_intro',
          title: 'Supply Chain Fundamentals',
          content: 'Supply Chain Management (SCM) coordinates the flow of materials, information, and finances as products move from suppliers to customers.\n\nKey elements:\n• Suppliers - raw material/service providers\n• Manufacturers - transform materials into products\n• Distributors - store and move products\n• Retailers - sell to end customers\n• Customers - end users\n\nSupply chain flows:\n• Physical flow: materials/products downstream\n• Information flow: orders, forecasts upstream/downstream\n• Financial flow: payments upstream\n\nGoal: Minimize total supply chain cost while meeting service level requirements.',
          codeExamples: [
            {
              title: 'Supply Chain Structure',
              code: 'SUPPLY CHAIN NETWORK:\n\nSupplier 1 -->              --> Distributor 1 -->\n               \\            /                    \\\nSupplier 2 --> Manufacturer --> Distributor 2 --> Retailer --> Customer\n               /            \\                    /\nSupplier 3 -->              --> Distributor 3 -->\n\nBULLWHIP EFFECT:\nSmall changes in customer demand cause\nincreasingly larger fluctuations upstream\n\nCustomer Demand: +5%\nRetailer Orders: +8%\nDistributor Orders: +15%\nManufacturer Orders: +25%\nSupplier Orders: +40%'
            }
          ]
        },
        {
          id: 'om_logistics',
          title: 'Logistics & Distribution',
          content: 'Logistics involves the transportation, warehousing, and delivery of goods. It is a critical component of supply chain management.\n\nTransportation modes:\n1. Road: Flexible, door-to-door, short-medium distances\n2. Rail: High volume, long distance, low cost\n3. Air: Fastest, expensive, high-value goods\n4. Sea: Highest volume, slowest, lowest cost\n5. Pipeline: Continuous flow, limited to liquids/gases\n\nWarehousing functions:\n• Storage and consolidation\n• Cross-docking\n• Break-bulk operations\n• Value-added services (labeling, packaging)\n• Inventory management\n\nThird-Party Logistics (3PL): Outsourcing logistics operations to specialized providers.',
          codeExamples: [
            {
              title: 'Logistics Decision Factors',
              code: 'MODE COMPARISON:\n\nFactor       | Road | Rail | Air  | Sea  | Pipeline\n-------------|------|------|------|------|---------\nSpeed        | Med  | Slow | Fast | Slow | Slow\nCost         | Med  | Low  | High | Low  | Low\nCapacity     | Med  | High | Low  | High | High\nFlexibility  | High | Med  | Med  | Low  | Low\nReliability  | Med  | Med  | High | Med  | High\n\nWAREHOUSE LOCATION FACTORS:\n1. Proximity to customers/markets\n2. Transportation infrastructure\n3. Labor availability and cost\n4. Land and construction costs\n5. Tax incentives and regulations\n6. Utility costs and availability'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the Bullwhip Effect?',
          options: ['Demand fluctuations amplify upstream', 'Price increases in supply chain', 'Inventory shrinkage', 'Transportation delays'],
          correct: 0
        },
        {
          question: 'Which transportation mode is fastest?',
          options: ['Road', 'Rail', 'Air', 'Sea'],
          correct: 2
        },
        {
          question: 'What does 3PL stand for?',
          options: ['Three-Party Logistics', 'Third-Party Logistics', 'Primary Logistics Provider', 'Production Logistics Planning'],
          correct: 1
        }
      ]
    },
    {
      id: 'om_quality',
      title: 'Quality Management',
      lessons: [
        {
          id: 'om_quality_intro',
          title: 'Quality Concepts & TQM',
          content: 'Quality Management ensures products and services meet or exceed customer expectations. Total Quality Management (TQM) is a comprehensive approach to continuous quality improvement.\n\nDimensions of quality:\n• Performance - primary operating characteristics\n• Features - additional characteristics\n• Reliability - consistency of performance\n• Conformance - meets specifications\n• Durability - useful life\n• Serviceability - ease of repair\n• Aesthetics - look, feel, sound\n• Perceived Quality - brand reputation\n\nCost of Quality (COQ):\n• Prevention costs - training, design review\n• Appraisal costs - inspection, testing\n• Internal failure costs - rework, scrap\n• External failure costs - returns, warranty, lost customers',
          codeExamples: [
            {
              title: 'Quality Tools',
              code: 'TQM PRINCIPLES:\n1. Customer focus\n2. Continuous improvement (Kaizen)\n3. Employee empowerment\n4. Process-centered approach\n5. Strategic quality planning\n6. Fact-based decision making\n\nPDCA CYCLE (Deming Cycle):\n\nPlan  -->  Do\n |         |\n v         v\nAct  <--  Check\n\n7 QUALITY TOOLS:\n1. Cause-and-Effect (Fishbone) Diagram\n2. Check Sheet\n3. Control Chart\n4. Histogram\n5. Pareto Chart\n6. Scatter Diagram\n7. Flowchart'
            }
          ]
        },
        {
          id: 'om_six_sigma',
          title: 'Six Sigma & Lean',
          content: 'Six Sigma is a methodology that uses statistical tools to reduce defects to 3.4 per million opportunities. Lean focuses on eliminating waste.\n\nSix Sigma DMAIC:\n• Define - problem statement, goals\n• Measure - current performance, data collection\n• Analyze - root cause analysis\n• Improve - solutions, implementation\n• Control - monitor, sustain results\n\nLean principles:\n• Value - define from customer perspective\n• Value Stream - map all steps\n• Flow - eliminate bottlenecks\n• Pull - produce to demand\n• Perfection - continuous improvement\n\n7 Wastes (Muda):\n1. Overproduction\n2. Waiting\n3. Transport\n4. Overprocessing\n5. Inventory\n6. Motion\n7. Defects',
          codeExamples: [
            {
              title: 'Six Sigma vs Lean',
              code: 'SIX SIGMA FOCUS:\nReducing Variation\nStatistical Control\nData-Driven Decisions\nDMAIC Methodology\n\nLEAN FOCUS:\nEliminating Waste\nFlow Efficiency\nCustomer Value\nKaizen (Continuous Improvement)\n\nCOMBINED: Lean Six Sigma\n\nSIGMA LEVELS:\n1 Sigma  = 690,000 defects per million (DPMO)\n2 Sigma  = 308,000 DPMO\n3 Sigma  = 66,800 DPMO\n4 Sigma  = 6,210 DPMO\n5 Sigma  = 230 DPMO\n6 Sigma  = 3.4 DPMO\n\nCALCULATION:\nDPMO = (Defects / Opportunities) x 1,000,000\nExample: 10 defects in 1,000 units\n         with 100 opportunities each\nDPMO = (10 / 100,000) x 1,000,000 = 100 DPMO'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does DMAIC stand for?',
          options: ['Define, Measure, Analyze, Improve, Control', 'Design, Manufacture, Assemble, Inspect, Correct', 'Develop, Monitor, Assess, Implement, Check', 'Define, Monitor, Audit, Improve, Correct'],
          correct: 0
        },
        {
          question: 'How many defects per million does Six Sigma allow?',
          options: ['66,800', '6,210', '3.4', '230'],
          correct: 2
        },
        {
          question: 'Which is NOT one of the 7 wastes in Lean?',
          options: ['Overproduction', 'Waiting', 'Automation', 'Defects'],
          correct: 2
        }
      ]
    },
    {
      id: 'om_inventory',
      title: 'Inventory Management',
      lessons: [
        {
          id: 'om_inv_intro',
          title: 'Inventory Types & Costs',
          content: 'Inventory management involves ordering, storing, and using inventory to ensure the right amount of stock is available at the right time while minimizing costs.\n\nTypes of inventory:\n• Raw materials - inputs to production\n• Work-in-Progress (WIP) - partially finished goods\n• Finished goods - completed products ready for sale\n• MRO - Maintenance, Repair, Operating supplies\n\nInventory costs:\n• Holding (Carrying) costs: storage, insurance, obsolescence - 20-30% of inventory value/year\n• Ordering costs: purchase orders, delivery, receiving\n• Shortage costs: lost sales, backorders, reputation damage\n\nEconomic Order Quantity (EOQ): Q* = sqrt(2DS/H)\nWhere: D = annual demand, S = order cost, H = holding cost per unit',
          codeExamples: [
            {
              title: 'EOQ Calculation',
              code: 'ECONOMIC ORDER QUANTITY (EOQ)\n\nGiven:\nAnnual Demand (D) = 10,000 units\nOrder Cost (S) = $50 per order\nHolding Cost (H) = $5 per unit per year\n\nEOQ = sqrt(2DS/H)\nEOQ = sqrt(2 x 10,000 x 50 / 5)\nEOQ = sqrt(200,000)\nEOQ = 447 units (rounded)\n\nResults:\nNumber of orders per year = D/EOQ = 10,000/447 = 22.4\nOrder frequency = 365/22.4 = every 16.3 days\nTotal annual ordering cost = 22.4 x $50 = $1,120\nTotal annual holding cost = (447/2) x $5 = $1,118\nTotal inventory cost = $2,238\n\nREORDER POINT = Demand during lead time\nROP = d x L (where d = daily demand, L = lead time)\nROP = 27.4 x 7 = 192 units'
            }
          ]
        },
        {
          id: 'om_inv_systems',
          title: 'Inventory Systems & Techniques',
          content: 'Various inventory systems help manage stock levels effectively.\n\nPerpetual Inventory System:\n• Continuous tracking of inventory levels\n• Real-time updates with each transaction\n• Requires POS systems or barcode scanning\n\nPeriodic Inventory System:\n• Physical counts at regular intervals\n• Less expensive but less accurate\n\nABC Analysis (Pareto-based):\n• A Items: 10-20% of items, 70-80% of value - tight control\n• B Items: 20-30% of items, 15-20% of value - moderate control\n• C Items: 60-70% of items, 5-10% of value - simple control\n\nJust-in-Time (JIT):\n• Minimize inventory by receiving goods only as needed\n• Requires reliable suppliers and smooth production',
          codeExamples: [
            {
              title: 'ABC Analysis Example',
              code: 'ABC CLASSIFICATION\n\nItem   Annual Usage  Unit Cost  Annual Value  Class\n--------------------------------------------------------\nA001   1,000         $500       $500,000      A\nB002   5,000         $80        $400,000      A\nC003   500           $600       $300,000      A\nD004   10,000        $15        $150,000      B\nE005   20,000        $5         $100,000      B\nF006   2,000         $30        $60,000       B\nG007   15,000        $2         $30,000       C\nH008   50,000        $0.50      $25,000       C\nI009   30,000        $0.75      $22,500       C\nJ010   25,000        $0.80      $20,000       C\n\nClass A: 20% of items, 60% of value\nClass B: 30% of items, 25% of value\nClass C: 50% of items, 15% of value'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does EOQ stand for?',
          options: ['Economic Order Quality', 'Economic Order Quantity', 'Estimated Order Quantity', 'Efficient Ordering Query'],
          correct: 1
        },
        {
          question: 'In ABC analysis, Class A items are:',
          options: ['Most numerous, least valuable', 'Few items, high value', 'Medium items, medium value', 'Obsolete items'],
          correct: 1
        },
        {
          question: 'What is the primary goal of JIT inventory?',
          options: ['Maximize stock levels', 'Minimize inventory', 'Reduce product variety', 'Increase batch sizes'],
          correct: 1
        }
      ]
    }
  ]
};
