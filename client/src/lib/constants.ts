export const COMPANY_INFO = {
  name: "StrataTech Consulting",
  tagline: "Enterprise Technology Transformation",
  description: "Global consulting firm specializing in digital transformation, cloud engineering, and data analytics for Fortune 500 companies. 25+ years of proven results.",
  website: "https://stratatech.consulting",
  email: "info@stratatech.consulting",
  phone: "+1 (555) STRATA-1"
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
    title: "Global Bank Reduces Infrastructure Costs by 45%",
    industry: "Financial Services",
    description: "Complete cloud migration and modernization of core banking systems for a Fortune 100 financial institution.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    metrics: [
      { label: "Cost Reduction", value: "45%" },
      { label: "Uptime SLA", value: "99.99%" }
    ]
  },
  {
    id: "hospital-ai-implementation",
    title: "Hospital Network Accelerates Patient Care with AI",
    industry: "Healthcare", 
    description: "AI-powered diagnostic platform and EHR integration across 50+ hospital locations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    metrics: [
      { label: "Faster Diagnosis", value: "60%" },
      { label: "Locations", value: "50+" }
    ]
  },
  {
    id: "smart-factory-transformation",
    title: "Smart Factory Transformation Increases Efficiency 40%",
    industry: "Manufacturing",
    description: "IoT sensors, predictive maintenance, and real-time analytics across global manufacturing operations.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    metrics: [
      { label: "Efficiency Gain", value: "40%" },
      { label: "Less Downtime", value: "85%" }
    ]
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
