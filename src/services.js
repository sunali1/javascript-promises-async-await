export const fetchWithTimeout = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));