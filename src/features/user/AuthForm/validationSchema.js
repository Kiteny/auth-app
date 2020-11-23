import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string().email('Неверный формат email').required('Обязательное поле'),
  password: yup.string().required('Обязательное поле'),
});