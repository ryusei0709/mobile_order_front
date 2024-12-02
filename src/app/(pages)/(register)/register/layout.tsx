
import * as React from 'react';
import RegisterHeader from '@/app/components/layout/register/header/Header';

export const metadata = {
  title: 'アカウント登録',
  description: 'アカウント登録のdescription',
}

export default function RegisterRootLayout({ children }: {
  children: React.ReactNode
}) {

  return (
    <>
      <RegisterHeader />
      <main>
        {children}
      </main>
    </>
  );
}




