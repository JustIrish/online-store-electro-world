import { useForm } from 'react-hook-form';

import { toast } from 'react-hot-toast';

import { validationRules } from 'common/validation';

import { addUser } from 'shared/API/api';

import { Arrow, Ellipse } from '../Link/Link.styled';
import {
  StyledForm,
  StyledInput,
  ErrorStyled,
  StyledBtn,
} from './ContactsForm.styled';

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const handleFormSubmit = async data => {
    try {
      await addUser(data);
      toast.success('All right, your data has been shipped!');
      reset();
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong...');
      }
    }
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
