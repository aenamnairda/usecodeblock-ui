import React from 'react';
import { Flex } from '@radix-ui/themes';
import './styles.css';

export const WidgetAppBar = () => {
  return (
    <div className="AppBarWrapper">
      <Flex direction="row" gap="1">
        <div className="StyledCircle" />
        <div className="StyledCircle" />
        <div className="StyledCircle" />
      </Flex>
    </div>
  );
};

export default WidgetAppBar;
