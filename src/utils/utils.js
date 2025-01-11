export function resolvePath(path) {
  return `${import.meta.env.VITE_APP_BASE_URL}${path}`;
}
