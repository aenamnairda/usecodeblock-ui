import { Flex } from "@radix-ui/themes";
import * as Collapsible from "@radix-ui/react-collapsible";
import styles from "./styles.module.css";
var CollapsibleSteps = function CollapsibleSteps(_ref) {
  var steps = _ref.steps,
    onStepChange = _ref.onStepChange,
    selectedStepId = _ref.selectedStepId;
  return /*#__PURE__*/React.createElement(Flex, {
    direction: "column",
    gap: "2"
  }, steps.map(function (step) {
    return /*#__PURE__*/React.createElement(Collapsible.Root, {
      key: step.id,
      className: styles.Root,
      open: selectedStepId === step.id,
      onOpenChange: function onOpenChange() {
        return onStepChange(step.id);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.StepContent
    }, /*#__PURE__*/React.createElement(Collapsible.Trigger, {
      asChild: true
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.Title
    }, step.title)), /*#__PURE__*/React.createElement(Collapsible.Content, {
      className: styles.CollapsibleContent
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.DescriptionContainer
    }, /*#__PURE__*/React.createElement("span", {
      className: styles.Description
    }, step.description)))));
  }));
};
export default CollapsibleSteps;