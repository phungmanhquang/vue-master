import AXIOS_CONFIG from "@/constants/axios";

const handlerResponse = (response, isSuccess = true) => {
  const code = response.status;
  const message =
    AXIOS_CONFIG.STATUS_CODE_MESSAGES[code] || response.message || "";

  return {
    message,
    code,
    data: response.data,
    success: isSuccess,
  };
};

export const handlerSuccess = (response) => {
  return handlerResponse(response);
};

export const handlerError = (error) => {
  return handlerResponse(error.response, false);
};
