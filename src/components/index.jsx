import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useProcessData } from '../hooks/use-api-data';
import { useCodeSnippetsData } from '../hooks/use-api-data';
import { ProcessWidget } from './process';
import { LoadingSkeleton } from './loading-skeleton';
import '@radix-ui/themes/styles.css';

import '../styles/global.css';

import { Theme } from '@radix-ui/themes';

export const UseCodeBlockUI = ({ processId, width = '100%', height = '100%', radius = 'small', ...props }) => {
  const [stepId, setStepId] = useState(null);
  const initialLoadDone = useRef(false);

  const { data: processData, loading: processLoading, error: processError } = useProcessData(processId);
  const { data: snippetsData, loading: snippetsLoading, error: snippetsError } = useCodeSnippetsData(processId, stepId);

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
    return <LoadingSkeleton />;
  }

  if (processError) {
    return <div>Error: {processError?.message}</div>;
  }

  return (
    <Theme accentColor="gray" radius={radius}>
      {processLoading ? (
        <LoadingSkeleton />
      ) : (
        <ProcessWidget
          process={process}
          codeSnippets={currentSnippets}
          onStepChange={handleStepChange}
          codeSnippetsLoading={isLoading}
          codeSnippetsError={snippetsError}
          selectedStepId={stepId}
          width={width}
          height={height}
          {...props}
        />
      )}
    </Theme>
  );
};

export default UseCodeBlockUI;
