import { createRoot } from 'react-dom/client';
import { UseCodeBlockUI } from '../../src/index';
import { Theme, Container } from '@radix-ui/themes';

createRoot(document.getElementById('root')).render(
  <Theme>
    <Container size="4">
      <h1>Explain This Code</h1>
      <UseCodeBlockUI height="600px" processId="e85645a9-98eb-451f-8b30-d57e2ddaa225" />
    </Container>
  </Theme>
);
