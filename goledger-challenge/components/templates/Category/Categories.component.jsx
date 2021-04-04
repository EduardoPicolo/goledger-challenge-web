import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import useRequest from '../../../hooks/useRequest';
import { createAsset, searchAsset } from '../../../services/assetsServices';
import { SEARCH_ASSET } from '../../../services/endpoints';
import { CategoriesContainer } from './Categories.styles';
import Button from '../../Button/Button.component';
import CardList from '../../CardList/CardList.component';
import Modal from '../../Modal/Modal.component';
import Input from '../../FormFields/Input/Input.component';
import toast from '../../Toast/Toast.component';
import Spinner from '../../Spinner/Spinner.component';
import Row from '../../Container/Row.styles';
import ErrorTemplate from '../ErrorTemplate/ErrorTemplate.component';

const body = (type) => ({
  query: {
    selector: {
      '@assetType': type,
    },
  },
});

const Categories = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    handleSubmit, register, errors, formState, clearErrors,
  } = useForm();

  const {
    data: categories, isLoading, isRejected, mutate,
  } = useRequest(
    `${SEARCH_ASSET}categories`,
    searchAsset(body('category')),
  );

  const onSubmit = handleSubmit(async (formData) => {
    const payload = {
      '@assetType': 'category',
      ...formData,
    };

    try {
      const res = await createAsset(payload);
      await mutate({ ...categories, result: [...categories.result, ...res] });
      toast({
        type: 'success',
        message: `${res[0]?.name} was successfully added!`,
      });
    } catch (error) {
      // console.error(error);
      toast({ type: 'error', message: `An erro has occurred. ${error}` });
    }
  });

  const redirect = (id) => router.push('/category/[id]', `/category/${id}`);

  if (isRejected) {
    return <ErrorTemplate message={isRejected} />;
  }

  return (
    <CategoriesContainer>
      <Row>
        <Button onClick={() => setIsModalOpen(true)}>Add Category</Button>
      </Row>
      {isLoading ? (
        <Row justify="center">
          <Spinner size="100px" width="2.5" />
        </Row>
      ) : (
        <CardList assets={categories.result} onClick={redirect} />
      )}
      <Modal
        hidden={!isModalOpen}
        title="ADD CATEGORY"
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
            label="Category name"
            name="name"
            placeholder="XYZ"
            register={register({
              required: 'Campo obrigatório',
            })}
            errors={errors}
            autoComplete="off"
          />

        </form>
        {formState.isSubmitting ? <Spinner /> : null}
      </Modal>
    </CategoriesContainer>
  );
};

export default Categories;
