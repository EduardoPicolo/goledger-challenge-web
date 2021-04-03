import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { deleteAsset } from '../../../services/assetsServices';
import Modal from '../../Modal/Modal.component';
import Spinner from '../../Spinner/Spinner.component';
import toast from '../../Toast/Toast.component';

const DeleteAssetModal = ({
  isOpen, asset, onClose,
}) => {
  const [isDeletingAsset, setIsDeletingAsset] = useState(false);
  const router = useRouter();

  const deleteAssetAction = () => {
    setIsDeletingAsset(true);
    deleteAsset(asset['@assetType'], asset['@key'])
      .then(() => {
        toast({ type: 'success', message: 'Product removed!' });
        router.push('/');
      })
      .catch((error) => toast({
        type: 'error',
        message: `An erro has occurred. ${error}`,
      }))
      .finally(() => setIsDeletingAsset(false));
  };

  return (
    <Modal
      hidden={!isOpen}
      title={`Delete ${asset?.name}`}
      confirmMessage="Delete"
      disabled={isDeletingAsset}
      dangerAction
      closeMessage="Cancel"
      onClose={() => {
        if (!isDeletingAsset) onClose();
      }}
      onConfirm={() => {
        deleteAssetAction();
      }}
    >
      <p>
        Are you sure you want to DELETE
        {' '}
        {asset?.name}
        {' '}
        ?
      </p>
      <p>This action can not be undone!</p>
      {isDeletingAsset && <Spinner />}
    </Modal>
  );
};

export default DeleteAssetModal;
