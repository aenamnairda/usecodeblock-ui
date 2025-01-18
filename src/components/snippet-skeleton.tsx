import * as React from "react";
import { Text, Skeleton, Flex } from "@radix-ui/themes";

export const SnippetLoadingSkeleton = () => {
  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text>
          <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
        </Text>

        <Skeleton>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Text>
        </Skeleton>
      </Flex>
    </Flex>
  );
};
