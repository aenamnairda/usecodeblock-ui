import * as React from 'react';
import { Flex, Text } from '@radix-ui/themes';

import LeftNav from './left-nav';
import { WidgetAppBar } from './app-bar';
import FileTabs from './file-tabs';
import { SnippetLoadingSkeleton } from './snippet-skeleton';

import './styles.css';

export const ProcessWidget = React.memo(
  ({
    process,
    codeSnippets,
    onStepChange,
    codeSnippetsLoading,
    codeSnippetsError,
    selectedStepId,
    width = '100%',
    height = '100%',
    ...props
  }) => {
    const handleStepChange = React.useCallback(
      (newStepId) => {
        onStepChange(newStepId);
      },
      [onStepChange]
    );

    return (
      <div className="WidgetWrapper" style={{ width, height }} {...props}>
        <WidgetAppBar />
        <Flex p="2" style={{ height: 'calc(100% - 48px)', width: '100%' }} gap="2">
          <LeftNav steps={process.steps} onStepChange={handleStepChange} selectedStepId={selectedStepId} />
          {codeSnippetsLoading ? (
            <SnippetLoadingSkeleton />
          ) : codeSnippetsError ? (
            <Flex grow="1">
              <Text>Error loading code snippets: {codeSnippetsError.message}</Text>
            </Flex>
          ) : codeSnippets ? (
            <Flex
              grow="1"
              className="FileTabsWrapper"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <FileTabs snippets={codeSnippets} selectedSnippetIndex={selectedStepId} />
            </Flex>
          ) : (
            <SnippetLoadingSkeleton />
          )}
        </Flex>
      </div>
    );
  }
);

ProcessWidget.displayName = 'ProcessWidget';
