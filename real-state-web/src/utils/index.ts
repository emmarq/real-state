export const setParam = (
  params: URLSearchParams,
  name: string,
  value?: string,
) => {
  if (value) params.set(name, value);
  else params.delete(name);
};
