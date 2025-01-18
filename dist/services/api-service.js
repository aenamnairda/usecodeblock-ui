const API_BASE_URL = "http://localhost:4000";
const API_VERSION = "v1";
class ExplainThisCodeClient {
  constructor(config) {
    if (!(this instanceof ExplainThisCodeClient)) {
      return new ExplainThisCodeClient(config);
    }
    this.baseUrl = API_BASE_URL;
    this.apiVersion = API_VERSION;
    this.timeout = config.timeout || 5000;
  }
  async request(method, path) {
    let data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const url = new URL(`${this.apiVersion}${path}`, this.baseUrl);
    if (method === "GET" && data) {
      Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    }
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    };
    if (data && method !== "GET") {
      options.body = JSON.stringify(data);
    }
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message || "An error occurred during the request");
    }
  }
  async get(path) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.request("GET", path, params);
  }
  async post(path) {
    let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.request("POST", path, data);
  }
  async put(path) {
    let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.request("PUT", path, data);
  }
  async delete(path) {
    let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.request("DELETE", path, data);
  }
}
const apiClient = new ExplainThisCodeClient({
  timeout: 10000
});
export { apiClient, ExplainThisCodeClient };
export const getProcess = function (processId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return apiClient.get(`/processes/${processId}`, params);
};
export const getCodeSnippets = function (processId, stepId) {
  let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return apiClient.get(`/code_snippets/${processId}/${stepId}`, params);
};