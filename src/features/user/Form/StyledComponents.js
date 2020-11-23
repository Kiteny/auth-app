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
  margin: 15px 0;
`;

export const FormButton = styled(Button)`
  width: 80%;
`;