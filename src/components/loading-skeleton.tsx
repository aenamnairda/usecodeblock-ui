import React from 'react';
import { Box, Skeleton, Flex, Text } from '@radix-ui/themes';

import { WidgetAppBar } from './app-bar';

export const LoadingSkeleton = () => {
  return (
    <Box className="WidgetWrapper">
      <WidgetAppBar />
      <Flex direction="row" gap="2" align="stretch" p="2">
        <Skeleton width="300px" height="300px" style={{borderRadius: 'var(--radius-6)'}} />
        <Flex direction="column" gap="2">
        <Text>
          <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
        </Text>
        <Skeleton>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
        </Skeleton>
      </Flex>
      </Flex>
    </Box>
  );
};
