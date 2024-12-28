import React, { useCallback } from 'react'
import { signIn } from "next-auth/react";
import { SiginInFormData } from "@/app/features/auth/sigin_in/SiginInForm";
import { useRouter, useSearchParams } from 'next/navigation';


const useLogin = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  return useCallback(async (data: SiginInFormData) => {
    const callbackUrl = searchParams.get('callback_url') ?? '/menu'
    console.log(callbackUrl)
    const result = await signIn("credentials", {
      redirect: false, // リダイレクトを無効化
      email: data.email,
      password: data.password,
    });
    if (result?.error) {
      return { success: false, error: result.error };
    }

    router.push(callbackUrl)

    return { success: true, user: result };
  }, [])

}

export default useLogin

