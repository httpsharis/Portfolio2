/**
 * Generic API helper for fetching data.
 * Base URL is assumed to be relative '/api' since we will proxy in vite.config or deploy on same origin.
 */
const BASE_URL = 'http://localhost:5000/api'; // For local dev, explicit URL often helps avoid proxy issues if not set up

export const api = {
    get: async (endpoint) => {
        const res = await fetch(`${BASE_URL}${endpoint}`);
        if (!res.ok) throw new Error(`API Get Error: ${res.statusText}`);
        return await res.json();
    },
    post: async (endpoint, data) => {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error(`API Post Error: ${res.statusText}`);
        return await res.json();
    },
    put: async (endpoint, data) => {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error(`API Put Error: ${res.statusText}`);
        return await res.json();
    },
    delete: async (endpoint) => {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'DELETE'
        });
        if (!res.ok) throw new Error(`API Delete Error: ${res.statusText}`);
        return await res.json();
    }
};
