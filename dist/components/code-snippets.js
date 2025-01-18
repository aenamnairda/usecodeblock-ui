"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeSnippets = CodeSnippets;
var React = _interopRequireWildcard(require("react"));
var _prismReactRenderer = require("prism-react-renderer");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function CodeSnippets(_ref) {
  let {
    code,
    language
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_prismReactRenderer.Highlight, {
    code: code,
    language: language,
    theme: _prismReactRenderer.themes.dracula,
    children: _ref2 => {
      let {
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("pre", {
        className: className,
        style: {
          ...style,
          backgroundColor: 'transparent',
          padding: '0.5rem 0',
          width: '100%',
          height: '100%',
          margin: 0,
          overflow: 'auto',
          fontSize: '0.75rem'
        },
        children: tokens.map((line, i) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          ...getLineProps({
            line
          }),
          style: {
            display: 'flex'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: {
              userSelect: 'none',
              width: '2em',
              color: '#666',
              textAlign: 'right',
              marginRight: '1em'
            },
            children: i + 1
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: line.map((token, key) => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              ...getTokenProps({
                token
              })
            }, key))
          })]
        }, i))
      });
    }
  });
}