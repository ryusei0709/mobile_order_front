import { signIn } from "next-auth/react";
import { SiginInFormData } from "@/app/features/auth/sigin_in/SiginInForm";

export const siginIn = async (data: SiginInFormData): Promise<any> => {
  console.log("data::", data);

  const result = await signIn("credentials", {
    // redirect: false, // リダイレクトを無効化
    email: data.email,
    password: data.password,
  });

  // 結果をログ出力
  console.log("Result::", result);

  // エラーがあれば処理
  if (result?.error) {
    console.error("Login error:", result.error);
    return { success: false, error: result.error };
  }

  return { success: true, user: result };
};
