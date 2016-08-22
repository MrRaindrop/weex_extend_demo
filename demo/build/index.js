/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/3b60973e9aac76550a401f71f9baeccc", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    methods: {
	      handleClick (e) {
	        alert('e.value : ' + e.value)
	      }
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "weex-hello",
	      "classList": [
	        "hello"
	      ],
	      "style": {
	        "txtColor": "#fff",
	        "bgColor": "green"
	      },
	      "attr": {
	        "value": "WEEX"
	      },
	      "events": {
	        "click": "handleClick"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "hello": {
	    "width": 375,
	    "height": 80,
	    "lineHeight": 80,
	    "fontSize": 32,
	    "alignItems": "center"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/3b60973e9aac76550a401f71f9baeccc", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);