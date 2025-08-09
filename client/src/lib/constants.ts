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
    title: "Enterprise AI: Moving from Proof of Concept to Production Scale",
    category: "AI & Analytics",
    description: "Most enterprises struggle to scale AI initiatives beyond pilot projects. Our analysis of 200+ AI implementations reveals the key success factors for production deployment.",
    author: { name: "Sarah Johnson", role: "CTO", initials: "SJ" },
    readTime: "5 min read",
    publishDate: "Dec 15, 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
  },
  {
    id: "zero-trust-implementation",
    title: "Zero Trust Architecture: Implementation Guide for Large Enterprises",
    category: "Cloud Security", 
    description: "A comprehensive framework for implementing Zero Trust security across complex enterprise environments, including hybrid cloud considerations and compliance requirements.",
    author: { name: "Michael Rodriguez", role: "CISO", initials: "MR" },
    readTime: "8 min read",
    publishDate: "Dec 12, 2023",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
  },
  {
    id: "digital-transformation-roi",
    title: "The ROI of Digital Transformation: Measuring Success Beyond Cost Savings",
    category: "Strategy",
    description: "While cost reduction is important, the real value of digital transformation lies in revenue growth, customer experience improvements, and competitive advantage creation.",
    author: { name: "Amanda Chen", role: "Strategy Director", initials: "AC" },
    readTime: "6 min read", 
    publishDate: "Dec 10, 2023",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
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