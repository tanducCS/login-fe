import { USER_KEY } from "@/constants/apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { forgotPassword, login, otpAuthen, resetPassword } from "./api";

export const useLogin = () => {
  // Must initialize queryClient from useQueryClient not use getQueryClient from server
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { error, isPending, mutate, reset } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // Set user to queryClient
      queryClient.setQueryData(USER_KEY, data);
      if (data.role === "admin") {
        router.replace("/add-user");
      } else {
        router.replace("/upload-cv-jd");
      }
      toast({
        title: "Đăng nhập thành công",
        description: "Friday, February 10, 2023 at 5:57 PM",
      });
    },
    onError: (err) => {
      toast({
        variant: "destructive",
        title: "Đăng nhập thất bại",
      });
    },
  });
  return { login: mutate, isPending, error };
};
