const topics = [
    { id: 'osint', name: 'OSINT', emoji: '🔍' },
    { id: 'net', name: 'Network', emoji: '🌐' },
    { id: 'lin', name: 'Linux', emoji: '🐧' },
    { id: 'hack', name: 'Hacking', emoji: '💻' },
    { id: 'bug', name: 'Bug Bounty', emoji: '🐞' },
    { id: 'law', name: 'Cyber Law', emoji: '⚖️' },
    { id: 'soc', name: 'Social Eng.', emoji: '🗣️' },
    { id: 'mal', name: 'Malware', emoji: '🦠' },
    { id: 'for', name: 'Forensics', emoji: '🧬' },
    { id: 'fra', name: 'Fraud', emoji: '🚫' },
    { id: 'cloud', name: 'Cloud Sec', emoji: '☁️' },
    { id: 'crypt', name: 'Cryptography', emoji: '🔐' },
    { id: 'wifi', name: 'WiFi Hack', emoji: '📶' },
    { id: 'iot', name: 'IoT Sec', emoji: '🏠' },
    { id: 'web', name: 'Web Server', emoji: '🖥️' },
    { id: 'api', name: 'API Hack', emoji: '🧩' },
    { id: 'inc', name: 'Incident Res.', emoji: '🛡️' },
    { id: 'dark', name: 'Dark Web', emoji: '👺' },
    { id: 'py', name: 'Python', emoji: '🐍' },
    { id: 'rev', name: 'Reverse Eng.', emoji: '⚙️' }
];

const courseData = {
    osint: `
        <h1>🔍 OSINT: Open Source Intelligence</h1>
        <p>OSINT is the foundation of all cyber investigations. It involves collecting and analyzing data from publicly available sources to produce actionable intelligence. From finding a criminal's location to mapping a company's infrastructure, OSINT is the primary weapon. 🔍</p>
        <h3>The Intelligence Cycle</h3>
        <p>Intelligence gathering is a 5-step process: Direction, Collection, Processing, Analysis, and Dissemination. Most beginners fail because they collect data without analyzing it. Analysis is where you connect the dots between a username and a physical address.</p>
        

[Image of the OSINT intelligence cycle]

        <h3>Advanced Geolocation</h3>
        <p>Expert investigators use shadows and landmarks. By looking at a photo's shadow length and angle, you can determine the time of day and the cardinal direction. ☀️ Matching mountain silhouettes or unique buildings in the background with Google Earth allows for pinpoint accuracy.</p>
        
        <h3>Digital Footprinting</h3>
        <p>Every person leaves a digital trail. We use "pivoting" to move from an email to a social media handle, then to a leaked password, and finally to a residential address. 🏠</p>
    `,

    net: `
        <h1>🌐 Networking Fundamentals</h1>
        <p>If you don't understand how data moves, you cannot understand how to intercept or protect it. Networking is the study of protocols, packets, and pathways. 🌐</p>
        <h3>The OSI 7-Layer Model</h3>
        <p>To be a hacker, you must live in the OSI model. Layer 2 (Data Link) is where MAC addresses live, and Layer 3 (Network) is where IP addresses live. Most network attacks like ARP Spoofing happen at Layer 2.</p>
        
        <h3>TCP/IP 3-Way Handshake</h3>
        <p>Before two computers talk, they perform a SYN, SYN-ACK, ACK handshake. 🤝 By sending "malformed" packets during this handshake, we can perform OS fingerprinting to see if a target is running Windows or Linux.</p>
        
        <h3>Packet Inspection</h3>
        <p>Using tools like Wireshark, we capture raw data packets. In unencrypted traffic (HTTP/FTP), we can read passwords directly from the packet headers. 🖥️</p>
        
    `,

    lin: `
        <h1>🐧 Linux Mastery for Hackers</h1>
        <p>Linux is open-source, powerful, and the native home of almost every hacking tool. 🐧 Understanding the Linux kernel and the terminal is mandatory for advanced exploit development.</p>
        <h3>The File System</h3>
        <p>In Linux, everything is a file. The <code>/etc/shadow</code> file contains password hashes, while <code>/proc</code> contains real-time system information. Navigating this structure quickly via CLI is a core skill.</p>
        
        <h3>Permissions and SUID</h3>
        <p>The permission system (Read, Write, Execute) is what keeps a system secure. However, misconfigured SUID bits allow a normal user to run a file as 'Root.' This is the primary method of local privilege escalation.</p>
        <h3>The Boot Process</h3>
        <p>Understanding how a system starts (BIOS -> GRUB -> Kernel -> Init) allows a hacker to create "persistence" by hiding malicious scripts in the startup sequence.</p>
        
    `,

    hack: `
        <h1>💻 Ethical Hacking & Pentesting</h1>
        <p>Ethical hacking is the systematic process of identifying vulnerabilities in a network or application and fixing them before malicious actors exploit them. 💻</p>
        <h3>The Cyber Kill Chain</h3>
        <p>A professional attack follows a strict path: Reconnaissance, Scanning, Gaining Access, Maintaining Access, and Clearing Tracks. If you skip reconnaissance, you will get caught. 👣</p>
        
        <h3>Memory Exploitation</h3>
        <p>Advanced hacking involves Buffer Overflows. By sending too much data to a program, we overflow the "Stack" and overwrite the return address to point to our shellcode. This gives us total control over the CPU.</p>
        
    `,

    bug: `
        <h1>🐞 Bug Bounty Hunting</h1>
        <p>Bug Bounty is the elite practice of finding and reporting security flaws in web applications for financial rewards. 🐞 It requires deep knowledge of how the web works (HTTP, DOM, JS).</p>
        <h3>OWASP Top 10</h3>
        <p>We focus on the most critical bugs: SQL Injection, IDOR, and XSS. An IDOR (Insecure Direct Object Reference) is when you change a URL ID to see another user's private data.</p>
        <h3>Cross-Site Scripting (XSS)</h3>
        <p>XSS allows us to inject JavaScript into a victim's browser. This can steal cookies 🍪, session tokens, or even redirect users to a malicious site. It's one of the highest-paying bugs in the industry.</p>
        
        <h3>The Hunting Mindset</h3>
        <p>Success in bug bounty comes from "Recon." Finding hidden subdomains or forgotten API endpoints is where the real vulnerabilities hide.</p>
    `,

    law: `
        <h1>⚖️ Cyber Law & Ethics</h1>
        <p>In the digital age, code is law. This module covers the legal frameworks that govern the internet and the ethical boundaries of a security researcher. ⚖️</p>
        <h3>International Frameworks</h3>
        <p>Laws like the IT Act 2000 (India), GDPR (Europe), and CFAA (USA) define what constitutes a cybercrime. Ignorance of these laws is not a defense in court.</p>
        
        <h3>Digital Contracts</h3>
        <p>Before performing a penetration test, an "Engagement Letter" must be signed. This is your "Get Out of Jail Free" card. It defines the scope: what you can hack and what is off-limits.</p>
    `,

    soc: `
        <h1>🗣️ Social Engineering</h1>
        <p>Human beings are the weakest link in any security system. Social engineering is the psychological manipulation of people into performing actions or divulging confidential information. 🗣️</p>
        <h3>The Phishing Lifecycle</h3>
        <p>Phishing is not just a fake email. It involves creating a "Pretext" (a fake identity) to build trust. Once trust is established, the "Lure" is sent to harvest credentials.</p>
        
        <h3>The Anatomy of Phishing</h3>
        <p>We analyze the red flags: mismatched URLs, urgent language, and spoofed headers. 📧 Understanding these allows you to build better defense training for companies.</p>
        
    `,

    mal: `
        <h1>🦠 Malware Analysis</h1>
        <p>Malware is software specifically designed to disrupt, damage, or gain unauthorized access to a computer system. 🦠 Analyzing it requires a safe, isolated environment.</p>
        <h3>Sandbox Analysis</h3>
        <p>A "Sandbox" is a virtual cage. We run the malware and monitor its behavior: What files does it delete? What IP addresses does it contact? This is called Dynamic Analysis.</p>
        
        <h3>Ransomware Mechanics</h3>
        <p>Ransomware uses high-grade encryption (AES/RSA) to lock a victim's files. Without the private key, the data is lost forever. 🔐 We study how these encryptions are implemented to find flaws that might allow data recovery.</p>
        
    `,

    for: `
        <h1>🧬 Digital Forensics</h1>
        <p>Digital forensics is the "CSI" of the cyber world. It involves the recovery and investigation of material found in digital devices. 🧬</p>
        <h3>The Art of File Carving</h3>
        <p>When a criminal deletes a file, the computer only removes the "pointer." The actual data remains on the disk until overwritten. File carving is the process of extracting these "orphaned" bits and reconstructing the original files.</p>
        
        <h3>Chain of Custody</h3>
        <p>In forensics, the process is as important as the evidence. We must document every hand that touches the evidence to ensure it is admissible in a court of law.</p>
    `,

    fra: `
        <h1>🚫 Fraud Awareness & Prevention</h1>
        <p>Financial cybercrime is a billion-dollar industry. This module teaches you how to identify and prevent the most common digital scams. 🚫</p>
        <h3>Banking & Carding</h3>
        <p>Criminals use "skimmers" on physical ATMs and "sniffers" on web checkout pages to steal credit card details. We learn to identify these anomalies and block the fraudulent transactions before the money is gone.</p>
        <h3>Identity Theft</h3>
        <p>By combining bits of OSINT data, a criminal can impersonate you to open bank accounts or take loans. Prevention starts with multi-factor authentication (MFA) and monitoring your digital footprint.</p>
    `,

    cloud: `
        <h1>☁️ Cloud Security</h1>
        <p>The cloud is just "someone else's computer." Security in AWS, Azure, and GCP follows a "Shared Responsibility" model. ☁️</p>
        <h3>Infrastructure Security</h3>
        <p>Misconfigured storage buckets (like AWS S3) are the most common source of massive data leaks. We learn how to audit these environments for open permissions.</p>
        
        <h3>IAM Roles</h3>
        <p>Identity and Access Management (IAM) is the new perimeter. If a hacker gains a "Key," they can escalate privileges to become the Cloud Admin.</p>
    `,

    crypt: `
        <h1>🔐 Cryptography</h1>
        <p>Cryptography is the study of secure communication techniques. It is what makes the internet possible. 🔐</p>
        <h3>Symmetric vs Asymmetric</h3>
        <p>In Symmetric encryption, one key locks and unlocks. In Asymmetric (RSA), you have a Public Key to lock and a Private Key to unlock. This is how digital signatures and secure websites work.</p>
        

[Image of public key vs private key encryption]

        <h3>The Power of Hashing</h3>
        <p>A hash is a one-way fingerprint of data. Even changing one letter in a 1000-page book will result in a completely different hash. This ensures data integrity.</p>
    `,

    wifi: `
        <h1>📶 Wireless Hacking</h1>
        <p>WiFi signals travel through walls; they are inherently public. Hacking WiFi involves capturing the data "out of the air." 📶</p>
        <h3>The 4-Way Handshake</h3>
        <p>When you connect to WiFi, your phone and the router perform a "handshake." By kicking you off the network (De-auth attack), we force your phone to re-handshake, allowing us to capture the encrypted password and crack it offline.</p>
        
        <h3>Evil Twin Attacks</h3>
        <p>This involves setting up a fake WiFi network with the same name as a trusted one. When the victim connects, the hacker intercepts all their traffic. 📶</p>
    `,

    iot: `
        <h1>🏠 IoT Security</h1>
        <p>Internet of Things (IoT) includes smart cameras, fridges, and industrial sensors. Most are built with zero security. 🏠</p>
        <h3>Firmware Vulnerabilities</h3>
        <p>IoT devices run on embedded firmware. We learn to "extract" this firmware and search for hardcoded passwords and "backdoors" that manufacturers forgot to remove.</p>
        
        <h3>The Botnet Threat</h3>
        <p>Millions of hacked IoT devices are used to create "Botnets" that can take down entire websites through Distributed Denial of Service (DDoS) attacks.</p>
    `,

    web: `
        <h1>🖥️ Web Server Security</h1>
        <p>Web servers are the face of an organization. Hardening Apache and Nginx is vital for any security professional. 🖥️</p>
        <h3>Configuration Hardening</h3>
        <p>We learn to disable unnecessary modules and use "Security Headers" to prevent browsers from executing malicious scripts.</p>
        <h3>Directory Traversal</h3>
        <p>If a server is poorly configured, a hacker can use <code>../</code> in the URL to "jump" out of the website folder and read sensitive system files like <code>/etc/passwd</code>.</p>
    `,

    api: `
        <h1>🧩 API Hacking</h1>
        <p>APIs (Application Programming Interfaces) are how mobile apps talk to servers. They are the #1 target for modern hackers. 🧩</p>
        <h3>Broken Object Level Authorization</h3>
        <p>If an API allows you to see <code>/api/user/100</code>, a hacker will try <code>/api/user/101</code>. If the server doesn't check if you are authorized to see user 101, it's a massive bug.</p>
        <h3>Mass Assignment</h3>
        <p>By adding extra hidden fields to a request (like <code>role: admin</code>), a hacker can trick the server into upgrading their account permissions.</p>
    `,

    inc: `
        <h1>🛡️ Incident Response</h1>
        <p>When a hack is detected, the Incident Response (IR) team is called. They are the "Emergency Responders" of the cyber world. 🛡️</p>
        <h3>The 6 Phases of IR</h3>
        <p>Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned. The goal is to stop the damage and restore the system as fast as possible.</p>
        <h3>Evidence Preservation</h3>
        <p>While stopping the attack, you must not destroy the evidence. We learn to take "snapshots" of the system memory before shutting it down to capture the hacker's digital footprints.</p>
    `,

    dark: `
        <h1>👺 Dark Web Operations</h1>
        <p>The Dark Web is a subset of the Deep Web that is intentionally hidden. It requires specific tools like TOR to access. 👺</p>
        <h3>Onion Routing</h3>
        <p>TOR (The Onion Router) bounces your traffic through three different volunteer nodes across the world. Each layer of encryption is peeled away like an onion, making the source impossible to track.</p>
        

[Image of the layers of the deep web]

        <h3>Marketplace Security</h3>
        <p>We study how illegal marketplaces operate to understand how stolen data is sold and how law enforcement tracks these transactions.</p>
    `,

    py: `
        <h1>🐍 Python for Hackers</h1>
        <p>Python is the "Swiss Army Knife" of hacking. It's simple to learn but powerful enough to automate complex attacks. 🐍</p>
        <h3>Socket Programming</h3>
        <p>We learn to write Python scripts that talk directly to a server's "Ports." This allows us to build our own port scanners and brute-force tools.</p>
        <h3>Web Scraping</h3>
        <p>Using libraries like BeautifulSoup, we can automate the collection of OSINT data from thousands of websites in minutes. 🐍</p>
    `,

    rev: `
        <h1>⚙️ Reverse Engineering</h1>
        <p>The highest level of hacking. It involves taking a compiled program and turning it back into a readable format to understand its logic. ⚙️</p>
        <h3>Disassembling Code</h3>
        <p>We use tools like Ghidra to turn machine code (1s and 0s) into Assembly. This allows us to find "Zero-Day" bugs in software that hasn't even been released yet.</p>
        <h3>Exploit Development</h3>
        <p>By understanding how a program handles memory, we can craft custom exploits that bypass modern security protections like ALSR and DEP. ⚙️</p>
    `
};
