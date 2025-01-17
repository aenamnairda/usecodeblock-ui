function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { Highlight, themes } from "prism-react-renderer";
export function CodeSnippets(_ref) {
  var code = _ref.code,
    language = _ref.language;
  return /*#__PURE__*/React.createElement(Highlight, {
    code: code,
    language: language,
    theme: themes.dracula
  }, function (_ref2) {
    var className = _ref2.className,
      style = _ref2.style,
      tokens = _ref2.tokens,
      getLineProps = _ref2.getLineProps,
      getTokenProps = _ref2.getTokenProps;
    return /*#__PURE__*/React.createElement("pre", {
      className: className,
      style: _objectSpread(_objectSpread({}, style), {}, {
        backgroundColor: "transparent",
        padding: "0.5rem 0",
        width: "100%",
        height: "100%",
        margin: 0,
        overflow: "auto",
        fontSize: "0.75rem"
      })
    }, tokens.map(function (line, i) {
      return /*#__PURE__*/React.createElement("div", _extends({
        key: i
      }, getLineProps({
        line: line
      }), {
        style: {
          display: "flex"
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          userSelect: "none",
          width: "2em",
          color: "#666",
          textAlign: "right",
          marginRight: "1em"
        }
      }, i + 1), /*#__PURE__*/React.createElement("span", null, line.map(function (token, key) {
        return /*#__PURE__*/React.createElement("span", _extends({
          key: key
        }, getTokenProps({
          token: token
        })));
      })));
    }));
  });
}