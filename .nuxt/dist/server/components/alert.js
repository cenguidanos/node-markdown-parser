exports.ids = [11];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/global/base/Alert.vue?vue&type=template&id=00892b40&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert border-l-4 p-4 mb-4 mt-4",class:("alert-" + _vm.type)},[_vm._ssrNode("<div class=\"flex items-start\">","</div>",[_vm._ssrNode("<div class=\"flex-shrink-0\">","</div>",[_c(_vm.icon,{tag:"component",staticClass:"alert-icon mt-px w-6 h-6"})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-grow ml-2 overflow-auto alert-content\">","</div>",[_vm._t("default")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/base/Alert.vue?vue&type=template&id=00892b40&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/global/base/Alert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Alertvue_type_script_lang_js_ = ({
  props: {
    type: {
      type: String,
      default: 'info',

      validator(value) {
        return ['info', 'success', 'warning', 'danger'].includes(value);
      }

    }
  },
  computed: {
    icon() {
      return {
        info: 'IconInformationCircle',
        success: 'IconCheckCircle',
        warning: 'IconExclamationCircle',
        danger: 'IconXCircle'
      }[this.type];
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/base/Alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_Alertvue_type_script_lang_js_ = (Alertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/base/Alert.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_Alertvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "28686ead"
  
)

/* harmony default export */ var Alert = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4c5ed5c5", content, true, context)
};

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".alert p{margin:0!important}.alert a{--text-opacity:1!important;color:#4a5568!important;color:rgba(74,85,104,var(--text-opacity))!important}.dark-mode .alert a{--text-opacity:1!important;color:#e2e8f0!important;color:rgba(226,232,240,var(--text-opacity))!important}.alert strong{color:currentColor}.alert-content pre code{background-color:inherit!important}.alert-info{--bg-opacity:1;background-color:#ebf8ff;background-color:rgba(235,248,255,var(--bg-opacity));--border-opacity:1;border-color:#63b3ed;border-color:rgba(99,179,237,var(--border-opacity))}.alert-info code{--bg-opacity:1;background-color:#bee3f8;background-color:rgba(190,227,248,var(--bg-opacity));box-shadow:none;border-width:0;color:currentColor}.alert-info .alert-icon{--text-opacity:1;color:#63b3ed;color:rgba(99,179,237,var(--text-opacity))}.alert-info .alert-content{--text-opacity:1;color:#2b6cb0;color:rgba(43,108,176,var(--text-opacity))}.dark-mode .alert-info{--bg-opacity:1;background-color:#2a4365;background-color:rgba(42,67,101,var(--bg-opacity));--border-opacity:1;border-color:#2b6cb0;border-color:rgba(43,108,176,var(--border-opacity))}.dark-mode .alert-info code{--bg-opacity:1;background-color:#2c5282;background-color:rgba(44,82,130,var(--bg-opacity))}.dark-mode .alert-info .alert-content{--text-opacity:1;color:#90cdf4;color:rgba(144,205,244,var(--text-opacity))}.alert-success{--bg-opacity:1;background-color:#f0fff4;background-color:rgba(240,255,244,var(--bg-opacity));--border-opacity:1;border-color:#68d391;border-color:rgba(104,211,145,var(--border-opacity))}.alert-success code{--bg-opacity:1;background-color:#c6f6d5;background-color:rgba(198,246,213,var(--bg-opacity));box-shadow:none;border-width:0;color:currentColor}.alert-success .alert-icon{--text-opacity:1;color:#68d391;color:rgba(104,211,145,var(--text-opacity))}.alert-success .alert-content{--text-opacity:1;color:#2f855a;color:rgba(47,133,90,var(--text-opacity))}.dark-mode .alert-success{--bg-opacity:1;background-color:#22543d;background-color:rgba(34,84,61,var(--bg-opacity));--border-opacity:1;border-color:#2f855a;border-color:rgba(47,133,90,var(--border-opacity))}.dark-mode .alert-success code{--bg-opacity:1;background-color:#276749;background-color:rgba(39,103,73,var(--bg-opacity))}.dark-mode .alert-success .alert-content{--text-opacity:1;color:#9ae6b4;color:rgba(154,230,180,var(--text-opacity))}.alert-warning{--bg-opacity:1;background-color:#fffaf0;background-color:rgba(255,250,240,var(--bg-opacity));--border-opacity:1;border-color:#f6ad55;border-color:rgba(246,173,85,var(--border-opacity))}.alert-warning code{--bg-opacity:1;background-color:#feebc8;background-color:rgba(254,235,200,var(--bg-opacity));box-shadow:none;border-width:0;color:currentColor}.alert-warning .alert-icon{--text-opacity:1;color:#f6ad55;color:rgba(246,173,85,var(--text-opacity))}.alert-warning .alert-content{--text-opacity:1;color:#c05621;color:rgba(192,86,33,var(--text-opacity))}.dark-mode .alert-warning{--bg-opacity:1;background-color:#744210;background-color:rgba(116,66,16,var(--bg-opacity));--border-opacity:1;border-color:#b7791f;border-color:rgba(183,121,31,var(--border-opacity))}.dark-mode .alert-warning code{--bg-opacity:1;background-color:#975a16;background-color:rgba(151,90,22,var(--bg-opacity))}.dark-mode .alert-warning .alert-content{--text-opacity:1;color:#fbd38d;color:rgba(251,211,141,var(--text-opacity))}.alert-danger{--bg-opacity:1;background-color:#fff5f5;background-color:rgba(255,245,245,var(--bg-opacity));--border-opacity:1;border-color:#fc8181;border-color:rgba(252,129,129,var(--border-opacity))}.alert-danger code{--bg-opacity:1;background-color:#fed7d7;background-color:rgba(254,215,215,var(--bg-opacity));box-shadow:none;border-width:0;color:currentColor}.alert-danger .alert-icon{--text-opacity:1;color:#fc8181;color:rgba(252,129,129,var(--text-opacity))}.alert-danger .alert-content{--text-opacity:1;color:#c53030;color:rgba(197,48,48,var(--text-opacity))}.dark-mode .alert-danger{--bg-opacity:1;background-color:#742a2a;background-color:rgba(116,42,42,var(--bg-opacity));--border-opacity:1;border-color:#c53030;border-color:rgba(197,48,48,var(--border-opacity))}.dark-mode .alert-danger code{--bg-opacity:1;background-color:#9b2c2c;background-color:rgba(155,44,44,var(--bg-opacity))}.dark-mode .alert-danger .alert-content{--text-opacity:1;color:#feb2b2;color:rgba(254,178,178,var(--text-opacity))}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=alert.js.map