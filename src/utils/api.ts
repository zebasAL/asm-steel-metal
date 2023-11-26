export async function serverFetch(url: string, options = {}) {
  const currentDomain = process.env.NEXT_PUBLIC_BASE_URL;

  const apiUrl = new URL(url, currentDomain);
  const response = await fetch(apiUrl.href, options);

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  const data = await response.json();
  return data;
}