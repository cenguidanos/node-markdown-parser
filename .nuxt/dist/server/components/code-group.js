exports.ids = [14];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeGroup.vue?vue&type=template&id=67ddf998&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"code-group"},[_vm._ssrNode("<div class=\"rounded-t-md border-b-2 border-gray-700 px-2 bg-gray-800 text-sm text-white relative\" data-v-67ddf998>"+(_vm._ssrList((_vm.tabs),function(ref,i){
var label = ref.label;
return ("<button"+(_vm._ssrClass("px-4 py-3 text-gray-400 font-bold font-mono",[_vm.activeTabIndex === i && 'active']))+" data-v-67ddf998>"+_vm._ssrEscape(_vm._s(label))+"</button>")}))+" <span class=\"highlight-underline\" data-v-67ddf998></span></div> "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeGroup.vue?vue&type=template&id=67ddf998&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeGroup.vue?vue&type=script&lang=js&
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
//
//
//
//
/* harmony default export */ var CodeGroupvue_type_script_lang_js_ = ({
  data() {
    return {
      tabs: [],
      activeTabIndex: 0
    };
  },

  watch: {
    activeTabIndex(newValue, oldValue) {
      this.switchTab(newValue);
    }

  },

  mounted() {
    this.tabs = this.$slots.default.filter(slot => Boolean(slot.componentOptions)).map(slot => {
      return {
        label: slot.componentOptions.propsData.label,
        elm: slot.elm
      };
    });
    this.$nextTick(this.updateHighlighteUnderlinePosition);
  },

  methods: {
    switchTab(i) {
      this.tabs.forEach(tab => {
        tab.elm.classList.remove('active');
      });
      this.tabs[i].elm.classList.add('active');
    },

    updateTabs(i) {
      this.activeTabIndex = i;
      this.updateHighlighteUnderlinePosition();
    },

    updateHighlighteUnderlinePosition() {
      const activeTab = this.$refs.tabs[this.activeTabIndex];

      if (!activeTab) {
        return;
      }

      const highlightUnderline = this.$refs['highlight-underline'];
      highlightUnderline.style.left = `${activeTab.offsetLeft}px`;
      highlightUnderline.style.width = `${activeTab.clientWidth}px`;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_CodeGroupvue_type_script_lang_js_ = (CodeGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeGroup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_CodeGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "67ddf998",
  "4c9d4b3a"
  
)

/* harmony default export */ var CodeGroup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c6638966", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CodeGroup_vue_vue_type_style_index_0_id_67ddf998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CodeGroup_vue_vue_type_style_index_0_id_67ddf998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CodeGroup_vue_vue_type_style_index_0_id_67ddf998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CodeGroup_vue_vue_type_style_index_0_id_67ddf998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CodeGroup_vue_vue_type_style_index_0_id_67ddf998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "button[data-v-67ddf998]{outline:none}.highlight-underline[data-v-67ddf998]{--bg-opacity:1;background-color:#00cd81;background-color:rgba(0,205,129,var(--bg-opacity));position:absolute;bottom:-2px;height:2px;transition:left .15s,width .15s}.code-group[data-v-67ddf998]  pre[class*=language-]{border-top-left-radius:0;border-top-right-radius:0;margin-top:0}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=code-group.js.map