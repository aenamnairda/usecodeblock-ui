function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useProcessData } from "../hooks/use-api-data";
import { useCodeSnippetsData } from "../hooks/use-api-data";
import { ProcessWidget } from "./process";
import { WidgetSkeleton } from "./loading-skeleton";
import "@radix-ui/themes/styles.css";
import "../styles/global.css";
import { Theme } from "@radix-ui/themes";
export var ExplainThisCodeUI = function ExplainThisCodeUI(_ref) {
  var processId = _ref.processId;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    stepId = _useState2[0],
    setStepId = _useState2[1];
  var initialLoadDone = useRef(false);
  var _useProcessData = useProcessData(processId),
    processData = _useProcessData.data,
    processLoading = _useProcessData.loading,
    processError = _useProcessData.error;
  var _useCodeSnippetsData = useCodeSnippetsData(processId, stepId),
    snippetsData = _useCodeSnippetsData.data,
    snippetsLoading = _useCodeSnippetsData.loading,
    snippetsError = _useCodeSnippetsData.error;
  var process = processData === null || processData === void 0 ? void 0 : processData.process;
  useEffect(function () {
    var _process$steps;
    if (!initialLoadDone.current && process !== null && process !== void 0 && (_process$steps = process.steps) !== null && _process$steps !== void 0 && (_process$steps = _process$steps[0]) !== null && _process$steps !== void 0 && _process$steps.id && !stepId) {
      initialLoadDone.current = true;
      setStepId(process.steps[0].id);
    }
  }, [process, stepId]);
  var handleStepChange = useCallback(function (newStepId) {
    setStepId(newStepId);
  }, []);
  var _useMemo = useMemo(function () {
      if (!stepId) return {
        snippets: null,
        isLoading: false
      };
      return {
        snippets: (snippetsData === null || snippetsData === void 0 ? void 0 : snippetsData.codeSnippets) || null,
        isLoading: snippetsLoading
      };
    }, [stepId, snippetsData, snippetsLoading]),
    currentSnippets = _useMemo.snippets,
    isLoading = _useMemo.isLoading;
  if (!process) {
    return /*#__PURE__*/React.createElement(WidgetSkeleton, null);
  }
  if (processError) {
    return /*#__PURE__*/React.createElement("div", null, "Error: ", processError === null || processError === void 0 ? void 0 : processError.message);
  }
  return /*#__PURE__*/React.createElement(Theme, {
    accentColor: "gray",
    grayColor: "sand",
    radius: "large"
  }, processLoading ? /*#__PURE__*/React.createElement(WidgetSkeleton, null) : /*#__PURE__*/React.createElement(ProcessWidget, {
    process: process,
    codeSnippets: currentSnippets,
    onStepChange: handleStepChange,
    codeSnippetsLoading: isLoading,
    codeSnippetsError: snippetsError,
    selectedStepId: stepId
  }));
};