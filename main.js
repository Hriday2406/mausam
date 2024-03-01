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
	user-select: none;
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
		width: 98vw;
	}
	header {
		width: 80vw;
	}
	main {
		scale: 0.75;
	}
	#madeBy {
		width: 100vw;
		font-size: 0.75rem;
		flex-wrap: wrap;
	}
}

@media screen and (width <= 375px) {
	main {
		padding-top: 40px;
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

@media screen and (height <= 700px) {
	main {
		height: 55vh;
	}
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;CACC,iBAAiB;CACjB,iCAAiC;CACjC,YAAY;IACT,uBAAuB;AAC3B;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,YAAY;CACZ,aAAa;CACb,yBAAyB;CACzB,mEAAmE;;CAEnE,yBAAyB;CACzB,mEAAmE;;CAEnE,mBAAmB;CACnB,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA,WAAW;;AAEX;CACC,iBAAiB;CACjB,YAAY;CACZ,gBAAgB;CAChB,aAAa;CACb,SAAS;CACT,iBAAiB;AAClB;AACA;CACC,YAAY;CACZ,iBAAiB;CACjB,uBAAuB;CACvB,mBAAmB;CACnB,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,0LAA0L;CAC1L,eAAe;AAChB;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,iBAAiB;AAClB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,YAAY;CACZ,UAAU;AACX;AACA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,gBAAgB;CAChB,YAAY;CACZ,eAAe;AAChB;AACA;CACC,aAAa;AACd;AACA;CACC,YAAY;CACZ,iBAAiB;CACjB,iBAAiB;CACjB,WAAW;CACX,uBAAuB;CACvB,YAAY;CACZ,mBAAmB;CACnB,sGAAsG;CACtG,aAAa;CACb,qBAAqB;CACrB,iBAAiB;CACjB,eAAe;CACf,gEAAgE;AACjE;AACA;CACC,yBAAyB;CACzB,gGAAgG;AACjG;AACA;CACC,0BAA0B;AAC3B;;AAEA,SAAS;;AAET;CACC,aAAa;CACb,YAAY;CACZ,eAAe;CACf,iBAAiB;CACjB,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,mBAAmB;CACnB,QAAQ;CACR,kBAAkB;CAClB,YAAY;AACb;AACA;CACC,gBAAgB;AACjB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,iBAAiB;AAClB;AACA;CACC,eAAe;CACf,gBAAgB;AACjB;AACA;CACC,WAAW;CACX,mBAAmB;AACpB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,QAAQ;AACT;AACA;CACC,WAAW;CACX,kBAAkB;AACnB;;AAEA,WAAW;;AAEX;CACC,iBAAiB;CACjB,aAAa;CACb,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;AACA;CACC,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,YAAY;CACZ,mBAAmB;AACpB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;;AAEA,YAAY;;AAEZ;CACC,iBAAiB;CACjB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,QAAQ;CACR,kBAAkB;CAClB,SAAS;CACT,iBAAiB;AAClB;AACA;CACC,YAAY;AACb;AACA;CACC,WAAW;CACX,WAAW;AACZ;;AAEA,kBAAkB;;AAElB;CACC;EACC,WAAW;CACZ;CACA;EACC,WAAW;CACZ;CACA;EACC,WAAW;CACZ;CACA;EACC,YAAY;EACZ,kBAAkB;EAClB,eAAe;CAChB;AACD;;AAEA;CACC;EACC,iBAAiB;CAClB;CACA;EACC,iBAAiB;CAClB;CACA;EACC,YAAY;CACb;CACA;EACC,oBAAoB;CACrB;AACD;;AAEA;CACC;EACC,YAAY;CACb;AACD","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tpadding: 3dvh 0px;\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\tcolor: white;\r\n    background-color: black;\r\n}\r\n\r\n.container {\r\n\theight: 94dvh;\r\n\twidth: 500px;\r\n\tmargin: auto;\r\n\tpadding: 50px;\r\n\tbackground-color: #0093E9;\r\n\tbackground-image: linear-gradient(160deg, #0093E9 0%, #75e6d8 100%);\r\n\r\n\tbackground-color: #0093E9;\r\n\tbackground-image: linear-gradient(300deg, #0093E9 0%, #75e6d8 100%);\r\n\r\n\tborder-radius: 75px;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n\tfont-size: 1.5rem;\r\n\theight: 45px;\r\n\tmargin-top: 20px;\r\n\tdisplay: flex;\r\n\tgap: 10px;\r\n\tuser-select: none;\r\n}\r\n.search {\r\n\twidth: 350px;\r\n\tpadding: 0px 20px;\r\n\tbackground-color: white;\r\n\tborder-radius: 25px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tbox-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px, rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;\r\n\tcursor: pointer;\r\n}\r\n#searchBtn {\r\n\tdisplay: grid;\r\n\tplace-items: center;\r\n\tuser-select: none;\r\n}\r\n#searchBtn:active{\r\n\ttransform: scale(0.8);\r\n}\r\n.search svg {\r\n\theight: 25px;\r\n\tfill: grey;\r\n}\r\ninput {\r\n\tfont-size: 1.25rem;\r\n\theight: 42px;\r\n\twidth: 100%;\r\n\tbackground: none;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\r\ninput:focus {\r\n\toutline: none;\r\n}\r\n#toggle {\r\n\tcolor: black;\r\n\tfont-size: 1.5rem;\r\n\tfont-weight: bold;\r\n\twidth: 45px;\r\n\tbackground-color: white;\r\n\tborder: none;\r\n\tborder-radius: 25px;\r\n\tbox-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;\r\n\tdisplay: grid;\r\n\tplace-content: center;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n\ttransition: transform 0.1s linear, background-color 0.2s ease-in;\r\n}\r\n#toggle:hover {\r\n\tbackground-color: #70ddd8;\r\n\tbox-shadow: rgba(0, 0, 0, 0.116) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0) -3px -3px 6px 1px inset;\r\n}\r\n#toggle:active {\r\n\ttransform: translateY(5px);\r\n}\r\n\r\n/* Main */\r\n\r\nmain {\r\n\theight: 400px;\r\n\twidth: 300px;\r\n\tfont-size: 3rem;\r\n\tuser-select: none;\r\n\ttext-align: center;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tgap: 0px;\r\n\tposition: relative;\r\n\tbottom: 50px;\r\n}\r\n#location {\r\n\tmargin-top: 20px;\r\n}\r\n.temperature {\r\n\tposition: relative;\r\n}\r\n.temp {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-left: 20px;\r\n}\r\n#tempValue {\r\n\tfont-size: 7rem;\r\n\tmargin-top: 20px;\r\n}\r\n.temp img {\r\n\twidth: 25px;\r\n\tmargin-bottom: 20px;\r\n}\r\n#feels {\r\n\tfont-size: 1.25rem;\r\n}\r\n.feels {\r\n\tmargin-left: 25px;\r\n\tposition: relative;\r\n\tbottom: 20px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n}\r\n.feels img {\r\n\twidth: 10px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n/* Footer */\r\n\r\nfooter {\r\n\tfont-size: 1.5rem;\r\n\theight: 150px;\r\n\tuser-select: none;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n.details {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.details span{\r\n\tfont-size: 3.5rem;\r\n}\r\n.details img{\r\n\twidth: 150px;\r\n\tmargin-right: -20px;\r\n}\r\n.humid img {\r\n\tmargin-left: -40px;\r\n}\r\n.wind img {\r\n\tmargin-left: -10px;\r\n}\r\n\r\n/* Made By */\r\n\r\n#madeBy {\r\n\tfont-size: 0.9rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tuser-select: none;\r\n}\r\n#madeBy a{\r\n\tcolor: white;\r\n}\r\n#madeBy svg {\r\n\twidth: 21px;\r\n\tfill: white;\r\n}\r\n\r\n/* Media Queries */\r\n\r\n@media screen and (width <= 500px) {\r\n\t.container{\r\n\t\twidth: 98vw;\r\n\t}\r\n\theader {\r\n\t\twidth: 80vw;\r\n\t}\r\n\tmain {\r\n\t\tscale: 0.75;\r\n\t}\r\n\t#madeBy {\r\n\t\twidth: 100vw;\r\n\t\tfont-size: 0.75rem;\r\n\t\tflex-wrap: wrap;\r\n\t}\r\n}\r\n\r\n@media screen and (width <= 375px) {\r\n\tmain {\r\n\t\tpadding-top: 40px;\r\n\t}\r\n\t.details span{\r\n\t\tfont-size: 2.5rem;\r\n\t}\r\n\t.details img {\r\n\t\twidth: 125px;\r\n\t}\r\n\tfooter {\r\n\t\tmargin-bottom: -50px;\r\n\t}\r\n}\r\n\r\n@media screen and (height <= 700px) {\r\n\tmain {\r\n\t\theight: 55vh;\r\n\t}\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1k7QUFDVTtBQUNKO0FBQ0o7QUFDQTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtDQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SEFBeUgsU0FBUyxJQUFJLGFBQWE7QUFDbko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0NBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLG1CQUFtQiwrQ0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBSztBQUNyQixlQUFlLDhDQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkNBQUk7QUFDL0IsMkJBQTJCLDJDQUFJO0FBQy9CLE1BQU07QUFDTjtBQUNBO0FBQ0EsMkJBQTJCLDJDQUFJO0FBQy9CLDJCQUEyQiwyQ0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF1c2FtLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tYXVzYW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21hdXNhbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21hdXNhbS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tYXVzYW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWF1c2FtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tYXVzYW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWF1c2FtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21hdXNhbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21hdXNhbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hdXNhbS8uL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly9tYXVzYW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWF1c2FtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21hdXNhbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWF1c2FtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWF1c2FtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWF1c2FtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWF1c2FtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21hdXNhbS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbWF1c2FtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbmIsIHUsIGksIGNlbnRlcixcclxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXHJcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXHJcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDEwMCU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbip7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuXHRwYWRkaW5nOiAzZHZoIDBweDtcclxuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuXHRjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcblx0aGVpZ2h0OiA5NGR2aDtcclxuXHR3aWR0aDogNTAwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHBhZGRpbmc6IDUwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOTNFOTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjMDA5M0U5IDAlLCAjNzVlNmQ4IDEwMCUpO1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5M0U5O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDBkZWcsICMwMDkzRTkgMCUsICM3NWU2ZDggMTAwJSk7XHJcblxyXG5cdGJvcmRlci1yYWRpdXM6IDc1cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogSEVBREVSICovXHJcblxyXG5oZWFkZXIge1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdGhlaWdodDogNDVweDtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxMHB4O1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5zZWFyY2gge1xyXG5cdHdpZHRoOiAzNTBweDtcclxuXHRwYWRkaW5nOiAwcHggMjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Ym94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMzBweCA2MHB4IC0xMnB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMzZweCAtMThweCwgcmdiKDIwNCwgMjE5LCAyMzIpIDNweCAzcHggNnB4IDBweCBpbnNldCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIC0zcHggLTNweCA2cHggMXB4IGluc2V0O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jc2VhcmNoQnRuIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuI3NlYXJjaEJ0bjphY3RpdmV7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcbi5zZWFyY2ggc3ZnIHtcclxuXHRoZWlnaHQ6IDI1cHg7XHJcblx0ZmlsbDogZ3JleTtcclxufVxyXG5pbnB1dCB7XHJcblx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG5cdGhlaWdodDogNDJweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI3RvZ2dsZSB7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHdpZHRoOiA0NXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cdGJveC1zaGFkb3c6IHJnYigyMDQsIDIxOSwgMjMyKSAzcHggM3B4IDZweCAwcHggaW5zZXQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAtM3B4IC0zcHggNnB4IDFweCBpbnNldDtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgbGluZWFyLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbjtcclxufVxyXG4jdG9nZ2xlOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzBkZGQ4O1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMTYpIDNweCAzcHggNnB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwKSAtM3B4IC0zcHggNnB4IDFweCBpbnNldDtcclxufVxyXG4jdG9nZ2xlOmFjdGl2ZSB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XHJcbn1cclxuXHJcbi8qIE1haW4gKi9cclxuXHJcbm1haW4ge1xyXG5cdGhlaWdodDogNDAwcHg7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG5cdGZvbnQtc2l6ZTogM3JlbTtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3R0b206IDUwcHg7XHJcbn1cclxuI2xvY2F0aW9uIHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi50ZW1wZXJhdHVyZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50ZW1wIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuI3RlbXBWYWx1ZSB7XHJcblx0Zm9udC1zaXplOiA3cmVtO1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnRlbXAgaW1nIHtcclxuXHR3aWR0aDogMjVweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiNmZWVscyB7XHJcblx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcbi5mZWVscyB7XHJcblx0bWFyZ2luLWxlZnQ6IDI1cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJvdHRvbTogMjBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiA1cHg7XHJcbn1cclxuLmZlZWxzIGltZyB7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4vKiBGb290ZXIgKi9cclxuXHJcbmZvb3RlciB7XHJcblx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0aGVpZ2h0OiAxNTBweDtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmRldGFpbHMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZGV0YWlscyBzcGFue1xyXG5cdGZvbnQtc2l6ZTogMy41cmVtO1xyXG59XHJcbi5kZXRhaWxzIGltZ3tcclxuXHR3aWR0aDogMTUwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAtMjBweDtcclxufVxyXG4uaHVtaWQgaW1nIHtcclxuXHRtYXJnaW4tbGVmdDogLTQwcHg7XHJcbn1cclxuLndpbmQgaW1nIHtcclxuXHRtYXJnaW4tbGVmdDogLTEwcHg7XHJcbn1cclxuXHJcbi8qIE1hZGUgQnkgKi9cclxuXHJcbiNtYWRlQnkge1xyXG5cdGZvbnQtc2l6ZTogMC45cmVtO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDVweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMDAlO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbiNtYWRlQnkgYXtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuI21hZGVCeSBzdmcge1xyXG5cdHdpZHRoOiAyMXB4O1xyXG5cdGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyaWVzICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGggPD0gNTAwcHgpIHtcclxuXHQuY29udGFpbmVye1xyXG5cdFx0d2lkdGg6IDk4dnc7XHJcblx0fVxyXG5cdGhlYWRlciB7XHJcblx0XHR3aWR0aDogODB2dztcclxuXHR9XHJcblx0bWFpbiB7XHJcblx0XHRzY2FsZTogMC43NTtcclxuXHR9XHJcblx0I21hZGVCeSB7XHJcblx0XHR3aWR0aDogMTAwdnc7XHJcblx0XHRmb250LXNpemU6IDAuNzVyZW07XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGggPD0gMzc1cHgpIHtcclxuXHRtYWluIHtcclxuXHRcdHBhZGRpbmctdG9wOiA0MHB4O1xyXG5cdH1cclxuXHQuZGV0YWlscyBzcGFue1xyXG5cdFx0Zm9udC1zaXplOiAyLjVyZW07XHJcblx0fVxyXG5cdC5kZXRhaWxzIGltZyB7XHJcblx0XHR3aWR0aDogMTI1cHg7XHJcblx0fVxyXG5cdGZvb3RlciB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAtNTBweDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChoZWlnaHQgPD0gNzAwcHgpIHtcclxuXHRtYWluIHtcclxuXHRcdGhlaWdodDogNTV2aDtcclxuXHR9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixpQ0FBaUM7Q0FDakMsWUFBWTtJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsbUVBQW1FOztDQUVuRSx5QkFBeUI7Q0FDekIsbUVBQW1FOztDQUVuRSxtQkFBbUI7Q0FDbkIsa0JBQWtC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RUFDQyxZQUFZO0NBQ2I7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHBhZGRpbmc6IDNkdmggMHB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHRoZWlnaHQ6IDk0ZHZoO1xcclxcblxcdHdpZHRoOiA1MDBweDtcXHJcXG5cXHRtYXJnaW46IGF1dG87XFxyXFxuXFx0cGFkZGluZzogNTBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5M0U5O1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICMwMDkzRTkgMCUsICM3NWU2ZDggMTAwJSk7XFxyXFxuXFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwOTNFOTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCAjMDA5M0U5IDAlLCAjNzVlNmQ4IDEwMCUpO1xcclxcblxcclxcblxcdGJvcmRlci1yYWRpdXM6IDc1cHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMTBweDtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLnNlYXJjaCB7XFxyXFxuXFx0d2lkdGg6IDM1MHB4O1xcclxcblxcdHBhZGRpbmc6IDBweCAyMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAzMHB4IDYwcHggLTEycHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMThweCAzNnB4IC0xOHB4LCByZ2IoMjA0LCAyMTksIDIzMikgM3B4IDNweCA2cHggMHB4IGluc2V0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgLTNweCAtM3B4IDZweCAxcHggaW5zZXQ7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jc2VhcmNoQnRuIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbiNzZWFyY2hCdG46YWN0aXZle1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuLnNlYXJjaCBzdmcge1xcclxcblxcdGhlaWdodDogMjVweDtcXHJcXG5cXHRmaWxsOiBncmV5O1xcclxcbn1cXHJcXG5pbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcclxcblxcdGhlaWdodDogNDJweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4jdG9nZ2xlIHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0d2lkdGg6IDQ1cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogcmdiKDIwNCwgMjE5LCAyMzIpIDNweCAzcHggNnB4IDBweCBpbnNldCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIC0zcHggLTNweCA2cHggMXB4IGluc2V0O1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0cGxhY2UtY29udGVudDogY2VudGVyO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBsaW5lYXIsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluO1xcclxcbn1cXHJcXG4jdG9nZ2xlOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzBkZGQ4O1xcclxcblxcdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMTYpIDNweCAzcHggNnB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwKSAtM3B4IC0zcHggNnB4IDFweCBpbnNldDtcXHJcXG59XFxyXFxuI3RvZ2dsZTphY3RpdmUge1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuXFx0aGVpZ2h0OiA0MDBweDtcXHJcXG5cXHR3aWR0aDogMzAwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAwcHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuI2xvY2F0aW9uIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG4udGVtcGVyYXR1cmUge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLnRlbXAge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuI3RlbXBWYWx1ZSB7XFxyXFxuXFx0Zm9udC1zaXplOiA3cmVtO1xcclxcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcbi50ZW1wIGltZyB7XFxyXFxuXFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuI2ZlZWxzIHtcXHJcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxyXFxufVxcclxcbi5mZWVscyB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJvdHRvbTogMjBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiA1cHg7XFxyXFxufVxcclxcbi5mZWVscyBpbWcge1xcclxcblxcdHdpZHRoOiAxMHB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDE1MHB4O1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRldGFpbHMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRldGFpbHMgc3BhbntcXHJcXG5cXHRmb250LXNpemU6IDMuNXJlbTtcXHJcXG59XFxyXFxuLmRldGFpbHMgaW1ne1xcclxcblxcdHdpZHRoOiAxNTBweDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcclxcbn1cXHJcXG4uaHVtaWQgaW1nIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogLTQwcHg7XFxyXFxufVxcclxcbi53aW5kIGltZyB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWRlIEJ5ICovXFxyXFxuXFxyXFxuI21hZGVCeSB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogNXB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDEwMCU7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbiNtYWRlQnkgYXtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbiNtYWRlQnkgc3ZnIHtcXHJcXG5cXHR3aWR0aDogMjFweDtcXHJcXG5cXHRmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aCA8PSA1MDBweCkge1xcclxcblxcdC5jb250YWluZXJ7XFxyXFxuXFx0XFx0d2lkdGg6IDk4dnc7XFxyXFxuXFx0fVxcclxcblxcdGhlYWRlciB7XFxyXFxuXFx0XFx0d2lkdGg6IDgwdnc7XFxyXFxuXFx0fVxcclxcblxcdG1haW4ge1xcclxcblxcdFxcdHNjYWxlOiAwLjc1O1xcclxcblxcdH1cXHJcXG5cXHQjbWFkZUJ5IHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcclxcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aCA8PSAzNzVweCkge1xcclxcblxcdG1haW4ge1xcclxcblxcdFxcdHBhZGRpbmctdG9wOiA0MHB4O1xcclxcblxcdH1cXHJcXG5cXHQuZGV0YWlscyBzcGFue1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMi41cmVtO1xcclxcblxcdH1cXHJcXG5cXHQuZGV0YWlscyBpbWcge1xcclxcblxcdFxcdHdpZHRoOiAxMjVweDtcXHJcXG5cXHR9XFxyXFxuXFx0Zm9vdGVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAtNTBweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChoZWlnaHQgPD0gNzAwcHgpIHtcXHJcXG5cXHRtYWluIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDU1dmg7XFxyXFxuXFx0fVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gRGF5ID09IDFcclxuaW1wb3J0IGNsZWFyRGF5IGZyb20gJy4vYXNzZXN0cy8xL2NsZWFyLWRheS5zdmcnO1xyXG5pbXBvcnQgY2xvdWR5IGZyb20gJy4vYXNzZXN0cy8xL2Nsb3VkeS5zdmcnO1xyXG5pbXBvcnQgY29kZVJlZCBmcm9tICcuL2Fzc2VzdHMvY29kZS1yZWQuc3ZnJztcclxuaW1wb3J0IGV4dHJlbWVEYXlEcml6emxlIGZyb20gJy4vYXNzZXN0cy8xL2V4dHJlbWUtZGF5LWRyaXp6bGUuc3ZnJztcclxuaW1wb3J0IGV4dHJlbWVEYXlGb2cgZnJvbSAnLi9hc3Nlc3RzLzEvZXh0cmVtZS1kYXktZm9nLnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lRGF5SGFpbCBmcm9tICcuL2Fzc2VzdHMvMS9leHRyZW1lLWRheS1oYWlsLnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lRGF5UmFpbiBmcm9tICcuL2Fzc2VzdHMvMS9leHRyZW1lLWRheS1yYWluLnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lRGF5U2xlZXQgZnJvbSAnLi9hc3Nlc3RzLzEvZXh0cmVtZS1kYXktc2xlZXQuc3ZnJztcclxuaW1wb3J0IGV4dHJlbWVEYXlTbm93IGZyb20gJy4vYXNzZXN0cy8xL2V4dHJlbWUtZGF5LXNub3cuc3ZnJztcclxuaW1wb3J0IGV4dHJlbWVSYWluIGZyb20gJy4vYXNzZXN0cy8xL2V4dHJlbWUtcmFpbi5zdmcnO1xyXG5pbXBvcnQgZXh0cmVtZVNsZWV0IGZyb20gJy4vYXNzZXN0cy8xL2V4dHJlbWUtc2xlZXQuc3ZnJztcclxuaW1wb3J0IGV4dHJlbWVTbm93IGZyb20gJy4vYXNzZXN0cy8xL2V4dHJlbWUtc25vdy5zdmcnO1xyXG5pbXBvcnQgZm9nRGF5IGZyb20gJy4vYXNzZXN0cy8xL2ZvZy1kYXkuc3ZnJztcclxuaW1wb3J0IGZvZ05pZ2h0IGZyb20gJy4vYXNzZXN0cy8xL2ZvZy1uaWdodC5zdmcnO1xyXG5pbXBvcnQgbG9hZGVyIGZyb20gJy4vYXNzZXN0cy9wb2xsZW4uc3ZnJ1xyXG5pbXBvcnQgbWlzdCBmcm9tICcuL2Fzc2VzdHMvMS9taXN0LnN2Zyc7XHJcbi8vIGltcG9ydCBub3RBdmFpbGFibGUgZnJvbSAnLi9hc3Nlc3RzLzEvbm90LWF2YWlsYWJsZS5zdmcnO1xyXG5pbXBvcnQgb3ZlcmNhc3REYXkgZnJvbSAnLi9hc3Nlc3RzLzEvb3ZlcmNhc3QtZGF5LnN2Zyc7XHJcbmltcG9ydCBvdmVyY2FzdERheURyaXp6bGUgZnJvbSAnLi9hc3Nlc3RzLzEvb3ZlcmNhc3QtZGF5LWRyaXp6bGUuc3ZnJztcclxuaW1wb3J0IG92ZXJjYXN0RGF5UmFpbiBmcm9tICcuL2Fzc2VzdHMvMS9vdmVyY2FzdC1kYXktcmFpbi5zdmcnO1xyXG5pbXBvcnQgb3ZlcmNhc3REYXlTbm93IGZyb20gJy4vYXNzZXN0cy8xL292ZXJjYXN0LWRheS1zbm93LnN2Zyc7XHJcbmltcG9ydCBwYXJ0bHlDbG91ZHlEYXkgZnJvbSAnLi9hc3Nlc3RzLzEvcGFydGx5LWNsb3VkeS1kYXkuc3ZnJ1xyXG5pbXBvcnQgcGFydGx5Q2xvdWR5RGF5RHJpenpsZSBmcm9tICcuL2Fzc2VzdHMvMS9wYXJ0bHktY2xvdWR5LWRheS1kcml6emxlLnN2ZydcclxuaW1wb3J0IHBhcnRseUNsb3VkeURheUhhaWwgZnJvbSAnLi9hc3Nlc3RzLzEvcGFydGx5LWNsb3VkeS1kYXktaGFpbC5zdmcnXHJcbmltcG9ydCBwYXJ0bHlDbG91ZHlEYXlSYWluIGZyb20gJy4vYXNzZXN0cy8xL3BhcnRseS1jbG91ZHktZGF5LXJhaW4uc3ZnJ1xyXG5pbXBvcnQgcGFydGx5Q2xvdWR5RGF5U2xlZXQgZnJvbSAnLi9hc3Nlc3RzLzEvcGFydGx5LWNsb3VkeS1kYXktc2xlZXQuc3ZnJ1xyXG5pbXBvcnQgcGFydGx5Q2xvdWR5RGF5U25vdyBmcm9tICcuL2Fzc2VzdHMvMS9wYXJ0bHktY2xvdWR5LWRheS1zbm93LnN2ZydcclxuaW1wb3J0IHJhaW4gZnJvbSAnLi9hc3Nlc3RzLzEvcmFpbi5zdmcnO1xyXG5pbXBvcnQgc2xlZXQgZnJvbSAnLi9hc3Nlc3RzLzEvc2xlZXQuc3ZnJztcclxuaW1wb3J0IHNub3cgZnJvbSAnLi9hc3Nlc3RzLzEvc25vdy5zdmcnO1xyXG5pbXBvcnQgc25vd2ZsYWtlIGZyb20gJy4vYXNzZXN0cy8xL3Nub3dmbGFrZS5zdmcnO1xyXG5pbXBvcnQgdGh1bmRlcnN0b3Jtc0RheUV4dHJlbWVSYWluIGZyb20gJy4vYXNzZXN0cy8xL3RodW5kZXJzdG9ybXMtZGF5LWV4dHJlbWUtcmFpbi5zdmcnO1xyXG5pbXBvcnQgdGh1bmRlcnN0b3Jtc0RheUV4dHJlbWVTbm93IGZyb20gJy4vYXNzZXN0cy8xL3RodW5kZXJzdG9ybXMtZGF5LWV4dHJlbWUtc25vdy5zdmcnO1xyXG5pbXBvcnQgdGh1bmRlcnN0b3Jtc0RheVJhaW4gZnJvbSAnLi9hc3Nlc3RzLzEvdGh1bmRlcnN0b3Jtcy1kYXktcmFpbi5zdmcnO1xyXG5pbXBvcnQgdGh1bmRlcnN0b3Jtc0RheVNub3cgZnJvbSAnLi9hc3Nlc3RzLzEvdGh1bmRlcnN0b3Jtcy1kYXktc25vdy5zdmcnO1xyXG5pbXBvcnQgdGh1bmRlcnN0b3Jtc1JhaW4gZnJvbSAnLi9hc3Nlc3RzLzEvdGh1bmRlcnN0b3Jtcy1yYWluLnN2Zyc7XHJcbmltcG9ydCB0b3JuYWRvIGZyb20gJy4vYXNzZXN0cy8xL3Rvcm5hZG8uc3ZnJztcclxuaW1wb3J0IHdpbmRTbm93IGZyb20gJy4vYXNzZXN0cy8xL3dpbmQtc25vdy5zdmcnO1xyXG4vLyBOaWdodCA9PSAwXHJcbmltcG9ydCBjbGVhck5pZ2h0IGZyb20gJy4vYXNzZXN0cy8wL2NsZWFyLW5pZ2h0LnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lTmlnaHREcml6emxlIGZyb20gJy4vYXNzZXN0cy8wL2V4dHJlbWUtbmlnaHQtZHJpenpsZS5zdmcnO1xyXG5pbXBvcnQgZXh0cmVtZU5pZ2h0Rm9nIGZyb20gJy4vYXNzZXN0cy8wL2V4dHJlbWUtbmlnaHQtZm9nLnN2Zyc7XHJcbmltcG9ydCBleHRyZW1lTmlnaHRIYWlsIGZyb20gJy4vYXNzZXN0cy8wL2V4dHJlbWUtbmlnaHQtaGFpbC5zdmcnO1xyXG5pbXBvcnQgZXh0cmVtZU5pZ2h0UmFpbiBmcm9tICcuL2Fzc2VzdHMvMC9leHRyZW1lLW5pZ2h0LXJhaW4uc3ZnJztcclxuaW1wb3J0IGV4dHJlbWVOaWdodFNsZWV0IGZyb20gJy4vYXNzZXN0cy8wL2V4dHJlbWUtbmlnaHQtc2xlZXQuc3ZnJztcclxuaW1wb3J0IGV4dHJlbWVOaWdodFNub3cgZnJvbSAnLi9hc3Nlc3RzLzAvZXh0cmVtZS1uaWdodC1zbm93LnN2Zyc7XHJcbmltcG9ydCBvdmVyY2FzdE5pZ2h0IGZyb20gJy4vYXNzZXN0cy8wL292ZXJjYXN0LW5pZ2h0LnN2Zyc7XHJcbmltcG9ydCBvdmVyY2FzdE5pZ2h0RHJpenpsZSBmcm9tICcuL2Fzc2VzdHMvMC9vdmVyY2FzdC1uaWdodC1kcml6emxlLnN2Zyc7XHJcbmltcG9ydCBvdmVyY2FzdE5pZ2h0UmFpbiBmcm9tICcuL2Fzc2VzdHMvMC9vdmVyY2FzdC1uaWdodC1yYWluLnN2Zyc7XHJcbmltcG9ydCBvdmVyY2FzdE5pZ2h0U25vdyBmcm9tICcuL2Fzc2VzdHMvMC9vdmVyY2FzdC1uaWdodC1zbm93LnN2Zyc7XHJcbmltcG9ydCBwYXJ0bHlDbG91ZHlOaWdodCBmcm9tICcuL2Fzc2VzdHMvMC9wYXJ0bHktY2xvdWR5LW5pZ2h0LnN2ZydcclxuaW1wb3J0IHBhcnRseUNsb3VkeU5pZ2h0RHJpenpsZSBmcm9tICcuL2Fzc2VzdHMvMC9wYXJ0bHktY2xvdWR5LW5pZ2h0LWRyaXp6bGUuc3ZnJ1xyXG5pbXBvcnQgcGFydGx5Q2xvdWR5TmlnaHRIYWlsIGZyb20gJy4vYXNzZXN0cy8wL3BhcnRseS1jbG91ZHktbmlnaHQtaGFpbC5zdmcnXHJcbmltcG9ydCBwYXJ0bHlDbG91ZHlOaWdodFJhaW4gZnJvbSAnLi9hc3Nlc3RzLzAvcGFydGx5LWNsb3VkeS1uaWdodC1yYWluLnN2ZydcclxuaW1wb3J0IHBhcnRseUNsb3VkeU5pZ2h0U2xlZXQgZnJvbSAnLi9hc3Nlc3RzLzAvcGFydGx5LWNsb3VkeS1uaWdodC1zbGVldC5zdmcnXHJcbmltcG9ydCBwYXJ0bHlDbG91ZHlOaWdodFNub3cgZnJvbSAnLi9hc3Nlc3RzLzAvcGFydGx5LWNsb3VkeS1uaWdodC1zbm93LnN2ZydcclxuaW1wb3J0IHRodW5kZXJzdG9ybXNOaWdodEV4dHJlbWVSYWluIGZyb20gJy4vYXNzZXN0cy8wL3RodW5kZXJzdG9ybXMtbmlnaHQtZXh0cmVtZS1yYWluLnN2Zyc7XHJcbmltcG9ydCB0aHVuZGVyc3Rvcm1zTmlnaHRFeHRyZW1lU25vdyBmcm9tICcuL2Fzc2VzdHMvMC90aHVuZGVyc3Rvcm1zLW5pZ2h0LWV4dHJlbWUtc25vdy5zdmcnO1xyXG5pbXBvcnQgdGh1bmRlcnN0b3Jtc05pZ2h0UmFpbiBmcm9tICcuL2Fzc2VzdHMvMC90aHVuZGVyc3Rvcm1zLW5pZ2h0LXJhaW4uc3ZnJztcclxuaW1wb3J0IHRodW5kZXJzdG9ybXNOaWdodFNub3cgZnJvbSAnLi9hc3Nlc3RzLzAvdGh1bmRlcnN0b3Jtcy1uaWdodC1zbm93LnN2Zyc7XHJcblxyXG5mdW5jdGlvbiBnZXRQYXRoKGNvZGUsIGlzRGF5KXtcclxuICAgIHN3aXRjaCAoY29kZSkge1xyXG4gICAgICAgIGNhc2UgMTAwMDpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBjbGVhckRheTtcclxuICAgICAgICAgICAgcmV0dXJuIGNsZWFyTmlnaHQ7XHJcblxyXG4gICAgICAgIGNhc2UgMTAwMzpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBwYXJ0bHlDbG91ZHlEYXk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0bHlDbG91ZHlOaWdodDtcclxuXHJcbiAgICAgICAgY2FzZSAxMDA2OlxyXG4gICAgICAgICAgICByZXR1cm4gY2xvdWR5O1xyXG5cclxuICAgICAgICBjYXNlIDEwMDk6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gb3ZlcmNhc3REYXk7XHJcbiAgICAgICAgICAgIHJldHVybiBvdmVyY2FzdE5pZ2h0O1xyXG5cclxuICAgICAgICBjYXNlIDEwMzA6XHJcbiAgICAgICAgICAgIHJldHVybiBtaXN0O1xyXG5cclxuICAgICAgICBjYXNlIDEwNjM6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gcGFydGx5Q2xvdWR5RGF5UmFpbjtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRseUNsb3VkeU5pZ2h0UmFpbjtcclxuXHJcbiAgICAgICAgY2FzZSAxMDY2OlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIHBhcnRseUNsb3VkeURheVNub3c7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0bHlDbG91ZHlOaWdodFNub3c7XHJcblxyXG4gICAgICAgIGNhc2UgMTA2OTpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBwYXJ0bHlDbG91ZHlEYXlTbGVldDtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRseUNsb3VkeU5pZ2h0U2xlZXQ7XHJcblxyXG4gICAgICAgIGNhc2UgMTA3MjpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBwYXJ0bHlDbG91ZHlEYXlIYWlsO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydGx5Q2xvdWR5TmlnaHRIYWlsO1xyXG5cclxuICAgICAgICBjYXNlIDEwODc6XHJcbiAgICAgICAgICAgIHJldHVybiB0aHVuZGVyc3Rvcm1zUmFpbjtcclxuXHJcbiAgICAgICAgY2FzZSAxMTE0OlxyXG4gICAgICAgICAgICByZXR1cm4gd2luZFNub3c7XHJcblxyXG4gICAgICAgIGNhc2UgMTExNzpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBleHRyZW1lRGF5U25vdztcclxuICAgICAgICAgICAgcmV0dXJuIGV4dHJlbWVOaWdodFNub3c7XHJcblxyXG4gICAgICAgIGNhc2UgMTEzNTpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBmb2dEYXk7XHJcbiAgICAgICAgICAgIHJldHVybiBmb2dOaWdodDtcclxuXHJcbiAgICAgICAgY2FzZSAxMTQ3OlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIGV4dHJlbWVEYXlGb2c7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRyZW1lTmlnaHRGb2c7XHJcblxyXG4gICAgICAgIGNhc2UgMTE1MDpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBwYXJ0bHlDbG91ZHlEYXlEcml6emxlO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydGx5Q2xvdWR5TmlnaHREcml6emxlO1xyXG5cclxuICAgICAgICBjYXNlIDExNTM6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gcGFydGx5Q2xvdWR5RGF5RHJpenpsZTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRseUNsb3VkeU5pZ2h0RHJpenpsZTtcclxuXHJcbiAgICAgICAgY2FzZSAxMTY4OlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIG92ZXJjYXN0RGF5RHJpenpsZTtcclxuICAgICAgICAgICAgcmV0dXJuIG92ZXJjYXN0TmlnaHREcml6emxlO1xyXG5cclxuICAgICAgICBjYXNlIDExNzE6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gZXh0cmVtZURheURyaXp6bGU7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRyZW1lTmlnaHREcml6emxlO1xyXG5cclxuICAgICAgICBjYXNlIDExODA6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gcGFydGx5Q2xvdWR5RGF5UmFpbjtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRseUNsb3VkeU5pZ2h0UmFpbjtcclxuXHJcbiAgICAgICAgY2FzZSAxMTgzOlxyXG4gICAgICAgICAgICByZXR1cm4gcmFpbjtcclxuXHJcbiAgICAgICAgY2FzZSAxMTg2OlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIHBhcnRseUNsb3VkeURheVJhaW47XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0bHlDbG91ZHlOaWdodFJhaW47XHJcblxyXG4gICAgICAgIGNhc2UgMTE4OTpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBvdmVyY2FzdERheVJhaW47XHJcbiAgICAgICAgICAgIHJldHVybiBvdmVyY2FzdE5pZ2h0UmFpbjtcclxuXHJcbiAgICAgICAgY2FzZSAxMTkyOlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIGV4dHJlbWVEYXlSYWluO1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0cmVtZU5pZ2h0UmFpbjtcclxuXHJcbiAgICAgICAgY2FzZSAxMTk1OlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIGV4dHJlbWVEYXlSYWluO1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0cmVtZU5pZ2h0UmFpbjtcclxuXHJcbiAgICAgICAgY2FzZSAxMTk4OlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIHBhcnRseUNsb3VkeURheUhhaWw7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0bHlDbG91ZHlOaWdodEhhaWw7XHJcblxyXG4gICAgICAgIGNhc2UgMTIwMTpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBleHRyZW1lRGF5SGFpbDtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dHJlbWVOaWdodEhhaWw7XHJcblxyXG4gICAgICAgIGNhc2UgMTIwNDpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBwYXJ0bHlDbG91ZHlEYXlTbGVldDtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRseUNsb3VkeU5pZ2h0U2xlZXQ7XHJcblxyXG4gICAgICAgIGNhc2UgMTIwNzpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBleHRyZW1lRGF5U2xlZXQ7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRyZW1lTmlnaHRTbGVldDtcclxuXHJcbiAgICAgICAgY2FzZSAxMjEwOlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIHBhcnRseUNsb3VkeURheVNub3c7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0bHlDbG91ZHlOaWdodFNub3c7XHJcblxyXG4gICAgICAgIGNhc2UgMTIxMzpcclxuICAgICAgICAgICAgcmV0dXJuIHNub3c7XHJcblxyXG4gICAgICAgIGNhc2UgMTIxNjpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBwYXJ0bHlDbG91ZHlEYXlTbm93O1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydGx5Q2xvdWR5TmlnaHRTbm93O1xyXG5cclxuICAgICAgICBjYXNlIDEyMTk6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gb3ZlcmNhc3REYXlTbm93O1xyXG4gICAgICAgICAgICByZXR1cm4gb3ZlcmNhc3ROaWdodFNub3c7XHJcblxyXG4gICAgICAgIGNhc2UgMTIyMjpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBleHRyZW1lRGF5U25vdztcclxuICAgICAgICAgICAgcmV0dXJuIGV4dHJlbWVOaWdodFNub3c7XHJcblxyXG4gICAgICAgIGNhc2UgMTIyNTpcclxuICAgICAgICAgICAgaWYoaXNEYXkpIHJldHVybiBleHRyZW1lRGF5U25vdztcclxuICAgICAgICAgICAgcmV0dXJuIGV4dHJlbWVOaWdodFNub3c7XHJcblxyXG4gICAgICAgIGNhc2UgMTIzNzpcclxuICAgICAgICAgICAgcmV0dXJuIHNub3dmbGFrZTtcclxuXHJcbiAgICAgICAgY2FzZSAxMjQwOlxyXG4gICAgICAgICAgICByZXR1cm4gcmFpbjtcclxuXHJcbiAgICAgICAgY2FzZSAxMjQzOlxyXG4gICAgICAgICAgICByZXR1cm4gZXh0cmVtZVJhaW47XHJcblxyXG4gICAgICAgIGNhc2UgMTI0NjpcclxuICAgICAgICAgICAgcmV0dXJuIHRvcm5hZG87XHJcblxyXG4gICAgICAgIGNhc2UgMTI0OTpcclxuICAgICAgICAgICAgcmV0dXJuIHNsZWV0O1xyXG5cclxuICAgICAgICBjYXNlIDEyNTI6XHJcbiAgICAgICAgICAgIHJldHVybiBleHRyZW1lU2xlZXQ7XHJcblxyXG4gICAgICAgIGNhc2UgMTI1NTpcclxuICAgICAgICAgICAgcmV0dXJuIHNub3c7XHJcblxyXG4gICAgICAgIGNhc2UgMTI1ODpcclxuICAgICAgICAgICAgcmV0dXJuIGV4dHJlbWVTbm93O1xyXG5cclxuICAgICAgICBjYXNlIDEyNjE6XHJcbiAgICAgICAgICAgIHJldHVybiBzbm93Zmxha2U7XHJcblxyXG4gICAgICAgIGNhc2UgMTI2NDpcclxuICAgICAgICAgICAgcmV0dXJuIHNub3dmbGFrZTtcclxuXHJcbiAgICAgICAgY2FzZSAxMjczOlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIHRodW5kZXJzdG9ybXNEYXlSYWluO1xyXG4gICAgICAgICAgICByZXR1cm4gdGh1bmRlcnN0b3Jtc05pZ2h0UmFpbjtcclxuXHJcbiAgICAgICAgY2FzZSAxMjc2OlxyXG4gICAgICAgICAgICBpZihpc0RheSkgcmV0dXJuIHRodW5kZXJzdG9ybXNEYXlFeHRyZW1lUmFpbjtcclxuICAgICAgICAgICAgcmV0dXJuIHRodW5kZXJzdG9ybXNOaWdodEV4dHJlbWVSYWluO1xyXG5cclxuICAgICAgICBjYXNlIDEyNzk6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gdGh1bmRlcnN0b3Jtc0RheVNub3c7XHJcbiAgICAgICAgICAgIHJldHVybiB0aHVuZGVyc3Rvcm1zTmlnaHRTbm93O1xyXG5cclxuICAgICAgICBjYXNlIDEyODI6XHJcbiAgICAgICAgICAgIGlmKGlzRGF5KSByZXR1cm4gdGh1bmRlcnN0b3Jtc0RheUV4dHJlbWVTbm93O1xyXG4gICAgICAgICAgICByZXR1cm4gdGh1bmRlcnN0b3Jtc05pZ2h0RXh0cmVtZVNub3c7XHJcblxyXG4gICAgICAgIGNhc2UgMjQwNjpcclxuICAgICAgICAgICAgcmV0dXJuIGxvYWRlcjtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGNvZGVSZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFBhdGggfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGdldFBhdGggfSBmcm9tICcuL2ljb25zJ1xyXG5pbXBvcnQgaEljb24gZnJvbSAnLi9hc3Nlc3RzL2h1bWlkaXR5LnN2Zyc7XHJcbmltcG9ydCB3SWNvbiBmcm9tICcuL2Fzc2VzdHMvd2luZC5zdmcnO1xyXG5pbXBvcnQgY0ltZyBmcm9tICcuL2Fzc2VzdHMvYy5wbmcnO1xyXG5pbXBvcnQgZkltZyBmcm9tICcuL2Fzc2VzdHMvZi5wbmcnO1xyXG5cclxuXHJcbmNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdG4nKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcbmNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUnKTtcclxuY29uc3QgaHVtaWRJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkSWNvbicpO1xyXG5jb25zdCB3aW5kSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kSWNvbicpO1xyXG5cclxuY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xyXG5jb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBWYWx1ZScpO1xyXG5jb25zdCBmZWVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc1ZhbHVlJyk7XHJcbmNvbnN0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvbicpO1xyXG5jb25zdCBodW1pZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZFZhbHVlJyk7XHJcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZFZhbHVlJyk7XHJcbmNvbnN0IHVuaXRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bml0Jyk7XHJcblxyXG5mdW5jdGlvbiBzZXRMb2FkZXIoKSB7XHJcbiAgICBuYW1lLnRleHRDb250ZW50ID0gJ19fJztcclxuICAgIGljb24uc3JjID0gZ2V0UGF0aCgyNDA2LCAwKTtcclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSAnLS0nO1xyXG4gICAgZmVlbHMudGV4dENvbnRlbnQgPSAnX18nO1xyXG4gICAgZmVlbHMuZGF0YXNldC52YWx1ZSA9ICdfXyc7XHJcbiAgICB0ZW1wLmRhdGFzZXQudmFsdWUgPSAnX18nO1xyXG4gICAgaHVtaWQudGV4dENvbnRlbnQgPSAnX18nO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9ICdfXyc7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEobG9jYXRpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0TG9hZGVyKCk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0yMzNjZmViYjU3OGE0MzNkOTI4MTIxMjA4MjQyMjAyJnE9JHtsb2NhdGlvbn1gLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGZlZWxzQyA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYztcclxuICAgICAgICAgICAgY29uc3QgZmVlbHNGID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mO1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wQyA9IGRhdGEuY3VycmVudC50ZW1wX2M7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBGID0gZGF0YS5jdXJyZW50LnRlbXBfZjtcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uY29kZTtcclxuICAgICAgICAgICAgY29uc3QgaXNEYXkgPSBkYXRhLmN1cnJlbnQuaXNfZGF5O1xyXG4gICAgICAgICAgICBjb25zdCBodW1pZCA9IGRhdGEuY3VycmVudC5odW1pZGl0eTtcclxuICAgICAgICAgICAgY29uc3Qgd2luZCA9IGRhdGEuY3VycmVudC53aW5kX2twaDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7ZmVlbHNDLCBmZWVsc0YsIHRlbXBDLCB0ZW1wRiwgbmFtZSwgY29kZSwgaXNEYXksIGh1bWlkLCB3aW5kfTtcclxuICAgICAgICB9ZWxzZSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURPTSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaW5wID0gaW5wdXQudmFsdWUgPT0gJycgPyAnTmV3IERlbGhpJyA6IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgY29uc3QgdW5pdCA9IHRvZ2dsZS5kYXRhc2V0LnVuaXQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBnZXREYXRhKGlucCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICAgICAgICBpY29uLnNyYyA9IGdldFBhdGgoZGF0YS5jb2RlLCBkYXRhLmlzRGF5KTtcclxuICAgICAgICBodW1pZC50ZXh0Q29udGVudCA9IGRhdGEuaHVtaWQ7XHJcbiAgICAgICAgd2luZC50ZXh0Q29udGVudCA9IGRhdGEud2luZDtcclxuICAgICAgICBpZih1bml0ID09ICdjJyl7XHJcbiAgICAgICAgICAgIGZlZWxzLnRleHRDb250ZW50ID0gZGF0YS5mZWVsc0M7XHJcbiAgICAgICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBkYXRhLnRlbXBDO1xyXG4gICAgICAgICAgICBmZWVscy5kYXRhc2V0LnZhbHVlID0gZGF0YS5mZWVsc0Y7XHJcbiAgICAgICAgICAgIHRlbXAuZGF0YXNldC52YWx1ZSA9IGRhdGEudGVtcEY7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmVlbHMudGV4dENvbnRlbnQgPSBkYXRhLmZlZWxzRjtcclxuICAgICAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGRhdGEudGVtcEY7XHJcbiAgICAgICAgICAgIGZlZWxzLmRhdGFzZXQudmFsdWUgPSBkYXRhLmZlZWxzQztcclxuICAgICAgICAgICAgdGVtcC5kYXRhc2V0LnZhbHVlID0gZGF0YS50ZW1wQztcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9ICdFcnJvcic7XHJcbiAgICAgICAgaWNvbi5zcmMgPSBnZXRQYXRoKDAsIDApO1xyXG4gICAgICAgIGZlZWxzLnRleHRDb250ZW50ID0gJzAwJztcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gJzAwJztcclxuICAgICAgICBmZWVscy5kYXRhc2V0LnZhbHVlID0gJzAwJztcclxuICAgICAgICB0ZW1wLmRhdGFzZXQudmFsdWUgPSAnMDAnO1xyXG4gICAgICAgIGh1bWlkLnRleHRDb250ZW50ID0gJzAwJztcclxuICAgICAgICB3aW5kLnRleHRDb250ZW50ID0gJzAwJztcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5odW1pZEljb24uc3JjID0gaEljb247XHJcbndpbmRJY29uLnNyYyA9IHdJY29uO1xyXG5cclxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XHJcbiAgICB1cGRhdGVET00oKTtcclxuICAgIGlucHV0LmJsdXIoKTtcclxufSk7XHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgIGlmKGUua2V5ID09PSAnRW50ZXInKSB1cGRhdGVET00oKTtcclxufSk7XHJcbnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmKHRvZ2dsZS5kYXRhc2V0LnVuaXQgPT0gJ2MnKXtcclxuICAgICAgICB0b2dnbGUuZGF0YXNldC51bml0ID0gJ2YnO1xyXG4gICAgICAgIHRvZ2dsZS50ZXh0Q29udGVudCA9ICdGJztcclxuICAgICAgICB1bml0TGFiZWxbMF0uc3JjID0gZkltZztcclxuICAgICAgICB1bml0TGFiZWxbMV0uc3JjID0gZkltZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9nZ2xlLmRhdGFzZXQudW5pdCA9ICdjJztcclxuICAgICAgICB0b2dnbGUudGV4dENvbnRlbnQgPSAnQyc7XHJcbiAgICAgICAgdW5pdExhYmVsWzBdLnNyYyA9IGNJbWc7XHJcbiAgICAgICAgdW5pdExhYmVsWzFdLnNyYyA9IGNJbWc7XHJcbiAgICB9XHJcbiAgICBsZXQgZnQgPSBmZWVscy50ZXh0Q29udGVudDtcclxuICAgIGZlZWxzLnRleHRDb250ZW50ID0gZmVlbHMuZGF0YXNldC52YWx1ZTtcclxuICAgIGZlZWxzLmRhdGFzZXQudmFsdWUgPSBmdDtcclxuICAgIGxldCB0dCA9IHRlbXAudGV4dENvbnRlbnQ7XHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gdGVtcC5kYXRhc2V0LnZhbHVlO1xyXG4gICAgdGVtcC5kYXRhc2V0LnZhbHVlID0gdHQ7XHJcbn0pO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlucHV0LmZvY3VzKCk7XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9