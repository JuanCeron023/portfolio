import type { BrandName } from "../components/brand/registry";

export type ProjectIcon = BrandName;

export interface Project {
	slug: string;
	name: string;
	description: string;
	url: string;
	repo?: string;
	icon: ProjectIcon;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		slug: "optima",
		name: "Optima (B2B SaaS)",
		description: "End-to-end B2B platform that automates SECOP II public procurement alerts in Colombia. Designed, scaled, and maintained independently.",
		url: "https://contratosoptima.com/",
		icon: "terminal",
		featured: true,
	},
	{
		slug: "earthquake-rag",
		name: "Earthquake Intelligence Engine (Hybrid RAG)",
		repo: "JuanCeron023/venezuela-colombia-earthquake-rag",
		description: "Global seismic intelligence engine using a hybrid Go + Python architecture, pgvector HNSW RAG, and DeepSeek AI gatekeeper.",
		url: "https://github.com/JuanCeron023/venezuela-colombia-earthquake-rag",
		icon: "terminal",
		featured: true,
	},
	{
		slug: "forge",
		name: "Forge (Autonomous Agentic Engineering Engine)",
		repo: "JuanCeron023/forge",
		description: "Autonomous multi-agent software engineering skill that orchestrates architecture, implementation, automated verification, and clean delivery across 7 specialized phases.",
		url: "https://github.com/JuanCeron023/forge",
		icon: "terminal",
		featured: true,
	},
	{
		slug: "atlas",
		name: "Atlas (Distributed Systems Playbook)",
		repo: "JuanCeron023/atlas",
		description: "Universal engineering knowledge base and playbook covering concurrency invariants, streaming patterns, and backend architecture best practices.",
		url: "https://github.com/JuanCeron023/atlas",
		icon: "code",
		featured: true,
	},
	{
		slug: "booksy",
		name: "Booksy (AI Book Distillation Engine)",
		repo: "JuanCeron023/booksy",
		description: "AI-powered card-based book distillation engine: transforms technical PDFs into interactive distillations, preserving author voice, verbatim quotes, and original diagrams.",
		url: "https://github.com/JuanCeron023/booksy",
		icon: "code",
		featured: true,
	},
	{
		slug: "raft-consensus-feature-flags",
		name: "Distributed Feature Flags (Raft Consensus)",
		repo: "JuanCeron023/raft-consensus-feature-flags",
		description: "Safely toggle and roll out features across multiple servers using Raft consensus, keeping configurations in sync even if nodes go down.",
		url: "https://github.com/JuanCeron023/raft-consensus-feature-flags",
		icon: "code",
		featured: true,
	},
	{
		slug: "lsm-timeseries-db-go",
		name: "LSM-Tree Time-Series Database",
		repo: "JuanCeron023/lsm-timeseries-db-go",
		description: "Fast time-series database in Go built to handle heavy streams of incoming metrics efficiently using an LSM-tree storage engine.",
		url: "https://github.com/JuanCeron023/lsm-timeseries-db-go",
		icon: "code",
		featured: true,
	},
	{
		slug: "partitioned-commit-log-go",
		name: "Partitioned Commit Log (Kafka in Go)",
		repo: "JuanCeron023/partitioned-commit-log-go",
		description: "Streams and stores ordered events across multiple consumers and partitions, without the heavy setup and resource cost of Kafka.",
		url: "https://github.com/JuanCeron023/partitioned-commit-log-go",
		icon: "code",
		featured: true,
	},
	{
		slug: "disney-backend",
		name: "High-Throughput Microservices (Disney)",
		description: "Redesigned Go microservices and event-driven systems processing 30K+ daily state updates with Kinesis and MongoDB.",
		url: "https://linkedin.com/in/juanmanuelceronaraujo",
		icon: "code",
		featured: true,
	},
	{
		slug: "meli-event-driven",
		name: "Event-Driven Backend (Mercado Libre)",
		description: "Built scalable event-driven Go backends handling tens of thousands of daily events with Pub/Sub.",
		url: "https://linkedin.com/in/juanmanuelceronaraujo",
		icon: "code",
		featured: true,
	},
	{
		slug: "redis-storage-engine-go",
		name: "Redis Storage Engine (RESP2 in Go)",
		repo: "JuanCeron023/redis-storage-engine-go",
		description: "Fast in-memory key-value cache compatible with Redis clients, with automatic key expiration and disk persistence built in.",
		url: "https://github.com/JuanCeron023/redis-storage-engine-go",
		icon: "code",
		featured: false,
	},
	{
		slug: "hybrid-rag-document-qa",
		name: "Hybrid RAG Document Q&A",
		repo: "JuanCeron023/hybrid-rag-document-qa",
		description: "Ask questions about your documents and get direct answers with exact page citations. Works completely offline without needing paid AI API keys.",
		url: "https://github.com/JuanCeron023/hybrid-rag-document-qa",
		icon: "code",
		featured: false,
	},
	{
		slug: "durable-job-queue-go",
		name: "Durable Job Queue (Go)",
		repo: "JuanCeron023/durable-job-queue-go",
		description: "Runs background jobs reliably without losing tasks if servers restart, with support for priority queues and automatic retries.",
		url: "https://github.com/JuanCeron023/durable-job-queue-go",
		icon: "code",
		featured: false,
	},
	{
		slug: "hybrid-recommendation-engine",
		name: "Hybrid Recommendation Engine",
		repo: "JuanCeron023/hybrid-recommendation-engine",
		description: "Suggests relevant products to users based on what they like. Uses item tags to still make smart recommendations for brand new users with no history.",
		url: "https://github.com/JuanCeron023/hybrid-recommendation-engine",
		icon: "code",
		featured: false,
	},
	{
		slug: "ticket-classification-routing-engine",
		name: "Ticket Classification & Routing Engine",
		repo: "JuanCeron023/ticket-classification-routing-engine",
		description: "Sorts incoming customer support tickets automatically by topic and urgency, so the right team can resolve urgent issues before customers get frustrated.",
		url: "https://github.com/JuanCeron023/ticket-classification-routing-engine",
		icon: "code",
		featured: false,
	}
];

export const featuredProjects = projects.filter((project) => project.featured);
