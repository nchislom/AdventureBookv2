import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import './Header.scss';

import Card from '../Card';
import { goForward } from '../../actions/story';

const Header = ({ banner, children, className, dispatch, ...rest }) => (
  <Card
    className={classNames('story-header', className)}
    onReveal={() => dispatch(goForward())}
    {...rest}
  >
    {banner && <img className="story-banner" {...banner} alt={banner.alt} />}
    {children}
  </Card>
);

Header.propTypes = {
  banner: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

Header.defaultProps = {
  banner: null,
  className: '',
  children: undefined,
};

export default connect()(Header);
