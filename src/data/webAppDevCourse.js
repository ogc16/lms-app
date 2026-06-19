export const webAppDevCourse = {
  id: 'web_app_dev',
  title: 'Web Application Development 1',
  subtitle: 'ICS 2203 — Web App Development',
  icon: '🌐',
  color: '#0f3460',
  bgColor: '#EEF2FF',
  description: 'Web Application Development covering Internet fundamentals, HTML, XHTML, XML, CSS, and JavaScript.',
  chapters: [
    {
      id: 'web_intro',
      title: 'The Internet and Networks',
      lessons: [
        {
          id: 'web_intro_lesson',
          title: 'The Internet and Networks',
          content: 'Key Takeaways:\n• The Internet is a global interconnection of computer networks — a heterogeneous "network of networks"\n• Networks facilitate communication and resource sharing\n• Types: LAN, MAN, WAN, plus PAN, CAN, VPN, GAN\n• Topologies: bus, star, ring, mesh — different trade-offs\n• The OSI reference model (7 layers) is fundamental\n• The Internet evolved from a small room to global infrastructure\n\nDefinitions:\nThe Internet: A network of computers. A heterogeneous network comprising WANs, cellular networks, fiber, and satellite.\nNetwork: Groups of computers interconnected via physical or non-physical medium to communicate and share resources.\n\nBenefits:\n1. Fast seamless communication\n2. Global resource sharing\n3. Cheaper than telephony/fax\n4. Global reach',
          codeExamples: []
        }
      ],
      quiz: [
        { question: 'What is the most common definition of the Internet?', options: ['A single large computer', 'A network of computers', 'A type of software package', 'A telephone switching system'], correct: 1 },
        { question: 'Which network type covers the largest geographical area?', options: ['LAN', 'MAN', 'WAN', 'PAN'], correct: 2 },
        { question: 'Which of these is a primary motivation for computer networks?', options: ['Sharing resources', 'Facilitating communication', 'Both A and B', 'Increasing computer cost'], correct: 2 },
        { question: 'What does LAN stand for?', options: ['Large Area Network', 'Local Area Network', 'Long Access Node', 'Logical Array Network'], correct: 1 },
        { question: 'Which network topology connects all devices to a single central cable?', options: ['Star', 'Ring', 'Bus', 'Mesh'], correct: 2 },
        { question: 'Which OSI layer is responsible for routing and addressing?', options: ['Physical', 'Data Link', 'Network', 'Transport'], correct: 2 },
        { question: 'What type of network is the Internet described as?', options: ['Homogeneous', 'Heterogeneous', 'Centralized', 'Standalone'], correct: 1 },
        { question: 'Which of the following is a benefit of the Internet?', options: ['Slow communication', 'Limited to local resources', 'Global reach spanning vast geographical space', 'Expensive compared to telephony'], correct: 2 },
        { question: 'What is a network node that is NOT considered a host?', options: ['A web server', 'A network printer', 'A modem', 'A general-purpose computer'], correct: 2 },
        { question: 'The Internet initially started as a network of computers in:', options: ['A global data center', 'A small room', 'A telephone exchange', 'A satellite station'], correct: 1 }
      ]
    },
    {
      id: 'web_architecture',
      title: 'Internet Architecture',
      lessons: [
        {
          id: 'web_architecture_lesson',
          title: 'Internet Architecture',
          content: 'Key Takeaways:\n• Every device has a unique IP address (0–255 per octet)\n• TCP/IP protocol stack: Application, Transport, Internet, Hardware\n• TCP = reliable delivery via port numbers; IP = addressing/routing\n• ping uses ICMP to test connectivity\n• The Internet is a packet-switching network\n\nTCP/IP Stack:\nApplication — HTTP, FTP, SMTP\nTransport (TCP) — Port numbers\nInternet (IP) — IP addressing\nHardware — Network signals\n\nIP Allocation:\nISP assigns temporary IP. DHCP provides dynamic assignment on LANs.',
          codeExamples: []
        }
      ],
      quiz: [
        { question: 'What is the valid range for each octet in an IP address (xxx.xxx.xxx.xxx)?', options: ['0 to 99', '0 to 255', '1 to 256', '0 to 512'], correct: 1 },
        { question: 'What does TCP stand for?', options: ['Transmission Control Protocol', 'Transfer Control Protocol', 'Terminal Communication Protocol', 'Transport Control Program'], correct: 0 },
        { question: 'What protocol does the ping utility use?', options: ['TCP', 'UDP', 'ICMP', 'HTTP'], correct: 2 },
        { question: 'Which layer of the TCP/IP stack is responsible for directing packets to a specific application?', options: ['Application', 'Transport', 'Internet', 'Hardware'], correct: 1 },
        { question: 'What does DHCP stand for?', options: ['Dynamic Host Configuration Protocol', 'Digital Host Control Protocol', 'Distributed Host Connection Protocol', 'Dynamic Hardware Configuration Process'], correct: 0 },
        { question: 'Which type of IP address is typically assigned by an ISP for a dial-up session?', options: ['Permanent', 'Temporary', 'Static', 'Reserved'], correct: 1 },
        { question: 'The Internet is a packet-switching network. What does this mean?', options: ['Messages are sent as one continuous stream', 'Messages are broken into smaller chunks for transmission', 'Packets never take different routes', 'Only text can be transmitted'], correct: 1 },
        { question: 'What information does the IP layer add to a packet?', options: ['Port number', 'IP address of destination', 'Application data', 'Encryption key'], correct: 1 },
        { question: 'What command can you use in Windows to resolve a domain name to an IP address?', options: ['tracert', 'ping', 'nslookup', 'ipconfig'], correct: 1 },
        { question: 'At which layer does the hardware (e.g., Ethernet card) operate in the TCP/IP stack?', options: ['Application', 'Transport', 'Internet', 'Hardware/Network Interface'], correct: 3 }
      ]
    },
    {
      id: 'web_distributed',
      title: 'Distributed Web Technologies',
      lessons: [
        {
          id: 'web_distributed_lesson',
          title: 'Distributed Web Technologies',
          content: 'Key Takeaways:\n• Distributed system: Autonomous elements interconnected by a network\n• Cloud computing is a modern evolution\n• What gets distributed: processing logic, functions, data, control, OS\n• Clients request; servers provide\n\nDistributed vs Centralized:\nDistributed — Multiple autonomous components, multiple points of control, concurrent processes\nCentralized — One component, single point of control, single process',
          codeExamples: []
        }
      ],
      quiz: [
        { question: 'What is a distributed system?', options: ['A single computer running multiple programs', 'Autonomous processing elements interconnected by a network', 'A standalone database system', 'A network of printers'], correct: 1 },
        { question: 'Which of the following is NOT typically distributed in a distributed system?', options: ['Processing logic', 'Data', 'A single keyboard', 'Control'], correct: 2 },
        { question: 'What modern technology is an advancement of distributed systems with a bias toward the Internet?', options: ['Cloud computing', 'Mainframe computing', 'Standalone PCs', 'Batch processing'], correct: 0 },
        { question: 'In the client-server model, who initiates contact?', options: ['The server', 'The client', 'Both simultaneously', 'Neither'], correct: 1 },
        { question: 'Which characteristic describes a server?', options: ['Runs on user\'s local computer', 'Does not require special hardware', 'Waits for service requests from clients', 'Is invoked directly by the user'], correct: 2 },
        { question: 'A distributed system has how many points of control?', options: ['Zero', 'One', 'Multiple', 'None of the above'], correct: 2 },
        { question: 'What is distribution middleware?', options: ['A type of database', 'Software that enables coordination and resource sharing', 'A hardware router', 'A web browser'], correct: 1 },
        { question: 'In the client-server paradigm, what does the server do after receiving a request?', options: ['Ignores the request', 'Disconnects immediately', 'Performs the service and returns results', 'Deletes the request'], correct: 2 },
        { question: 'Which of the following is a synonym for distributed systems?', options: ['Centralized processing', 'Distributed data processing', 'Single-user system', 'Standalone computing'], correct: 1 },
        { question: 'What type of hardware does a client typically require?', options: ['Powerful server-grade hardware', 'No special hardware', 'A mainframe computer', 'A dedicated data center'], correct: 1 }
      ]
    },
    {
      id: 'web_dns',
      title: 'The DNS',
      lessons: [
        {
          id: 'web_dns_lesson',
          title: 'The DNS',
          content: 'Key Takeaways:\n• DNS translates domain names → IP addresses\n• Hierarchical distributed database — no single server stores all names\n• Domain names must be registered\n• Types: A, CNAME, MX, NS\n\nDNS Resolution:\n1. Query recursive resolver\n2. Query root → TLD → authoritative server\n3. Return IP address',
          codeExamples: []
        }
      ],
      quiz: [
        { question: 'What does DNS stand for?', options: ['Domain Network System', 'Domain Name System', 'Data Network Service', 'Digital Name Server'], correct: 1 },
        { question: 'What type of database is the DNS?', options: ['Centralized', 'Relational', 'Hierarchical distributed', 'Flat file'], correct: 2 },
        { question: 'What must happen for a domain name to be used on the Internet?', options: ['It must be programmed in HTML', 'It must be registered', 'It must have a CSS file', 'It must be pinged'], correct: 1 },
        { question: 'What DNS record type maps a domain name to an IPv4 address?', options: ['MX', 'CNAME', 'A', 'NS'], correct: 2 },
        { question: 'What is DNS compared to in the course material?', options: ['A telephone directory', 'A library catalog', 'A road map', 'A dictionary'], correct: 0 },
        { question: 'When was DNS created?', options: ['In the 1970s', 'In the early days of the Internet', 'In 2000', 'After HTML was created'], correct: 1 },
        { question: 'What is the first step in DNS resolution when a user types a URL?', options: ['Query root server', 'Query the authoritative server', 'Browser queries a recursive resolver', 'Query TLD server'], correct: 2 },
        { question: 'Which DNS record type identifies the mail server for a domain?', options: ['A', 'CNAME', 'MX', 'NS'], correct: 2 },
        { question: 'What problem led to the creation of DNS?', options: ['Slow Internet speeds', 'The HOSTS file became too large to manage', 'Lack of web browsers', 'Too many IP addresses'], correct: 1 },
        { question: 'What does a DNS resolver do during a lookup?', options: ['Stores the website content', 'Matches both name and type of query', 'Hosts the website', 'Encrypts the connection'], correct: 1 }
      ]
    },
    {
      id: 'web_hosting',
      title: 'Web Hosting',
      lessons: [
        {
          id: 'web_hosting_lesson',
          title: 'Web Hosting',
          content: 'Key Takeaways:\n• A host stores shared information; not all nodes are hosts\n• Web servers deliver pages via HTTP\n• Options: shared, dedicated, VPS, cloud, self-hosting\n\nHow the WWW Works:\n1. Pages stored on web servers\n2. Clients use browsers to request via HTTP\n3. Server returns the page',
          codeExamples: []
        }
      ],
      quiz: [
        { question: 'What protocol do web servers use to deliver web pages?', options: ['FTP', 'HTTP', 'SMTP', 'SNMP'], correct: 1 },
        { question: 'Which of the following is NOT considered a host?', options: ['A web server', 'A network switch', 'A network printer', 'A general-purpose computer'], correct: 1 },
        { question: 'Web hosting normally includes which additional service?', options: ['Email services', 'Domain name registration', 'Both A and B', 'Computer manufacturing'], correct: 2 },
        { question: 'What is a web server?', options: ['A hardware device that stores backups', 'A special application that delivers web pages', 'A type of database', 'A programming language'], correct: 1 },
        { question: 'What does ISP stand for?', options: ['Internet Service Provider', 'Internal System Protocol', 'Integrated Server Platform', 'Internet Security Processor'], correct: 0 },
        { question: 'Which hosting option involves multiple websites sharing one physical server?', options: ['Dedicated hosting', 'Shared hosting', 'Self-hosting', 'Cloud hosting'], correct: 1 },
        { question: 'What is a host in computer networking?', options: ['A device that only receives data', 'A computer that stores shared information', 'A network cable', 'A software application'], correct: 1 },
        { question: 'What program do web clients use to view web pages?', options: ['Web server', 'Web browser', 'FTP client', 'Email client'], correct: 1 },
        { question: 'What is a key consideration when choosing a web host?', options: ['The color of the website', 'Cost and bandwidth', 'The programming language used', 'The font style'], correct: 1 },
        { question: 'How does a browser fetch a web page from a server?', options: ['By sending an FTP request', 'By sending an HTTP request', 'By pinging the server', 'By DNS lookup only'], correct: 1 }
      ]
    },
    {
      id: 'web_html',
      title: 'Introduction to HTML',
      lessons: [
        {
          id: 'web_html_lesson',
          title: 'Introduction to HTML',
          content: 'Key Takeaways:\n• HTML = HyperText Markup Language\n• Basic structure: <html> > <head> + <body>\n• Tags: headings, paragraphs, links, images, lists\n• Current: HTML5\n\nBasic HTML Template:\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    <h1>Heading</h1>\n    <p>Paragraph</p>\n  </body>\n</html>',
          codeExamples: [
            {
              title: 'Basic HTML Document Structure',
              code: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    <h1>Heading</h1>\n    <p>Paragraph</p>\n  </body>\n</html>'
            }
          ]
        }
      ],
      quiz: [
        { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'HighText Machine Language', 'HyperTool Markup Language', 'Home Tool Markup Language'], correct: 0 },
        { question: 'Which tag encloses the main content area of an HTML document?', options: ['<head>', '<body>', '<title>', '<footer>'], correct: 1 },
        { question: 'Which HTML tag is used to create a hyperlink?', options: ['<link>', '<a>', '<href>', '<nav>'], correct: 1 },
        { question: 'Which HTML tag is used to display an image?', options: ['<img>', '<image>', '<pic>', '<src>'], correct: 0 },
        { question: 'What is the latest version of HTML mentioned in the course?', options: ['HTML 4', 'HTML 5', 'XHTML', 'HTML 3.2'], correct: 1 },
        { question: 'Which tag creates an unordered list?', options: ['<ol>', '<ul>', '<li>', '<list>'], correct: 1 },
        { question: 'In HTML, what is an attribute?', options: ['The main content of the page', 'Additional information about an element', 'A type of web browser', 'A server configuration'], correct: 1 },
        { question: 'Which of the following is NOT an HTML heading tag?', options: ['<h1>', '<h3>', '<h5>', '<h7>'], correct: 3 },
        { question: 'What is the purpose of the <head> tag in HTML?', options: ['To display the page content', 'To contain metadata and title', 'To create a header visible on the page', 'To add styling only'], correct: 1 },
        { question: 'What type of tag is <br> in HTML called?', options: ['Container tag', 'Self-closing tag', 'Opening tag only', 'Block tag'], correct: 1 }
      ]
    },
    {
      id: 'web_xhtml',
      title: 'XHTML',
      lessons: [
        {
          id: 'web_xhtml_lesson',
          title: 'XHTML',
          content: 'Key Takeaways:\n• Stricter HTML — lowercase, nested, closed tags\n• All tags must be closed (<br />)\n• Attribute values must be quoted\n• Created for browser compatibility\n\nRules: Lowercase tags, proper nesting (<p><b>text</b></p>), all tags closed, quoted attributes.',
          codeExamples: []
        }
      ],
      quiz: [
        { question: 'Which is a requirement in XHTML that was optional in older HTML?', options: ['Using uppercase tag names', 'Closing all tags', 'Leaving attributes unquoted', 'Skipping the doctype'], correct: 1 },
        { question: 'In XHTML, tags must always be written in which case?', options: ['UPPERCASE', 'lowercase', 'CamelCase', 'Any case is acceptable'], correct: 1 },
        { question: 'Why was XHTML created?', options: ['To make browsers run slower', 'To reduce browser incompatibilities and work on different devices', 'To add more font styling options', 'To replace JavaScript'], correct: 1 },
        { question: 'Which of the following is correct XHTML for a line break?', options: ['<BR>', '<br>', '<br />', '<Br>'], correct: 2 },
        { question: 'Which of these shows proper XHTML nesting?', options: ['<p><b>text</p></b>', '<p><b>text</b></p>', '<b><p>text</b></p>', '<p><b>text</p></b>'], correct: 1 },
        { question: 'In XHTML, how should attribute values be formatted?', options: ['Without quotes', 'In single or double quotes', 'In uppercase', 'With a preceding backslash'], correct: 1 },
        { question: 'Which of these is NOT a standalone tag that requires special handling in XHTML?', options: ['<br>', '<img>', '<hr>', '<p>'], correct: 3 },
        { question: 'What tool mentioned in the course can help migrate to XHTML?', options: ['Visual Studio Code', 'Dreamweaver', 'Notepad', 'Photoshop'], correct: 1 },
        { question: 'What happens if you use <br/> without the space before / in old browsers?', options: ['It works fine', 'It may break in old browsers', 'It throws an error', 'It converts to uppercase'], correct: 1 },
        { question: 'Which XHTML rule helps ensure backward compatibility with past browsers?', options: ['Using uppercase tags', 'Adding a space before /> in self-closing tags', 'Omitting quotes around attributes', 'Using unclosed tags'], correct: 1 }
      ]
    },
    {
      id: 'web_xml',
      title: 'XML',
      lessons: [
        {
          id: 'web_xml_lesson',
          title: 'XML',
          content: 'Key Takeaways:\n• Transports and stores data (not for display)\n• Tags are not predefined — you define them\n• Self-descriptive tree structure\n• Well-formed = follows syntax; Valid = conforms to DTD\n\nXML Example:\n<?xml version="1.0"?>\n<note>\n  <to>Tove</to>\n  <from>Jani</from>\n</note>',
          codeExamples: [
            {
              title: 'Simple XML Document',
              code: '<?xml version="1.0"?>\n<note>\n  <to>Tove</to>\n  <from>Jani</from>\n</note>'
            }
          ]
        }
      ],
      quiz: [
        { question: 'What is the primary purpose of XML?', options: ['To display web pages', 'To apply styling to web pages', 'To transport and store data', 'To create animations'], correct: 2 },
        { question: 'Which statement about XML tags is true?', options: ['They are predefined like HTML tags', 'You must define your own custom tags', 'They must always be uppercase', 'They cannot be nested'], correct: 1 },
        { question: 'Which language was NOT created using XML?', options: ['XHTML', 'WSDL', 'RSS', 'JavaScript'], correct: 3 },
        { question: 'What is a well-formed XML document?', options: ['One that follows XML syntax rules', 'One that has a DTD', 'One that displays correctly', 'One that is encrypted'], correct: 0 },
        { question: 'What does the XML declaration look like?', options: ['<!DOCTYPE html>', '<?xml version="1.0"?>', '<xml></xml>', '<!xml>'], correct: 1 },
        { question: 'What data model does XML use?', options: ['Relational', 'Flat file', 'Semi-structured (tree structure)', 'Object-oriented'], correct: 2 },
        { question: 'Which of the following is a benefit of XML?', options: ['Tied to a specific platform', 'Complex syntax hard to parse', 'High interoperability with other applications', 'Requires a compiler'], correct: 2 },
        { question: 'In the semi-structured data model, where is the actual data stored?', options: ['In the root node', 'At leaf nodes', 'In attribute names', 'In the declaration'], correct: 1 },
        { question: 'What is a valid XML document?', options: ['Any XML file', 'Well-formed XML that conforms to a DTD', 'XML with predefined tags', 'XML that displays in a browser'], correct: 1 },
        { question: 'Why is XML ideal for web data sharing?', options: ['It is platform-dependent', 'It uses a fixed tag set', 'It is an open standard with no ties to any platform', 'It requires specific hardware'], correct: 2 }
      ]
    },
    {
      id: 'web_css',
      title: 'Introduction to CSS',
      lessons: [
        {
          id: 'web_css_lesson',
          title: 'Introduction to CSS',
          content: 'Key Takeaways:\n• CSS controls presentation and layout\n• Methods: inline, internal (<style>), external (.css)\n• Selectors: element, class (.name), id (#name)\n• Priority: inline > internal > external\n\nCSS Syntax Example:\nh1 { text-align: center; color: blue; }',
          codeExamples: [
            {
              title: 'CSS Rule Syntax',
              code: 'h1 { text-align: center; color: blue; }'
            }
          ]
        }
      ],
      quiz: [
        { question: 'What does CSS stand for?', options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System', 'Colorful Style Sheets'], correct: 1 },
        { question: 'Which CSS selector targets elements by their id attribute?', options: ['.myId', '#myId', 'myId', '*myId'], correct: 1 },
        { question: 'Which method of applying CSS has the highest priority?', options: ['External stylesheet', 'Internal (<style> tag)', 'Inline (style attribute on element)', 'Browser default styles'], correct: 2 },
        { question: 'What problem led to the creation of CSS?', options: ['Browsers could not display images', 'Web authors spent too much time formatting pages with font tags', 'HTML could not create tables', 'JavaScript was too slow'], correct: 1 },
        { question: 'Which CSS property changes the text color?', options: ['font-color', 'text-color', 'color', 'foreground'], correct: 2 },
        { question: 'What does the "cascading" in Cascading Style Sheets refer to?', options: ['The waterfall effect of text', 'The order of priority when multiple styles apply', 'The way fonts flow', 'The animation capability'], correct: 1 },
        { question: 'Which of these is a valid CSS class selector?', options: ['.highlight', '#highlight', 'highlight', '*highlight'], correct: 0 },
        { question: 'How do you link an external CSS file to an HTML document?', options: ['<style src="style.css">', '<link rel="stylesheet" href="style.css">', '<css>style.css</css>', '<script src="style.css">'], correct: 1 },
        { question: 'Which of the following is NOT a CSS property?', options: ['margin', 'padding', 'border', 'paragraph'], correct: 3 },
        { question: 'What is an embedded (internal) style sheet?', options: ['CSS defined in a separate .css file', 'CSS defined in the style attribute of an element', 'CSS defined in the <style> tag in the page head', 'CSS defined by the browser'], correct: 2 }
      ]
    },
    {
      id: 'web_javascript',
      title: 'JavaScript',
      lessons: [
        {
          id: 'web_javascript_lesson',
          title: 'JavaScript',
          content: 'Key Takeaways:\n• Client-side scripting language\n• Object-Based (not fully OOP like Java)\n• Interpreted — no compiler needed\n• Uses: validation, DOM, events, cookies\n\nJavaScript Example:\n<script>\n  var txt = "Welcome!";\n  document.write(txt.toUpperCase());\n</script>',
          codeExamples: [
            {
              title: 'JavaScript in HTML',
              code: '<script>\n  var txt = "Welcome!";\n  document.write(txt.toUpperCase());\n</script>'
            }
          ]
        }
      ],
      quiz: [
        { question: 'What type of language is JavaScript described as?', options: ['Fully Object-Oriented like Java', 'Object-Based', 'A compiled language', 'A markup language'], correct: 1 },
        { question: 'How can JavaScript be added to an HTML page?', options: ['Embedded in <script> tags only', 'Linked as an external .js file only', 'Both embedded in <script> and as an external .js file', 'Only through a browser plugin'], correct: 2 },
        { question: 'Which JavaScript method writes content directly to a web page?', options: ['document.write()', 'console.log()', 'window.alert()', 'print()'], correct: 0 },
        { question: 'Is JavaScript a compiled or interpreted language?', options: ['Compiled', 'Interpreted', 'Both', 'Neither'], correct: 1 },
        { question: 'What is a common use of JavaScript mentioned in the course?', options: ['Server-side database management', 'Form data validation before submission', 'Replacing HTML', 'Compiling programs'], correct: 1 },
        { question: 'Which object\'s length property is used in the JavaScript example in the course?', options: ['Date', 'String', 'Window', 'Document'], correct: 1 },
        { question: 'What method converts a string to uppercase in JavaScript?', options: ['toUpperCase()', 'toUpper()', 'upperCase()', 'capitalize()'], correct: 0 },
        { question: 'What keyword is used to declare a variable in JavaScript in the course example?', options: ['let', 'const', 'var', 'int'], correct: 2 },
        { question: 'Which of these is a built-in JavaScript object mentioned in the course?', options: ['File', 'Date', 'Database', 'Server'], correct: 1 },
        { question: 'What does JavaScript use to react to events on a web page?', options: ['Only loops', 'Event handlers', 'CSS classes', 'HTML attributes only'], correct: 1 }
      ]
    }
  ]
};
