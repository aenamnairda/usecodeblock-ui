"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _themes = require("@radix-ui/themes");
var Collapsible = _interopRequireWildcard(require("@radix-ui/react-collapsible"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CollapsibleSteps = _ref => {
  let {
    steps,
    onStepChange,
    selectedStepId
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_themes.Flex, {
    direction: "column",
    gap: "2",
    children: steps.map(step => /*#__PURE__*/(0, _jsxRuntime.jsx)(Collapsible.Root, {
      className: _stylesModule.default.Root,
      open: selectedStepId === step.id,
      onOpenChange: () => onStepChange(step.id),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: _stylesModule.default.StepContent,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Collapsible.Trigger, {
          asChild: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: _stylesModule.default.Title,
            children: step.title
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Collapsible.Content, {
          className: _stylesModule.default.CollapsibleContent,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: _stylesModule.default.DescriptionContainer,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: _stylesModule.default.Description,
              children: step.description
            })
          })
        })]
      })
    }, step.id))
  });
};
var _default = exports.default = CollapsibleSteps;