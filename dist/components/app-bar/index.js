"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetAppBar = void 0;
var _themes = require("@radix-ui/themes");
require("./styles.css");
var WidgetAppBar = exports.WidgetAppBar = function WidgetAppBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "AppBarWrapper"
  }, /*#__PURE__*/React.createElement(_themes.Flex, {
    direction: "row",
    gap: "1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "StyledCircle"
  }), /*#__PURE__*/React.createElement("div", {
    className: "StyledCircle"
  }), /*#__PURE__*/React.createElement("div", {
    className: "StyledCircle"
  })));
};