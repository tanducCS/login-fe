"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Eye,
  EyeSlash,
  LockSimple,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { LoginSchema } from "@/interfaces/user/auth";
import { useLogin } from "@/services/auth";

export default function LoginForm() {
  const { login, isPending, error } = useLogin() as {
    login: (data: z.infer<typeof LoginSchema>) => Promise<void>;
    isPending: boolean;
    error: any;
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      await login(data);
    } catch (error) {
      console.log("in try catch");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex flex-col items-center gap-12">
        <Image
          className="mt-16"
          alt="Logo"
          src={"/images/auth/logo.svg"}
          width={100}
          height={100}
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 w-full"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <User
                          size={26}
                          weight="thin"
                          className="text-primary-main"
                        />
                      </div>
                      <Input
                        required
                        placeholder="Email"
                        {...field}
                        className="ps-14 rounded-lg focus:ring-2 focus:ring-blue-800"
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              rules={{ required: "Username is require" }}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <LockSimple
                          size={26}
                          weight="thin"
                          className="text-primary-main "
                        />
                      </div>
                      <Input
                        {...field}
                        placeholder="Password"
                        required
                        type={showPassword ? "text" : "password"}
                        className="ps-14 rounded-lg focus:ring-2 focus:ring-blue-800"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute inset-y-0 end-3 top-1 flex items-center "
                        onClick={handleClickShowPassword}
                      >
                        {field.value !== ''  ? (showPassword ? (
                          <EyeSlash size={26} />
                        ) : (
                          <Eye size={26} />
                        )): <></>}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <div className="flex gap-5 mt">
            <Checkbox id="save-password" className="border-primary-main data-[state=checked]:bg-primary-main"/>
            <label
              htmlFor="save-password"
              className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary-main hover:cursor-pointer"
            >
              Save password
            </label>
            </div> */}
            <Button
              type="submit"
              variant="outline"
              className="bg-primary-main text-white hover:bg-blue-700 hover:text-white"
            >
              LOGIN
            </Button>
            <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-end italic text-primary-main hover:opacity-70"
            >
              Forgot Password?
            </Link>
            </div>
          </form>
        </Form>
        {/* 
          <Button variant="outlined" sx={{backgroundColor: '#264eca !important', color:'white' }}>Login</Button>
           */}
      </div>
    </div>
  );
}
