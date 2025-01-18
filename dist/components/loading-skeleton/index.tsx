import React from 'react';
import { Box, Skeleton, Flex } from '@radix-ui/themes';

import { WidgetAppBar } from '../app-bar';

export const WidgetSkeleton = () => {
  return (
    <Box className="WidgetWrapper">
      <WidgetAppBar />
      <Flex direction="row" gap="2" align="stretch" p="2">
        <Skeleton width="300px" height="400px" />
        <Flex direction="column" gap="2">
          <Skeleton width="100px" height="1em" />
          <Skeleton width="100px" height="1em" />
          <Skeleton width="250px" height="1em" />
          <Skeleton width="250px" height="1em" />
        </Flex>
      </Flex>
    </Box>
  );
};
