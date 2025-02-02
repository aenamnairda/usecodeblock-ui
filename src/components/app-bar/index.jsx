import React from 'react';
import { Flex } from '@radix-ui/themes';
import './styles.css';

export const WidgetAppBar = () => {
  return (
    <Flex px="4" pb="2" pt="4">
      <Flex align="center" flexGrow="1" direction="row" gap="1">
        <div className="StyledCircle" />
        <div className="StyledCircle" />
        <div className="StyledCircle" />
      </Flex>
      <Flex direction="row" gap="1"></Flex>
    </Flex>
  );
};

export default WidgetAppBar;
