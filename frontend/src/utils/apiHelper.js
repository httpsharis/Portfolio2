/**
 * Generic API helper for fetching data.
 * Automates the URL selection based on environment.
 * Development: http://localhost:5000/api
 * Production: /api (Relative path handled by Vercel)
 */
const BASE_URL = import.meta.env.MODE === 'development'
    ? 'http://localhost:5000/api'
    : '/api';

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
