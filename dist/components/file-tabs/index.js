"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _themes = require("@radix-ui/themes");
var _codeSnippets = require("../code-snippets");
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FileTabs = _ref => {
  let {
    snippets,
    selectedStepId
  } = _ref;
  const [selectedSnippetIndex, setSelectedSnippetIndex] = (0, _react.useState)(0);
  const handleTabChange = newValue => {
    setSelectedSnippetIndex(newValue);
  };
  React.useEffect(() => {
    setSelectedSnippetIndex(0);
  }, [selectedStepId, snippets]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_themes.Tabs.Root, {
    className: _stylesModule.default.Root,
    value: selectedSnippetIndex,
    onValueChange: handleTabChange,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_themes.Tabs.List, {
      className: _stylesModule.default.List,
      children: snippets.map((snippet, index) => snippet.file_name ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_themes.Tabs.Trigger, {
        className: _stylesModule.default.Trigger,
        value: index,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_themes.Text, {
          style: {
            color: 'white',
            cursor: 'pointer'
          },
          children: snippet.file_name + '.' + snippet.language_extension
        })
      }, snippet.id) : null)
    }), snippets.map((snippet, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_themes.Tabs.Content, {
      className: _stylesModule.default.Content,
      value: index,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_codeSnippets.CodeSnippets, {
        code: snippet.code,
        language: snippet.language_extension
      })
    }, snippet.id))]
  });
};
var _default = exports.default = FileTabs;