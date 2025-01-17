"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetAppBar = void 0;
var _themes = require("@radix-ui/themes");
require("./styles.css");
var _jsxRuntime = require("react/jsx-runtime");
var WidgetAppBar = exports.WidgetAppBar = function WidgetAppBar() {
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