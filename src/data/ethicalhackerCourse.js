export const ethicalhackerCourse = {
  id: 'ethicalhacker',
  title: 'Ethical Hacker',
  subtitle: 'Master Ethical Hacking',
  icon: '🛡️',
  color: '#C62828',
  bgColor: '#FFEBEE',
  description: 'Ethical hacking involves authorized attempts to bypass system security to identify vulnerabilities. Learn the tools, techniques, and mindset of a penetration tester.',
  chapters: [
    {
      id: 'ethical_intro',
      title: 'Introduction to Ethical Hacking',
      lessons: [
        {
          id: 'ethical_what_is',
          title: 'What is Ethical Hacking?',
          content: 'Ethical hacking (penetration testing) involves legally breaking into computers and devices to test an organization\'s defenses.\n\nKey differences from malicious hacking:\n• Authorization - Written permission before testing\n• Scope - Clearly defined boundaries\n• Disclosure - Vulnerabilities reported to the organization\n• Confidentiality - Findings kept private\n\nMethodologies: OSSTMM, OWASP, PTES, NIST SP 800-115.\n\nAlways get written authorization (ROE - Rules of Engagement) before testing.',
          codeExamples: [
            {
              title: 'Rules of Engagement',
              code: '# Sample Rules of Engagement structure\nrules_of_engagement = {\n    "scope": {\n        "in_scope": ["192.168.1.0/24", "app.example.com"],\n        "out_of_scope": ["10.0.0.0/8", "production-db.internal"]\n    },\n    "testing_window": {\n        "start": "2024-01-01 09:00",\n        "end": "2024-01-07 17:00"\n    },\n    "techniques_allowed": [\n        "social_engineering",\n        "web_app_testing",\n        "network_scanning"\n    ],\n    "techniques_banned": [\n        "ddos",\n        "physical_break_in"\n    ]\n}\n\nprint("Rules of Engagement loaded")\nfor key, value in rules_of_engagement.items():\n    print(f"  {key}: {value}")'
            }
          ]
        },
        {
          id: 'ethical_types',
          title: 'Types of Hackers',
          content: 'Hackers are categorized by their intent and authorization.\n\nHat categories:\n• White Hat - Ethical hackers, authorized testing\n• Black Hat - Malicious hackers, criminal activity\n• Gray Hat - Hacks without permission but not maliciously\n\nOther classifications:\n• Script Kiddie - Uses tools without understanding\n• Hacktivist - Politically motivated hacking\n• State-Sponsored - Nation-state cyber operations\n• Insider Threat - Current/former employee\n\nCertification paths: CEH (Certified Ethical Hacker), OSCP, GPEN.',
          codeExamples: [
            {
              title: 'Hacker Classification',
              code: 'hackers = [\n    {"type": "White Hat", "authorized": True, "intent": "defensive", "legal": True},\n    {"type": "Black Hat", "authorized": False, "intent": "malicious", "legal": False},\n    {"type": "Gray Hat", "authorized": False, "intent": "mixed", "legal": "unclear"},\n    {"type": "Script Kiddie", "authorized": False, "intent": "thrill", "legal": False},\n    {"type": "Hacktivist", "authorized": False, "intent": "political", "legal": False}\n]\n\nprint("Hacker Types:")\nfor h in hackers:\n    legal_status = "✓ Legal" if h["legal"] is True else "✗ Illegal" if h["legal"] is False else "? Unclear"\n    print(f"  {h[\'type\']:15s} | Authorized: {h[\'authorized\']} | {legal_status}")'
            }
          ]
        },
        {
          id: 'ethical_legal',
          title: 'Legal & Ethical Considerations',
          content: 'Understanding the legal landscape is crucial for ethical hackers.\n\nKey laws and regulations:\n• CFAA (US) - Computer Fraud and Abuse Act\n• Computer Misuse Act (UK)\n• GDPR (EU) - Data protection\n• Various national cybercrime laws\n\nEthical principles:\n• Do no harm\n• Obtain written authorization\n• Respect privacy\n• Report findings responsibly\n• Maintain confidentiality\n\nAlways use a contract/Statement of Work (SoW) that includes liability protection and scope definition.',
          codeExamples: [
            {
              title: 'Authorization Checklist',
              code: 'authorization_checklist = [\n    "Signed contract or SoW in place",\n    "Scope clearly defined and agreed",\n    "Emergency contacts identified",\n    "Data handling procedures defined",\n    "Insurance/indemnification confirmed",\n    "Testing window scheduled",\n    "Third-party dependencies notified"\n]\n\nprint("Penetration Test Authorization Checklist")\nfor i, item in enumerate(authorization_checklist, 1):\n    print(f"  [{i}] [ ] {item}")\n\nprint(f"\\nTotal items: {len(authorization_checklist)}")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does ROE stand for in penetration testing?',
          options: ['Return on Effort', 'Rules of Engagement', 'Range of Exploitation', 'Rights of Entry'],
          correct: 1
        },
        {
          question: 'Which type of hacker is authorized and follows legal guidelines?',
          options: ['Black Hat', 'Gray Hat', 'White Hat', 'Script Kiddie'],
          correct: 2
        },
        {
          question: 'What US law governs computer-related crimes?',
          options: ['GDPR', 'HIPAA', 'CFAA', 'PCI DSS'],
          correct: 2
        }
      ]
    },
    {
      id: 'ethical_recon',
      title: 'Reconnaissance',
      lessons: [
        {
          id: 'ethical_osint',
          title: 'OSINT',
          content: 'Open Source Intelligence (OSINT) is the collection and analysis of publicly available information.\n\nOSINT sources:\n• Search engines (Google, Shodan, Censys)\n• Social media (LinkedIn, Twitter, Facebook)\n• WHOIS lookups (domain registration)\n• DNS records (dig, nslookup)\n• Paste sites (pastebin)\n• GitHub repositories\n• Job postings (technology stack info)\n\nOSINT is the most important phase - good reconnaissance leads to successful engagements.',
          codeExamples: [
            {
              title: 'OSINT Data Collection',
              code: '# Simulating OSINT data gathering\ndef gather_osint(domain):\n    info = {\n        "domain": domain,\n        "registrar": "Example Registrar Inc.",\n        "creation_date": "2010-05-15",\n        "name_servers": ["ns1.example.com", "ns2.example.com"],\n        "email": ["admin@" + domain, "hostmaster@" + domain],\n        "technologies": ["React", "Nginx", "Cloudflare"]\n    }\n    return info\n\ndef analyze_osint(info):\n    print(f"OSINT Report for {info[\'domain\']}:")\n    print(f"  Registrar: {info[\'registrar\']}")\n    print(f"  Created: {info[\'creation_date\']}")\n    print(f"  Technologies: {\', \'.join(info[\'technologies\'])}")\n    print(f"  Potential emails: {\', \'.join(info[\'email\'])}")\n\nresult = gather_osint("example.com")\nanalyze_osint(result)'
            }
          ]
        },
        {
          id: 'ethical_footprinting',
          title: 'Footprinting',
          content: 'Footprinting is the process of gathering information about a target system or network to identify potential attack vectors.\n\nPassive footprinting - No direct contact with the target:\n• Search engine queries\n• Social media analysis\n• Job postings analysis\n• Financial reports\n• News articles\n\nActive footprinting - Direct interaction with the target:\n• DNS queries\n• WHOIS lookups\n• Traceroute\n• Network scanning (with permission)\n\nAlways start with passive reconnaissance before moving to active.',
          codeExamples: [
            {
              title: 'DNS Footprinting',
              code: '# DNS record types useful in footprinting\n\ndns_records = {\n    "A": "IPv4 address of the domain",\n    "AAAA": "IPv6 address of the domain",\n    "MX": "Mail exchange servers",\n    "NS": "Name servers for the domain",\n    "TXT": "Text records (SPF, DKIM, etc.)",\n    "CNAME": "Canonical name (aliases)",\n    "SOA": "Start of Authority (zone info)"\n}\n\ndef enumerate_dns(domain):\n    print(f"DNS Enumeration for {domain}:")\n    for record_type, description in dns_records.items():\n        print(f"  Querying {record_type} - {description}")\n        # Simulated response\n        print(f"    -> Found: {domain} IN {record_type} <value>")\n\nenumerate_dns("example.com")'
            }
          ]
        },
        {
          id: 'ethical_google_dorking',
          title: 'Google Dorking',
          content: 'Google Dorking (Google Hacking) uses advanced search operators to find sensitive information exposed on websites.\n\nKey operators:\n• site: - Limit to specific domain\n• filetype: - Search for file types (pdf, xls, doc)\n• intitle: - Search in page title\n• inurl: - Search in URL\n• intext: - Search in page body\n• cache: - View cached version\n\nExamples of sensitive finds:\n• Login pages: intitle:"login" site:example.com\n• Configuration files: filetype:env\n• Database dumps: filetype:sql\n• Exposed directories: intitle:"index of" site:example.com',
          codeExamples: [
            {
              title: 'Google Dork Queries',
              code: '# Common Google dork queries\n\ndorks = {\n    "login_pages": \'intitle:"login" OR intitle:"sign in" site:example.com\',\n    "config_files": \'filetype:env OR filetype:config "password" site:example.com\',\n    "exposed_db": \'filetype:sql "INSERT INTO" site:example.com\',\n    "directory_listing": \'intitle:"index of" site:example.com\',\n    "error_messages": \'intext:"warning" OR intext:"error" filetype:log site:example.com\',\n    "backup_files": \'filetype:bak OR filetype:old OR filetype:backup site:example.com\'\n}\n\nprint("Google Dorking Queries:")\nfor purpose, query in dorks.items():\n    print(f"\\n[{purpose}]")\n    print(f"  {query}")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does OSINT stand for?',
          options: ['Operating System Integration', 'Open Source Intelligence', 'Online Security Investigation', 'Offensive Security Testing'],
          correct: 1
        },
        {
          question: 'Which DNS record type identifies mail servers?',
          options: ['A', 'NS', 'MX', 'CNAME'],
          correct: 2
        },
        {
          question: 'What Google dork operator searches within page titles?',
          options: ['site:', 'inurl:', 'intitle:', 'filetype:'],
          correct: 2
        }
      ]
    },
    {
      id: 'ethical_scanning',
      title: 'Scanning & Enumeration',
      lessons: [
        {
          id: 'ethical_port_scanning',
          title: 'Port Scanning',
          content: 'Port scanning identifies which ports are open on a target system, revealing running services.\n\nPort states:\n• Open - Service is listening\n• Closed - No service on this port\n• Filtered - Firewall blocking probe\n• Unfiltered - Port accessible but status unknown\n\nCommon ports:\n• 21 - FTP\n• 22 - SSH\n• 23 - Telnet\n• 25 - SMTP\n• 53 - DNS\n• 80 - HTTP\n• 443 - HTTPS\n• 3306 - MySQL\n• 3389 - RDP\n• 8080 - HTTP Proxy',
          codeExamples: [
            {
              title: 'Basic Port Scanner',
              code: 'import socket\n\ndef scan_port(host, port):\n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    sock.settimeout(1)\n    result = sock.connect_ex((host, port))\n    sock.close()\n    return result == 0\n\ncommon_ports = [21, 22, 23, 25, 53, 80, 110, 143, 443, 445, 993, 995, 1433, 1521, 2049, 3306, 3389, 5432, 5900, 8080]\n\ntarget = "192.168.1.1"\nprint(f"Scanning {target} for common ports...")\nfor port in common_ports:\n    if scan_port(target, port):\n        print(f"  Port {port}: OPEN")'
            }
          ]
        },
        {
          id: 'ethical_service_enum',
          title: 'Service Enumeration',
          content: 'Service enumeration involves identifying the specific version and configuration of services running on open ports.\n\nWhy enumerate services?\n• Identify outdated versions with known vulnerabilities\n• Determine the operating system\n• Find misconfigurations\n• Plan exploitation strategy\n\nEnumeration techniques:\n• Banner grabbing - Connecting and reading service banners\n• Version probing - Using tools like Nmap -sV\n• Fingerprinting - Identifying OS and service patterns\n\nCommon tools: Nmap, Netcat, Amap, Dmitry.',
          codeExamples: [
            {
              title: 'Banner Grabbing',
              code: 'import socket\n\ndef grab_banner(host, port):\n    try:\n        sock = socket.socket()\n        sock.settimeout(5)\n        sock.connect((host, port))\n        # Send a probe if needed (e.g., for HTTP)\n        if port == 80:\n            sock.send(b"GET / HTTP/1.0\\r\\n\\r\\n")\n        banner = sock.recv(1024).decode().strip()\n        sock.close()\n        return banner\n    except Exception as e:\n        return f"Error: {e}"\n\nservices = [\n    {"host": "192.168.1.1", "port": 22},\n    {"host": "192.168.1.1", "port": 80},\n    {"host": "192.168.1.1", "port": 443}\n]\n\nfor s in services:\n    banner = grab_banner(s["host"], s["port"])\n    print(f"Port {s[\'port\']}: {banner[:50]}...")'
            }
          ]
        },
        {
          id: 'ethical_vuln_scan',
          title: 'Vulnerability Scanning',
          content: 'Vulnerability scanning automates the process of identifying security weaknesses in systems and applications.\n\nTypes of vulnerability scans:\n• Authenticated - With credentials, deeper analysis\n• Unauthenticated - External perspective\n• Network-based - Infrastructure scanning\n• Web app scanning - Application layer testing\n\nPopular tools:\n• Nessus - Industry standard, comprehensive\n• OpenVAS - Open-source alternative\n• Qualys - Cloud-based scanning\n• Nikto - Web server scanner\n• Burp Suite - Web application scanning\n\nCVSS (Common Vulnerability Scoring System) rates severity from 0.0 to 10.0.',
          codeExamples: [
            {
              title: 'CVSS Severity Ratings',
              code: 'cvss_ratings = {\n    "none": (0.0, 0.0),\n    "low": (0.1, 3.9),\n    "medium": (4.0, 6.9),\n    "high": (7.0, 8.9),\n    "critical": (9.0, 10.0)\n}\n\ndef classify_cvss(score):\n    for severity, (low, high) in cvss_ratings.items():\n        if low <= score <= high:\n            return severity\n    return "unknown"\n\nvulnerabilities = [\n    {"name": "Heartbleed", "cvss": 7.5},\n    {"name": "Log4Shell", "cvss": 10.0},\n    {"name": "Minor XSS", "cvss": 3.5}\n]\n\nprint("Vulnerability Assessment:")\nfor vuln in vulnerabilities:\n    severity = classify_cvss(vuln["cvss"])\n    print(f"  {vuln[\'name\']:12s} | CVSS: {vuln[\'cvss\']:4.1f} | {severity.upper()}")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does a "filtered" port state typically indicate?',
          options: ['Service is running', 'Firewall is blocking the probe', 'The host is offline', 'Port does not exist'],
          correct: 1
        },
        {
          question: 'Which technique reads service identification data by connecting to a port?',
          options: ['Port scanning', 'Banner grabbing', 'OS fingerprinting', 'Ping sweep'],
          correct: 1
        },
        {
          question: 'What CVSS score range is considered "High" severity?',
          options: ['4.0-6.9', '7.0-8.9', '9.0-10.0', '0.1-3.9'],
          correct: 1
        }
      ]
    },
    {
      id: 'ethical_exploitation',
      title: 'Exploitation',
      lessons: [
        {
          id: 'ethical_password',
          title: 'Password Attacks',
          content: 'Password attacks are used to gain unauthorized access by cracking or guessing passwords.\n\nTypes of password attacks:\n• Brute Force - Try every possible combination\n• Dictionary Attack - Use wordlists\n• Rainbow Table Attack - Precomputed hash tables\n• Credential Stuffing - Using leaked credentials\n• Keylogging - Capturing keystrokes\n• Social Engineering - Tricking users\n\nDefenses: Strong password policies, MFA, account lockout, password managers.\n\nCommon tools: Hashcat, John the Ripper, Hydra, Cain & Abel.',
          codeExamples: [
            {
              title: 'Password Strength Checker',
              code: 'import re\n\ndef check_password_strength(password):\n    score = 0\n    feedback = []\n    \n    if len(password) >= 12: score += 2\n    elif len(password) >= 8: score += 1\n    else: feedback.append("Too short")\n    \n    if re.search(r"[a-z]", password): score += 1\n    else: feedback.append("Add lowercase letters")\n    \n    if re.search(r"[A-Z]", password): score += 1\n    else: feedback.append("Add uppercase letters")\n    \n    if re.search(r"[0-9]", password): score += 1\n    else: feedback.append("Add numbers")\n    \n    if re.search(r"[!@#$%^&*,.]", password): score += 1\n    else: feedback.append("Add special characters")\n    \n    strength = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"]\n    return strength[score], feedback\n\npassword = "P@ssw0rd2024!"\nstrength, feedback = check_password_strength(password)\nprint(f"Password strength: {strength}")\nif feedback:\n    print("Suggestions:", ", ".join(feedback))'
            }
          ]
        },
        {
          id: 'ethical_social',
          title: 'Social Engineering',
          content: 'Social engineering exploits human psychology to gain access to systems or information, bypassing technical controls.\n\nCommon techniques:\n• Phishing - Deceptive emails\n• Spear Phishing - Targeted phishing\n• Vishing - Voice phishing (phone calls)\n• Smishing - SMS phishing\n• Pretexting - Creating a fake scenario\n• Baiting - Leaving infected USB drives\n• Tailgating - Following someone into a restricted area\n\nThe human is often the weakest link in security. Security awareness training is the best defense.',
          codeExamples: [
            {
              title: 'Phishing Detection',
              code: 'def analyze_email(email):\n    red_flags = []\n    \n    # Check sender\n    if "verify" in email["sender"].lower():\n        red_flags.append("Suspicious sender address")\n    \n    # Check urgency\n    urgent_words = ["immediately", "urgent", "your account will be closed", "suspended"]\n    for word in urgent_words:\n        if word in email["body"].lower():\n            red_flags.append(f"Urgency trigger: {word}")\n    \n    # Check for malicious links\n    suspicious_tlds = [".tk", ".ml", ".ga", ".cf", ".click"]\n    for tld in suspicious_tlds:\n        if tld in email["body"].lower():\n            red_flags.append(f"Suspicious link TLD: {tld}")\n    \n    # Check for spoofed brands\n    brands = ["paypal", "amazon", "google", "microsoft", "apple"]\n    for brand in brands:\n        if brand in email["body"].lower():\n            red_flags.append(f"Brand impersonation: {brand}")\n    \n    return red_flags\n\nemail = {\n    "sender": "verify@paypa1-security.com",\n    "subject": "URGENT: Account Suspended",\n    "body": "Dear user, your PayPal account will be closed immediately. Click here to verify: http://bit.ly/2xK9m" \n}\n\nflags = analyze_email(email)\nif flags:\n    print("PHISHING DETECTED:")\n    for f in flags:\n        print(f"  ⚠ {f}")\nelse:\n    print("Email appears legitimate")'
            }
          ]
        },
        {
          id: 'ethical_web_exploit',
          title: 'Web Exploitation',
          content: 'Web application vulnerabilities are among the most common attack vectors. Understanding them is essential for ethical hackers.\n\nOWASP Top 10 (key vulnerabilities):\n• SQL Injection - Database manipulation through input\n• XSS (Cross-Site Scripting) - Injecting client-side scripts\n• CSRF - Cross-Site Request Forgery\n• SSRF - Server-Side Request Forgery\n• Insecure Deserialization\n• Broken Authentication\n\nDefense: Input validation, parameterized queries, output encoding, CSRF tokens, proper auth.\n\nPractice platforms: OWASP WebGoat, DVWA, HackTheBox, TryHackMe.',
          codeExamples: [
            {
              title: 'SQL Injection Prevention',
              code: '# VULNERABLE - string concatenation\n# query = f"SELECT * FROM users WHERE username = \'{username}\' AND password = \'{password}\'"\n# Admin\' OR \'1\'=\'1 bypasses this\n\n# SECURE - parameterized query\nimport sqlite3\n\ndef secure_login(username, password):\n    conn = sqlite3.connect(":memory:")\n    cursor = conn.cursor()\n    \n    # Create test table\n    cursor.execute("CREATE TABLE users (id INT, username TEXT, password TEXT)")\n    cursor.execute("INSERT INTO users VALUES (1, \'admin\', \'securepass123\')")\n    \n    # Parameterized query (safe from SQL injection)\n    query = "SELECT * FROM users WHERE username = ? AND password = ?"\n    cursor.execute(query, (username, password))\n    \n    result = cursor.fetchone()\n    conn.close()\n    return result is not None\n\nprint(secure_login("admin", "securepass123"))  # True\nprint(secure_login("admin", "\' OR \'1\'=\'1"))   # False (safe)'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which password attack uses a wordlist of common passwords?',
          options: ['Brute Force', 'Dictionary Attack', 'Rainbow Table', 'Keylogging'],
          correct: 1
        },
        {
          question: 'What is vishing?',
          options: ['Email phishing', 'Voice phishing (phone calls)', 'SMS phishing', 'USB baiting'],
          correct: 1
        },
        {
          question: 'Which vulnerability allows database manipulation through user input?',
          options: ['XSS', 'CSRF', 'SQL Injection', 'SSRF'],
          correct: 2
        }
      ]
    },
    {
      id: 'ethical_post',
      title: 'Post-Exploitation',
      lessons: [
        {
          id: 'ethical_privilege',
          title: 'Privilege Escalation',
          content: 'Privilege escalation is the process of gaining higher-level access to a system after initial compromise.\n\nVertical escalation - Getting higher privileges (user → admin):\n• Exploiting kernel vulnerabilities\n• Misconfigured sudo permissions\n• Weak service permissions\n• Stored credentials in memory/files\n\nHorizontal escalation - Accessing another user with same privilege level:\n• Session hijacking\n• Token manipulation\n\nCommon tools: LinPEAS, WinPEAS, PowerUp, CVE exploits.',
          codeExamples: [
            {
              title: 'Check Sudo Misconfigurations',
              code: '# Simulating Linux privilege escalation checks\n\ndef check_privilege_escalation():\n    findings = []\n    \n    # Check sudo permissions\n    findings.append({"check": "sudo -l", "finding": "User may run ALL commands as root", "risk": "HIGH"})\n    \n    # Check SUID binaries\n    findings.append({"check": "SUID binaries", "finding": "/usr/bin/python3.11 has SUID bit set", "risk": "HIGH"})\n    \n    # Check writable scripts\n    findings.append({"check": "Writable cron scripts", "finding": "/etc/cron.hourly/backup.sh is world-writable", "risk": "MEDIUM"})\n    \n    # Check kernel version\n    findings.append({"check": "Kernel version", "finding": "Kernel 5.4.0 - vulnerable to CVE-2023-XXXX", "risk": "HIGH"})\n    \n    print("Privilege Escalation Checks:")\n    for f in findings:\n        print(f"  [{f[\'risk\']}] {f[\'check\']}: {f[\'finding\']}")\n\ncheck_privilege_escalation()'
            }
          ]
        },
        {
          id: 'ethical_persistence',
          title: 'Persistence',
          content: 'Persistence ensures continued access to a compromised system even after reboots or credential changes.\n\nCommon persistence mechanisms:\n• Backdoor accounts - Creating new users\n• Cron jobs / Scheduled tasks\n• Startup scripts - rc.local, registry run keys\n• Web shells - Backdoor scripts on web servers\n• SSH keys - Adding authorized keys\n• Rootkits - Kernel-level persistence\n• Service installation - Malicious services\n\nDetection: Monitor new accounts, unexpected scheduled tasks, file integrity checks.',
          codeExamples: [
            {
              title: 'Persistence Detection',
              code: '# Simulating persistence detection checks\nimport datetime\n\nclass PersistenceChecker:\n    def __init__(self):\n        self.suspicious_items = []\n    \n    def check_startup_items(self, items):\n        for item in items:\n            if "unknown" in item[\"source\"].lower():\n                self.suspicious_items.append(f"Unknown startup: {item[\'name\"]} }"\n    \n    def check_cron_jobs(self, jobs):\n        for job in jobs:\n            if job["user"] == "www-data" and "shell" in job[\"command\"]:\n                self.suspicious_items.append(f"Suspicious cron: {job[\'command\']}")\n    \n    def check_new_users(self, users):\n        for user in users:\n            if abs((datetime.now() - user[\"created\"]).days) < 1:\n                self.suspicious_items.append(f"New user created: {user[\'name\']}")\n    \n    def report(self):\n        if self.suspicious_items:\n            print("Persistence Detection Report:")\n            for item in self.suspicious_items:\n                print(f"  ⚠ {item}")\n        else:\n            print("No persistence mechanisms detected")\n\nchecker = PersistenceChecker()\nchecker.check_new_users([{"name": "backupadmin", "created": datetime.datetime.now()}])\nchecker.report()'
            }
          ]
        },
        {
          id: 'ethical_covering',
          title: 'Covering Tracks',
          content: 'Covering tracks involves removing evidence of intrusion to avoid detection.\n\nNote: In ethical hacking, covering tracks is usually NOT performed unless explicitly requested. Transparency is key in authorized testing.\n\nLogs that may need cleanup:\n• System event logs\n• Application logs\n• Access logs (Apache, Nginx)\n• Command history\n• Browser history\n\nForensic artifacts to consider:\n• Registry changes\n• File timestamps (MAC times)\n• Event log entries\n• Temporary files\n\nBest practice: Document everything you did. The client needs to know what happened.',
          codeExamples: [
            {
              title: 'Forensic Artifact Timeline',
              code: 'from datetime import datetime, timedelta\n\n# Simulating forensic timeline analysis\nclass ForensicTimeline:\n    def __init__(self):\n        self.events = []\n    \n    def add_event(self, timestamp, source, description):\n        self.events.append({\n            "timestamp": timestamp,\n            "source": source,\n            "description": description\n        })\n    \n    def analyze(self):\n        self.events.sort(key=lambda e: e["timestamp"])\n        print("Forensic Timeline:")\n        for event in self.events:\n            print(f"  {event[\'timestamp\']} | {event[\'source\']:10s} | {event[\'description\']}")\n        \n        # Check for anomalies\n        print("\\nAnomalies detected:")\n        for i in range(1, len(self.events)):\n            gap = self.events[i]["timestamp"] - self.events[i-1]["timestamp"]\n            if gap < timedelta(seconds=1) and self.events[i]["source"] != self.events[i-1]["source"]:\n                print(f"  Tight timing between events {i-1} and {i} - suspicious")\n\ntimeline = ForensicTimeline()\ntimeline.add_event(datetime.now() - timedelta(minutes=30), "auth.log", "Login failed")\ntimeline.add_event(datetime.now() - timedelta(minutes=29), "auth.log", "Login success")\ntimeline.add_event(datetime.now() - timedelta(minutes=28), "bash", "sudo su")\ntimeline.analyze()'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is vertical privilege escalation?',
          options: ['Moving between user accounts', 'Gaining higher-level access', 'Accessing network shares', 'Bypassing web application firewalls'],
          correct: 1
        },
        {
          question: 'Which persistence mechanism involves creating a backdoor on a web server?',
          options: ['Cron job', 'Registry key', 'Web shell', 'SSH key'],
          correct: 2
        },
        {
          question: 'Should ethical hackers typically cover their tracks?',
          options: ['Always', 'Never unless explicitly requested', 'Only if caught', 'Only for critical systems'],
          correct: 1
        }
      ]
    }
  ]
};
