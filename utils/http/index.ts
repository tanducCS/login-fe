import { ACCESS_TOKEN } from "@/constants/cookie";
import { getCookie } from "../cookie/getCookie";

export const getRequestURL = (url: string) => {
  if (!url.startsWith("/")) {
    url = `/${url}`;
  }
  return `${process.env.API_URL}${url}`;
};

const httpRequest = async <TEntity>(
  url: string,
  method: string,
  data: TEntity,
  options: RequestInit = {},
  isNeedAuth = false
) => {
  let request_body = data;
  if (!options.headers && method !== "GET") {
    options.headers = {
      "Content-Type": "application/json",
    };
    request_body = JSON.stringify(data) as any;
  }
  
  options.headers = {
    Accept: "application/json",
    ...options.headers,
    ...(isNeedAuth &&
      getCookie(ACCESS_TOKEN) && {
        Authorization: `Bearer ${getCookie(ACCESS_TOKEN)}`,
      }),
  };
  
  const requestOptions: RequestInit = {
    method,
    ...(method !== "GET" && { cache: "no-store" }),
    //credentials: "include", must be removed if we want to cache the response
    body: request_body as any,
    ...options,
  };
  const res = await fetch(getRequestURL(url), requestOptions);
  
  if (!res.ok) {
    if (res.status >= 500) throw new Error("Error occured when calling API");
    const body = await res.json();
    console.log(body)
    throw new Error(body.detail);
  }
  
  const body = await res.json();
  return body;
};

export const http = {
  get: (url: string, options?: RequestInit, isNeedAuth: boolean = false) =>
    httpRequest(url, "GET", undefined, options, isNeedAuth),
  post: <TEntity>(
    url: string,
    data: TEntity,
    options?: RequestInit,
    isNeedAuth: boolean = false
  ) => httpRequest(url, "POST", data, options, isNeedAuth),
  put: <TEntity>(
    url: string,
    data: TEntity,
    options?: RequestInit,
    isNeedAuth: boolean = false
  ) => httpRequest(url, "PUT", data, options, isNeedAuth),
  delete: (url: string, options?: RequestInit, isNeedAuth: boolean = false) =>
    httpRequest(url, "DELETE", undefined, options, isNeedAuth),
  patch: <TEntity>(
    url: string,
    data: TEntity,
    options?: RequestInit,
    isNeedAuth: boolean = false
  ) => httpRequest(url, "PATCH", data, options, isNeedAuth),
};
