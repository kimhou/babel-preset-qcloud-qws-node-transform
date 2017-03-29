/**
 * @module index
 * @desc
 * @author Created by kimhou on 2016/11/11
 */
const path = require('path');

module.exports = function buildPreset(context, opts) {
	var presets = createPresets(context, opts),
		plugins = createPlugins(context, opts);

	return {
		presets: presets,
		plugins: plugins
	}
};

function createPresets(context, opts) {
	opts = opts || {};

	return [
		require("babel-preset-react"),
		[require("babel-preset-env"), {
			targets: opts.targets || {node: 6.3},
			whitelist: opts.whitelist || []
			// "whitelist": [
			// 	"transform-es2015-destructuring",
			// 	"transform-es2015-parameters"
			// ]
		}]
	];
}

function createPlugins(context, opts) {
	return [
		[
			path.join(__dirname, "../babel-plugin-transform-require-ignore"),
			{"extensions": [".css", ".less", ".sass"]}
		],
		require("babel-plugin-add-module-exports"),
		require("babel-plugin-transform-object-rest-spread"),
		require("babel-plugin-transform-class-properties")
	];
}