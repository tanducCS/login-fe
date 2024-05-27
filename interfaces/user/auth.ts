import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1,{message: "Username is required"}),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const forgotSchema = z.object({
  email: z.string().email({message: 'Email is requried'}),
});

export const resetPasswordSchema = z.object({
  new_password: z.string().min(1, {message: 'Password is requried'}),
  confirmed_password: z.string().min(1, {message: 'Confirm Password is requried'}),
});

export const otpAuthenSchema = z.object({
  received_otp: z.string().min(1, {message: 'Otp is requried'}),
});
