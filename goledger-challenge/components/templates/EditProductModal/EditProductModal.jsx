import React from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../../Modal/Modal.component';
import Input from '../../FormFields/Input/Input.component';
import Select from '../../FormFields/Select/Select.component';
import Spinner from '../../Spinner/Spinner.component';
import toast from '../../Toast/Toast.component';
import { updateAsset } from '../../../services/assetsServices';

const EditProductModal = ({
  isOpen, product, sellers, categories, mutate, onClose,
}) => {
  const {
    handleSubmit, register, errors, formState, setValue, reset,
  } = useForm();

  const editProduct = handleSubmit(async (formData) => {
    let payload = {};
    Object.keys(formState.dirtyFields).forEach((field) => {
      payload[field] = formData[field];
    });
    payload = { ...payload, '@key': product['@key'], '@assetType': 'product' };
    if (formState.dirtyFields.soldBy) {
      payload.soldBy = {
        cnpj: formData.soldBy,
      };
    }
    if (formState.dirtyFields.categories) {
      payload.categories = [{
        name: formData.categories,
      }];
    }

    try {
      const res = await updateAsset(payload);
      toast({
        type: 'success',
        message: `${res?.name} was successfully updated!`,
      });
      const updatedProduct = await mutate({ ...product, ...res });
      reset();
      onClose();
      setValue('soldBy', updatedProduct.soldBy.cnpj);
    } catch (error) {
      toast({ type: 'error', message: `An erro has occurred. ${error}` });
      // console.error(error);
    }
  });

  return (
    <Modal
      hidden={!isOpen}
      title={`Edit ${product?.name}`}
      confirmMessage="Confirm"
      confirmType="submit"
      disabled={formState.isSubmitting || !formState.isDirty}
      closeMessage="Cancel"
      onClose={() => {
        onClose();
      }}
      onConfirm={() => {
        editProduct();
      }}
    >
      <form>
        <Input
          type="text"
          label="product name"
          name="name"
          defaultValue={product?.name}
          placeholder="XYZ"
          register={register({
            required: 'Campo obrigatório',
          })}
          errors={errors}
          autoComplete="off"
        />

        <Input
          type="number"
          label="price"
          name="price"
          defaultValue={product?.price}
          placeholder="$ 00,00"
          register={register({
            required: 'Campo obrigatório',
          })}
          errors={errors}
          autoComplete="off"
        />

        <Select
          label="Sold by"
          name="soldBy"
          defaultValue={product?.soldBy.cnpj}
          register={register({
            required: 'Campo obrigatório',
          })}
          errors={errors}
        >
          {sellers
            && sellers.map((seller) => (
              <option value={seller.cnpj} key={seller['@key']}>
                {seller.name}
              </option>
            ))}
        </Select>
        <Select
          label="Categories"
          name="categories"
          defaultValue={(product?.categories && product?.categories[0].name) || 'Category'}
          placeholder="Category"
          register={register({
            required: 'Campo obrigatório',
          })}
          errors={errors}
        >
          {categories
              && categories.map((category) => (
                <option value={category.name} key={category['@key']}>
                  {category.name}
                </option>
              ))}
        </Select>
      </form>
      {formState.isSubmitting && <Spinner />}
    </Modal>
  );
};

export default EditProductModal;
