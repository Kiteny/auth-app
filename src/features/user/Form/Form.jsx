import React from 'react';
import PropTypes from 'prop-types'

import { Container, Header, FormButton, InputsContainer, FormLink } from './StyledComponents';
import Loader from '../../../ui/Loader/Loader';

const Form = ({ header, buttonTitle, children, onSubmit, linkTitle, linkTo, isLoading }) => {
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Header>{header}</Header>
        <InputsContainer>
          {children}
        </InputsContainer>

        {
          !isLoading 
            ? (
              <>
                <FormButton>{buttonTitle}</FormButton>
                <FormLink to={linkTo}>{linkTitle}</FormLink>
              </>
            )
            :
              <Loader />
        }
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
  isLoading: PropTypes.bool,
}

export default Form;
