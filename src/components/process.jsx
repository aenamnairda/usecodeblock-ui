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
        <Box px="2" pb="2" style={{ height: 'calc(100% - 48px)', width: '100%' }}>
          <Flex height="100%" direction="row" gap="2" wrap="wrap">
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
        </Box>
      </div>
    );
  }
);

ProcessWidget.displayName = 'ProcessWidget';
