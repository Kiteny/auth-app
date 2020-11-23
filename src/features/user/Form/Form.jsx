import React from 'react';
import PropTypes from 'prop-types'

import { Container, Header, FormButton, InputsContainer } from './StyledComponents';

const Form = ({ header, buttonTitle, children, onSubmit }) => {
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Header>{header}</Header>

        <InputsContainer>
          {children}
        </InputsContainer>

        <FormButton>{buttonTitle}</FormButton>
      </form>
    </Container>
  )
}

Form.propTypes = {
  header: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Form;
