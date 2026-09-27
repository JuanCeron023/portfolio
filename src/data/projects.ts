import type { BrandName } from "../components/brand/registry";

export type ProjectIcon = BrandName;

export interface Project {
	slug: string;
	name: string;
	description: string;
	longDescription?: string;
	tags?: string[];
	url: string;
	repo?: string;
	icon: ProjectIcon;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		slug: "optima",
		name: "Optima (B2B SaaS)",
		description: "SECOP II procurement alerts automation platform in Colombia.",
		longDescription:
			"End-to-end B2B SaaS platform that automates public procurement monitoring (SECOP II) in Colombia. Ingests and analyzes thousands of government bidding opportunities, delivering real-time email alerts and analytics to paying enterprise clients.",
		tags: ["Go", "AWS", "PostgreSQL", "B2B SaaS", "Automation"],
		url: "https://contratosoptima.com/",
		icon: "briefcase",
		featured: true,
	},
	{
		slug: "earthquake-rag",
		name: "Earthquake RAG",
		repo: "JuanCeron023/venezuela-colombia-earthquake-rag",
		description: "Seismic intelligence engine with Go pipelines and pgvector HNSW.",
		longDescription:
			"Global emergency intelligence engine combining high-throughput Go ingestion pipelines with Python semantic retrieval. Uses PostgreSQL + pgvector (HNSW indexing) for seismic hazard queries, validated through a DeepSeek AI gatekeeper.",
		tags: ["Go", "Python", "pgvector", "FastAPI", "DeepSeek", "RAG"],
		url: "https://github.com/JuanCeron023/venezuela-colombia-earthquake-rag",
		icon: "activity",
		featured: true,
	},
	{
		slug: "forge",
		name: "Forge (AI Skill)",
		repo: "JuanCeron023/forge",
		description: "Autonomous multi-agent software engineering engine.",
		longDescription:
			"Autonomous software engineering skill that orchestrates multi-agent workflows across 7 specialized phases—from architectural design and implementation to automated verification, strict invariants, and clean delivery.",
		tags: ["Agentic AI", "TypeScript", "Prompt Eng", "CI/CD", "Testing"],
		url: "https://github.com/JuanCeron023/forge",
		icon: "cpu",
		featured: true,
	},
	{
		slug: "atlas",
		name: "Atlas (Playbook)",
		repo: "JuanCeron023/atlas",
		description: "Universal distributed systems invariants and backend guide.",
		longDescription:
			"Production engineering knowledge base and playbook covering concurrency invariants, streaming patterns, context propagation, container CPU/CFS limits, and backend reliability best practices.",
		tags: ["Distributed Systems", "Concurrency", "Go", "Architecture", "Observability"],
		url: "https://github.com/JuanCeron023/atlas",
		icon: "compass",
		featured: true,
	},
	{
		slug: "booksy",
		name: "Booksy (AI Reader)",
		repo: "JuanCeron023/booksy",
		description: "AI distillation engine converting technical books into cards.",
		longDescription:
			"Clean-architecture Go microservice platform for AI-powered card-based book distillations. Transforms technical PDFs into structured cards while strictly preserving author voice, verbatim quotes, and original diagrams.",
		tags: ["Go", "Clean Architecture", "PostgreSQL", "Redis", "Docker"],
		url: "https://github.com/JuanCeron023/booksy",
		icon: "book",
		featured: true,
	},
	{
		slug: "raft-consensus-feature-flags",
		name: "Raft Feature Flags",
		repo: "JuanCeron023/raft-consensus-feature-flags",
		description: "Consensus-backed distributed feature flagging in Go.",
		longDescription:
			"Distributed, strongly-consistent feature flagging system powered by the Raft consensus algorithm. Supports dynamic leader election, log replication, and replicated state machines to eliminate single points of failure.",
		tags: ["Go", "Raft Consensus", "Distributed Systems", "RPC", "State Machine"],
		url: "https://github.com/JuanCeron023/raft-consensus-feature-flags",
		icon: "flag",
		featured: true,
	},
	{
		slug: "lsm-timeseries-db-go",
		name: "LSM-Tree DB",
		repo: "JuanCeron023/lsm-timeseries-db-go",
		description: "High-throughput time-series engine with WAL and SSTables.",
		longDescription:
			"High-throughput append-only storage engine built in Go for time-series workloads. Implements an append-only Write-Ahead Log (WAL), in-memory SkipList memtable, SSTables with sparse index and Bloom filters, and background compaction.",
		tags: ["Go", "Storage Engine", "LSM-Tree", "SkipList", "WAL", "SSTables"],
		url: "https://github.com/JuanCeron023/lsm-timeseries-db-go",
		icon: "database",
		featured: true,
	},
	{
		slug: "disney-backend",
		name: "Disney (Globant)",
		description: "Go microservices & Kinesis handling 30K+ daily state updates.",
		longDescription:
			"High-scale Go microservices and event pipelines handling 30K+ daily state updates for Disney media platforms. Optimized throughput by 2× while reducing infrastructure costs using AWS Kinesis, EventBridge, and MongoDB.",
		tags: ["Go", "AWS Kinesis", "MongoDB", "Event-Driven", "High Throughput"],
		url: "https://linkedin.com/in/juanmanuelceronaraujo",
		icon: "server",
		featured: true,
	},
	{
		slug: "meli-event-driven",
		name: "Mercado Libre",
		description: "Event-driven Go backend processing 10K+ events daily via Pub/Sub.",
		longDescription:
			"Scalable event-driven Go backends processing tens of thousands of daily events with Google Cloud Pub/Sub, ensuring high availability, zero message loss, and horizontal elasticity across Latin America.",
		tags: ["Go", "GCP Pub/Sub", "Microservices", "Event-Driven", "Distributed"],
		url: "https://linkedin.com/in/juanmanuelceronaraujo",
		icon: "zap",
		featured: true,
	},
	{
		slug: "hybrid-recommendation-engine",
		name: "Recommendation Engine",
		repo: "JuanCeron023/hybrid-recommendation-engine",
		description: "Hybrid recommender solving cold-start via item tagging.",
		longDescription:
			"Hybrid recommendation system combining collaborative filtering with content-based metadata to solve the cold-start problem for new users, delivering accurate recommendations even without interaction history.",
		tags: ["Python", "Machine Learning", "Collaborative Filtering", "FastAPI"],
		url: "https://github.com/JuanCeron023/hybrid-recommendation-engine",
		icon: "sparkles",
		featured: false,
	},
	{
		slug: "ticket-classification-routing-engine",
		name: "Ticket Routing Engine",
		repo: "JuanCeron023/ticket-classification-routing-engine",
		description: "Automated support ticket triage and urgency routing.",
		longDescription:
			"Automated customer support routing engine that analyzes incoming tickets with NLP classification, scoring sentiment and urgency to route high-priority issues to the appropriate engineering teams.",
		tags: ["Python", "NLP", "Classification", "FastAPI", "Support Automation"],
		url: "https://github.com/JuanCeron023/ticket-classification-routing-engine",
		icon: "inbox",
		featured: false,
	}
];

export const featuredProjects = projects.filter((project) => project.featured);
