/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { toFlatArray } from 'react-children-addons/lib/index';

import './Debug.scss';

import { updateSettings } from '../../actions/settings';
import { setDebugFilters } from '../../actions/debug/filters';
import { goTo, resetStory } from '../../actions/story';
import { setContext } from '../../actions/context';

import DebugWrapper from './Wrapper';
import DebugFilters from './Filters';
import DebugContext from './Context';
import { filterElements } from './Filters/match';

const Debug = ({ children, className, current, debug, dispatch, settings, ...rest }) => {
  const { filters } = debug;
  const { darkMode } = settings;
  const allElements = toFlatArray(children)
    .map((element, index) => React.cloneElement(element, { index, disabled: true }));

  const [elements, setElements] = React.useState(filterElements(allElements, filters));
  const [appliedFilters, applyFilters] = React.useState(filters);
  const [filersIsOpen, openFilters] = React.useState(false);
  const [contextIsOpen, openContext] = React.useState(false);
  const [actionsIsOpen, openActionDropdown] = React.useState(false);

  const toggleFilters = (e, value = !filersIsOpen) => {
    openFilters(value);
  };

  const toggleContext = (e, value = !contextIsOpen) => {
    openContext(value);
  };

  const handleContextSubmit = (newContext) => {
    dispatch(setContext(newContext));
    openContext(false);
  };

  const toggleDarkMode = () => {
    dispatch(updateSettings({ darkMode: !darkMode }));
    openActionDropdown(false);
  };

  const showCurrent = () => {
    dispatch(setDebugFilters({ index: current }));
    updateElements({ ...filters, index: current });
    openActionDropdown(false);
  };

  const resetAll = () => {
    dispatch(resetStory());
    openActionDropdown(false);
  };

  const exitDebug = () => {
    dispatch(updateSettings({ debug: false }));
  };

  const updateElements = (f = filters) => {
    setElements(filterElements(allElements, f));
    applyFilters(f);
  };

  const handleGoTo = ({ index }) => {
    dispatch(goTo(current, index));
    exitDebug();
  };

  const filtersAreDumbEquals = () => JSON.stringify(appliedFilters) === JSON.stringify(filters);

  return (
    <div className={classNames('debug', { darkMode })}>
      <div className="navbar fixed-top p-2">
        <div className="container-fluid p-0">
          <ul className="nav">
            <li className="nav-item mr-2">
              <div className={classNames('dropdown', { show: actionsIsOpen })}>
                <button
                  className={classNames('btn btn-sm dropdown-toggle', { 'btn-dark': darkMode, 'btn-light': !darkMode })}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => openActionDropdown(!actionsIsOpen)}
                >
                  Actions
                </button>
                <div
                  className={classNames('dropdown-menu dropdown-menu-sm', { show: actionsIsOpen })}
                  aria-labelledby="actionsDropdown"
                >
                  <button className="dropdown-item" onClick={showCurrent}>Show current</button>
                  <button className="dropdown-item" onClick={toggleDarkMode}>Toggle dark mode</button>
                  <div className="dropdown-divider" />
                  <button className="dropdown-item text-danger" onClick={resetAll}>Reset all story</button>
                </div>
              </div>
            </li>
            <li className="nav-item mr-2">
              <button
                className={classNames('btn btn-sm ', { 'btn-dark': darkMode, 'btn-light': !darkMode })}
                onClick={toggleFilters}
              >
                Filters
              </button>
            </li>
            <li className="nav-item mr-auto">
              <button
                className={classNames('btn btn-sm ', { 'btn-dark': darkMode, 'btn-light': !darkMode })}
                onClick={toggleContext}
              >
                Context
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger btn-sm" onClick={exitDebug}>
                <span className="d-none d-md-inline mr-2">Exit debug</span>
                &times;
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={classNames('story', className)} {...rest}>
        <div className="container">
          {elements.map(element => (
            <DebugWrapper key={`debugElement-${element.props.index}`} darkMode={darkMode} onGoToClick={handleGoTo}>
              {element}
            </DebugWrapper>
          ))}
        </div>
      </div>
      <DebugFilters
        categoryOptions={elements.map(element => element.props.category).filter(cat => cat !== undefined)}
        isOpen={filersIsOpen}
        onClose={toggleFilters}
        onSubmit={updateElements}
        pristine={filtersAreDumbEquals()}
        resultCount={filterElements(allElements, filters).length}
        tagsOptions={elements
          .map(element => element.props.tags || [])
          .reduce((acc, val) => acc.concat(val), [])
          .filter((tag, i, tags) => tag !== undefined && tags.indexOf(tag) === i)}
      />
      <DebugContext
        isOpen={contextIsOpen}
        onClose={toggleContext}
        onSubmit={handleContextSubmit}
      />
    </div>
  );
};

Debug.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.objectOf(PropTypes.element),
  ]).isRequired,
  debug: PropTypes.shape({
    filters: PropTypes.shape({
      text: PropTypes.string,
      index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      category: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      className: PropTypes.string,
      hasChoices: PropTypes.bool,
      isSkipAble: PropTypes.bool,
      hasCustomStyle: PropTypes.bool,
    }).isRequired,
    head: PropTypes.shape({

    }),
  }).isRequired,
  current: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    darkMode: PropTypes.bool.isRequired,
  }).isRequired,
};

Debug.defaultProps = {
  className: '',
};

export default connect(({ dynamicStory }) => ({
  current: dynamicStory.current,
  settings: dynamicStory.settings,
  debug: dynamicStory.debug,
}))(Debug);
