import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getCircularReplacer } from '../../../helpers';

const DebugWrapper = ({ children, darkMode, onGoToClick }) => {
  const [tab, changeTab] = React.useState('preview');
  const { category, comment, id, index, tags, title = 'untitle' } = children.props;

  const bgDark = darkMode && 'bg-dark';
  const textWhite = darkMode && 'text-white';
  const borderDark = darkMode && 'border-dark';

  const handleGoTo = (e) => {
    e.preventDefault();
    onGoToClick(children.props);
  };

  return (
    <div className="debug-wrapper mb-5">
      <div className="debug-wrapper-info mb-3">
        <h2>
          <span className="mr-2 badge badge-dark">{`${index}${id ? ` - ${id}` : ''}`}</span>
          {title}
        </h2>
        {(category || tags) && (
          <div>
            {category && <span className="mr-2 badge badge-primary">{category}</span>}
            {tags && tags.map(tag => <small key={index + tag} className="mr-2 badge badge-secondary">{tag}</small>)}
            {comment && (
              <pre className="ml-2 d-inline mb-0">
                <code>
                  {'// '}
                  {comment}
                </code>
              </pre>
            )}
          </div>
        )}
      </div>
      <ul className={classNames('nav nav-tabs mb-3', borderDark)}>
        <li className="nav-item mr-2">
          <button
            className={classNames('nav-link', bgDark, textWhite, borderDark, { active: tab === 'preview' })}
            onClick={() => changeTab('preview')}
            type="button"
          >
            Preview
          </button>
        </li>
        <li className="nav-item mr-2">
          <button
            className={classNames('nav-link', bgDark, textWhite, borderDark, { active: tab === 'props' })}
            onClick={() => changeTab('props')}
            type="button"
          >
            Component's props
          </button>
        </li>
        {children.props.mapping && (
          <li className="nav-item mr-2">
            <button
              className={classNames('nav-link', bgDark, textWhite, borderDark, { active: tab === 'debug' })}
              onClick={() => changeTab('debug')}
              type="button"
            >
              Mapping
            </button>
          </li>
        )}
      </ul>
      <div className="debug-wrapper-tab">
        {tab === 'preview' && (
          <div className="debug-wrapper-tab-preview">
            {React.cloneElement(children, { debug: true })}
          </div>
        )}
        {tab === 'props' && (
          <div className={classNames('card debug-wrapper-tab-props', bgDark, textWhite)}>
            <div className="card-body text-left">
              <pre className="mb-0">
                <code>
                  {JSON.stringify({ ...children.props, children: undefined }, getCircularReplacer(), 2)}
                  <br />
                </code>
              </pre>
            </div>
          </div>
        )}
        {tab === 'mapping' && (
          <div className="debug-wrapper-tab-mapping">
            TODO: mapping debug tool (1 is connected to ...)
          </div>
        )}
      </div>
      <div className="text-right mt-3">
        <button
          className={classNames('btn btn-sm', `btn-outline-${darkMode ? 'light' : 'dark'}`)}
          onClick={handleGoTo}
          onKeyPress={handleGoTo}
        >
          {`Go to ${index}${id ? ` - ${id}` : ''}`}
        </button>
      </div>
    </div>
  );
};

DebugWrapper.propTypes = {
  children: PropTypes.element,
  darkMode: PropTypes.bool,
  onGoToClick: PropTypes.func,
};

DebugWrapper.defaultProps = {
  children: undefined,
  darkMode: false,
  onGoToClick: () => false,
};

export default DebugWrapper;
