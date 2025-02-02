import * as React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import './style.css';

function useTypewriterEffect(tokens) {
  const [displayedLines, setDisplayedLines] = React.useState([]);
  const [currentLine, setCurrentLine] = React.useState(0);
  const [currentChar, setCurrentChar] = React.useState(0);

  React.useEffect(() => {
    if (!tokens?.[currentLine]) return;

    const line = tokens[currentLine];
    const lineText = line.map((token) => token.content).join('');

    if (currentChar < lineText.length) {
      const timer = setTimeout(() => {
        setCurrentChar((prev) => prev + 1);
      }, 1); // Much faster character reveal
      return () => clearTimeout(timer);
    } else {
      if (currentLine < tokens.length - 1) {
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }
    }
  }, [currentLine, currentChar, tokens]);

  return { displayedLines, currentLine, currentChar };
}

function CodeHighlighterInner({ tokens, className, style, getLineProps, getTokenProps }) {
  const { displayedLines, currentLine, currentChar } = useTypewriterEffect(tokens);

  return (
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
      {displayedLines.map((line, i) => (
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
                }}
              />
            ))}
          </span>
        </div>
      ))}
      {currentLine < tokens.length && (
        <div
          {...getLineProps({ line: tokens[currentLine] })}
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
            }}
          >
            {currentLine + 1}
          </span>
          <span>
            {tokens[currentLine].map((token, key) => {
              const tokenContent = token.content;
              const displayedContent = tokenContent.slice(
                0,
                Math.max(
                  0,
                  currentChar -
                    token.content
                      .split('')
                      .reduce((acc, _, i) => acc + (i < key ? tokens[currentLine][i].content.length : 0), 0)
                )
              );

              return displayedContent ? (
                <span
                  key={key}
                  {...getTokenProps({ token: { ...token, content: displayedContent } })}
                  style={{
                    ...getTokenProps({ token }).style,
                  }}
                />
              ) : null;
            })}
          </span>
        </div>
      )}
    </pre>
  );
}

export function CodeHighlighter({ code, language }) {
  return (
    <Highlight code={code} language={language} theme={themes.vsDark}>
      {(props) => <CodeHighlighterInner {...props} />}
    </Highlight>
  );
}
