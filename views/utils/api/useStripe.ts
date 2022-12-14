import { HTTP, PathParams } from "../http";
import Endpoints from "./endpoints";

export type RequestResult = {
  status: number;
  statusText: string;
  url: string;
  headers: Headers;
  data?: any;
};

export class RequestError extends Error {
  result: RequestResult;
  constructor(result: RequestResult, message?: string) {
    super(message);
    this.result = result;
    this.message = message || result.statusText;
  }
};

const parseResponse = async (response: Response) => {
  const { status, statusText, headers, url } = response;
  const result: RequestResult = { status, statusText, headers, url };
  try {
    const responseJson = await response.json();
    result.data = responseJson;
  } catch (e) { }
  if (response.status >= 400 && response.status < 600) {
    throw new RequestError(result, result.data?.error?.message);
  }

  return result;
};

export default () => {
  const apiPrefix = "https://api.stripe.com/v1";
  if (!apiPrefix) throw Error("No API host provided");
  const http = new HTTP(apiPrefix, Endpoints);
  const token = null;
  const defaultOptions = token ? {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  } : {};
  const executor = (url: string) => ({
    get: async (options: any = {}) => await http.get({ url, ...defaultOptions, ...options }).then(parseResponse),
    post: async (options: any = {}) => await http.post({ url, ...defaultOptions, ...options }).then(parseResponse),
    del: async (options: any = {}) => await http.del({ url, ...defaultOptions, ...options }).then(parseResponse),
    multipost: async (options: any = {}) => await http.multi_post({ url, ...defaultOptions, ...options }).then(parseResponse),
  });
  return {
    path: (path: keyof typeof Endpoints, routeParams?: PathParams, queryParams?: PathParams) => {
      const url = http.path(path, routeParams, queryParams);
      console.log("api", url);
      return executor(url);
    },
  };
};