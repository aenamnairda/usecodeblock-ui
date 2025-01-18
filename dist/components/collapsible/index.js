import * as React from 'react';
import { Flex } from '@radix-ui/themes';
import * as Collapsible from '@radix-ui/react-collapsible';
import styles from './styles.module.css';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CollapsibleSteps = _ref => {
  let {
    steps,
    onStepChange,
    selectedStepId
  } = _ref;
  return /*#__PURE__*/_jsx(Flex, {
    direction: "column",
    gap: "2",
    children: steps.map(step => /*#__PURE__*/_jsx(Collapsible.Root, {
      className: styles.Root,
      open: selectedStepId === step.id,
      onOpenChange: () => onStepChange(step.id),
      children: /*#__PURE__*/_jsxs("div", {
        className: styles.StepContent,
        children: [/*#__PURE__*/_jsx(Collapsible.Trigger, {
          asChild: true,
          children: /*#__PURE__*/_jsx("div", {
            className: styles.Title,
            children: step.title
          })
        }), /*#__PURE__*/_jsx(Collapsible.Content, {
          className: styles.CollapsibleContent,
          children: /*#__PURE__*/_jsx("div", {
            className: styles.DescriptionContainer,
            children: /*#__PURE__*/_jsx("span", {
              className: styles.Description,
              children: step.description
            })
          })
        })]
      })
    }, step.id))
  });
};
export default CollapsibleSteps;