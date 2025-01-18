import * as React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

export function CodeSnippets({ code, language }) {
  return (
    <Highlight code={code} language={language} theme={themes.dracula}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            backgroundColor: 'transparent',
            padding: '0.5rem 0',
            width: '100%',
            height: '100%',
            margin: 0,
            overflow: 'auto',
            fontSize: '0.75rem',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })} style={{ display: 'flex' }}>
              <span
                style={{
                  userSelect: 'none',
                  width: '2em',
                  color: '#666',
                  textAlign: 'right',
                  marginRight: '1em',
                }}
              >
                {i + 1}
              </span>
              <span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
