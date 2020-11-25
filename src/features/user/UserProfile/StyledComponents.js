import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto 0;
  padding: 10px;
`;

export const Header = styled.h2`
  margin-bottom: 15px;

  text-align: center;
  font-size: 25px;

  text-transform: uppercase;
`;

export const Row = styled.tr`
  &:nth-child(odd) {
    background: #e6e6ff;
  }
`;

export const Cell = styled.td`
  padding: 5px;

  & + & {
    border-left: 1px solid #9999FF;
  }
`;

export const TopBar = styled.nav`
  height: 35px;
  text-align: right;
`;

export const StyledLink = styled.a`
  color: #9999FF;
  line-height: 35px;
  text-decoration: none;

  padding: 5px;
`;


const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  border: 1px solid #9999FF;
`;

export const Table = ({ children }) => {
  return (
    <StyledTable>
      <tbody>{children}</tbody>
    </StyledTable>
  );
}

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}
