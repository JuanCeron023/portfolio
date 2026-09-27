export type BrandName =
	| "github"
	| "terminal"
	| "code"
	| "android"
	| "nextjs"
	| "vercel"
	| "activity"
	| "cpu"
	| "sparkles"
	| "book"
	| "compass"
	| "flag"
	| "database"
	| "server"
	| "zap"
	| "inbox"
	| "briefcase"
	| "award";

export interface SvgEntry {
	kind: "svg";
	viewBox: string;
	paths: string;
	fill?: string;
	label?: string;
	defaultHeight?: number;
}

export interface ComponentEntry {
	kind: "component";
	label: string;
	defaultHeight?: number;
}

export type BrandEntry = SvgEntry | ComponentEntry;

export const brandRegistry: Record<BrandName, BrandEntry> = {
	github: {
		kind: "svg",
		viewBox: "0 0 24 24",
		paths:
			'<path\n        fill="currentColor"\n        fill-rule="evenodd"\n        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"\n        clip-rule="evenodd"\n    />',
	},
	terminal: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Terminal",
		paths:
			'<polyline points="4 17 10 11 4 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></polyline><line x1="12" y1="19" x2="20" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>',
	},
	code: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Code",
		paths:
			'<polyline points="16 18 22 12 16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></polyline><polyline points="8 6 2 12 8 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></polyline>',
	},
	android: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Android",
		paths:
			'<path fill="currentColor" d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4114 13.8563 8 12 8s-3.5902.4114-5.1367 1.0507L4.841 5.5477a.416.416 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>',
	},
	nextjs: {
		kind: "svg",
		viewBox: "0 0 180 180",
		paths:
			'<mask\n        height="180"\n        id=":r8:mask0_408_134"\n        maskUnits="userSpaceOnUse"\n        style="mask-type:alpha"\n        width="180"\n        x="0"\n        y="0"\n    >\n        <circle\n            cx="90"\n            cy="90"\n            fill="black"\n            r="90"\n        />\n    </mask>\n    <g mask="url(#:r8:mask0_408_134)">\n        <circle\n            cx="90"\n            cy="90"\n            data-circle="true"\n            fill="black"\n            r="90"\n        />\n        <path\n            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"\n            fill="url(#:r8:paint0_linear_408_134)"\n        />\n        <rect\n            fill="url(#:r8:paint1_linear_408_134)"\n            height="72"\n            width="12"\n            x="115"\n            y="54"\n        />\n    </g>\n    <defs>\n        <linearGradient\n            gradientUnits="userSpaceOnUse"\n            id=":r8:paint0_linear_408_134"\n            x1="109"\n            x2="144.5"\n            y1="116.5"\n            y2="160.5"\n        >\n            <stop stop-color="white" />\n            <stop\n                offset="1"\n                stop-color="white"\n                stop-opacity="0"\n            />\n        </linearGradient>\n        <linearGradient\n            gradientUnits="userSpaceOnUse"\n            id=":r8:paint1_linear_408_134"\n            x1="121"\n            x2="120.799"\n            y1="54"\n            y2="106.875"\n        >\n            <stop stop-color="white" />\n            <stop\n                offset="1"\n                stop-color="white"\n                stop-opacity="0"\n            />\n        </linearGradient>\n    </defs>',
	},
	vercel: {
		kind: "svg",
		viewBox: "0 0 24 24",
		paths: '<path\n        fill="currentColor"\n        d="m12 1.5 12 21H0z"\n    />',
	},
	activity: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Activity",
		fill: "none",
		paths:
			'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></polyline>',
	},
	cpu: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Engine",
		fill: "none",
		paths:
			'<rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect><rect x="9" y="9" width="6" height="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect><line x1="9" y1="1" x2="9" y2="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line><line x1="15" y1="1" x2="15" y2="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line><line x1="9" y1="20" x2="9" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line><line x1="15" y1="20" x2="15" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line><line x1="20" y1="9" x2="23" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line><line x1="20" y1="15" x2="23" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line><line x1="1" y1="9" x2="4" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line><line x1="1" y1="15" x2="4" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>',
	},
	sparkles: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Sparkles",
		fill: "none",
		paths:
			'<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><line x1="5" y1="3" x2="5" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><line x1="3" y1="5" x2="7" y2="5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><line x1="19" y1="17" x2="19" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><line x1="17" y1="19" x2="21" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>',
	},
	book: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Book",
		fill: "none",
		paths:
			'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>',
	},
	compass: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Compass",
		fill: "none",
		paths:
			'<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></polygon>',
	},
	flag: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Flag",
		fill: "none",
		paths:
			'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><line x1="4" y1="22" x2="4" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>',
	},
	database: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Database",
		fill: "none",
		paths:
			'<ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>',
	},
	server: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Server",
		fill: "none",
		paths:
			'<rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect><line x1="6" y1="6" x2="6.01" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line><line x1="6" y1="18" x2="6.01" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>',
	},
	zap: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Lightning",
		fill: "none",
		paths:
			'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></polygon>',
	},
	inbox: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Inbox",
		fill: "none",
		paths:
			'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>',
	},
	briefcase: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Briefcase",
		fill: "none",
		paths:
			'<rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>',
	},
	award: {
		kind: "svg",
		viewBox: "0 0 24 24",
		label: "Award",
		fill: "none",
		paths:
			'<circle cx="12" cy="8" r="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></polyline>',
	},
};

export type FlagName = "pe" | "cl" | "co" | "br" | "globe";

export const flagRegistry: Record<FlagName, SvgEntry> = {
	pe: {
		kind: "svg",
		viewBox: "0 0 24 24",
		fill: "none",
		label: "Peru",
		paths:
			'<g clip-path="url(#PE_svg__a)">\n        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#F0F0F0"/>\n        <path d="M24 12.002c0-5.16-3.257-9.559-7.826-11.254v22.507C20.744 21.56 24 17.161 24 12.002ZM0 12c0 5.16 3.256 9.559 7.826 11.254V.747C3.256 2.443 0 6.841 0 12.001Z" fill="#D80027"/>\n    </g>\n    <defs>\n        <clipPath id="PE_svg__a">\n            <path fill="#fff" d="M0 0h24v24H0z"/>\n        </clipPath>\n    </defs>',
	},
	cl: {
		kind: "svg",
		viewBox: "0 0 24 24",
		fill: "none",
		label: "Chile",
		paths:
			'<g clip-path="url(#CL_svg__a)">\n        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#F0F0F0"/>\n        <path d="M24 12c0 6.628-5.373 12-12 12S0 18.628 0 12c0-6.627 12 0 12 0h12Z" fill="#D80027"/>\n        <path d="M0 12C0 5.373 5.373 0 12 0v12H0Z" fill="#0052B4"/>\n        <path d="m7.143 4.173.777 2.392h2.515L8.4 8.043l.777 2.391-2.034-1.478-2.034 1.478.777-2.391-2.034-1.478h2.514l.777-2.392Z" fill="#F0F0F0"/>\n    </g>\n    <defs>\n        <clipPath id="CL_svg__a">\n            <path fill="#fff" d="M0 0h24v24H0z"/>\n        </clipPath>\n    </defs>',
	},
	co: {
		kind: "svg",
		viewBox: "0 0 24 24",
		fill: "none",
		label: "Colombia",
		paths:
			'<g clip-path="url(#CO_svg__a)">\n        <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12l-12 1.043L0 12Z" fill="#FFDA44"/>\n        <path d="M1.605 18C3.68 21.587 7.558 24 12 24c4.441 0 8.319-2.413 10.394-6L12 17.218 1.605 18Z" fill="#D80027"/>\n        <path d="M22.394 18A11.944 11.944 0 0 0 24 12H0c0 2.186.585 4.235 1.606 6h20.788Z" fill="#0052B4"/>\n    </g>\n    <defs>\n        <clipPath id="CO_svg__a">\n            <path fill="#fff" d="M0 0h24v24H0z"/>\n        </clipPath>\n    </defs>',
	},
	br: {
		kind: "svg",
		viewBox: "0 0 24 24",
		fill: "none",
		label: "Brazil",
		paths:
			'<g clip-path="url(#BR_svg__a)">\n        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#6DA544"/>\n        <path d="m12 4.696 8.485 7.304L12 19.304 3.515 12 12 4.696Z" fill="#FFDA44"/>\n        <path d="M12 16.174a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z" fill="#F0F0F0"/>\n        <path d="M9.391 11.478a6.956 6.956 0 0 0-1.74.219 4.17 4.17 0 0 0 7.91 1.107 6.913 6.913 0 0 0-6.17-1.326Z" fill="#0052B4"/>\n    </g>\n    <defs>\n        <clipPath id="BR_svg__a">\n            <path fill="#fff" d="M0 0h24v24H0z"/>\n        </clipPath>\n    </defs>',
	},
	globe: {
		kind: "svg",
		viewBox: "0 0 24 24",
		fill: "none",
		label: "Global",
		paths:
			'<path\n        d="M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22"\n        stroke="currentColor"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n    />',
	},
};
