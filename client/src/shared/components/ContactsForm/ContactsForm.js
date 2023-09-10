import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { toast } from 'react-hot-toast';

import { Arrow, Ellipse } from '../Link/Link.styled';
import { StyledForm, StyledInput, StyledBtn } from './ContactsForm.styled';

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const handleFormSubmit = data => {
    console.log(data);
    const { name, email, phone } = data;
    reset();
  };

  return (
    <>
      {' '}
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <StyledInput
          {...register('name')}
          type="text"
          name="name"
          placeholder="Ім'я"
        />
        <StyledInput
          {...register('email')}
          type="email"
          name="email"
          placeholder="Пошта"
        />
        <StyledInput
          {...register('phone')}
          type="tel"
          name="phone"
          placeholder="Телефон"
        />
        <div>
          {' '}
          <StyledBtn type="submit">
            <Ellipse />
            Замовити дзвiнок
          </StyledBtn>
          <Arrow />
        </div>
      </StyledForm>
    </>
  );
};

export default ContactsForm;
