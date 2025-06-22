export const publicPath = (path: string) => {
  const baseUrl = process.env.EXPO_PUBLIC_MINI_SERVER;

  return `${baseUrl}/${path}` || path;
};
