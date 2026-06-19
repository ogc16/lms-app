export const mobileComputingCourse = {
  id: 'mobile_computing',
  title: 'Mobile & Wireless Computing',
  subtitle: 'Mobile and Wireless Computing',
  icon: '\uD83D\uDCF1',
  color: '#0f3460',
  bgColor: '#E8EEF6',
  description: 'Mobile and wireless computing fundamentals — from cellular evolution (1G–5G) to wireless networks, mobile IP, and security.',
  chapters: [
    {
      id: 'mc_intro',
      title: 'Introduction to Mobile Computing',
      lessons: [
        {
          id: 'mc_intro_concepts',
          title: 'Key Concepts',
          content: 'Mobile computing enables users to access information and computing resources from anywhere using portable devices over wireless networks. It combines three key elements: mobile communication (the network), mobile hardware (the device), and mobile software (applications).\n\nKey characteristics:\n• Mobility — users move freely while staying connected\n• Portability — devices are lightweight and battery-powered\n• Wireless connectivity — communication via radio waves, infrared, or satellite\n• Context awareness — devices adapt to location, environment, and user state\n\nLimitations: Limited battery life, lower bandwidth and higher latency than wired networks, security vulnerabilities, signal interference and fading, and higher power consumption for RF components.',
          codeExamples: [
            {
              title: 'Mobile Computing Elements',
              code: 'Mobile Computing = Mobile Communication (Network)\n                 + Mobile Hardware (Device)\n                 + Mobile Software (Applications)\n\nKey Trade-offs:\n  Mobility   vs  Performance\n  Portability  vs  Battery Life\n  Wireless     vs  Security'
            }
          ]
        },
        {
          id: 'mc_intro_categories',
          title: 'Categories of Mobile Computing',
          content: 'Mobile computing encompasses several categories based on device mobility and connectivity:\n\n• Fixed and wired — traditional desktop computing\n• Mobile and wired — laptops connected via Ethernet\n• Fixed and wireless — desktop with wireless connection\n• Mobile and wireless — smartphone, tablet, laptop with cellular/Wi-Fi\n\nApplications span emergency services, healthcare (telemedicine), navigation (GPS), e-commerce (mobile banking), education (e-learning), transportation (fleet management), and entertainment (streaming, gaming).'
        }
      ],
      quiz: [
        {
          question: 'Which generation introduced digital voice and SMS?',
          options: ['1G', '2G', '3G', '4G'],
          correct: 1
        },
        {
          question: 'What does GSM stand for?',
          options: ['Global System for Mobile', 'General Service Mobile', 'Global Spectrum Mobile', 'General System for Messaging'],
          correct: 0
        },
        {
          question: 'Which multiple access technique is used in 4G LTE?',
          options: ['FDMA', 'TDMA', 'CDMA', 'OFDMA'],
          correct: 3
        },
        {
          question: 'What does the Home Agent do in Mobile IP?',
          options: ['Routes packets to device\'s current location', 'Assigns IP addresses to visitors', 'Encrypts all mobile traffic', 'Manages the SIM card'],
          correct: 0
        },
        {
          question: 'Which Wi-Fi security standard is currently the most secure?',
          options: ['WEP', 'WPA', 'WPA2', 'WPA3'],
          correct: 3
        },
        {
          question: 'What is the primary purpose of frequency reuse in cellular networks?',
          options: ['Reduce battery drain', 'Increase network capacity', 'Improve voice quality', 'Enable global roaming'],
          correct: 1
        },
        {
          question: 'Which network type covers the largest geographic area?',
          options: ['WPAN', 'WLAN', 'WMAN', 'WWAN'],
          correct: 3
        },
        {
          question: 'What is a handoff in cellular networks?',
          options: ['Turning off the device', 'Transferring a call between cells', 'Encrypting voice data', 'Registering on the network'],
          correct: 1
        },
        {
          question: 'What frequency band does most WLAN (Wi-Fi) operate in?',
          options: ['900 MHz', '2.4 GHz', '60 GHz', '700 MHz'],
          correct: 1
        },
        {
          question: 'Which IEEE standard defines Wi-Fi?',
          options: ['802.3', '802.11', '802.15', '802.16'],
          correct: 1
        }
      ]
    },
    {
      id: 'mc_arch',
      title: 'Mobile Computing Architecture',
      lessons: [
        {
          id: 'mc_arch_tier',
          title: 'Three-Tier Architecture',
          content: 'Mobile computing architecture defines the structure and interaction between mobile devices, networks, and backend services. It follows a layered approach similar to the OSI model but with adaptations for mobility.\n\nThe three-tier architecture consists of:\n\n• Presentation Tier (Client) — mobile device with user interface, handles display and input\n• Application Tier (Middleware) — application servers, logic processing, data transformation\n• Data Tier (Backend) — databases, file servers, enterprise systems\n\nThis separation allows for scalability, maintainability, and flexibility in mobile deployments.',
          codeExamples: [
            {
              title: 'Three-Tier Model',
              code: '+-------------------+  Presentation Tier (Mobile Device)\n|  UI / Client App  |  Handles display & input\n+-------------------+\n         |\n+-------------------+  Application Tier (Middleware)\n|  App Servers      |  Logic, transformation\n+-------------------+\n         |\n+-------------------+  Data Tier (Backend)\n|  Databases        |  Storage & enterprise systems\n+-------------------+'
            }
          ]
        },
        {
          id: 'mc_arch_clients',
          title: 'Mobile Client Types',
          content: 'Mobile clients vary based on where processing occurs:\n\n• Thin client — minimal processing; relies on server for computation (browser-based)\n• Thick client — significant local processing; app installed on device (native app)\n• Hybrid client — combines local and server processing (Progressive Web Apps)\n\nKey challenges include intermittent connectivity, varying bandwidth, device heterogeneity, and synchronization of data across multiple devices and the cloud.'
        },
        {
          id: 'mc_arch_middleware',
          title: 'Wireless Middleware',
          content: 'Wireless middleware bridges mobile clients and backend systems. It handles:\n\n• Session management — maintaining state across intermittent connections\n• Data synchronization — reconciling local and server data\n• Compression — reducing data size for limited bandwidth\n• Protocol translation — converting between wireless and wired protocols\n• Offline support — caching and queueing for disconnected operation\n\nExamples include WAP gateway and mobile application servers.'
        }
      ],
      quiz: [
        {
          question: 'What does CDMA stand for?',
          options: ['Code Division Multiple Access', 'Carrier Data Mobile Access', 'Cellular Digital Modulation Algorithm', 'Code Domain Multiple Allocation'],
          correct: 0
        },
        {
          question: 'Which layer of the OSI model does Mobile IP operate at?',
          options: ['Physical', 'Data Link', 'Network', 'Application'],
          correct: 2
        },
        {
          question: 'What is the maximum data rate of 5G?',
          options: ['100 Mbps', '1 Gbps', '10 Gbps', '20 Gbps'],
          correct: 3
        },
        {
          question: 'What technology replaced circuit switching in 4G?',
          options: ['Message switching', 'Packet switching (All-IP)', 'Frequency switching', 'Analog switching'],
          correct: 1
        },
        {
          question: 'What does BTS stand for in GSM?',
          options: ['Base Transceiver Station', 'Broadband Transmission System', 'Basic Telephone Switch', 'Base Terminal Server'],
          correct: 0
        },
        {
          question: 'Which device stores subscriber information permanently in GSM?',
          options: ['VLR', 'HLR', 'MSC', 'BSC'],
          correct: 1
        },
        {
          question: 'What is the range of Bluetooth Class 2 devices?',
          options: ['1m', '10m', '100m', '1km'],
          correct: 1
        },
        {
          question: 'Which protocol provides secure remote terminal access?',
          options: ['HTTP', 'FTP', 'SSH', 'SMTP'],
          correct: 2
        },
        {
          question: 'What does MIMO stand for?',
          options: ['Multiple Input Multiple Output', 'Mobile Integrated Mobile Output', 'Multi-Interface Mobile Operation', 'Modulated Input Modulated Output'],
          correct: 0
        },
        {
          question: 'Which generation uses mmWave frequencies?',
          options: ['3G', '4G', '5G', '2G'],
          correct: 2
        }
      ]
    },
    {
      id: 'mc_wireless_fund',
      title: 'Wireless Communication Fundamentals',
      lessons: [
        {
          id: 'mc_wf_spectrum',
          title: 'Electromagnetic Spectrum for Wireless',
          content: 'Wireless communication transfers information between devices without physical conductors. It uses electromagnetic waves — radio waves, microwaves, and infrared — to propagate signals through free space.\n\nElectromagnetic spectrum bands:\n\n• Radio waves (3 kHz – 300 MHz) — AM/FM radio, TV, cellular (penetrates buildings well)\n• Microwaves (300 MHz – 300 GHz) — Wi-Fi, Bluetooth, satellite, radar, 5G mmWave\n• Infrared (300 GHz – 400 THz) — remote controls, short-range line-of-sight'
        },
        {
          id: 'mc_wf_propagation',
          title: 'Signal Propagation Phenomena',
          content: 'Wireless signals are affected by several propagation phenomena:\n\n• Free-space path loss — signal attenuates with distance (proportional to d²)\n• Reflection — signal bounces off large surfaces (buildings, walls, ground)\n• Diffraction — signal bends around obstacles (edges of buildings, hills)\n• Scattering — signal disperses off rough surfaces or small objects\n• Multipath fading — multiple signal paths arrive at receiver with different phases, causing cancellation or reinforcement'
        },
        {
          id: 'mc_wf_modulation',
          title: 'Modulation Techniques',
          content: 'Modulation encodes digital data onto analog carrier waves. Common schemes used in mobile networks:\n\n• GMSK (Gaussian Minimum Shift Keying) — used in GSM\n• QPSK / 16-QAM / 64-QAM / 256-QAM — used in 3G/4G/5G, higher QAM = more bits/symbol\n• OFDM (Orthogonal Frequency Division Multiplexing) — divides spectrum into orthogonal subcarriers, resistant to multipath fading'
        }
      ],
      quiz: [
        {
          question: 'What is the typical latency in 4G networks?',
          options: ['~10ms', '~50ms', '~1ms', '~200ms'],
          correct: 1
        },
        {
          question: 'What does AuC stand for in GSM security?',
          options: ['Authentication Center', 'Audio Controller', 'Access Unit Circuit', 'Automated User Check'],
          correct: 0
        },
        {
          question: 'Which type of handoff is make-before-break?',
          options: ['Hard handoff', 'Soft handoff', 'Forced handoff', 'Delayed handoff'],
          correct: 1
        },
        {
          question: 'What does WLAN stand for?',
          options: ['Wireless Local Area Network', 'Wide Local Access Network', 'Wired Local Area Network', 'Wireless Long Area Network'],
          correct: 0
        },
        {
          question: 'Which encryption standard does WPA2 use?',
          options: ['DES', 'AES-CCMP', 'MD5', 'RSA'],
          correct: 1
        },
        {
          question: 'What is the main advantage of cell splitting?',
          options: ['Reduces cost', 'Increases capacity', 'Improves security', 'Extends battery life'],
          correct: 1
        },
        {
          question: 'Which satellite orbit is used for GPS?',
          options: ['GEO', 'MEO', 'LEO', 'HEO'],
          correct: 1
        },
        {
          question: 'What does GPRS stand for?',
          options: ['General Packet Radio Service', 'Global Packet Radio System', 'General Purpose Radio Service', 'Global Public Radio Service'],
          correct: 0
        },
        {
          question: 'Which technology is used for contactless payments?',
          options: ['Bluetooth', 'NFC', 'Wi-Fi', 'Infrared'],
          correct: 1
        },
        {
          question: 'What is a rogue access point?',
          options: ['A weak signal AP', 'An unauthorized AP on the network', 'A dual-band AP', 'A mesh AP'],
          correct: 1
        }
      ]
    },
    {
      id: 'mc_1g_2g_gsm',
      title: 'Cellular Networks — 1G, 2G, GSM',
      lessons: [
        {
          id: 'mc_gsm_1g',
          title: '1G — First Generation (1980s)',
          content: 'Cellular networks divide a geographic area into cells, each served by a Base Transceiver Station (BTS). The cellular concept, invented by Bell Labs in 1947, enables frequency reuse and massive capacity scaling.\n\n1G (First Generation) introduced in the 1980s:\n• Analog voice using FDMA (AMPS, TACS, NMT standards)\n• No encryption — vulnerable to eavesdropping\n• Low capacity, large phones, poor battery life'
        },
        {
          id: 'mc_gsm_2g',
          title: '2G — Second Generation (1990s)',
          content: '2G (Second Generation) introduced in the 1990s:\n• Digital voice using TDMA and CDMA\n• GSM (Global System for Mobile Communications) became the global standard\n• Introduced SMS (Short Message Service), SIM cards, and digital encryption (A5 algorithm)\n• Data rates: 9.6 – 14.4 kbps (circuit-switched)'
        },
        {
          id: 'mc_gsm_gprs_edge',
          title: '2.5G — GPRS & EDGE',
          content: 'GPRS (General Packet Radio Service):\n• Packet-switched data, \"always on\", up to 114 kbps\n• Introduced packet data to GSM networks\n\nEDGE (Enhanced Data rates for GSM Evolution):\n• Up to 384 kbps using 8-PSK modulation\n• Triple the data rate of standard GSM'
        },
        {
          id: 'mc_gsm_arch',
          title: 'GSM Architecture',
          content: 'GSM network architecture consists of four main subsystems:\n\n• Mobile Station (MS) — Mobile Equipment (ME) + Subscriber Identity Module (SIM)\n• Base Station Subsystem (BSS) — BTS (radio transceivers) + BSC (Base Station Controller)\n• Network Switching Subsystem (NSS) — MSC (switching), HLR (home database), VLR (visitor database), AuC (authentication), EIR (equipment identity)\n• Operations Support Subsystem (OSS) — network management and maintenance',
          codeExamples: [
            {
              title: 'GSM Architecture',
              code: 'MS (Mobile Station)\n  +-- ME (Mobile Equipment)\n  +-- SIM (Subscriber Identity Module)\n        |\nBSS (Base Station Subsystem)\n  +-- BTS (Base Transceiver Station)\n  +-- BSC (Base Station Controller)\n        |\nNSS (Network & Switching Subsystem)\n  +-- MSC (Mobile Switching Center)\n  +-- HLR (Home Location Register)\n  +-- VLR (Visitor Location Register)\n  +-- AuC (Authentication Center)\n  +-- EIR (Equipment Identity Register)'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What does WEP stand for?',
          options: ['Wired Equivalent Privacy', 'Wireless Encryption Protocol', 'Wide Encryption Privacy', 'Wired Encryption Protocol'],
          correct: 0
        },
        {
          question: 'Which TCP version is designed for wireless networks?',
          options: ['TCP Reno', 'TCP Tahoe', 'TCP Vegas', 'TCP Westwood'],
          correct: 3
        },
        {
          question: 'What is the frequency reuse factor in a cluster of 7 cells?',
          options: ['1/4', '1/7', '1/3', '1/12'],
          correct: 1
        },
        {
          question: 'What does VLR store temporarily?',
          options: ['SIM card data', 'Subscriber location and info in visited network', 'Encryption keys', 'Voicemail messages'],
          correct: 1
        },
        {
          question: 'Which protocol tunnels packets in Mobile IP?',
          options: ['HTTP', 'IPsec', 'GRE', 'FTP'],
          correct: 2
        },
        {
          question: 'What is the range of NFC?',
          options: ['~4 cm', '~1 m', '~10 m', '~100 m'],
          correct: 0
        },
        {
          question: 'What does OFDMA stand for?',
          options: ['Orthogonal Frequency Division Multiple Access', 'Optical Frequency Data Multiple Access', 'Offset Frequency Division Modulation Access', 'Orthogonal Full Duplex Multiple Access'],
          correct: 0
        },
        {
          question: 'Which attack involves intercepting wireless signals?',
          options: ['Phishing', 'Eavesdropping', 'SQL injection', 'Buffer overflow'],
          correct: 1
        },
        {
          question: 'What is the purpose of a VPN?',
          options: ['Boost signal strength', 'Encrypt traffic over public networks', 'Increase data speed', 'Reduce latency'],
          correct: 1
        },
        {
          question: 'Which GSM component manages call switching?',
          options: ['BTS', 'BSC', 'MSC', 'HLR'],
          correct: 2
        }
      ]
    },
    {
      id: 'mc_3g_umts',
      title: '3G — UMTS Networks',
      lessons: [
        {
          id: 'mc_umts_features',
          title: 'UMTS Key Features',
          content: '3G networks, based on IMT-2000 standard, brought high-speed data and multimedia services to mobile devices. The dominant 3G technology is UMTS (Universal Mobile Telecommunications System).\n\nKey features:\n• Data rates: up to 2 Mbps (stationary), 384 kbps (moving), 144 kbps (high-speed)\n• Uses WCDMA (Wideband Code Division Multiple Access) air interface\n• Circuit-switched for voice, packet-switched for data\n• Supports video calls, mobile TV, and high-speed internet'
        },
        {
          id: 'mc_umts_arch',
          title: 'UMTS Architecture',
          content: 'UMTS network architecture consists of:\n\n• User Equipment (UE) — mobile device\n• UTRAN (UMTS Terrestrial Radio Access Network) — Node B (base station) + RNC (Radio Network Controller)\n• Core Network — evolved from GSM NSS; includes SGSN (Serving GPRS Support Node) and GGSN (Gateway GPRS Support Node) for packet data'
        },
        {
          id: 'mc_umts_hspa',
          title: 'HSPA Evolution',
          content: 'HSPA (High Speed Packet Access) evolved UMTS data capabilities:\n\n• HSDPA (High Speed Downlink Packet Access) — up to 14.4 Mbps downlink\n• HSUPA — up to 5.76 Mbps uplink\n• HSPA+ — up to 42 Mbps using MIMO and higher-order modulation\n\n3GPP Release 99 defined UMTS. Later releases (5, 6, 7) introduced HSDPA, HSUPA, and HSPA+.',
          codeExamples: [
            {
              title: '3G Evolution Timeline',
              code: '3GPP Release 99 (2000) -> UMTS / WCDMA\n                         -> 384 kbps - 2 Mbps\n\n3GPP Release 5 (2002)  -> HSDPA\n                         -> 14.4 Mbps downlink\n\n3GPP Release 6 (2004)  -> HSUPA\n                         -> 5.76 Mbps uplink\n\n3GPP Release 7 (2007)  -> HSPA+\n                         -> 42 Mbps (MIMO + 64-QAM)'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What is cell sectoring?',
          options: ['Dividing cells into sectors using directional antennas', 'Merging multiple cells', 'Installing more BTS', 'Power control'],
          correct: 0
        },
        {
          question: 'What does MANET stand for?',
          options: ['Mobile Ad-hoc Network', 'Metropolitan Area Network', 'Managed Network', 'Multiple Access Network'],
          correct: 0
        },
        {
          question: 'Which frequency does 5G mmWave use?',
          options: ['Sub-1 GHz', '1-2 GHz', '24-100 GHz', '2.4 GHz'],
          correct: 2
        },
        {
          question: 'What is a Care-of Address in Mobile IP?',
          options: ['Home IP address', 'Temporary IP in visited network', 'MAC address', 'SIM serial number'],
          correct: 1
        },
        {
          question: 'What is a primary limitation of WEP?',
          options: ['High speed', 'Weak encryption (easily cracked)', 'Short range', 'Expensive hardware'],
          correct: 1
        },
        {
          question: 'What does MSC stand for?',
          options: ['Mobile Switching Center', 'Master Signal Controller', 'Mobile Service Channel', 'Main System Computer'],
          correct: 0
        },
        {
          question: 'Which standard defines Bluetooth?',
          options: ['802.11', '802.15', '802.3', '802.16'],
          correct: 1
        },
        {
          question: 'What is war driving?',
          options: ['Testing cellular signals from a vehicle', 'Searching for Wi-Fi networks while moving', 'Jamming wireless signals', 'Encrypting wireless traffic'],
          correct: 1
        },
        {
          question: 'What does WPA use instead of WEP\'s RC4?',
          options: ['TKIP', 'AES', 'DES', 'MD5'],
          correct: 0
        },
        {
          question: 'How do GSM networks authenticate subscribers?',
          options: ['Using passwords', 'Using A3 algorithm and Ki on SIM', 'Using biometrics', 'Using MAC filtering'],
          correct: 1
        }
      ]
    },
    {
      id: 'mc_4g_lte',
      title: '4G — LTE and WiMAX',
      lessons: [
        {
          id: 'mc_lte_features',
          title: 'LTE Key Features',
          content: '4G was defined by ITU\'s IMT-Advanced requirements: peak data rates of 100 Mbps (high mobility) to 1 Gbps (low mobility). Two technologies met these requirements: LTE-Advanced and WiMAX 802.16m.\n\nLTE key features:\n• All-IP network — no circuit-switched component; voice over LTE (VoLTE)\n• Uses OFDMA on downlink and SC-FDMA on uplink (better power efficiency)\n• MIMO (Multiple Input Multiple Output) — multiple antennas for spatial multiplexing\n• Peak rates: 300 Mbps downlink (LTE Cat 4), 1 Gbps (LTE-Advanced)\n• Low latency: ~50ms (LTE), ~10ms (LTE-Advanced)',
          codeExamples: [
            {
              title: 'LTE vs 3G Comparison',
              code: 'Feature           | 3G (UMTS)        | 4G (LTE)\n------------------+------------------+------------------\nAir Interface     | WCDMA            | OFDMA/SC-FDMA\nSwitching         | Circuit + Packet | All-IP\nPeak Rate         | 2 Mbps           | 300 Mbps - 1 Gbps\nLatency           | ~100ms           | ~10-50ms\nMIMO              | No               | Yes (up to 8x8)\nCore Network      | SGSN/GGSN        | MME/S-GW/P-GW'
            }
          ]
        },
        {
          id: 'mc_lte_arch',
          title: 'LTE Architecture (EPS)',
          content: 'LTE uses the Evolved Packet System (EPS) architecture:\n\n• eNodeB — evolved Node B, combines BTS and BSC functions\n• MME (Mobility Management Entity) — signaling, authentication, mobility\n• S-GW (Serving Gateway) — user data routing and forwarding\n• P-GW (Packet Data Network Gateway) — connects to external IP networks\n• HSS (Home Subscriber Service) — evolved HLR'
        },
        {
          id: 'mc_lte_wimax',
          title: 'WiMAX (IEEE 802.16)',
          content: 'WiMAX (Worldwide Interoperability for Microwave Access) was developed as an alternative to LTE. It offered broadband wireless access over metropolitan areas (up to 50 km range). Mobile WiMAX (802.16e-2005) supported up to 100 Mbps. WiMAX lost the market to LTE and was largely phased out.'
        }
      ],
      quiz: [
        {
          question: 'What does BSC stand for?',
          options: ['Base Station Controller', 'Broadband Service Center', 'Basic Signal Controller', 'Base Switching Circuit'],
          correct: 0
        },
        {
          question: 'Which satellite orbit is at ~35,786 km?',
          options: ['LEO', 'MEO', 'GEO', 'HEO'],
          correct: 2
        },
        {
          question: 'What is the maximum range of Wi-Fi 6 at 2.4 GHz?',
          options: ['~30m', '~100m', '~500m', '~1km'],
          correct: 1
        },
        {
          question: 'What is the primary benefit of network slicing in 5G?',
          options: ['Lower cost', 'Custom virtual networks for different use cases', 'Higher frequency', 'Smaller cell size'],
          correct: 1
        },
        {
          question: 'Which type of interference affects CDMA networks?',
          options: ['Near-far problem', 'Adjacent channel interference', 'Co-channel interference', 'Thermal noise'],
          correct: 0
        },
        {
          question: 'What does EIR stand for in GSM?',
          options: ['Equipment Identity Register', 'Encrypted Information Relay', 'Extended Interface Router', 'Electronic Identity Record'],
          correct: 0
        },
        {
          question: 'What is the typical latency of 5G?',
          options: ['~50ms', '~20ms', '~1-10ms', '~100ms'],
          correct: 2
        },
        {
          question: 'Which modulation does GSM use?',
          options: ['QPSK', 'GMSK', '16-QAM', 'BPSK'],
          correct: 1
        },
        {
          question: 'What is a femtocell?',
          options: ['A very large macro cell', 'A small home/office cellular base station', 'A satellite transceiver', 'A Wi-Fi repeater'],
          correct: 1
        },
        {
          question: 'What does the SIM card store?',
          options: ['Only contacts', 'IMSI, Ki, authentication data', 'Only SMS messages', 'The entire OS'],
          correct: 1
        }
      ]
    },
    {
      id: 'mc_5g',
      title: '5G and Beyond',
      lessons: [
        {
          id: 'mc_5g_scenarios',
          title: '5G Usage Scenarios',
          content: '5G (Fifth Generation) is designed for extreme performance and massive connectivity. 3GPP Release 15 defined the initial 5G NR (New Radio) standard, with Release 16 and 17 adding enhancements.\n\nThree primary usage scenarios:\n\n• eMBB (Enhanced Mobile Broadband) — high-speed internet, 4K/8K streaming, VR/AR\n• URLLC (Ultra-Reliable Low-Latency Communications) — autonomous vehicles, remote surgery, industrial automation\n• mMTC (Massive Machine-Type Communications) — IoT, smart cities, sensor networks'
        },
        {
          id: 'mc_5g_tech',
          title: 'Key 5G Technologies',
          content: 'Key technologies enabling 5G:\n\n• mmWave (24–100 GHz) — large bandwidth but short range, needs beamforming\n• Beamforming — focuses signal directionally to a specific device\n• Network Slicing — multiple virtual networks on shared physical infrastructure\n• Massive MIMO — arrays of 64+, 128+, or 256 antenna elements\n• Small Cells — dense deployment of low-power base stations'
        },
        {
          id: 'mc_5g_arch',
          title: '5G Architecture',
          content: '5G network architecture:\n\n• 5G NR gNB — next-generation base station\n• Service-Based Architecture (SBA) — cloud-native core network functions\n• AMF (Access and Mobility Management Function) — evolved MME\n• UPF (User Plane Function) — evolved S-GW/P-GW\n• Edge Computing — processing closer to the user for low latency\n\n6G Vision: Research is underway for 6G (2030+), targeting terabit speeds, sub-ms latency, integrated sensing and communication, and AI-native network design.',
          codeExamples: [
            {
              title: '5G Requirements',
              code: 'eMBB: Enhanced Mobile Broadband\n  Peak rate: 20 Gbps downlink\n  Experienced rate: 100 Mbps\n\nURLLC: Ultra-Reliable Low-Latency\n  Latency: < 1 ms\n  Reliability: 99.9999%\n\nmMTC: Massive Machine-Type\n  Devices: 1 million / km²\n  Battery life: 10+ years'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which type of IP addressing is used by IoT devices in 5G?',
          options: ['IPv4 only', 'IPv6', 'IPX/SPX', 'AppleTalk'],
          correct: 1
        },
        {
          question: 'What is the main challenge of wireless communication?',
          options: ['Cost', 'Signal fading and interference', 'Cable management', 'Power supply'],
          correct: 1
        },
        {
          question: 'Which 802.11 amendment introduced OFDM?',
          options: ['802.11a', '802.11b', '802.11g', '802.11n'],
          correct: 0
        },
        {
          question: 'What does the Foreign Agent do in Mobile IP?',
          options: ['Assigns CoA and delivers packets', 'Authenticates the user', 'Manages billing', 'Connects to the Internet'],
          correct: 0
        },
        {
          question: 'What is frequency division duplex (FDD)?',
          options: ['Same frequency for up/down', 'Different frequencies for uplink and downlink', 'Time-based sharing', 'Code-based sharing'],
          correct: 1
        },
        {
          question: 'What is the main advantage of soft handoff?',
          options: ['Simpler to implement', 'No data loss during transition', 'Uses less power', 'Cheaper equipment'],
          correct: 1
        },
        {
          question: 'Which generation first used MIMO technology?',
          options: ['3G', '4G (LTE)', '2G', '5G'],
          correct: 1
        },
        {
          question: 'What does SSID stand for?',
          options: ['Service Set Identifier', 'Signal Strength Indicator', 'System Service ID', 'Secure Session ID'],
          correct: 0
        },
        {
          question: 'What is the primary cause of multipath fading?',
          options: ['Atmospheric absorption', 'Signal reflection off surfaces', 'Device battery level', 'Network congestion'],
          correct: 1
        },
        {
          question: 'Which protocol provides mobile node registration in Mobile IP?',
          options: ['DHCP', 'ICMP', 'UDP', 'TCP'],
          correct: 2
        }
      ]
    },
    {
      id: 'mc_wlan_wpan',
      title: 'Wireless LANs and WPANs',
      lessons: [
        {
          id: 'mc_wlan_80211',
          title: 'Wireless LAN — IEEE 802.11 (Wi-Fi)',
          content: 'Wi-Fi is the dominant WLAN technology, operating in unlicensed ISM bands (2.4 GHz and 5 GHz). The 802.11 standard defines the MAC and PHY layers.\n\nWi-Fi standards evolution:\n• 802.11a — 5 GHz, OFDM, up to 54 Mbps\n• 802.11b — 2.4 GHz, DSSS, up to 11 Mbps\n• 802.11g — 2.4 GHz, OFDM, up to 54 Mbps (backward-compatible with b)\n• 802.11n (Wi-Fi 4) — 2.4/5 GHz, MIMO (up to 4×4), up to 600 Mbps\n• 802.11ac (Wi-Fi 5) — 5 GHz only, wider channels (80/160 MHz), MU-MIMO, up to 3.5 Gbps\n• 802.11ax (Wi-Fi 6) — 2.4/5 GHz, OFDMA, 1024-QAM, up to 9.6 Gbps',
          codeExamples: [
            {
              title: 'Wi-Fi Generations',
              code: 'Standard    | Band     | Speed      | MIMO | Year\n------------+----------+------------+------+------\n802.11a     | 5 GHz    | 54 Mbps    | No   | 1999\n802.11b     | 2.4 GHz  | 11 Mbps    | No   | 1999\n802.11g     | 2.4 GHz  | 54 Mbps    | No   | 2003\n802.11n (4) | 2.4/5 GHz| 600 Mbps   | Yes  | 2009\n802.11ac (5)| 5 GHz    | 3.5 Gbps   | Yes  | 2014\n802.11ax (6)| 2.4/5 GHz| 9.6 Gbps   | Yes  | 2019'
            }
          ]
        },
        {
          id: 'mc_wlan_mac',
          title: 'Wi-Fi MAC Protocol — CSMA/CA',
          content: 'Carrier Sense Multiple Access with Collision Avoidance: before transmitting, a station senses the channel. If busy, it waits a random backoff period. RTS/CTS (Request to Send / Clear to Send) mechanism reduces hidden node collisions.'
        },
        {
          id: 'mc_wlan_bt',
          title: 'Wireless PAN — Bluetooth (IEEE 802.15.1)',
          content: 'Bluetooth operates in the 2.4 GHz ISM band using frequency-hopping spread spectrum (FHSS).\n\n• Piconet: up to 8 devices (1 master, 7 slaves)\n• Bluetooth 4.0 — introduced BLE (Bluetooth Low Energy) for IoT\n• Bluetooth 5.0 — 2 Mbps data rate, 240m range, mesh networking'
        },
        {
          id: 'mc_wlan_other',
          title: 'Other WPAN Technologies',
          content: 'Additional short-range wireless technologies:\n\n• NFC (Near Field Communication) — ~4 cm range for contactless payments\n• ZigBee (802.15.4) — low data rate, low power, mesh topology for home automation\n• UWB (Ultra-Wideband) — high precision positioning, short-range high-speed data'
        }
      ],
      quiz: [
        {
          question: 'What does IMSI stand for?',
          options: ['International Mobile Subscriber Identity', 'Integrated Mobile System Interface', 'International Mobile Station Identifier', 'Internal Mobile Subscriber Index'],
          correct: 0
        },
        {
          question: 'Which network topology does cellular networking use?',
          options: ['Star', 'Mesh', 'Hexagonal cells', 'Ring'],
          correct: 2
        },
        {
          question: 'What is beamforming in 5G?',
          options: ['A construction technique', 'Directing signal toward a specific device', 'Splitting a beam of light', 'Creating multiple beams of equal power'],
          correct: 1
        },
        {
          question: 'What does EDGE stand for?',
          options: ['Enhanced Data rates for GSM Evolution', 'Efficient Digital Global Exchange', 'Extended Data GSM Equipment', 'Enhanced Digital GPRS Engine'],
          correct: 0
        },
        {
          question: 'Which layer does WPA operate at?',
          options: ['Physical', 'Data Link', 'Network', 'Application'],
          correct: 1
        },
        {
          question: 'What is the radius of a typical macro cell?',
          options: ['~10m', '~100m', '~1-30 km', '~100 km'],
          correct: 2
        },
        {
          question: 'What does HSPA stand for?',
          options: ['High Speed Packet Access', 'High Signal Processing Algorithm', 'Hybrid System Protocol Architecture', 'High Speed Public Access'],
          correct: 0
        },
        {
          question: 'What is the purpose of interleaving in wireless communication?',
          options: ['Reduce power consumption', 'Spread burst errors across multiple bits', 'Increase data rate', 'Encrypt data'],
          correct: 1
        },
        {
          question: 'Which type of fading occurs due to large obstacles?',
          options: ['Fast fading', 'Slow fading (shadowing)', 'Multipath fading', 'Flat fading'],
          correct: 1
        },
        {
          question: 'What is the main purpose of a MAC address in Wi-Fi?',
          options: ['Route packets to the Internet', 'Uniquely identify a device on the local network', 'Encrypt data', 'Authenticate users'],
          correct: 1
        }
      ]
    },
    {
      id: 'mc_mobile_ip',
      title: 'Mobile IP and Mobility Management',
      lessons: [
        {
          id: 'mc_mip_entities',
          title: 'Mobile IP Entities',
          content: 'Mobile IP (RFC 5944 / RFC 6275) allows devices to change network attachment points while maintaining a permanent IP address. It operates at the Network Layer (Layer 3) of the OSI model.\n\nKey entities:\n\n• Home Agent (HA) — a router on the mobile node\'s home network that tunnels packets to the current location\n• Foreign Agent (FA) — a router on the visited network that provides routing services and a Care-of Address\n• Care-of Address (CoA) — temporary IP address assigned when the mobile node is on a foreign network\n• Correspondent Node (CN) — the peer device communicating with the mobile node',
          codeExamples: [
            {
              title: 'Mobile IP Architecture',
              code: 'Home Network                     Foreign Network\n+----------------+              +----------------+\n|  Home Agent    |              | Foreign Agent  |\n|  (HA)          |              |  (FA)          |\n+-------+--------+              +-------+--------+\n        |                               |\n        |  IP-in-IP Tunnel              |\n        +-------------------------------+\n        |                               |\n  +-----+-----+                 +-------+------+\n  |  Mobile    | ---- moves --> | Mobile Node  |\n  |  Node      |                | (new CoA)    |\n  | (home)     |                |              |\n  +-----------+                 +--------------+'
            }
          ]
        },
        {
          id: 'mc_mip_operation',
          title: 'Mobile IP Operation',
          content: 'The Mobile IP process consists of four steps:\n\n1. Agent Discovery — mobile node detects whether it is on home or foreign network via ICMP Router Advertisement messages\n2. Registration — on a foreign network, the mobile node registers its CoA with its Home Agent using UDP\n3. Tunneling — HA intercepts packets destined for the mobile node\'s home address and encapsulates them (IP-in-IP, GRE) to the CoA\n4. Delivery — FA decapsulates and forwards to the mobile node, or the mobile node acts as its own FA (co-located CoA)\n\nNote: Mobile IP handles macro-mobility (between networks). For micro-mobility within a network, protocols like Cellular IP, HAWAII, and Proxy Mobile IPv6 are more efficient.'
        },
        {
          id: 'mc_mip_mgmt',
          title: 'Mobility Management in Cellular Networks',
          content: 'Mobility management encompasses:\n\n• Location Management — HLR/VLR databases track subscriber location; location update and paging procedures\n• Handoff Management — maintaining active connection during cell changes; hard handoff (break-before-make) vs. soft handoff (make-before-break)\n• Handoff Types: intra-BSC, inter-BSC, inter-MSC for GSM; X2 and S1 handovers for LTE'
        }
      ],
      quiz: [
        {
          question: 'What does 802.1X provide in wireless security?',
          options: ['Encryption', 'Port-based network access control', 'Data compression', 'Power management'],
          correct: 1
        },
        {
          question: 'Which version of Bluetooth introduced Low Energy (BLE)?',
          options: ['v2.0', 'v3.0', 'v4.0', 'v5.0'],
          correct: 2
        },
        {
          question: 'What is the primary advantage of micro cells?',
          options: ['Longer range', 'Higher capacity in dense areas', 'Lower cost', 'Simpler installation'],
          correct: 1
        },
        {
          question: 'What does CSMA/CA stand for?',
          options: ['Carrier Sense Multiple Access with Collision Avoidance', 'Code Sequence Multiple Access with Collision Arbitration', 'Carrier Sense Mobile Access with Collision Avoidance', 'Circuit Switched Multiple Access with Code Allocation'],
          correct: 0
        },
        {
          question: 'Which standard defines WiMAX?',
          options: ['802.11', '802.15', '802.16', '802.3'],
          correct: 2
        },
        {
          question: 'What is the main difference between WPA and WPA2?',
          options: ['WPA2 uses AES-CCMP, WPA uses TKIP/RC4', 'WPA2 is slower', 'WPA2 has shorter range', 'WPA uses AES'],
          correct: 0
        },
        {
          question: 'What is a picocell?',
          options: ['A very large cell', 'A small cell for indoor coverage (~100m)', 'A satellite cell', 'A nationwide cell'],
          correct: 1
        },
        {
          question: 'Which device in GSM handles encryption/decryption?',
          options: ['MS (Mobile Station)', 'BTS', 'MSC', 'HLR'],
          correct: 0
        },
        {
          question: 'What is the main advantage of Orthogonal Frequency Division Multiplexing?',
          options: ['Simpler circuit design', 'Resistance to multipath interference', 'Higher power output', 'Lower cost'],
          correct: 1
        },
        {
          question: 'What is the role of the EIR in GSM?',
          options: ['Track stolen/unauthorized phones', 'Manage billing', 'Route voice calls', 'Store voicemail'],
          correct: 0
        }
      ]
    },
    {
      id: 'mc_security',
      title: 'Mobile Security and Pervasive Computing',
      lessons: [
        {
          id: 'mc_sec_threats',
          title: 'Wireless Security Threats',
          content: 'Wireless networks are inherently less secure than wired due to the broadcast nature of radio waves. Attacks can come from anywhere within range.\n\nCommon threats:\n\n• Eavesdropping — passive interception of radio signals using spectrum analyzers\n• Man-in-the-Middle (MitM) — attacker relays communication between two parties\n• Replay attack — capturing and retransmitting valid authentication packets\n• DoS/Jamming — overwhelming the channel with noise or traffic\n• Evil Twin / Rogue AP — fake access point mimicking a legitimate one'
        },
        {
          id: 'mc_sec_wifi',
          title: 'Wi-Fi Security Protocols',
          content: 'Wi-Fi security has evolved through several standards:\n\n• WEP — 64/128-bit RC4 encryption; broken in minutes (FMS attack)\n• WPA — TKIP with Michael integrity check; improved but still vulnerable\n• WPA2 (802.11i) — AES-CCMP encryption; current minimum standard\n• WPA3 (2018) — SAE handshake (replaces PSK), forward secrecy, 192-bit security mode, OWE (Opportunistic Wireless Encryption) for open networks\n\nBest practices: Use WPA3 or WPA2, disable WPS, change default credentials, use strong passphrases, enable network monitoring, and always use encryption (HTTPS, VPN).',
          codeExamples: [
            {
              title: 'Wi-Fi Security Evolution',
              code: 'Standard | Encryption | Status\n---------+------------+---------\nWEP      | RC4 (64/128-bit) | BROKEN - minutes to crack\nWPA      | TKIP/RC4         | VULNERABLE - improved but weak\nWPA2     | AES-CCMP          | SECURE - current minimum\nWPA3     | SAE/AES-GCM       | MOST SECURE - forward secrecy'
            }
          ]
        },
        {
          id: 'mc_sec_gsm',
          title: 'GSM Security',
          content: 'GSM security mechanisms:\n\n• A3 algorithm — authentication (challenge-response using Ki on SIM)\n• A5/1, A5/2, A5/3 — stream ciphers for over-the-air encryption\n• A8 algorithm — generates session key (Kc) from Ki\n• Vulnerability: A5/1 can be cracked in minutes with rainbow tables'
        },
        {
          id: 'mc_sec_pervasive',
          title: 'Pervasive (Ubiquitous) Computing',
          content: 'Pervasive computing, coined by Mark Weiser (1991), envisions computing embedded into everyday objects and environments, invisible to the user.\n\nKey characteristics:\n\n• Invisibility — computers disappear into the background\n• Context awareness — systems sense and respond to environment\n• Ad-hoc networking — devices discover and communicate spontaneously\n• Smart environments — smart homes, smart cities, smart healthcare\n\nExample: A smart refrigerator that detects grocery depletion, checks inventory via RFID, and automatically places an online order — all without user intervention.'
        }
      ],
      quiz: [
        {
          question: 'Which attack involves an attacker impersonating a legitimate AP?',
          options: ['Evil Twin attack', 'DoS attack', 'Brute force attack', 'Man-in-the-middle attack'],
          correct: 0
        },
        {
          question: 'What is the typical uplink frequency of GSM-900?',
          options: ['935-960 MHz', '890-915 MHz', '1800 MHz', '2100 MHz'],
          correct: 1
        },
        {
          question: 'What does UMTS stand for?',
          options: ['Universal Mobile Telecommunications System', 'Unified Mobile Transmission Service', 'Universal Message Transfer System', 'User Mobile Telecommunication Standard'],
          correct: 0
        },
        {
          question: 'Which transport protocol is typically used for streaming media?',
          options: ['TCP', 'UDP', 'HTTP', 'FTP'],
          correct: 1
        },
        {
          question: 'What is the maximum number of devices a Bluetooth piconet supports?',
          options: ['7', '8', '16', '32'],
          correct: 0
        },
        {
          question: 'What is the primary function of a BSC in GSM?',
          options: ['Manage radio resources for multiple BTSs', 'Connect to the PSTN', 'Store subscriber data', 'Authenticate users'],
          correct: 0
        },
        {
          question: 'Which protocol is used for VoIP signaling?',
          options: ['SIP', 'HTTP', 'FTP', 'SMTP'],
          correct: 0
        },
        {
          question: 'What does QoS stand for in networking?',
          options: ['Quality of Service', 'Quantity of Signal', 'Query of System', 'Quick Operating Standard'],
          correct: 0
        },
        {
          question: 'Which technology allows a single AP to serve multiple VLANs?',
          options: ['SSID', 'MIMO', 'Multiple BSSID', 'Beamforming'],
          correct: 2
        },
        {
          question: 'What is the primary advantage of IPv6 over IPv4 in mobile networks?',
          options: ['Larger address space for billions of devices', 'Faster routing', 'Better encryption', 'Smaller packet size'],
          correct: 0
        }
      ]
    }
  ]
};
