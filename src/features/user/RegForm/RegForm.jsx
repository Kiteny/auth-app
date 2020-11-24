import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form/';
import { yupResolver } from '@hookform/resolvers/yup';

import Form, { FormInput, ErrorMessage } from '../Form';
import ValidationSchema from './validationSchema';
import { userActions, userSelectors } from '../_userSlice_';
import { Redirect } from 'react-router-dom';

const RegForm = () => {
  const status = useSelector(userSelectors.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.resetStatus());
  }, []);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(ValidationSchema)
  });
  
  const onSubmit = (userData) => {
    dispatch(userActions.signUp(userData));
  }

  useEffect(() => {
    if (status !== 'success') return;

    alert('Регистрация успешна!');
  }, [status]);

  if (status === 'success') {
    return <Redirect to="/login"/>
  }

  return (
    <Form 
      header="Регистрация" 
      buttonTitle="Регистрация"
      linkTitle="Есть аккаунт?" 
      linkTo="/login"
      onSubmit={ handleSubmit(onSubmit) }
      isLoading={status === 'loading'}
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
