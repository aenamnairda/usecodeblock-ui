"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCodeSnippetsData = useCodeSnippetsData;
exports.useProcessData = void 0;
var _react = require("react");
var _apiService = require("../services/api-service");
var _codeSnippets = require("../lib/code-snippets");
const useProcessData = processId => {
  const [state, setState] = (0, _react.useState)({
    data: null,
    loading: true,
    error: null
  });
  (0, _react.useEffect)(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (!processId) {
        setState(prev => ({
          ...prev,
          loading: false
        }));
        return;
      }
      try {
        const response = await (0, _apiService.getProcess)(processId);
        if (isMounted) {
          setState({
            data: response,
            loading: false,
            error: null
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error
          });
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [processId]);
  return state;
};
exports.useProcessData = useProcessData;
function useCodeSnippetsData(processId, stepId) {
  const [state, setState] = (0, _react.useState)({
    data: null,
    loading: false,
    error: null
  });
  (0, _react.useEffect)(() => {
    if (!processId || !stepId) {
      return;
    }
    let mounted = true;
    const fetchData = async () => {
      setState(prev => ({
        ...prev,
        loading: true
      }));
      try {
        const result = await _codeSnippets.codeSnippetsClient.get(processId, stepId);
        if (!mounted) return;
        setState({
          data: result.data,
          loading: false,
          error: result.error
        });
      } catch (error) {
        if (!mounted) return;
        setState({
          data: null,
          loading: false,
          error
        });
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, [processId, stepId]);
  return state;
}