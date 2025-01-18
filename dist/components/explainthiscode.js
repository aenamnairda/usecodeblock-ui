"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ExplainThisCodeUI = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useApiData = require("../hooks/use-api-data");
var _process = require("./process");
var _loadingSkeleton = require("./loading-skeleton");
require("@radix-ui/themes/styles.css");
require("../styles/global.css");
var _themes = require("@radix-ui/themes");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ExplainThisCodeUI = _ref => {
  let {
    processId
  } = _ref;
  const [stepId, setStepId] = (0, _react.useState)(null);
  const initialLoadDone = (0, _react.useRef)(false);
  const {
    data: processData,
    loading: processLoading,
    error: processError
  } = (0, _useApiData.useProcessData)(processId);
  const {
    data: snippetsData,
    loading: snippetsLoading,
    error: snippetsError
  } = (0, _useApiData.useCodeSnippetsData)(processId, stepId);
  const process = processData?.process;
  (0, _react.useEffect)(() => {
    if (!initialLoadDone.current && process?.steps?.[0]?.id && !stepId) {
      initialLoadDone.current = true;
      setStepId(process.steps[0].id);
    }
  }, [process, stepId]);
  const handleStepChange = (0, _react.useCallback)(newStepId => {
    setStepId(newStepId);
  }, []);
  const {
    snippets: currentSnippets,
    isLoading
  } = (0, _react.useMemo)(() => {
    if (!stepId) return {
      snippets: null,
      isLoading: false
    };
    return {
      snippets: snippetsData?.codeSnippets || null,
      isLoading: snippetsLoading
    };
  }, [stepId, snippetsData, snippetsLoading]);
  if (!process) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_loadingSkeleton.WidgetSkeleton, {});
  }
  if (processError) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: ["Error: ", processError?.message]
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
exports.ExplainThisCodeUI = ExplainThisCodeUI;
var _default = exports.default = ExplainThisCodeUI;