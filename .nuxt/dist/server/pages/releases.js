exports.ids = [28];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/pages/releases.vue?vue&type=template&id=3e966d2f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-wrap-reverse",class:{
    'lg:-mx-8': _vm.settings.layout === 'single'
  }},[_vm._ssrNode("<div"+(_vm._ssrClass("w-full lg:w-3/4 py-4 lg:pt-8 lg:pb-4 dark:border-gray-800",{
      'lg:border-l lg:border-r': _vm.settings.layout !== 'single'
    }))+"><article class=\"prose dark:prose-dark max-w-none lg:px-8\"><h1>Releases</h1> "+(_vm._ssrList((_vm.releases),function(release){return ("<div><h2"+(_vm._ssrAttr("id",release.name))+" class=\"flex items-center justify-between\">"+_vm._ssrEscape("\n          "+_vm._s(release.name)+"\n          ")+"<span class=\"text-base font-normal text-gray-500\">"+_vm._ssrEscape(_vm._s(_vm.formatDate(release)))+"</span></h2> <div class=\"nuxt-content\">"+(_vm._s(release.body))+"</div></div>")}))+"</article></div> "),_c('AppToc',{attrs:{"toc":_vm.toc}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/pages/releases.vue?vue&type=template&id=3e966d2f&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/pages/releases.vue?vue&type=script&lang=js&
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

/* harmony default export */ var releasesvue_type_script_lang_js_ = ({
  layout({
    store
  }) {
    return store.state.settings.layout || 'default';
  },

  head() {
    return {
      title: 'Releases'
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['settings']),

    releases() {
      return this.$store.state.releases;
    },

    toc() {
      return this.releases.map(release => ({
        id: release.name,
        depth: 2,
        text: release.name
      }));
    }

  },
  methods: {
    formatDate(release) {
      const date = new Date(release.date);
      return date.toLocaleDateString(this.$i18n.locale);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/pages/releases.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_releasesvue_type_script_lang_js_ = (releasesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/pages/releases.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_releasesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6402dfcd"
  
)

/* harmony default export */ var releases = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppToc: __webpack_require__(80).default})


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/app/AppToc.vue?vue&type=template&id=3216a5c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.toc.length)?_c('div',{staticClass:"w-full lg:w-1/4 block relative"},[_vm._ssrNode("<div class=\"lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)\">","</div>",[_vm._ssrNode("<nav"+(_vm._ssrClass("py-4 lg:py-8",{
        'lg:pl-8 lg:pr-2': _vm.settings.layout !== 'single',
        'lg:px-8': _vm.settings.layout === 'single'
      }))+">","</nav>",[_vm._ssrNode("<p class=\"mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs\">"+_vm._ssrEscape(_vm._s(_vm.$t('toc.title')))+"</p> "),_c('scrollactive',{attrs:{"highlight-first-item":"","active-class":"text-primary-500","offset":0,"tag":"ul"}},_vm._l((_vm.toc),function(link){return _c('li',{key:link.id,staticClass:"text-gray-700 dark:text-gray-300",class:{
            'border-t border-dashed dark:border-gray-800 first:border-t-0': link.depth === 2
          }},[_c('a',{staticClass:"block text-sm scrollactive-item transition-padding ease-in-out duration-300 hover:pl-1",class:{
              'py-2': link.depth === 2,
              'ml-2 pb-2': link.depth === 3,
              'ml-3 pb-2': link.depth === 4,
              'ml-4 pb-2': link.depth === 5,
              'ml-5 pb-2': link.depth === 6
            },attrs:{"href":("#" + (link.id))}},[_vm._v(_vm._s(link.text))])])}),0)],2)])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/app/AppToc.vue?vue&type=template&id=3216a5c0&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-docs/src/components/app/AppToc.vue?vue&type=script&lang=js&
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
//
//

/* harmony default export */ var AppTocvue_type_script_lang_js_ = ({
  props: {
    toc: {
      type: Array,
      default: () => []
    }
  },
  computed: { ...Object(external_vuex_["mapGetters"])(['settings'])
  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/app/AppToc.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppTocvue_type_script_lang_js_ = (AppTocvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-docs/src/components/app/AppToc.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppTocvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2ed4b2cf"
  
)

/* harmony default export */ var AppToc = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=releases.js.map