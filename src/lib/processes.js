import { API_BASE_URL, API_VERSION } from '../config';

class ProcessesClient {
  async getAll() {
    try {
      const response = await fetch(`${API_BASE_URL}/${API_VERSION}/processes`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      });
      if (!response.ok) {
        const error = await response.json();
        return { data: null, error };
      }
      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  async create(values) {
    try {
      const response = await fetch(`${API_BASE_URL}/${API_VERSION}/processes`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        return error;
      }
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/${API_VERSION}/processes/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      });
      if (!response.ok) {
        const error = await response.json();
        return { data: null, error };
      }
      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }

  async delete(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/${API_VERSION}/processes/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
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

export const processesClient = new ProcessesClient();
