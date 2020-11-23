import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../../ui/Button';
import Input from '../../../ui/Input';

export const Container = styled.div`
  max-width: 400px;

  margin: 30px auto;
  padding: 30px;

  text-align: center;
`;

export const Header = styled.h2`
  margin-bottom: 20px;

  text-align: center;
  font-size: 25px;

  text-transform: uppercase;
`;

export const InputsContainer = styled.div`
  margin-bottom: 25px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 20px;
`;

export const FormButton = styled(Button)`
  width: 80%;
  margin-bottom: 10px;
`;

export const FormLink = styled(Link)`
  display: block;
  color:  #9999FF;
  text-decoration: none;
`;

export const ErrorMessage = styled.p`
  height: 0px;
  transform: translateY(-18px);

  text-align: left;
  font-size: 14px;
  color: #CC3300;
`;
