import NextAuth from "next-auth"
declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      email: string;
      token: string;
      client?: string;
      expiry?: string;
    };
  }
}
