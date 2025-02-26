/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --primary-color: #8b4513;\n    --secondary-color: #d2b48c;\n    --accent-color: #a0522d;\n    --text-color: #333;\n    --light-bg: #f9f5f0;\n    --white: #ffffff;\n    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n    --transition: all 0.3s ease;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    line-height: 1.7;\n    background-color: var(--light-bg);\n    color: var(--text-color);\n}\n\n/* Header & Navegação */\nheader {\n    background-color: var(--primary-color);\n    color: var(--white);\n    padding: 1.5rem 0;\n    box-shadow: var(--shadow);\n    position: sticky;\n    top: 0;\n    z-index: 100;\n}\n\nheader h1 {\n    font-family: 'Playfair Display', serif;\n    text-align: center;\n    margin-bottom: 1.2rem;\n    font-weight: 700;\n    font-size: 2.5rem;\n    letter-spacing: 1px;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 1.5rem;\n    padding: 0 1rem;\n}\n\nnav button {\n    background-color: transparent;\n    color: var(--white);\n    border: 2px solid var(--white);\n    padding: 0.6rem 1.5rem;\n    border-radius: 30px;\n    cursor: pointer;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 500;\n    font-size: 0.95rem;\n    transition: var(--transition);\n}\n\nnav button:hover {\n    background-color: var(--white);\n    color: var(--primary-color);\n    transform: translateY(-3px);\n}\n\nnav button.active {\n    background-color: var(--white);\n    color: var(--primary-color);\n    border-color: var(--white);\n    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);\n}\n\n/* Conteúdo principal */\n#content {\n    max-width: 1200px;\n    margin: 2rem auto;\n    padding: 0 2rem;\n}\n\n/* Home page */\n.home-container {\n    background-color: var(--white);\n    border-radius: 10px;\n    overflow: hidden;\n    box-shadow: var(--shadow);\n}\n\n.home-image {\n    width: 100%;\n    height: 450px;\n    object-fit: cover;\n}\n\n.home-content {\n    padding: 2.5rem;\n}\n\n.home-content h2 {\n    font-family: 'Playfair Display', serif;\n    font-size: 2.2rem;\n    color: var(--primary-color);\n    margin-bottom: 1rem;\n    position: relative;\n    padding-bottom: 1rem;\n}\n\n.home-content h2::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 80px;\n    height: 3px;\n    background-color: var(--secondary-color);\n}\n\n.home-content p {\n    margin-bottom: 1.5rem;\n    font-size: 1.05rem;\n    color: #666;\n}\n\n.hours-section {\n    background-color: var(--light-bg);\n    padding: 2rem;\n    border-radius: 8px;\n    margin-top: 2rem;\n}\n\n.hours-section h3 {\n    font-family: 'Playfair Display', serif;\n    color: var(--primary-color);\n    margin-bottom: 1rem;\n    font-size: 1.5rem;\n}\n\n.hours-section ul {\n    list-style: none;\n}\n\n.hours-section li {\n    padding: 0.5rem 0;\n    border-bottom: 1px dashed var(--secondary-color);\n    font-weight: 500;\n}\n\n.hours-section li:last-child {\n    border-bottom: none;\n}\n\n/* Menu page */\n.menu-container {\n    background-color: var(--white);\n    border-radius: 10px;\n    padding: 2.5rem;\n    box-shadow: var(--shadow);\n}\n\n.menu-container h2 {\n    font-family: 'Playfair Display', serif;\n    font-size: 2.2rem;\n    color: var(--primary-color);\n    text-align: center;\n    margin-bottom: 0.5rem;\n}\n\n.menu-container > p {\n    text-align: center;\n    max-width: 700px;\n    margin: 0 auto 3rem auto;\n    color: #666;\n    font-size: 1.05rem;\n}\n\n.menu-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 2rem;\n}\n\n.menu-item {\n    background-color: var(--light-bg);\n    border-radius: 8px;\n    overflow: hidden;\n    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);\n    transition: var(--transition);\n}\n\n.menu-item:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);\n}\n\n.menu-item h3 {\n    background-color: var(--primary-color);\n    color: var(--white);\n    padding: 1rem;\n    font-family: 'Playfair Display', serif;\n    font-size: 1.3rem;\n}\n\n.menu-item p {\n    padding: 1.2rem;\n    color: #555;\n}\n\n.menu-item .price {\n    background-color: var(--secondary-color);\n    color: var(--primary-color);\n    padding: 0.5rem 1rem;\n    font-weight: 600;\n    font-size: 1.1rem;\n    text-align: right;\n}\n\n/* Contact page */\n.contact-container {\n    background-color: var(--white);\n    border-radius: 10px;\n    padding: 2.5rem;\n    box-shadow: var(--shadow);\n}\n\n.contact-container h2 {\n    font-family: 'Playfair Display', serif;\n    font-size: 2.2rem;\n    color: var(--primary-color);\n    margin-bottom: 1rem;\n    text-align: center;\n}\n\n.contact-container > p {\n    text-align: center;\n    max-width: 700px;\n    margin: 0 auto 2rem auto;\n    color: #666;\n}\n\n.contact-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2.5rem;\n}\n\n.contact-info {\n    padding: 2rem;\n    background-color: var(--light-bg);\n    border-radius: 8px;\n}\n\n.contact-info h3 {\n    font-family: 'Playfair Display', serif;\n    color: var(--primary-color);\n    margin-bottom: 1rem;\n    font-size: 1.4rem;\n    padding-bottom: 0.5rem;\n    border-bottom: 2px solid var(--secondary-color);\n}\n\n.contact-info p {\n    margin-bottom: 1.5rem;\n    color: #555;\n}\n\n.contact-form {\n    padding: 2rem;\n    background-color: var(--light-bg);\n    border-radius: 8px;\n}\n\n.contact-form h3 {\n    font-family: 'Playfair Display', serif;\n    color: var(--primary-color);\n    margin-bottom: 1.5rem;\n    font-size: 1.4rem;\n}\n\n.contact-form label {\n    display: block;\n    margin-bottom: 0.5rem;\n    color: #555;\n    font-weight: 500;\n}\n\n.contact-form input,\n.contact-form textarea {\n    width: 100%;\n    padding: 0.8rem;\n    margin-bottom: 1.5rem;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    font-family: 'Poppins', sans-serif;\n}\n\n.contact-form textarea {\n    min-height: 150px;\n    resize: vertical;\n}\n\n.contact-form button {\n    background-color: var(--primary-color);\n    color: var(--white);\n    border: none;\n    padding: 0.8rem 2rem;\n    border-radius: 30px;\n    cursor: pointer;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 500;\n    font-size: 1rem;\n    transition: var(--transition);\n    display: block;\n    margin: 0 auto;\n}\n\n.contact-form button:hover {\n    background-color: var(--accent-color);\n    transform: translateY(-3px);\n}\n\n.map-section {\n    margin-top: 2.5rem;\n}\n\n.map-section h3 {\n    font-family: 'Playfair Display', serif;\n    color: var(--primary-color);\n    margin-bottom: 1rem;\n    font-size: 1.4rem;\n    text-align: center;\n}\n\n.map-placeholder {\n    height: 350px;\n    background-color: #eee;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 8px;\n    color: #777;\n    font-weight: 500;\n}\n\n/* Responsividade */\n@media (max-width: 768px) {\n    .contact-grid {\n        grid-template-columns: 1fr;\n    }\n    \n    .menu-grid {\n        grid-template-columns: 1fr;\n    }\n    \n    header h1 {\n        font-size: 2rem;\n    }\n    \n    .home-image {\n        height: 300px;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.getElementById('content');\n    \n    // Criar container de contato\n    const contactContainer = document.createElement('div');\n    contactContainer.classList.add('contact-container');\n    \n    // Criar título\n    const contactTitle = document.createElement('h2');\n    contactTitle.textContent = 'Entre em Contato';\n    \n    // Criar descrição\n    const contactDesc = document.createElement('p');\n    contactDesc.textContent = 'Estamos ansiosos para atendê-lo! Entre em contato para fazer reservas ou tirar dúvidas sobre nosso restaurante.';\n    \n    // Criar grid para informações e formulário\n    const contactGrid = document.createElement('div');\n    contactGrid.classList.add('contact-grid');\n    \n    // Criar informações de contato\n    const contactInfo = document.createElement('div');\n    contactInfo.classList.add('contact-info');\n    \n    const addressTitle = document.createElement('h3');\n    addressTitle.textContent = 'Nosso Endereço';\n    \n    const address = document.createElement('p');\n    address.textContent = 'Av. das Delícias, 1234 - Centro, São Paulo, SP';\n    \n    const phoneTitle = document.createElement('h3');\n    phoneTitle.textContent = 'Telefone';\n    \n    const phone = document.createElement('p');\n    phone.textContent = '(11) 5555-1234';\n    \n    const emailTitle = document.createElement('h3');\n    emailTitle.textContent = 'E-mail';\n    \n    const email = document.createElement('p');\n    email.textContent = 'contato@restaurantedelicia.com.br';\n    \n    const socialTitle = document.createElement('h3');\n    socialTitle.textContent = 'Redes Sociais';\n    \n    const social = document.createElement('p');\n    social.textContent = 'Siga-nos no Instagram e Facebook: @restaurantedelicia';\n    \n    // Montar as informações de contato\n    contactInfo.appendChild(addressTitle);\n    contactInfo.appendChild(address);\n    contactInfo.appendChild(phoneTitle);\n    contactInfo.appendChild(phone);\n    contactInfo.appendChild(emailTitle);\n    contactInfo.appendChild(email);\n    contactInfo.appendChild(socialTitle);\n    contactInfo.appendChild(social);\n    \n    // Criar formulário de contato\n    const contactForm = document.createElement('div');\n    contactForm.classList.add('contact-form');\n    \n    const formTitle = document.createElement('h3');\n    formTitle.textContent = 'Envie-nos uma mensagem';\n    \n    const form = document.createElement('form');\n    \n    const nameLabel = document.createElement('label');\n    nameLabel.setAttribute('for', 'name');\n    nameLabel.textContent = 'Nome:';\n    \n    const nameInput = document.createElement('input');\n    nameInput.setAttribute('type', 'text');\n    nameInput.setAttribute('id', 'name');\n    nameInput.setAttribute('name', 'name');\n    nameInput.required = true;\n    \n    const emailLabel = document.createElement('label');\n    emailLabel.setAttribute('for', 'email');\n    emailLabel.textContent = 'E-mail:';\n    \n    const emailInput = document.createElement('input');\n    emailInput.setAttribute('type', 'email');\n    emailInput.setAttribute('id', 'email');\n    emailInput.setAttribute('name', 'email');\n    emailInput.required = true;\n    \n    const messageLabel = document.createElement('label');\n    messageLabel.setAttribute('for', 'message');\n    messageLabel.textContent = 'Mensagem:';\n    \n    const messageTextarea = document.createElement('textarea');\n    messageTextarea.setAttribute('id', 'message');\n    messageTextarea.setAttribute('name', 'message');\n    messageTextarea.required = true;\n    \n    const submitButton = document.createElement('button');\n    submitButton.setAttribute('type', 'submit');\n    submitButton.textContent = 'Enviar Mensagem';\n    \n    // Montar o formulário\n    form.appendChild(nameLabel);\n    form.appendChild(nameInput);\n    form.appendChild(emailLabel);\n    form.appendChild(emailInput);\n    form.appendChild(messageLabel);\n    form.appendChild(messageTextarea);\n    form.appendChild(submitButton);\n    \n    contactForm.appendChild(formTitle);\n    contactForm.appendChild(form);\n    \n    // Montar a grid de contato\n    contactGrid.appendChild(contactInfo);\n    contactGrid.appendChild(contactForm);\n    \n    // Criar mapa (placeholder)\n    const mapSection = document.createElement('div');\n    mapSection.classList.add('map-section');\n    \n    const mapTitle = document.createElement('h3');\n    mapTitle.textContent = 'Nossa Localização';\n    \n    const mapPlaceholder = document.createElement('div');\n    mapPlaceholder.classList.add('map-placeholder');\n    mapPlaceholder.textContent = 'Mapa do Restaurante';\n    \n    mapSection.appendChild(mapTitle);\n    mapSection.appendChild(mapPlaceholder);\n    \n    // Montar a página\n    contactContainer.appendChild(contactTitle);\n    contactContainer.appendChild(contactDesc);\n    contactContainer.appendChild(contactGrid);\n    contactContainer.appendChild(mapSection);\n    \n    // Adicionar ao conteúdo\n    content.appendChild(contactContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\n    const content = document.getElementById('content');\n    \n    // Criar o container principal\n    const homeContainer = document.createElement('div');\n    homeContainer.classList.add('home-container');\n    \n    // Criar imagem\n    const homeImage = document.createElement('img');\n    homeImage.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=450&q=80';\n    homeImage.alt = 'Restaurante Delícia';\n    homeImage.classList.add('home-image');\n    \n    // Criar div para conteúdo textual\n    const homeContent = document.createElement('div');\n    homeContent.classList.add('home-content');\n    \n    // Criar título\n    const homeTitle = document.createElement('h2');\n    homeTitle.textContent = 'Bem-vindo ao Restaurante Delícia';\n    \n    // Criar descrição\n    const homeDesc = document.createElement('p');\n    homeDesc.textContent = 'O Restaurante Delícia oferece uma experiência gastronômica única com pratos autênticos preparados com ingredientes frescos e de alta qualidade. Nossa cozinha combina tradição e inovação para criar sabores inesquecíveis.';\n    \n    // Criar parágrafo sobre o chef\n    const chefDesc = document.createElement('p');\n    chefDesc.textContent = 'Nosso chef premiado traz mais de 15 anos de experiência culinária internacional, criando pratos exclusivos que encantam todos os paladares. Cada refeição no Restaurante Delícia é uma jornada de descobertas culinárias que vai além de uma simples refeição.';\n    \n    // Criar parágrafo sobre a experiência\n    const expDesc = document.createElement('p');\n    expDesc.textContent = 'Venha nos visitar e descobrir por que somos o restaurante mais falado da cidade! Proporcionamos um ambiente acolhedor, serviço impecável e sabores que vão encantar todos os sentidos.';\n    \n    // Criar seção de horários\n    const hoursSection = document.createElement('div');\n    hoursSection.classList.add('hours-section');\n    \n    const hoursTitle = document.createElement('h3');\n    hoursTitle.textContent = 'Horário de Funcionamento';\n    \n    const hoursList = document.createElement('ul');\n    \n    const hours = [\n        'Segunda a Quinta: 11h às 22h',\n        'Sexta e Sábado: 11h às 23h',\n        'Domingo: 11h às 20h'\n    ];\n    \n    hours.forEach(hour => {\n        const hourItem = document.createElement('li');\n        hourItem.textContent = hour;\n        hoursList.appendChild(hourItem);\n    });\n    \n    // Montar a seção de horários\n    hoursSection.appendChild(hoursTitle);\n    hoursSection.appendChild(hoursList);\n    \n    // Montar o conteúdo textual\n    homeContent.appendChild(homeTitle);\n    homeContent.appendChild(homeDesc);\n    homeContent.appendChild(chefDesc);\n    homeContent.appendChild(expDesc);\n    homeContent.appendChild(hoursSection);\n    \n    // Montar a página\n    homeContainer.appendChild(homeImage);\n    homeContainer.appendChild(homeContent);\n    \n    // Adicionar ao conteúdo\n    content.appendChild(homeContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n// Função para limpar o conteúdo atual\nfunction clearContent() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n}\n\n// Função para atualizar o botão ativo\nfunction setActiveButton(activeButton) {\n    // Remover a classe 'active' de todos os botões\n    const buttons = document.querySelectorAll('nav button');\n    buttons.forEach(button => {\n        button.classList.remove('active');\n    });\n    \n    // Adicionar a classe 'active' ao botão atual\n    activeButton.classList.add('active');\n}\n\n// Função para inicializar o site\nfunction initSite() {\n    // Obter referências para os botões\n    const homeBtn = document.getElementById('home-btn');\n    const menuBtn = document.getElementById('menu-btn');\n    const contactBtn = document.getElementById('contact-btn');\n    \n    // Carregar a página inicial por padrão e definir o botão Home como ativo\n    clearContent();\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    setActiveButton(homeBtn);\n    \n    // Configurar os event listeners para os botões\n    homeBtn.addEventListener('click', () => {\n        clearContent();\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        setActiveButton(homeBtn);\n    });\n    \n    menuBtn.addEventListener('click', () => {\n        clearContent();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        setActiveButton(menuBtn);\n    });\n    \n    contactBtn.addEventListener('click', () => {\n        clearContent();\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        setActiveButton(contactBtn);\n    });\n}\n\n// Inicializar o site quando o DOM estiver carregado\ndocument.addEventListener('DOMContentLoaded', initSite);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.getElementById('content');\n    \n    // Criar container do menu\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-container');\n    \n    // Criar título\n    const menuTitle = document.createElement('h2');\n    menuTitle.textContent = 'Nosso Menu';\n    \n    // Criar descrição\n    const menuDesc = document.createElement('p');\n    menuDesc.textContent = 'Confira nossa seleção de pratos cuidadosamente elaborados pelo nosso chef premiado. Todos os pratos são preparados com ingredientes frescos e de alta qualidade.';\n    \n    // Criar grid para os itens do menu\n    const menuGrid = document.createElement('div');\n    menuGrid.classList.add('menu-grid');\n    \n    // Array com os itens do menu\n    const menuItems = [\n        {\n            name: 'Risoto de Cogumelos',\n            description: 'Risoto cremoso com mix de cogumelos frescos, finalizado com parmesão italiano e azeite trufado.',\n            price: 'R$ 48,00'\n        },\n        {\n            name: 'Filé ao Molho Madeira',\n            description: 'Medalhão de filé mignon grelhado, coberto com molho madeira e acompanhado de batatas rústicas.',\n            price: 'R$ 62,00'\n        },\n        {\n            name: 'Salmão Grelhado',\n            description: 'Filé de salmão grelhado com ervas finas, servido com purê de batata doce e legumes da estação.',\n            price: 'R$ 58,00'\n        },\n        {\n            name: 'Fettuccine aos Frutos do Mar',\n            description: 'Massa fresca com camarões, lulas, mexilhões e polvo ao molho de tomate fresco e ervas.',\n            price: 'R$ 65,00'\n        },\n        {\n            name: 'Bife à Parmegiana',\n            description: 'Filé empanado coberto com molho de tomate caseiro, presunto e queijo gratinado. Acompanha arroz e fritas.',\n            price: 'R$ 54,00'\n        },\n        {\n            name: 'Tiramisù',\n            description: 'Clássica sobremesa italiana com camadas de biscoito, café, creme de mascarpone e cacau em pó.',\n            price: 'R$ 28,00'\n        }\n    ];\n    \n    // Criar os elementos para cada item do menu\n    menuItems.forEach(item => {\n        const menuItem = document.createElement('div');\n        menuItem.classList.add('menu-item');\n        \n        const itemName = document.createElement('h3');\n        itemName.textContent = item.name;\n        \n        const itemDesc = document.createElement('p');\n        itemDesc.textContent = item.description;\n        \n        const itemPrice = document.createElement('p');\n        itemPrice.textContent = item.price;\n        itemPrice.classList.add('price');\n        \n        menuItem.appendChild(itemName);\n        menuItem.appendChild(itemDesc);\n        menuItem.appendChild(itemPrice);\n        \n        menuGrid.appendChild(menuItem);\n    });\n    \n    // Montar a página\n    menuContainer.appendChild(menuTitle);\n    menuContainer.appendChild(menuDesc);\n    menuContainer.appendChild(menuGrid);\n    \n    // Adicionar ao conteúdo\n    content.appendChild(menuContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;