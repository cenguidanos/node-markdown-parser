exports.ids = [15];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeSandbox.vue?vue&type=template&id=6696224f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"codesandbox w-full mb-6 mx-auto bg-black text-white text-3xl text-center flex items-center justify-center overflow-hidden rounded-md"},[_vm._ssrNode(((_vm.isIntersecting && _vm.src)?("<iframe"+(_vm._ssrAttr("src",_vm.src))+" title=\"CodeSandbox editor\" sandbox=\"allow-modals allow-forms allow-popups allow-scripts allow-same-origin\" class=\"w-full overflow-hidden\" data-v-6696224f></iframe>"):("<span data-v-6696224f>Loading CodeSandbox...</span>")))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeSandbox.vue?vue&type=template&id=6696224f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeSandbox.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var CodeSandboxvue_type_script_lang_js_ = ({
  props: {
    src: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isIntersecting: false
    };
  },

  mounted() {
    if (!window.IntersectionObserver) {
      this.isIntersecting = true;
      return;
    }

    this.__observer = new window.IntersectionObserver(entries => {
      entries.forEach(({
        intersectionRatio,
        target: el
      }) => {
        if (intersectionRatio > 0) {
          this.isIntersecting = true;

          this.__observer.disconnect();

          delete this.__observer;
        }
      });
    });

    this.__observer.observe(this.$el);
  },

  beforeDestroy() {
    if (this.__observer) {
      this.__observer.disconnect();

      delete this.__observer;
    }
  }

});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeSandbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_CodeSandboxvue_type_script_lang_js_ = (CodeSandboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeSandbox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_CodeSandboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6696224f",
  "04b3bbab"
  
)

/* harmony default export */ var CodeSandbox = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("48d4c87e", content, true, context)
};

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CodeSandbox_vue_vue_type_style_index_0_id_6696224f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CodeSandbox_vue_vue_type_style_index_0_id_6696224f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CodeSandbox_vue_vue_type_style_index_0_id_6696224f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CodeSandbox_vue_vue_type_style_index_0_id_6696224f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CodeSandbox_vue_vue_type_style_index_0_id_6696224f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".codesandbox[data-v-6696224f],.codesandbox iframe[data-v-6696224f]{width:100%;border-radius:.375rem;overflow:hidden;height:16rem;height:500px}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=code-sandbox.js.map