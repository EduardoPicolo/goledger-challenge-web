import React from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../../Modal/Modal.component';
import Input from '../../FormFields/Input/Input.component';
import Spinner from '../../Spinner/Spinner.component';
import toast from '../../Toast/Toast.component';
import { updateAsset } from '../../../services/assetsServices';

const EditSellerModal = ({
  isOpen, seller, mutate, onClose,
}) => {
  const {
    handleSubmit, register, errors, formState, reset,
  } = useForm();

  const editSeller = handleSubmit(async (formData) => {
    let payload = {};
    Object.keys(formState.dirtyFields).forEach((field) => {
      payload[field] = formData[field];
    });
    payload = { ...payload, '@key': seller['@key'], '@assetType': 'seller' };
    if (formState.dirtyFields.soldBy) {
      payload.soldBy = {
        cnpj: formData.soldBy,
      };
    }

    try {
      const res = await updateAsset(payload);
      toast({
        type: 'success',
        message: `${res?.name} was successfully updated!`,
      });
      await mutate({ ...seller, ...res });
      reset();
      onClose();
    } catch (error) {
      toast({ type: 'error', message: `An erro has occurred. ${error}` });
      // console.error(error);
    }
  });

  return (
    <Modal
      hidden={!isOpen}
      title={`Edit ${seller?.name}`}
      confirmMessage="Confirm"
      confirmType="submit"
      disabled={formState.isSubmitting || !formState.isDirty}
      closeMessage="Cancel"
      onClose={() => {
        onClose();
      }}
      onConfirm={() => {
        editSeller();
      }}
    >
      <form>
        <Input
          type="text"
          label="Name"
          name="name"
          defaultValue={seller?.name}
          placeholder="XYZ"
          register={register({
            required: 'Campo obrigatório',
          })}
          errors={errors}
          autoComplete="off"
        />

        <Input
          type="text"
          label="Address"
          name="Address"
          defaultValue={seller?.address}
          placeholder=""
          register={register({
            required: 'Campo obrigatório',
          })}
          errors={errors}
          autoComplete="off"
        />
      </form>
      {formState.isSubmitting && <Spinner />}
    </Modal>
  );
};

export default EditSellerModal;
