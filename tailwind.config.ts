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
			keyframes: {
				widthExpand: {
					'0%': { width: '0px' },
					'30%': { width: '0px' },
					'100%': { width: '65px' },
				},
			},
			animation: {
				'width-expand': 'widthExpand 1s ease-in-out forwards',
			},
		},
	},
	plugins: [],
};
export default config;
