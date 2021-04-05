import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import useRequest from '../../../hooks/useRequest';
import { createAsset, searchAsset } from '../../../services/assetsServices';
import { SEARCH_ASSET } from '../../../services/endpoints';
import { SellersContainer } from './Sellers.styles';
import ErrorTemplate from '../ErrorTemplate/ErrorTemplate.component';
import Button from '../../Button/Button.component';
import CardList from '../../CardList/CardList.component';
import Modal from '../../Modal/Modal.component';
import Input from '../../FormFields/Input/Input.component';
import toast from '../../Toast/Toast.component';
import Spinner from '../../Spinner/Spinner.component';
import Row from '../../Container/Row.styles';

const body = (type) => ({
  query: {
    selector: {
      '@assetType': type,
    },
  },
});

const Sellers = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    handleSubmit, register, errors, formState, clearErrors,
  } = useForm();

  const {
    data: sellers, isLoading, isRejected, mutate,
  } = useRequest(
    `${SEARCH_ASSET}sellers`,
    searchAsset(body('seller')),
  );

  const onSubmit = handleSubmit(async (formData) => {
    const payload = {
      ...formData,
      '@assetType': 'seller',
      dateJoined: new Date().toISOString(),
    };
    try {
      const res = await createAsset(payload);
      await mutate({ ...sellers, result: [...sellers.result, ...res] });
      toast({
        type: 'success',
        message: `${res[0]?.name} was successfully added!`,
      });
    } catch (error) {
      // console.error(error);
      toast({ type: 'error', message: `An erro has occurred. ${error}` });
    }
  });

  const redirect = (id) => router.push('/seller/[id]', `/seller/${id}`);

  if (isRejected) {
    return <ErrorTemplate message={isRejected} />;
  }

  return (
    <SellersContainer>
      <Row>
        <Button onClick={() => setIsModalOpen(true)}>Add Seller</Button>
      </Row>
      {isLoading ? (
        <Row justify="center">
          <Spinner size="100px" width="2.5" />
        </Row>
      ) : (
        <CardList assets={sellers.result} onClick={redirect} />
      )}
      <Modal
        hidden={!isModalOpen}
        title="ADD SELLER"
        confirmMessage="CONFIRM"
        confirmType="submit"
        disabled={formState.isSubmitting}
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
            label="Seller name"
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
            label="cnpj"
            name="cnpj"
            placeholder=""
            register={register({
              required: 'Campo obrigatório',
            })}
            errors={errors}
            autoComplete="off"
          />

          <Input
            type="text"
            label="address"
            name="address"
            placeholder=""
            register={register({
              required: 'Campo obrigatório',
            })}
            errors={errors}
            autoComplete="off"
          />
        </form>
        {formState.isSubmitting ? <Spinner /> : null}
      </Modal>
    </SellersContainer>
  );
};

export default Sellers;
