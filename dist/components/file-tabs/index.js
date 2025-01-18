import * as React from 'react';
import { useState } from 'react';
import { Tabs, Text } from '@radix-ui/themes';
import { CodeSnippets } from '../code-snippets';
import styles from './styles.module.css';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FileTabs = _ref => {
  let {
    snippets,
    selectedStepId
  } = _ref;
  const [selectedSnippetIndex, setSelectedSnippetIndex] = useState(0);
  const handleTabChange = newValue => {
    setSelectedSnippetIndex(newValue);
  };
  React.useEffect(() => {
    setSelectedSnippetIndex(0);
  }, [selectedStepId, snippets]);
  return /*#__PURE__*/_jsxs(Tabs.Root, {
    className: styles.Root,
    value: selectedSnippetIndex,
    onValueChange: handleTabChange,
    children: [/*#__PURE__*/_jsx(Tabs.List, {
      className: styles.List,
      children: snippets.map((snippet, index) => snippet.file_name ? /*#__PURE__*/_jsx(Tabs.Trigger, {
        className: styles.Trigger,
        value: index,
        children: /*#__PURE__*/_jsx(Text, {
          style: {
            color: 'white',
            cursor: 'pointer'
          },
          children: snippet.file_name + '.' + snippet.language_extension
        })
      }, snippet.id) : null)
    }), snippets.map((snippet, index) => /*#__PURE__*/_jsx(Tabs.Content, {
      className: styles.Content,
      value: index,
      children: /*#__PURE__*/_jsx(CodeSnippets, {
        code: snippet.code,
        language: snippet.language_extension
      })
    }, snippet.id))]
  });
};
export default FileTabs;