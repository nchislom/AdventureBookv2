import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { goBackward } from '../../../actions/story';

const GoBackward = ({ className, dispatch, ...rest }) => (
  <button
    className={classNames('btn btn-backward', className)}
    onClick={() => dispatch(goBackward())}
    onKeyPress={() => dispatch(goBackward())}
    type="button"
    {...rest}
  >
    Go Backward
  </button>
);

GoBackward.propTypes = {
  className: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

GoBackward.defaultProps = {
  className: '',
};

export default connect()(GoBackward);
