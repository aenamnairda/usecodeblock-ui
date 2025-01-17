import { Flex } from "@radix-ui/themes";
import "./styles.css";
export var WidgetAppBar = function WidgetAppBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "AppBarWrapper"
  }, /*#__PURE__*/React.createElement(Flex, {
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