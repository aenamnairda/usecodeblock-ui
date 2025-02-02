import * as React from 'react';
import { Flex } from '@radix-ui/themes';
import * as Collapsible from '@radix-ui/react-collapsible';

import styles from './styles.module.css';

const LeftNav = ({ steps, onStepChange, selectedStepId }) => {
  return (
    <Flex direction="column" gap="2">
      {steps.map((step) => (
        <Collapsible.Root
          key={step.id}
          className={styles.Root}
          open={selectedStepId === step.id}
          onOpenChange={() => onStepChange(step.id)}
          style={{
            flex: selectedStepId === step.id ? '1' : 'none',
            transition: 'flex 300ms cubic-bezier(0.87, 0, 0.13, 1)',
          }}
        >
          <div className={styles.StepContent}>
            <Collapsible.Trigger asChild>
              <div className={styles.Title}>{step.title}</div>
            </Collapsible.Trigger>
            <Collapsible.Content className={styles.CollapsibleContent}>
              <div className={styles.DescriptionContainer}>
                <span className={styles.Description}>{step.description}</span>
              </div>
            </Collapsible.Content>
          </div>
        </Collapsible.Root>
      ))}
    </Flex>
  );
};

export default LeftNav;
