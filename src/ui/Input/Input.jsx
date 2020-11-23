import styled from 'styled-components'

export default styled.input`
  display: block;
  width: 100%;

  border: none;
  background-color: #e9e9e9;

  padding: 10px;
  font-size: 16px;
  outline: none;

  &:focus {
    box-shadow: 0 -2px 0 #9999FF inset;
  }
`;
