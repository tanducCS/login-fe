"use server";

import { AUTH } from "@/constants/apis";

import {
  ForgotPasswordResponse,
  IResponse,
  LoginResponse,
  OtpAuthenResponse,
  ResetPasswordResponse,
} from "@/interfaces/general/fetch_response";
import {
  LoginSchema,
  forgotSchema,
  otpAuthenSchema,
  resetPasswordSchema,
} from "@/schemas/user";
import { set_cookies, set_cookies_otp } from "@/utils/cookie/setCookie";
import { http } from "@/utils/http";
import { z } from "zod";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const res = (await http.post(AUTH.LOGIN, new URLSearchParams(data), {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })) as LoginResponse;
  return await set_cookies(res);
};

export const forgotPassword = async (data: z.infer<typeof forgotSchema>) => {
  const email = encodeURIComponent(data.email);
  return (await http.post(
    `${AUTH.FORGOTPASS}?email=${email}`,
    undefined,
    undefined,
    false
  )) as ForgotPasswordResponse;
};


export const otpAuthen = async (data: z.infer<typeof otpAuthenSchema>) => {
  const res = (await http.post(
    `${AUTH.OTPAUTHEN}`,
    data,
    undefined,
    false
  )) as OtpAuthenResponse;
  return await set_cookies_otp(res)
};


export const resetPassword = async (
  data: z.infer<typeof resetPasswordSchema>
) => {
  const res = (await http.post(
    `${AUTH.RESETPASS}`,
    data,
    undefined,
    true
  )) as LoginResponse;
  return await set_cookies(res)
};