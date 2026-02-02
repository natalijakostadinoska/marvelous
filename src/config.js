// src/config.js
export const CONFIG = {
  API_URL: import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com',
  APP_STATUS: import.meta.env.VITE_APP_STATUS || 'Development',
};