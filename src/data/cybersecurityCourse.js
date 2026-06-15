export const cybersecurityCourse = {
  id: 'cybersecurity',
  title: 'Introduction to Cybersecurity',
  subtitle: 'Become a Cybersecurity Analyst',
  icon: '🔒',
  color: '#2E7D32',
  bgColor: '#E8F5E9',
  description: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. Learn to defend against threats, analyze vulnerabilities, and build a career in security.',
  chapters: [
    {
      id: 'cybersec_intro',
      title: 'Introduction to Cybersecurity',
      lessons: [
        {
          id: 'cybersec_what_is',
          title: 'What is Cybersecurity?',
          content: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.\n\nKey domains of cybersecurity:\n• Network Security - Protecting network infrastructure\n• Application Security - Securing software and devices\n• Information Security - Protecting data integrity and privacy\n• Operational Security - Processes for handling and protecting data\n• Disaster Recovery - Business continuity planning\n• End-User Education - Training users on security best practices',
          codeExamples: [
            {
              title: 'Security Mindset',
              code: '# The CIA Triad - Core security principles\n# Confidentiality - Only authorized access\n# Integrity - Data is accurate and unmodified\n# Availability - Systems are accessible when needed\n\nprinciples = {\n    "confidentiality": "Encryption, access controls",\n    "integrity": "Hashing, checksums, version control",\n    "availability": "Redundancy, backups, failover"\n}\n\nfor principle, methods in principles.items():\n    print(f"{principle}: {methods}")'
            }
          ]
        },
        {
          id: 'cybersec_threat_landscape',
          title: 'Threat Landscape',
          content: 'The cyber threat landscape is constantly evolving. Understanding the types of threats you may face is the first step to defending against them.\n\nCommon threat types:\n• Malware - Viruses, worms, trojans, ransomware\n• Phishing - Deceptive emails targeting credentials\n• DDoS - Distributed Denial of Service attacks\n• Man-in-the-Middle - Intercepting communications\n• SQL Injection - Database attacks via web apps\n• Zero-Day - Exploits for unknown vulnerabilities\n\nThreat actors include nation-states, organized crime, hacktivists, and insider threats.',
          codeExamples: [
            {
              title: 'Threat Classification',
              code: 'threat_actors = {\n    "nation_state": {"motivation": "espionage", "skill": "very high"},\n    "organized_crime": {"motivation": "financial", "skill": "high"},\n    "hacktivist": {"motivation": "political", "skill": "medium"},\n    "insider": {"motivation": "varied", "skill": "varies"}\n}\n\nfor actor, traits in threat_actors.items():\n    print(f"{actor}: {traits[\'motivation\']} ({traits[\'skill\']})")'
            }
          ]
        },
        {
          id: 'cybersec_principles',
          title: 'Security Principles',
          content: 'Foundational security principles guide every decision a cybersecurity analyst makes.\n\nKey principles:\n• Defense in Depth - Multiple layers of security\n• Least Privilege - Minimum access necessary\n• Separation of Duties - No single person has total control\n• Fail Secure - System fails to a secure state\n• Security by Design - Security built in, not bolted on\n\nThese principles apply to network architecture, access control, software development, and incident response.',
          codeExamples: [
            {
              title: 'Least Privilege Example',
              code: '# Role-based access control (RBAC) model\nroles = {\n    "admin": ["read", "write", "delete", "manage_users"],\n    "analyst": ["read", "write"],\n    "viewer": ["read"]\n}\n\ndef check_access(user_role, action):\n    if action in roles.get(user_role, []):\n        return f"Access granted for {action}"\n    return f"Access denied for {action}"\n\nprint(check_access("analyst", "delete"))  # Denied\nprint(check_access("admin", "delete"))    # Granted'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does the "C" stand for in the CIA Triad?',
          options: ['Compliance', 'Confidentiality', 'Cryptography', 'Containment'],
          correct: 1
        },
        {
          question: 'Which principle ensures users have only the access they need?',
          options: ['Defense in Depth', 'Least Privilege', 'Separation of Duties', 'Fail Secure'],
          correct: 1
        },
        {
          question: 'What type of attack uses deceptive emails to steal credentials?',
          options: ['DDoS', 'Phishing', 'SQL Injection', 'Man-in-the-Middle'],
          correct: 1
        }
      ]
    },
    {
      id: 'cybersec_network',
      title: 'Network Security',
      lessons: [
        {
          id: 'cybersec_firewalls',
          title: 'Firewalls & IDS',
          content: 'Firewalls are the first line of defense in network security. They monitor and control incoming and outgoing traffic based on predetermined security rules.\n\nTypes of firewalls:\n• Packet Filtering - Inspects packets individually\n• Stateful Inspection - Tracks connection state\n• Proxy Firewall - Acts as an intermediary\n• Next-Gen Firewall - Deep packet inspection, app awareness\n\nIntrusion Detection Systems (IDS) monitor network traffic for suspicious activity and alert administrators. Intrusion Prevention Systems (IPS) take action to block threats.',
          codeExamples: [
            {
              title: 'Simple Firewall Rules Logic',
              code: '# Simulating firewall rule processing\nfirewall_rules = [\n    {"src_port": 80, "action": "allow"},\n    {"src_port": 443, "action": "allow"},\n    {"src_port": 22, "action": "deny"},\n    {"default": True, "action": "deny"}\n]\n\ndef process_packet(src_port):\n    for rule in firewall_rules:\n        if rule.get("src_port") == src_port:\n            return f"Packet on port {src_port}: {rule[\'action\']}"\n    return f"Packet on port {src_port}: deny (default)"\n\nprint(process_packet(80))   # Allow\nprint(process_packet(22))   # Deny\nprint(process_packet(8080)) # Deny (default)'
            }
          ]
        },
        {
          id: 'cybersec_protocols',
          title: 'Secure Protocols',
          content: 'Secure protocols encrypt data in transit to prevent eavesdropping and tampering.\n\nKey secure protocols:\n• HTTPS - HTTP over TLS (port 443)\n• SSH - Secure Shell for remote access (port 22)\n• SFTP/FTPS - Secure file transfer\n• IPsec - Network layer security\n• TLS/SSL - Transport layer security\n• DNSSEC - Secure DNS\n\nAlways use secure protocols instead of their insecure counterparts (HTTP vs HTTPS, FTP vs SFTP, Telnet vs SSH).',
          codeExamples: [
            {
              title: 'Protocol Comparison',
              code: 'protocols = {\n    "HTTP": {"secure": False, "port": 80, "encryption": "none"},\n    "HTTPS": {"secure": True, "port": 443, "encryption": "TLS"},\n    "FTP": {"secure": False, "port": 21, "encryption": "none"},\n    "SFTP": {"secure": True, "port": 22, "encryption": "SSH"},\n    "Telnet": {"secure": False, "port": 23, "encryption": "none"},\n    "SSH": {"secure": True, "port": 22, "encryption": "strong"}\n}\n\nprint("Insecure protocols to avoid:")\nfor name, info in protocols.items():\n    if not info["secure"]:\n        print(f"  {name} (port {info[\'port\']})")'
            }
          ]
        },
        {
          id: 'cybersec_vpn',
          title: 'VPNs & Tunneling',
          content: 'Virtual Private Networks (VPNs) create encrypted tunnels between a device and a network, ensuring privacy and security over public networks.\n\nVPN protocols:\n• OpenVPN - Open-source, widely trusted\n• WireGuard - Modern, fast, lightweight\n• IPsec/IKEv2 - Common in enterprise\n• PPTP - Legacy, insecure\n\nUse cases: Remote access, site-to-site connectivity, bypassing geo-restrictions, securing public Wi-Fi.',
          codeExamples: [
            {
              title: 'Tunnel Concept',
              code: '# Visualizing VPN tunneling\n# Without VPN:\n# [Your Device] ---> [Internet] ---> [Website]\n#     Data is visible to ISP and others\n\n# With VPN:\n# [Your Device] ---> [VPN Server] ---> [Website]\n#     Data is encrypted until VPN server\n\nlayers = ["Your Data", "Encrypted", "VPN Header", "IP Packet"]\nprint(" -> ".join(layers))\nprint("|___ TLS tunnel encrypts everything ___|")'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which type of firewall tracks connection state?',
          options: ['Packet Filtering', 'Stateful Inspection', 'Proxy Firewall', 'Next-Gen Firewall'],
          correct: 1
        },
        {
          question: 'What port does HTTPS use by default?',
          options: ['80', '443', '22', '8080'],
          correct: 1
        },
        {
          question: 'Which VPN protocol is considered modern, fast, and lightweight?',
          options: ['PPTP', 'IPsec', 'OpenVPN', 'WireGuard'],
          correct: 3
        }
      ]
    },
    {
      id: 'cybersec_threats',
      title: 'Threat Analysis',
      lessons: [
        {
          id: 'cybersec_malware',
          title: 'Malware Analysis',
          content: 'Malware analysis is the process of examining malicious software to understand its behavior, origin, and impact.\n\nTypes of analysis:\n• Static Analysis - Examining code without execution\n• Dynamic Analysis - Running malware in a sandbox\n• Memory Analysis - Analyzing RAM dumps\n\nCommon malware types:\n• Viruses - Self-replicating, attach to files\n• Worms - Self-replicating, spread via networks\n• Trojans - Disguised as legitimate software\n• Ransomware - Encrypts data for ransom\n• Spyware - Steals information silently',
          codeExamples: [
            {
              title: 'File Hash Check',
              code: 'import hashlib\n\ndef get_file_hash(filepath):\n    """Calculate SHA-256 hash of a file"""\n    sha256 = hashlib.sha256()\n    with open(filepath, "rb") as f:\n        for chunk in iter(lambda: f.read(4096), b""):\n            sha256.update(chunk)\n    return sha256.hexdigest()\n\n# Known malicious hashes (example)\nmalicious_hashes = {\n    "e3b0c44298fc1c149afbf4c8996fb924": "Trojan.Generic"\n}\n\nfile_hash = get_file_hash("suspicious_file.exe")\nif file_hash in malicious_hashes:\n    print(f"ALERT: {malicious_hashes[file_hash]} detected!")'
            }
          ]
        },
        {
          id: 'cybersec_soc',
          title: 'SOC Operations',
          content: 'A Security Operations Center (SOC) is a centralized team that monitors, detects, and responds to security incidents.\n\nSOC tiers:\n• Tier 1 - Triage: Monitors alerts, filters false positives\n• Tier 2 - Investigation: Deep analysis, containment\n• Tier 3 - Threat Hunting: Proactive hunting, advanced threats\n\nKey tools: SIEM, SOAR, EDR, Ticketing systems\n\nThe SOC follows the NIST incident response framework: Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned.',
          codeExamples: [
            {
              title: 'Alert Triage Logic',
              code: '# Simple SOC alert triage system\nalerts = [\n    {"id": 1, "severity": "low", "type": "failed_login"},\n    {"id": 2, "severity": "critical", "type": "ransomware_detected"},\n    {"id": 3, "severity": "medium", "type": "unusual_outbound_traffic"}\n]\n\ndef triage_alert(alert):\n    priority = {"critical": 1, "high": 2, "medium": 3, "low": 4}\n    return priority.get(alert["severity"], 99)\n\nalerts.sort(key=triage_alert)\nprint("Alert priority queue:")\nfor a in alerts:\n    print(f"  [{a[\'severity\'].upper()}] {a[\'type\']}")'
            }
          ]
        },
        {
          id: 'cybersec_forensics',
          title: 'Digital Forensics',
          content: 'Digital forensics involves collecting, preserving, and analyzing digital evidence for investigations.\n\nForensic process:\n1. Identification - Identify relevant evidence\n2. Preservation - Create forensic images (bit-for-bit copies)\n3. Analysis - Examine data using forensic tools\n4. Documentation - Maintain chain of custody\n5. Presentation - Report findings\n\nKey tools: FTK Imager, Autopsy, EnCase, Volatility (memory), Wireshark.\n\nForensics follows the order of volatility: registers, cache, RAM, network connections, temporary files, disk.',
          codeExamples: [
            {
              title: 'Chain of Custody Log',
              code: 'from datetime import datetime\n\nclass Evidence:\n    def __init__(self, id, description):\n        self.id = id\n        self.description = description\n        self.chain = []\n        \n    def transfer(self, custodian, reason):\n        entry = {\n            "timestamp": datetime.now().isoformat(),\n            "custodian": custodian,\n            "reason": reason\n        }\n        self.chain.append(entry)\n        \n    def show_chain(self):\n        print(f"Evidence: {self.description} ({self.id})")\n        for entry in self.chain:\n            print(f"  {entry[\'timestamp\']} - {entry[\'custodian\']}: {entry[\'reason\']}")\n\ndrive = Evidence("EVD-001", "Suspicious USB drive")\ndrive.transfer("Officer Smith", "Seized at scene")\ndrive.transfer("Lab Tech Jones", "Forensic imaging")\ndrive.show_chain()'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What type of malware encrypts data and demands payment?',
          options: ['Trojan', 'Worm', 'Ransomware', 'Spyware'],
          correct: 2
        },
        {
          question: 'Which SOC tier handles proactive threat hunting?',
          options: ['Tier 1', 'Tier 2', 'Tier 3', 'All tiers'],
          correct: 2
        },
        {
          question: 'What is the first step in the forensic process?',
          options: ['Analysis', 'Identification', 'Preservation', 'Documentation'],
          correct: 1
        }
      ]
    },
    {
      id: 'cybersec_tools',
      title: 'Security Tools',
      lessons: [
        {
          id: 'cybersec_wireshark',
          title: 'Wireshark & Packet Analysis',
          content: 'Wireshark is the world\'s most widely used network protocol analyzer. It captures packets in real time and displays them in human-readable format.\n\nKey features:\n• Live capture from network interfaces\n• Deep inspection of hundreds of protocols\n• Filtering with display and capture filters\n• Follow TCP/UDP/TLS streams\n• Statistical analysis (IO graphs, protocol hierarchy)\n\nCommon use cases: Troubleshooting, detecting suspicious traffic, analyzing malware behavior, protocol analysis.',
          codeExamples: [
            {
              title: 'Wireshark Display Filters',
              code: '# Common Wireshark display filters\n\n# Show only HTTP traffic\n# http\n\n# Show traffic to/from a specific IP\n# ip.addr == 192.168.1.1\n\n# Show DNS queries\n# dns\n\n# Show failed TCP connections\n# tcp.flags.reset == 1\n\n# Show traffic on specific port\n# tcp.port == 443\n\n# Show HTTP POST requests\n# http.request.method == "POST"\n\n# Combine filters\n# http and ip.src == 10.0.0.1'
            }
          ]
        },
        {
          id: 'cybersec_nmap',
          title: 'Nmap & Network Mapping',
          content: 'Nmap (Network Mapper) is a powerful open-source tool for network discovery and security auditing.\n\nKey capabilities:\n• Host discovery - Finding live hosts\n• Port scanning - Identifying open ports\n• Service detection - Determining running services\n• OS detection - Fingerprinting operating systems\n• Scripting engine - Automating tasks with NSE\n\nEthical use: Always get permission before scanning networks. Unauthorized scanning can be illegal.',
          codeExamples: [
            {
              title: 'Nmap Scan Types',
              code: '# Common Nmap commands\n\n# TCP SYN scan (default, requires root)\n# nmap -sS 192.168.1.0/24\n\n# TCP connect scan (no root needed)\n# nmap -sT 192.168.1.1\n\n# Service version detection\n# nmap -sV 192.168.1.1\n\n# OS detection\n# nmap -O 192.168.1.1\n\n# Aggressive scan (OS, services, scripts, traceroute)\n# nmap -A 192.168.1.1\n\n# Scan specific ports\n# nmap -p 22,80,443 192.168.1.1\n\n# Output to file\n# nmap -oN scan_results.txt 192.168.1.1'
            }
          ]
        },
        {
          id: 'cybersec_siem',
          title: 'SIEM Systems',
          content: 'Security Information and Event Management (SIEM) systems aggregate and analyze log data from across an organization to detect threats.\n\nPopular SIEM solutions:\n• Splunk - Industry leader, powerful search\n• ELK Stack - Elasticsearch, Logstash, Kibana (open-source)\n• IBM QRadar - Enterprise SIEM\n• Azure Sentinel - Cloud-native SIEM\n\nSIEM functions:\n• Log collection and normalization\n• Real-time correlation and alerting\n• Dashboards and visualization\n• Compliance reporting\n• Threat intelligence integration',
          codeExamples: [
            {
              title: 'Simple Log Correlation',
              code: 'from datetime import datetime, timedelta\n\n# Simulated SIEM correlation rule\nlog_entries = [\n    {"user": "alice", "event": "login_failed", "time": "2024-01-01 10:00:00"},\n    {"user": "alice", "event": "login_failed", "time": "2024-01-01 10:00:05"},\n    {"user": "alice", "event": "login_failed", "time": "2024-01-01 10:00:10"},\n    {"user": "alice", "event": "login_success", "time": "2024-01-01 10:00:15"}\n]\n\ndef detect_brute_force(entries, threshold=3, window_seconds=60):\n    failed = [e for e in entries if e["event"] == "login_failed"]\n    if len(failed) >= threshold:\n        return f"ALERT: Brute force detected - {len(failed)} failures"\n    return "No brute force detected"\n\nprint(detect_brute_force(log_entries))  # Alert'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which Wireshark filter shows HTTP traffic to a specific IP?',
          options: ['http and ip.src == 10.0.0.1', 'tcp.port == 80', 'http.request.method == "GET"', 'dns'],
          correct: 0
        },
        {
          question: 'What Nmap scan type requires root privileges?',
          options: ['TCP connect scan', 'TCP SYN scan', 'Service detection', 'OS detection'],
          correct: 1
        },
        {
          question: 'Which SIEM component is responsible for log storage and search?',
          options: ['Logstash', 'Kibana', 'Elasticsearch', 'Beats'],
          correct: 2
        }
      ]
    },
    {
      id: 'cybersec_compliance',
      title: 'Compliance & Governance',
      lessons: [
        {
          id: 'cybersec_standards',
          title: 'Security Standards',
          content: 'Security standards provide frameworks for implementing and managing cybersecurity programs.\n\nMajor standards:\n• ISO 27001 - Information Security Management\n• NIST CSF - Cybersecurity Framework\n• PCI DSS - Payment Card Industry standards\n• HIPAA - Healthcare data protection\n• SOC 2 - Service organization controls\n\nCompliance vs Security: Compliance means meeting minimum requirements. Security means actually protecting assets. They are not the same.',
          codeExamples: [
            {
              title: 'Compliance Checklist',
              code: '# Simple compliance checklist framework\ncompliance_items = {\n    "ISO 27001": [\n        "Information security policy",\n        "Asset management",\n        "Access control",\n        "Incident management",\n        "Business continuity"\n    ],\n    "PCI DSS": [\n        "Firewall configuration",\n        "Data encryption",\n        "Access controls",\n        "Regular monitoring",\n        "Security testing"\n    ]\n}\n\nfor standard, items in compliance_items.items():\n    print(f"{standard}:")\n    for item in items:\n        print(f"  [ ] {item}")'
            }
          ]
        },
        {
          id: 'cybersec_gdpr',
          title: 'Data Protection & GDPR',
          content: 'The General Data Protection Regulation (GDPR) is a comprehensive data privacy law that affects any organization handling EU citizen data.\n\nKey principles:\n• Lawfulness, fairness, transparency\n• Purpose limitation\n• Data minimization\n• Accuracy\n• Storage limitation\n• Integrity and confidentiality\n• Accountability\n\nRights include: Right to access, right to be forgotten, data portability, breach notification (within 72 hours).',
          codeExamples: [
            {
              title: 'Data Classification',
              code: 'data_classifications = {\n    "public": {"encryption": False, "access": "anyone"},\n    "internal": {"encryption": False, "access": "employees"},\n    "confidential": {"encryption": True, "access": "specific_teams"},\n    "restricted": {"encryption": True, "access": "need_to_know"}\n}\n\ndef handle_data(data_type, user_role):\n    rules = data_classifications.get(data_type, {})\n    if not rules:\n        return "Unknown data type"\n    if rules["access"] == "need_to_know" and user_role != "admin":\n        return "Access denied"\n    return f"Data handled with{f\' encryption\' if rules[\"encryption\"] else \'\'} }"\n\nprint(handle_data("restricted", "analyst"))    # Denied\nprint(handle_data("restricted", "admin"))      # Granted with encryption'
            }
          ]
        },
        {
          id: 'cybersec_incident',
          title: 'Incident Response',
          content: 'Incident Response (IR) is the systematic approach to managing and recovering from security incidents.\n\nNIST IR Framework:\n1. Preparation - Policies, tools, training\n2. Detection & Analysis - Identify and assess\n3. Containment, Eradication & Recovery - Stop the breach, remove threat, restore\n4. Post-Incident - Lessons learned, improve\n\nKey metrics: Mean Time to Detect (MTTD), Mean Time to Respond (MTTR), dwell time.',
          codeExamples: [
            {
              title: 'Incident Response Playbook',
              code: 'class Incident:\n    def __init__(self, severity, description):\n        self.severity = severity\n        self.description = description\n        self.status = "detected"\n        \n    def contain(self):\n        self.status = "contained"\n        print(f"Incident contained: {self.description}")\n        \n    def eradicate(self):\n        self.status = "eradicated"\n        print("Threat removed from systems")\n        \n    def recover(self):\n        self.status = "recovered"\n        print("Systems restored to normal operation")\n        \n    def report(self):\n        print(f"IR Report: {self.description}")\n        print(f"  Severity: {self.severity}")\n        print(f"  Final Status: {self.status}")\n\nincident = Incident("critical", "Ransomware detected on file server")\nincident.contain()\nincident.eradicate()\nincident.recover()\nincident.report()'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does GDPR require for breach notification?',
          options: ['Within 24 hours', 'Within 72 hours', 'Within 7 days', 'Within 30 days'],
          correct: 1
        },
        {
          question: 'Which phase follows Containment in the NIST IR framework?',
          options: ['Preparation', 'Detection', 'Eradication & Recovery', 'Post-Incident'],
          correct: 2
        },
        {
          question: 'What is the difference between compliance and security?',
          options: ['They are the same', 'Compliance is minimum requirements, security is actual protection', 'Security is mandatory, compliance is optional', 'Compliance is for enterprises only'],
          correct: 1
        }
      ]
    }
  ]
};
