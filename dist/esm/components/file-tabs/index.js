function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import * as React from "react";
import { useState } from "react";
import { Tabs, Text } from "@radix-ui/themes";
import { CodeSnippets } from "../code-snippets";
import styles from "./styles.module.css";
var FileTabs = function FileTabs(_ref) {
  var snippets = _ref.snippets,
    selectedStepId = _ref.selectedStepId;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    selectedSnippetIndex = _useState2[0],
    setSelectedSnippetIndex = _useState2[1];
  var handleTabChange = function handleTabChange(newValue) {
    setSelectedSnippetIndex(newValue);
  };
  React.useEffect(function () {
    setSelectedSnippetIndex(0);
  }, [selectedStepId, snippets]);
  return /*#__PURE__*/React.createElement(Tabs.Root, {
    className: styles.Root,
    value: selectedSnippetIndex,
    onValueChange: handleTabChange
  }, /*#__PURE__*/React.createElement(Tabs.List, {
    className: styles.List
  }, snippets.map(function (snippet, index) {
    return snippet.file_name ? /*#__PURE__*/React.createElement(Tabs.Trigger, {
      className: styles.Trigger,
      key: snippet.id,
      value: index
    }, /*#__PURE__*/React.createElement(Text, {
      style: {
        color: "white",
        cursor: "pointer"
      }
    }, snippet.file_name + "." + snippet.language_extension)) : null;
  })), snippets.map(function (snippet, index) {
    return /*#__PURE__*/React.createElement(Tabs.Content, {
      className: styles.Content,
      key: snippet.id,
      value: index
    }, /*#__PURE__*/React.createElement(CodeSnippets, {
      code: snippet.code,
      language: snippet.language_extension
    }));
  }));
};
export default FileTabs;