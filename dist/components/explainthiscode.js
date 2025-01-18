import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useProcessData } from '../hooks/use-api-data';
import { useCodeSnippetsData } from '../hooks/use-api-data';
import { ProcessWidget } from './process';
import { WidgetSkeleton } from './loading-skeleton';
import '@radix-ui/themes/styles.css';
import '../styles/global.css';
import { Theme } from '@radix-ui/themes';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ExplainThisCodeUI = _ref => {
  let {
    processId
  } = _ref;
  const [stepId, setStepId] = useState(null);
  const initialLoadDone = useRef(false);
  const {
    data: processData,
    loading: processLoading,
    error: processError
  } = useProcessData(processId);
  const {
    data: snippetsData,
    loading: snippetsLoading,
    error: snippetsError
  } = useCodeSnippetsData(processId, stepId);
  const process = processData?.process;
  useEffect(() => {
    if (!initialLoadDone.current && process?.steps?.[0]?.id && !stepId) {
      initialLoadDone.current = true;
      setStepId(process.steps[0].id);
    }
  }, [process, stepId]);
  const handleStepChange = useCallback(newStepId => {
    setStepId(newStepId);
  }, []);
  const {
    snippets: currentSnippets,
    isLoading
  } = useMemo(() => {
    if (!stepId) return {
      snippets: null,
      isLoading: false
    };
    return {
      snippets: snippetsData?.codeSnippets || null,
      isLoading: snippetsLoading
    };
  }, [stepId, snippetsData, snippetsLoading]);
  if (!process) {
    return /*#__PURE__*/_jsx(WidgetSkeleton, {});
  }
  if (processError) {
    return /*#__PURE__*/_jsxs("div", {
      children: ["Error: ", processError?.message]
    });
  }
  return /*#__PURE__*/_jsx(Theme, {
    accentColor: "gray",
    grayColor: "sand",
    radius: "large",
    children: processLoading ? /*#__PURE__*/_jsx(WidgetSkeleton, {}) : /*#__PURE__*/_jsx(ProcessWidget, {
      process: process,
      codeSnippets: currentSnippets,
      onStepChange: handleStepChange,
      codeSnippetsLoading: isLoading,
      codeSnippetsError: snippetsError,
      selectedStepId: stepId
    })
  });
};
export default ExplainThisCodeUI;