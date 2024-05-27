"use server";
import { ACCESS_TOKEN, FULLNAME, ROLE, cookie_config } from "@/constants/cookie";
import { LoginResponse, OtpAuthenResponse } from "@/interfaces/general/fetch_response";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const set_cookies = async (
  res: LoginResponse,
  response?: NextResponse
) => {
  if (response) {
    response.cookies.set(ACCESS_TOKEN, res.access_token, {
      ...cookie_config,
    });

    response;
  } else {
    cookies().set(ACCESS_TOKEN, res.access_token, {
      ...cookie_config,
    });
    cookies().set(FULLNAME, res.fullname, {
      ...cookie_config,
    });
    cookies().set(ROLE, res.role, {
      ...cookie_config,
    });
  }
  return res;
};

export const set_cookies_otp = async (
  res: OtpAuthenResponse,
  response?: NextResponse
) => {
  if (response) {
    response.cookies.set(ACCESS_TOKEN, res.data, {
      ...cookie_config,
    });

    response;
  } else {
    cookies().set(ACCESS_TOKEN, res.data, {
      ...cookie_config,
    });
  }
  return res;
};

export const delete_cookie = async () => {
    cookies().delete(ACCESS_TOKEN)
    cookies().delete(ROLE)
    cookies().delete(FULLNAME)
    
}
