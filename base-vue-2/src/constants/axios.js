const BASE_URL = process.env.VUE_APP_BASE_URL;

const TIMEOUT = 10000;

const STATUS_CODE_MESSAGES = {
  200: "Status code 200",
  201: "Status code 201",
  202: "Status code 202",
  204: "Status code 204",
  400: "Status code 400",
  401: "Status code 401",
  403: "Status code 403",
  404: "Status code 404",
  406: "Status code 406",
  410: "Status code 410",
  422: "Status code 422",
  500: "Status code 500",
  502: "Status code 502",
  503: "Status code 503",
  504: "Status code 504",
};

const AXIOS_CONFIG = {
  BASE_URL,
  TIMEOUT,
  STATUS_CODE_MESSAGES,
};

export default AXIOS_CONFIG;
