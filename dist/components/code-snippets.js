import * as React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function CodeSnippets(_ref) {
  let {
    code,
    language
  } = _ref;
  return /*#__PURE__*/_jsx(Highlight, {
    code: code,
    language: language,
    theme: themes.dracula,
    children: _ref2 => {
      let {
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps
      } = _ref2;
      return /*#__PURE__*/_jsx("pre", {
        className: className,
        style: {
          ...style,
          backgroundColor: 'transparent',
          padding: '0.5rem 0',
          width: '100%',
          height: '100%',
          margin: 0,
          overflow: 'auto',
          fontSize: '0.75rem'
        },
        children: tokens.map((line, i) => /*#__PURE__*/_jsxs("div", {
          ...getLineProps({
            line
          }),
          style: {
            display: 'flex'
          },
          children: [/*#__PURE__*/_jsx("span", {
            style: {
              userSelect: 'none',
              width: '2em',
              color: '#666',
              textAlign: 'right',
              marginRight: '1em'
            },
            children: i + 1
          }), /*#__PURE__*/_jsx("span", {
            children: line.map((token, key) => /*#__PURE__*/_jsx("span", {
              ...getTokenProps({
                token
              })
            }, key))
          })]
        }, i))
      });
    }
  });
}