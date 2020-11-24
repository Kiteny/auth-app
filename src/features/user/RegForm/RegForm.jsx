import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form/';
import { yupResolver } from '@hookform/resolvers/yup';

import Form, { FormInput, ErrorMessage } from '../Form';
import ValidationSchema from './validationSchema';

const RegForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(ValidationSchema)
  });
  
  const onSubmit = (userData) => {
    console.log(userData);
  }

  return (
    <Form 
      header="Регистрация" 
      buttonTitle="Регистрация"
      linkTitle="Есть аккаунт?" 
      linkTo="/login"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <ErrorMessage>{errors.name?.message}</ErrorMessage>
      <FormInput 
        placeholder="Имя" 
        name="name"
        ref={register}
      />
      <ErrorMessage>{errors.surname?.message}</ErrorMessage>
      <FormInput 
        placeholder="Фамилия" 
        name="surname"
        ref={register}
      />
      <ErrorMessage>{errors.phone?.message}</ErrorMessage>
      <FormInput 
        placeholder="Номер телефона"
        name="phone"
        type="tel"
        ref={register}
      />
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
      <ErrorMessage>{errors['repeat-password']?.message}</ErrorMessage>
      <FormInput 
        placeholder="Повторить пароль"
        type="password"
        name="repeat-password"
        ref={register}
      />
    </Form>
  );
}

export default RegForm;
