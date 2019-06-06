webpackHotUpdate("main",{

/***/ "./src/components/cancellation/cancellation.js":
/*!*****************************************************!*\
  !*** ./src/components/cancellation/cancellation.js ***!
  \*****************************************************/
/*! exports provided: CancellationBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationBase", function() { return CancellationBase; });
/* harmony import */ var _Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cancellation_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancellation.css */ "./src/components/cancellation/cancellation.css");
/* harmony import */ var _cancellation_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_cancellation_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu */ "./src/components/menu/index.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Firebase */ "./src/components/Firebase/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _reasons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reasons */ "./src/components/cancellation/reasons.js");






var _jsxFileName = "/Users/dakpek/Desktop/kod/vivo/src/components/cancellation/cancellation.js";







var CancellationBase =
/*#__PURE__*/
function (_Component) {
  Object(_Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CancellationBase, _Component);

  function CancellationBase(props) {
    var _this;

    Object(_Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CancellationBase);

    _this = Object(_Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CancellationBase).call(this, props));

    _this.handleClick = function (event) {
      var box = event.target.name;

      if (_this.state[box] === true) {
        event.target.removeAttribute('checked');

        _this.setState(Object(_Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, false));
      } else {
        event.target.setAttribute('checked', true);

        _this.setState(Object(_Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, true));
      }
    };

    _this.state = {
      reason1: false,
      reason2: false,
      reason3: false,
      reason4: false,
      reason5: false
    };
    return _this;
  }

  Object(_Users_dakpek_Desktop_kod_vivo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CancellationBase, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cancellationContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cancellation-hello",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Gittigin icin uzgunuz"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cancellation-hello2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "birdahaki sefere neyi daha iyi yapacagimizi soylersen seviniriz"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        className: "cancellation-form",
        onSubmit: this.props.createUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cancellationCheckboxContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "cancellationCheckbox",
        type: "checkbox",
        name: "reason1",
        value: "reason1",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "cancellationLabel",
        for: "reason1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, _reasons__WEBPACK_IMPORTED_MODULE_12__["default"][1])), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cancellationCheckboxContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "cancellationCheckbox",
        type: "checkbox",
        name: "reason2",
        value: "reason2",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "cancellationLabel",
        for: "reason2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, _reasons__WEBPACK_IMPORTED_MODULE_12__["default"][2])), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cancellationCheckboxContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "cancellationCheckbox",
        type: "checkbox",
        name: "reason3",
        value: "reason3",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "cancellationLabel",
        for: "reason3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, _reasons__WEBPACK_IMPORTED_MODULE_12__["default"][3])), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cancellationCheckboxContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "cancellationCheckbox",
        type: "checkbox",
        name: "reason4",
        value: "reason4",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "cancellationLabel",
        for: "reason4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, _reasons__WEBPACK_IMPORTED_MODULE_12__["default"][4])), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cancellationCheckboxContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "cancellationCheckbox",
        type: "checkbox",
        name: "reason5",
        value: "reason5",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "cancellationLabel",
        for: "reason5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, _reasons__WEBPACK_IMPORTED_MODULE_12__["default"][5])), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cancellationCheckboxContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "cancellationCheckbox",
        type: "checkbox",
        name: "reason6",
        value: "reason6",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "cancellationLabel",
        for: "reason6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Diger")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        className: "cancellation-submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Uyeligimi Iptal Et"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        to: "/",
        className: "cancellation-goBack",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Geri")));
    }
  }]);

  return CancellationBase;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); //firebase stuff

var CancellationFirebase = Object(recompose__WEBPACK_IMPORTED_MODULE_10__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["withRouter"], _Firebase__WEBPACK_IMPORTED_MODULE_9__["withFirebase"])(CancellationBase);

var Cancellation = function Cancellation() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CancellationFirebase, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Cancellation);

/***/ })

})
//# sourceMappingURL=main.8a7afa8ec5c396e5d015.hot-update.js.map