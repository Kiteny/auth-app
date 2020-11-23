import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Form, { ErrorMessage, FormInput } from '../Form';
import validationSchema from './validationSchema';

const AuthForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (userData) => {
    console.log(userData);
  }

  return (
    <Form
      header="Авторизация" 
      buttonTitle="Войти" 
      linkTitle="Нет акаунта?" 
      linkTo="/signup"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
      <FormInput 
        placeholder="Email" 
        name="email"
        ref={register}
      />
      <ErrorMessage>{errors.password?.message}</ErrorMessage>
      <FormInput 
        placeholder="Пароль" 
        type="password"
        name="password" 
        ref={register} 
      />
    </Form>
  );
}

export default AuthForm;
