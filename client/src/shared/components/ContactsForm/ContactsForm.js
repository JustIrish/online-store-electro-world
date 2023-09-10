import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { validationRules } from 'common/validation';

import { Arrow, Ellipse } from '../Link/Link.styled';
import {
  StyledForm,
  StyledInput,
  ErrorStyled,
  StyledBtn,
} from './ContactsForm.styled';

const ContactsForm = ({ onSubmit }) => {
  const [user, setUser] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const handleFormSubmit = data => {
    setUser(data);
    onSubmit(user);
    reset();
  };

  return (
    <>
      {' '}
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <StyledInput
            {...register('name', validationRules.name)}
            type="text"
            name="name"
            placeholder="Ім'я"
            style={{
              outlineColor: errors.name && 'transparent',
              borderColor: errors.name && '#FF2B77',
            }}
          />
          {errors.name && <ErrorStyled>{errors.name.message}</ErrorStyled>}
        </div>
        <div>
          <StyledInput
            {...register('email', validationRules.email)}
            type="email"
            name="email"
            placeholder="Пошта"
            style={{
              outlineColor: errors.email && 'transparent',
              borderColor: errors.email && '#FF2B77',
            }}
          />
          {errors.email && <ErrorStyled>{errors.email.message}</ErrorStyled>}
        </div>
        <div>
          <StyledInput
            {...register('phone', validationRules.phone)}
            type="tel"
            name="phone"
            placeholder="Телефон"
            style={{
              outlineColor: errors.phone && 'transparent',
              borderColor: errors.phone && '#FF2B77',
            }}
          />
          {errors.phone && <ErrorStyled>{errors.phone.message}</ErrorStyled>}
        </div>

        <div style={{ marginTop: '10px' }}>
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
