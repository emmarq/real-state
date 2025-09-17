export const setParam = (
  params: URLSearchParams,
  name: string,
  value?: string,
) => {
  if (value) params.set(name, value);
  else params.delete(name);
};

export const parseNumber = (value?: string | null) => {
  const parsed = parseInt(value || "");
  if (isNaN(parsed)) return undefined;
  return parsed;
};
