export const profile = {
  name: "Masood Ahmad",
  title: "Senior Lead Data Engineer",
  subtitle: "Azure & AWS Cloud Data Engineering — Databricks, Snowflake & dbt",
  tagline:
    "I design and lead secure, HIPAA-aligned data platforms for hospitals, health systems, and SaaS companies — from Kafka streaming to governed lakehouses on Databricks and Snowflake.",
  location: "Dallas, TX",
  email: "masooda0001@gmail.com",
  phone: "469-200-0153",
  linkedin: "https://linkedin.com",
  resumeFile: "/Masood_Ahmad_Resume.pdf",
};

export const metrics = [
  { value: "12+", label: "Years of Experience" },
  { value: "100%", label: "Audit Compliance, Zero Findings" },
  { value: "40%", label: "Faster Data Processing" },
  { value: "16", label: "Engineers Led (Onshore & Offshore)" },
];

export const about = {
  paragraphs: [
    "I'm a senior lead data engineer with 12+ years of experience building secure data platforms for hospitals, health systems, and SaaS companies — designing lakehouse and warehouse solutions on Databricks, Snowflake, and Azure, from Kafka streaming to classic SSIS ETL.",
    "I've delivered clinical, claims, IoMT, and revenue-cycle data for care and finance teams, aligned with HIPAA, HITRUST, FDA, and NIST controls. I own CI/CD, Terraform, and Kubernetes delivery end to end, and enjoy leading onshore and offshore teams.",
  ],
};

export type ImpactMetric = {
  label: string;
  value: number;
  display: string;
};

export type RoleEntry = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  extraBullets?: string[];
  project: {
    title: string;
    summary: string;
    stack: string[];
  };
  impact?: ImpactMetric[];
};

export const roles: RoleEntry[] = [
  {
    role: "Senior Lead Data Engineer",
    company: "Baylor Scott & White",
    period: "Oct 2024 — Present",
    bullets: [
      "Architected secure Azure Databricks and Synapse lakehouse platforms processing enterprise EHR, claims, and clinical data — improving processing speed by 40% and automating 50% of manual validation.",
      "Built real-time streaming pipelines with Apache Kafka and Spark Structured Streaming to ingest HL7, FHIR, and claims events for near real-time clinical analytics.",
      "Designed medallion architecture (Bronze/Silver/Gold) on Delta Lake with Unity Catalog for centralized governance, lineage, and fine-grained RBAC across sensitive healthcare data.",
    ],
    extraBullets: [
      "Developed PySpark jobs and Databricks Workflows for large-scale clinical/claims data, tuning cluster sizing, partitioning, and Z-ordering to cut compute cost and runtime.",
      "Built Snowflake data models, Snowpipe ingestion, and Streams & Tasks for curated Gold-layer data, with secure data sharing between Databricks and Snowflake.",
      "Deployed containerized workloads on AKS/Docker with CI/CD in Azure DevOps and GitHub Actions, provisioned via Terraform.",
      "Integrated Azure OpenAI Service and Snowflake Cortex for AI-driven data quality and summarization workflows.",
      "Implemented HIPAA-aligned governance with Key Vault, Purview, and Monitor — 100% audit compliance, zero findings; mentored a team of 3+ engineers.",
    ],
    project: {
      title: "Clinical Lakehouse on Databricks and Snowflake",
      summary:
        "Built a governed Databricks + Snowflake lakehouse for EHR, claims, and IoMT device data using Delta Lake medallion layers, Unity Catalog, and Snowpipe — speeding up processing by 40%, automating 50% of manual validation, and passing audits with zero findings.",
      stack: ["Databricks", "Delta Lake", "Unity Catalog", "Snowflake", "Snowpipe"],
    },
    impact: [
      { label: "Audit Compliance", value: 100, display: "100%" },
      { label: "Manual Validation Automated", value: 50, display: "50%" },
      { label: "Faster Data Processing", value: 40, display: "40%" },
    ],
  },
  {
    role: "Data Consultant",
    company: "Hill Regional Hospital",
    period: "Apr 2020 — Aug 2024",
    bullets: [
      "Led consulting initiatives across healthcare data engineering, IoMT integration, and security governance to modernize medical device data workflows aligned with HIPAA, HITRUST, and FDA standards.",
      "Designed Azure-based ingestion pipelines (ADF, Azure SQL, ADLS) for IoMT and clinical data.",
      "Conducted IoMT risk and security assessments per FDA and ISO 14971 guidelines, executing NIST SP 800-53/800-66 controls.",
    ],
    extraBullets: [
      "Developed data mappings and integration specs for medical devices and clinical apps, enabling analytics on Synapse and Databricks.",
      "Enhanced interoperability via secure API, HL7, and data exchange validations.",
      "Supported post-acquisition data integration and secure cloud migration initiatives.",
    ],
    project: {
      title: "IoMT Data Integration & Security Compliance",
      summary:
        "Designed Azure ingestion pipelines (ADF, Azure SQL, ADLS) and HL7/API integration specs for medical devices and clinical apps, backed by FDA and ISO 14971 risk assessments and NIST SP 800-53/800-66 controls to support post-acquisition cloud migration.",
      stack: ["Azure Data Factory", "ADLS", "HL7", "NIST 800-53", "ISO 14971"],
    },
  },
  {
    role: "Data Engineer",
    company: "Crescent Regional Hospital",
    period: "Oct 2015 — Mar 2020",
    bullets: [
      "Engineered a cloud-native Snowflake + Azure Databricks platform processing 500K+ daily patient encounter and claims records, raising data quality from 87% to 98%.",
      "Built high-throughput Kafka streaming pipelines for EHR/claims events, cutting care-gap and claims reconciliation time by 35% and automating 60% of manual QA.",
      "Built revenue-cycle and financial data pipelines (claims, billing, payments, GL) into Snowflake supporting month-end close, budgeting, and financial reporting.",
    ],
    extraBullets: [
      "Partnered with finance and revenue-cycle teams on reconciliation and variance reporting for payer reimbursements, denials, and cost per encounter.",
      "Developed dbt and PySpark ELT models on Snowflake and Delta Lake for regulatory/quality reporting aligned with HIPAA and HITRUST.",
      "Standardized deployments with Docker, AKS, and Terraform; CI/CD automation reduced production incidents by 25%.",
      "Established governance frameworks — encryption, RBAC, audit trails — protecting PHI/PII across clinical and administrative systems.",
      "Delivered executive dashboards in Power BI and Tableau on patient outcomes, platform health, and compliance posture.",
    ],
    project: {
      title: "Enterprise Clinical & Revenue Cycle Data Platform",
      summary:
        "Built Snowflake + Azure Databricks pipelines for clinical, claims, billing, and general-ledger data across 50+ urgent care clinics and acquired hospitals, raising data quality from 87% to 98% while leading a 16-member onshore/offshore team.",
      stack: ["Snowflake", "Databricks", "dbt", "Power BI", "Team Leadership"],
    },
    impact: [
      { label: "Data Quality Improvement (87% → 98%)", value: 98, display: "98%" },
      { label: "Manual QA Automated", value: 60, display: "60%" },
      { label: "Fewer Production Incidents", value: 25, display: "25%" },
    ],
  },
  {
    role: "Junior Data Engineer",
    company: "ASP Cares",
    period: "Nov 2014 — Sep 2015",
    bullets: [
      "Designed and maintained scalable ETL/ELT pipelines and enterprise data warehouses supporting SaaS analytics products and high-volume application telemetry.",
      "Developed SSIS and SQL stored-procedure workflows to extract, cleanse, and load data from Oracle, SQL Server, and flat files with incremental loads and error handling.",
      "Built streaming ingestion with Kafka and Spark for IoT and application event data, enabling real-time operational dashboards.",
    ],
    project: {
      title: "Financial & SaaS Analytics Data Warehouse",
      summary:
        "Delivered SSIS and SQL-based ETL pipelines and a data warehouse integrating transactional, billing, and revenue data from Oracle and SQL Server, powering financial reporting and SaaS analytics with Docker-based CI/CD for reliable releases.",
      stack: ["SSIS", "SQL Server", "Oracle", "Docker", "CI/CD"],
    },
  },
];

export const skillGroups = [
  {
    category: "Cloud & Data Platforms",
    skills: [
      "Azure Databricks",
      "Azure Synapse Analytics",
      "Azure Data Factory",
      "ADLS Gen2",
      "Microsoft Fabric",
      "AWS (S3, Glue, Lambda, Athena, Redshift)",
      "Snowflake",
      "Databricks Unity Catalog",
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      "Apache Spark",
      "PySpark",
      "Kafka",
      "Delta Lake",
      "Apache Iceberg",
      "dbt",
      "Airflow",
      "SSIS",
      "Medallion Architecture",
      "CDC",
    ],
  },
  {
    category: "DevOps & Automation",
    skills: [
      "Kubernetes (AKS, EKS)",
      "Docker",
      "Terraform",
      "Bicep",
      "Azure DevOps",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    category: "AI & Analytics",
    skills: [
      "Azure OpenAI Service",
      "Snowflake Cortex",
      "GitHub Copilot",
      "Great Expectations",
      "Tableau",
      "Power BI",
    ],
  },
  {
    category: "Security & Governance",
    skills: [
      "HIPAA",
      "HITRUST",
      "PCI-DSS",
      "SOX",
      "Azure Purview",
      "SIEM (Splunk, Sentinel)",
      "Entra ID",
      "RBAC & Encryption",
    ],
  },
  {
    category: "Languages & Interoperability",
    skills: ["Python", "SQL", "Bash", "Java", "Scala", "FHIR", "HL7", "REST APIs"],
  },
];

export const certifications = [
  "Google Cybersecurity Professional Certificate",
  "Oracle Certified Expert (OCE) — RAC & Grid Infrastructure Administrator",
  "Oracle Certified Professional (OCP) — Oracle Database 12c",
  "Oracle E-Business Suite R12 Apps DBA Certified Professional",
  "Oracle Certified Professional (OCP) — Oracle Database 11g R2",
  "Oracle Certified Associate (OCA) — Oracle Database 11g R2",
];

export const education = [
  { school: "Quantic School of Business and Technology", degree: "Executive MBA", period: "2019 — 2021" },
  { school: "COMSATS University", degree: "Master of Software Engineering (MSE)", period: "" },
];
