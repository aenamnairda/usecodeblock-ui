import { createRoot } from 'react-dom/client';
import { ExplainThisCodeUI } from '../../src/index';
import { Theme, Container } from '@radix-ui/themes';

createRoot(document.getElementById('root')).render(
  <Theme>
    <Container size="4">
      <h1>Explain This Code</h1>
      <ExplainThisCodeUI height="300px" processId="85421dcd-6104-401f-8247-4b4efc13798c" />
    </Container>
  </Theme>
);
