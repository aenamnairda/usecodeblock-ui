import React from "react";
import { useProcessData } from "../hooks/use-api-data";

export const ExplainThisCodeUI = ({ processId }) => {
  const { data, loading, error } = useProcessData(processId);

  if (!processId) {
    return <div>Please provide a process ID</div>;
  }

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          Process ID: {processId} Data: {JSON.stringify(data)}
        </div>
      )}
    </div>
  );
};
