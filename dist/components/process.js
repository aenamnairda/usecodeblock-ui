import * as React from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';
import CollapsibleSteps from './collapsible';
import { WidgetAppBar } from './app-bar';
import FileTabs from './file-tabs';
import { SnippetLoadingSkeleton } from './snippet-skeleton';
import './styles.css';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ProcessWidget = /*#__PURE__*/React.memo(_ref => {
  let {
    process,
    codeSnippets,
    onStepChange,
    codeSnippetsLoading,
    codeSnippetsError,
    selectedStepId
  } = _ref;
  const handleStepChange = React.useCallback(newStepId => {
    onStepChange(newStepId);
  }, [onStepChange]);
  return /*#__PURE__*/_jsxs("div", {
    className: "WidgetWrapper",
    children: [/*#__PURE__*/_jsx(WidgetAppBar, {}), /*#__PURE__*/_jsxs(Flex, {
      direction: "row",
      gap: "2",
      align: "stretch",
      p: "2",
      children: [/*#__PURE__*/_jsx(CollapsibleSteps, {
        steps: process.steps,
        onStepChange: handleStepChange,
        selectedStepId: selectedStepId
      }), codeSnippetsLoading ? /*#__PURE__*/_jsx(SnippetLoadingSkeleton, {}) : codeSnippetsError ? /*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsxs(Text, {
          children: ["Error loading code snippets: ", codeSnippetsError.message]
        })
      }) : codeSnippets ? /*#__PURE__*/_jsx(Box, {
        className: "FileTabsWrapper",
        p: 2,
        children: /*#__PURE__*/_jsx(FileTabs, {
          snippets: codeSnippets,
          selectedSnippetIndex: selectedStepId
        })
      }) : /*#__PURE__*/_jsx(SnippetLoadingSkeleton, {})]
    })]
  });
});
ProcessWidget.displayName = 'ProcessWidget';