import { useEffect, useState } from "react";
import { getProcess } from "../services/api-service";

export const useProcessData = (processId, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!processId) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const response = await getProcess(processId, params);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [processId, JSON.stringify(params)]);

  return { data, loading, error };
};
