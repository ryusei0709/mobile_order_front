import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/sigin_in',
  },
  secret: process.env.MOBILE_ORDER_NEXTAUTH_SECRET,
});

// 以下のリクエストから始まる、ルーティングはmmiddlewareの処理から除外する
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|img|register).*)',
  ],
};
