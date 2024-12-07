class CodeSnippetsClient {
  constructor() {
    this.cache = new Map();
    this.pendingRequests = new Map();
  }

  async get(processId, stepId) {
    const cacheKey = `${processId}-${stepId}`;

    // Check cache first
    if (this.cache.has(cacheKey)) {
      return { data: this.cache.get(cacheKey), error: null };
    }

    // Check if there's already a request in flight
    if (this.pendingRequests.has(cacheKey)) {
      return this.pendingRequests.get(cacheKey);
    }

    // Create the promise for this request
    const requestPromise = (async () => {
      try {
        const response = await fetch(`http://localhost:4000/v1/code_snippets/${processId}/${stepId}`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` },
        });

        if (!response.ok) {
          const error = await response.json();
          return { data: null, error };
        }

        const data = await response.json();
        this.cache.set(cacheKey, data);
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      } finally {
        // Clean up pending request
        this.pendingRequests.delete(cacheKey);
      }
    })();

    // Store the pending request
    this.pendingRequests.set(cacheKey, requestPromise);
    return requestPromise;
  }

  clearCache() {
    this.cache.clear();
    this.pendingRequests.clear();
  }

  clearCacheEntry(processId, stepId) {
    const cacheKey = `${processId}-${stepId}`;
    this.cache.delete(cacheKey);
    this.pendingRequests.delete(cacheKey);
  }

  async create(processId, stepId, values) {
    return fetch(`http://localhost:4000/v1/code_snippets/${processId}/${stepId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: values.code,
        file_name: values.fileName,
        language_id: values.languageId,
      }),
    });
  }

  async delete(processId, stepId, codeSnippetId) {
    try {
      const response = await fetch(`http://localhost:4000/v1/code_snippets/${processId}/${stepId}/${codeSnippetId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` },
      });

      if (!response.ok) {
        const error = await response.json();
        return error;
      }
    } catch (error) {
      return error;
    }
  }
}

export const codeSnippetsClient = new CodeSnippetsClient();
