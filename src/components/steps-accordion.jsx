import React from 'react';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';

export const StepsAccordion = ({ steps, onStepChange, selectedStepId }) => {
  return (
    <AccordionGroup gap={0.5} sx={{ width: { md: '320px', xs: '100%' } }}>
      {steps.map((step) => {
        return (
          <Accordion
            key={step.id}
            expanded={selectedStepId === step.id}
            onChange={(event, expanded) => {
              if (expanded) {
                onStepChange(step.id);
              }
            }}
            sx={{
              cursor: 'pointer',
              marginBottom: step.id === steps[steps.length - 1].id ? 0 : 0.5,
              borderRadius: 'md',
              backgroundColor: 'background.surface',
              display: 'flex',
              flexGrow: selectedStepId === step.id ? 1 : 0,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <AccordionSummary indicator={false} sx={{ fontSize: 'md' }}>
              {step.title}
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: 'sm', color: 'text.tertiary' }}>{step.description}</AccordionDetails>
          </Accordion>
        );
      })}
    </AccordionGroup>
  );
};
