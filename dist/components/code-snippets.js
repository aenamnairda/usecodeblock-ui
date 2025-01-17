"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeSnippets = CodeSnippets;
var _prismReactRenderer = require("prism-react-renderer");
var _jsxRuntime = require("react/jsx-runtime");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function CodeSnippets(_ref) {
  var code = _ref.code,
    language = _ref.language;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_prismReactRenderer.Highlight, {
    code: code,
    language: language,
    theme: _prismReactRenderer.themes.dracula,
    children: function children(_ref2) {
      var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("pre", {
        className: className,
        style: _objectSpread(_objectSpread({}, style), {}, {
          backgroundColor: "transparent",
          padding: "0.5rem 0",
          width: "100%",
          height: "100%",
          margin: 0,
          overflow: "auto",
          fontSize: "0.75rem"
        }),
        children: tokens.map(function (line, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({}, getLineProps({
            line: line
          })), {}, {
            style: {
              display: "flex"
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              style: {
                userSelect: "none",
                width: "2em",
                color: "#666",
                textAlign: "right",
                marginRight: "1em"
              },
              children: i + 1
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: line.map(function (token, key) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", _objectSpread({}, getTokenProps({
                  token: token
                })), key);
              })
            })]
          }), i);
        })
      });
    }
  });
}