import AXIOS_CONFIG from "@/constants/axios";
import { handlerError, handlerSuccess } from "@/utils/handlerResponse";
import { getToken } from "@/utils/localStorage";
import axios from "axios";

const service = axios.create({
  baseURL: AXIOS_CONFIG.BASE_URL,
  timeout: AXIOS_CONFIG.TIMEOUT,
  responseType: "json",
});

service.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = "Bearer " + token;

  return config;
});

service.interceptors.response.use(
  (response) => {
    return handlerSuccess(response);
  },
  (error) => {
    return handlerError(error);
  }
);

export default service;
