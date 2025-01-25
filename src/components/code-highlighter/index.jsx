import * as React from 'react';
import { Highlight } from 'prism-react-renderer';
import './style.css';

export function CodeHighlighter({ code, language }) {
  return (
    <Highlight code={code} language={language}>
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
            <div
              key={i}
              {...getLineProps({ line })}
              style={{
                display: 'flex',
              }}
            >
              <span
                style={{
                  userSelect: 'none',
                  width: '2em',
                  color: '#666',
                  textAlign: 'right',
                  marginRight: '1em',
                  opacity: 0,
                  animation: `typewriter 0.1s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {i + 1}
              </span>
              <span>
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({ token })}
                    style={{
                      ...getTokenProps({ token }).style,
                      opacity: 0,
                      animation: `typewriter 0.1s ease-out forwards`,
                      animationDelay: `${i * 0.1 + key * 0.03}s`,
                      animationFillMode: 'forwards',
                    }}
                  />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
