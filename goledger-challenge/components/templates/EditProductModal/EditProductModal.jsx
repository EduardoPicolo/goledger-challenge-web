import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../../Modal/Modal.component';
import Input from '../../FormFields/Input/Input.component';
import Select from '../../FormFields/Select/Select.component';
import Spinner from '../../Spinner/Spinner.component';
import toast from '../../Toast/Toast.component';

const EditProductModal = ({ isOpen, product, sellers, mutate, onClose }) => {
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const { handleSubmit, register, errors, formState, reset } = useForm();

  const editProduct = handleSubmit(async (formData) => {
    setIsEditingProduct(true);
    // const payload = {
    //   ...formData,
    //   '@assetType': 'product',
    //   soldBy: {
    //     cnpj: formData.soldBy,
    //   },
    // };
    // createAsset(payload)
    //   .then((res) => {
    //     mutate({ ...products, result: [...products.result, ...res] });
    //     toast({
    //       type: 'success',
    //       message: `${res[0]?.name} was successfully added!`,
    //     });
    //   })
    //   .catch((error) => toast({ type: 'error', message: `An erro has occurred. ${error}` }))
    //   .finally(() => setIsAddingProduct(false));
    const soldBy = sellers.find((seller) => seller.cnpj === formData.soldBy);
    await mutate({ ...product, ...formData, soldBy });
    setIsEditingProduct(false);
  });

  return (
    <Modal
      hidden={!isOpen}
      title={`Edit ${product?.name}`}
      confirmMessage="Confirm"
      disabled={isEditingProduct}
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
          label="code"
          name="code"
          defaultValue={product?.code}
          placeholder="0000"
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
          register={register({
            required: 'Campo obrigatório',
          })}
          errors={errors}
        >
          {sellers &&
            sellers.map((seller) => (
              <option value={seller.cnpj} key={seller['@key']}>
                {seller.name}
              </option>
            ))}
        </Select>
      </form>
      {isEditingProduct && <Spinner />}
    </Modal>
  );
};

export default EditProductModal;
