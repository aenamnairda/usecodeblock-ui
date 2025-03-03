import React from 'react';
import { Flex, Tooltip } from '@radix-ui/themes';
import './styles.css';
import { Logo } from '../logo';

export const WidgetAppBar = () => {
  return (
    <Flex align="center" px="4" height="48px">
      <Flex align="center" flexGrow="1" direction="row" gap="1">
        <div className="StyledCircle" />
        <div className="StyledCircle" />
        <div className="StyledCircle" />
      </Flex>
      <Flex direction="row" gap="1">
        <Tooltip content="Created using usecodeblock.com">
          <Logo style={{ opacity: '0.4' }} />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default WidgetAppBar;
