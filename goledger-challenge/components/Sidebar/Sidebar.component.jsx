import React from 'react';
import { useRouter } from 'next/router';
import { SidebarContainer, SidebarNavItem } from './Sidebar.styles';

const Sidebar = () => {
  const router = useRouter();

  return (
    <SidebarContainer>
      <SidebarNavItem
        active={router.query.assetType === 'products'}
        onClick={() => router.push('/?assetType=products', undefined, { shallow: true })}
      >
        Products
      </SidebarNavItem>
      <SidebarNavItem
        active={router.query.assetType === 'categories'}
        onClick={() => router.push('/?assetType=categories', undefined, { shallow: true })}
      >
        Categories
      </SidebarNavItem>
      <SidebarNavItem
        active={router.query.assetType === 'sellers'}
        onClick={() => router.push('/?assetType=sellers', undefined, { shallow: true })}
      >
        Sellers
      </SidebarNavItem>
    </SidebarContainer>
  );
};

export default Sidebar;
