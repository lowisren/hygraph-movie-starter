export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Hygraphlix",
	description: "A movie streaming platform",
	navItems: [
		{
			label: "Movies",
			href: "/movies",
		},
		{
			label: "Genres",
			href: "/genres",
		},
		{
		label: "Docs",
		href: "/docs",
		},
		{
		label: "About",
		href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Movies",
			href: "/movies",
		},
		{
			label: "Genres",
			href: "/genres",
		},
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
