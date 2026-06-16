export const financialRecordsCourse = {
  id: 'financial_records',
  title: 'Financial Records',
  subtitle: 'Master bookkeeping and record keeping',
  icon: '📒',
  color: '#1B5E20',
  bgColor: '#E8F5E9',
  description: 'Financial records form the backbone of any business accounting system. Learn how to properly record, classify, and summarize financial transactions using standard bookkeeping practices.',
  chapters: [
    {
      id: 'fr_intro',
      title: 'Introduction to Financial Records',
      lessons: [
        {
          id: 'fr_what_is',
          title: 'What are Financial Records?',
          content: 'Financial records are systematic documentation of all business financial transactions. They provide a complete trail of all accounting activities and form the basis for preparing financial statements.\n\nPurpose of financial records:\n• Track income and expenses\n• Monitor business performance\n• Prepare financial statements\n• Comply with tax and legal requirements\n• Support decision-making\n\nTypes of financial records:\n• Source documents (invoices, receipts, bank statements)\n• Books of prime entry (journals, cash books)\n• Ledger accounts\n• Trial balance\n• Final accounts',
          codeExamples: [
            {
              title: 'Key Terms',
              code: 'Assets    = Resources owned (cash, inventory, equipment)\nLiabilities = Amounts owed (loans, payables)\nEquity    = Owner\'s interest (capital, retained earnings)\nIncome    = Money earned (sales, fees)\nExpenses  = Costs incurred (rent, salaries, utilities)\n\nAccounting Equation:\nAssets = Liabilities + Equity'
            }
          ]
        },
        {
          id: 'fr_source_docs',
          title: 'Source Documents',
          content: 'Source documents are the original records that provide evidence of a transaction. Every financial transaction must be supported by a source document.\n\nCommon source documents:\n\n1. Sales Invoice - issued when goods/services are sold on credit\n2. Purchase Invoice - received from suppliers\n3. Receipt - proof of payment received\n4. Payment Voucher - internal document for payments\n5. Bank Statement - record of bank transactions\n6. Credit Note - issued when goods are returned\n7. Debit Note - issued when returning goods to supplier\n\nSource documents should include: date, amount, parties involved, description, and reference number.',
          codeExamples: [
            {
              title: 'Source Document Example',
              code: 'INVOICE #INV-2024-001\nDate: 15 March 2024\n\nFrom: TechSupply Co.\nTo: Business Solutions Ltd.\n\nItem                Qty  Price  Total\nLaptop Stand        10   25.00  250.00\nUSB-C Hub           5    35.00  175.00\n--------------------------------\nTotal (excl VAT):        425.00\nVAT (20%):                85.00\nTotal Due:                510.00\nPayment Terms: Net 30 days'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is the purpose of source documents?',
          options: ['To advertise products', 'To provide evidence of transactions', 'To calculate taxes only', 'To replace financial statements'],
          correct: 1
        },
        {
          question: 'Which document is issued when goods are returned by a customer?',
          options: ['Debit Note', 'Credit Note', 'Purchase Order', 'Receipt'],
          correct: 1
        },
        {
          question: 'What is the accounting equation?',
          options: ['Income = Expenses + Profit', 'Assets = Liabilities + Equity', 'Revenue = Costs + Margin', 'Cash = Receivables - Payables'],
          correct: 1
        }
      ]
    },
    {
      id: 'fr_double_entry',
      title: 'Double Entry Bookkeeping',
      lessons: [
        {
          id: 'fr_debit_credit',
          title: 'Debits and Credits',
          content: 'Double entry bookkeeping is based on the principle that every transaction has two effects - a debit and a credit. For every debit entry, there must be an equal credit entry.\n\nRules of double entry:\n• Assets: Increase = Debit, Decrease = Credit\n• Liabilities: Increase = Credit, Decrease = Debit\n• Equity: Increase = Credit, Decrease = Debit\n• Income: Increase = Credit, Decrease = Debit\n• Expenses: Increase = Debit, Decrease = Credit\n\nMemory aid: DEALER\nDividends - Debit\nExpenses - Debit\nAssets - Debit\nLiabilities - Credit\nEquity - Credit\nRevenue - Credit',
          codeExamples: [
            {
              title: 'Double Entry Examples',
              code: 'Transaction: Invested $10,000 cash into business\nDebit:  Cash (Asset)      $10,000\nCredit: Capital (Equity)   $10,000\n\nTransaction: Purchased inventory for $2,000 cash\nDebit:  Inventory (Asset)  $2,000\nCredit: Cash (Asset)       $2,000\n\nTransaction: Made credit sale of $5,000\nDebit:  Accounts Receivable  $5,000\nCredit: Sales Revenue        $5,000\n\nTransaction: Paid rent $1,000\nDebit:  Rent Expense    $1,000\nCredit: Cash            $1,000'
            }
          ]
        },
        {
          id: 'fr_ledger',
          title: 'Ledger Accounts',
          content: 'Ledger accounts are individual records of each asset, liability, equity, income, and expense item. They are organized in the general ledger using the T-account format.\n\nT-account format:\n• Left side = Debit side\n• Right side = Credit side\n• Account name at the top\n• Balance is the difference between debits and credits\n\nTypes of ledgers:\n• General Ledger (Nominal Ledger) - main set of accounts\n• Accounts Receivable Ledger - customer accounts\n• Accounts Payable Ledger - supplier accounts\n\nPosting: The process of transferring journal entries to ledger accounts.',
          codeExamples: [
            {
              title: 'T-Account Example',
              code: 'CASH ACCOUNT\n-------------------------------------\nDebit (Inflows)  |  Credit (Outflows)\n-------------------------------------\nCapital  10,000  |  Inventory  2,000\nSales     5,000  |  Rent       1,000\n                 |  Balance c/d 12,000\n-------------------------------------\nTotal    15,000  |  Total     15,000\n-------------------------------------\nBalance b/d 12,000\n\nSALES ACCOUNT\n-------------------------------------\nDebit            |  Credit\n-------------------------------------\n                 |  Cash      5,000\n                 |  AR        5,000\nBalance c/d 10,000|\n-------------------------------------\nTotal    10,000  |  Total    10,000\n-------------------------------------\n                 |  Balance b/d 10,000'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'In double entry, what increases an asset?',
          options: ['Credit', 'Debit', 'Both', 'Neither'],
          correct: 1
        },
        {
          question: 'What is the left side of a T-account called?',
          options: ['Credit side', 'Debit side', 'Asset side', 'Liability side'],
          correct: 1
        },
        {
          question: 'When a business pays rent in cash, which accounts are affected?',
          options: ['Cash and Sales', 'Rent Expense and Cash', 'Rent Expense and Capital', 'Cash and Accounts Payable'],
          correct: 1
        }
      ]
    },
    {
      id: 'fr_trial_balance',
      title: 'Trial Balance',
      lessons: [
        {
          id: 'fr_tb_purpose',
          title: 'Purpose & Preparation',
          content: 'A trial balance is a list of all ledger account balances at a particular date. It checks that total debits equal total credits, providing arithmetic accuracy of the double entry system.\n\nSteps to prepare:\n1. Calculate balance of each ledger account\n2. List all accounts with debit balances\n3. List all accounts with credit balances\n4. Total both columns\n5. Verify debits = credits\n\nLimitations: A trial balance can balance even if there are errors (e.g., omission, commission, compensating errors).',
          codeExamples: [
            {
              title: 'Trial Balance Example',
              code: 'TRIAL BALANCE AS AT 31 MARCH 2024\n\nAccount                    Debit     Credit\n------------------------------------------\nCash                       12,000\nAccounts Receivable         5,000\nInventory                   3,000\nEquipment                  15,000\nAccounts Payable                      4,000\nLoan Payable                          10,000\nCapital                              10,000\nSales                                25,000\nPurchases                  10,000\nRent Expense                 2,000\nSalaries                     3,000\n------------------------------------------\nTotal                     50,000    50,000\n------------------------------------------'
            }
          ]
        },
        {
          id: 'fr_tb_errors',
          title: 'Correcting Errors',
          content: 'When a trial balance does not balance, you need to find and correct errors. Common techniques include using a suspense account and investigating discrepancies.\n\nTypes of errors:\n• Error of Omission - transaction not recorded at all\n• Error of Commission - correct amount, wrong account\n• Error of Principle - wrong type of account\n• Compensating Error - two errors cancel each other\n• Complete Reversal - debit and credit reversed\n\nSuspense Account: Temporary account used when trial balance totals differ. Differences are placed in suspense until the error is found.',
          codeExamples: [
            {
              title: 'Correcting Errors',
              code: 'Error: Sale of $500 recorded as $50\nCorrection:\nDebit:  Sales account       $450\nCredit: Accounts Receivable  $450\n(To increase entry from $50 to $500)\n\nError: Purchase of equipment debited to purchases\nCorrection:\nDebit:  Equipment       $5,000\nCredit: Purchases        $5,000\n(Error of principle correction)\n\nError: Rent payment $2,000 not recorded\nCorrection:\nDebit:  Rent Expense    $2,000\nCredit: Cash            $2,000\n(Error of omission correction)'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does a balanced trial balance prove?',
          options: ['No errors exist', 'Arithmetic accuracy of double entry', 'Financial statements are correct', 'Business is profitable'],
          correct: 1
        },
        {
          question: 'Which error occurs when a transaction is recorded in the wrong type of account?',
          options: ['Error of Omission', 'Error of Commission', 'Error of Principle', 'Compensating Error'],
          correct: 2
        },
        {
          question: 'What is a suspense account used for?',
          options: ['Recording pending payments', 'Temporary difference in trial balance', 'Long-term investments', 'Employee salaries'],
          correct: 1
        }
      ]
    },
    {
      id: 'fr_financial_statements',
      title: 'Financial Statements',
      lessons: [
        {
          id: 'fr_income_stmt',
          title: 'Income Statement',
          content: 'The Income Statement (Profit & Loss Account) shows the financial performance of a business over a period. It calculates net profit by matching revenues with expenses.\n\nStructure:\n• Revenue (Sales) - total income from operations\n• Cost of Sales - direct costs of goods sold\n• Gross Profit = Revenue - Cost of Sales\n• Operating Expenses - indirect costs\n• Net Profit = Gross Profit - Operating Expenses\n\nCost of Sales calculation:\nOpening Inventory + Purchases - Closing Inventory = Cost of Sales',
          codeExamples: [
            {
              title: 'Income Statement Example',
              code: 'INCOME STATEMENT FOR YEAR ENDED 31 MARCH 2024\n\nSales Revenue                        100,000\nLess: Cost of Sales\n  Opening Inventory     10,000\n  Add: Purchases        55,000\n  Less: Closing Inv    (12,000)\n                       ---------\nCost of Sales                        53,000\n                       ---------\nGROSS PROFIT                         47,000\n\nOperating Expenses:\n  Rent Expense          8,000\n  Salaries             15,000\n  Utilities             2,000\n  Depreciation          3,000\n  Other Expenses        2,000\n                       ---------\nTotal Expenses                      30,000\n                       ---------\nNET PROFIT                           17,000'
            }
          ]
        },
        {
          id: 'fr_balance_sheet',
          title: 'Statement of Financial Position',
          content: 'The Statement of Financial Position (Balance Sheet) shows the financial position of a business at a specific point in time. It lists assets, liabilities, and equity.\n\nStructure:\n• Non-Current Assets - long-term resources (property, equipment, vehicles)\n• Current Assets - short-term resources (cash, inventory, receivables)\n• Current Liabilities - amounts due within one year (payables, overdraft)\n• Non-Current Liabilities - long-term debts (loans, mortgages)\n• Equity - owner\'s capital and retained earnings\n\nThe statement must satisfy: Assets = Liabilities + Equity',
          codeExamples: [
            {
              title: 'Balance Sheet Example',
              code: 'STATEMENT OF FINANCIAL POSITION AS AT 31 MARCH 2024\n\nASSETS\nNon-Current Assets:\n  Property, Plant & Equipment   50,000\n  Vehicles                      15,000\n  Equipment                      8,000\n                                ------    73,000\n\nCurrent Assets:\n  Inventory                     12,000\n  Accounts Receivable            8,000\n  Cash                           5,000\n                                ------    25,000\n                                ------\nTOTAL ASSETS                             98,000\n\nEQUITY & LIABILITIES\nEquity:\n  Capital                       20,000\n  Retained Earnings             40,000\n                                ------    60,000\n\nNon-Current Liabilities:\n  Bank Loan                             20,000\n\nCurrent Liabilities:\n  Accounts Payable               8,000\n  Accrued Expenses              10,000\n                                ------    18,000\n                                ------\nTOTAL EQUITY & LIABILITIES               98,000'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is Gross Profit?',
          options: ['Revenue minus all expenses', 'Revenue minus cost of sales', 'Net profit plus taxes', 'Total income minus operating expenses'],
          correct: 1
        },
        {
          question: 'Which of these is a current asset?',
          options: ['Building', 'Vehicle', 'Inventory', 'Loan'],
          correct: 2
        },
        {
          question: 'What is the formula for the balance sheet?',
          options: ['Revenue - Expenses = Profit', 'Assets = Liabilities + Equity', 'Income = Cash + Credit Sales', 'Assets + Liabilities = Equity'],
          correct: 1
        }
      ]
    },
    {
      id: 'fr_control_accounts',
      title: 'Control Accounts',
      lessons: [
        {
          id: 'fr_receivables_control',
          title: 'Receivables Control Account',
          content: 'Control accounts are summary accounts that check the accuracy of subsidiary ledgers. The Accounts Receivable Control Account summarizes all individual customer accounts.\n\nSources of entries:\n• Debit: Opening balance, credit sales\n• Credit: Cash received, discounts allowed, returns, bad debts written off\n• Balance: Total amount owed by customers\n\nThe total of all individual customer account balances must equal the control account balance.\n\nBenefits:\n• Provides summary totals quickly\n• Helps locate errors in subsidiary ledgers\n• Internal control mechanism\n• Simplifies preparation of financial statements',
          codeExamples: [
            {
              title: 'Receivables Control Account',
              code: 'ACCOUNTS RECEIVABLE CONTROL ACCOUNT\n\nDate  Details          Amount | Date  Details          Amount\n--------------------------------|--------------------------------\nApr1  Balance b/d     15,000 | Apr30 Cash received     12,000\nApr30 Sales           25,000 | Apr30 Discounts allowed   500\n                              | Apr30 Returns inwards    800\n                              | Apr30 Bad debts         200\n                              | Apr30 Balance c/d     26,500\n------                  ------|------                  ------\nTotal                  40,000 | Total                  40,000\n------                  ------|------                  ------\nMay1  Balance b/d     26,500 |\n\nCheck: Individual customer\naccount totals = 26,500'
            }
          ]
        },
        {
          id: 'fr_payables_control',
          title: 'Payables Control Account',
          content: 'The Accounts Payable Control Account summarizes all individual supplier accounts.\n\nSources of entries:\n• Credit: Opening balance, credit purchases\n• Debit: Cash paid, discounts received, returns, allowances\n• Balance: Total amount owed to suppliers\n\nControl accounts are typically maintained in the general ledger and their balances are used in the trial balance, while individual supplier and customer accounts are kept in subsidiary ledgers.',
          codeExamples: [
            {
              title: 'Payables Control Account',
              code: 'ACCOUNTS PAYABLE CONTROL ACCOUNT\n\nDate  Details          Amount | Date  Details          Amount\n--------------------------------|--------------------------------\nApr30 Cash paid        18,000 | Apr1  Balance b/d     12,000\nApr30 Discounts recvd     300 | Apr30 Purchases        20,000\nApr30 Returns outwards   700 |\nApr30 Balance c/d     13,000 |\n------                  ------|------                  ------\nTotal                  32,000 | Total                  32,000\n------                  ------|------                  ------\n                              | May1  Balance b/d     13,000\n\nCheck: Individual supplier\naccount totals = 13,000'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does the receivables control account summarize?',
          options: ['All supplier accounts', 'All customer accounts', 'All bank accounts', 'All expense accounts'],
          correct: 1
        },
        {
          question: 'Which of these is credited in the receivables control account?',
          options: ['Credit sales', 'Opening balance', 'Cash received from customers', 'Interest charged'],
          correct: 2
        },
        {
          question: 'Where are control account balances found?',
          options: ['Subsidiary ledger', 'General ledger', 'Cash book', 'Sales journal'],
          correct: 1
        }
      ]
    },
    {
      id: 'fr_bank_reconciliation',
      title: 'Bank Reconciliation',
      lessons: [
        {
          id: 'fr_bank_rec_intro',
          title: 'Purpose & Process',
          content: 'Bank reconciliation is the process of matching the cash book balance with the bank statement balance and explaining any differences.\n\nReasons for differences:\n1. Timing differences:\n   • Unpresented cheques - issued but not yet cleared\n   • Uncredited deposits - paid in but not yet shown on bank statement\n2. Items not recorded in cash book:\n   • Bank charges and interest\n   • Direct debits and standing orders\n   • Bank errors\n   • Dishonored cheques\n\nProcess:\n1. Compare cash book with bank statement\n2. Identify and record missing items\n3. Update cash book for bank charges, direct debits, etc.\n4. Prepare bank reconciliation statement',
          codeExamples: [
            {
              title: 'Bank Reconciliation Statement',
              code: 'BANK RECONCILIATION STATEMENT\nAS AT 31 MARCH 2024\n\nBalance as per Bank Statement          5,200\nAdd: Unpresented Cheques\n  Cheque #102                          800\n  Cheque #105                          400\n                                       ----   1,200\n                                              6,400\nLess: Uncredited Deposits\n  Deposit 28 March                     1,000\n  Deposit 30 March                       600\n                                       ---- (1,600)\n                                              4,800\n\nBalance as per Cash Book                        4,800\n\nCASH BOOK UPDATES:\nBank Charges                       Dr: Bank charges\n  Cr: Cash\nDirect Debit - Insurance           Dr: Insurance\n  Cr: Cash\nDishonored Cheque                  Dr: Receivables\n  Cr: Cash'
            }
          ]
        },
        {
          id: 'fr_bank_rec_practice',
          title: 'Practical Reconciliation',
          content: 'Let us work through a complete bank reconciliation example.\n\nStep 1: Compare cash book with bank statement\nStep 2: Update cash book for new items\nStep 3: Calculate updated cash book balance\nStep 4: Prepare reconciliation statement\n\nCommon adjustments:\n• Bank charges: Debit expense, Credit cash\n• Interest income: Debit cash, Credit income\n• Direct debits: Debit relevant expense, Credit cash\n• Standing orders: Debit relevant expense, Credit cash\n• Dishonored cheques: Debit receivables, Credit cash\n• Bank errors: Contact bank for correction',
          codeExamples: [
            {
              title: 'Complete Example',
              code: 'Cash Book Balance (before adjustments):  3,500 Dr\n\nItems on bank statement not in cash book:\n1. Bank charges: $75\n2. Direct debit - rent: $2,000\n3. Interest received: $50\n4. Dishonored cheque: $300\n\nUpdated Cash Book:\nDr Side: Balance 3,500 + Interest 50 = 3,550\nCr Side: Bank charges 75 + Rent 2,000\n         + Dishonored cheque 300 = 2,375\nUpdated Balance: 3,550 - 2,375 = 1,175 Dr\n\nBank Statement Balance: 2,500 Cr\n\nReconciliation:\nBalance per bank statement    2,500\nAdd: Unpresented cheques        780\n                              3,280\nLess: Uncredited deposits    (2,105)\nBalance per cash book          1,175'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What are unpresented cheques?',
          options: ['Cheques written but not yet delivered', 'Cheques issued but not yet cleared by bank', 'Cheques received from customers', 'Cancelled cheques'],
          correct: 1
        },
        {
          question: 'Where are bank charges first recorded?',
          options: ['Bank statement only', 'Cash book only', 'Both cash book and bank statement', 'General ledger only'],
          correct: 0
        },
        {
          question: 'When an unpresented cheque clears, it affects:',
          options: ['Only the cash book', 'Only the bank statement', 'Both balances will match', 'Neither balance'],
          correct: 2
        }
      ]
    }
  ]
};
