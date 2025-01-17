import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import CollapsibleSteps from "./collapsible";
import { WidgetAppBar } from "./app-bar";
import FileTabs from "./file-tabs";
import { SnippetLoadingSkeleton } from "./snippet-skeleton";
import "./styles.css";
export var ProcessWidget = /*#__PURE__*/React.memo(function (_ref) {
  var process = _ref.process,
    codeSnippets = _ref.codeSnippets,
    onStepChange = _ref.onStepChange,
    codeSnippetsLoading = _ref.codeSnippetsLoading,
    codeSnippetsError = _ref.codeSnippetsError,
    selectedStepId = _ref.selectedStepId;
  var handleStepChange = React.useCallback(function (newStepId) {
    onStepChange(newStepId);
  }, [onStepChange]);
  return /*#__PURE__*/React.createElement("div", {
    className: "WidgetWrapper"
  }, /*#__PURE__*/React.createElement(WidgetAppBar, null), /*#__PURE__*/React.createElement(Flex, {
    direction: "row",
    gap: "2",
    align: "stretch",
    p: "2"
  }, /*#__PURE__*/React.createElement(CollapsibleSteps, {
    steps: process.steps,
    onStepChange: handleStepChange,
    selectedStepId: selectedStepId
  }), codeSnippetsLoading ? /*#__PURE__*/React.createElement(SnippetLoadingSkeleton, null) : codeSnippetsError ? /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, null, "Error loading code snippets: ", codeSnippetsError.message)) : codeSnippets ? /*#__PURE__*/React.createElement(Box, {
    className: "FileTabsWrapper",
    p: 2
  }, /*#__PURE__*/React.createElement(FileTabs, {
    snippets: codeSnippets,
    selectedSnippetIndex: selectedStepId
  })) : /*#__PURE__*/React.createElement(SnippetLoadingSkeleton, null)));
});
ProcessWidget.displayName = "ProcessWidget";