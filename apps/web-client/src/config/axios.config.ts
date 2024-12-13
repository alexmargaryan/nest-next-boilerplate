import axios, { AxiosRequestConfig } from "axios";

export const baseURL = "http://localhost:5000";

const axios_instance = axios.create({
  baseURL,
});

export const axiosInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = axios.CancelToken.source();
  const promise = axios_instance({ ...config, cancelToken: source.token }).then(
    ({ data }) => data
  );

  return promise;
};
