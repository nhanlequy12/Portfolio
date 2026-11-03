// Single source of truth for the portfolio content (mirrors the CV).

export const PROFILE = {
  name: "Le Quy Nhan",
  shortName: "Nhân",
  role: "AI Engineer",
  location: "Binh Thanh, Ho Chi Minh City",
  email: "nhan.lequy12@gmail.com",
  phone: "0987 735 699",
  phoneHref: "tel:0987735699",
  github: "https://github.com/nhanlequy12",
  linkedin: "https://www.linkedin.com/in/nhanlequy/",
  facebook: "https://www.facebook.com/nhan.lequy.12/",
  objective:
    "Focused on leveraging deep learning model design and robust data processing to drive practical business solutions. Dedicated to transforming academic research into scalable product features, deploying state-of-the-art AI to maximize system efficiency and user experience.",
  tagline: "I turn research papers into products — diffusion models, RAG pipelines, LLM agents and the MLOps that keeps them running.",
};

export const STATS = [
  { value: "3.2", unit: "/ 4.0", label: "GPA · Computer Science" },
  { value: "820", unit: "", label: "TOEIC score" },
  { value: "4", unit: "", label: "AI projects shipped" },
];

export const EDUCATION = {
  school: "University of Information Technology — VNUHCM",
  degree: "Bachelor of Computer Science",
  major: "Computer Science",
  period: "08/2022 — Present",
  gpa: "3.2 / 4.0",
  toeic: "820",
};

export const EXPERIENCE = [
  {
    company: "Bosch Global Software Technologies",
    role: "Software Engineering Intern",
    period: "08/2025 — 02/2026",
    location: "Ho Chi Minh City",
    bullets: [
      "Navigated Linux-based environments using Vim and CLI tools, adhering to standard Git workflows for code integration and peer reviews.",
      "Collaborated within an Agile/Kanban framework, efficiently managing task progress and actively participating in team syncs.",
      "Integrated a custom Vehicle Hardware Abstraction Layer (VHAL) service into the Android Open Source Project build system.",
    ],
    tags: ["Linux", "Git", "AOSP", "Agile / Kanban"],
  },
];

export const PROJECTS = [
  {
    id: "teams-agent",
    featured: true,
    title: "Internal AI Executive Assistant on Microsoft Teams",
    kind: "Internal company project",
    period: "10/2026 — Present",
    summary:
      "An AI agent living inside Microsoft Teams that acts as an executive assistant for a leadership team: one natural-language message sends Outlook emails, assigns tasks, schedules meetings, posts Teams messages and drafts plans from SharePoint documents.",
    pipeline: ["Teams", "Azure Bot Service", "MCP server", "Claude Code session"],
    metric: { value: "40%", label: "less time drafting plans" },
    bullets: [
      "Designed and built the agent on Azure Bot Service with Microsoft Entra ID authentication.",
      "Architected the message pipeline (Teams → Azure Bot Service → MCP server → Claude Code) so the agent can run multi-step tasks per conversation.",
      "Added human-in-the-loop confirmation for sensitive actions such as email and calendar.",
      "Integrated Microsoft 365 actions via natural language and automated plan generation from SharePoint content.",
      "Applied access controls so only authorized users can trigger the agent's actions.",
    ],
    tags: ["Azure Bot Service", "Microsoft Entra ID", "MCP", "Claude Code", "Microsoft 365", "LLM Agents"],
    link: null,
  },
  {
    id: "tryon",
    title: "Automated Virtual Try-On with Diffusion Models",
    kind: "Course project",
    period: "05/2026 — 06/2026",
    summary:
      "A generative AI web platform that lets users visualize themselves wearing custom outfits. Refactored an academic research framework (StableVITON + Latent Diffusion) into a fully automated, end-to-end pipeline.",
    metrics: [
      { value: "−0.026", label: "LPIPS" },
      { value: "−47.27", label: "FID" },
      { value: "−0.020", label: "KID" },
    ],
    metricNote: "vs. StableVITON baseline",
    bullets: [
      "Integrated SAM and DINO for precise foreground segmentation, preserving hands, arms and accessories without distortion.",
      "Outperformed the StableVITON baseline across every evaluation metric through custom pipeline optimizations.",
      "Built and deployed an interactive web app where users upload a photo and see garments in real time.",
    ],
    tags: ["StableVITON", "Latent Diffusion", "SAM", "DINO", "PyTorch"],
    link: "https://github.com/nhanlequy12",
  },
  {
    id: "rag-quiz",
    title: "AI-Driven RAG & Automated Quiz Generation Platform",
    kind: "Personal project",
    period: "04/2026 — 06/2026",
    summary:
      "Chat with unstructured PDF documents through an end-to-end Retrieval-Augmented Generation pipeline, then turn them into context-aware quizzes automatically.",
    bullets: [
      "Engineered the RAG pipeline with FastAPI and Pinecone for high-accuracy semantic search and multi-turn Q&A.",
      "Built ingestion workflows with OCR for scanned documents, optimized chunking and OpenAI / Gemini embeddings.",
      "Used prompt engineering and structured LLM outputs to generate quizzes from dense documents.",
      "Shipped a responsive React frontend with JWT and OAuth2 authentication.",
    ],
    tags: ["RAG", "FastAPI", "Pinecone", "LangChain", "OCR", "React"],
    link: "https://github.com/NahwngLe/Infobot",
  },
  {
    id: "anomaly",
    title: "Network Anomaly Detection (MLOps)",
    kind: "Course project",
    period: "03/2026 — 04/2026",
    summary:
      "An end-to-end machine learning pipeline that detects network anomalies on the CICIDS2017 benchmark, with the full model lifecycle tracked and deployed.",
    bullets: [
      "Built the pipeline with Scikit-learn, including advanced feature selection and handling of severe class imbalance.",
      "Managed the model lifecycle with MLflow for reproducible experiment tracking and scalable deployment.",
      "Packaged and deployed the model API with Docker and FastAPI.",
    ],
    tags: ["Scikit-learn", "MLflow", "Docker", "FastAPI", "CICIDS2017"],
    link: "https://github.com/NahwngLe/mlflow-network-anomaly-cicids2017",
  },
];

export const SKILLS = [
  { group: "Languages", span: 2, items: ["Python", "JavaScript", "C++"] },
  {
    group: "AI Agent", span: 4,
    items: ["LLM Agents", "Model Context Protocol (MCP)", "Claude Code", "Prompt Engineering", "Tool / Function Calling"],
  },
  { group: "AI / ML", span: 3, items: ["PyTorch", "LangChain", "LangGraph", "Pandas", "NumPy", "Scikit-learn"] },
  {
    group: "Microsoft Ecosystem", span: 3,
    items: ["Azure Bot Service", "Microsoft Teams", "Microsoft Entra ID", "Microsoft 365 (Outlook, SharePoint)", "Microsoft Graph API"],
  },
  { group: "Backend & MLOps", span: 2, items: ["FastAPI", "Docker", "MLflow", "Prometheus", "Grafana", "Loki"] },
  { group: "Databases", span: 2, items: ["PostgreSQL", "MSSQL", "MongoDB", "Pinecone", "Firebase"] },
  { group: "Tools", span: 2, items: ["Git", "GitHub", "DVC"] },
];

export const CERTIFICATIONS = [
  { title: "Applications of AI for Anomaly Detection", issuer: "NVIDIA", year: "2025" },
];

export const TICKER = [
  "Diffusion Models", "RAG", "LLM Agents", "MCP", "PyTorch", "LangGraph", "FastAPI", "Docker",
  "MLflow", "Azure Bot Service", "Pinecone", "Claude Code", "Prompt Engineering", "Scikit-learn",
];
