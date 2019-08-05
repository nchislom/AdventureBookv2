/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { toFlatArray } from 'react-children-addons';

import './Story.scss';

const Story = ({ children, className, current, darkMode, history, ...rest }) => {
  const storyElement = React.useRef(React.createRef());

  const scrollToBottom = () => {
    window.scrollTo({
      top: storyElement.current.offsetTop + storyElement.current.offsetHeight,
      behavior: 'smooth',
    });
  };

  React.useEffect(scrollToBottom, [history]);

  const flatChildren = toFlatArray(children);

  const getElements = () => history.concat({ from: current }).map(({ from }, index, array) => (
    React.cloneElement(flatChildren[from], {
      disabled: index < array.length - 1,
      index: from,
      key: `storyElement-${index}`,
      tabIndex: 1 + index,
    })
  ));

  return (
    <div className={classNames('story', { darkMode }, className)} ref={storyElement} {...rest}>
      <div className="container">{getElements()}</div>
    </div>
  );
};

Story.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  current: PropTypes.number.isRequired,
  darkMode: PropTypes.bool,
  history: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Story.defaultProps = {
  className: '',
  darkMode: false,
};

export default connect(
  state => ({
    current: state.dynamicStory.current,
    darkMode: state.dynamicStory.settings.darkMode,
    history: state.dynamicStory.history,
  }),
  () => ({}),
)(Story);
