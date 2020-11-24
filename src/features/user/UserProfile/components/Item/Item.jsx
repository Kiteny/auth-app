import React from 'react';
import PropTypes from 'prop-types';

import { Cell, Row } from '../../StyledComponents';

const Item = ({name, value}) => {
  return (
    <Row>
      <Cell>{name}</Cell>
      <Cell>{value}</Cell>
    </Row>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
}

export default Item;
