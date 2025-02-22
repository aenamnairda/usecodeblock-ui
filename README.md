# UseCodeBlock Module

UseCodeBlock is a React-based module that provides an easy-to-use UI component and API client for interacting with the UseCodeBlock API.

## Installation

```bash
npm install usecodeblock
```

## Usage

### UseCodeBlockUI Component

The `UseCodeBlockUI` component is a ready-to-use React component that displays the result of a health check API call.

```jsx
import React from "react";
import { UseCodeBlockUI } from "usecodeblock";

const App = () => {
  return (
    <div>
      <h1>UseCodeBlockUI Health Check</h1>
      <UseCodeBlockUI processId="your-process-id" />
    </div>
  );
};

export default App;
```

## How to Use This Module in Your Project

1. Install the module in your project:

   ```bash
   npm install usecodeblock
   ```

2. Import the necessary components or functions in your React component:

   ```jsx
   import {
     UseCodeBlockUI,
     UseCodeBlockClient,
   } from "usecodeblock";
   ```

3. Use the `UseCodeBlockUI` component in your JSX:

   ```jsx
   <UseCodeBlockUI processId="your-process-id" />
   ```

Remember to replace 'your-process-id' with your actual values.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
