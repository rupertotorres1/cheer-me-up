const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'production server goes here'
    : 'http://localhost:5000/api/v1/';

export const apiPost = (route: string, body: any) => {
  return fetch(API_URL + route, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
};

export const apiPut = (route: string, body: any) => {
  return fetch(API_URL + route, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
};

export const apiGet = (route: string) => {
  return fetch(API_URL + route, { method: 'GET' });
};

export const apiDelete = (route: string) => {
  return fetch(API_URL + route, { method: 'DELETE' });
};
