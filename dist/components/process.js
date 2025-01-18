"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProcessWidget = void 0;
var React = _interopRequireWildcard(require("react"));
var _themes = require("@radix-ui/themes");
var _collapsible = _interopRequireDefault(require("./collapsible"));
var _appBar = require("./app-bar");
var _fileTabs = _interopRequireDefault(require("./file-tabs"));
var _snippetSkeleton = require("./snippet-skeleton");
require("./styles.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ProcessWidget = exports.ProcessWidget = /*#__PURE__*/React.memo(_ref => {
  let {
    process,
    codeSnippets,
    onStepChange,
    codeSnippetsLoading,
    codeSnippetsError,
    selectedStepId
  } = _ref;
  const handleStepChange = React.useCallback(newStepId => {
    onStepChange(newStepId);
  }, [onStepChange]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "WidgetWrapper",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_appBar.WidgetAppBar, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_themes.Flex, {
      direction: "row",
      gap: "2",
      align: "stretch",
      p: "2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_collapsible.default, {
        steps: process.steps,
        onStepChange: handleStepChange,
        selectedStepId: selectedStepId
      }), codeSnippetsLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_snippetSkeleton.SnippetLoadingSkeleton, {}) : codeSnippetsError ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_themes.Box, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_themes.Text, {
          children: ["Error loading code snippets: ", codeSnippetsError.message]
        })
      }) : codeSnippets ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_themes.Box, {
        className: "FileTabsWrapper",
        p: 2,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fileTabs.default, {
          snippets: codeSnippets,
          selectedSnippetIndex: selectedStepId
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_snippetSkeleton.SnippetLoadingSkeleton, {})]
    })]
  });
});
ProcessWidget.displayName = 'ProcessWidget';