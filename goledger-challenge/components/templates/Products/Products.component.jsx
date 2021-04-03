import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import useRequest from '../../../hooks/useRequest';
import { createAsset, searchAsset } from '../../../services/assetsServices';
import { SEARCH_ASSET } from '../../../services/endpoints';
import { ProductsContainer } from './Products.styles';
import Button from '../../Button/Button.component';
import CardList from '../../CardList/CardList.component';
import Modal from '../../Modal/Modal.component';
import Input from '../../FormFields/Input/Input.component';
import Select from '../../FormFields/Select/Select.component';

const body = (type) => ({
  query: {
    selector: {
      '@assetType': type,
    },
  },
});

const Products = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    handleSubmit, register, errors, clearErrors,
  } = useForm();

  const {
    data: products,
    isLoading,
    isRejected,
  } = useRequest(`${SEARCH_ASSET}products`, searchAsset(body('product')));

  const {
    data: sellers,
  } = useRequest(`${SEARCH_ASSET}sellers`, searchAsset(body('seller')));

  const onSubmit = handleSubmit((formData) => {
    console.log('FORM!', formData);
    const payload = {
      ...formData,
      '@assetType': 'product',
      soldBy: {
        cnpj: formData.soldBy,
      },
    };
    createAsset(payload);
  });

  const redirect = (id) => router.push('/product/[id]', `/product/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isRejected) {
    // console.error(isRejected);
    return <h1>ERROR!</h1>;
  }

  return (
    <ProductsContainer>
      <Button onClick={() => setIsModalOpen(true)}>Add Product</Button>
      <CardList assets={products.result} onClick={redirect} />
      <Modal
        hidden={!isModalOpen}
        title="ADD PRODUCT"
        confirmMessage="CONFIRM"
        confirmType="submit"
        closeMessage="Cancel"
        onClose={() => {
          clearErrors();
          setIsModalOpen(false);
        }}
        onConfirm={() => {
          onSubmit();
        }}
      >
        <form>
          <Input
            type="text"
            label="product name"
            name="name"
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
            {sellers?.result
              && sellers.result?.map((seller) => (
                <option value={seller.cnpj} key={seller['@key']}>{seller.name}</option>
              ))}
          </Select>
        </form>
      </Modal>
    </ProductsContainer>
  );
};

export default Products;
