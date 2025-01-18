import * as React from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';

import CollapsibleSteps from './collapsible';
import { WidgetAppBar } from './app-bar';
import FileTabs from './file-tabs';
import { SnippetLoadingSkeleton } from './snippet-skeleton';

import './styles.css';

export const ProcessWidget = React.memo(
  ({ process, codeSnippets, onStepChange, codeSnippetsLoading, codeSnippetsError, selectedStepId }) => {
    const handleStepChange = React.useCallback(
      (newStepId) => {
        onStepChange(newStepId);
      },
      [onStepChange]
    );

    return (
      <div className="WidgetWrapper">
        <WidgetAppBar />
        <Flex direction="row" gap="2" align="stretch" p="2">
          <CollapsibleSteps steps={process.steps} onStepChange={handleStepChange} selectedStepId={selectedStepId} />
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
