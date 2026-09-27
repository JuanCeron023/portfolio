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
