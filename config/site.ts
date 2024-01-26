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
		github: "https://github.com/lowisren/hygraph-movie-starter/",
		twitter: "https://twitter.com/hygraph",
		docs: "https://hygraph.com/docs",
	},
};
