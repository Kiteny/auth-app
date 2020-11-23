import React from 'react';
import Form, { FormInput } from '../Form';

const AuthForm = () => {
  return (
    <Form header="Авторизация" buttonTitle="Войти">
      <FormInput placeholder="Логин" />
      <FormInput placeholder="Пароль" type="password" />
    </Form>
  );
}

export default AuthForm;
