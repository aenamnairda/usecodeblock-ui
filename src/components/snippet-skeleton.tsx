import React from "react";
import { Box, Skeleton } from "@radix-ui/themes";

import { WidgetAppBar } from "./app-bar";

export const SnippetLoadingSkeleton = () => {
  return (
    <Box>
      <WidgetAppBar />
      <Box>
        <Skeleton width="300px" height="400px" />
        <Box>
          <Box>
            <Skeleton width="100px" height="1em" />
            <Skeleton width="100px" height="1em" />
          </Box>
          <Box>
            <Skeleton width="250px" height="1em" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
