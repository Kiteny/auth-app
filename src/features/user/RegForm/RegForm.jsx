import React from 'react';
import Form, { FormInput } from '../Form';

const RegForm = () => {
  return (
    <Form 
      header="Регистрация" 
      buttonTitle="Регистрация"
      linkTitle="Есть акаунт?" 
      linkTo="/auth"
    >
      <FormInput placeholder="Имя" />
      <FormInput placeholder="Фамилия" />
      <FormInput placeholder="Логин" />
      <FormInput placeholder="Пароль" type="password" />
      <FormInput placeholder="Повторить пароль"  type="password" />
    </Form>
  );
}

export default RegForm;
