import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: '420px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1460px',
			'3xl': '1640px',
		},
		extend: {
			colors: {
				grey: "#7B7B7B",
				black: "#181818",
				white: "#ffffff"
			},
		},
	},
	plugins: [],
};
export default config;
