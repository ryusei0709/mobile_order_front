import { signIn } from "next-auth/react";
import { SiginInFormData } from "@/app/features/auth/sigin_in/SiginInForm";

export const siginIn = async (data: SiginInFormData) => {

  // const result = await signIn("credentials", {
  //   redirect: false, // リダイレクトを無効化
  //   email: data.email,
  //   password: data.password,
  //   callbackUrl: "/menu", // 認証成功後のリダイレクト先
  // });

  // console.log('result::',result)

  // if (result?.error) {
  //   return { success: false, error: result.error };
  // }

  // return { success: true, user: result };
};
