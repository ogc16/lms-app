export const financialAccountingCourse = {
  id: 'financial_accounting',
  title: 'Financial Accounting (ACCA)',
  subtitle: 'ACCA-aligned financial accounting principles',
  icon: '📊',
  color: '#0D47A1',
  bgColor: '#E3F2FD',
  description: 'This ACCA-aligned course covers the principles and practices of financial accounting, from the conceptual framework to the preparation and interpretation of financial statements in accordance with IFRS.',
  chapters: [
    {
      id: 'fa_intro',
      title: 'Introduction to Financial Accounting',
      lessons: [
        {
          id: 'fa_what_is',
          title: 'The Nature & Purpose of Financial Accounting',
          content: 'Financial accounting is the process of recording, summarizing, and reporting business transactions to provide useful information for economic decision-making. It follows standardized frameworks (IFRS/GAAP).\n\nKey differences:\n• Financial Accounting: External users, historical, regulated, company-wide\n• Management Accounting: Internal users, forward-looking, flexible, segment-specific\n\nUsers of financial statements:\n• Investors - investment decisions\n• Creditors - lending decisions\n• Suppliers - credit decisions\n• Employees - job security\n• Government - tax and regulation\n• Public - corporate citizenship\n\nQualitative characteristics (IASB Framework):\nFundamental: Relevance, Faithful representation\nEnhancing: Comparability, Verifiability, Timeliness, Understandability',
          codeExamples: [
            {
              title: 'Accounting Framework',
              code: 'IASB CONCEPTUAL FRAMEWORK\n\nObjective: Provide useful financial information\nfor economic decision-making\n       |\n       v\nQualitative Characteristics\n  |-- Fundamental\n  |     |-- Relevance (materiality)\n  |     |-- Faithful representation\n  |         (complete, neutral, free from error)\n  |\n  |-- Enhancing\n        |-- Comparability\n        |-- Verifiability\n        |-- Timeliness\n        |-- Understandability\n       |\n       v\nElements:\n  Assets, Liabilities, Equity\n  Income, Expenses\n       |\n       v\nRecognition & Measurement:\n  Historical cost, Fair value\n  Accrual basis, Going concern'
            }
          ]
        },
        {
          id: 'fa_regulation',
          title: 'Regulatory Framework',
          content: 'Financial accounting operates within a regulatory framework that ensures consistency, comparability, and reliability of financial information.\n\nKey organizations:\n• IASB (International Accounting Standards Board) - sets IFRS\n• IFRS Foundation - oversees IASB\n• ACCA (Association of Chartered Certified Accountants) - professional body\n• National standard-setters (e.g., FASB in US)\n• Securities regulators (e.g., SEC in US, FCA in UK)\n\nIFRS vs GAAP:\n• IFRS: Principles-based, used in 140+ countries\n• US GAAP: Rules-based, used in United States\n• Convergence ongoing between the two\n\nSources of regulation:\n• Company law\n• Accounting standards (IAS/IFRS)\n• Stock exchange rules\n• Professional ethics codes',
          codeExamples: [
            {
              title: 'IFRS Hierarchy',
              code: 'IFRS HIERARCHY OF AUTHORITY:\n\nLevel 1: IFRS Standards & IFRIC Interpretations\nLevel 2: IASB Framework\nLevel 3: Industry practices (if consistent with above)\n\nKEY IFRS STANDARDS:\n\nIAS 1    - Presentation of Financial Statements\nIAS 2    - Inventories\nIAS 7    - Statement of Cash Flows\nIAS 8    - Accounting Policies, Changes in Estimates\nIAS 16   - Property, Plant & Equipment\nIAS 36   - Impairment of Assets\nIAS 37   - Provisions, Contingent Liabilities & Assets\nIAS 38   - Intangible Assets\nIFRS 9   - Financial Instruments\nIFRS 15  - Revenue from Contracts with Customers\nIFRS 16  - Leases\n\nACCA EXAM STRUCTURE:\nFA (Financial Accounting) - Foundations level\nFR (Financial Reporting) - Applied Skills\nSBR (Strategic Business Reporting) - Strategic Professional'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Who sets IFRS standards?',
          options: ['ACCA', 'IASB', 'FASB', 'SEC'],
          correct: 1
        },
        {
          question: 'Which qualitative characteristic ensures information can influence decisions?',
          options: ['Comparability', 'Verifiability', 'Relevance', 'Timeliness'],
          correct: 2
        },
        {
          question: 'IFRS is best described as:',
          options: ['Rules-based', 'Principles-based', 'Tax-based', 'Cash-based'],
          correct: 1
        }
      ]
    },
    {
      id: 'fa_framework',
      title: 'The Accounting Framework',
      lessons: [
        {
          id: 'fa_elements',
          title: 'Elements of Financial Statements',
          content: 'The IASB Framework defines the elements that make up financial statements.\n\nDefinitions:\n• Asset: A resource controlled by the entity as a result of past events, from which future economic benefits are expected to flow.\n• Liability: A present obligation arising from past events, the settlement of which is expected to result in an outflow of resources.\n• Equity: The residual interest in the assets after deducting all liabilities.\n• Income: Increases in economic benefits during the period (revenue + gains).\n• Expenses: Decreases in economic benefits during the period.\n\nRecognition criteria:\n• Probable that economic benefits will flow\n• Reliable measurement of cost or value\n\nMeasurement bases:\n• Historical cost\n• Current cost\n• Realizable value\n• Present value\n• Fair value',
          codeExamples: [
            {
              title: 'Elements & Recognition',
              code: 'ASSET RECOGNITION TEST:\n1. Controlled by entity?\n2. Past event?\n3. Future economic benefits probable?\n4. Cost/value reliably measurable?\n\nExample: Purchase of equipment $50,000\n- Controlled? Yes\n- Past event? Yes (purchase)\n- Benefits probable? Yes (will use in production)\n- Measurable? Yes ($50,000)\n=> Recognize as asset\n\nLIABILITY RECOGNITION TEST:\n1. Present obligation?\n2. Past event?\n3. Outflow of resources probable?\n4. Amount reliably measurable?\n\nExample: Goods received but not paid\n- Obligation? Yes\n- Past event? Yes (goods received)\n- Outflow probable? Yes\n- Measurable? Yes (invoice amount)\n=> Recognize as liability'
            }
          ]
        },
        {
          id: 'fa_accrual',
          title: 'Accrual vs Cash Accounting',
          content: 'Under the accrual basis, transactions are recognized when they occur, not when cash changes hands. This gives a more accurate picture of financial performance.\n\nAccrual accounting principles:\n• Revenue recognized when earned (not when cash received)\n• Expenses recognized when incurred (not when paid)\n• Matching principle: expenses matched to related revenues\n\nAccruals and prepayments:\n• Accrued expenses: expense incurred but not yet paid (liability)\n• Prepaid expenses: paid in advance for future periods (asset)\n• Accrued income: income earned but not yet received (asset)\n• Deferred income: received in advance, not yet earned (liability)\n\nCash accounting: Simpler, used by small businesses, recognizes transactions only when cash moves.',
          codeExamples: [
            {
              title: 'Accrual Adjustments',
              code: 'EXAMPLE: YEAR ENDED 31 DECEMBER 2024\n\n1. ACCRUED EXPENSES\nElectricity consumed in Dec: $1,200\nBilled in January 2025: $1,200\n\nAdjustment:\nDr: Electricity Expense    $1,200\nCr: Accrued Liabilities    $1,200\n\n2. PREPAID EXPENSES\nInsurance paid for Jan-Mar 2025: $3,000\n\nAdjustment:\nDr: Prepaid Insurance     $3,000\nCr: Insurance Expense      $3,000\n\n3. ACCRUED INCOME\nInterest earned but not yet received: $500\n\nAdjustment:\nDr: Accrued Income        $500\nCr: Interest Income        $500\n\n4. DEFERRED INCOME\nRent received for Jan 2025: $2,000\n\nAdjustment:\nDr: Rental Income         $2,000\nCr: Deferred Income        $2,000'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Under accrual accounting, revenue is recognized when:',
          options: ['Cash is received', 'Invoice is paid', 'It is earned', 'Year ends'],
          correct: 2
        },
        {
          question: 'A prepaid expense is classified as:',
          options: ['Expense', 'Liability', 'Asset', 'Equity'],
          correct: 2
        },
        {
          question: 'What accounting concept matches expenses to related revenues?',
          options: ['Consistency', 'Prudence', 'Matching', 'Going concern'],
          correct: 2
        }
      ]
    },
    {
      id: 'fa_financial_statements',
      title: 'Preparation of Financial Statements',
      lessons: [
        {
          id: 'fa_fs_structure',
          title: 'Statement Structure under IAS 1',
          content: 'IAS 1 Presentation of Financial Statements prescribes the basis for presentation of general purpose financial statements.\n\nComplete set of financial statements:\n1. Statement of Financial Position (Balance Sheet)\n2. Statement of Profit or Loss and Other Comprehensive Income\n3. Statement of Changes in Equity\n4. Statement of Cash Flows\n5. Notes to the Financial Statements\n\nCurrent vs Non-current distinction:\n• Current: expected to be realized/settled within 12 months\n• Non-current: longer than 12 months\n\nFormat requirements:\n• Entity name and reporting date\n• Presentation currency and level of precision\n• Comparative information (prior period)\n• Going concern assumption stated',
          codeExamples: [
            {
              title: 'Statement Structure',
              code: 'IAS 1 - MINIMUM LINE ITEMS\n\nSTATEMENT OF FINANCIAL POSITION:\n\nASSETS\nNon-current assets\n  Property, plant and equipment\n  Intangible assets\n  Investments\nCurrent assets\n  Inventories\n  Trade receivables\n  Cash and cash equivalents\n\nEQUITY & LIABILITIES\nEquity\n  Share capital\n  Retained earnings\n  Reserves\nNon-current liabilities\n  Long-term borrowings\nCurrent liabilities\n  Trade payables\n  Short-term borrowings\n\nSTATEMENT OF PROFIT OR LOSS:\nRevenue\nCost of sales\nGross profit\nDistribution costs\nAdministrative expenses\nFinance costs\nProfit before tax\nIncome tax expense\nProfit for the year'
            }
          ]
        },
        {
          id: 'fa_fs_prep',
          title: 'Preparing Financial Statements from Trial Balance',
          content: 'The process of preparing financial statements from an adjusted trial balance involves:\n\nStep 1: Prepare the Statement of Profit or Loss\n• List all income accounts (credit balances from trial balance)\n• List all expense accounts (debit balances from trial balance)\n• Calculate profit/loss\n\nStep 2: Prepare the Statement of Financial Position\n• Assets (debit balances from trial balance)\n• Liabilities (credit balances from trial balance)\n• Equity (opening equity + profit - drawings/dividends)\n\nAdjustments before finalization:\n• Closing inventory valuation\n• Depreciation\n• Accruals and prepayments\n• Bad debts and allowance for receivables\n• Depreciation\n• Revaluations',
          codeExamples: [
            {
              title: 'From Trial Balance to Financial Statements',
              code: 'TRIAL BALANCE EXTRACT\n\nAccount                     Debit    Credit\n------------------------------------------\nRevenue                               150,000\nPurchases                   80,000\nInventory (opening)         15,000\nSalaries                    25,000\nRent                        12,000\nDepreciation                 8,000\nEquipment                  100,000\nAccum. Depreciation                   20,000\nShare Capital                         50,000\nRetained Earnings                     30,000\nTrade Receivables           22,000\nTrade Payables                        12,000\nCash                        10,000\n------------------------------------------\nTotal                      272,000   272,000\n\nADJUSTMENTS:\n1. Closing inventory: $18,000\n2. Depreciation on equipment: $10,000 (straight line)\n3. Accrued salaries: $2,000\n4. Allowance for receivables: $1,100\n\nPROFIT OR LOSS:\nRevenue                   150,000\nLess: COS (80k+15k-18k)   (77,000)\nGross Profit                73,000\nLess: Salaries (25+2)      (27,000)\nLess: Rent                 (12,000)\nLess: Depreciation (8+10)  (18,000)\nNet Profit                  16,000'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'How many statements are in a complete set of financial statements under IAS 1?',
          options: ['3', '4', '5', '6'],
          correct: 2
        },
        {
          question: 'Where should closing inventory appear?',
          options: ['Only in profit or loss', 'Only in balance sheet', 'Both profit or loss and balance sheet', 'In cash flow statement'],
          correct: 2
        },
        {
          question: 'A long-term loan due in 5 years is classified as:',
          options: ['Current liability', 'Current asset', 'Non-current liability', 'Equity'],
          correct: 2
        }
      ]
    },
    {
      id: 'fa_interpretation',
      title: 'Interpretation of Financial Statements',
      lessons: [
        {
          id: 'fa_ratios',
          title: 'Financial Ratios & Analysis',
          content: 'Financial ratios help users interpret financial statements and assess business performance, position, and viability.\n\nRatio categories:\n\n1. Profitability Ratios:\n   • Gross Profit Margin = Gross Profit / Revenue x 100\n   • Net Profit Margin = Net Profit / Revenue x 100\n   • Return on Assets = Net Profit / Total Assets x 100\n   • Return on Equity = Net Profit / Equity x 100\n\n2. Liquidity Ratios:\n   • Current Ratio = Current Assets / Current Liabilities\n   • Quick Ratio = (Current Assets - Inventory) / Current Liabilities\n\n3. Efficiency Ratios:\n   • Inventory Turnover = Cost of Sales / Average Inventory\n   • Receivables Days = Receivables / Revenue x 365\n   • Payables Days = Payables / Cost of Sales x 365\n\n4. Gearing Ratios:\n   • Debt-to-Equity = Total Liabilities / Equity\n   • Interest Cover = Operating Profit / Finance Costs\n\n5. Investment Ratios:\n   • Earnings Per Share = Net Profit / Number of Shares\n   • Price-Earnings Ratio = Share Price / EPS',
          codeExamples: [
            {
              title: 'Ratio Calculation Example',
              code: 'FINANCIAL DATA:\nRevenue: $500,000\nCost of Sales: $300,000\nNet Profit: $50,000\nCurrent Assets: $200,000\nCurrent Liabilities: $100,000\nInventory: $80,000\nReceivables: $60,000\nTotal Assets: $400,000\nEquity: $250,000\nLong-term Debt: $150,000\n\nPROFITABILITY:\nGross Profit Margin = (500k-300k)/500k x 100 = 40%\nNet Profit Margin = 50k/500k x 100 = 10%\nReturn on Equity = 50k/250k x 100 = 20%\n\nLIQUIDITY:\nCurrent Ratio = 200k/100k = 2.0\nQuick Ratio = (200k-80k)/100k = 1.2\n\nEFFICIENCY:\nInventory Turnover = 300k/80k = 3.75 times\nReceivables Days = 60k/500k x 365 = 43.8 days\n\nGEARING:\nDebt-to-Equity = 150k/250k = 60%\nInterest Cover = 50k + interest / interest\n(assume interest $10k) = 60k/10k = 6x'
            }
          ]
        },
        {
          id: 'fa_cash_flow',
          title: 'Statement of Cash Flows (IAS 7)',
          content: 'The Statement of Cash Flows shows how changes in balance sheet accounts affect cash and cash equivalents. It is prepared under IAS 7.\n\nThree categories:\n1. Operating Activities - principal revenue-producing activities\n2. Investing Activities - acquisition/disposal of long-term assets\n3. Financing Activities - changes in equity and borrowings\n\nMethods:\n• Direct Method: shows actual cash receipts and payments\n• Indirect Method: starts with profit before tax, adjusts for non-cash items (most common)\n\nImportance:\n• Shows actual cash generation\n• Complements accrual-based profit\n• Helps assess liquidity and solvency\n• Useful for forecasting future cash flows',
          codeExamples: [
            {
              title: 'Cash Flow Statement (Indirect Method)',
              code: 'CASH FLOW STATEMENT FOR YEAR ENDED 31 DEC 2024\n\nOPERATING ACTIVITIES:\nProfit before tax                        60,000\nAdjustments for:\n  Depreciation                           15,000\n  Increase in receivables               (10,000)\n  Decrease in inventory                   5,000\n  Increase in payables                    8,000\n  Interest expense                        5,000\n                                         83,000\nInterest paid                            (5,000)\nTax paid                                (12,000)\nNet cash from operating activities        66,000\n\nINVESTING ACTIVITIES:\nPurchase of equipment                   (30,000)\nSale of investments                      10,000\nNet cash used in investing              (20,000)\n\nFINANCING ACTIVITIES:\nProceeds from share issue                25,000\nLoan repayment                          (15,000)\nDividends paid                         (10,000)\nNet cash from financing                             0\n                                          -----\nNet increase in cash                     46,000\nCash at beginning of year                24,000\nCash at end of year                      70,000'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does a current ratio of 2.0 indicate?',
          options: ['Company is insolvent', 'Current assets double current liabilities', 'Profit margin is 2%', 'Inventory turns twice a year'],
          correct: 1
        },
        {
          question: 'Which cash flow category includes interest paid?',
          options: ['Operating', 'Investing', 'Financing', 'Non-cash'],
          correct: 0
        },
        {
          question: 'Return on Equity measures:',
          options: ['Profitability relative to sales', 'Return generated on shareholder investment', 'Efficiency of asset use', 'Liquidity position'],
          correct: 1
        }
      ]
    },
    {
      id: 'fa_assets',
      title: 'Accounting for Assets',
      lessons: [
        {
          id: 'fa_ppe',
          title: 'Property, Plant & Equipment (IAS 16)',
          content: 'IAS 16 governs accounting for property, plant, and equipment (PPE). These are tangible assets held for production, rental, or administrative purposes and expected to be used for more than one period.\n\nInitial measurement: At cost (purchase price + directly attributable costs)\n\nSubsequent measurement (choice of model):\n• Cost Model: Cost less accumulated depreciation less impairment\n• Revaluation Model: Fair value less subsequent depreciation less impairment\n\nDepreciation methods:\n• Straight-line: (Cost - Residual value) / Useful life\n• Reducing balance: Book value x Depreciation rate\n• Units of production: Based on actual usage\n\nDepreciation is systematic allocation of depreciable amount over useful life.\n\nDerecognition: Remove from books when disposed of or no future benefits expected.',
          codeExamples: [
            {
              title: 'PPE Accounting',
              code: 'PURCHASE OF MACHINERY:\nCost: $100,000 (including delivery $2,000, installation $3,000)\nUseful life: 10 years\nResidual value: $10,000\n\nInitial recognition:\nDr: Machinery         $100,000\nCr: Cash/Payables      $100,000\n\nDEPRECIATION - STRAIGHT LINE:\nAnnual = (100,000 - 10,000) / 10 = $9,000\n\nDr: Depreciation Expense   $9,000\nCr: Accumulated Deprec.    $9,000\n\nYear 1 Net Book Value: $100,000 - $9,000 = $91,000\nYear 5 Net Book Value: $100,000 - $45,000 = $55,000\n\nREVALUATION MODEL:\nYear 5: Fair value = $70,000\nCarrying amount = $55,000\nRevaluation surplus = $15,000\n\nDr: Machinery             $15,000 (accum dep recalculated)\nCr: Revaluation Surplus   $15,000\n\nDISPOSAL:\nSold for $60,000 at Year 7 (NBV = $37,000)\nDr: Cash        $60,000\nDr: Accum Dep   $63,000\nCr: Machinery  $100,000\nCr: Gain on Sale $23,000'
            }
          ]
        },
        {
          id: 'fa_intangibles',
          title: 'Intangible Assets (IAS 38)',
          content: 'Intangible assets are identifiable non-monetary assets without physical substance. Examples include patents, trademarks, software, and goodwill.\n\nRecognition criteria:\n• Identifiable (separable or arising from contractual rights)\n• Controlled by entity\n• Future economic benefits probable\n• Cost reliably measurable\n\nTypes:\n• Purchased - capitalize at cost\n• Internally generated - research phase: expense, development phase: capitalize if criteria met\n• Goodwill - only recognized on business acquisition\n\nAmortization: Systematic allocation over useful life (finite life). Indefinite life assets are not amortized but tested for impairment annually.\n\nResearch vs Development:\n• Research: original investigation - ALL expensed\n• Development: application of research - capitalized if technical feasibility, intent, resources, and future benefits are demonstrable',
          codeExamples: [
            {
              title: 'Intangible Assets',
              code: 'EXAMPLE 1: PATENT PURCHASE\nPatent purchased for $50,000, legal life 20 years\nEconomic life: 10 years\n\nInitial:\nDr: Patent          $50,000\nCr: Cash             $50,000\n\nAnnual amortization (10 years):\nDr: Amortization Expense $5,000\nCr: Patent               $5,000\n\nEXAMPLE 2: INTERNALLY GENERATED\nResearch costs: $25,000 - EXPENSE\nDevelopment costs: $40,000 - CAPITALIZE\n(assuming technical feasibility, intent, etc.)\n\nDr: Research Expense     $25,000\nDr: Development Asset    $40,000\nCr: Cash                 $65,000\n\nEXAMPLE 3: IMPAIRMENT\nPatent generating cash flows: $30,000 NPV\nCarrying amount: $40,000\nImpairment loss: $10,000\n\nDr: Impairment Loss     $10,000\nCr: Patent              $10,000'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Under IAS 16, which depreciation method allocates equal expense each year?',
          options: ['Reducing balance', 'Straight-line', 'Units of production', 'Sum of digits'],
          correct: 1
        },
        {
          question: 'Research costs under IAS 38 should be:',
          options: ['Capitalized', 'Expensed', 'Deferred', 'Ignored'],
          correct: 1
        },
        {
          question: 'What is the revaluation surplus?',
          options: ['Profit on sale', 'Increase in value above carrying amount', 'Depreciation recovered', 'Tax saving'],
          correct: 1
        }
      ]
    },
    {
      id: 'fa_liabilities',
      title: 'Accounting for Liabilities',
      lessons: [
        {
          id: 'fa_provisions',
          title: 'Provisions & Contingencies (IAS 37)',
          content: 'IAS 37 governs provisions, contingent liabilities, and contingent assets.\n\nProvision: A liability of uncertain timing or amount. Recognized when:\n• Present obligation (legal or constructive) from past event\n• Probable outflow of resources\n• Reliable estimate can be made\n\nExamples: warranties, legal claims, restructuring, environmental cleanup\n\nMeasurement: Best estimate of expenditure required to settle the obligation at the reporting date.\n\nContingent Liability:\n• Possible obligation (uncertain whether present obligation exists)\n• Present obligation but outflow not probable or cannot be measured\n• NOT recognized - disclose in notes\n\nContingent Asset:\n• Possible asset from past events\n• NOT recognized - disclose when inflow is probable\n• Recognize when virtually certain',
          codeExamples: [
            {
              title: 'Provisions Examples',
              code: 'EXAMPLE 1: WARRANTY PROVISION\nSold 1,000 units at $500 each\nWarranty: 1 year, estimated 2% defect rate\nCost to repair each: $200\n\nProvision = 1,000 x 2% x $200 = $4,000\n\nDr: Warranty Expense      $4,000\nCr: Warranty Provision    $4,000\n\nWhen actual repairs occur:\nDr: Warranty Provision    $X\nCr: Cash/Inventory        $X\n\nEXAMPLE 2: LEGAL CLAIM\nCompany faces lawsuit, lawyers estimate\n70% probability of losing, settlement $100,000\n\nRecognize provision:\nDr: Legal Expense         $100,000\nCr: Provision for Claims  $100,000\n\nIf probability was 30%:\nDisclose as contingent liability in notes\n\nEXAMPLE 3: RESTRUCTURING\nMust have detailed plan and valid expectation\n\nProvision includes:\n- Lease termination penalties\n- Employee termination benefits\n- NOT: future operating losses, training, marketing'
            }
          ]
        },
        {
          id: 'fa_taxation',
          title: 'Taxation in Financial Statements',
          content: 'Tax accounting involves both current and deferred tax.\n\nCurrent Tax:\n• Tax payable on taxable profits for the period\n• Calculated based on tax authority rules\n• Recognized as liability (or asset if overpaid)\n\nDeferred Tax (IAS 12):\n• Arises from temporary differences between carrying amount and tax base of assets/liabilities\n• Taxable temporary differences: Deferred tax liability\n• Deductible temporary differences: Deferred tax asset\n\nExamples of temporary differences:\n• Accelerated depreciation (tax) vs straight-line (accounts)\n• Revenue recognized in different periods\n• Provisions recognized in accounts but not yet deductible for tax\n\nDeferred tax assets recognized only when probable future taxable profits will be available.',
          codeExamples: [
            {
              title: 'Deferred Tax Calculation',
              code: 'EXAMPLE: DEFERRED TAX\n\nAsset: Equipment $100,000\n\nYear 1:\nAccounting depreciation (straight-line 10yr): $10,000\nTax depreciation (25% reducing balance): $25,000\n\nCarrying amount: $90,000\nTax base: $75,000\nTemporary difference: $15,000 (taxable)\nDeferred tax liability @ 25%: $3,750\n\nEntry:\nDr: Tax Expense           $3,750\nCr: Deferred Tax Liability $3,750\n\nYear 2:\nAccounting depreciation: $10,000\nTax depreciation: $18,750 (25% x 75,000)\n\nCarrying amount: $80,000\nTax base: $56,250\nTemporary difference: $23,750\nDeferred tax liability @ 25%: $5,938\nIncrease: $5,938 - $3,750 = $2,188\n\nDr: Tax Expense           $2,188\nCr: Deferred Tax Liability $2,188\n\nREVERSAL:\nWhen asset fully depreciated for tax,\nDTL reverses as timing differences unwind.'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'When should a provision be recognized?',
          options: ['When possible obligation exists', 'When reliable estimate possible and probable outflow', 'Only when legally required', 'When management decides'],
          correct: 1
        },
        {
          question: 'Deferred tax arises from:',
          options: ['Tax rate changes', 'Temporary differences', 'Permanent differences', 'Tax losses'],
          correct: 1
        },
        {
          question: 'A contingent liability should be:',
          options: ['Recognized in financial statements', 'Disclosed in notes only', 'Ignored', 'Treated as equity'],
          correct: 1
        }
      ]
    }
  ]
};
