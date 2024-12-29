import { createRoot } from "react-dom/client";
import { ExplainThisCodeUI } from "../../src/index";
import { Theme, Container } from "@radix-ui/themes";

createRoot(document.getElementById("root")).render(
  <Theme>
    <Container size="4">
      <h1>Explain This Code</h1>
      <ExplainThisCodeUI processId="ae45b61b-b3e3-4e32-9d15-67aac4f87255" />
    </Container>
  </Theme>
);
