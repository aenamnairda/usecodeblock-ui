import * as React from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';

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
        <Flex direction="row" gap="2" align="stretch" pb="2" px="2" style={{ height: 'calc(100% - 48px)' }}>
          <LeftNav steps={process.steps} onStepChange={handleStepChange} selectedStepId={selectedStepId} />
          {codeSnippetsLoading ? (
            <SnippetLoadingSkeleton />
          ) : codeSnippetsError ? (
            <Box>
              <Text>Error loading code snippets: {codeSnippetsError.message}</Text>
            </Box>
          ) : codeSnippets ? (
            <Box className="FileTabsWrapper" p={2}>
              <FileTabs snippets={codeSnippets} selectedSnippetIndex={selectedStepId} />
            </Box>
          ) : (
            <SnippetLoadingSkeleton />
          )}
        </Flex>
      </div>
    );
  }
);

ProcessWidget.displayName = 'ProcessWidget';
