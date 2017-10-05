module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bundle/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(43);
    var insertCss = __webpack_require__(5);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!./globalStyles.css", function() {
        content = require("!!../../node_modules/css-loader/index.js??ref--1-1!./globalStyles.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(46);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(47);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FooterBar = exports.HeaderBarItems = exports.HeaderBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _main_style = __webpack_require__(17);

var _main_style2 = _interopRequireDefault(_main_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vi = {
	project: "công trình",
	news: "tin tức",
	about: "giới thiệu",
	contact: "liên hệ",
	address: '189 Thanh Thuỷ, Quận Hải Châu, TP.Đà Nẵng'
};

var en = {
	project: "portfolio",
	news: "news",
	about: "about",
	contact: "contact",
	address: '189 Thanh Thuy Hai Chau District, Da Nang City, Vietnam'
};

var myWindow = typeof window !== "undefined" ? window : {};

var MainLayout = function (_React$Component) {
	_inherits(MainLayout, _React$Component);

	function MainLayout(props) {
		_classCallCheck(this, MainLayout);

		var _this = _possibleConstructorReturn(this, (MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).call(this, props));

		_this.state = {
			lang: vi
		};
		return _this;
	}

	_createClass(MainLayout, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			switch (nextProps.locale) {
				case 'en':
					this.setState({ lang: en });
					break;
				default:
					this.setState({ lang: vi });
			}
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			switch (this.props.locale) {
				case 'en':
					this.setState({ lang: en });
					break;
				default:
					this.setState({ lang: vi });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _globalStyles2.default.main_container },
				_react2.default.createElement(
					'div',
					{ className: _main_style2.default.semi_container },
					_react2.default.createElement(HeaderBar, {
						switchLang: this.props.switchLang,
						lang: this.state.lang,
						locale: this.props.locale }),
					_react2.default.createElement(
						'div',
						{ className: _main_style2.default.main_content_body },
						this.props.children
					)
				)
			);
		}
	}]);

	return MainLayout;
}(_react2.default.Component);

exports.default = MainLayout;

var HeaderBar = exports.HeaderBar = function (_React$Component2) {
	_inherits(HeaderBar, _React$Component2);

	function HeaderBar(props) {
		_classCallCheck(this, HeaderBar);

		var _this2 = _possibleConstructorReturn(this, (HeaderBar.__proto__ || Object.getPrototypeOf(HeaderBar)).call(this, props));

		_this2.state = {
			mobileMode: false,
			navBarDropDown: false
		};
		return _this2;
	}

	_createClass(HeaderBar, [{
		key: 'updateDimensions',
		value: function updateDimensions() {
			console.log('update dimension');
			if (mymyWindow.innerWidth < 750) {
				this.setState({ mobileMode: true });
			} else {
				this.setState({ mobileMode: false });
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			myWindow.addEventListener("resize", this.updateDimensions.bind(this));
			console.log('update dimension');
			if (myWindow.innerWidth < 750) {
				this.setState({ mobileMode: true });
			} else {
				this.setState({ mobileMode: false });
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			myWindow.removeEventListener("resize", this.updateDimensions.bind(this));
		}
	}, {
		key: 'handleDropDownNavBar',
		value: function handleDropDownNavBar() {
			this.setState({ navBarDropDown: !this.state.navBarDropDown });
			console.log('navBarDropDown: ', this.state.navBarDropDown);
		}
	}, {
		key: '_renderNavBar',
		value: function _renderNavBar() {
			var _this3 = this;

			if (!this.state.mobileMode) {
				//desktop view
				return _react2.default.createElement(HeaderBarItems, {
					switchLang: this.props.switchLang,
					locale: this.props.locale,
					mode: "desktop",
					lang: this.props.lang });
			} else {
				if (!this.state.navBarDropDown) {
					//mobile view collapsed
					return _react2.default.createElement(
						'div',
						{ onClick: function onClick() {
								return _this3.handleDropDownNavBar();
							}, className: _main_style2.default.menu_icon_container },
						_react2.default.createElement('img', { className: _main_style2.default.menu_icon, src: '/images/icon/menu_icon_black.png' })
					);
				} else {
					//mobile view expanded
					return _react2.default.createElement(
						'div',
						{ className: _main_style2.default.expanded_nav_bar },
						_react2.default.createElement(
							'div',
							{ onClick: function onClick() {
									return _this3.handleDropDownNavBar();
								}, className: _main_style2.default.menu_icon_container },
							_react2.default.createElement('img', { className: _main_style2.default.menu_icon, src: '/images/icon/menu_icon_black.png' })
						),
						_react2.default.createElement(HeaderBarItems, {
							mode: "mobile",
							lang: this.props.lang,
							switchLang: this.props.switchLang,
							locale: this.props.locale })
					);
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var height = this.state.navBarDropDown ? '250px' : '60px';
			return _react2.default.createElement(
				'div',
				{ className: _main_style2.default.header_container, style: { height: height } },
				_react2.default.createElement(
					_reactRouter.Link,
					{ style: { alignSelf: 'flex-start', marginTop: '10px' }, to: '/' },
					_react2.default.createElement('img', { className: _main_style2.default.header_logo, src: '/images/logo/transparent_grey.png' })
				),
				this._renderNavBar()
			);
		}
	}]);

	return HeaderBar;
}(_react2.default.Component);

var HeaderBarItems = exports.HeaderBarItems = function (_React$Component3) {
	_inherits(HeaderBarItems, _React$Component3);

	function HeaderBarItems() {
		_classCallCheck(this, HeaderBarItems);

		return _possibleConstructorReturn(this, (HeaderBarItems.__proto__ || Object.getPrototypeOf(HeaderBarItems)).apply(this, arguments));
	}

	_createClass(HeaderBarItems, [{
		key: 'switchLang',
		value: function switchLang() {
			if (this.props.locale == 'vi') {
				console.log('header bar items: ', this.props);
				this.props.switchLang('en');
			} else this.props.switchLang('vi');
		}
	}, {
		key: '_renderSubMenu',
		value: function _renderSubMenu() {
			var _this5 = this;

			var localeLabel = this.props.locale == 'vi' ? 'english' : 'vietnamese';
			if (this.props.mode == 'mobile') {
				return _react2.default.createElement(
					'div',
					{ style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' } },
					_react2.default.createElement(
						'li',
						{ style: { marginTop: '15px' }, className: _main_style2.default.nav_item },
						_react2.default.createElement(
							'a',
							{ href: 'https://www.instagram.com/mas.architecture/', target: '_blank' },
							'Instagram'
						)
					),
					_react2.default.createElement(
						'li',
						{ className: _main_style2.default.nav_item },
						_react2.default.createElement(
							'a',
							{ href: 'https://www.facebook.com/masarchitect/', target: '_blank' },
							'Facebook'
						)
					),
					_react2.default.createElement(
						'li',
						{ style: { marginTop: '15px' }, className: _main_style2.default.nav_item },
						_react2.default.createElement(
							'a',
							{ onClick: function onClick() {
									return _this5.switchLang();
								} },
							localeLabel
						)
					)
				);
			} else {
				return null;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			switch (this.props.mode) {
				case 'desktop':
					var container = _main_style2.default.nav_bar_container;
					break;
				case 'mobile':
					var container = _main_style2.default.expanded_container;
					break;
				default:
					var container = _main_style2.default.expanded_container;
			}
			return _react2.default.createElement(
				'ul',
				{ className: container },
				_react2.default.createElement(
					'li',
					{ className: _main_style2.default.nav_item },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/about' },
						this.props.lang.about
					)
				),
				_react2.default.createElement(
					'li',
					{ className: _main_style2.default.nav_item },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/project_category' },
						this.props.lang.project
					)
				),
				_react2.default.createElement(
					'li',
					{ className: _main_style2.default.nav_item },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/blog' },
						this.props.lang.news
					)
				),
				_react2.default.createElement(
					'li',
					{ className: _main_style2.default.nav_item },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/contact' },
						this.props.lang.contact
					)
				),
				this._renderSubMenu()
			);
		}
	}]);

	return HeaderBarItems;
}(_react2.default.Component);

var FooterBar = exports.FooterBar = function (_React$Component4) {
	_inherits(FooterBar, _React$Component4);

	function FooterBar() {
		_classCallCheck(this, FooterBar);

		return _possibleConstructorReturn(this, (FooterBar.__proto__ || Object.getPrototypeOf(FooterBar)).apply(this, arguments));
	}

	_createClass(FooterBar, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _main_style2.default.footer_container },
				_react2.default.createElement(
					'div',
					{ className: _main_style2.default.footer_right },
					_react2.default.createElement(
						'h1',
						null,
						'MAS Architecture Workshop'
					),
					_react2.default.createElement(
						'h2',
						null,
						this.props.lang.address
					),
					_react2.default.createElement(
						'div',
						null,
						'T (+84) 0 236 3 863 885'
					),
					_react2.default.createElement(
						'div',
						null,
						'F (+84) 0 236 3 863 885'
					),
					_react2.default.createElement(
						'div',
						null,
						'M (+84) 0 905 007 550'
					),
					_react2.default.createElement(
						'div',
						null,
						'E vanphongkientrucmas@gmail.com'
					)
				)
			);
		}
	}]);

	return FooterBar;
}(_react2.default.Component);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function() {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/*** EXPORTS FROM exports-loader ***/
module.exports = global.fetch;
}.call(global));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(39);
    var insertCss = __webpack_require__(5);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./blog_style.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./blog_style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.cloudinaryModify = cloudinaryModify;
function cloudinaryModify(url, param) {
	if (url) {
		var position = url.indexOf('upload/') + 7;
		var output = [url.slice(0, position), param, '/', url.slice(position)].join('');
		return output;
	}
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _blog_style = __webpack_require__(8);

var _blog_style2 = _interopRequireDefault(_blog_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvailablePost = function (_React$Component) {
	_inherits(AvailablePost, _React$Component);

	function AvailablePost() {
		_classCallCheck(this, AvailablePost);

		return _possibleConstructorReturn(this, (AvailablePost.__proto__ || Object.getPrototypeOf(AvailablePost)).apply(this, arguments));
	}

	_createClass(AvailablePost, [{
		key: 'render',
		value: function render() {
			var date = this.props.data.publishedDate ? new Date(this.props.data.publishedDate) : new Date();
			var parsedDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
			var url = this.props.data.hinhDaiDien ? this.props.data.hinhDaiDien.url : '';
			return _react2.default.createElement(
				'div',
				{ className: _globalStyles2.default.main_flex_container },
				_react2.default.createElement(
					'div',
					{ className: _blog_style2.default.content_wrapper },
					_react2.default.createElement(
						'div',
						{ className: _globalStyles2.default.col_4 },
						_react2.default.createElement(
							'div',
							{ className: _blog_style2.default.content_right },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/post/" + this.props.data.slug },
								_react2.default.createElement('img', { src: url })
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: _globalStyles2.default.col_8 },
						_react2.default.createElement(
							'div',
							{ className: _blog_style2.default.content_left },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/post/" + this.props.data.slug, style: { textDecoration: 'none' } },
								_react2.default.createElement(
									'div',
									{ style: { marginTop: '10px', fontSize: '18px', fontWeight: 'bold', fontFamily: 'HelveticaNeue-Light' } },
									this.props.data.tieuDe
								),
								_react2.default.createElement('p', {
									style: { marginTop: '5px', fontSize: '18px', fontWeight: 'no', fontFamily: 'HelveticaNeue-Light' },
									dangerouslySetInnerHTML: { __html: this.props.data.noiDung.tomTat } }),
								_react2.default.createElement(
									'p',
									{ style: { color: 'gray' } },
									parsedDate
								)
							)
						)
					)
				)
			);
		}
	}]);

	return AvailablePost;
}(_react2.default.Component);

exports.default = AvailablePost;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _itemGrid_style = __webpack_require__(14);

var _itemGrid_style2 = _interopRequireDefault(_itemGrid_style);

var _utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemGrid = function (_React$Component) {
	_inherits(ItemGrid, _React$Component);

	function ItemGrid() {
		_classCallCheck(this, ItemGrid);

		return _possibleConstructorReturn(this, (ItemGrid.__proto__ || Object.getPrototypeOf(ItemGrid)).apply(this, arguments));
	}

	_createClass(ItemGrid, [{
		key: 'handleOnClick',
		value: function handleOnClick() {}
	}, {
		key: '_renderItem',
		value: function _renderItem() {
			var _this2 = this;

			var nodeList;
			switch (this.props.item) {
				case "project":
					nodeList = this.props.data.map(function (item, index) {
						var url = item.hinhDaiDien ? (0, _utils.cloudinaryModify)(item.hinhDaiDien.url, 'w_512') : null;
						return _react2.default.createElement(
							'li',
							{ className: _itemGrid_style2.default.item_container,
								key: index },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/project/" + item.key },
								_react2.default.createElement(
									'div',
									{ className: _itemGrid_style2.default.project_item,
										style: { backgroundImage: 'url(' + url + ')' } },
									_react2.default.createElement('div', { className: _itemGrid_style2.default.mask_item })
								),
								_react2.default.createElement(
									'div',
									{
										className: _itemGrid_style2.default.project_title },
									item.name
								),
								_react2.default.createElement(
									'div',
									{ className: _itemGrid_style2.default.project_address },
									item.diaChi
								)
							)
						);
					});
					return nodeList;

				case "profile":
					nodeList = this.props.data.map(function (item, index) {
						var url = item.anhDaiDien ? (0, _utils.cloudinaryModify)(item.anhDaiDien.url, 'w_512') : null;
						if (_this2.props.locale == "vi") {
							var name = item.name;
							var description = item.giaiThichTiengViet;
						} else {
							var name = item.englishName;
							var description = item.giaiThichTiengAnh;
						}
						return _react2.default.createElement(
							'li',
							{ className: _itemGrid_style2.default.item_container,
								key: index },
							_react2.default.createElement('div', { className: _itemGrid_style2.default.profile_item,
								style: { backgroundImage: 'url(' + url + ')' } }),
							_react2.default.createElement(
								'div',
								{ className: _itemGrid_style2.default.profile_title },
								name
							),
							_react2.default.createElement(
								'div',
								{ className: _itemGrid_style2.default.profile_description },
								description
							)
						);
					});
					return nodeList;

				default:
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _itemGrid_style2.default.grid_wrapper },
				_react2.default.createElement(
					'ul',
					{ className: _itemGrid_style2.default.grid },
					this._renderItem()
				)
			);
		}
	}]);

	return ItemGrid;
}(_react2.default.Component);

exports.default = ItemGrid;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _navBar_style = __webpack_require__(15);

var _navBar_style2 = _interopRequireDefault(_navBar_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
	_inherits(NavBar, _React$Component);

	function NavBar() {
		_classCallCheck(this, NavBar);

		return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
	}

	_createClass(NavBar, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _navBar_style2.default.wrapper },
				_react2.default.createElement(
					'div',
					{ className: _navBar_style2.default.nav_bar_container },
					this.props.children
				)
			);
		}
	}]);

	return NavBar;
}(_react2.default.Component);

exports.default = NavBar;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _navBar_style = __webpack_require__(15);

var _navBar_style2 = _interopRequireDefault(_navBar_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBarItem = function (_React$Component) {
	_inherits(NavBarItem, _React$Component);

	function NavBarItem() {
		_classCallCheck(this, NavBarItem);

		return _possibleConstructorReturn(this, (NavBarItem.__proto__ || Object.getPrototypeOf(NavBarItem)).apply(this, arguments));
	}

	_createClass(NavBarItem, [{
		key: 'handleOnclick',
		value: function handleOnclick() {
			_reactRouter.browserHistory.push(this.props.route);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: _navBar_style2.default.nav_bar_item, onClick: function onClick() {
						return _this2.handleOnclick();
					} },
				this.props.children
			);
		}
	}]);

	return NavBarItem;
}(_react2.default.Component);

exports.default = NavBarItem;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(35);
    var insertCss = __webpack_require__(5);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./itemGrid_style.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./itemGrid_style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(36);
    var insertCss = __webpack_require__(5);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./navBar_style.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./navBar_style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(38);
    var insertCss = __webpack_require__(5);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./about_style.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./about_style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(41);
    var insertCss = __webpack_require__(5);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./main_style.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./main_style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(42);
    var insertCss = __webpack_require__(5);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./project_style.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./project_style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-iframe");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _index = __webpack_require__(30);

var _index2 = _interopRequireDefault(_index);

var _blog = __webpack_require__(28);

var _blog2 = _interopRequireDefault(_blog);

var _project = __webpack_require__(32);

var _project2 = _interopRequireDefault(_project);

var _projectCategory = __webpack_require__(33);

var _projectCategory2 = _interopRequireDefault(_projectCategory);

var _about = __webpack_require__(27);

var _about2 = _interopRequireDefault(_about);

var _contact = __webpack_require__(29);

var _contact2 = _interopRequireDefault(_contact);

var _post = __webpack_require__(31);

var _post2 = _interopRequireDefault(_post);

var _staffCV = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"client/layout/staffCV.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _staffCV2 = _interopRequireDefault(_staffCV);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createElement(
	_reactRouter.Route,
	{ path: '/', component: function component(props) {
			return _react2.default.createElement(_index2.default, null);
		} },
	_react2.default.createElement(_reactRouter.Route, { path: '/about', component: function component(props) {
			return _react2.default.createElement(_about2.default, null);
		} }),
	_react2.default.createElement(_reactRouter.Route, { path: '/about/:type', component: function component(props) {
			return _react2.default.createElement(_about2.default, null);
		} }),
	_react2.default.createElement(_reactRouter.Route, { path: '/ourteam/:key', component: function component(props) {
			return _react2.default.createElement(_staffCV2.default, null);
		} }),
	_react2.default.createElement(_reactRouter.Route, { path: '/blog', component: function component(props) {
			return _react2.default.createElement(_blog2.default, null);
		} }),
	_react2.default.createElement(_reactRouter.Route, { path: '/post/:key', component: function component(props) {
			return _react2.default.createElement(_post2.default, null);
		} }),
	_react2.default.createElement(_reactRouter.Route, { path: '/project_category/:name', component: function component(props) {
			return _react2.default.createElement(_projectCategory2.default, null);
		} }),
	_react2.default.createElement(_reactRouter.Route, { path: '/project_category', component: function component(props) {
			return _react2.default.createElement(_projectCategory2.default, null);
		} }),
	_react2.default.createElement(_reactRouter.Route, { path: '/project/:name', component: function component(props) {
			return _react2.default.createElement(_project2.default, null);
		} }),
	_react2.default.createElement(_reactRouter.Route, { path: '/contact', component: function component(props) {
			return _react2.default.createElement(_contact2.default, null);
		} })
);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (html) {
    return "\n    <!DOCTYPE html>\n    <html>\n    <head>\n        <title>MAS Architecture</title>\n        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>\n        <link href='/css/bootstrap.min.css' rel='stylesheet'>\n        <link href='/css/stylesheet.css' rel='stylesheet'>\n        <link rel=\"icon\" type=\"image/png\" href=\"/images/favicon.png\">\n        <meta charset=\"utf-8\">\n    </head>\n    <body>\n        <div id=\"app\">" + html + "</div>\n        <script src=\"/bundle/bundle.js\"></script>\n    </body>\n    </html>\n";
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _about_style = __webpack_require__(16);

var _about_style2 = _interopRequireDefault(_about_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vi = {
    intro: 'Giới thiệu',
    design: 'Lĩnh vực thiết kế',
    construction: 'Lĩnh vực thi công',

    introPara: "Được thành lập từ năm 2009, trong quá trình xây dựng thương hiệu riêng MAS Architecture đã đạt được nhiều thành công trong lĩnh vực thiết kế và xây dựng. Công ty của chúng tôi là nơi tập họp các kiến trúc sư, kĩ sư trẻ đầy kĩ năng, thiết kế các giải pháp không gian thông minh. Điều quan trọng nhất từng bước tạo nên thành công của chúng tôi là phục vụ mọi khách hàng với tinh thần làm việc luôn luôn sáng tạo và trách nhiệm.",

    designPara: 'MAS Architecture chuyên thiết kế các công trình dân dụng và công nghiệp như : nhà phố, biệt thự, nhà hàng, khách sạn, bar, coffee, văn phòng ... Với tiêu chí “ Sáng tạo - Kinh nghiệm - Nhiệt huyết” , MAS Architecture mong muốn đem đến cho khách hàng một không gian sống thoải mái, sống động',

    constructionPara: 'MAS Architecture luôn hướng tới tiêu chí hoàn mỹ đến từng chi tiết, chúng tôi mong muốn đem đến cho khách hàng những sản phẩm ngoại nội thất sấc sảo chất lượng song song với những thành quả mà đội ngũ thiết kế gây dựng được. Với những cơ sở vật chất hiện có và kinh nghiệm hành nghề , chúng tôi hoàn toàn có thể tự tin đáp ứng được những khách hàng kĩ tính nhất.'
};

var en = {
    intro: 'Introduction',
    design: 'Design Team',
    construction: 'Construction Team',

    introPara: 'Established in 2009, through the progress of development MAS Architecture has achieved many success in the field of design and construction. Our company  is a gathering place for young architects and skilled engineers to design the solution for clever space. The most important step (part) which creates our success is the creativity and responsibility in service all customers who come to see us.',

    designPara: 'MAS Architecture design  civil & industrial architectural projects such as houses, villas, restaurant, hotel, bar, coffee, office ... With the slogan "Creativity - Experiences - Enthusiasm", MAS Architecture will bring you an active and comfortable living space.',

    constructionPara: 'The criteria of MAS Architecture is the perfection of every details, we provide you with high quality interior and exterior products together with the excellent results that is built by our design team. With the experiences and existing facilities, we are fully confident in satisfying the highest level of business.'
};

var General = function (_React$Component) {
    _inherits(General, _React$Component);

    function General(props) {
        _classCallCheck(this, General);

        var _this = _possibleConstructorReturn(this, (General.__proto__ || Object.getPrototypeOf(General)).call(this, props));

        _this.state = {
            lang: vi
        };
        return _this;
    }

    _createClass(General, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            switch (nextProps.locale) {
                case 'en':
                    this.setState({ lang: en });
                    break;
                default:
                    this.setState({ lang: vi });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            switch (this.props.locale) {
                case 'en':
                    this.setState({ lang: en });
                    break;
                default:
                    this.setState({ lang: vi });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _about_style2.default.wrapper },
                _react2.default.createElement(
                    'div',
                    { className: _globalStyles2.default.col_4 },
                    _react2.default.createElement(
                        'div',
                        { className: _about_style2.default.para_wrapper },
                        _react2.default.createElement(
                            'h1',
                            { className: _about_style2.default.title },
                            this.state.lang.intro
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _about_style2.default.para },
                            this.state.lang.introPara
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _globalStyles2.default.col_4 },
                    _react2.default.createElement(
                        'div',
                        { className: _about_style2.default.para_wrapper },
                        _react2.default.createElement(
                            'h1',
                            { className: _about_style2.default.title },
                            this.state.lang.design
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _about_style2.default.para },
                            this.state.lang.designPara
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _globalStyles2.default.col_4 },
                    _react2.default.createElement(
                        'div',
                        { className: _about_style2.default.para_wrapper },
                        _react2.default.createElement(
                            'h1',
                            { className: _about_style2.default.title },
                            this.state.lang.construction
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _about_style2.default.para },
                            this.state.lang.constructionPara
                        )
                    )
                )
            );
        }
    }]);

    return General;
}(_react2.default.Component);

exports.default = General;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _itemGrid_style = __webpack_require__(14);

var _itemGrid_style2 = _interopRequireDefault(_itemGrid_style);

var _ourTeam_style = __webpack_require__(44);

var _ourTeam_style2 = _interopRequireDefault(_ourTeam_style);

var _main = __webpack_require__(6);

var _main2 = _interopRequireDefault(_main);

var _itemGrid = __webpack_require__(11);

var _itemGrid2 = _interopRequireDefault(_itemGrid);

var _utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OurTeam = function (_React$Component) {
	_inherits(OurTeam, _React$Component);

	function OurTeam(props) {
		_classCallCheck(this, OurTeam);

		var _this = _possibleConstructorReturn(this, (OurTeam.__proto__ || Object.getPrototypeOf(OurTeam)).call(this, props));

		_this.state = {
			data: [],
			boss: {
				anhDaiDien: {
					url: ''
				}
			}
		};
		return _this;
	}

	_createClass(OurTeam, [{
		key: 'fetchOurTeamDataFromServer',
		value: function fetchOurTeamDataFromServer() {
			var _this2 = this;

			fetch('/api/our_team', {
				credentials: 'include',
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}).then(function (response) {
				return response.json();
			}).then(function (responseJson) {
				var data = responseJson.filter(function (item) {
					return item.chucVu != 0;
				});
				var boss = responseJson.find(function (item) {
					return item.chucVu == 0;
				});
				_this2.setState({ data: data, boss: boss });
				console.log('url:', _this2.state.boss);
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.fetchOurTeamDataFromServer();
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.props.locale == "vi") {
				var name = this.state.boss.name;
				var description = this.state.boss.giaiThichTiengViet;
			} else {
				var name = this.state.boss.englishName;
				var description = this.state.boss.giaiThichTiengAnh;
			}
			var url = (0, _utils.cloudinaryModify)(this.state.boss.anhDaiDien.url, 'w_512');
			return _react2.default.createElement(
				'div',
				{ className: _ourTeam_style2.default.our_team_container },
				_react2.default.createElement(
					'div',
					{ className: _ourTeam_style2.default.boss_container },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement('div', { className: _itemGrid_style2.default.profile_item,
							style: { backgroundImage: 'url(' + url + ')' } }),
						_react2.default.createElement(
							'div',
							{ className: _itemGrid_style2.default.profile_title },
							name
						),
						_react2.default.createElement(
							'div',
							{ className: _itemGrid_style2.default.profile_description },
							description
						)
					)
				),
				_react2.default.createElement(_itemGrid2.default, { locale: this.props.locale, item: "profile", data: this.state.data })
			);
		}
	}]);

	return OurTeam;
}(_react2.default.Component);

exports.default = OurTeam;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactPhotoGallery = __webpack_require__(51);

var _reactPhotoGallery2 = _interopRequireDefault(_reactPhotoGallery);

var _reactImageLightbox = __webpack_require__(50);

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

var _utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoGrid = function (_React$Component) {
	_inherits(PhotoGrid, _React$Component);

	function PhotoGrid(props) {
		_classCallCheck(this, PhotoGrid);

		var _this = _possibleConstructorReturn(this, (PhotoGrid.__proto__ || Object.getPrototypeOf(PhotoGrid)).call(this, props));

		_this.state = {
			photoIndex: 0,
			isOpen: false
		};
		_this.openLightbox = _this.openLightbox.bind(_this);
		return _this;
	}

	_createClass(PhotoGrid, [{
		key: 'openLightbox',
		value: function openLightbox(index, event) {
			console.log('index: ', index);
			event.preventDefault();
			this.setState({ photoIndex: index,
				isOpen: true });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var photos = this.props.photos.map(function (item) {
				var url = (0, _utils.cloudinaryModify)(item.url, 'w_512');
				return {
					src: url,
					width: item.width,
					height: item.height
				};
			});
			var images = this.props.photos.map(function (item) {
				return item.url;
			});
			var _state = this.state,
			    photoIndex = _state.photoIndex,
			    isOpen = _state.isOpen;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_reactPhotoGallery2.default, { photos: photos, cols: this.props.cols, onClickPhoto: this.openLightbox }),
				isOpen && _react2.default.createElement(_reactImageLightbox2.default, {
					mainSrc: images[photoIndex],
					nextSrc: images[(photoIndex + 1) % images.length],
					prevSrc: images[(photoIndex + images.length - 1) % images.length],

					onCloseRequest: function onCloseRequest() {
						return _this2.setState({ isOpen: false });
					},
					onMovePrevRequest: function onMovePrevRequest() {
						return _this2.setState({
							photoIndex: (photoIndex + images.length - 1) % images.length
						});
					},
					onMoveNextRequest: function onMoveNextRequest() {
						return _this2.setState({
							photoIndex: (photoIndex + 1) % images.length
						});
					}
				})
			);
		}
	}]);

	return PhotoGrid;
}(_react2.default.Component);

exports.default = PhotoGrid;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _getData = __webpack_require__(10);

var _getData2 = _interopRequireDefault(_getData);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _blog_style = __webpack_require__(8);

var _blog_style2 = _interopRequireDefault(_blog_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Press = function (_React$Component) {
	_inherits(Press, _React$Component);

	function Press(props) {
		_classCallCheck(this, Press);

		var _this = _possibleConstructorReturn(this, (Press.__proto__ || Object.getPrototypeOf(Press)).call(this, props));

		_this.state = {
			blogData: []
		};
		return _this;
	}

	_createClass(Press, [{
		key: 'fetchBlogPostsFromServer',
		value: function fetchBlogPostsFromServer() {
			var _this2 = this;

			fetch('/api/blog', {
				credentials: 'include',
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}).then(function (response) {
				return response.json();
			}).then(function (responseJson) {
				_this2.setState({ blogData: responseJson });
				console.log('fetch result: ', _this2.state.blogData);
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.fetchBlogPostsFromServer();
		}
	}, {
		key: 'render',
		value: function render() {
			var nodeList = this.state.blogData.map(function (item, index) {
				if (item.kieu == "press") {
					return _react2.default.createElement(_getData2.default, {
						data: item,
						indexKey: index
					});
				}
			});
			return _react2.default.createElement(
				'div',
				null,
				nodeList
			);
		}
	}]);

	return Press;
}(_react2.default.Component);

exports.default = Press;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _main = __webpack_require__(6);

var _main2 = _interopRequireDefault(_main);

var _navBar = __webpack_require__(12);

var _navBar2 = _interopRequireDefault(_navBar);

var _navBarItem = __webpack_require__(13);

var _navBarItem2 = _interopRequireDefault(_navBarItem);

var _ourTeam = __webpack_require__(24);

var _ourTeam2 = _interopRequireDefault(_ourTeam);

var _introduction = __webpack_require__(23);

var _introduction2 = _interopRequireDefault(_introduction);

var _press = __webpack_require__(26);

var _press2 = _interopRequireDefault(_press);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _about_style = __webpack_require__(16);

var _about_style2 = _interopRequireDefault(_about_style);

var _blog_style = __webpack_require__(8);

var _blog_style2 = _interopRequireDefault(_blog_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vi = {
    about: 'Hồ sơ',
    general: 'Giới thiệu',
    staff: 'Nhân sự',
    press: 'Truyền thông'
};

var en = {
    about: 'About',
    general: 'Introduction',
    staff: 'Our team',
    press: 'Press release'
};

var AboutPage = function (_React$Component) {
    _inherits(AboutPage, _React$Component);

    function AboutPage(props) {
        _classCallCheck(this, AboutPage);

        var _this = _possibleConstructorReturn(this, (AboutPage.__proto__ || Object.getPrototypeOf(AboutPage)).call(this, props));

        _this.state = {
            lang: vi
        };
        return _this;
    }

    _createClass(AboutPage, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            switch (nextProps.locale) {
                case 'en':
                    this.setState({ lang: en });
                    break;
                default:
                    this.setState({ lang: vi });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            switch (this.props.locale) {
                case 'en':
                    this.setState({ lang: en });
                    break;
                default:
                    this.setState({ lang: vi });
            }
        }
    }, {
        key: '_renderAbout',
        value: function _renderAbout() {
            switch (this.props.params.type) {
                case 'general':
                    return _react2.default.createElement(_introduction2.default, { locale: this.props.locale });
                case 'staff':
                    return _react2.default.createElement(_ourTeam2.default, { locale: this.props.locale });
                case 'press':
                    return _react2.default.createElement(_press2.default, { locale: this.props.locale });
                default:
                    return _react2.default.createElement(_introduction2.default, { locale: this.props.locale });

            }
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("Param", this.props.params.type);
            var categoryLabel = this.props.params.type ? this.state.lang[this.props.params.type] : 'general';
            return _react2.default.createElement(
                _main2.default,
                {
                    switchLang: this.props.switchLang,
                    locale: this.props.locale },
                _react2.default.createElement(
                    'div',
                    { style: { marginBottom: '10px' }, className: _globalStyles2.default.breadscrumb },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/about' },
                        this.state.lang.about
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: { margin: '0 10px' } },
                        ' | '
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: "/about/" + this.props.params.type },
                        categoryLabel
                    )
                ),
                _react2.default.createElement(
                    _navBar2.default,
                    null,
                    _react2.default.createElement(
                        _navBarItem2.default,
                        { route: '/about/general' },
                        this.state.lang.general
                    ),
                    _react2.default.createElement(
                        _navBarItem2.default,
                        { route: '/about/staff' },
                        this.state.lang.staff
                    ),
                    _react2.default.createElement(
                        _navBarItem2.default,
                        { route: '/about/press' },
                        this.state.lang.press
                    )
                ),
                this._renderAbout()
            );
        }
    }]);

    return AboutPage;
}(_react2.default.Component);

exports.default = AboutPage;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _blog_style = __webpack_require__(8);

var _blog_style2 = _interopRequireDefault(_blog_style);

var _getData = __webpack_require__(10);

var _getData2 = _interopRequireDefault(_getData);

var _main = __webpack_require__(6);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPage = function (_React$Component) {
	_inherits(BlogPage, _React$Component);

	function BlogPage(props) {
		_classCallCheck(this, BlogPage);

		var _this = _possibleConstructorReturn(this, (BlogPage.__proto__ || Object.getPrototypeOf(BlogPage)).call(this, props));

		_this.state = {
			blogData: []
		};
		return _this;
	}

	_createClass(BlogPage, [{
		key: 'fetchBlogPostsFromServer',
		value: function fetchBlogPostsFromServer() {
			var _this2 = this;

			fetch('/api/blog', {
				credentials: 'include',
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}).then(function (response) {
				return response.json();
			}).then(function (responseJson) {
				_this2.setState({ blogData: responseJson });
				console.log('fetch result: ', _this2.state.blogData);
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.fetchBlogPostsFromServer();
		}
	}, {
		key: 'render',
		value: function render() {
			var nodeList = this.state.blogData.map(function (item, index) {
				if (item.kieu == "news") {
					return _react2.default.createElement(_getData2.default, {
						data: item,
						indexKey: index
					});
				}
			});
			var blog = this.props.locale == 'vi' ? "TIN TỨC" : "BLOG";
			console.log("blog:", blog);
			return _react2.default.createElement(
				_main2.default,
				{
					switchLang: this.props.switchLang,
					locale: this.props.locale },
				_react2.default.createElement(
					'div',
					{ className: _globalStyles2.default.breadscrumb + ' ' + _blog_style2.default.breadscrumb },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/blog' },
						blog
					)
				),
				nodeList
			);
		}
	}]);

	return BlogPage;
}(_react2.default.Component);

exports.default = BlogPage;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _main = __webpack_require__(6);

var _main2 = _interopRequireDefault(_main);

var _reactIframe = __webpack_require__(19);

var _reactIframe2 = _interopRequireDefault(_reactIframe);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _main_style = __webpack_require__(17);

var _main_style2 = _interopRequireDefault(_main_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vi = {
    contact: 'liên hệ',
    address: '189 Thanh Thuỷ, Quận Hải Châu, TP.Đà Nẵng'
};

var en = {
    contact: 'contact',
    address: '189 Thanh Thuy Hai Chau District, Da Nang City, Vietnam'
};

var ContactPage = function (_React$Component) {
    _inherits(ContactPage, _React$Component);

    function ContactPage(props) {
        _classCallCheck(this, ContactPage);

        var _this = _possibleConstructorReturn(this, (ContactPage.__proto__ || Object.getPrototypeOf(ContactPage)).call(this, props));

        _this.state = {
            lang: vi
        };
        return _this;
    }

    _createClass(ContactPage, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            switch (nextProps.locale) {
                case 'en':
                    this.setState({ lang: en });
                    break;
                default:
                    this.setState({ lang: vi });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            switch (this.props.locale) {
                case 'en':
                    this.setState({ lang: en });
                    break;
                default:
                    this.setState({ lang: vi });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _main2.default,
                {
                    switchLang: this.props.switchLang,
                    locale: this.props.locale },
                _react2.default.createElement(
                    'div',
                    { style: { marginBottom: '30px' }, className: _globalStyles2.default.breadscrumb },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/contact' },
                        this.state.lang.contact
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _main_style2.default.map_container },
                    _react2.default.createElement(_reactIframe2.default, { url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.6065474345946!2d108.21297485005432!3d16.085894388816005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183f7bf7432b%3A0x7f010bc27f2fb9f5!2sMAS+Architecture!5e0!3m2!1sen!2sus!4v1504512952096', width: '100%', height: '100%', frameborder: '0', style: 'border:0', allowfullscreen: true })
                ),
                _react2.default.createElement(
                    'div',
                    { className: _main_style2.default.footer_container },
                    _react2.default.createElement(
                        'div',
                        { className: _main_style2.default.footer_right },
                        _react2.default.createElement(
                            'h1',
                            null,
                            'M.SPACE Co.,ltd'
                        ),
                        _react2.default.createElement(
                            'h1',
                            null,
                            'MAS Architecture Workshop'
                        ),
                        _react2.default.createElement(
                            'h2',
                            null,
                            this.state.lang.address
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            'T (+84) 0 236 3 863 885'
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            'F (+84) 0 236 3 863 885'
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            'M (+84) 0 905 007 550'
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            'E vanphongkientrucmas@gmail.com'
                        )
                    )
                )
            );
        }
    }]);

    return ContactPage;
}(_react2.default.Component);

exports.default = ContactPage;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CoverMenuItem = exports.CoverMenu = exports.LanguageMenu = exports.SlideShow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _nukaCarousel = __webpack_require__(49);

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

var _cloudinaryReact = __webpack_require__(48);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _index_style = __webpack_require__(45);

var _index_style2 = _interopRequireDefault(_index_style);

var _utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vi = {
	project: "công trình",
	news: "tin tức",
	about: "giới thiệu",
	contact: "liên hệ"
};

var en = {
	project: "portfolio",
	news: "news",
	about: "about",
	contact: "contact"
};

var myWindow = typeof window !== "undefined" ? window : {};

var IndexPage = function (_React$Component) {
	_inherits(IndexPage, _React$Component);

	function IndexPage(props) {
		_classCallCheck(this, IndexPage);

		var _this = _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props));

		_this.state = {
			lang: vi,
			step: 0,
			images: []
		};
		return _this;
	}

	_createClass(IndexPage, [{
		key: 'fetchSlidePhotoFromServer',
		value: function fetchSlidePhotoFromServer() {
			var _this2 = this;

			var portrait = typeof window !== "undefined" ? myWindow.matchMedia("(orientation: portrait)") : { matches: true };
			var orientation = portrait.matches ? 'portrait' : 'landscape';
			console.log('portrait: ', portrait);
			fetch('/api/slide/' + orientation, {
				credentials: 'include',
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}).then(function (response) {
				return response.json();
			}).then(function (responseJson) {
				console.log('fetch result: ', responseJson);
				_this2.setState({ images: responseJson });
			});
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			switch (nextProps.locale) {
				case 'en':
					this.setState({ lang: en });
					break;
				default:
					this.setState({ lang: vi });
			}
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			switch (this.props.locale) {
				case 'en':
					this.setState({ lang: en });
					break;
				default:
					this.setState({ lang: vi });
			}
			this.fetchSlidePhotoFromServer();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.setState({ lang: vi,
				step: 0,
				images: [] });
		}
	}, {
		key: 'switchStep',
		value: function switchStep(val) {
			this.setState({ step: val });
		}
	}, {
		key: '_renderMenu',
		value: function _renderMenu() {
			if (!this.state.step) {
				return _react2.default.createElement(LanguageMenu, {
					switchLang: this.props.switchLang,
					switchStep: this.switchStep.bind(this) });
			} else {
				return _react2.default.createElement(CoverMenu, { lang: this.state.lang });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _globalStyles2.default.main_container },
				_react2.default.createElement(
					'div',
					{ className: _index_style2.default.cover_container },
					_react2.default.createElement(SlideShow, { className: _index_style2.default.slide_show, images: this.state.images }),
					this._renderMenu()
				)
			);
		}
	}]);

	return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;

var SlideShow = exports.SlideShow = function (_React$Component2) {
	_inherits(SlideShow, _React$Component2);

	function SlideShow() {
		_classCallCheck(this, SlideShow);

		return _possibleConstructorReturn(this, (SlideShow.__proto__ || Object.getPrototypeOf(SlideShow)).apply(this, arguments));
	}

	_createClass(SlideShow, [{
		key: '_renderListPhoto',
		value: function _renderListPhoto() {
			var _this4 = this;

			var size = myWindow.outerWidth > myWindow.outerHeight ? myWindow.outerWidth : myWindow.outerHeight;
			if (size) {
				var resizeParam = 'w_' + size.toString();
			}
			var nodeList = this.props.images.map(function (item, index) {
				if (item.image.url) {
					// var url = cloudinaryModify(item.image.url,)
					console.log('index: ', index);
					if (index !== _this4.props.images.length - 1) {
						return _react2.default.createElement(
							'div',
							null,
							_react2.default.createElement('img', { className: _index_style2.default.carousel_img, src: item.image.url })
						);
					} else {
						console.log('last item');
						return _react2.default.createElement('img', { className: _index_style2.default.carousel_img, src: item.image.url });
					}
				}
			});
			return nodeList;
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				_nukaCarousel2.default,
				{
					dragging: false,
					edgeEasing: null,
					wrapAround: true,
					autoplay: true,
					autoplayInterval: 7000
				},
				this._renderListPhoto()
			);
		}
	}]);

	return SlideShow;
}(_react2.default.Component);

var LanguageMenu = exports.LanguageMenu = function (_React$Component3) {
	_inherits(LanguageMenu, _React$Component3);

	function LanguageMenu() {
		_classCallCheck(this, LanguageMenu);

		return _possibleConstructorReturn(this, (LanguageMenu.__proto__ || Object.getPrototypeOf(LanguageMenu)).apply(this, arguments));
	}

	_createClass(LanguageMenu, [{
		key: 'handleSwitchLanguage',
		value: function handleSwitchLanguage(locale) {
			this.props.switchLang(locale);
			this.props.switchStep(1);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this6 = this;

			return _react2.default.createElement(
				'div',
				{ className: _index_style2.default.cover_menu },
				_react2.default.createElement(
					'div',
					{ className: _index_style2.default.item_container },
					_react2.default.createElement(
						'div',
						{ style: { cursor: 'pointer' },
							onClick: function onClick(locale) {
								return _this6.handleSwitchLanguage('en');
							},
							className: _index_style2.default.menu_item },
						_react2.default.createElement(
							'h1',
							{ className: _index_style2.default.item_label },
							'English'
						)
					),
					_react2.default.createElement(
						'div',
						{ style: { cursor: 'pointer' },
							onClick: function onClick(locale) {
								return _this6.handleSwitchLanguage('vi');
							},
							className: _index_style2.default.menu_item },
						_react2.default.createElement(
							'h1',
							{ className: _index_style2.default.item_label },
							'Vietnamese'
						)
					)
				),
				_react2.default.createElement('img', { className: _index_style2.default.cover_logo, src: '/images/logo/transparent_lightgrey.png' })
			);
		}
	}]);

	return LanguageMenu;
}(_react2.default.Component);

var CoverMenu = exports.CoverMenu = function (_React$Component4) {
	_inherits(CoverMenu, _React$Component4);

	function CoverMenu() {
		_classCallCheck(this, CoverMenu);

		return _possibleConstructorReturn(this, (CoverMenu.__proto__ || Object.getPrototypeOf(CoverMenu)).apply(this, arguments));
	}

	_createClass(CoverMenu, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _index_style2.default.cover_menu },
				_react2.default.createElement(
					'div',
					{ className: _index_style2.default.item_container },
					_react2.default.createElement(
						CoverMenuItem,
						{ url: '/project_category' },
						this.props.lang.project
					),
					_react2.default.createElement(
						CoverMenuItem,
						{ url: '/blog' },
						this.props.lang.news
					),
					_react2.default.createElement(
						CoverMenuItem,
						{ url: '/about' },
						this.props.lang.about
					),
					_react2.default.createElement(
						CoverMenuItem,
						{ url: '/contact' },
						this.props.lang.contact
					)
				),
				_react2.default.createElement('img', { className: _index_style2.default.cover_logo, src: '/images/logo/transparent_lightgrey.png' })
			);
		}
	}]);

	return CoverMenu;
}(_react2.default.Component);

var CoverMenuItem = exports.CoverMenuItem = function (_React$Component5) {
	_inherits(CoverMenuItem, _React$Component5);

	function CoverMenuItem() {
		_classCallCheck(this, CoverMenuItem);

		return _possibleConstructorReturn(this, (CoverMenuItem.__proto__ || Object.getPrototypeOf(CoverMenuItem)).apply(this, arguments));
	}

	_createClass(CoverMenuItem, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactRouter.Link,
				{ style: { textDecoration: 'none' }, to: this.props.url },
				_react2.default.createElement(
					'div',
					{ className: _index_style2.default.menu_item },
					_react2.default.createElement(
						'h1',
						{ className: _index_style2.default.item_label },
						this.props.children
					)
				)
			);
		}
	}]);

	return CoverMenuItem;
}(_react2.default.Component);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Post = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _blog_style = __webpack_require__(8);

var _blog_style2 = _interopRequireDefault(_blog_style);

var _main = __webpack_require__(6);

var _main2 = _interopRequireDefault(_main);

var _reactIframe = __webpack_require__(19);

var _reactIframe2 = _interopRequireDefault(_reactIframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostPage = function (_React$Component) {
	_inherits(PostPage, _React$Component);

	function PostPage(props) {
		_classCallCheck(this, PostPage);

		var _this = _possibleConstructorReturn(this, (PostPage.__proto__ || Object.getPrototypeOf(PostPage)).call(this, props));

		_this.state = {
			data: {}
		};
		return _this;
	}

	_createClass(PostPage, [{
		key: 'fetchPostFromServer',
		value: function fetchPostFromServer() {
			var _this2 = this;

			fetch('/api/post/' + this.props.params.key, {
				credentials: 'include',
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}).then(function (response) {
				return response.json();
			}).then(function (responseJson) {
				console.log('fetch post result: ', responseJson);
				_this2.setState({ data: responseJson });
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.fetchPostFromServer();
		}
	}, {
		key: '_renderPostLink',
		value: function _renderPostLink() {
			return null;
		}
	}, {
		key: 'render',
		value: function render() {
			var blog = this.props.locale == 'vi' ? "TIN TỨC" : "BLOG";
			console.log("blog:", blog);
			return _react2.default.createElement(
				_main2.default,
				{
					switchLang: this.props.switchLang,
					locale: this.props.locale },
				_react2.default.createElement(
					'div',
					{ className: _globalStyles2.default.breadscrumb + ' ' + _blog_style2.default.breadscrumb },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/blog' },
						blog
					),
					this._renderPostLink()
				),
				_react2.default.createElement(Post, { data: this.state.data })
			);
		}
	}]);

	return PostPage;
}(_react2.default.Component);

exports.default = PostPage;

var Post = exports.Post = function (_React$Component2) {
	_inherits(Post, _React$Component2);

	function Post() {
		_classCallCheck(this, Post);

		return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
	}

	_createClass(Post, [{
		key: 'render',
		value: function render() {
			//	var date = (this.props.data.ngayDang)? new Date(this.props.data.ngayDang): new Date();
			var date = new Date();
			var youtubeUrl = this.props.data.youtubeLink ? this.props.data.youtubeLink : '';
			youtubeUrl = youtubeUrl.replace("watch?v=", "embed/");
			var parsedDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
			var content = this.props.data.noiDung ? this.props.data.noiDung.dayDu : '';
			var url = this.props.data.hinhDaiDien ? this.props.data.hinhDaiDien.url : '';
			var youtubeEmbeded = this.props.data.youtubeLink ? _react2.default.createElement(
				'div',
				{ className: _blog_style2.default.youtube_wrapper },
				_react2.default.createElement(_reactIframe2.default, { url: youtubeUrl, frameborder: '0', width: '100%', height: '100%', display: 'block', position: 'absolute', allowfullscreen: 'true' })
			) : null;
			return _react2.default.createElement(
				'div',
				{ className: _globalStyles2.default.main_flex_container },
				_react2.default.createElement(
					'div',
					{ className: _blog_style2.default.content_wrapper },
					_react2.default.createElement(
						'div',
						{ className: _globalStyles2.default.col_4 },
						_react2.default.createElement(
							'div',
							{ className: _blog_style2.default.content_left_wrapper },
							_react2.default.createElement(
								'div',
								{ className: _blog_style2.default.title },
								this.props.data.tieuDe
							),
							_react2.default.createElement(
								'p',
								{ className: _blog_style2.default.publishedDate },
								parsedDate
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: _globalStyles2.default.col_8 },
						_react2.default.createElement(
							'div',
							{ className: _blog_style2.default.content_right },
							youtubeEmbeded,
							_react2.default.createElement('img', { src: url, style: { padding: '10px' } }),
							_react2.default.createElement('p', { className: _blog_style2.default.title,
								style: { marginTop: '20px', fontWeight: '300' },
								dangerouslySetInnerHTML: { __html: content } })
						)
					)
				)
			);
		}
	}]);

	return Post;
}(_react2.default.Component);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProjectUnit = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _project_style = __webpack_require__(18);

var _project_style2 = _interopRequireDefault(_project_style);

var _main = __webpack_require__(6);

var _main2 = _interopRequireDefault(_main);

var _photoGrid = __webpack_require__(25);

var _photoGrid2 = _interopRequireDefault(_photoGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vi = {
	portfolio: 'công trình'
};

var en = {
	portfolio: 'portfolio'
};

var myWindow = typeof window !== "undefined" ? window : {};

var ProjectPage = function (_React$Component) {
	_inherits(ProjectPage, _React$Component);

	function ProjectPage(props) {
		_classCallCheck(this, ProjectPage);

		var _this = _possibleConstructorReturn(this, (ProjectPage.__proto__ || Object.getPrototypeOf(ProjectPage)).call(this, props));

		_this.state = {
			project: undefined,
			projectName: '',
			category: {},
			lang: vi
		};
		return _this;
	}

	_createClass(ProjectPage, [{
		key: 'fetchProjectFromServer',
		value: function fetchProjectFromServer() {
			var _this2 = this;

			var apiLink = '/api/project/' + this.props.params.name;
			fetch(apiLink, {
				credentials: 'include',
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}).then(function (response) {
				return response.json();
			}).then(function (responseJson) {
				var category = responseJson.theLoai[0] ? responseJson.theLoai[0] : {};
				console.log('theloai: ', category);
				_this2.setState({
					project: responseJson,
					category: category,
					projectName: responseJson.name
				});
				console.log('fetch result: ', _this2.state.project);
			});
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			switch (nextProps.locale) {
				case 'en':
					this.setState({ lang: en });
					break;
				default:
					this.setState({ lang: vi });
			}
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.fetchProjectFromServer();
			switch (this.props.locale) {
				case 'en':
					this.setState({ lang: en });
					break;
				default:
					this.setState({ lang: vi });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			console.log('state: ', this.state.category);
			var categoryLabel = this.props.locale == 'vi' ? this.state.category.name : this.state.category.tiengAnh;
			return _react2.default.createElement(
				_main2.default,
				{
					switchLang: this.props.switchLang,
					locale: this.props.locale },
				_react2.default.createElement(
					'div',
					{ style: { marginBottom: '10px' }, className: _globalStyles2.default.breadscrumb },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/project_category' },
						this.state.lang.portfolio
					),
					_react2.default.createElement(
						'span',
						{ style: { margin: '0 10px' } },
						' | '
					),
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: "/project_category/" + this.state.category.key },
						categoryLabel
					),
					_react2.default.createElement(
						'span',
						{ style: { margin: '0 10px' } },
						' | '
					),
					_react2.default.createElement(
						'a',
						null,
						this.state.projectName
					)
				),
				_react2.default.createElement(ProjectUnit, { data: this.state.project })
			);
		}
	}]);

	return ProjectPage;
}(_react2.default.Component);

exports.default = ProjectPage;

var ProjectUnit = exports.ProjectUnit = function (_React$Component2) {
	_inherits(ProjectUnit, _React$Component2);

	function ProjectUnit() {
		_classCallCheck(this, ProjectUnit);

		return _possibleConstructorReturn(this, (ProjectUnit.__proto__ || Object.getPrototypeOf(ProjectUnit)).apply(this, arguments));
	}

	_createClass(ProjectUnit, [{
		key: 'render',
		value: function render() {

			var description = this.props.data.giaiThichTiengViet.split("\n").map(function (i) {
				return _react2.default.createElement(
					'div',
					null,
					i
				);
			});
			var cols;
			var width = myWindow.innerWidth;
			if (width < 600) {
				cols = 2;
			} else {
				if (width >= 600 && width < 1000) {
					cols = 3;
				} else {
					cols = 4;
				}
			}
			console.log('width: ', width);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: _project_style2.default.cover_board },
					_react2.default.createElement('div', { className: _project_style2.default.cover_photo, style: { backgroundImage: "url(" + this.props.data.hinhDaiDien.url + ")" } })
				),
				_react2.default.createElement(
					'div',
					{ className: _project_style2.default.text_container },
					_react2.default.createElement(
						'h1',
						{ className: _project_style2.default.title },
						this.props.data.name
					),
					_react2.default.createElement(
						'div',
						{ className: _project_style2.default.description },
						description
					)
				),
				_react2.default.createElement(
					'div',
					{ className: _project_style2.default.grid_container },
					_react2.default.createElement(
						'div',
						{ style: { maxWidth: '1200px' } },
						_react2.default.createElement(_photoGrid2.default, { photos: this.props.data.hinhAnhCongTrinh, cols: cols })
					)
				)
			);
		}
	}]);

	return ProjectUnit;
}(_react2.default.Component);

// <div className={styles.date}>{this.props.data.ngayHoanThanh}</div>

ProjectUnit.defaultProps = {
	data: {
		giaiThichTiengAnh: "",
		giaiThichTiengViet: "",
		hinhAnhCongTrinh: [],
		hinhDaiDien: {
			secure_url: "",
			url: ""
		},
		key: "",
		name: "",
		ngayHoanThanh: "",
		publishedDate: "",
		theLoai: []
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1);

var _globalStyles = __webpack_require__(3);

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _project_style = __webpack_require__(18);

var _project_style2 = _interopRequireDefault(_project_style);

var _main = __webpack_require__(6);

var _main2 = _interopRequireDefault(_main);

var _navBar = __webpack_require__(12);

var _navBar2 = _interopRequireDefault(_navBar);

var _navBarItem = __webpack_require__(13);

var _navBarItem2 = _interopRequireDefault(_navBarItem);

var _itemGrid = __webpack_require__(11);

var _itemGrid2 = _interopRequireDefault(_itemGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vi = {
	portfolio: 'công trình'
};

var en = {
	portfolio: 'portfolio'
};

var ProjectCategory = function (_React$Component) {
	_inherits(ProjectCategory, _React$Component);

	function ProjectCategory(props) {
		_classCallCheck(this, ProjectCategory);

		var _this = _possibleConstructorReturn(this, (ProjectCategory.__proto__ || Object.getPrototypeOf(ProjectCategory)).call(this, props));

		_this.state = {
			categories: [],
			projects: [],
			lang: vi
		};
		return _this;
	}

	_createClass(ProjectCategory, [{
		key: 'fetchProjectCategoryFromServer',
		value: function fetchProjectCategoryFromServer() {
			var _this2 = this;

			fetch('/api/project_category', {
				credentials: 'include',
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}).then(function (response) {
				return response.json();
			}).then(function (responseJson) {
				_this2.setState({ categories: responseJson });
				console.log('fetch categories result: ', _this2.state.category);
			});
		}
	}, {
		key: 'fetchProjectsFromServer',
		value: function fetchProjectsFromServer(categoryName) {
			var _this3 = this;

			var apiParams = categoryName ? categoryName : 'all';
			fetch('/api/project_category/' + apiParams, {
				credentials: 'include',
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}).then(function (response) {
				return response.json();
			}).then(function (responseJson) {
				_this3.setState({ projects: responseJson });
				console.log('fetch projects result: ', _this3.state.projects);
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.fetchProjectCategoryFromServer();
			this.fetchProjectsFromServer(this.props.params.name);
			switch (this.props.locale) {
				case 'en':
					this.setState({ lang: en });
					break;
				default:
					this.setState({ lang: vi });
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.setState({ categories: [], projects: [] });
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.params.name != this.props.params.name) {
				this.fetchProjectsFromServer(nextProps.params.name);
			}
			switch (nextProps.locale) {
				case 'en':
					this.setState({ lang: en });
					break;
				default:
					this.setState({ lang: vi });
			}
		}
	}, {
		key: '_renderCategoryLink',
		value: function _renderCategoryLink() {
			var _this4 = this;

			if (this.props.params.name && this.state.categories.length) {
				var categories = this.state.categories;

				var locationKey = categories.findIndex(function (item) {
					return item.key == _this4.props.params.name;
				}); //tim index cua params hien tai trong this.state.categories
				console.log('locationKey: ', categories);
				var label = this.props.locale == 'vi' ? categories[locationKey].name : categories[locationKey].tiengAnh;
				return _react2.default.createElement(
					'span',
					null,
					' ',
					_react2.default.createElement(
						'span',
						{ style: { margin: '0 10px' } },
						'|'
					),
					' ',
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: "/project_category/" + this.props.params.name },
						label
					)
				);
			} else return null;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			console.log('locale: ', this.props.locale, this.state.lang);
			var nodeList = !this.state.categories.length ? null : this.state.categories.map(function (item) {
				var label = _this5.props.locale == 'vi' ? item.name : item.tiengAnh;
				return _react2.default.createElement(
					_navBarItem2.default,
					{ route: '/project_category/' + item.key },
					label
				);
			});
			var allText = this.props.locale == 'vi' ? 'Tất cả' : 'All Projects';
			console.log("lang", this.state.lang.portfolio);
			return _react2.default.createElement(
				_main2.default,
				{
					switchLang: this.props.switchLang,
					locale: this.props.locale },
				_react2.default.createElement(
					'div',
					{ className: _globalStyles2.default.breadscrumb },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/project_category' },
						this.state.lang.portfolio
					),
					this._renderCategoryLink()
				),
				_react2.default.createElement(
					_navBar2.default,
					null,
					_react2.default.createElement(
						_navBarItem2.default,
						{ route: '/project_category/' },
						allText
					),
					nodeList
				),
				_react2.default.createElement(_itemGrid2.default, { item: "project", data: this.state.projects })
			);
		}
	}]);

	return ProjectCategory;
}(_react2.default.Component);

exports.default = ProjectCategory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(22);

var _server2 = _interopRequireDefault(_server);

var _template = __webpack_require__(21);

var _template2 = _interopRequireDefault(_template);

var _reactRouter = __webpack_require__(1);

var _routes = __webpack_require__(20);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = function (req, res) {
   // match the routes to the url
   (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
      // `RouterContext` is what the `Router` renders. `Router` keeps these
      // `props` in its state as it listens to `browserHistory`. But on the
      // server our app is stateless, so we need to use `match` to
      // get these props before rendering.
      var html = _server2.default.renderToString(_react2.default.createElement(_reactRouter.RouterContext, props));
      var template = (0, _template2.default)(html);
      res.send(template);
   });
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.client-components-styles-___itemGrid_style__grid_wrapper___2eU03 {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin: 20px 0;\n}\n\n.client-components-styles-___itemGrid_style__grid___P_-mj {\n\tpadding-left: 9px;\n\tpadding-right: 9px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\twidth: 100%;\n\tmax-width: 1200px;\n}\n\n@media only screen and (min-width: 1200px) {\n\t.client-components-styles-___itemGrid_style__grid___P_-mj {\n\t\tpadding: 0;\n\t}\n}\n\n.client-components-styles-___itemGrid_style__project_title___1-pIv {\n\twidth: 45vw;\n\tmax-width: 320px;\n\tmargin-left: 3px;\n\ttext-transform: uppercase;\n\tfont-weight: 400;\n\tfont-size: 13px;\n\ttext-decoration: none;\n\tcolor: #505050;\n}\n\n.client-components-styles-___itemGrid_style__project_address___SFn_g {\n\twidth: 45vw;\n\tmax-width: 320px;\n\tmargin-left: 3px;\n\tfont-weight: 300;\n\tfont-size: 12px;\n\ttext-decoration: none;\n\tcolor: #505050;\n}\n\n.client-components-styles-___itemGrid_style__item_container___2bdUF {\n\tmax-width: 320px;\n\twidth: 50%;\n\tlist-style: none;\n\tmargin-bottom: 10px;\n}\n\n.client-components-styles-___itemGrid_style__item_container___2bdUF > a {\n\ttext-decoration: none;\n}\n\n.client-components-styles-___itemGrid_style__project_item___3BTWI {\n\t/*width: 45vw;*/\n    height: 27vw;\n\tmax-width: 320px;\n\tmax-height: 192px;\n    margin: 1px;\n    flex: 1;\n\tposition: relative;\n\tbackground-size: cover;\n}\n.client-components-styles-___itemGrid_style__item_container___2bdUF:hover .client-components-styles-___itemGrid_style__project_title___1-pIv{\n\tfont-weight: 600;\n}\n.client-components-styles-___itemGrid_style__item_container___2bdUF:hover .client-components-styles-___itemGrid_style__project_address___SFn_g{\n\tfont-weight: 600;\n}\n.client-components-styles-___itemGrid_style__item_container___2bdUF:hover .client-components-styles-___itemGrid_style__mask_item___2kkZt{\n\tbackground-color: #000;\n\topacity: 0.1;\n}\n.client-components-styles-___itemGrid_style__mask_item___2kkZt{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbackground-color: #000;\n\topacity: .5;\n\twidth: 100%;\n\theight: 100%;\n\tcontent: '';\n}\n\n.client-components-styles-___itemGrid_style__profile_item___sE8sj {\n\twidth: 45vw;\n    height: 45vw;\n\tmax-width: 256px;\n\tmax-height: 256px;\n    flex: 1;\n\tposition: relative;\n\tbackground-size: cover;\n\tfilter: grayscale(.7);\n}\n\n.client-components-styles-___itemGrid_style__profile_item___sE8sj:hover {\n\tfilter: grayscale(0);\n}\n\n.client-components-styles-___itemGrid_style__profile_title___1y7ao {\n   width: 45vw;\n   max-width: 256px;\n   text-transform: uppercase;\n   font-weight: 600;\n   text-decoration: none;\n   color: #212121;\n\n}\n\n.client-components-styles-___itemGrid_style__profile_description___9IewO {\n\tfont-size: 13px;\n\tfont-weight: 300;\n}\n", ""]);

// exports
exports.locals = {
	"grid_wrapper": "client-components-styles-___itemGrid_style__grid_wrapper___2eU03",
	"grid": "client-components-styles-___itemGrid_style__grid___P_-mj",
	"project_title": "client-components-styles-___itemGrid_style__project_title___1-pIv",
	"project_address": "client-components-styles-___itemGrid_style__project_address___SFn_g",
	"item_container": "client-components-styles-___itemGrid_style__item_container___2bdUF",
	"project_item": "client-components-styles-___itemGrid_style__project_item___3BTWI",
	"mask_item": "client-components-styles-___itemGrid_style__mask_item___2kkZt",
	"profile_item": "client-components-styles-___itemGrid_style__profile_item___sE8sj",
	"profile_title": "client-components-styles-___itemGrid_style__profile_title___1y7ao",
	"profile_description": "client-components-styles-___itemGrid_style__profile_description___9IewO"
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".client-components-styles-___navBar_style__nav_bar_container___3GyEG {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tpadding-left: 10px;\n    padding-right: 10px;\n\tmargin-top: 20px;\n}\n\n.client-components-styles-___navBar_style__nav_bar_item___6AGtp {\n\ttext-transform: uppercase;\n\tfont-weight: 300;\n\tcolor: #555;\n\tcursor: pointer;\n\tmargin-right: 30px;\n\tmargin-bottom: 10px;\n\ttransition: all 100ms linear;\n\t\n}\n\n.client-components-styles-___navBar_style__nav_bar_item___6AGtp:hover{\n\tcolor: #000;\n\tfont-weight: 500;\n}\n\n\n.client-components-styles-___navBar_style__wrapper___2GDQG {\n\tmax-width: 1200px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n@media only screen and (min-width: 1200px) {\n\t.client-components-styles-___navBar_style__nav_bar_container___3GyEG {\n\t\tpadding-left: 0px;\n\t}\n}\n", ""]);

// exports
exports.locals = {
	"nav_bar_container": "client-components-styles-___navBar_style__nav_bar_container___3GyEG",
	"nav_bar_item": "client-components-styles-___navBar_style__nav_bar_item___6AGtp",
	"wrapper": "client-components-styles-___navBar_style__wrapper___2GDQG"
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".client-components-styles-___ourTeam_style__our_team_container___14xOj {\n\tmargin: 20px 0;\n}\n\n.client-components-styles-___ourTeam_style__boss_container___YwowS {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-bottom: 10px;\n}\n", ""]);

// exports
exports.locals = {
	"our_team_container": "client-components-styles-___ourTeam_style__our_team_container___14xOj",
	"boss_container": "client-components-styles-___ourTeam_style__boss_container___YwowS"
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".client-layout-styles-___about_style__title___u9A5M{\n    font-weight: bold;\n    font-size: 14px;\n}\n\n.client-layout-styles-___about_style__para_wrapper___fHSH5{\n    padding:20px;\n}\n.client-layout-styles-___about_style__para___n6M0u{\n    font-size: 13px;\n    line-height: 1.5em;\n}\n\n.client-layout-styles-___about_style__wrapper___1EC3u{\n    text-align: justify;\n    letter-spacing: 0.01px;\n    padding-left: 8%;\n    padding-right: 8%;\n    display: flex;\n}\n\n@media (max-width: 700px) {\n  .client-layout-styles-___about_style__wrapper___1EC3u {\n      flex-direction: column;\n  }\n}\n\n@media (min-width: 700px) {\n  .client-layout-styles-___about_style__wrapper___1EC3u {\n      flex-direction: row;\n  }\n}\n", ""]);

// exports
exports.locals = {
	"title": "client-layout-styles-___about_style__title___u9A5M",
	"para_wrapper": "client-layout-styles-___about_style__para_wrapper___fHSH5",
	"para": "client-layout-styles-___about_style__para___n6M0u",
	"wrapper": "client-layout-styles-___about_style__wrapper___1EC3u"
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.client-layout-styles-___blog_style__content_left___3jzpd {\n\tpadding-right: 10px;\n\tpadding-left: 10px;\n}\n\n.client-layout-styles-___blog_style__content_left___3jzpd a{\n\tcolor: #515151;\n}\n\n.client-layout-styles-___blog_style__title___2vPQp\n{\n\tfont-size: 25px;\n\tfont-weight: 600;\n\tpadding-left: 0px;\n}\n.client-layout-styles-___blog_style__content_wrapper___1vQNM{\n\tdisplay: flex;\n\twidth: 800px;\n\tmargin-left: auto;\n    margin-right: auto;\n    border-bottom: solid 1px #e2e2e2;\n}\n.client-layout-styles-___blog_style__breadscrumb___2x2V7{\n\tmax-width: 800px;\n\tpadding-left: 0px;\n\tmargin-bottom: 10px;\n}\n.client-layout-styles-___blog_style__publishedDate___vZdkQ{\n\tfont-size: 12px;\n\tcolor: #545454;\n\tpadding-left: 0px;\n}\n@media only screen and (max-width:768px){\n.client-layout-styles-___blog_style__content_wrapper___1vQNM{\n\tflex-direction: column;\n}\n.client-layout-styles-___blog_style__breadscrumb___2x2V7{\n\tpadding-left: 10px;\n}\n.client-layout-styles-___blog_style__content_right___2LKXd {\n\tpadding: 10px;\n}\n.client-layout-styles-___blog_style__content_right___2LKXd img{\n\tpadding: 10px;\n}\n.client-layout-styles-___blog_style__title___2vPQp{\n\tpadding: 10px;\n}\n.client-layout-styles-___blog_style__publishedDate___vZdkQ{\n\tpadding: 10px;\n}\n}\n\n@media only screen and (min-width:768px){\n.client-layout-styles-___blog_style__content_left_wrapper___31C6h{\n\tposition: sticky; top: 10px;\n}\n}\n\n.client-layout-styles-___blog_style__content_left___3jzpd h1{\n\tmarginTop: 10px;\n\tfontSize: 5px;\n\tfontWeight: bold;\n\tfontFamily: HelveticaNeue-Light;\n}\n.client-layout-styles-___blog_style__content_right___2LKXd {\n\tpadding: 0px;\n}\n\n.client-layout-styles-___blog_style__content_right___2LKXd img {\n\tdisplay: block;\n\tobject-fit: contain;\n\twidth: 100%;\n}\n\n.client-layout-styles-___blog_style__youtube_wrapper___6De8G{\n\tposition: relative;\n\tpadding-bottom: 70%;\n\theight: 0;\n\toverflow: hidden;\n\tmargin-bottom: 10px;\n}\n", ""]);

// exports
exports.locals = {
	"content_left": "client-layout-styles-___blog_style__content_left___3jzpd",
	"title": "client-layout-styles-___blog_style__title___2vPQp",
	"content_wrapper": "client-layout-styles-___blog_style__content_wrapper___1vQNM",
	"breadscrumb": "client-layout-styles-___blog_style__breadscrumb___2x2V7",
	"publishedDate": "client-layout-styles-___blog_style__publishedDate___vZdkQ",
	"content_right": "client-layout-styles-___blog_style__content_right___2LKXd",
	"content_left_wrapper": "client-layout-styles-___blog_style__content_left_wrapper___31C6h",
	"youtube_wrapper": "client-layout-styles-___blog_style__youtube_wrapper___6De8G"
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".client-layout-styles-___index_style__cover_filter___5X3fm {\n\tposition: relative;\n\tcontent: 'asdfad';\n}\n.client-layout-styles-___index_style__cover_filter___5X3fm::after {\n\ttop: 0;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tcontent: '';\n\tbackground-color: black;\n\topacity: .7;\n\tpointer-events: none;\n}\n\n.client-layout-styles-___index_style__carousel_img___1L34r {\n\theight: 100vh;\n\tobject-fit: cover;\n}\n\n.client-layout-styles-___index_style__img_filter___3GzsN {\n\tposition: relative;\n\tcontent: '';\n}\n.client-layout-styles-___index_style__img_filter___3GzsN::after {\n\ttop: 0;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tcontent: '';\n\tbackground-color: black;\n\topacity: .5;\n}\n\n.client-layout-styles-___index_style__cover_container___1sWO4 {\n\tposition: relative;\n\t/*display: flex;*/\n\t/*justify-content: center;*/\n}\n\n.client-layout-styles-___index_style__slide_show___2yuFN {\n\tmin-height: 100vh;\n}\n\n.client-layout-styles-___index_style__cover_menu___3TUaD {\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-end;\n    justify-content: flex-end;\n\tpointer-events: none;\n\tbackground-color: rgba(0,0,0,0.6);\n}\n\n.client-layout-styles-___index_style__cover_logo___1afYI {\n\tmax-width: 400px;\n\tmargin: 0 20px 80px 0;\n}\n\n.client-layout-styles-___index_style__item_container___Pe9Xt {\n\tmargin-bottom: 15px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: flex-end;\n\twidth: 600px;\n\tpointer-events: all;\n\ttext-transform: uppercase;\n}\n\n@media only screen and (max-width: 700px) and (orientation: portrait) {\n\t.client-layout-styles-___index_style__cover_logo___1afYI {\n\t\tmax-width: 65vw!important;\n\t}\n\t.client-layout-styles-___index_style__item_container___Pe9Xt {\n\t\twidth: auto;\n\t}\n}\n\n@media only screen and (orientation: landscape) {\n\t.client-layout-styles-___index_style__cover_logo___1afYI {\n\t\tmax-width: 65vh!important;\n\t\tmargin-bottom: 60px;\n\t}\n\t.client-layout-styles-___index_style__item_container___Pe9Xt {\n\t\twidth: 100vh;\n\t}\n\n}\n\n.client-layout-styles-___index_style__menu_item___JS6XN {\n\n\tdisplay: flex;\n    justify-content: flex-end;\n    padding-right: 20px;\n    margin-bottom: 10px;\n\ttransition: background-color 500ms cubic-bezier(0, 0.57, 0.68, 0.74);\n\n}\n\n.client-layout-styles-___index_style__menu_item___JS6XN:hover {\n\n\tcolor: #fff;\n\topacity: 1;\n\n}\n\n\n.client-layout-styles-___index_style__item_label___2uyGS {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 15px;\n\tfont-weight: normal;\n    color: #fff;\n    opacity: .7;\n\tline-height: 2.5em;\n\ttransition: all 100ms linear;\n}\n.client-layout-styles-___index_style__item_label___2uyGS:hover{\n\tcursor: pointer;\n\topacity: 1;\n\tcolor: #fff;\n\tfont-weight: 600;\n}\n@media only screen and (max-width: 1024px) {\n\t.client-layout-styles-___index_style__menu_item___JS6XN {\n\t\twidth: 60vw;\n\t}\n}\n", ""]);

// exports
exports.locals = {
	"cover_filter": "client-layout-styles-___index_style__cover_filter___5X3fm",
	"carousel_img": "client-layout-styles-___index_style__carousel_img___1L34r",
	"img_filter": "client-layout-styles-___index_style__img_filter___3GzsN",
	"cover_container": "client-layout-styles-___index_style__cover_container___1sWO4",
	"slide_show": "client-layout-styles-___index_style__slide_show___2yuFN",
	"cover_menu": "client-layout-styles-___index_style__cover_menu___3TUaD",
	"cover_logo": "client-layout-styles-___index_style__cover_logo___1afYI",
	"item_container": "client-layout-styles-___index_style__item_container___Pe9Xt",
	"menu_item": "client-layout-styles-___index_style__menu_item___JS6XN",
	"item_label": "client-layout-styles-___index_style__item_label___2uyGS"
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".client-layout-styles-___main_style__header_container___2EW90 {\n\twidth: 100%;\n\t/*height: 60px;*/\n\tmax-height: 400px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tbox-shadow: 1px 1px 3px 0px #cacaca;\n\tposition: relative;\n\ttransition: height .15s ease-out;\n\tz-index: 100;\n}\n\n.client-layout-styles-___main_style__semi_container___3VhW2{\n\theight: 100%;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.client-layout-styles-___main_style__header_logo___2n7Vz {\n\theight: 50px;\n\tmargin-left: 10px;\n\topacity: 1;\n}\n\n.client-layout-styles-___main_style__menu_icon_container___FxiLG {\n\tpadding: 18px 10px;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tposition: absolute;\n    top: 0;\n    right: 0;\n}\n\n.client-layout-styles-___main_style__menu_icon___2Nklm {\n\twidth: auto;\n\theight: 24px;\n\topacity: .7;\n}\n\n.client-layout-styles-___main_style__nav_bar_container___248cn {\n\tdisplay: flex;\n\tmargin: 0 20px;\n\theight: 100%;\n}\n\n.client-layout-styles-___main_style__expanded_container___104Ox {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-end;\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n    margin-bottom: 6px;\n}\n\n.client-layout-styles-___main_style__nav_item___Kgt0c {\n\tlist-style: none;\n\theight: 100%;\n\tmargin-bottom: 4px;\n\ttext-transform: uppercase;\n\tcursor: pointer;\n}\n\n.client-layout-styles-___main_style__nav_item___Kgt0c a {\n\ttext-decoration: none;\n\tfont-size: 13px;\n    line-height: 1.5em;\n\tcolor: #505050;\n\ttransition: color 300ms linear;\n\theight: 100%;\n    display: flex;\n    align-items: center;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n}\n\n.client-layout-styles-___main_style__nav_item___Kgt0c:hover a {\n\tcolor: rgb(152,152,152);\n}\n\n.client-layout-styles-___main_style__main_content_body___2z674 {\n\theight: 100%;\n    position: relative;\n    flex: 1;\n\tfont-family: 'Helvetica Neue', sans-serif;\n}\n\n.client-layout-styles-___main_style__footer_container___1aKSw {\n\tbackground-color: #fff;\n\tmax-width: 1200px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n.client-layout-styles-___main_style__footer_container___1aKSw h1 {\n\tfont-size: 14px;\n\tline-height: 1.42857143;\n\tfont-weight: 400;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.client-layout-styles-___main_style__footer_container___1aKSw h2 {\n\tfont-size: 14px;\n\tline-height: 1.42857143;\n\tfont-weight: 400;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.client-layout-styles-___main_style__footer_left___1_gWc {\n\tpadding: 20px;\n\ttext-align: right;\n}\n\n.client-layout-styles-___main_style__footer_right___3pEW3 {\n\tpadding: 10px;\n}\n\n@media only screen and (min-width:1200px) {\n\t.client-layout-styles-___main_style__footer_right___3pEW3 {\n\t\tpadding-left: 0px;\n\n\t}\n}\n\n\n.client-layout-styles-___main_style__map_container___1GMAH {\n\tposition: relative;\n\twidth: 100%;\n\theight: 65vh;\n\tmax-width: 1200px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-bottom: 10px;\n}\n", ""]);

// exports
exports.locals = {
	"header_container": "client-layout-styles-___main_style__header_container___2EW90",
	"semi_container": "client-layout-styles-___main_style__semi_container___3VhW2",
	"header_logo": "client-layout-styles-___main_style__header_logo___2n7Vz",
	"menu_icon_container": "client-layout-styles-___main_style__menu_icon_container___FxiLG",
	"menu_icon": "client-layout-styles-___main_style__menu_icon___2Nklm",
	"nav_bar_container": "client-layout-styles-___main_style__nav_bar_container___248cn",
	"expanded_container": "client-layout-styles-___main_style__expanded_container___104Ox",
	"nav_item": "client-layout-styles-___main_style__nav_item___Kgt0c",
	"main_content_body": "client-layout-styles-___main_style__main_content_body___2z674",
	"footer_container": "client-layout-styles-___main_style__footer_container___1aKSw",
	"footer_left": "client-layout-styles-___main_style__footer_left___1_gWc",
	"footer_right": "client-layout-styles-___main_style__footer_right___3pEW3",
	"map_container": "client-layout-styles-___main_style__map_container___1GMAH"
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".client-layout-styles-___project_style__cover_photo___3moRs {\n\theight: 150px;\n\tmax-width: 1200px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground-image: url(http://res.cloudinary.com/masarchitect/image/upload/v1503404748/cong-trinhs/hinhDaiDien/jnitllytsjiezfbeibvg.jpg);\n\tbackground-size: cover;\n\tbackground-position: 50% 25%;\n\n}\n\n.client-layout-styles-___project_style__cover_board___3lQpA {\n\twidth: inherit;\n\tmargin-bottom: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n\t.client-layout-styles-___project_style__cover_photo___3moRs {\n\t\theight: 35vw;\n\t}\n}\n\n.client-layout-styles-___project_style__cover_board___3lQpA {\n\twidth: inherit;\n\tmargin-bottom: 10px;\n}\n\n.client-layout-styles-___project_style__title___4zlTa {\n\tmargin: 0 0 6px 0;\n\tpadding: 0;\n\tfont-size: 20px;\n\tline-height: 1.5em;\n\tfont-weight: 400;\n}\n\n.client-layout-styles-___project_style__date___2nWKb {\n\tcolor: #b2b2b2;\n    font-size: 12px;\n    line-height: 1em;\n    margin-bottom: 12px;\n}\n\n.client-layout-styles-___project_style__description___5pvZD {\n\tcolor: #1d2129;\n\tfont-size: 14px;\n\tline-height: 1.5em;\n\tmargin-bottom: 12px;\n}\n\n.client-layout-styles-___project_style__grid_container___or-dk {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.client-layout-styles-___project_style__text_container___28fMZ {\n\ttext-align: left;\n\tpadding-left: 10px;\n}\n\n@media only screen and (min-width:768px) {\n\t.client-layout-styles-___project_style__text_container___28fMZ {\n\t\ttext-align: center;\n\t\tpadding: 0;\n\t}\n}\n", ""]);

// exports
exports.locals = {
	"cover_photo": "client-layout-styles-___project_style__cover_photo___3moRs",
	"cover_board": "client-layout-styles-___project_style__cover_board___3lQpA",
	"title": "client-layout-styles-___project_style__title___4zlTa",
	"date": "client-layout-styles-___project_style__date___2nWKb",
	"description": "client-layout-styles-___project_style__description___5pvZD",
	"grid_container": "client-layout-styles-___project_style__grid_container___or-dk",
	"text_container": "client-layout-styles-___project_style__text_container___28fMZ"
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".client-styles-___globalStyles__main_container___3FTky {\n\twidth: 100%;\n\tmin-height: 100vh;\n\tposition: relative;\n\tdisplay: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n\n.client-styles-___globalStyles__main_flex_container___3sXbf {\n\tdisplay: flex;\n\tflex-direction: row;\n\n}\n\n.client-styles-___globalStyles__breadscrumb___y5-hB {\n\ttext-transform: uppercase;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 20px;\n\tmax-width: 1200px;\n\tpadding-left: 10px;\n}\n\n@media only screen and (min-width: 1200px) {\n\t.client-styles-___globalStyles__breadscrumb___y5-hB {\n\t\tpadding-left: 0px;\n\t}\n}\n\n.client-styles-___globalStyles__breadscrumb___y5-hB * {\n\tcolor: #505050;\n\tfont-size: 14px;\n\tfont-weight: 300;\n}\n\n.client-styles-___globalStyles__breadscrumb___y5-hB a {\n\ttext-decoration: none;\n\ttransition: all 100ms linear;\n}\n\n.client-styles-___globalStyles__breadscrumb___y5-hB a:hover{\n\tcolor: #000;\n\tfont-weight: 500;\n}\n\n/*@media only screen and (max-width: 700px) {\n\t.main_flex_container {\n\t\tflex-direction: column;\n\t}\n}*/\n\n.client-styles-___globalStyles__col_1___2L9cL {\n\tflex: 1;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n.client-styles-___globalStyles__col_2___37O4h {\n\tflex: 2;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n.client-styles-___globalStyles__col_3___3GLLz {\n\tflex: 3;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n.client-styles-___globalStyles__col_4___2p-0w {\n\tflex: 4;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n.client-styles-___globalStyles__col_5___1CXkS {\n\tflex: 5;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n.client-styles-___globalStyles__col_6___2EDia {\n\tflex: 6;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n.client-styles-___globalStyles__col_7___3Cwc2 {\n\tflex: 7;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n.client-styles-___globalStyles__col_8___lRPjs {\n\tflex: 8;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n.client-styles-___globalStyles__col_9___2bSRH {\n\tflex: 9;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n.client-styles-___globalStyles__col_10___VKNvl {\n\tflex: 10;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n.client-styles-___globalStyles__col_11___3Q_pl {\n\tflex: 11;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n.client-styles-___globalStyles__col_12___2q9Ip {\n\tflex: 12;\n\tmax-width: 100%;\n\twidth: 100%!important;\n}\n\n@media only screen and (max-width: 700px) {\n\tdiv[class*=\"col\"] {\n\t\tflex: 0 1 auto;\n\t}\n}\n", ""]);

// exports
exports.locals = {
	"main_container": "client-styles-___globalStyles__main_container___3FTky",
	"main_flex_container": "client-styles-___globalStyles__main_flex_container___3sXbf",
	"breadscrumb": "client-styles-___globalStyles__breadscrumb___y5-hB",
	"col_1": "client-styles-___globalStyles__col_1___2L9cL",
	"col_2": "client-styles-___globalStyles__col_2___37O4h",
	"col_3": "client-styles-___globalStyles__col_3___3GLLz",
	"col_4": "client-styles-___globalStyles__col_4___2p-0w",
	"col_5": "client-styles-___globalStyles__col_5___1CXkS",
	"col_6": "client-styles-___globalStyles__col_6___2EDia",
	"col_7": "client-styles-___globalStyles__col_7___3Cwc2",
	"col_8": "client-styles-___globalStyles__col_8___lRPjs",
	"col_9": "client-styles-___globalStyles__col_9___2bSRH",
	"col_10": "client-styles-___globalStyles__col_10___VKNvl",
	"col_11": "client-styles-___globalStyles__col_11___3Q_pl",
	"col_12": "client-styles-___globalStyles__col_12___2q9Ip"
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(37);
    var insertCss = __webpack_require__(5);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./ourTeam_style.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./ourTeam_style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(40);
    var insertCss = __webpack_require__(5);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./index_style.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./index_style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("cloudinary-react");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-photo-gallery");

/***/ })
/******/ ]);