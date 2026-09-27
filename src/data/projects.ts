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
		description: "SECOP II procurement alerts automation platform in Colombia.",
		url: "https://contratosoptima.com/",
		icon: "briefcase",
		featured: true,
	},
	{
		slug: "earthquake-rag",
		name: "Earthquake RAG",
		repo: "JuanCeron023/venezuela-colombia-earthquake-rag",
		description: "Seismic intelligence engine with Go pipelines and pgvector HNSW.",
		url: "https://github.com/JuanCeron023/venezuela-colombia-earthquake-rag",
		icon: "activity",
		featured: true,
	},
	{
		slug: "forge",
		name: "Forge (AI Skill)",
		repo: "JuanCeron023/forge",
		description: "Autonomous multi-agent software engineering engine.",
		url: "https://github.com/JuanCeron023/forge",
		icon: "cpu",
		featured: true,
	},
	{
		slug: "atlas",
		name: "Atlas (Playbook)",
		repo: "JuanCeron023/atlas",
		description: "Universal distributed systems invariants and backend guide.",
		url: "https://github.com/JuanCeron023/atlas",
		icon: "compass",
		featured: true,
	},
	{
		slug: "booksy",
		name: "Booksy (AI Reader)",
		repo: "JuanCeron023/booksy",
		description: "AI distillation engine converting technical books into cards.",
		url: "https://github.com/JuanCeron023/booksy",
		icon: "book",
		featured: true,
	},
	{
		slug: "raft-consensus-feature-flags",
		name: "Raft Feature Flags",
		repo: "JuanCeron023/raft-consensus-feature-flags",
		description: "Consensus-backed distributed feature flagging in Go.",
		url: "https://github.com/JuanCeron023/raft-consensus-feature-flags",
		icon: "flag",
		featured: true,
	},
	{
		slug: "lsm-timeseries-db-go",
		name: "LSM-Tree DB",
		repo: "JuanCeron023/lsm-timeseries-db-go",
		description: "High-throughput time-series engine with WAL and SSTables.",
		url: "https://github.com/JuanCeron023/lsm-timeseries-db-go",
		icon: "database",
		featured: true,
	},
	{
		slug: "disney-backend",
		name: "Disney (Globant)",
		description: "Go microservices & Kinesis handling 30K+ daily state updates.",
		url: "https://linkedin.com/in/juanmanuelceronaraujo",
		icon: "server",
		featured: true,
	},
	{
		slug: "meli-event-driven",
		name: "Mercado Libre",
		description: "Event-driven Go backend processing 10K+ events daily via Pub/Sub.",
		url: "https://linkedin.com/in/juanmanuelceronaraujo",
		icon: "zap",
		featured: true,
	},
	{
		slug: "hybrid-recommendation-engine",
		name: "Recommendation Engine",
		repo: "JuanCeron023/hybrid-recommendation-engine",
		description: "Hybrid recommender solving cold-start via item tagging.",
		url: "https://github.com/JuanCeron023/hybrid-recommendation-engine",
		icon: "sparkles",
		featured: false,
	},
	{
		slug: "ticket-classification-routing-engine",
		name: "Ticket Routing Engine",
		repo: "JuanCeron023/ticket-classification-routing-engine",
		description: "Automated support ticket triage and urgency routing.",
		url: "https://github.com/JuanCeron023/ticket-classification-routing-engine",
		icon: "inbox",
		featured: false,
	}
];

export const featuredProjects = projects.filter((project) => project.featured);
