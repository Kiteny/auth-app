import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class CriticalErrosBoundary extends React.Component {
  state = {
    error: null,
  };

  componentDidCatch(_, info) {
    this.setState({ error: info });
  }

  render() {
    const { children, appError } = this.props;
    const { error } = this.state;

    return error || appError ? 'Что-то пошло не так!' : children;
  }
}

CriticalErrosBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  appError: PropTypes.string,
}

const mapStateToProps = (state) => ({
  appError: state.app.error,
})

export default connect(mapStateToProps)(CriticalErrosBoundary);
