import type { NextAuthOptions } from "next-auth"
import { Token, User } from "@/app/types/type";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "メールアドレス", type: "email", placeholder: "メールアドレス" },
        password: { label: "パスワード", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await fetch("http://localhost:3001/api/v1/auth/sign_in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        const response = await user.json();

        if (!response.user) {
         throw new Error(...response.errors);
        }
        // 認証成功時はユーザー情報を返す
        return {
          id: response.user.id,
          email: response.user.email,
          name: response.user.name,
        };
      }
    })
  ],
  secret: process.env.MOBILE_ORDER_NEXTAUTH_SECRET,
  callbacks: {
    // JWTにトークンを保存
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as unknown as User; // 明示的なキャスト

        token.id = customUser.id;
        token.name = customUser.name;
        // 他のプロパティを必要に応じて設定
        token.token = customUser.token?.token;
        token.client = customUser.token?.client;
        token.expiry = customUser.token?.expiry;
      }
      return token;
    },

    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log('user::',user)
    //   console.log('account::',account)
    //   console.log('profile::',profile)
    //   console.log('email::',email)
    //   console.log('credentials::',credentials)
    //   if (user) {
    //     return true
    //   } else {
    //     // Return false to display a default error message
    //     console.error("認証に失敗しました");
    //     return false; // 認証失敗でリダイレクトを防ぐ
    //     // Or you can return a URL to redirect to:
    //     // return '/unauthorized'
    //   }
    // },

    // セッションオブジェクトにトークン情報を追加
    async session({ session , token }) {
      session.user.id = token.id as number;
      session.user.email = token.email as string;
      session.user.token = token.token as string;
      session.user.client = token.client as string;
      session.user.expiry = token.expiry as string;
      return session;
    },
  },
  pages: {
    signIn: '/sigin_in',
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
