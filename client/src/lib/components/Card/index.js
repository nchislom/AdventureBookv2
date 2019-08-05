import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import './Card.scss';

const Card = (props) => {
  const {
    animationEntrance,
    children,
    choices,
    className,
    darkMode,
    debug,
    disabled,
    index,
    isSkipAble,
    onClick,
    onKeyPress,
    onReveal,
    onTimeout,
    text,
    timeout,
    ...rest
  } = props;

  const cardElement = React.useRef(React.createRef());

  let timeoutId;

  const handleReveal = (() => {
    if (!disabled) {
      if (onReveal) onReveal(props);

      if (timeout) {
        timeoutId = setTimeout(
          handleTimeout,
          typeof timeout === 'function' ? timeout(props) : timeout,
        );
      }
      cardElement.current.focus();
    }

    return () => clearTimeout(timeoutId);
  });

  const handleTimeout = (() => {
    if (!disabled) {
      if (onTimeout) onTimeout(props);
    }
    clearTimeout(timeoutId);
  });

  const handleClick = (() => {
    if (!disabled) {
      if (isSkipAble) handleTimeout();
      if (onClick) onClick(props);
    }
  });

  const handleKeyPress = ((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
    if (onKeyPress) onKeyPress(props);
  });

  const handleChoose = ((choice) => {
    if (!disabled && choice.onClick) choice.onClick(props, choice);
  });

  React.useEffect(handleReveal, [disabled]);
  React.useEffect(() => () => clearTimeout(timeoutId), []);

  return (
    <div
      className={classNames('card', animationEntrance, {
        'bg-dark text-white': darkMode && className.indexOf('bg-') === -1,
      }, className)}
      data-index={index}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      ref={cardElement}
      role="presentation"
      aria-disabled={disabled}
      {...rest}
    >
      {text ? (
        <div className="card-body">
          <p className="mb-0">{text}</p>
        </div>
      ) : children}
      {choices && (
        <div className="card-footer">
          {Object.keys(choices).map((key) => {
            const choice = choices[key];
            return (
              <button
                className={classNames('choice btn btn-link', choice.className, { 'text-white': darkMode })}
                data-choice={key}
                disabled={disabled}
                key={`element-${index}-choice-${key}`}
                onClick={() => handleChoose(choice)}
                onKeyPress={() => handleChoose(choice)}
                type="button"
              >
                {choice.text}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  animationEntrance: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]),
  choices: PropTypes.objectOf(PropTypes.shape({
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  })),
  className: PropTypes.string,
  darkMode: PropTypes.bool,
  debug: PropTypes.bool,
  disabled: PropTypes.bool,
  index: PropTypes.number,
  isSkipAble: PropTypes.bool,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  onReveal: PropTypes.func,
  onTimeout: PropTypes.func,
  tabIndex: PropTypes.number,
  text: PropTypes.string,
  timeout: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
};

Card.defaultProps = {
  animationEntrance: 'animated fadeIn',
  children: undefined,
  choices: null,
  className: '',
  darkMode: false,
  debug: false,
  disabled: false,
  index: null,
  isSkipAble: false,
  onClick: null,
  onKeyPress: null,
  onReveal: null,
  onTimeout: null,
  tabIndex: null,
  text: undefined,
  timeout: 0,
};

export default connect(
  state => ({ darkMode: state.dynamicStory.settings.darkMode }),
  () => ({}),
)(Card);
