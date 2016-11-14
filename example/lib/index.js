"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @module index
 * @desc
 * @author Created by kimhou on 2016/11/14
 */

exports.default = class {
	constructor() {
		this.render = (_ref) => {
			let x = _ref.x,
			    y = _ref.y;
			let r = 30,
			    ss = 20;

			return _extends({ a: 10 }, { b: 20 });
		};
	}

};
module.exports = exports["default"];