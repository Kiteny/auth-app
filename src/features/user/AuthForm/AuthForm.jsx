import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Form, { ErrorMessage, FormInput } from '../Form';
import validationSchema from './validationSchema';
import { userActions, userSelectors } from '../_userSlice_';

const AuthForm = () => {
  const status = useSelector(userSelectors.status);
  const userErrors = useSelector(userSelectors.errors);
  const [isStatusReseting, setIsStatusReseting] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.resetStatus());
  }, []);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = ({ email, password }) => {
    dispatch(userActions.signIn(email, password));
  }

  useEffect(() => {
    console.log(status);
    switch (status) {
      case 'idle': 
        setIsStatusReseting(false);
        return;
      case 'failure':
        !isStatusReseting && alert(`Ошибка авторизации: ${userErrors.detail}`);
        return;
    }

  }, [status, userErrors]);

  return (
    <Form
      header="Авторизация" 
      buttonTitle="Войти" 
      linkTitle="Нет аккаунта?" 
      linkTo="/signup"
      onSubmit={ handleSubmit(onSubmit) }
      isLoading={status === 'loading'}
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
