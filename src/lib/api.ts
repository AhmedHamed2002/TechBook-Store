const API_BASE = process.env.NEXT_PUBLIC_BASE_URL;

async function handleResponse(res: Response) {
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`API error: ${res.status} - ${error}`);
  }
  return res.json();
}

export const getNewBooks = async () => {
  const res = await fetch(`${API_BASE}/new`, { cache: "no-store" });
  return handleResponse(res);
};

export const searchBooks = async (query: string) => {
  const res = await fetch(`${API_BASE}/search/${encodeURIComponent(query)}`, { cache: "no-store" });
  return handleResponse(res);
};

export const getBookDetails = async (id: string) => {
  const res = await fetch(`${API_BASE}/books/${id}`, { cache: "no-store" });
  return handleResponse(res);
};
