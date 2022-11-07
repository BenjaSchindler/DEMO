import Cookies from 'js-cookie';

export const getCookie = (key: string) => {
  return Cookies.get(key);
};

export const setCookie = (key: string, value: string, domain?: string) => {
  const cookieDomain = domain ?? getDomain();
  return Cookies.set(key, value, { domain: cookieDomain });
};

export const clearSessionStorage = () => {
  const cookies = ['token'];
  cookies.forEach((cookie) => {
    Cookies.remove(cookie, { domain: getDomain() });
  });
};

const getDomain = () => {
  const url = window.location.href;
  const [domain] = url.replace(/[https*://]*/, '').split(':');
  const cookieDomain = domain.substring(domain.indexOf('.') + 1).replace(/\/[^/]+$/g, '');
  return cookieDomain;
};