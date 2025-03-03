import { API_BASE_URL, API_VERSION } from '../config';

class StepsClient {
  async create(processId, values) {
    try {
      const response = await fetch(`${API_BASE_URL}/${API_VERSION}/steps/${processId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          order_number: values.orderNumber,
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

  async delete(processId, stepId) {
    try {
      const response = await fetch(`${API_BASE_URL}/${API_VERSION}/steps/${processId}/${stepId}`, {
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

  async update(processId, stepId, values) {
    try {
      const response = await fetch(`${API_BASE_URL}/${API_VERSION}/steps/${processId}/${stepId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          order_number: values.orderNumber,
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
}

export const stepsClient = new StepsClient();
