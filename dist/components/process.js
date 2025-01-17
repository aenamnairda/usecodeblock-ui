"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProcessWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _themes = require("@radix-ui/themes");
var _collapsible = _interopRequireDefault(require("./collapsible"));
var _appBar = require("./app-bar");
var _fileTabs = _interopRequireDefault(require("./file-tabs"));
var _snippetSkeleton = require("./snippet-skeleton");
require("./styles.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ProcessWidget = exports.ProcessWidget = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var process = _ref.process,
    codeSnippets = _ref.codeSnippets,
    onStepChange = _ref.onStepChange,
    codeSnippetsLoading = _ref.codeSnippetsLoading,
    codeSnippetsError = _ref.codeSnippetsError,
    selectedStepId = _ref.selectedStepId;
  var handleStepChange = _react["default"].useCallback(function (newStepId) {
    onStepChange(newStepId);
  }, [onStepChange]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "WidgetWrapper",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_appBar.WidgetAppBar, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_themes.Flex, {
      direction: "row",
      gap: "2",
      align: "stretch",
      p: "2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_collapsible["default"], {
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
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fileTabs["default"], {
          snippets: codeSnippets,
          selectedSnippetIndex: selectedStepId
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_snippetSkeleton.SnippetLoadingSkeleton, {})]
    })]
  });
});
ProcessWidget.displayName = "ProcessWidget";