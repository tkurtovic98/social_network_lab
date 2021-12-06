export const handleResult = (result) => {
  if (result.status === 200) return result.data;
  else return result.statusText;
};
