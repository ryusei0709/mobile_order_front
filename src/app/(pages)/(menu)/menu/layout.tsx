import { Box } from '@mui/material';
import * as React from 'react';

import Header from '@/app/components/layout/common/header/Header';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function MenuRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
      <Header />
      <main>{children}</main>
    </Box>
  );
}
