export const COMPANY_INFO = {
  name: "QvalFocus",
  tagline: "Premier Professional Services",
  description: "As a premier professional services organization, we are defined by an unwavering commitment to excellence, offering unparalleled precision in every partnership.",
  website: "https://qvalfocus.com",
  email: "info@qvalfocus.com",
  phone: "+1 (609) 701-9988"
}

export const SERVICES = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Strategic roadmaps, process optimization, and technology modernization to accelerate your digital journey.",
    features: ["Strategy & Roadmapping", "Process Optimization", "Change Management"],
    metric: "40% efficiency gain"
  },
  {
    id: "cloud-engineering", 
    title: "Cloud & Platform Engineering",
    description: "Enterprise-grade cloud architecture, migration, and platform engineering for scalable, secure operations.",
    features: ["Cloud Migration", "DevOps & Automation", "Cost Optimization"],
    metric: "35% cost reduction"
  },
  {
    id: "data-analytics",
    title: "Data, Analytics & AI", 
    description: "Transform your data into competitive advantage with modern analytics, ML pipelines, and AI solutions.",
    features: ["Data Platform Engineering", "ML/AI Implementation", "Advanced Analytics"],
    metric: "60% faster insights"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Risk",
    description: "Comprehensive security frameworks, risk assessment, and compliance solutions to protect your enterprise.",
    features: ["Security Architecture", "Compliance Management", "Threat Detection"],
    metric: "99.9% threat prevention"
  },
  {
    id: "product-engineering",
    title: "Product Engineering",
    description: "End-to-end product development services, from ideation and design to engineering and launch.",
    features: ["UI/UX Design", "Agile Development", "Quality Assurance"],
    metric: "50% faster time-to-market"
  },
  {
    id: "managed-services",
    title: "Managed Services",
    description: "Proactive management of your IT infrastructure and applications to ensure reliability and performance.",
    features: ["24/7 Monitoring", "Incident Management", "Performance Tuning"],
    metric: "99.9% uptime"
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    description: "Comprehensive testing and QA services to ensure your software meets the highest quality standards.",
    features: ["Manual & Automated Testing", "Performance Testing", "Security Testing"],
    metric: "80% defect reduction"
  },
  {
    id: "validation",
    title: "Validation",
    description: "Specialized validation services for regulated industries, ensuring compliance with standards like GxP.",
    features: ["CSV (Computer System Validation)", "Process Validation", "Regulatory Compliance"],
    metric: "100% audit readiness"
  }
]

export const INDUSTRIES = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant solutions, EHR integration, and clinical data analytics for healthcare organizations.",
    features: ["HIPAA & FDA compliance", "EHR/EMR modernization", "Clinical trial platforms", "AI-powered diagnostics"],
    clientCount: "30+ Healthcare Systems"
  },
  {
    id: "financial-services",
    title: "Financial Services",
    description: "Regulatory compliance, risk management, and digital banking transformation for financial institutions.",
    features: ["SOX, PCI-DSS, Basel III compliance", "Core banking modernization", "Fraud detection systems", "Open banking APIs"],
    clientCount: "50+ Financial Clients"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    description: "Industry 4.0 transformation, IoT implementation, and supply chain optimization for manufacturers.",
    features: ["Smart factory solutions", "Predictive maintenance", "Supply chain optimization", "Quality management systems"],
    clientCount: "40+ Manufacturing Plants"
  },
]

export const CASE_STUDIES = [
  {
    id: "staffing-sdet-automation",
    slug: "staffing-sdet-automation-engineers",
    title: "Scaling QA Excellence with Elite Automation Engineers",
    industry: "Staffing Success",
    description: "A leading FinTech firm accelerated their testing cycles by integrating a team of highly skilled Automation Engineers and SDETs from QvalFocus.",
    image: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    metrics: [
      { label: "Faster Regression", value: "80%" },
      { label: "Test Coverage", value: "95%" }
    ],
    content: "<p>A rapidly growing FinTech firm needed to scale its QA capabilities without compromising quality. QvalFocus delivered a team of highly skilled Automation Engineers and SDETs who integrated seamlessly, automated the regression suite, and accelerated their testing cycles, allowing for faster and more reliable product releases.</p>"
  },
  {
    id: "staffing-data-analytics",
    slug: "staffing-data-analytics-experts",
    title: "Unlocking Insights with Expert Data Analytics Talent",
    industry: "Staffing Success",
    description: "A major retail company transformed its decision-making process by leveraging expert Data Analysts and Scientists provided by QvalFocus.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    metrics: [
      { label: "Sales Uplift", value: "30%" },
      { label: "Faster Reporting", value: "50%" }
    ],
    content: "<p>A major retail company struggled to make sense of its vast customer data. QvalFocus provided expert Data Analysts and Scientists who built powerful dashboards and predictive models, transforming their decision-making process and leading to significant gains in customer segmentation and inventory management.</p>"
  },
  {
    id: "staffing-sde",
    slug: "staffing-software-development-engineers",
    title: "Accelerating Development with Top-Tier SDEs",
    industry: "Staffing Success",
    description: "A startup launched their new SaaS platform ahead of schedule by augmenting their team with senior Software Development Engineers from QvalFocus.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    metrics: [
      { label: "Faster Launch", value: "2x" },
      { label: "Cost Savings", value: "40%" }
    ],
    content: "<p>A startup needed to accelerate the development of their flagship SaaS product. QvalFocus sourced a team of senior Software Development Engineers who hit the ground running, integrated with the core team, and were instrumental in the successful, early launch of the platform.</p>"
  },
  {
    id: "staffing-scrum-pm",
    slug: "staffing-scrum-masters-product-managers",
    title: "Driving Agile Maturity with Expert Scrum Masters & PMs",
    industry: "Staffing Success",
    description: "A healthcare tech firm revitalized its agile framework and improved product delivery with experienced Scrum Masters and Product Managers from QvalFocus.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    metrics: [
      { label: "On-time Delivery", value: "90%" },
      { label: "Team Morale", value: "Up 50%" }
    ],
    content: "<p>A healthcare technology company was struggling with its agile processes. QvalFocus provided experienced Scrum Masters and Product Managers who introduced best practices, facilitated better communication, and helped the client's teams become more self-organizing and efficient, leading to higher morale and consistent on-time delivery.</p>"
  },
  {
    id: "staffing-opentext",
    slug: "staffing-opentext-consultants",
    title: "Mastering Content Management with OpenText Experts",
    industry: "Staffing Success",
    description: "A large manufacturing firm optimized its complex OpenText ecosystem by partnering with specialized consultants from QvalFocus.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    metrics: [
      { label: "Workflow Efficiency", value: "50%" },
      { label: "Compliance", value: "100%" }
    ],
    content: "<p>A large manufacturing firm needed to optimize its complex OpenText ecosystem. QvalFocus provided specialized OpenText consultants who upgraded their platform, automated workflows, and improved content governance across the enterprise, resulting in reduced manual effort and better compliance.</p>"
  },
  {
    id: "solution-agile-transformation",
    slug: "solution-agile-transformation",
    title: "A Financial Firm's Successful Agile Transformation",
    industry: "Solution Delivery",
    description: "QvalFocus guided a traditional financial services company through a complete Agile transformation, increasing adaptability and accelerating product delivery.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    metrics: [
      { label: "Faster Releases", value: "3x" },
      { label: "Collaboration", value: "Enhanced" }
    ],
    content: "<p>QvalFocus guided a traditional financial services company through a complete Agile transformation. We implemented Scrum and Kanban frameworks that broke down silos, increased adaptability, and accelerated product delivery, fostering a culture of continuous improvement.</p>"
  },
  {
    id: "solution-qa-automation",
    slug: "solution-qa-and-automation",
    title: "Building a World-Class QA & Automation Practice",
    industry: "Solution Delivery",
    description: "An e-commerce leader partnered with QvalFocus to build a comprehensive QA solution, resulting in higher quality releases and fewer production bugs.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    metrics: [
      { label: "Bug Reduction", value: "95%" },
      { label: "Automation", value: "Full Suite" }
    ],
    content: "<p>An e-commerce giant partnered with QvalFocus to build a comprehensive QA and test automation solution from the ground up. Our team designed and implemented a full testing strategy, resulting in higher quality releases and a dramatic reduction in production bugs.</p>"
  },
  {
    id: "solution-support-maintenance",
    slug: "solution-support-and-maintenance",
    title: "Ensuring 24/7 Reliability with Proactive Support",
    industry: "Solution Delivery",
    description: "QvalFocus provides a dedicated 24/7 support and maintenance team for a mission-critical logistics platform, ensuring maximum uptime and rapid incident response.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Faster Resolution", value: "80%" }
    ],
    content: "<p>QvalFocus provides a dedicated 24/7 support and maintenance team for a mission-critical logistics platform. Our solution ensures maximum uptime, rapid incident response, and continuous performance optimization, giving our client peace of mind and operational stability.</p>"
  }
]

export const INSIGHTS = [
  {
    id: "enterprise-ai-scaling",
    slug: "enterprise-ai-scaling-from-poc-to-production",
    title: "Enterprise AI: Moving from Proof of Concept to Production Scale",
    category: "AI & Analytics",
    description: "Most enterprises struggle to scale AI initiatives beyond pilot projects. Our analysis of 200+ AI implementations reveals the key success factors for production deployment.",
    author: { name: "Sarah Johnson", role: "CTO", initials: "SJ" },
    readTime: "5 min read",
    publishDate: "Dec 15, 2023",
    image: "https://placehold.co/800x400/png",
    content: `
      <p class="lead">Scaling Artificial Intelligence from a promising Proof of Concept (PoC) to a full-scale production system is one of the most significant challenges facing modern enterprises. While many organizations succeed in developing innovative AI models in a lab environment, the path to integrating them into core business processes is fraught with technical, operational, and cultural hurdles.</p>
      <h3>The Valley of Death for AI Projects</h3>
      <p>The gap between a successful PoC and a production-ready AI system is often called the "valley of death." This is where most AI initiatives falter. The reasons are multifaceted, ranging from data pipeline issues and model drift to a lack of MLOps infrastructure and stakeholder buy-in. A PoC typically operates on a clean, static dataset, whereas a production system must handle real-time, messy data, and its performance must be monitored and maintained continuously.</p>
      <h3>Key Pillars for Successful Scaling</h3>
      <p>Based on our work with over 200 enterprise AI implementations, we've identified four key pillars for successfully navigating the transition from PoC to production:</p>
      <ul>
        <li><strong>Robust MLOps Foundation:</strong> Implementing a solid Machine Learning Operations (MLOps) framework is non-negotiable. This includes automated CI/CD pipelines for models, version control for data and models (like DVC and Git), and robust monitoring systems to detect data drift and model degradation.</li>
        <li><strong>Data Governance and Engineering:</strong> Production AI requires a scalable and reliable data infrastructure. This means moving beyond static CSV files to automated data ingestion pipelines, feature stores for sharing and reusing features across models, and strong data governance to ensure quality and compliance.</li>
        <li><strong>Human-in-the-Loop Design:</strong> No AI is perfect. Successful production systems are designed with a "human-in-the-loop" approach, where the AI provides recommendations and insights, but human experts have the final say. This builds trust and provides a crucial feedback mechanism for retraining and improving the model.</li>
        <li><strong>Change Management and Business Integration:</strong> Technology is only half the battle. The most successful AI projects are accompanied by a strong change management program that educates stakeholders, redefines business processes around the new AI capabilities, and clearly communicates the value and limitations of the system.</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Moving AI from concept to reality at scale is a strategic imperative. It requires a holistic approach that combines cutting-edge technology with a deep understanding of business processes and a commitment to organizational change. By focusing on these key pillars, enterprises can bridge the "valley of death" and unlock the transformative potential of AI across their operations.</p>
    `
  },
  {
    id: "zero-trust-implementation",
    slug: "zero-trust-architecture-implementation-guide",
    title: "Zero Trust Architecture: Implementation Guide for Large Enterprises",
    category: "Cloud Security", 
    description: "A comprehensive framework for implementing Zero Trust security across complex enterprise environments, including hybrid cloud considerations and compliance requirements.",
    author: { name: "Michael Rodriguez", role: "CISO", initials: "MR" },
    readTime: "8 min read",
    publishDate: "Dec 12, 2023",
    image: "https://placehold.co/800x400/png",
    content: `
      <p class="lead">In today's distributed and hostile digital landscape, the traditional perimeter-based security model is obsolete. Zero Trust Architecture (ZTA) has emerged as the gold standard for cybersecurity, operating on the principle of "never trust, always verify." This guide provides a practical framework for implementing ZTA in a large enterprise.</p>
      <h3>Core Principles of Zero Trust</h3>
      <p>Zero Trust is not a single product but a strategic approach to security centered on the belief that organizations should not automatically trust anything inside or outside their perimeters. Instead, they must verify anything and everything trying to connect to their systems before granting access. The core principles are:</p>
      <ul>
        <li><strong>Identity as the Perimeter:</strong> Strong identity and access management (IAM) is the foundation. Every user and device must be authenticated and authorized before accessing any resource. Multi-factor authentication (MFA) is mandatory.</li>
        <li><strong>Least Privilege Access:</strong> Users should only be granted the minimum level of access necessary to perform their job functions. This applies to applications, data, and network segments.</li>
        <li><strong>Micro-segmentation:</strong> The network is broken down into small, isolated segments. This prevents lateral movement by attackers; if one segment is compromised, the breach is contained.</li>
        <li><strong>Assume Breach:</strong> Design your security with the assumption that a breach has already occurred or will inevitably happen. This shifts the focus from prevention alone to rapid detection and response.</li>
        <li><strong>Continuous Monitoring and Analytics:</strong> Continuously monitor all network traffic and user behavior for anomalous activity. Use security analytics to detect threats in real-time.</li>
      </ul>
      <h3>Implementation Roadmap</h3>
      <p>Implementing Zero Trust is a journey, not a destination. A phased approach is most effective:</p>
      <ol>
        <li><strong>Phase 1: Visibility and Assessment.</strong> Identify all your assets, users, and data flows. Understand who needs access to what, and why. Deploy monitoring tools to get a baseline of current activity.</li>
        <li><strong>Phase 2: Foundational Controls.</strong> Strengthen your IAM with universal MFA. Begin implementing micro-segmentation for your most critical assets.</li>
        <li><strong>Phase 3: Advanced Controls and Automation.</strong> Implement advanced threat detection and automated response capabilities. Use Security Orchestration, Automation, and Response (SOAR) tools to streamline your security operations.</li>
        <li><strong>Phase 4: Continuous Optimization.</strong> Zero Trust is an iterative process. Continuously review access policies, analyze security data, and adapt your controls to new threats.</li>
      </ol>
      <h3>Conclusion</h3>
      <p>Adopting a Zero Trust model is a fundamental shift in security philosophy, but it is essential for protecting modern enterprises. It reduces the attack surface, limits the impact of breaches, and provides the resilience needed to operate confidently in a world of ever-evolving cyber threats.</p>
    `
  },
  {
    id: "digital-transformation-roi",
    slug: "roi-of-digital-transformation-beyond-cost-savings",
    title: "The ROI of Digital Transformation: Measuring Success Beyond Cost Savings",
    category: "Strategy",
    description: "While cost reduction is important, the real value of digital transformation lies in revenue growth, customer experience improvements, and competitive advantage creation.",
    author: { name: "Amanda Chen", role: "Strategy Director", initials: "AC" },
    readTime: "6 min read", 
    publishDate: "Dec 10, 2023",
    image: "https://placehold.co/800x400/png",
    content: `
      <p class="lead">For many executives, the business case for digital transformation is built on a foundation of cost savings and efficiency gains. While these are critical metrics, a narrow focus on ROI can obscure the true, game-changing value that transformation delivers: sustainable growth, enhanced customer loyalty, and a durable competitive advantage.</p>
      <h3>Moving Beyond Traditional ROI</h3>
      <p>Traditional ROI calculations often fail to capture the full spectrum of benefits from digital initiatives. Metrics like Net Present Value (NPV) and Internal Rate of Return (IRR) are important, but they don't tell the whole story. To truly measure success, leaders must adopt a more holistic view that includes qualitative and strategic outcomes.</p>
      <h3>A Balanced Scorecard for Transformation</h3>
      <p>We recommend a "Balanced Scorecard" approach to measure the impact of digital transformation across four key areas:</p>
      <ul>
        <li><strong>Financial Performance:</strong> This includes traditional metrics like cost reduction and revenue lift, but also new metrics like Customer Lifetime Value (CLV) and revenue from new digital products or services.</li>
        <li><strong>Customer Experience:</strong> Are customers more satisfied? Is it easier for them to do business with you? Key metrics include Net Promoter Score (NPS), Customer Satisfaction (CSAT), and customer churn rate.</li>
        <li><strong>Internal Processes:</strong> How has the transformation improved operational efficiency and agility? Measure metrics like time-to-market for new products, employee productivity, and process automation rates.</li>
        <li><strong>Innovation and Growth:</strong> Is the organization better equipped to innovate and adapt to future challenges? This can be measured by the number of new digital initiatives launched, the percentage of revenue from new business models, and employee skill development in key digital areas.</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Viewing digital transformation solely through the lens of cost-cutting is a recipe for incremental change, not breakthrough performance. By embracing a broader definition of ROI that encompasses customer value, operational agility, and innovation, organizations can make more strategic investment decisions and unlock the full potential of their digital journey.</p>
    `
  }
]

export const CLIENT_LOGOS = [
  "Microsoft", "Amazon", "JPMorgan", "Pfizer", "Boeing", "Tesla"
]

export const OFFICE_LOCATIONS = [
  {
    name: "United States",
    address: ["666 Plainsboro Rd #615", "Plainsboro Township, NJ 08536"],
    phone: "+1 (609) 701-9988"
  },
  {
    name: "India",
    address: ["Plot No 383, Bachpally", "Hyderabad 500090, India"]
  }
]