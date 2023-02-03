const accessTokenKey = process.env.VUE_APP_ACCESS_TOKEN;

export const setToken = (token) => {
  localStorage.setItem(accessTokenKey, token);
};

export const getToken = () => localStorage.getItem(accessTokenKey);

export const clearToken = () => {
  localStorage.removeItem(accessTokenKey);
};
