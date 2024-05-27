export interface IResponse<T> {
  data: T; // response data
  status: number; // http status code
  detail?: string; // error message
  metadata?: any; // additional data
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  token_key: string;
  fullname: string;
  role: string;
}

