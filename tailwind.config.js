/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				bg: "url('../public/background.jpg')",
			},
			aspectRatio: {
				"5/6": "5 / 6",
				"6/5": "6 / 5",
			},
			gridTemplateColumns: {
				"4-auto": "auto auto auto auto",
				"5-auto": "auto auto auto auto auto",
			},
			height: {
				"90-vh": "90vh",
			},
		},
	},
	plugins: [require("tailwindcss-3d")],
};
