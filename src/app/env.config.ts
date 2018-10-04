const _isDev = window.location.port.indexOf('4200') > -1;
const getHost = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};

const apiURI = _isDev ? 'http://localhost:1332/v1/' : `https://api.revereresearch.co.uk/v1/`;
const serverURI = _isDev ? 'http://localhost:1332/' : `https://api.revereresearch.co.uk/`;

export const ENV = {
  BASE_URI: getHost(),
  BASE_API: apiURI,
  AUTHOR: 'Anusha',
  SERVER_URL:serverURI
}