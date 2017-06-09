// { "framework": "Vue" }
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
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zhengjiangrong/work/weex/vshop/src/busi/address/addAddress.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-ff39f340"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "cell": {
	    "height": 105,
	    "alignItems": "center",
	    "flexDirection": "row",
	    "borderBottomWidth": 1.5,
	    "borderBottomColor": "#eeeeee",
	    "backgroundColor": "#ffffff"
	  },
	  "select": {
	    "color": "#a5a5a5",
	    "marginRight": 10,
	    "fontSize": 33
	  },
	  "arrow": {
	    "width": 16,
	    "height": 26,
	    "marginRight": 20
	  },
	  "bottomLine": {
	    "height": 1,
	    "backgroundColor": "#f9f9f9",
	    "position": "absolute",
	    "left": 0,
	    "bottom": 0,
	    "right": 0
	  },
	  "input": {
	    "height": 105,
	    "flex": 1,
	    "paddingLeft": 10
	  },
	  "title": {
	    "marginLeft": 28,
	    "fontSize": 33
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	//
	//
	//
	//
	//

	exports.default = {
	  data: {
	    logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
	    target: 'World'
	  },
	  methods: {
	    update: function update(e) {
	      this.target = 'Weex';
	      console.log('target:', this.target);
	    }
	  },

	  created: function created() {

	    var self = this;
	    var globalEvent = weex.requireModule('globalEvent');
	    globalEvent.addEventListener("onPageInit", function (e) {

	      var nav = weex.requireModule('navbar');
	      nav.setTitle('添加地址');
	      nav.setBack(true, 'black');
	      nav.setBackgroundColor('#f9f9f9');
	      nav.setTitleColor('#4c4c4c');
	      nav.setStatusBarStyle('black');
	      nav.setRightText('保存', '#4c4c4c', function (res) {});
	    });
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticStyle: {
	      backgroundColor: "#eeeeee"
	    },
	    attrs: {
	      "bubble": "true"
	    }
	  }, [_c('div', {
	    attrs: {
	      "bubble": "true"
	    }
	  }, [_vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _c('div', {
	    staticClass: ["cell"],
	    staticStyle: {
	      height: "200"
	    }
	  }, [_c('textarea', {
	    staticStyle: {
	      flex: "1",
	      height: "200",
	      marginLeft: "20",
	      paddingTop: "35"
	    },
	    attrs: {
	      "placeholder": "请填写详细地址，不少于5个字"
	    }
	  })], 1), _vm._m(4)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["cell"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("收货人")]), _c('input', {
	    staticClass: ["input"],
	    staticStyle: {
	      paddingLeft: "50"
	    },
	    attrs: {
	      "type": "text"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["cell"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("联系电话")]), _c('input', {
	    staticClass: ["input"],
	    staticStyle: {
	      paddingLeft: "20"
	    },
	    attrs: {
	      "type": "text"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["cell"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("所在地区")]), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('text', {
	    staticClass: ["select"]
	  }, [_vm._v("请选择")]), _c('image', {
	    staticClass: ["arrow"],
	    attrs: {
	      "src": "../../img/arrow.png"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["cell"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("街道")]), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('text', {
	    staticClass: ["select"]
	  }, [_vm._v("请选择")]), _c('image', {
	    staticClass: ["arrow"],
	    attrs: {
	      "src": "../../img/arrow.png"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["cell"],
	    staticStyle: {
	      marginTop: "30"
	    }
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("设为默认")]), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('switch', {
	    staticStyle: {
	      marginRight: "35"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);