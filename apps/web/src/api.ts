import { createHttpClient } from "@react-workshop/http-client";

export const api = createHttpClient({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10_000
});
