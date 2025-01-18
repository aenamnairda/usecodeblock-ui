import React from 'react';
import { Flex } from '@radix-ui/themes';
import './styles.css';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const WidgetAppBar = () => {
  return /*#__PURE__*/_jsx("div", {
    className: "AppBarWrapper",
    children: /*#__PURE__*/_jsxs(Flex, {
      direction: "row",
      gap: "1",
      children: [/*#__PURE__*/_jsx("div", {
        className: "StyledCircle"
      }), /*#__PURE__*/_jsx("div", {
        className: "StyledCircle"
      }), /*#__PURE__*/_jsx("div", {
        className: "StyledCircle"
      })]
    })
  });
};
export default WidgetAppBar;