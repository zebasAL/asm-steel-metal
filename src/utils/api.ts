import axios from "axios"

type ApiParams = {
  [key: string]: string | number;
};

export async function serverFetch(url: string, options = {}) {
  const currentDomain = process.env.VERCEL_URL;

  const apiUrl = new URL(url, currentDomain);
  const response = await fetch(apiUrl.href, options);

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  const data = await response.json();
  return data;
}

export const apiRoutes = {
  products: {
    getAll: async <T>(params?: ApiParams) => await axios.get<T>('/api/products/', { params })
  },
  email: {
    mailersend: {
      send: async <T>(data?: T) => await axios.post<T>('/api/emails/mailersend/', data)
    }
  },
  files: {
    getAll: async <T>(params?: ApiParams) => await axios.get<T>('/api/files/', { params }),
    getById: async <T>(id?: string) => await axios.get<T>(`/api/files/${id}`),
    create: async <T>(data: Buffer) => await axios.post<T>(`/api/files/`, data),
  }
}