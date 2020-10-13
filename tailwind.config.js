module.exports = {
	experimental: "all",
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		extend: {},
	},
	variants: {
		backgroundColor: ["responsive", "hover", "focus", "active"],
	},
	plugins: [],
};
