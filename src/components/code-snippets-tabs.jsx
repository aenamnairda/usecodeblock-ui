import * as React from "react";
import { useState } from "react";
import { tabClasses } from "@mui/joy";
import { Tabs, TabList, Tab, TabPanel } from "@radix-ui/themes";
import { CodeSnippets } from "./code-snippets";

export const CodeSnippetTabs = ({ codeSnippets, selectedStepId }) => {
  const [selectedSnippetIndex, setSelectedSnippetIndex] = useState(0);

  React.useEffect(() => {
    setSelectedSnippetIndex(0);
  }, [selectedStepId, codeSnippets]);

  const handleTabChange = (event, newValue) => {
    setSelectedSnippetIndex(newValue);
  };

  return codeSnippets && codeSnippets.length > 0 ? (
    <Tabs
      value={selectedSnippetIndex}
      onChange={handleTabChange}
      sx={{
        bgcolor: "background.level1",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <TabList
        disableUnderline
        size="sm"
        sx={{
          gap: 1,
          [`& .${tabClasses.root}`]: {
            [`&[aria-selected="true"]`]: {
              bgcolor: "background.surface",
              fontWeight: "md",
              boxShadow: "sm",
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: "-4px",
            },
          },
        }}
      >
        {codeSnippets.map((snippet, index) => (
          <Tab
            disableIndicator
            key={snippet.id}
            value={index}
            sx={{ borderRadius: "sm" }}
          >
            {snippet.file_name
              ? `${snippet.file_name}.${snippet.language_extension}`
              : "untitled"}
          </Tab>
        ))}
      </TabList>
      {codeSnippets.map((snippet, index) => (
        <TabPanel key={snippet.id} value={index}>
          <CodeSnippets
            code={snippet.code}
            language={snippet.language_extension}
          />
        </TabPanel>
      ))}
    </Tabs>
  ) : (
    <p>No code snippets</p>
  );
};
