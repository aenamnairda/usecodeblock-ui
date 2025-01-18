import { useEffect, useState } from "react";
import { getProcess } from "../services/api-service";
import { codeSnippetsClient } from "../lib/code-snippets";
export const useProcessData = processId => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });
  useEffect(() => {
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
        const response = await getProcess(processId);
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
export function useCodeSnippetsData(processId, stepId) {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null
  });
  useEffect(() => {
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
        const result = await codeSnippetsClient.get(processId, stepId);
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