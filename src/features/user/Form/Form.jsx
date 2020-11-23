import React from 'react';
import PropTypes from 'prop-types'

import { Container, Header, FormButton, InputsContainer, FormLink } from './StyledComponents';

const Form = ({ header, buttonTitle, children, onSubmit, linkTitle, linkTo }) => {
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Header>{header}</Header>
        <InputsContainer>
          {children}
        </InputsContainer>

        <FormButton>{buttonTitle}</FormButton>
        <FormLink to={linkTo}>{linkTitle}</FormLink>
      </form>
    </Container>
  )
}

Form.propTypes = {
  header: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  onSubmit: PropTypes.func.isRequired,
  linkTitle: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
}

export default Form;
