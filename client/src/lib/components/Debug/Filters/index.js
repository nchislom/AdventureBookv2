import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { resetDebugFilters, updateDebugFilters } from '../../../actions/debug/filters';

import './DebugFilters.scss';

const DebugFilters = (props) => {
  const firstInputElement = React.useRef(React.createRef());

  const {
    categoryOptions,
    darkMode,
    dispatch,
    filters,
    isOpen,
    onClose,
    onSubmit,
    pristine,
    resultCount,
    tagsOptions,
  } = props;

  const handleFilterChange = (e) => {
    const { checked, name, type, value } = e.target;
    dispatch(updateDebugFilters({ [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(filters);
    onClose(e);
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetDebugFilters());
  };

  const fixBody = () => {
    const { classList } = document.querySelector('body');

    if (isOpen) {
      firstInputElement.current.focus();
      classList.add('modal-open');
      classList.add('pr-3');
    } else {
      classList.remove('modal-open');
      classList.remove('pr-3');
    }

    return () => {
      classList.remove('modal-open');
      classList.remove('pr-3');
    };
  };

  React.useEffect(fixBody, [isOpen]);

  const bgDark = darkMode && 'bg-dark';
  const textWhite = darkMode && 'text-white';

  return isOpen && (
    <>
      <div
        className="debug-filters modal animated slideInDown fade show"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className={classNames('modal-content', bgDark, textWhite)}>
            <div className="modal-header">
              <h5 className="modal-title">
                Filters
                <span className="ml-2 badge badge-light">{`${resultCount} result${resultCount > 1 ? 's' : ''}`}</span>
              </h5>
              <button
                type="button"
                className="close text-danger"
                aria-label="Close"
                data-dismiss="modal"
                onClick={onClose}
                onKeyPress={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="text" className="w-100">
                        Text
                        <input
                          type="text"
                          className="form-control"
                          id="text"
                          name="text"
                          placeholder="Once upon a time"
                          value={filters.text}
                          onChange={handleFilterChange}
                          ref={firstInputElement}
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="text" className="w-100">
                        ID/Index
                        <input
                          type="number"
                          className="form-control"
                          id="index"
                          name="index"
                          placeholder="42"
                          value={filters.index}
                          onChange={handleFilterChange}
                          min={0}
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="className" className="w-100">
                        Classes
                        <input
                          type="text"
                          className="form-control"
                          id="className"
                          name="className"
                          placeholder="w-33 bg-dark"
                          value={filters.className}
                          onChange={handleFilterChange}
                        />
                      </label>
                      <small className="form-check d-block">
                        <label className="form-check-label w-100 text-right" htmlFor="classNameUnion">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="classNameUnion"
                            name="classNameUnion"
                            value={filters.classNameUnion}
                            onChange={handleFilterChange}
                          />
                          Union (class A ∩ class B)
                        </label>
                      </small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                      <label htmlFor="category" className="w-100">
                        Category
                        <select
                          className="form-control"
                          id="category"
                          name="category"
                          value={filters.category}
                          onChange={handleFilterChange}
                        >
                          <option value={null} />
                          {categoryOptions.map(option => (
                            <option key={`option-category-${option}`} value={option}>{option}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div className="form-group">
                      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                      <label htmlFor="category" className="w-100">
                        Tags
                        <select
                          multiple
                          className="form-control"
                          id="tags"
                          name="tags"
                          value={filters.tags}
                          onChange={({ target: { options } }) => {
                            dispatch(updateDebugFilters({ tags: [...options]
                              .reduce((t, o) => (o.selected ? [...t, o.innerText] : t), []),
                            }));
                          }}
                        >
                          {tagsOptions.map(option => (
                            <option key={`option-tag-${option}`} value={option}>{option}</option>
                          ))}
                        </select>
                      </label>
                      <small className="form-check d-block">
                        <label className="form-check-label w-100 text-right" htmlFor="tagsUnion">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="tagsUnion"
                            name="tagsUnion"
                            value={filters.tagsUnion}
                            onChange={handleFilterChange}
                          />
                          Union (tag A ∩ tag B)
                        </label>
                      </small>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="form-check">
                      <label className="form-check-label w-100" htmlFor="hasChoices">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="hasChoices"
                          name="hasChoices"
                          checked={filters.hasChoices}
                          onChange={handleFilterChange}
                        />
                        Has choices
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label w-100" htmlFor="isSkipAble">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="isSkipAble"
                          name="isSkipAble"
                          checked={filters.isSkipAble}
                          onChange={handleFilterChange}
                        />
                        Is skip able
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label w-100" htmlFor="hasCustomStyle">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="hasCustomStyle"
                          name="hasCustomStyle"
                          checked={filters.hasCustomStyle}
                          onChange={handleFilterChange}
                        />
                        Has custom style
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className={classNames('btn btn-link', textWhite)} type="reset" onClick={handleReset}>
                × Reset filters
              </button>
              <button className="btn btn-success" type="submit" disabled={pristine} onClick={handleSubmit}>
                Apply filters
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="debug-filters modal-backdrop animated slideInDown fade show" />
    </>
  );
};

DebugFilters.propTypes = {
  categoryOptions: PropTypes.arrayOf(PropTypes.string),
  isOpen: PropTypes.bool,
  darkMode: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    text: PropTypes.string,
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    category: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    tagsUnion: PropTypes.bool,
    className: PropTypes.string,
    classNameUnion: PropTypes.bool,
    hasChoices: PropTypes.bool,
    isSkipAble: PropTypes.bool,
    hasCustomStyle: PropTypes.bool,
  }).isRequired,
  onClose: PropTypes.func,
  pristine: PropTypes.bool,
  resultCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tagsOptions: PropTypes.arrayOf(PropTypes.string),
};

DebugFilters.defaultProps = {
  categoryOptions: [],
  darkMode: false,
  isOpen: false,
  onClose: () => false,
  pristine: true,
  resultCount: 0,
  tagsOptions: [],
};

export default connect(({ dynamicStory }) => ({
  darkMode: dynamicStory.settings.darkMode,
  filters: dynamicStory.debug.filters,
}))(DebugFilters);
