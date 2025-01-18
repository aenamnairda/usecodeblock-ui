"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ExplainThisCodeUI = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useApiData = require("../hooks/use-api-data");
var _process = require("./process");
var _loadingSkeleton = require("./loading-skeleton");
require("@radix-ui/themes/styles.css");
require("../styles/global.css");
var _themes = require("@radix-ui/themes");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ExplainThisCodeUI = exports.ExplainThisCodeUI = function ExplainThisCodeUI(_ref) {
  var processId = _ref.processId;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    stepId = _useState2[0],
    setStepId = _useState2[1];
  var initialLoadDone = (0, _react.useRef)(false);
  var _useProcessData = (0, _useApiData.useProcessData)(processId),
    processData = _useProcessData.data,
    processLoading = _useProcessData.loading,
    processError = _useProcessData.error;
  var _useCodeSnippetsData = (0, _useApiData.useCodeSnippetsData)(processId, stepId),
    snippetsData = _useCodeSnippetsData.data,
    snippetsLoading = _useCodeSnippetsData.loading,
    snippetsError = _useCodeSnippetsData.error;
  var process = processData === null || processData === void 0 ? void 0 : processData.process;
  (0, _react.useEffect)(function () {
    var _process$steps;
    if (!initialLoadDone.current && process !== null && process !== void 0 && (_process$steps = process.steps) !== null && _process$steps !== void 0 && (_process$steps = _process$steps[0]) !== null && _process$steps !== void 0 && _process$steps.id && !stepId) {
      initialLoadDone.current = true;
      setStepId(process.steps[0].id);
    }
  }, [process, stepId]);
  var handleStepChange = (0, _react.useCallback)(function (newStepId) {
    setStepId(newStepId);
  }, []);
  var _useMemo = (0, _react.useMemo)(function () {
      if (!stepId) return {
        snippets: null,
        isLoading: false
      };
      return {
        snippets: (snippetsData === null || snippetsData === void 0 ? void 0 : snippetsData.codeSnippets) || null,
        isLoading: snippetsLoading
      };
    }, [stepId, snippetsData, snippetsLoading]),
    currentSnippets = _useMemo.snippets,
    isLoading = _useMemo.isLoading;
  if (!process) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_loadingSkeleton.WidgetSkeleton, {});
  }
  if (processError) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: ["Error: ", processError === null || processError === void 0 ? void 0 : processError.message]
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_themes.Theme, {
    accentColor: "gray",
    grayColor: "sand",
    radius: "large",
    children: processLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_loadingSkeleton.WidgetSkeleton, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_process.ProcessWidget, {
      process: process,
      codeSnippets: currentSnippets,
      onStepChange: handleStepChange,
      codeSnippetsLoading: isLoading,
      codeSnippetsError: snippetsError,
      selectedStepId: stepId
    })
  });
};
var _default = exports["default"] = ExplainThisCodeUI;