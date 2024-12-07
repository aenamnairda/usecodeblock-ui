import * as React from "react";
import { useState } from "react";
import { Tabs, Text } from "@radix-ui/themes";

import { CodeSnippets } from "../code-snippets";
import styles from "./styles.module.css";

const FileTabs = ({ snippets, selectedStepId }) => {
  const [selectedSnippetIndex, setSelectedSnippetIndex] = useState(0);

  const handleTabChange = (newValue) => {
    setSelectedSnippetIndex(newValue);
  };

  React.useEffect(() => {
    setSelectedSnippetIndex(0);
  }, [selectedStepId, snippets]);

  return (
    <Tabs.Root
      className={styles.Root}
      value={selectedSnippetIndex}
      onValueChange={handleTabChange}
    >
      <Tabs.List className={styles.List}>
        {snippets.map((snippet, index) => (
          <Tabs.Trigger
            className={styles.Trigger}
            key={snippet.id}
            value={index}
          >
            <Text style={{ color: "white", cursor: "pointer" }}>
              {snippet.file_name + "." + snippet.language_extension}
            </Text>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {snippets.map((snippet, index) => (
        <Tabs.Content className={styles.Content} key={snippet.id} value={index}>
          <CodeSnippets
            code={snippet.code}
            language={snippet.language_extension}
          />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default FileTabs;
