const env = import.meta.env;

export const config = {
  apiBaseHost: env.VITE_APP_API_BASE_HOST,
  apiBaseUrl: `https://${env.VITE_APP_API_BASE_HOST}`,
  apiKey: env.VITE_APP_API_KEY,
};