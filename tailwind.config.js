/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{tsx,ts}'],
	theme: {
		extend: {
			screens: {
				md: '375px',
			},
		},
	},
	plugins: [],
};
