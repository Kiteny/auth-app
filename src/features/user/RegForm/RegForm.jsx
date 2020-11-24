import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form/';
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect } from 'react-router-dom';

import Form, { FormInput, ErrorMessage } from '../Form';
import ValidationSchema from './validationSchema';
import { userActions, userSelectors } from '../_userSlice_';

const RegForm = () => {
  const status = useSelector(userSelectors.status);
  const userErrors = useSelector(userSelectors.errors);
  const [isStatusReseting, setIsStatusReseting] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.resetStatus());
  }, []);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(ValidationSchema)
  });
  
  const onSubmit = (userData) => {
    const fromattedPhone = ('+' + userData.phone.match(/\d/g).join(''));

    dispatch(
      userActions.signUp({ 
        ...userData, 
        phone: fromattedPhone,
      })
    );
  }

  useEffect(() => {
    switch (status) {
      case 'idle': 
        setIsStatusReseting(false);
      case 'success':
        !isStatusReseting && alert('Регистрация успешна!');
        return;
      case 'failure':
        !isStatusReseting && processErrors(
          userErrors, 
          (err) => alert(`Ошибка регистрации: ${err}`)
        );
        return;
    }
  }, [status, userErrors]);

  if (status === 'success' && !isStatusReseting) {
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

function processErrors(error, callback) {
  for (let prop in error) {
    const isOwn = error.hasOwnProperty(prop);
    
    if (isOwn && Array.isArray(error[prop])) {
      error[prop].forEach(callback);
    }
  }
}

export default RegForm;
