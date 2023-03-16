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
  if (error.stats === 401) {
    // thong bao loi "token het han"
    // chuyen qua login

    // ====
    // refresh token con han  => goi refresh token tiep tuc
    return;
  }
  return handlerResponse(error.response, false);
};
