/**
 * @module index
 * @desc
 * @author Created by kimhou on 2016/11/11
 */
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
	opts.targets = opts.targets || {'node': 6.0};

	return [
		require("react"),
		[require("babel-preset-env"), {
			targets: targets,
			"whitelist": [
				require("babel-plugin-transform-es2015-destructuring"),
				require("babel-plugin-transform-es2015-parameters")
			]
		}]
	];
}

function createPlugins(context, opts) {
	return [
		require("babel-plugin-add-module-exports"),
		require("babel-plugin-transform-object-rest-spread"),
		require("babel-plugin-transform-class-properties")
	];
}