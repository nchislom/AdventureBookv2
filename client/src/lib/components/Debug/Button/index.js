import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { updateSettings } from '../../../actions/settings';

const DebugButton = ({ className, debug, dispatch, ...rest }) => (
  <button
    className={classNames('btn btn-backward', className)}
    onClick={() => dispatch(updateSettings({ debug: !debug }))}
    onKeyPress={() => dispatch(updateSettings({ debug: !debug }))}
    type="button"
    {...rest}
  >
    Debug
  </button>
);

DebugButton.propTypes = {
  className: PropTypes.string,
  debug: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

DebugButton.defaultProps = {
  className: '',
};

export default connect(state => ({ debug: state.dynamicStory.settings.debug }))(DebugButton);
