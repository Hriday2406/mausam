/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

*{
    box-sizing: border-box;
}

body {
	padding: 3dvh 0px;
	font-family: "Roboto", sans-serif;
	color: white;
    background-color: black;
}

.container {
	height: 94dvh;
	width: 500px;
	margin: auto;
	padding: 50px;
	background-color: #0093E9;
	background-image: linear-gradient(160deg, #0093E9 0%, #75e6d8 100%);

	background-color: #0093E9;
	background-image: linear-gradient(300deg, #0093E9 0%, #75e6d8 100%);

	border-radius: 75px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

/* HEADER */

header {
	font-size: 1.5rem;
	height: 45px;
	margin-top: 20px;
	display: flex;
	gap: 10px;
	user-select: none;
}
.search {
	width: 350px;
	padding: 0px 20px;
	background-color: white;
	border-radius: 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px, rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
	cursor: pointer;
}
#searchBtn {
	display: grid;
	place-items: center;
	user-select: none;
}
#searchBtn:active{
	transform: scale(0.8);
}
.search svg {
	height: 25px;
	fill: grey;
}
input {
	font-size: 1.25rem;
	height: 42px;
	width: 100%;
	background: none;
	border: none;
	cursor: pointer;
}
input:focus {
	outline: none;
}
#toggle {
	color: black;
	font-size: 1.5rem;
	font-weight: bold;
	width: 45px;
	background-color: white;
	border: none;
	border-radius: 25px;
	box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
	display: grid;
	place-content: center;
	user-select: none;
	cursor: pointer;
	transition: transform 0.1s linear, background-color 0.2s ease-in;
}
#toggle:hover {
	background-color: #70ddd8;
	box-shadow: rgba(0, 0, 0, 0.116) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0) -3px -3px 6px 1px inset;
}
#toggle:active {
	transform: translateY(5px);
}

/* Main */

main {
	height: 400px;
	width: 300px;
	font-size: 3rem;
	user-select: none;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 0px;
	position: relative;
	bottom: 50px;
}
#location {
	margin-top: 20px;
}
.temperature {
	position: relative;
}
.temp {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 20px;
}
#tempValue {
	font-size: 7rem;
	margin-top: 20px;
}
.temp img {
	width: 25px;
	margin-bottom: 20px;
}
#feels {
	font-size: 1.25rem;
}
.feels {
	margin-left: 25px;
	position: relative;
	bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
}
.feels img {
	width: 10px;
	margin-bottom: 5px;
}

/* Footer */

footer {
	font-size: 1.5rem;
	height: 150px;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
}
.details {
	display: flex;
	align-items: center;
}
.details span{
	font-size: 3.5rem;
}
.details img{
	width: 150px;
	margin-right: -20px;
}
.humid img {
	margin-left: -40px;
}
.wind img {
	margin-left: -10px;
}

/* Made By */

#madeBy {
	font-size: 0.9rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	position: absolute;
	top: 100%;
}
#madeBy a{
	color: white;
}
#madeBy svg {
	width: 21px;
	fill: white;
}

/* Media Queries */

@media screen and (width <= 500px) {
	.container{
		width: 100vw;
	}
	header {
		width: 80vw;
	}
	#madeBy {
		width: 100vw;
		font-size: 0.75rem;
		flex-wrap: wrap;
	}
}

@media screen and (width <= 375px) {
	.container{
		padding: 35px;
	}
	header {
		width: 80vw;
	}
	main {
		padding-top: 40px;
	}
	#tempValue{
		font-size: 5rem;
	}
	#icon {
		scale: 0.75;
		margin-top: -30px;
	}
	.details span{
		font-size: 2.5rem;
	}
	.details img {
		width: 125px;
	}
	footer {
		margin-bottom: -50px;
	}
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;CACC,iBAAiB;CACjB,iCAAiC;CACjC,YAAY;IACT,uBAAuB;AAC3B;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,YAAY;CACZ,aAAa;CACb,yBAAyB;CACzB,mEAAmE;;CAEnE,yBAAyB;CACzB,mEAAmE;;CAEnE,mBAAmB;CACnB,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA,WAAW;;AAEX;CACC,iBAAiB;CACjB,YAAY;CACZ,gBAAgB;CAChB,aAAa;CACb,SAAS;CACT,iBAAiB;AAClB;AACA;CACC,YAAY;CACZ,iBAAiB;CACjB,uBAAuB;CACvB,mBAAmB;CACnB,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,0LAA0L;CAC1L,eAAe;AAChB;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,iBAAiB;AAClB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,YAAY;CACZ,UAAU;AACX;AACA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,gBAAgB;CAChB,YAAY;CACZ,eAAe;AAChB;AACA;CACC,aAAa;AACd;AACA;CACC,YAAY;CACZ,iBAAiB;CACjB,iBAAiB;CACjB,WAAW;CACX,uBAAuB;CACvB,YAAY;CACZ,mBAAmB;CACnB,sGAAsG;CACtG,aAAa;CACb,qBAAqB;CACrB,iBAAiB;CACjB,eAAe;CACf,gEAAgE;AACjE;AACA;CACC,yBAAyB;CACzB,gGAAgG;AACjG;AACA;CACC,0BAA0B;AAC3B;;AAEA,SAAS;;AAET;CACC,aAAa;CACb,YAAY;CACZ,eAAe;CACf,iBAAiB;CACjB,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,mBAAmB;CACnB,QAAQ;CACR,kBAAkB;CAClB,YAAY;AACb;AACA;CACC,gBAAgB;AACjB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,iBAAiB;AAClB;AACA;CACC,eAAe;CACf,gBAAgB;AACjB;AACA;CACC,WAAW;CACX,mBAAmB;AACpB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,QAAQ;AACT;AACA;CACC,WAAW;CACX,kBAAkB;AACnB;;AAEA,WAAW;;AAEX;CACC,iBAAiB;CACjB,aAAa;CACb,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;AACA;CACC,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,YAAY;CACZ,mBAAmB;AACpB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;;AAEA,YAAY;;AAEZ;CACC,iBAAiB;CACjB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,QAAQ;CACR,kBAAkB;CAClB,SAAS;AACV;AACA;CACC,YAAY;AACb;AACA;CACC,WAAW;CACX,WAAW;AACZ;;AAEA,kBAAkB;;AAElB;CACC;EACC,YAAY;CACb;CACA;EACC,WAAW;CACZ;CACA;EACC,YAAY;EACZ,kBAAkB;EAClB,eAAe;CAChB;AACD;;AAEA;CACC;EACC,aAAa;CACd;CACA;EACC,WAAW;CACZ;CACA;EACC,iBAAiB;CAClB;CACA;EACC,eAAe;CAChB;CACA;EACC,WAAW;EACX,iBAAiB;CAClB;CACA;EACC,iBAAiB;CAClB;CACA;EACC,YAAY;CACb;CACA;EACC,oBAAoB;CACrB;AACD","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tpadding: 3dvh 0px;\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\tcolor: white;\r\n    background-color: black;\r\n}\r\n\r\n.container {\r\n\theight: 94dvh;\r\n\twidth: 500px;\r\n\tmargin: auto;\r\n\tpadding: 50px;\r\n\tbackground-color: #0093E9;\r\n\tbackground-image: linear-gradient(160deg, #0093E9 0%, #75e6d8 100%);\r\n\r\n\tbackground-color: #0093E9;\r\n\tbackground-image: linear-gradient(300deg, #0093E9 0%, #75e6d8 100%);\r\n\r\n\tborder-radius: 75px;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n\tfont-size: 1.5rem;\r\n\theight: 45px;\r\n\tmargin-top: 20px;\r\n\tdisplay: flex;\r\n\tgap: 10px;\r\n\tuser-select: none;\r\n}\r\n.search {\r\n\twidth: 350px;\r\n\tpadding: 0px 20px;\r\n\tbackground-color: white;\r\n\tborder-radius: 25px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tbox-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px, rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;\r\n\tcursor: pointer;\r\n}\r\n#searchBtn {\r\n\tdisplay: grid;\r\n\tplace-items: center;\r\n\tuser-select: none;\r\n}\r\n#searchBtn:active{\r\n\ttransform: scale(0.8);\r\n}\r\n.search svg {\r\n\theight: 25px;\r\n\tfill: grey;\r\n}\r\ninput {\r\n\tfont-size: 1.25rem;\r\n\theight: 42px;\r\n\twidth: 100%;\r\n\tbackground: none;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\r\ninput:focus {\r\n\toutline: none;\r\n}\r\n#toggle {\r\n\tcolor: black;\r\n\tfont-size: 1.5rem;\r\n\tfont-weight: bold;\r\n\twidth: 45px;\r\n\tbackground-color: white;\r\n\tborder: none;\r\n\tborder-radius: 25px;\r\n\tbox-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;\r\n\tdisplay: grid;\r\n\tplace-content: center;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n\ttransition: transform 0.1s linear, background-color 0.2s ease-in;\r\n}\r\n#toggle:hover {\r\n\tbackground-color: #70ddd8;\r\n\tbox-shadow: rgba(0, 0, 0, 0.116) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0) -3px -3px 6px 1px inset;\r\n}\r\n#toggle:active {\r\n\ttransform: translateY(5px);\r\n}\r\n\r\n/* Main */\r\n\r\nmain {\r\n\theight: 400px;\r\n\twidth: 300px;\r\n\tfont-size: 3rem;\r\n\tuser-select: none;\r\n\ttext-align: center;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tgap: 0px;\r\n\tposition: relative;\r\n\tbottom: 50px;\r\n}\r\n#location {\r\n\tmargin-top: 20px;\r\n}\r\n.temperature {\r\n\tposition: relative;\r\n}\r\n.temp {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-left: 20px;\r\n}\r\n#tempValue {\r\n\tfont-size: 7rem;\r\n\tmargin-top: 20px;\r\n}\r\n.temp img {\r\n\twidth: 25px;\r\n\tmargin-bottom: 20px;\r\n}\r\n#feels {\r\n\tfont-size: 1.25rem;\r\n}\r\n.feels {\r\n\tmargin-left: 25px;\r\n\tposition: relative;\r\n\tbottom: 20px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n}\r\n.feels img {\r\n\twidth: 10px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n/* Footer */\r\n\r\nfooter {\r\n\tfont-size: 1.5rem;\r\n\theight: 150px;\r\n\tuser-select: none;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n.details {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.details span{\r\n\tfont-size: 3.5rem;\r\n}\r\n.details img{\r\n\twidth: 150px;\r\n\tmargin-right: -20px;\r\n}\r\n.humid img {\r\n\tmargin-left: -40px;\r\n}\r\n.wind img {\r\n\tmargin-left: -10px;\r\n}\r\n\r\n/* Made By */\r\n\r\n#madeBy {\r\n\tfont-size: 0.9rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n}\r\n#madeBy a{\r\n\tcolor: white;\r\n}\r\n#madeBy svg {\r\n\twidth: 21px;\r\n\tfill: white;\r\n}\r\n\r\n/* Media Queries */\r\n\r\n@media screen and (width <= 500px) {\r\n\t.container{\r\n\t\twidth: 100vw;\r\n\t}\r\n\theader {\r\n\t\twidth: 80vw;\r\n\t}\r\n\t#madeBy {\r\n\t\twidth: 100vw;\r\n\t\tfont-size: 0.75rem;\r\n\t\tflex-wrap: wrap;\r\n\t}\r\n}\r\n\r\n@media screen and (width <= 375px) {\r\n\t.container{\r\n\t\tpadding: 35px;\r\n\t}\r\n\theader {\r\n\t\twidth: 80vw;\r\n\t}\r\n\tmain {\r\n\t\tpadding-top: 40px;\r\n\t}\r\n\t#tempValue{\r\n\t\tfont-size: 5rem;\r\n\t}\r\n\t#icon {\r\n\t\tscale: 0.75;\r\n\t\tmargin-top: -30px;\r\n\t}\r\n\t.details span{\r\n\t\tfont-size: 2.5rem;\r\n\t}\r\n\t.details img {\r\n\t\twidth: 125px;\r\n\t}\r\n\tfooter {\r\n\t\tmargin-bottom: -50px;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPath: () => (/* binding */ getPath)
/* harmony export */ });
/* harmony import */ var _assests_1_clear_day_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assests/1/clear-day.svg */ "./src/assests/1/clear-day.svg");
/* harmony import */ var _assests_1_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assests/1/cloudy.svg */ "./src/assests/1/cloudy.svg");
/* harmony import */ var _assests_code_red_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assests/code-red.svg */ "./src/assests/code-red.svg");
/* harmony import */ var _assests_1_extreme_day_drizzle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assests/1/extreme-day-drizzle.svg */ "./src/assests/1/extreme-day-drizzle.svg");
/* harmony import */ var _assests_1_extreme_day_fog_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assests/1/extreme-day-fog.svg */ "./src/assests/1/extreme-day-fog.svg");
/* harmony import */ var _assests_1_extreme_day_hail_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assests/1/extreme-day-hail.svg */ "./src/assests/1/extreme-day-hail.svg");
/* harmony import */ var _assests_1_extreme_day_rain_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assests/1/extreme-day-rain.svg */ "./src/assests/1/extreme-day-rain.svg");
/* harmony import */ var _assests_1_extreme_day_sleet_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assests/1/extreme-day-sleet.svg */ "./src/assests/1/extreme-day-sleet.svg");
/* harmony import */ var _assests_1_extreme_day_snow_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assests/1/extreme-day-snow.svg */ "./src/assests/1/extreme-day-snow.svg");
/* harmony import */ var _assests_1_extreme_rain_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assests/1/extreme-rain.svg */ "./src/assests/1/extreme-rain.svg");
/* harmony import */ var _assests_1_extreme_sleet_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assests/1/extreme-sleet.svg */ "./src/assests/1/extreme-sleet.svg");
/* harmony import */ var _assests_1_extreme_snow_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assests/1/extreme-snow.svg */ "./src/assests/1/extreme-snow.svg");
/* harmony import */ var _assests_1_fog_day_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assests/1/fog-day.svg */ "./src/assests/1/fog-day.svg");
/* harmony import */ var _assests_1_fog_night_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assests/1/fog-night.svg */ "./src/assests/1/fog-night.svg");
/* harmony import */ var _assests_pollen_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assests/pollen.svg */ "./src/assests/pollen.svg");
/* harmony import */ var _assests_1_mist_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assests/1/mist.svg */ "./src/assests/1/mist.svg");
/* harmony import */ var _assests_1_overcast_day_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assests/1/overcast-day.svg */ "./src/assests/1/overcast-day.svg");
/* harmony import */ var _assests_1_overcast_day_drizzle_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assests/1/overcast-day-drizzle.svg */ "./src/assests/1/overcast-day-drizzle.svg");
/* harmony import */ var _assests_1_overcast_day_rain_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assests/1/overcast-day-rain.svg */ "./src/assests/1/overcast-day-rain.svg");
/* harmony import */ var _assests_1_overcast_day_snow_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assests/1/overcast-day-snow.svg */ "./src/assests/1/overcast-day-snow.svg");
/* harmony import */ var _assests_1_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assests/1/partly-cloudy-day.svg */ "./src/assests/1/partly-cloudy-day.svg");
/* harmony import */ var _assests_1_partly_cloudy_day_drizzle_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assests/1/partly-cloudy-day-drizzle.svg */ "./src/assests/1/partly-cloudy-day-drizzle.svg");
/* harmony import */ var _assests_1_partly_cloudy_day_hail_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assests/1/partly-cloudy-day-hail.svg */ "./src/assests/1/partly-cloudy-day-hail.svg");
/* harmony import */ var _assests_1_partly_cloudy_day_rain_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assests/1/partly-cloudy-day-rain.svg */ "./src/assests/1/partly-cloudy-day-rain.svg");
/* harmony import */ var _assests_1_partly_cloudy_day_sleet_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assests/1/partly-cloudy-day-sleet.svg */ "./src/assests/1/partly-cloudy-day-sleet.svg");
/* harmony import */ var _assests_1_partly_cloudy_day_snow_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assests/1/partly-cloudy-day-snow.svg */ "./src/assests/1/partly-cloudy-day-snow.svg");
/* harmony import */ var _assests_1_rain_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assests/1/rain.svg */ "./src/assests/1/rain.svg");
/* harmony import */ var _assests_1_sleet_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assests/1/sleet.svg */ "./src/assests/1/sleet.svg");
/* harmony import */ var _assests_1_snow_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assests/1/snow.svg */ "./src/assests/1/snow.svg");
/* harmony import */ var _assests_1_snowflake_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assests/1/snowflake.svg */ "./src/assests/1/snowflake.svg");
/* harmony import */ var _assests_1_thunderstorms_day_extreme_rain_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assests/1/thunderstorms-day-extreme-rain.svg */ "./src/assests/1/thunderstorms-day-extreme-rain.svg");
/* harmony import */ var _assests_1_thunderstorms_day_extreme_snow_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assests/1/thunderstorms-day-extreme-snow.svg */ "./src/assests/1/thunderstorms-day-extreme-snow.svg");
/* harmony import */ var _assests_1_thunderstorms_day_rain_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./assests/1/thunderstorms-day-rain.svg */ "./src/assests/1/thunderstorms-day-rain.svg");
/* harmony import */ var _assests_1_thunderstorms_day_snow_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./assests/1/thunderstorms-day-snow.svg */ "./src/assests/1/thunderstorms-day-snow.svg");
/* harmony import */ var _assests_1_thunderstorms_rain_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./assests/1/thunderstorms-rain.svg */ "./src/assests/1/thunderstorms-rain.svg");
/* harmony import */ var _assests_1_tornado_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./assests/1/tornado.svg */ "./src/assests/1/tornado.svg");
/* harmony import */ var _assests_1_wind_snow_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./assests/1/wind-snow.svg */ "./src/assests/1/wind-snow.svg");
/* harmony import */ var _assests_0_clear_night_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./assests/0/clear-night.svg */ "./src/assests/0/clear-night.svg");
/* harmony import */ var _assests_0_extreme_night_drizzle_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./assests/0/extreme-night-drizzle.svg */ "./src/assests/0/extreme-night-drizzle.svg");
/* harmony import */ var _assests_0_extreme_night_fog_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./assests/0/extreme-night-fog.svg */ "./src/assests/0/extreme-night-fog.svg");
/* harmony import */ var _assests_0_extreme_night_hail_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./assests/0/extreme-night-hail.svg */ "./src/assests/0/extreme-night-hail.svg");
/* harmony import */ var _assests_0_extreme_night_rain_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./assests/0/extreme-night-rain.svg */ "./src/assests/0/extreme-night-rain.svg");
/* harmony import */ var _assests_0_extreme_night_sleet_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./assests/0/extreme-night-sleet.svg */ "./src/assests/0/extreme-night-sleet.svg");
/* harmony import */ var _assests_0_extreme_night_snow_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./assests/0/extreme-night-snow.svg */ "./src/assests/0/extreme-night-snow.svg");
/* harmony import */ var _assests_0_overcast_night_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./assests/0/overcast-night.svg */ "./src/assests/0/overcast-night.svg");
/* harmony import */ var _assests_0_overcast_night_drizzle_svg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./assests/0/overcast-night-drizzle.svg */ "./src/assests/0/overcast-night-drizzle.svg");
/* harmony import */ var _assests_0_overcast_night_rain_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./assests/0/overcast-night-rain.svg */ "./src/assests/0/overcast-night-rain.svg");
/* harmony import */ var _assests_0_overcast_night_snow_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./assests/0/overcast-night-snow.svg */ "./src/assests/0/overcast-night-snow.svg");
/* harmony import */ var _assests_0_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./assests/0/partly-cloudy-night.svg */ "./src/assests/0/partly-cloudy-night.svg");
/* harmony import */ var _assests_0_partly_cloudy_night_drizzle_svg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./assests/0/partly-cloudy-night-drizzle.svg */ "./src/assests/0/partly-cloudy-night-drizzle.svg");
/* harmony import */ var _assests_0_partly_cloudy_night_hail_svg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./assests/0/partly-cloudy-night-hail.svg */ "./src/assests/0/partly-cloudy-night-hail.svg");
/* harmony import */ var _assests_0_partly_cloudy_night_rain_svg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./assests/0/partly-cloudy-night-rain.svg */ "./src/assests/0/partly-cloudy-night-rain.svg");
/* harmony import */ var _assests_0_partly_cloudy_night_sleet_svg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./assests/0/partly-cloudy-night-sleet.svg */ "./src/assests/0/partly-cloudy-night-sleet.svg");
/* harmony import */ var _assests_0_partly_cloudy_night_snow_svg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./assests/0/partly-cloudy-night-snow.svg */ "./src/assests/0/partly-cloudy-night-snow.svg");
/* harmony import */ var _assests_0_thunderstorms_night_extreme_rain_svg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./assests/0/thunderstorms-night-extreme-rain.svg */ "./src/assests/0/thunderstorms-night-extreme-rain.svg");
/* harmony import */ var _assests_0_thunderstorms_night_extreme_snow_svg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./assests/0/thunderstorms-night-extreme-snow.svg */ "./src/assests/0/thunderstorms-night-extreme-snow.svg");
/* harmony import */ var _assests_0_thunderstorms_night_rain_svg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./assests/0/thunderstorms-night-rain.svg */ "./src/assests/0/thunderstorms-night-rain.svg");
/* harmony import */ var _assests_0_thunderstorms_night_snow_svg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./assests/0/thunderstorms-night-snow.svg */ "./src/assests/0/thunderstorms-night-snow.svg");
// Day == 1
















// import notAvailable from './assests/1/not-available.svg';





















// Night == 0






















function getPath(code, isDay){
    switch (code) {
        case 1000:
            if(isDay) return _assests_1_clear_day_svg__WEBPACK_IMPORTED_MODULE_0__;
            return _assests_0_clear_night_svg__WEBPACK_IMPORTED_MODULE_37__;

        case 1003:
            if(isDay) return _assests_1_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_20__;
            return _assests_0_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_48__;

        case 1006:
            return _assests_1_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__;

        case 1009:
            if(isDay) return _assests_1_overcast_day_svg__WEBPACK_IMPORTED_MODULE_16__;
            return _assests_0_overcast_night_svg__WEBPACK_IMPORTED_MODULE_44__;

        case 1030:
            return _assests_1_mist_svg__WEBPACK_IMPORTED_MODULE_15__;

        case 1063:
            if(isDay) return _assests_1_partly_cloudy_day_rain_svg__WEBPACK_IMPORTED_MODULE_23__;
            return _assests_0_partly_cloudy_night_rain_svg__WEBPACK_IMPORTED_MODULE_51__;

        case 1066:
            if(isDay) return _assests_1_partly_cloudy_day_snow_svg__WEBPACK_IMPORTED_MODULE_25__;
            return _assests_0_partly_cloudy_night_snow_svg__WEBPACK_IMPORTED_MODULE_53__;

        case 1069:
            if(isDay) return _assests_1_partly_cloudy_day_sleet_svg__WEBPACK_IMPORTED_MODULE_24__;
            return _assests_0_partly_cloudy_night_sleet_svg__WEBPACK_IMPORTED_MODULE_52__;

        case 1072:
            if(isDay) return _assests_1_partly_cloudy_day_hail_svg__WEBPACK_IMPORTED_MODULE_22__;
            return _assests_0_partly_cloudy_night_hail_svg__WEBPACK_IMPORTED_MODULE_50__;

        case 1087:
            return _assests_1_thunderstorms_rain_svg__WEBPACK_IMPORTED_MODULE_34__;

        case 1114:
            return _assests_1_wind_snow_svg__WEBPACK_IMPORTED_MODULE_36__;

        case 1117:
            if(isDay) return _assests_1_extreme_day_snow_svg__WEBPACK_IMPORTED_MODULE_8__;
            return _assests_0_extreme_night_snow_svg__WEBPACK_IMPORTED_MODULE_43__;

        case 1135:
            if(isDay) return _assests_1_fog_day_svg__WEBPACK_IMPORTED_MODULE_12__;
            return _assests_1_fog_night_svg__WEBPACK_IMPORTED_MODULE_13__;

        case 1147:
            if(isDay) return _assests_1_extreme_day_fog_svg__WEBPACK_IMPORTED_MODULE_4__;
            return _assests_0_extreme_night_fog_svg__WEBPACK_IMPORTED_MODULE_39__;

        case 1150:
            if(isDay) return _assests_1_partly_cloudy_day_drizzle_svg__WEBPACK_IMPORTED_MODULE_21__;
            return _assests_0_partly_cloudy_night_drizzle_svg__WEBPACK_IMPORTED_MODULE_49__;

        case 1153:
            if(isDay) return _assests_1_partly_cloudy_day_drizzle_svg__WEBPACK_IMPORTED_MODULE_21__;
            return _assests_0_partly_cloudy_night_drizzle_svg__WEBPACK_IMPORTED_MODULE_49__;

        case 1168:
            if(isDay) return _assests_1_overcast_day_drizzle_svg__WEBPACK_IMPORTED_MODULE_17__;
            return _assests_0_overcast_night_drizzle_svg__WEBPACK_IMPORTED_MODULE_45__;

        case 1171:
            if(isDay) return _assests_1_extreme_day_drizzle_svg__WEBPACK_IMPORTED_MODULE_3__;
            return _assests_0_extreme_night_drizzle_svg__WEBPACK_IMPORTED_MODULE_38__;

        case 1180:
            if(isDay) return _assests_1_partly_cloudy_day_rain_svg__WEBPACK_IMPORTED_MODULE_23__;
            return _assests_0_partly_cloudy_night_rain_svg__WEBPACK_IMPORTED_MODULE_51__;

        case 1183:
            return _assests_1_rain_svg__WEBPACK_IMPORTED_MODULE_26__;

        case 1186:
            if(isDay) return _assests_1_partly_cloudy_day_rain_svg__WEBPACK_IMPORTED_MODULE_23__;
            return _assests_0_partly_cloudy_night_rain_svg__WEBPACK_IMPORTED_MODULE_51__;

        case 1189:
            if(isDay) return _assests_1_overcast_day_rain_svg__WEBPACK_IMPORTED_MODULE_18__;
            return _assests_0_overcast_night_rain_svg__WEBPACK_IMPORTED_MODULE_46__;

        case 1192:
            if(isDay) return _assests_1_extreme_day_rain_svg__WEBPACK_IMPORTED_MODULE_6__;
            return _assests_0_extreme_night_rain_svg__WEBPACK_IMPORTED_MODULE_41__;

        case 1195:
            if(isDay) return _assests_1_extreme_day_rain_svg__WEBPACK_IMPORTED_MODULE_6__;
            return _assests_0_extreme_night_rain_svg__WEBPACK_IMPORTED_MODULE_41__;

        case 1198:
            if(isDay) return _assests_1_partly_cloudy_day_hail_svg__WEBPACK_IMPORTED_MODULE_22__;
            return _assests_0_partly_cloudy_night_hail_svg__WEBPACK_IMPORTED_MODULE_50__;

        case 1201:
            if(isDay) return _assests_1_extreme_day_hail_svg__WEBPACK_IMPORTED_MODULE_5__;
            return _assests_0_extreme_night_hail_svg__WEBPACK_IMPORTED_MODULE_40__;

        case 1204:
            if(isDay) return _assests_1_partly_cloudy_day_sleet_svg__WEBPACK_IMPORTED_MODULE_24__;
            return _assests_0_partly_cloudy_night_sleet_svg__WEBPACK_IMPORTED_MODULE_52__;

        case 1207:
            if(isDay) return _assests_1_extreme_day_sleet_svg__WEBPACK_IMPORTED_MODULE_7__;
            return _assests_0_extreme_night_sleet_svg__WEBPACK_IMPORTED_MODULE_42__;

        case 1210:
            if(isDay) return _assests_1_partly_cloudy_day_snow_svg__WEBPACK_IMPORTED_MODULE_25__;
            return _assests_0_partly_cloudy_night_snow_svg__WEBPACK_IMPORTED_MODULE_53__;

        case 1213:
            return _assests_1_snow_svg__WEBPACK_IMPORTED_MODULE_28__;

        case 1216:
            if(isDay) return _assests_1_partly_cloudy_day_snow_svg__WEBPACK_IMPORTED_MODULE_25__;
            return _assests_0_partly_cloudy_night_snow_svg__WEBPACK_IMPORTED_MODULE_53__;

        case 1219:
            if(isDay) return _assests_1_overcast_day_snow_svg__WEBPACK_IMPORTED_MODULE_19__;
            return _assests_0_overcast_night_snow_svg__WEBPACK_IMPORTED_MODULE_47__;

        case 1222:
            if(isDay) return _assests_1_extreme_day_snow_svg__WEBPACK_IMPORTED_MODULE_8__;
            return _assests_0_extreme_night_snow_svg__WEBPACK_IMPORTED_MODULE_43__;

        case 1225:
            if(isDay) return _assests_1_extreme_day_snow_svg__WEBPACK_IMPORTED_MODULE_8__;
            return _assests_0_extreme_night_snow_svg__WEBPACK_IMPORTED_MODULE_43__;

        case 1237:
            return _assests_1_snowflake_svg__WEBPACK_IMPORTED_MODULE_29__;

        case 1240:
            return _assests_1_rain_svg__WEBPACK_IMPORTED_MODULE_26__;

        case 1243:
            return _assests_1_extreme_rain_svg__WEBPACK_IMPORTED_MODULE_9__;

        case 1246:
            return _assests_1_tornado_svg__WEBPACK_IMPORTED_MODULE_35__;

        case 1249:
            return _assests_1_sleet_svg__WEBPACK_IMPORTED_MODULE_27__;

        case 1252:
            return _assests_1_extreme_sleet_svg__WEBPACK_IMPORTED_MODULE_10__;

        case 1255:
            return _assests_1_snow_svg__WEBPACK_IMPORTED_MODULE_28__;

        case 1258:
            return _assests_1_extreme_snow_svg__WEBPACK_IMPORTED_MODULE_11__;

        case 1261:
            return _assests_1_snowflake_svg__WEBPACK_IMPORTED_MODULE_29__;

        case 1264:
            return _assests_1_snowflake_svg__WEBPACK_IMPORTED_MODULE_29__;

        case 1273:
            if(isDay) return _assests_1_thunderstorms_day_rain_svg__WEBPACK_IMPORTED_MODULE_32__;
            return _assests_0_thunderstorms_night_rain_svg__WEBPACK_IMPORTED_MODULE_56__;

        case 1276:
            if(isDay) return _assests_1_thunderstorms_day_extreme_rain_svg__WEBPACK_IMPORTED_MODULE_30__;
            return _assests_0_thunderstorms_night_extreme_rain_svg__WEBPACK_IMPORTED_MODULE_54__;

        case 1279:
            if(isDay) return _assests_1_thunderstorms_day_snow_svg__WEBPACK_IMPORTED_MODULE_33__;
            return _assests_0_thunderstorms_night_snow_svg__WEBPACK_IMPORTED_MODULE_57__;

        case 1282:
            if(isDay) return _assests_1_thunderstorms_day_extreme_snow_svg__WEBPACK_IMPORTED_MODULE_31__;
            return _assests_0_thunderstorms_night_extreme_snow_svg__WEBPACK_IMPORTED_MODULE_55__;

        case 2406:
            return _assests_pollen_svg__WEBPACK_IMPORTED_MODULE_14__;

        default:
            return _assests_code_red_svg__WEBPACK_IMPORTED_MODULE_2__;
    }
}



/***/ }),

/***/ "./src/assests/0/clear-night.svg":
/*!***************************************!*\
  !*** ./src/assests/0/clear-night.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc5c9e4da17d8f345e59.svg";

/***/ }),

/***/ "./src/assests/0/extreme-night-drizzle.svg":
/*!*************************************************!*\
  !*** ./src/assests/0/extreme-night-drizzle.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34f9002f7782e33ed6b4.svg";

/***/ }),

/***/ "./src/assests/0/extreme-night-fog.svg":
/*!*********************************************!*\
  !*** ./src/assests/0/extreme-night-fog.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3eefa283e856a08e1fc.svg";

/***/ }),

/***/ "./src/assests/0/extreme-night-hail.svg":
/*!**********************************************!*\
  !*** ./src/assests/0/extreme-night-hail.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7458173d9af93177a00b.svg";

/***/ }),

/***/ "./src/assests/0/extreme-night-rain.svg":
/*!**********************************************!*\
  !*** ./src/assests/0/extreme-night-rain.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d2fd258c88958534c6.svg";

/***/ }),

/***/ "./src/assests/0/extreme-night-sleet.svg":
/*!***********************************************!*\
  !*** ./src/assests/0/extreme-night-sleet.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e2768cfde0821ecade3.svg";

/***/ }),

/***/ "./src/assests/0/extreme-night-snow.svg":
/*!**********************************************!*\
  !*** ./src/assests/0/extreme-night-snow.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e7ea627051188823bd1.svg";

/***/ }),

/***/ "./src/assests/0/overcast-night-drizzle.svg":
/*!**************************************************!*\
  !*** ./src/assests/0/overcast-night-drizzle.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aebe11505001b5b924a5.svg";

/***/ }),

/***/ "./src/assests/0/overcast-night-rain.svg":
/*!***********************************************!*\
  !*** ./src/assests/0/overcast-night-rain.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b51f87b75f77cacef606.svg";

/***/ }),

/***/ "./src/assests/0/overcast-night-snow.svg":
/*!***********************************************!*\
  !*** ./src/assests/0/overcast-night-snow.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "875fd585852f30eb63c1.svg";

/***/ }),

/***/ "./src/assests/0/overcast-night.svg":
/*!******************************************!*\
  !*** ./src/assests/0/overcast-night.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46d534f028aa15aaffca.svg";

/***/ }),

/***/ "./src/assests/0/partly-cloudy-night-drizzle.svg":
/*!*******************************************************!*\
  !*** ./src/assests/0/partly-cloudy-night-drizzle.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30da5c34542ccb437437.svg";

/***/ }),

/***/ "./src/assests/0/partly-cloudy-night-hail.svg":
/*!****************************************************!*\
  !*** ./src/assests/0/partly-cloudy-night-hail.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5098d48857f24c50fa53.svg";

/***/ }),

/***/ "./src/assests/0/partly-cloudy-night-rain.svg":
/*!****************************************************!*\
  !*** ./src/assests/0/partly-cloudy-night-rain.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9db951ccfd3cee584cfc.svg";

/***/ }),

/***/ "./src/assests/0/partly-cloudy-night-sleet.svg":
/*!*****************************************************!*\
  !*** ./src/assests/0/partly-cloudy-night-sleet.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "234932b8463f83a70a16.svg";

/***/ }),

/***/ "./src/assests/0/partly-cloudy-night-snow.svg":
/*!****************************************************!*\
  !*** ./src/assests/0/partly-cloudy-night-snow.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fe6a7e3ee777fd5d18e.svg";

/***/ }),

/***/ "./src/assests/0/partly-cloudy-night.svg":
/*!***********************************************!*\
  !*** ./src/assests/0/partly-cloudy-night.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b2375a9ce70c22ba993.svg";

/***/ }),

/***/ "./src/assests/0/thunderstorms-night-extreme-rain.svg":
/*!************************************************************!*\
  !*** ./src/assests/0/thunderstorms-night-extreme-rain.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ac51aadb014bced0c84.svg";

/***/ }),

/***/ "./src/assests/0/thunderstorms-night-extreme-snow.svg":
/*!************************************************************!*\
  !*** ./src/assests/0/thunderstorms-night-extreme-snow.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07221fc76549e0c0d8e7.svg";

/***/ }),

/***/ "./src/assests/0/thunderstorms-night-rain.svg":
/*!****************************************************!*\
  !*** ./src/assests/0/thunderstorms-night-rain.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c70c6b3f72506fdc0d5a.svg";

/***/ }),

/***/ "./src/assests/0/thunderstorms-night-snow.svg":
/*!****************************************************!*\
  !*** ./src/assests/0/thunderstorms-night-snow.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4ce2963c638f905f142.svg";

/***/ }),

/***/ "./src/assests/1/clear-day.svg":
/*!*************************************!*\
  !*** ./src/assests/1/clear-day.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2909a175d21b0bc0a0c5.svg";

/***/ }),

/***/ "./src/assests/1/cloudy.svg":
/*!**********************************!*\
  !*** ./src/assests/1/cloudy.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73c058e1e92399013d7c.svg";

/***/ }),

/***/ "./src/assests/1/extreme-day-drizzle.svg":
/*!***********************************************!*\
  !*** ./src/assests/1/extreme-day-drizzle.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c07f320e3aad45878b0.svg";

/***/ }),

/***/ "./src/assests/1/extreme-day-fog.svg":
/*!*******************************************!*\
  !*** ./src/assests/1/extreme-day-fog.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82e30310e8ddd9e3aed3.svg";

/***/ }),

/***/ "./src/assests/1/extreme-day-hail.svg":
/*!********************************************!*\
  !*** ./src/assests/1/extreme-day-hail.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eda0b91ace3742408663.svg";

/***/ }),

/***/ "./src/assests/1/extreme-day-rain.svg":
/*!********************************************!*\
  !*** ./src/assests/1/extreme-day-rain.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6e7051bb1db8817f8ea.svg";

/***/ }),

/***/ "./src/assests/1/extreme-day-sleet.svg":
/*!*********************************************!*\
  !*** ./src/assests/1/extreme-day-sleet.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50fbbeacd5bfeed542cf.svg";

/***/ }),

/***/ "./src/assests/1/extreme-day-snow.svg":
/*!********************************************!*\
  !*** ./src/assests/1/extreme-day-snow.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfdef5ebd5ae28b005c5.svg";

/***/ }),

/***/ "./src/assests/1/extreme-rain.svg":
/*!****************************************!*\
  !*** ./src/assests/1/extreme-rain.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c29055b8e294e9cbe0a.svg";

/***/ }),

/***/ "./src/assests/1/extreme-sleet.svg":
/*!*****************************************!*\
  !*** ./src/assests/1/extreme-sleet.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "111a73ccfbb8b565137b.svg";

/***/ }),

/***/ "./src/assests/1/extreme-snow.svg":
/*!****************************************!*\
  !*** ./src/assests/1/extreme-snow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b85c8fffa51e4c919af.svg";

/***/ }),

/***/ "./src/assests/1/fog-day.svg":
/*!***********************************!*\
  !*** ./src/assests/1/fog-day.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94de42609425afc681ff.svg";

/***/ }),

/***/ "./src/assests/1/fog-night.svg":
/*!*************************************!*\
  !*** ./src/assests/1/fog-night.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81f7d9d9eb457a607573.svg";

/***/ }),

/***/ "./src/assests/1/mist.svg":
/*!********************************!*\
  !*** ./src/assests/1/mist.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32e665d921e74ac88afb.svg";

/***/ }),

/***/ "./src/assests/1/overcast-day-drizzle.svg":
/*!************************************************!*\
  !*** ./src/assests/1/overcast-day-drizzle.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e92c660df6ca43a7a005.svg";

/***/ }),

/***/ "./src/assests/1/overcast-day-rain.svg":
/*!*********************************************!*\
  !*** ./src/assests/1/overcast-day-rain.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a538d8ceb5b9172a053.svg";

/***/ }),

/***/ "./src/assests/1/overcast-day-snow.svg":
/*!*********************************************!*\
  !*** ./src/assests/1/overcast-day-snow.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4aa36f929f3c2fe5adbe.svg";

/***/ }),

/***/ "./src/assests/1/overcast-day.svg":
/*!****************************************!*\
  !*** ./src/assests/1/overcast-day.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "498d76a18ad369b4c695.svg";

/***/ }),

/***/ "./src/assests/1/partly-cloudy-day-drizzle.svg":
/*!*****************************************************!*\
  !*** ./src/assests/1/partly-cloudy-day-drizzle.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3be0f3932cc21ca9b51.svg";

/***/ }),

/***/ "./src/assests/1/partly-cloudy-day-hail.svg":
/*!**************************************************!*\
  !*** ./src/assests/1/partly-cloudy-day-hail.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6559df47b46d9b18e71.svg";

/***/ }),

/***/ "./src/assests/1/partly-cloudy-day-rain.svg":
/*!**************************************************!*\
  !*** ./src/assests/1/partly-cloudy-day-rain.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "724fdae4c6d8a247aca8.svg";

/***/ }),

/***/ "./src/assests/1/partly-cloudy-day-sleet.svg":
/*!***************************************************!*\
  !*** ./src/assests/1/partly-cloudy-day-sleet.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7b708c4d31c9ee57958.svg";

/***/ }),

/***/ "./src/assests/1/partly-cloudy-day-snow.svg":
/*!**************************************************!*\
  !*** ./src/assests/1/partly-cloudy-day-snow.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fb3d091ec6a01dbab13.svg";

/***/ }),

/***/ "./src/assests/1/partly-cloudy-day.svg":
/*!*********************************************!*\
  !*** ./src/assests/1/partly-cloudy-day.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea586e392a42a659bbeb.svg";

/***/ }),

/***/ "./src/assests/1/rain.svg":
/*!********************************!*\
  !*** ./src/assests/1/rain.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb1a2bbd4f9a77310902.svg";

/***/ }),

/***/ "./src/assests/1/sleet.svg":
/*!*********************************!*\
  !*** ./src/assests/1/sleet.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ccdf57f0dcfbd97aa60a.svg";

/***/ }),

/***/ "./src/assests/1/snow.svg":
/*!********************************!*\
  !*** ./src/assests/1/snow.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b5c4da6db9fa38052a6.svg";

/***/ }),

/***/ "./src/assests/1/snowflake.svg":
/*!*************************************!*\
  !*** ./src/assests/1/snowflake.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31a9169c45826b5e0de8.svg";

/***/ }),

/***/ "./src/assests/1/thunderstorms-day-extreme-rain.svg":
/*!**********************************************************!*\
  !*** ./src/assests/1/thunderstorms-day-extreme-rain.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f91c69c01d0bbd22ea75.svg";

/***/ }),

/***/ "./src/assests/1/thunderstorms-day-extreme-snow.svg":
/*!**********************************************************!*\
  !*** ./src/assests/1/thunderstorms-day-extreme-snow.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50e97861eed77c81c794.svg";

/***/ }),

/***/ "./src/assests/1/thunderstorms-day-rain.svg":
/*!**************************************************!*\
  !*** ./src/assests/1/thunderstorms-day-rain.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf2f560fa53ddceb4611.svg";

/***/ }),

/***/ "./src/assests/1/thunderstorms-day-snow.svg":
/*!**************************************************!*\
  !*** ./src/assests/1/thunderstorms-day-snow.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10812d2d9e4501647640.svg";

/***/ }),

/***/ "./src/assests/1/thunderstorms-rain.svg":
/*!**********************************************!*\
  !*** ./src/assests/1/thunderstorms-rain.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed8ba2278ab5ce39ad97.svg";

/***/ }),

/***/ "./src/assests/1/tornado.svg":
/*!***********************************!*\
  !*** ./src/assests/1/tornado.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2fd389ce41a8efea4f0.svg";

/***/ }),

/***/ "./src/assests/1/wind-snow.svg":
/*!*************************************!*\
  !*** ./src/assests/1/wind-snow.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "679b92ab6b45067cfa8b.svg";

/***/ }),

/***/ "./src/assests/c.png":
/*!***************************!*\
  !*** ./src/assests/c.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b587ec09b69ce7b97c6e.png";

/***/ }),

/***/ "./src/assests/code-red.svg":
/*!**********************************!*\
  !*** ./src/assests/code-red.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae90250dc24c3c4b95ff.svg";

/***/ }),

/***/ "./src/assests/f.png":
/*!***************************!*\
  !*** ./src/assests/f.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e98c7b8cdc96053045a0.png";

/***/ }),

/***/ "./src/assests/humidity.svg":
/*!**********************************!*\
  !*** ./src/assests/humidity.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e11b2f5b3c042971acc5.svg";

/***/ }),

/***/ "./src/assests/pollen.svg":
/*!********************************!*\
  !*** ./src/assests/pollen.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f6f9f2faca69e4f6697.svg";

/***/ }),

/***/ "./src/assests/wind.svg":
/*!******************************!*\
  !*** ./src/assests/wind.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cb5f330e4d8f7ec5630.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/icons.js");
/* harmony import */ var _assests_humidity_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assests/humidity.svg */ "./src/assests/humidity.svg");
/* harmony import */ var _assests_wind_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assests/wind.svg */ "./src/assests/wind.svg");
/* harmony import */ var _assests_c_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assests/c.png */ "./src/assests/c.png");
/* harmony import */ var _assests_f_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assests/f.png */ "./src/assests/f.png");








const btn = document.getElementById('searchBtn');
const input = document.getElementById('search');
const toggle = document.getElementById('toggle');
const humidIcon = document.getElementById('humidIcon');
const windIcon = document.getElementById('windIcon');

const name = document.getElementById('location');
const temp = document.getElementById('tempValue');
const feels = document.getElementById('feelsValue');
const icon = document.getElementById('icon');
const humid = document.getElementById('humidValue');
const wind = document.getElementById('windValue');
const unitLabel = document.querySelectorAll('.unit');

function setLoader() {
    name.textContent = '__';
    icon.src = (0,_icons__WEBPACK_IMPORTED_MODULE_1__.getPath)(2406, 0);
    temp.textContent = '--';
    feels.textContent = '__';
    feels.dataset.value = '__';
    temp.dataset.value = '__';
    humid.textContent = '__';
    wind.textContent = '__';
}

async function getData(location) {
    try {
        setLoader();
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=233cfebb578a433d928121208242202&q=${location}`, {mode: 'cors'});
        const data = await response.json();

        if(response.status == 200){
            const name = data.location.name;
            const feelsC = data.current.feelslike_c;
            const feelsF = data.current.feelslike_f;
            const tempC = data.current.temp_c;
            const tempF = data.current.temp_f;
            const code = data.current.condition.code;
            const isDay = data.current.is_day;
            const humid = data.current.humidity;
            const wind = data.current.wind_kph;

            return {feelsC, feelsF, tempC, tempF, name, code, isDay, humid, wind};
        }else throw new Error(error);
    } catch(error) {
        throw new Error(error);
    }
}

async function updateDOM() {
    try {
        const inp = input.value == '' ? 'New Delhi' : input.value;
        input.value = '';
        const unit = toggle.dataset.unit;
        let data = await getData(inp);
        
        name.textContent = data.name;
        icon.src = (0,_icons__WEBPACK_IMPORTED_MODULE_1__.getPath)(data.code, data.isDay);
        humid.textContent = data.humid;
        wind.textContent = data.wind;
        if(unit == 'c'){
            feels.textContent = data.feelsC;
            temp.textContent = data.tempC;
            feels.dataset.value = data.feelsF;
            temp.dataset.value = data.tempF;
        } else {
            feels.textContent = data.feelsF;
            temp.textContent = data.tempF;
            feels.dataset.value = data.feelsC;
            temp.dataset.value = data.tempC;
        }
    } catch(error) {
        name.textContent = 'Error';
        icon.src = (0,_icons__WEBPACK_IMPORTED_MODULE_1__.getPath)(0, 0);
        feels.textContent = '00';
        temp.textContent = '00';
        feels.dataset.value = '00';
        temp.dataset.value = '00';
        humid.textContent = '00';
        wind.textContent = '00';
        throw new Error(error);
    }
}

humidIcon.src = _assests_humidity_svg__WEBPACK_IMPORTED_MODULE_2__;
windIcon.src = _assests_wind_svg__WEBPACK_IMPORTED_MODULE_3__;

btn.addEventListener('click',() => {
    updateDOM();
    input.blur();
});
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') updateDOM();
});
toggle.addEventListener('click', () => {
    if(toggle.dataset.unit == 'c'){
        toggle.dataset.unit = 'f';
        toggle.textContent = 'F';
        unitLabel[0].src = _assests_f_png__WEBPACK_IMPORTED_MODULE_5__;
        unitLabel[1].src = _assests_f_png__WEBPACK_IMPORTED_MODULE_5__;
    } else {
        toggle.dataset.unit = 'c';
        toggle.textContent = 'C';
        unitLabel[0].src = _assests_c_png__WEBPACK_IMPORTED_MODULE_4__;
        unitLabel[1].src = _assests_c_png__WEBPACK_IMPORTED_MODULE_4__;
    }
    let ft = feels.textContent;
    feels.textContent = feels.dataset.value;
    feels.dataset.value = ft;
    let tt = temp.textContent;
    temp.textContent = temp.dataset.value;
    temp.dataset.value = tt;
});
document.querySelector('header').addEventListener('click', () => {
    input.focus();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0RkFBNEYsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sMmlCQUEyaUIsZ0JBQWdCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG9CQUFvQiwrQkFBK0IsS0FBSyxVQUFVLCtCQUErQixLQUFLLGNBQWMsd0JBQXdCLDBDQUEwQyxtQkFBbUIsZ0NBQWdDLEtBQUssb0JBQW9CLG9CQUFvQixtQkFBbUIsbUJBQW1CLG9CQUFvQixnQ0FBZ0MsMEVBQTBFLG9DQUFvQywwRUFBMEUsOEJBQThCLHlCQUF5QixvQkFBb0IsNkJBQTZCLHFDQUFxQywwQkFBMEIsS0FBSyxvQ0FBb0Msd0JBQXdCLG1CQUFtQix1QkFBdUIsb0JBQW9CLGdCQUFnQix3QkFBd0IsS0FBSyxhQUFhLG1CQUFtQix3QkFBd0IsOEJBQThCLDBCQUEwQixvQkFBb0IscUNBQXFDLDBCQUEwQixpTUFBaU0sc0JBQXNCLEtBQUssZ0JBQWdCLG9CQUFvQiwwQkFBMEIsd0JBQXdCLEtBQUssc0JBQXNCLDRCQUE0QixLQUFLLGlCQUFpQixtQkFBbUIsaUJBQWlCLEtBQUssV0FBVyx5QkFBeUIsbUJBQW1CLGtCQUFrQix1QkFBdUIsbUJBQW1CLHNCQUFzQixLQUFLLGlCQUFpQixvQkFBb0IsS0FBSyxhQUFhLG1CQUFtQix3QkFBd0Isd0JBQXdCLGtCQUFrQiw4QkFBOEIsbUJBQW1CLDBCQUEwQiw2R0FBNkcsb0JBQW9CLDRCQUE0Qix3QkFBd0Isc0JBQXNCLHVFQUF1RSxLQUFLLG1CQUFtQixnQ0FBZ0MsdUdBQXVHLEtBQUssb0JBQW9CLGlDQUFpQyxLQUFLLGdDQUFnQyxvQkFBb0IsbUJBQW1CLHNCQUFzQix3QkFBd0IseUJBQXlCLG9CQUFvQiw2QkFBNkIscUNBQXFDLDBCQUEwQixlQUFlLHlCQUF5QixtQkFBbUIsS0FBSyxlQUFlLHVCQUF1QixLQUFLLGtCQUFrQix5QkFBeUIsS0FBSyxXQUFXLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHdCQUF3QixLQUFLLGdCQUFnQixzQkFBc0IsdUJBQXVCLEtBQUssZUFBZSxrQkFBa0IsMEJBQTBCLEtBQUssWUFBWSx5QkFBeUIsS0FBSyxZQUFZLHdCQUF3Qix5QkFBeUIsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGVBQWUsS0FBSyxnQkFBZ0Isa0JBQWtCLHlCQUF5QixLQUFLLG9DQUFvQyx3QkFBd0Isb0JBQW9CLHdCQUF3QixvQkFBb0IsMEJBQTBCLDhCQUE4QixLQUFLLGNBQWMsb0JBQW9CLDBCQUEwQixLQUFLLGtCQUFrQix3QkFBd0IsS0FBSyxpQkFBaUIsbUJBQW1CLDBCQUEwQixLQUFLLGdCQUFnQix5QkFBeUIsS0FBSyxlQUFlLHlCQUF5QixLQUFLLHNDQUFzQyx3QkFBd0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsZUFBZSx5QkFBeUIsZ0JBQWdCLEtBQUssY0FBYyxtQkFBbUIsS0FBSyxpQkFBaUIsa0JBQWtCLGtCQUFrQixLQUFLLHVFQUF1RSxpQkFBaUIscUJBQXFCLE9BQU8sY0FBYyxvQkFBb0IsT0FBTyxlQUFlLHFCQUFxQiwyQkFBMkIsd0JBQXdCLE9BQU8sS0FBSyw0Q0FBNEMsaUJBQWlCLHNCQUFzQixPQUFPLGNBQWMsb0JBQW9CLE9BQU8sWUFBWSwwQkFBMEIsT0FBTyxpQkFBaUIsd0JBQXdCLE9BQU8sYUFBYSxvQkFBb0IsMEJBQTBCLE9BQU8sb0JBQW9CLDBCQUEwQixPQUFPLG9CQUFvQixxQkFBcUIsT0FBTyxjQUFjLDZCQUE2QixPQUFPLEtBQUssdUJBQXVCO0FBQ3I4TztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzVRMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ2lEO0FBQ0w7QUFDQztBQUN1QjtBQUNSO0FBQ0U7QUFDQTtBQUNFO0FBQ0Y7QUFDUDtBQUNFO0FBQ0Y7QUFDVjtBQUNJO0FBQ1I7QUFDRDtBQUN4QztBQUN1RDtBQUNlO0FBQ047QUFDQTtBQUNEO0FBQ2U7QUFDTjtBQUNBO0FBQ0U7QUFDRjtBQUNoQztBQUNFO0FBQ0Y7QUFDVTtBQUN1QztBQUNBO0FBQ2Y7QUFDQTtBQUNQO0FBQ3JCO0FBQ0c7QUFDakQ7QUFDcUQ7QUFDbUI7QUFDUjtBQUNFO0FBQ0E7QUFDRTtBQUNGO0FBQ1A7QUFDZTtBQUNOO0FBQ0E7QUFDRDtBQUNlO0FBQ047QUFDQTtBQUNFO0FBQ0Y7QUFDaUI7QUFDQTtBQUNmO0FBQ0E7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscURBQVE7QUFDckMsbUJBQW1CLHdEQUFVO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkIsOERBQWU7QUFDNUMsbUJBQW1CLGdFQUFpQjtBQUNwQztBQUNBO0FBQ0EsbUJBQW1CLGtEQUFNO0FBQ3pCO0FBQ0E7QUFDQSw2QkFBNkIseURBQVc7QUFDeEMsbUJBQW1CLDJEQUFhO0FBQ2hDO0FBQ0E7QUFDQSxtQkFBbUIsaURBQUk7QUFDdkI7QUFDQTtBQUNBLDZCQUE2QixtRUFBbUI7QUFDaEQsbUJBQW1CLHFFQUFxQjtBQUN4QztBQUNBO0FBQ0EsNkJBQTZCLG1FQUFtQjtBQUNoRCxtQkFBbUIscUVBQXFCO0FBQ3hDO0FBQ0E7QUFDQSw2QkFBNkIsb0VBQW9CO0FBQ2pELG1CQUFtQixzRUFBc0I7QUFDekM7QUFDQTtBQUNBLDZCQUE2QixtRUFBbUI7QUFDaEQsbUJBQW1CLHFFQUFxQjtBQUN4QztBQUNBO0FBQ0EsbUJBQW1CLCtEQUFpQjtBQUNwQztBQUNBO0FBQ0EsbUJBQW1CLHNEQUFRO0FBQzNCO0FBQ0E7QUFDQSw2QkFBNkIsNERBQWM7QUFDM0MsbUJBQW1CLCtEQUFnQjtBQUNuQztBQUNBO0FBQ0EsNkJBQTZCLG9EQUFNO0FBQ25DLG1CQUFtQixzREFBUTtBQUMzQjtBQUNBO0FBQ0EsNkJBQTZCLDJEQUFhO0FBQzFDLG1CQUFtQiw4REFBZTtBQUNsQztBQUNBO0FBQ0EsNkJBQTZCLHNFQUFzQjtBQUNuRCxtQkFBbUIsd0VBQXdCO0FBQzNDO0FBQ0E7QUFDQSw2QkFBNkIsc0VBQXNCO0FBQ25ELG1CQUFtQix3RUFBd0I7QUFDM0M7QUFDQTtBQUNBLDZCQUE2QixpRUFBa0I7QUFDL0MsbUJBQW1CLG1FQUFvQjtBQUN2QztBQUNBO0FBQ0EsNkJBQTZCLCtEQUFpQjtBQUM5QyxtQkFBbUIsa0VBQW1CO0FBQ3RDO0FBQ0E7QUFDQSw2QkFBNkIsbUVBQW1CO0FBQ2hELG1CQUFtQixxRUFBcUI7QUFDeEM7QUFDQTtBQUNBLG1CQUFtQixpREFBSTtBQUN2QjtBQUNBO0FBQ0EsNkJBQTZCLG1FQUFtQjtBQUNoRCxtQkFBbUIscUVBQXFCO0FBQ3hDO0FBQ0E7QUFDQSw2QkFBNkIsOERBQWU7QUFDNUMsbUJBQW1CLGdFQUFpQjtBQUNwQztBQUNBO0FBQ0EsNkJBQTZCLDREQUFjO0FBQzNDLG1CQUFtQiwrREFBZ0I7QUFDbkM7QUFDQTtBQUNBLDZCQUE2Qiw0REFBYztBQUMzQyxtQkFBbUIsK0RBQWdCO0FBQ25DO0FBQ0E7QUFDQSw2QkFBNkIsbUVBQW1CO0FBQ2hELG1CQUFtQixxRUFBcUI7QUFDeEM7QUFDQTtBQUNBLDZCQUE2Qiw0REFBYztBQUMzQyxtQkFBbUIsK0RBQWdCO0FBQ25DO0FBQ0E7QUFDQSw2QkFBNkIsb0VBQW9CO0FBQ2pELG1CQUFtQixzRUFBc0I7QUFDekM7QUFDQTtBQUNBLDZCQUE2Qiw2REFBZTtBQUM1QyxtQkFBbUIsZ0VBQWlCO0FBQ3BDO0FBQ0E7QUFDQSw2QkFBNkIsbUVBQW1CO0FBQ2hELG1CQUFtQixxRUFBcUI7QUFDeEM7QUFDQTtBQUNBLG1CQUFtQixpREFBSTtBQUN2QjtBQUNBO0FBQ0EsNkJBQTZCLG1FQUFtQjtBQUNoRCxtQkFBbUIscUVBQXFCO0FBQ3hDO0FBQ0E7QUFDQSw2QkFBNkIsOERBQWU7QUFDNUMsbUJBQW1CLGdFQUFpQjtBQUNwQztBQUNBO0FBQ0EsNkJBQTZCLDREQUFjO0FBQzNDLG1CQUFtQiwrREFBZ0I7QUFDbkM7QUFDQTtBQUNBLDZCQUE2Qiw0REFBYztBQUMzQyxtQkFBbUIsK0RBQWdCO0FBQ25DO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQVM7QUFDNUI7QUFDQTtBQUNBLG1CQUFtQixpREFBSTtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CLHdEQUFXO0FBQzlCO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQU87QUFDMUI7QUFDQTtBQUNBLG1CQUFtQixrREFBSztBQUN4QjtBQUNBO0FBQ0EsbUJBQW1CLDBEQUFZO0FBQy9CO0FBQ0E7QUFDQSxtQkFBbUIsaURBQUk7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFTO0FBQzVCO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQVM7QUFDNUI7QUFDQTtBQUNBLDZCQUE2QixtRUFBb0I7QUFDakQsbUJBQW1CLHFFQUFzQjtBQUN6QztBQUNBO0FBQ0EsNkJBQTZCLDJFQUEyQjtBQUN4RCxtQkFBbUIsNkVBQTZCO0FBQ2hEO0FBQ0E7QUFDQSw2QkFBNkIsbUVBQW9CO0FBQ2pELG1CQUFtQixxRUFBc0I7QUFDekM7QUFDQTtBQUNBLDZCQUE2QiwyRUFBMkI7QUFDeEQsbUJBQW1CLDZFQUE2QjtBQUNoRDtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFNO0FBQ3pCO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQU87QUFDMUI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2UEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNZO0FBQ1U7QUFDSjtBQUNKO0FBQ0E7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrQ0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUhBQXlILFNBQVMsSUFBSSxhQUFhO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtDQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxtQkFBbUIsK0NBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQUs7QUFDckIsZUFBZSw4Q0FBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJDQUFJO0FBQy9CLDJCQUEyQiwyQ0FBSTtBQUMvQixNQUFNO0FBQ047QUFDQTtBQUNBLDJCQUEyQiwyQ0FBSTtBQUMvQiwyQkFBMkIsMkNBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdXNhbS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWF1c2FtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tYXVzYW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tYXVzYW0vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbWF1c2FtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21hdXNhbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWF1c2FtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21hdXNhbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tYXVzYW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tYXVzYW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYXVzYW0vLi9zcmMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vbWF1c2FtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hdXNhbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tYXVzYW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hdXNhbS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21hdXNhbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hdXNhbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hdXNhbS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tYXVzYW0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21hdXNhbS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG5iLCB1LCBpLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdGZvbnQ6IGluaGVyaXQ7XHJcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG4qe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcblx0cGFkZGluZzogM2R2aCAwcHg7XHJcblx0Zm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cdGhlaWdodDogOTRkdmg7XHJcblx0d2lkdGg6IDUwMHB4O1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRwYWRkaW5nOiA1MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDkzRTk7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgIzAwOTNFOSAwJSwgIzc1ZTZkOCAxMDAlKTtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOTNFOTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCAjMDA5M0U5IDAlLCAjNzVlNmQ4IDEwMCUpO1xyXG5cclxuXHRib3JkZXItcmFkaXVzOiA3NXB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEhFQURFUiAqL1xyXG5cclxuaGVhZGVyIHtcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRoZWlnaHQ6IDQ1cHg7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMTBweDtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uc2VhcmNoIHtcclxuXHR3aWR0aDogMzUwcHg7XHJcblx0cGFkZGluZzogMHB4IDIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNjBweCAtMTJweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDM2cHggLTE4cHgsIHJnYigyMDQsIDIxOSwgMjMyKSAzcHggM3B4IDZweCAwcHggaW5zZXQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAtM3B4IC0zcHggNnB4IDFweCBpbnNldDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3NlYXJjaEJ0biB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRwbGFjZS1pdGVtczogY2VudGVyO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbiNzZWFyY2hCdG46YWN0aXZle1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxufVxyXG4uc2VhcmNoIHN2ZyB7XHJcblx0aGVpZ2h0OiAyNXB4O1xyXG5cdGZpbGw6IGdyZXk7XHJcbn1cclxuaW5wdXQge1xyXG5cdGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuXHRoZWlnaHQ6IDQycHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlucHV0OmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbiN0b2dnbGUge1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHR3aWR0aDogNDVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcclxuXHRib3gtc2hhZG93OiByZ2IoMjA0LCAyMTksIDIzMikgM3B4IDNweCA2cHggMHB4IGluc2V0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgLTNweCAtM3B4IDZweCAxcHggaW5zZXQ7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGxpbmVhciwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW47XHJcbn1cclxuI3RvZ2dsZTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzcwZGRkODtcclxuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTE2KSAzcHggM3B4IDZweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMCkgLTNweCAtM3B4IDZweCAxcHggaW5zZXQ7XHJcbn1cclxuI3RvZ2dsZTphY3RpdmUge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG59XHJcblxyXG4vKiBNYWluICovXHJcblxyXG5tYWluIHtcclxuXHRoZWlnaHQ6IDQwMHB4O1xyXG5cdHdpZHRoOiAzMDBweDtcclxuXHRmb250LXNpemU6IDNyZW07XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Ym90dG9tOiA1MHB4O1xyXG59XHJcbiNsb2NhdGlvbiB7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4udGVtcGVyYXR1cmUge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udGVtcCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiN0ZW1wVmFsdWUge1xyXG5cdGZvbnQtc2l6ZTogN3JlbTtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi50ZW1wIGltZyB7XHJcblx0d2lkdGg6IDI1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4jZmVlbHMge1xyXG5cdGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG4uZmVlbHMge1xyXG5cdG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3R0b206IDIwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogNXB4O1xyXG59XHJcbi5mZWVscyBpbWcge1xyXG5cdHdpZHRoOiAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLyogRm9vdGVyICovXHJcblxyXG5mb290ZXIge1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdGhlaWdodDogMTUwcHg7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxzIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmRldGFpbHMgc3BhbntcclxuXHRmb250LXNpemU6IDMuNXJlbTtcclxufVxyXG4uZGV0YWlscyBpbWd7XHJcblx0d2lkdGg6IDE1MHB4O1xyXG5cdG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbn1cclxuLmh1bWlkIGltZyB7XHJcblx0bWFyZ2luLWxlZnQ6IC00MHB4O1xyXG59XHJcbi53aW5kIGltZyB7XHJcblx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4vKiBNYWRlIEJ5ICovXHJcblxyXG4jbWFkZUJ5IHtcclxuXHRmb250LXNpemU6IDAuOXJlbTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiA1cHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMTAwJTtcclxufVxyXG4jbWFkZUJ5IGF7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcbiNtYWRlQnkgc3ZnIHtcclxuXHR3aWR0aDogMjFweDtcclxuXHRmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcmllcyAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoIDw9IDUwMHB4KSB7XHJcblx0LmNvbnRhaW5lcntcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHR9XHJcblx0aGVhZGVyIHtcclxuXHRcdHdpZHRoOiA4MHZ3O1xyXG5cdH1cclxuXHQjbWFkZUJ5IHtcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGZvbnQtc2l6ZTogMC43NXJlbTtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aCA8PSAzNzVweCkge1xyXG5cdC5jb250YWluZXJ7XHJcblx0XHRwYWRkaW5nOiAzNXB4O1xyXG5cdH1cclxuXHRoZWFkZXIge1xyXG5cdFx0d2lkdGg6IDgwdnc7XHJcblx0fVxyXG5cdG1haW4ge1xyXG5cdFx0cGFkZGluZy10b3A6IDQwcHg7XHJcblx0fVxyXG5cdCN0ZW1wVmFsdWV7XHJcblx0XHRmb250LXNpemU6IDVyZW07XHJcblx0fVxyXG5cdCNpY29uIHtcclxuXHRcdHNjYWxlOiAwLjc1O1xyXG5cdFx0bWFyZ2luLXRvcDogLTMwcHg7XHJcblx0fVxyXG5cdC5kZXRhaWxzIHNwYW57XHJcblx0XHRmb250LXNpemU6IDIuNXJlbTtcclxuXHR9XHJcblx0LmRldGFpbHMgaW1nIHtcclxuXHRcdHdpZHRoOiAxMjVweDtcclxuXHR9XHJcblx0Zm9vdGVyIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG5cdH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixpQ0FBaUM7Q0FDakMsWUFBWTtJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtDQUND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O0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLFdBQVc7RUFDWCxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsWUFBWTtDQUNiO0NBQ0E7RUFDQyxvQkFBb0I7Q0FDckI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHBhZGRpbmc6IDNkdmggMHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHRoZWlnaHQ6IDk0ZHZoO1xcclxcblxcdHdpZHRoOiA1MDBweDtcXHJcXG5cXHRtYXJnaW46IGF1dG87XFxyXFxuXFx0cGFkZGluZzogNTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5M0U5O1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICMwMDkzRTkgMCUsICM3NWU2ZDggMTAwJSk7XFxyXFxuXFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwOTNFOTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCAjMDA5M0U5IDAlLCAjNzVlNmQ4IDEwMCUpO1xcclxcblxcclxcblxcdGJvcmRlci1yYWRpdXM6IDc1cHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMTBweDtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLnNlYXJjaCB7XFxyXFxuXFx0d2lkdGg6IDM1MHB4O1xcclxcblxcdHBhZGRpbmc6IDBweCAyMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAzMHB4IDYwcHggLTEycHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMThweCAzNnB4IC0xOHB4LCByZ2IoMjA0LCAyMTksIDIzMikgM3B4IDNweCA2cHggMHB4IGluc2V0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgLTNweCAtM3B4IDZweCAxcHggaW5zZXQ7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jc2VhcmNoQnRuIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbiNzZWFyY2hCdG46YWN0aXZle1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuLnNlYXJjaCBzdmcge1xcclxcblxcdGhlaWdodDogMjVweDtcXHJcXG5cXHRmaWxsOiBncmV5O1xcclxcbn1cXHJcXG5pbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcclxcblxcdGhlaWdodDogNDJweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4jdG9nZ2xlIHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0d2lkdGg6IDQ1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogcmdiKDIwNCwgMjE5LCAyMzIpIDNweCAzcHggNnB4IDBweCBpbnNldCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIC0zcHggLTNweCA2cHggMXB4IGluc2V0O1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0cGxhY2UtY29udGVudDogY2VudGVyO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBsaW5lYXIsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluO1xcclxcbn1cXHJcXG4jdG9nZ2xlOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzBkZGQ4O1xcclxcblxcdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMTYpIDNweCAzcHggNnB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwKSAtM3B4IC0zcHggNnB4IDFweCBpbnNldDtcXHJcXG59XFxyXFxuI3RvZ2dsZTphY3RpdmUge1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuXFx0aGVpZ2h0OiA0MDBweDtcXHJcXG5cXHR3aWR0aDogMzAwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAwcHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuI2xvY2F0aW9uIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG4udGVtcGVyYXR1cmUge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLnRlbXAge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuI3RlbXBWYWx1ZSB7XFxyXFxuXFx0Zm9udC1zaXplOiA3cmVtO1xcclxcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcbi50ZW1wIGltZyB7XFxyXFxuXFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuI2ZlZWxzIHtcXHJcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxyXFxufVxcclxcbi5mZWVscyB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJvdHRvbTogMjBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiA1cHg7XFxyXFxufVxcclxcbi5mZWVscyBpbWcge1xcclxcblxcdHdpZHRoOiAxMHB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDE1MHB4O1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRldGFpbHMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRldGFpbHMgc3BhbntcXHJcXG5cXHRmb250LXNpemU6IDMuNXJlbTtcXHJcXG59XFxyXFxuLmRldGFpbHMgaW1ne1xcclxcblxcdHdpZHRoOiAxNTBweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcclxcbn1cXHJcXG4uaHVtaWQgaW1nIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogLTQwcHg7XFxyXFxufVxcclxcbi53aW5kIGltZyB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWRlIEJ5ICovXFxyXFxuXFxyXFxuI21hZGVCeSB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogNXB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDEwMCU7XFxyXFxufVxcclxcbiNtYWRlQnkgYXtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbiNtYWRlQnkgc3ZnIHtcXHJcXG5cXHR3aWR0aDogMjFweDtcXHJcXG5cXHRmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aCA8PSA1MDBweCkge1xcclxcblxcdC5jb250YWluZXJ7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdH1cXHJcXG5cXHRoZWFkZXIge1xcclxcblxcdFxcdHdpZHRoOiA4MHZ3O1xcclxcblxcdH1cXHJcXG5cXHQjbWFkZUJ5IHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcclxcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aCA8PSAzNzVweCkge1xcclxcblxcdC5jb250YWluZXJ7XFxyXFxuXFx0XFx0cGFkZGluZzogMzVweDtcXHJcXG5cXHR9XFxyXFxuXFx0aGVhZGVyIHtcXHJcXG5cXHRcXHR3aWR0aDogODB2dztcXHJcXG5cXHR9XFxyXFxuXFx0bWFpbiB7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IDQwcHg7XFxyXFxuXFx0fVxcclxcblxcdCN0ZW1wVmFsdWV7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiA1cmVtO1xcclxcblxcdH1cXHJcXG5cXHQjaWNvbiB7XFxyXFxuXFx0XFx0c2NhbGU6IDAuNzU7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogLTMwcHg7XFxyXFxuXFx0fVxcclxcblxcdC5kZXRhaWxzIHNwYW57XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAyLjVyZW07XFxyXFxuXFx0fVxcclxcblxcdC5kZXRhaWxzIGltZyB7XFxyXFxuXFx0XFx0d2lkdGg6IDEyNXB4O1xcclxcblxcdH1cXHJcXG5cXHRmb290ZXIge1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IC01MHB4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIERheSA9PSAxXHJcbmltcG9ydCBjbGVhckRheSBmcm9tICcuL2Fzc2VzdHMvMS9jbGVhci1kYXkuc3ZnJztcclxuaW1wb3J0IGNsb3VkeSBmcm9tICcuL2Fzc2VzdHMvMS9jbG91ZHkuc3ZnJztcclxuaW1wb3J0IGNvZGVSZWQgZnJvbSAnLi9hc3Nlc3RzL2NvZGUtcmVkLnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lRGF5RHJpenpsZSBmcm9tICcuL2Fzc2VzdHMvMS9leHRyZW1lLWRheS1kcml6emxlLnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lRGF5Rm9nIGZyb20gJy4vYXNzZXN0cy8xL2V4dHJlbWUtZGF5LWZvZy5zdmcnO1xyXG5pbXBvcnQgZXh0cmVtZURheUhhaWwgZnJvbSAnLi9hc3Nlc3RzLzEvZXh0cmVtZS1kYXktaGFpbC5zdmcnO1xyXG5pbXBvcnQgZXh0cmVtZURheVJhaW4gZnJvbSAnLi9hc3Nlc3RzLzEvZXh0cmVtZS1kYXktcmFpbi5zdmcnO1xyXG5pbXBvcnQgZXh0cmVtZURheVNsZWV0IGZyb20gJy4vYXNzZXN0cy8xL2V4dHJlbWUtZGF5LXNsZWV0LnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lRGF5U25vdyBmcm9tICcuL2Fzc2VzdHMvMS9leHRyZW1lLWRheS1zbm93LnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lUmFpbiBmcm9tICcuL2Fzc2VzdHMvMS9leHRyZW1lLXJhaW4uc3ZnJztcclxuaW1wb3J0IGV4dHJlbWVTbGVldCBmcm9tICcuL2Fzc2VzdHMvMS9leHRyZW1lLXNsZWV0LnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lU25vdyBmcm9tICcuL2Fzc2VzdHMvMS9leHRyZW1lLXNub3cuc3ZnJztcclxuaW1wb3J0IGZvZ0RheSBmcm9tICcuL2Fzc2VzdHMvMS9mb2ctZGF5LnN2Zyc7XHJcbmltcG9ydCBmb2dOaWdodCBmcm9tICcuL2Fzc2VzdHMvMS9mb2ctbmlnaHQuc3ZnJztcclxuaW1wb3J0IGxvYWRlciBmcm9tICcuL2Fzc2VzdHMvcG9sbGVuLnN2ZydcclxuaW1wb3J0IG1pc3QgZnJvbSAnLi9hc3Nlc3RzLzEvbWlzdC5zdmcnO1xyXG4vLyBpbXBvcnQgbm90QXZhaWxhYmxlIGZyb20gJy4vYXNzZXN0cy8xL25vdC1hdmFpbGFibGUuc3ZnJztcclxuaW1wb3J0IG92ZXJjYXN0RGF5IGZyb20gJy4vYXNzZXN0cy8xL292ZXJjYXN0LWRheS5zdmcnO1xyXG5pbXBvcnQgb3ZlcmNhc3REYXlEcml6emxlIGZyb20gJy4vYXNzZXN0cy8xL292ZXJjYXN0LWRheS1kcml6emxlLnN2Zyc7XHJcbmltcG9ydCBvdmVyY2FzdERheVJhaW4gZnJvbSAnLi9hc3Nlc3RzLzEvb3ZlcmNhc3QtZGF5LXJhaW4uc3ZnJztcclxuaW1wb3J0IG92ZXJjYXN0RGF5U25vdyBmcm9tICcuL2Fzc2VzdHMvMS9vdmVyY2FzdC1kYXktc25vdy5zdmcnO1xyXG5pbXBvcnQgcGFydGx5Q2xvdWR5RGF5IGZyb20gJy4vYXNzZXN0cy8xL3BhcnRseS1jbG91ZHktZGF5LnN2ZydcclxuaW1wb3J0IHBhcnRseUNsb3VkeURheURyaXp6bGUgZnJvbSAnLi9hc3Nlc3RzLzEvcGFydGx5LWNsb3VkeS1kYXktZHJpenpsZS5zdmcnXHJcbmltcG9ydCBwYXJ0bHlDbG91ZHlEYXlIYWlsIGZyb20gJy4vYXNzZXN0cy8xL3BhcnRseS1jbG91ZHktZGF5LWhhaWwuc3ZnJ1xyXG5pbXBvcnQgcGFydGx5Q2xvdWR5RGF5UmFpbiBmcm9tICcuL2Fzc2VzdHMvMS9wYXJ0bHktY2xvdWR5LWRheS1yYWluLnN2ZydcclxuaW1wb3J0IHBhcnRseUNsb3VkeURheVNsZWV0IGZyb20gJy4vYXNzZXN0cy8xL3BhcnRseS1jbG91ZHktZGF5LXNsZWV0LnN2ZydcclxuaW1wb3J0IHBhcnRseUNsb3VkeURheVNub3cgZnJvbSAnLi9hc3Nlc3RzLzEvcGFydGx5LWNsb3VkeS1kYXktc25vdy5zdmcnXHJcbmltcG9ydCByYWluIGZyb20gJy4vYXNzZXN0cy8xL3JhaW4uc3ZnJztcclxuaW1wb3J0IHNsZWV0IGZyb20gJy4vYXNzZXN0cy8xL3NsZWV0LnN2Zyc7XHJcbmltcG9ydCBzbm93IGZyb20gJy4vYXNzZXN0cy8xL3Nub3cuc3ZnJztcclxuaW1wb3J0IHNub3dmbGFrZSBmcm9tICcuL2Fzc2VzdHMvMS9zbm93Zmxha2Uuc3ZnJztcclxuaW1wb3J0IHRodW5kZXJzdG9ybXNEYXlFeHRyZW1lUmFpbiBmcm9tICcuL2Fzc2VzdHMvMS90aHVuZGVyc3Rvcm1zLWRheS1leHRyZW1lLXJhaW4uc3ZnJztcclxuaW1wb3J0IHRodW5kZXJzdG9ybXNEYXlFeHRyZW1lU25vdyBmcm9tICcuL2Fzc2VzdHMvMS90aHVuZGVyc3Rvcm1zLWRheS1leHRyZW1lLXNub3cuc3ZnJztcclxuaW1wb3J0IHRodW5kZXJzdG9ybXNEYXlSYWluIGZyb20gJy4vYXNzZXN0cy8xL3RodW5kZXJzdG9ybXMtZGF5LXJhaW4uc3ZnJztcclxuaW1wb3J0IHRodW5kZXJzdG9ybXNEYXlTbm93IGZyb20gJy4vYXNzZXN0cy8xL3RodW5kZXJzdG9ybXMtZGF5LXNub3cuc3ZnJztcclxuaW1wb3J0IHRodW5kZXJzdG9ybXNSYWluIGZyb20gJy4vYXNzZXN0cy8xL3RodW5kZXJzdG9ybXMtcmFpbi5zdmcnO1xyXG5pbXBvcnQgdG9ybmFkbyBmcm9tICcuL2Fzc2VzdHMvMS90b3JuYWRvLnN2Zyc7XHJcbmltcG9ydCB3aW5kU25vdyBmcm9tICcuL2Fzc2VzdHMvMS93aW5kLXNub3cuc3ZnJztcclxuLy8gTmlnaHQgPT0gMFxyXG5pbXBvcnQgY2xlYXJOaWdodCBmcm9tICcuL2Fzc2VzdHMvMC9jbGVhci1uaWdodC5zdmcnO1xyXG5pbXBvcnQgZXh0cmVtZU5pZ2h0RHJpenpsZSBmcm9tICcuL2Fzc2VzdHMvMC9leHRyZW1lLW5pZ2h0LWRyaXp6bGUuc3ZnJztcclxuaW1wb3J0IGV4dHJlbWVOaWdodEZvZyBmcm9tICcuL2Fzc2VzdHMvMC9leHRyZW1lLW5pZ2h0LWZvZy5zdmcnO1xyXG5pbXBvcnQgZXh0cmVtZU5pZ2h0SGFpbCBmcm9tICcuL2Fzc2VzdHMvMC9leHRyZW1lLW5pZ2h0LWhhaWwuc3ZnJztcclxuaW1wb3J0IGV4dHJlbWVOaWdodFJhaW4gZnJvbSAnLi9hc3Nlc3RzLzAvZXh0cmVtZS1uaWdodC1yYWluLnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lTmlnaHRTbGVldCBmcm9tICcuL2Fzc2VzdHMvMC9leHRyZW1lLW5pZ2h0LXNsZWV0LnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lTmlnaHRTbm93IGZyb20gJy4vYXNzZXN0cy8wL2V4dHJlbWUtbmlnaHQtc25vdy5zdmcnO1xyXG5pbXBvcnQgb3ZlcmNhc3ROaWdodCBmcm9tICcuL2Fzc2VzdHMvMC9vdmVyY2FzdC1uaWdodC5zdmcnO1xyXG5pbXBvcnQgb3ZlcmNhc3ROaWdodERyaXp6bGUgZnJvbSAnLi9hc3Nlc3RzLzAvb3ZlcmNhc3QtbmlnaHQtZHJpenpsZS5zdmcnO1xyXG5pbXBvcnQgb3ZlcmNhc3ROaWdodFJhaW4gZnJvbSAnLi9hc3Nlc3RzLzAvb3ZlcmNhc3QtbmlnaHQtcmFpbi5zdmcnO1xyXG5pbXBvcnQgb3ZlcmNhc3ROaWdodFNub3cgZnJvbSAnLi9hc3Nlc3RzLzAvb3ZlcmNhc3QtbmlnaHQtc25vdy5zdmcnO1xyXG5pbXBvcnQgcGFydGx5Q2xvdWR5TmlnaHQgZnJvbSAnLi9hc3Nlc3RzLzAvcGFydGx5LWNsb3VkeS1uaWdodC5zdmcnXHJcbmltcG9ydCBwYXJ0bHlDbG91ZHlOaWdodERyaXp6bGUgZnJvbSAnLi9hc3Nlc3RzLzAvcGFydGx5LWNsb3VkeS1uaWdodC1kcml6emxlLnN2ZydcclxuaW1wb3J0IHBhcnRseUNsb3VkeU5pZ2h0SGFpbCBmcm9tICcuL2Fzc2VzdHMvMC9wYXJ0bHktY2xvdWR5LW5pZ2h0LWhhaWwuc3ZnJ1xyXG5pbXBvcnQgcGFydGx5Q2xvdWR5TmlnaHRSYWluIGZyb20gJy4vYXNzZXN0cy8wL3BhcnRseS1jbG91ZHktbmlnaHQtcmFpbi5zdmcnXHJcbmltcG9ydCBwYXJ0bHlDbG91ZHlOaWdodFNsZWV0IGZyb20gJy4vYXNzZXN0cy8wL3BhcnRseS1jbG91ZHktbmlnaHQtc2xlZXQuc3ZnJ1xyXG5pbXBvcnQgcGFydGx5Q2xvdWR5TmlnaHRTbm93IGZyb20gJy4vYXNzZXN0cy8wL3BhcnRseS1jbG91ZHktbmlnaHQtc25vdy5zdmcnXHJcbmltcG9ydCB0aHVuZGVyc3Rvcm1zTmlnaHRFeHRyZW1lUmFpbiBmcm9tICcuL2Fzc2VzdHMvMC90aHVuZGVyc3Rvcm1zLW5pZ2h0LWV4dHJlbWUtcmFpbi5zdmcnO1xyXG5pbXBvcnQgdGh1bmRlcnN0b3Jtc05pZ2h0RXh0cmVtZVNub3cgZnJvbSAnLi9hc3Nlc3RzLzAvdGh1bmRlcnN0b3Jtcy1uaWdodC1leHRyZW1lLXNub3cuc3ZnJztcclxuaW1wb3J0IHRodW5kZXJzdG9ybXNOaWdodFJhaW4gZnJvbSAnLi9hc3Nlc3RzLzAvdGh1bmRlcnN0b3Jtcy1uaWdodC1yYWluLnN2Zyc7XHJcbmltcG9ydCB0aHVuZGVyc3Rvcm1zTmlnaHRTbm93IGZyb20gJy4vYXNzZXN0cy8wL3RodW5kZXJzdG9ybXMtbmlnaHQtc25vdy5zdmcnO1xyXG5cclxuZnVuY3Rpb24gZ2V0UGF0aChjb2RlLCBpc0RheSl7XHJcbiAgICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgICAgICBjYXNlIDEwMDA6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gY2xlYXJEYXk7XHJcbiAgICAgICAgICAgIHJldHVybiBjbGVhck5pZ2h0O1xyXG5cclxuICAgICAgICBjYXNlIDEwMDM6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gcGFydGx5Q2xvdWR5RGF5O1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydGx5Q2xvdWR5TmlnaHQ7XHJcblxyXG4gICAgICAgIGNhc2UgMTAwNjpcclxuICAgICAgICAgICAgcmV0dXJuIGNsb3VkeTtcclxuXHJcbiAgICAgICAgY2FzZSAxMDA5OlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIG92ZXJjYXN0RGF5O1xyXG4gICAgICAgICAgICByZXR1cm4gb3ZlcmNhc3ROaWdodDtcclxuXHJcbiAgICAgICAgY2FzZSAxMDMwOlxyXG4gICAgICAgICAgICByZXR1cm4gbWlzdDtcclxuXHJcbiAgICAgICAgY2FzZSAxMDYzOlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIHBhcnRseUNsb3VkeURheVJhaW47XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0bHlDbG91ZHlOaWdodFJhaW47XHJcblxyXG4gICAgICAgIGNhc2UgMTA2NjpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBwYXJ0bHlDbG91ZHlEYXlTbm93O1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydGx5Q2xvdWR5TmlnaHRTbm93O1xyXG5cclxuICAgICAgICBjYXNlIDEwNjk6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gcGFydGx5Q2xvdWR5RGF5U2xlZXQ7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0bHlDbG91ZHlOaWdodFNsZWV0O1xyXG5cclxuICAgICAgICBjYXNlIDEwNzI6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gcGFydGx5Q2xvdWR5RGF5SGFpbDtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRseUNsb3VkeU5pZ2h0SGFpbDtcclxuXHJcbiAgICAgICAgY2FzZSAxMDg3OlxyXG4gICAgICAgICAgICByZXR1cm4gdGh1bmRlcnN0b3Jtc1JhaW47XHJcblxyXG4gICAgICAgIGNhc2UgMTExNDpcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRTbm93O1xyXG5cclxuICAgICAgICBjYXNlIDExMTc6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gZXh0cmVtZURheVNub3c7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRyZW1lTmlnaHRTbm93O1xyXG5cclxuICAgICAgICBjYXNlIDExMzU6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gZm9nRGF5O1xyXG4gICAgICAgICAgICByZXR1cm4gZm9nTmlnaHQ7XHJcblxyXG4gICAgICAgIGNhc2UgMTE0NzpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBleHRyZW1lRGF5Rm9nO1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0cmVtZU5pZ2h0Rm9nO1xyXG5cclxuICAgICAgICBjYXNlIDExNTA6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gcGFydGx5Q2xvdWR5RGF5RHJpenpsZTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRseUNsb3VkeU5pZ2h0RHJpenpsZTtcclxuXHJcbiAgICAgICAgY2FzZSAxMTUzOlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIHBhcnRseUNsb3VkeURheURyaXp6bGU7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0bHlDbG91ZHlOaWdodERyaXp6bGU7XHJcblxyXG4gICAgICAgIGNhc2UgMTE2ODpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBvdmVyY2FzdERheURyaXp6bGU7XHJcbiAgICAgICAgICAgIHJldHVybiBvdmVyY2FzdE5pZ2h0RHJpenpsZTtcclxuXHJcbiAgICAgICAgY2FzZSAxMTcxOlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIGV4dHJlbWVEYXlEcml6emxlO1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0cmVtZU5pZ2h0RHJpenpsZTtcclxuXHJcbiAgICAgICAgY2FzZSAxMTgwOlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIHBhcnRseUNsb3VkeURheVJhaW47XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0bHlDbG91ZHlOaWdodFJhaW47XHJcblxyXG4gICAgICAgIGNhc2UgMTE4MzpcclxuICAgICAgICAgICAgcmV0dXJuIHJhaW47XHJcblxyXG4gICAgICAgIGNhc2UgMTE4NjpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBwYXJ0bHlDbG91ZHlEYXlSYWluO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydGx5Q2xvdWR5TmlnaHRSYWluO1xyXG5cclxuICAgICAgICBjYXNlIDExODk6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gb3ZlcmNhc3REYXlSYWluO1xyXG4gICAgICAgICAgICByZXR1cm4gb3ZlcmNhc3ROaWdodFJhaW47XHJcblxyXG4gICAgICAgIGNhc2UgMTE5MjpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBleHRyZW1lRGF5UmFpbjtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dHJlbWVOaWdodFJhaW47XHJcblxyXG4gICAgICAgIGNhc2UgMTE5NTpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBleHRyZW1lRGF5UmFpbjtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dHJlbWVOaWdodFJhaW47XHJcblxyXG4gICAgICAgIGNhc2UgMTE5ODpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBwYXJ0bHlDbG91ZHlEYXlIYWlsO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydGx5Q2xvdWR5TmlnaHRIYWlsO1xyXG5cclxuICAgICAgICBjYXNlIDEyMDE6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gZXh0cmVtZURheUhhaWw7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRyZW1lTmlnaHRIYWlsO1xyXG5cclxuICAgICAgICBjYXNlIDEyMDQ6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gcGFydGx5Q2xvdWR5RGF5U2xlZXQ7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0bHlDbG91ZHlOaWdodFNsZWV0O1xyXG5cclxuICAgICAgICBjYXNlIDEyMDc6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gZXh0cmVtZURheVNsZWV0O1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0cmVtZU5pZ2h0U2xlZXQ7XHJcblxyXG4gICAgICAgIGNhc2UgMTIxMDpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBwYXJ0bHlDbG91ZHlEYXlTbm93O1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydGx5Q2xvdWR5TmlnaHRTbm93O1xyXG5cclxuICAgICAgICBjYXNlIDEyMTM6XHJcbiAgICAgICAgICAgIHJldHVybiBzbm93O1xyXG5cclxuICAgICAgICBjYXNlIDEyMTY6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gcGFydGx5Q2xvdWR5RGF5U25vdztcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRseUNsb3VkeU5pZ2h0U25vdztcclxuXHJcbiAgICAgICAgY2FzZSAxMjE5OlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIG92ZXJjYXN0RGF5U25vdztcclxuICAgICAgICAgICAgcmV0dXJuIG92ZXJjYXN0TmlnaHRTbm93O1xyXG5cclxuICAgICAgICBjYXNlIDEyMjI6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gZXh0cmVtZURheVNub3c7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRyZW1lTmlnaHRTbm93O1xyXG5cclxuICAgICAgICBjYXNlIDEyMjU6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gZXh0cmVtZURheVNub3c7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRyZW1lTmlnaHRTbm93O1xyXG5cclxuICAgICAgICBjYXNlIDEyMzc6XHJcbiAgICAgICAgICAgIHJldHVybiBzbm93Zmxha2U7XHJcblxyXG4gICAgICAgIGNhc2UgMTI0MDpcclxuICAgICAgICAgICAgcmV0dXJuIHJhaW47XHJcblxyXG4gICAgICAgIGNhc2UgMTI0MzpcclxuICAgICAgICAgICAgcmV0dXJuIGV4dHJlbWVSYWluO1xyXG5cclxuICAgICAgICBjYXNlIDEyNDY6XHJcbiAgICAgICAgICAgIHJldHVybiB0b3JuYWRvO1xyXG5cclxuICAgICAgICBjYXNlIDEyNDk6XHJcbiAgICAgICAgICAgIHJldHVybiBzbGVldDtcclxuXHJcbiAgICAgICAgY2FzZSAxMjUyOlxyXG4gICAgICAgICAgICByZXR1cm4gZXh0cmVtZVNsZWV0O1xyXG5cclxuICAgICAgICBjYXNlIDEyNTU6XHJcbiAgICAgICAgICAgIHJldHVybiBzbm93O1xyXG5cclxuICAgICAgICBjYXNlIDEyNTg6XHJcbiAgICAgICAgICAgIHJldHVybiBleHRyZW1lU25vdztcclxuXHJcbiAgICAgICAgY2FzZSAxMjYxOlxyXG4gICAgICAgICAgICByZXR1cm4gc25vd2ZsYWtlO1xyXG5cclxuICAgICAgICBjYXNlIDEyNjQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzbm93Zmxha2U7XHJcblxyXG4gICAgICAgIGNhc2UgMTI3MzpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiB0aHVuZGVyc3Rvcm1zRGF5UmFpbjtcclxuICAgICAgICAgICAgcmV0dXJuIHRodW5kZXJzdG9ybXNOaWdodFJhaW47XHJcblxyXG4gICAgICAgIGNhc2UgMTI3NjpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiB0aHVuZGVyc3Rvcm1zRGF5RXh0cmVtZVJhaW47XHJcbiAgICAgICAgICAgIHJldHVybiB0aHVuZGVyc3Rvcm1zTmlnaHRFeHRyZW1lUmFpbjtcclxuXHJcbiAgICAgICAgY2FzZSAxMjc5OlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIHRodW5kZXJzdG9ybXNEYXlTbm93O1xyXG4gICAgICAgICAgICByZXR1cm4gdGh1bmRlcnN0b3Jtc05pZ2h0U25vdztcclxuXHJcbiAgICAgICAgY2FzZSAxMjgyOlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIHRodW5kZXJzdG9ybXNEYXlFeHRyZW1lU25vdztcclxuICAgICAgICAgICAgcmV0dXJuIHRodW5kZXJzdG9ybXNOaWdodEV4dHJlbWVTbm93O1xyXG5cclxuICAgICAgICBjYXNlIDI0MDY6XHJcbiAgICAgICAgICAgIHJldHVybiBsb2FkZXI7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBjb2RlUmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRQYXRoIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBnZXRQYXRoIH0gZnJvbSAnLi9pY29ucydcclxuaW1wb3J0IGhJY29uIGZyb20gJy4vYXNzZXN0cy9odW1pZGl0eS5zdmcnO1xyXG5pbXBvcnQgd0ljb24gZnJvbSAnLi9hc3Nlc3RzL3dpbmQuc3ZnJztcclxuaW1wb3J0IGNJbWcgZnJvbSAnLi9hc3Nlc3RzL2MucG5nJztcclxuaW1wb3J0IGZJbWcgZnJvbSAnLi9hc3Nlc3RzL2YucG5nJztcclxuXHJcblxyXG5jb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQnRuJyk7XHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xyXG5jb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlJyk7XHJcbmNvbnN0IGh1bWlkSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZEljb24nKTtcclxuY29uc3Qgd2luZEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZEljb24nKTtcclxuXHJcbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcclxuY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wVmFsdWUnKTtcclxuY29uc3QgZmVlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNWYWx1ZScpO1xyXG5jb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKTtcclxuY29uc3QgaHVtaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRWYWx1ZScpO1xyXG5jb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRWYWx1ZScpO1xyXG5jb25zdCB1bml0TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5pdCcpO1xyXG5cclxuZnVuY3Rpb24gc2V0TG9hZGVyKCkge1xyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9ICdfXyc7XHJcbiAgICBpY29uLnNyYyA9IGdldFBhdGgoMjQwNiwgMCk7XHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gJy0tJztcclxuICAgIGZlZWxzLnRleHRDb250ZW50ID0gJ19fJztcclxuICAgIGZlZWxzLmRhdGFzZXQudmFsdWUgPSAnX18nO1xyXG4gICAgdGVtcC5kYXRhc2V0LnZhbHVlID0gJ19fJztcclxuICAgIGh1bWlkLnRleHRDb250ZW50ID0gJ19fJztcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSAnX18nO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGxvY2F0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldExvYWRlcigpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MjMzY2ZlYmI1NzhhNDMzZDkyODEyMTIwODI0MjIwMiZxPSR7bG9jYXRpb259YCwge21vZGU6ICdjb3JzJ30pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBmZWVsc0MgPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2M7XHJcbiAgICAgICAgICAgIGNvbnN0IGZlZWxzRiA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZjtcclxuICAgICAgICAgICAgY29uc3QgdGVtcEMgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wRiA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRGF5ID0gZGF0YS5jdXJyZW50LmlzX2RheTtcclxuICAgICAgICAgICAgY29uc3QgaHVtaWQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGg7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge2ZlZWxzQywgZmVlbHNGLCB0ZW1wQywgdGVtcEYsIG5hbWUsIGNvZGUsIGlzRGF5LCBodW1pZCwgd2luZH07XHJcbiAgICAgICAgfWVsc2UgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVET00oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGlucCA9IGlucHV0LnZhbHVlID09ICcnID8gJ05ldyBEZWxoaScgOiBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNvbnN0IHVuaXQgPSB0b2dnbGUuZGF0YXNldC51bml0O1xyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgZ2V0RGF0YShpbnApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgaWNvbi5zcmMgPSBnZXRQYXRoKGRhdGEuY29kZSwgZGF0YS5pc0RheSk7XHJcbiAgICAgICAgaHVtaWQudGV4dENvbnRlbnQgPSBkYXRhLmh1bWlkO1xyXG4gICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSBkYXRhLndpbmQ7XHJcbiAgICAgICAgaWYodW5pdCA9PSAnYycpe1xyXG4gICAgICAgICAgICBmZWVscy50ZXh0Q29udGVudCA9IGRhdGEuZmVlbHNDO1xyXG4gICAgICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gZGF0YS50ZW1wQztcclxuICAgICAgICAgICAgZmVlbHMuZGF0YXNldC52YWx1ZSA9IGRhdGEuZmVlbHNGO1xyXG4gICAgICAgICAgICB0ZW1wLmRhdGFzZXQudmFsdWUgPSBkYXRhLnRlbXBGO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZlZWxzLnRleHRDb250ZW50ID0gZGF0YS5mZWVsc0Y7XHJcbiAgICAgICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBkYXRhLnRlbXBGO1xyXG4gICAgICAgICAgICBmZWVscy5kYXRhc2V0LnZhbHVlID0gZGF0YS5mZWVsc0M7XHJcbiAgICAgICAgICAgIHRlbXAuZGF0YXNldC52YWx1ZSA9IGRhdGEudGVtcEM7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnRXJyb3InO1xyXG4gICAgICAgIGljb24uc3JjID0gZ2V0UGF0aCgwLCAwKTtcclxuICAgICAgICBmZWVscy50ZXh0Q29udGVudCA9ICcwMCc7XHJcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9ICcwMCc7XHJcbiAgICAgICAgZmVlbHMuZGF0YXNldC52YWx1ZSA9ICcwMCc7XHJcbiAgICAgICAgdGVtcC5kYXRhc2V0LnZhbHVlID0gJzAwJztcclxuICAgICAgICBodW1pZC50ZXh0Q29udGVudCA9ICcwMCc7XHJcbiAgICAgICAgd2luZC50ZXh0Q29udGVudCA9ICcwMCc7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuaHVtaWRJY29uLnNyYyA9IGhJY29uO1xyXG53aW5kSWNvbi5zcmMgPSB3SWNvbjtcclxuXHJcbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xyXG4gICAgdXBkYXRlRE9NKCk7XHJcbiAgICBpbnB1dC5ibHVyKCk7XHJcbn0pO1xyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICBpZihlLmtleSA9PT0gJ0VudGVyJykgdXBkYXRlRE9NKCk7XHJcbn0pO1xyXG50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZih0b2dnbGUuZGF0YXNldC51bml0ID09ICdjJyl7XHJcbiAgICAgICAgdG9nZ2xlLmRhdGFzZXQudW5pdCA9ICdmJztcclxuICAgICAgICB0b2dnbGUudGV4dENvbnRlbnQgPSAnRic7XHJcbiAgICAgICAgdW5pdExhYmVsWzBdLnNyYyA9IGZJbWc7XHJcbiAgICAgICAgdW5pdExhYmVsWzFdLnNyYyA9IGZJbWc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvZ2dsZS5kYXRhc2V0LnVuaXQgPSAnYyc7XHJcbiAgICAgICAgdG9nZ2xlLnRleHRDb250ZW50ID0gJ0MnO1xyXG4gICAgICAgIHVuaXRMYWJlbFswXS5zcmMgPSBjSW1nO1xyXG4gICAgICAgIHVuaXRMYWJlbFsxXS5zcmMgPSBjSW1nO1xyXG4gICAgfVxyXG4gICAgbGV0IGZ0ID0gZmVlbHMudGV4dENvbnRlbnQ7XHJcbiAgICBmZWVscy50ZXh0Q29udGVudCA9IGZlZWxzLmRhdGFzZXQudmFsdWU7XHJcbiAgICBmZWVscy5kYXRhc2V0LnZhbHVlID0gZnQ7XHJcbiAgICBsZXQgdHQgPSB0ZW1wLnRleHRDb250ZW50O1xyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHRlbXAuZGF0YXNldC52YWx1ZTtcclxuICAgIHRlbXAuZGF0YXNldC52YWx1ZSA9IHR0O1xyXG59KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpbnB1dC5mb2N1cygpO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==