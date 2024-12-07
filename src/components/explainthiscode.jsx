import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useProcessData } from "../hooks/use-api-data";
import { useCodeSnippetsData } from "../hooks/use-api-data";
import { WidgetSkeleton } from "./widget-skeleton";
import { ProcessWidget } from "./process";
import "@radix-ui/themes/styles.css";
import "../styles/global.css";

import { Theme } from "@radix-ui/themes";

export const ExplainThisCodeUI = ({ processId }) => {
  const [stepId, setStepId] = useState(null);
  const initialLoadDone = useRef(false);

  const {
    data: processData,
    loading: processLoading,
    error: processError,
  } = useProcessData(processId);
  const {
    data: snippetsData,
    loading: snippetsLoading,
    error: snippetsError,
  } = useCodeSnippetsData(processId, stepId);

  const process = processData?.process;

  useEffect(() => {
    if (!initialLoadDone.current && process?.steps?.[0]?.id && !stepId) {
      initialLoadDone.current = true;
      setStepId(process.steps[0].id);
    }
  }, [process, stepId]);

  const handleStepChange = useCallback((newStepId) => {
    setStepId(newStepId);
  }, []);

  const { snippets: currentSnippets, isLoading } = useMemo(() => {
    if (!stepId) return { snippets: null, isLoading: false };

    return {
      snippets: snippetsData?.codeSnippets || null,
      isLoading: snippetsLoading,
    };
  }, [stepId, snippetsData, snippetsLoading]);

  if (!process) {
    return <WidgetSkeleton />;
  }

  if (processError) {
    return <div>Error: {processError?.message}</div>;
  }

  return (
    <React.Fragment>
      <Theme accentColor="gray" grayColor="sand" radius="large">
        <main>
          {processLoading ? (
            <WidgetLoadingSkeleton />
          ) : (
            <ProcessWidget
              process={process}
              codeSnippets={currentSnippets}
              onStepChange={handleStepChange}
              codeSnippetsLoading={isLoading}
              codeSnippetsError={snippetsError}
              selectedStepId={stepId}
            />
          )}
        </main>
      </Theme>
    </React.Fragment>
  );
};
