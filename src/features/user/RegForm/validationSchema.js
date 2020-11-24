import * as yup from 'yup';
import "yup-phone";

export default yup.object().shape({
  name: yup
    .string()
    .max(50, 'Не более 50 символов')
    .required('Обязательное поле'),
  surname: yup
    .string()
    .max(50, 'Не более 50 символов')
    .required('Обязательное поле'),
  phone: yup
    .string()
    .phone('RU', false, 'Не валидный номер')
    .required('Обязательное поле'),
  email: yup.string().email('Неверный формат email').required('Обязательное поле'),
  password: yup
    .string()
    .min(6, 'Не менее 6 символов')
    .max(50, 'Не более 50 символов')
    .required('Обязательное поле'),
  'repeat-password': yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});