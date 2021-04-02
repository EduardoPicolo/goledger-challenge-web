import React from 'react';
import { useRouter } from 'next/router';
import DirectoryContainer from './Directory.styles';

const Directory = () => {
  const router = useRouter();
  // console.log(router.pathname, router.query.assetType);

  return (
    <DirectoryContainer>
      {router.query.assetType === 'products' && <div>products</div>}
      {router.query.assetType === 'categories' && <div>category</div>}
      {router.query.assetType === 'sellers' && <div>sellers</div>}
    </DirectoryContainer>
  );
};

export default Directory;
