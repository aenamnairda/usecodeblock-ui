# ExplainThisCode Module

ExplainThisCode is a React-based module that provides an easy-to-use UI component and API client for interacting with the ExplainThisCode API.

## Installation

```bash
npm install explainthiscode
```

## Usage

### ExplainThisCodeUI Component

The `ExplainThisCodeUI` component is a ready-to-use React component that displays the result of a health check API call.

```jsx
import React from "react";
import { ExplainThisCodeUI } from "explainthiscode";

const App = () => {
  return (
    <div>
      <h1>ExplainThisCode Health Check</h1>
      <ExplainThisCodeUI processId="your-process-id" />
    </div>
  );
};

export default App;
```

### ExplainThisCodeClient

If you need more control over API calls, you can use the `ExplainThisCodeClient` directly:

```javascript
import { ExplainThisCodeClient } from "explainthiscode";

const client = new ExplainThisCodeClient({
  baseUrl: "http://your-api-base-url",
  timeout: 10000, // optional, defaults to 5000ms
});

client
  .get("/some-endpoint", { param1: "value1" })
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

### useApiData Hook

For custom React components, you can use the `useApiData` hook:

```jsx
import React from "react";
import { useApiData } from "explainthiscode";

const CustomComponent = ({ processId }) => {
  const { data, loading, error } = useApiData(
    "/custom-endpoint",
    processId,
    "get",
    { customParam: "value" }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default CustomComponent;
```

## Configuration

The module uses a base URL for API calls. By default, it's set to `http://localhost:4000/v1`. You can change this by modifying the `API_BASE_URL` in `src/config.js`.

## API Reference

### ExplainThisCodeClient

- `constructor(config)`: Creates a new client instance

  - `config.baseUrl`: Base URL for API calls
  - `config.timeout`: Timeout for requests in milliseconds

- `get(path, params)`: Performs a GET request
- `post(path, data)`: Performs a POST request
- `put(path, data)`: Performs a PUT request
- `delete(path, data)`: Performs a DELETE request

### useApiData Hook

`useApiData(endpoint, processId, method, params)`

- `endpoint`: API endpoint to call
- `processId`: Process ID for the API call
- `method`: HTTP method (default: 'get')
- `params`: Additional parameters for the API call

Returns an object with `{ data, loading, error }`.

## Module Structure

```
explainthiscode/
├── src/
│   ├── components/
│   │   └── explainthiscode-ui.jsx
│   ├── hooks/
│   │   └── use-api-data.js
│   ├── services/
│   │   └── api-service.js
│   ├── utils/
│   │   └── constants.js
│   ├── config.js
│   └── index.js
└── README.md
```

## Key Files

- `src/services/api-service.js`: Contains the `ExplainThisCodeClient` class for making API requests.
- `src/hooks/use-api-data.js`: Provides the `useApiData` hook for fetching data in React components.
- `src/components/explainthiscode-ui.jsx`: Implements the `ExplainThisCodeUI` React component.
- `src/config.js`: Defines configuration constants like `API_BASE_URL`.
- `src/utils/constants.js`: Defines additional constants used throughout the module.
- `src/index.js`: Main entry point, exporting the public API of the module.

## How to Use This Module in Your Project

1. Install the module in your project:

   ```bash
   npm install explainthiscode
   ```

2. Import the necessary components or functions in your React component:

   ```jsx
   import {
     ExplainThisCodeUI,
     ExplainThisCodeClient,
     useApiData,
   } from "explainthiscode";
   ```

3. Use the `ExplainThisCodeUI` component in your JSX:

   ```jsx
   <ExplainThisCodeUI processId="your-process-id" />
   ```

4. If you need to make custom API calls, use the `ExplainThisCodeClient`:

   ```javascript
   const client = new ExplainThisCodeClient({ baseUrl: "your-api-base-url" });
   client
     .get("/your-endpoint", { param: "value" })
     .then((response) => console.log(response))
     .catch((error) => console.error(error));
   ```

5. For custom data fetching in functional components, use the `useApiData` hook:
   ```jsx
   const { data, loading, error } = useApiData(
     "/your-endpoint",
     "your-process-id"
   );
   ```

Remember to replace 'your-process-id', 'your-api-base-url', and '/your-endpoint' with your actual values.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
