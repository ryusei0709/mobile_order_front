import React from 'react';

import MenuList from '@/app/features/menu/MenuList';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

const MenuRootPage = async () => {
  const session = await getServerSession(authOptions);
  console.log('session::', session)
  return <MenuList />;
};

export default MenuRootPage;
