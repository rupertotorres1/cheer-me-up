const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'production server goes here'
    : 'http://localhost:5000/api/v1/';

const fetchApi = (route: string, options: any) => {
  return fetch(API_URL + route, { ...options, credentials: 'include' });
};

export const apiPost = (route: string, body: any) => {
  return fetchApi(route, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
};

export const apiPut = (route: string, body: any) => {
  return fetchApi(route, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
};

export const apiGet = (route: string) => {
  return fetchApi(route, { method: 'GET' });
};

export const apiDelete = (route: string) => {
  return fetchApi(route, { method: 'DELETE' });
};
