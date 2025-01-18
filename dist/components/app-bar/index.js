"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WidgetAppBar = void 0;
var _react = _interopRequireDefault(require("react"));
var _themes = require("@radix-ui/themes");
require("./styles.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const WidgetAppBar = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "AppBarWrapper",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_themes.Flex, {
      direction: "row",
      gap: "1",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "StyledCircle"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "StyledCircle"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "StyledCircle"
      })]
    })
  });
};
exports.WidgetAppBar = WidgetAppBar;
var _default = exports.default = WidgetAppBar;