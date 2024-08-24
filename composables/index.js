export default async function useFetch(url) {
  const data = (null);
  const error = (null);
  const loading = (true);

  try {
    let res = await fetch(url);
    if (!res.ok) {
      throw Error("Data not available");
    }
    data = JSON.parse(JSON.stringify(res));
  } catch (err) {
    error = err.message;
  } finally {
    loading = false;
  }

  return { data, error, loading };
}
