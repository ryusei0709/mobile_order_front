import React from 'react';

import MenuDetailContainer from '@/app/features/menuDetail/MenuDetailContainer';

const MeunDetailPage = async ({
  params,
}: {
  params: Promise<{ menuId: string }>;
}) => {
  const menuId = (await params).menuId;

  return (
    <>
      <MenuDetailContainer menuId={menuId} />
    </>
  );
};

export default MeunDetailPage;
