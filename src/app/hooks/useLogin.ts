import React, { useCallback } from 'react'
import { signIn } from "next-auth/react";
import { SiginInFormData } from "@/app/features/auth/sigin_in/SiginInForm";
import { useRouter, useSearchParams } from 'next/navigation';


const useLogin = () => {
  const searchParams = useSearchParams()
  return useCallback(async (data: SiginInFormData) => {
    const callbackUrl = searchParams.get('callbackUrl') ?? '/menu'
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (result?.error) {
      return { success: false, error: result.error, callbackUrl: null };
    }
    return { success: true, user: result , callbackUrl: callbackUrl };
  }, [])
}

export default useLogin

