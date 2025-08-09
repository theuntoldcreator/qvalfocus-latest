export const COMPANY_INFO = {
  name: "QvalFocus",
  tagline: "Enterprise Technology Transformation",
  description: "Global consulting firm specializing in digital transformation, cloud engineering, and data analytics for Fortune 500 companies. 25+ years of proven results.",
  website: "https://qvalfocus.com",
  email: "info@qvalfocus.com",
  phone: "+1 (555) 123-4567"
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
  }
]

export const INDUSTRIES = [
  {
    id: "financial-services",
    title: "Financial Services",
    description: "Regulatory compliance, risk management, and digital banking transformation for financial institutions.",
    features: ["SOX, PCI-DSS, Basel III compliance", "Core banking modernization", "Fraud detection systems", "Open banking APIs"],
    clientCount: "50+ Financial Clients"
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant solutions, EHR integration, and clinical data analytics for healthcare organizations.",
    features: ["HIPAA & FDA compliance", "EHR/EMR modernization", "Clinical trial platforms", "AI-powered diagnostics"],
    clientCount: "30+ Healthcare Systems"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    description: "Industry 4.0 transformation, IoT implementation, and supply chain optimization for manufacturers.",
    features: ["Smart factory solutions", "Predictive maintenance", "Supply chain optimization", "Quality management systems"],
    clientCount: "40+ Manufacturing Plants"
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    description: "Omnichannel experiences, inventory optimization, and personalization engines for retailers.",
    features: ["Omnichannel platforms", "Inventory management", "Personalization engines", "Mobile commerce solutions"],
    clientCount: "25+ Retail Brands"
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    description: "Smart grid solutions, renewable energy integration, and operational technology modernization.",
    features: ["Smart grid implementation", "Asset performance management", "Renewable energy systems", "SCADA modernization"],
    clientCount: "15+ Utility Companies"
  },
  {
    id: "transportation",
    title: "Transportation & Logistics",
    description: "Route optimization, fleet management, and digital freight platforms for transportation companies.",
    features: ["Fleet management systems", "Route optimization", "Digital freight platforms", "Autonomous vehicle integration"],
    clientCount: "20+ Transportation Firms"
  }
]

export const CASE_STUDIES = [
  {
    id: "global-bank-transformation",
    slug: "global-bank-cloud-transformation",
    title: "Global Bank Reduces Infrastructure Costs by 45%",
    industry: "Financial Services",
    description: "Complete cloud migration and modernization of core banking systems for a Fortune 100 financial institution.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    metrics: [
      { label: "Cost Reduction", value: "45%" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    content: `
      <p class="lead">A Fortune 100 financial institution faced escalating infrastructure costs and operational inefficiencies with its legacy, on-premise data centers. The bank needed to modernize its core banking systems to improve agility, reduce costs, and enhance security and compliance.</p>
      <h3>The Challenge</h3>
      <p>The primary challenges included high capital expenditures on hardware, slow deployment cycles for new services, and the inability to scale resources dynamically to meet fluctuating market demands. The existing infrastructure was also a bottleneck for adopting modern DevOps practices and AI-driven analytics.</p>
      <h3>Our Solution</h3>
      <p>QvalFocus devised a multi-phase cloud transformation strategy focused on migrating the bank's critical applications to a hybrid cloud environment. Our solution included:</p>
      <ul>
        <li><strong>Cloud Readiness Assessment:</strong> A thorough analysis of over 500 applications to determine migration priority and methodology (Re-host, Re-platform, Re-factor).</li>
        <li><strong>Platform Engineering:</strong> We built a secure and compliant landing zone on AWS, incorporating infrastructure-as-code (IaC) with Terraform and a CI/CD pipeline with Jenkins and GitLab.</li>
        <li><strong>Application Modernization:</strong> Key monolithic applications were re-architected into microservices and containerized using Docker and Kubernetes, enabling greater scalability and resilience.</li>
        <li><strong>Cost Optimization:</strong> We implemented a FinOps framework with real-time cost monitoring, reserved instance planning, and automated rightsizing, leading to significant and sustained cost savings.</li>
      </ul>
      <h3>The Results</h3>
      <p>The transformation delivered substantial business value within 24 months. The 45% reduction in infrastructure costs translated to over $200 million in annual savings. The move to a 99.99% uptime SLA drastically reduced service disruptions, and the agile development environment cut the time-to-market for new financial products by 60%.</p>
    `
  },
  {
    id: "hospital-ai-implementation",
    slug: "hospital-network-ai-patient-care",
    title: "Hospital Network Accelerates Patient Care with AI",
    industry: "Healthcare", 
    description: "AI-powered diagnostic platform and EHR integration across 50+ hospital locations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    metrics: [
      { label: "Faster Diagnosis", value: "60%" },
      { label: "Locations", value: "50+" }
    ],
    content: `
      <p class="lead">A major hospital network sought to improve the speed and accuracy of patient diagnoses while streamlining clinical workflows. Their existing Electronic Health Record (EHR) system lacked advanced analytical capabilities, leading to delays and administrative overhead.</p>
      <h3>The Challenge</h3>
      <p>The key challenge was to integrate a sophisticated AI diagnostic tool with their legacy EHR system across more than 50 hospital and clinic locations, all while ensuring strict HIPAA compliance and data security. The solution needed to be intuitive for clinicians and provide measurable improvements in patient outcomes.</p>
      <h3>Our Solution</h3>
      <p>Our team of healthcare technology experts developed and deployed a custom AI-powered diagnostic platform. The project involved:</p>
      <ul>
        <li><strong>HIPAA-Compliant Architecture:</strong> We designed a secure data pipeline on a private cloud to process sensitive patient data, ensuring full compliance with healthcare regulations.</li>
        <li><strong>EHR Integration:</strong> We developed custom APIs to seamlessly integrate the AI platform with the network's existing EHR system, allowing for real-time data exchange.</li>
        <li><strong>Machine Learning Models:</strong> We trained and validated machine learning models on anonymized data to assist radiologists and pathologists in identifying conditions from medical imaging with greater accuracy.</li>
        <li><strong>Clinician Training:</strong> We conducted comprehensive training sessions for over 1,000 medical staff to ensure smooth adoption and effective use of the new platform.</li>
      </ul>
      <h3>The Results</h3>
      <p>The new platform transformed the diagnostic process across the hospital network. It led to a 60% reduction in the average time to diagnosis for critical conditions. The system's integration into existing workflows was seamless, and it now supports over 50 locations, improving the quality of care for thousands of patients daily.</p>
    `
  },
  {
    id: "smart-factory-transformation",
    slug: "smart-factory-iot-efficiency",
    title: "Smart Factory Transformation Increases Efficiency 40%",
    industry: "Manufacturing",
    description: "IoT sensors, predictive maintenance, and real-time analytics across global manufacturing operations.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    metrics: [
      { label: "Efficiency Gain", value: "40%" },
      { label: "Less Downtime", value: "85%" }
    ],
    content: `
      <p class="lead">A global leader in industrial manufacturing was facing increased competition and rising operational costs. Their traditional manufacturing processes lacked real-time visibility, leading to unexpected equipment downtime and inefficiencies in the supply chain.</p>
      <h3>The Challenge</h3>
      <p>The goal was to implement an Industry 4.0 solution across their global operations to create a 'smart factory' ecosystem. This required integrating thousands of IoT devices, collecting massive amounts of data, and turning that data into actionable insights for predictive maintenance and process optimization.</p>
      <h3>Our Solution</h3>
      <p>QvalFocus implemented an end-to-end IoT and data analytics solution. Key components of our approach were:</p>
      <ul>
        <li><strong>IoT Sensor Deployment:</strong> We retrofitted existing machinery with over 10,000 IoT sensors to collect data on temperature, vibration, and performance.</li>
        <li><strong>Data Platform on Azure:</strong> We built a scalable data lake and analytics platform using Azure IoT Hub, Azure Data Factory, and Databricks to process and analyze the incoming data streams.</li>
        <li><strong>Predictive Maintenance Models:</strong> Our data scientists developed machine learning models that could predict equipment failure with 95% accuracy, allowing for proactive maintenance.</li>
        <li><strong>Real-Time Dashboards:</strong> We created interactive Power BI dashboards for plant managers to monitor production lines in real-time, identify bottlenecks, and optimize output.</li>
      </ul>
      <h3>The Results</h3>
      <p>The smart factory initiative yielded remarkable results. Overall equipment effectiveness (OEE) increased by 40%, and unplanned downtime was reduced by an incredible 85%. The real-time analytics provided by the new platform empowered the company to make smarter, data-driven decisions, solidifying their position as an industry innovator.</p>
    `
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
    name: "New York (Headquarters)",
    address: ["350 Fifth Avenue, Suite 4820", "New York, NY 10118"],
    phone: "+1 (555) 123-4567"
  },
  {
    name: "London",
    address: ["25 Canada Square, Canary Wharf", "London E14 5LQ, UK"],  
    phone: "+44 20 7946 0958"
  },
  {
    name: "Singapore",
    address: ["8 Marina Boulevard, #05-02", "Marina Bay Financial Centre", "Singapore 018981"],
    phone: "+65 6538 1234"
  }
]